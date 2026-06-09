import re, json

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the articles array — everything between 'export const articles: ArticleMeta[] = [' and the last '];'
start_idx = text.find('export const articles: ArticleMeta[] = [')
end_idx = text.rfind('];')
if start_idx == -1 or end_idx == -1:
    print("Cannot find articles array")
    exit(1)

header = text[:start_idx]
articles_body = text[start_idx:end_idx+2]
tail = text[end_idx+2:]

# Remove the export line from header if tail has functions
if 'articleBySlug' in tail:
    # Good, functions are after the array
    pass
elif 'articleBySlug' in header:
    # Functions are in header before array — need to move them
    fn_start = header.find('// Index by slug')
    if fn_start > 0:
        tail = header[fn_start:] + '\n' + tail
        header = header[:fn_start]

# Now clean the articles body
# Strategy: find all valid article blocks (from { to },) and rebuild
# First, find all slug occurrences and reconstruct around them

article_starts = [m.start() for m in re.finditer(r'\{\s*\n\s+slug:\s*["\x27]', articles_body)]

# If we can't find proper starts, try looking for just 'slug:' preceded by '{'
if not article_starts:
    article_starts = []
    for m in re.finditer(r'slug:\s*["\x27]([^"\x27]+)["\x27]', articles_body):
        # Find the nearest '{' before this slug
        pos = m.start()
        brace = articles_body.rfind('{', pos-200, pos)
        if brace >= 0:
            article_starts.append(brace)
    
    if article_starts:
        article_starts = sorted(set(article_starts))

print(f'Found {len(article_starts)} article starts')

# Extract each article block
articles_raw = []
for i, start in enumerate(article_starts):
    end = article_starts[i+1] if i+1 < len(article_starts) else len(articles_body) - 2
    block = articles_body[start:end]
    
    # Find where this article ends (the }, that closes it)
    # Look for }, that isn't part of a sources block
    # Simple approach: find the last line that starts with spaces and is '},'
    lines = block.split('\n')
    closing_line_idx = -1
    for k in range(len(lines)-1, -1, -1):
        stripped = lines[k].strip()
        if stripped == '},':
            closing_line_idx = k
            break
    
    if closing_line_idx >= 0:
        article_text = '\n'.join(lines[:closing_line_idx+1])
    else:
        article_text = block
    
    articles_raw.append(article_text)

# Extract structured data from each article block
def extract_article_data(block):
    data = {}
    # Remove comments
    block_clean = re.sub(r'//.*', '', block)
    
    # Extract simple fields
    for field in ['slug', 'title', 'description', 'emoji', 'category', 'categoryName', 
                  'displayCategory', 'date', 'series', 'specialty']:
        m = re.search(f'{field}:\s*["\x27]([^"\x27]*)["\x27]', block_clean)
        if m:
            data[field] = m.group(1)
    
    # Extract readTime
    m = re.search(r'readTime:\s*(\d+)', block_clean)
    if m:
        data['readTime'] = int(m.group(1))
    
    # Extract arrays
    m = re.search(r'tags:\s*\[([^\]]*)\]', block_clean)
    if m:
        data['tags'] = [t.strip().strip('"').strip("'") for t in m.group(1).split(',') if t.strip()]
    
    m = re.search(r'audience:\s*\[([^\]]*)\]', block_clean)
    if m:
        data['audience'] = [t.strip().strip('"').strip("'") for t in m.group(1).split(',') if t.strip()]
    
    m = re.search(r'keywords:\s*\[([^\]]*)\]', block_clean)
    if m:
        data['keywords'] = [t.strip().strip('"').strip("'") for t in m.group(1).split(',') if t.strip()]
    
    # Extract boolean fields
    data['featured'] = 'featured: true' in block_clean
    
    # Extract sources
    sources = []
    src_matches = re.finditer(r'\{\s*name:\s*["\x27]([^"\x27]*)["\x27][^}]*url:\s*["\x27]([^"\x27]*)["\x27]\s*\}', block)
    for sm in src_matches:
        sources.append({'name': sm.group(1), 'url': sm.group(2)})
    if sources:
        data['sources'] = sources
    
    return data

# Generate clean TypeScript for each article
def format_article(data):
    lines = []
    lines.append('  {')
    
    if 'slug' in data:
        lines.append(f'    slug: "{data["slug"]}",')
    if 'title' in data:
        lines.append(f'    title: "{data["title"]}",')
    if 'description' in data:
        lines.append(f'    description: "{data["description"]}",')
    if 'emoji' in data:
        lines.append(f'    emoji: "{data["emoji"]}",')
    if 'category' in data:
        lines.append(f'    category: "{data["category"]}",')
    if 'categoryName' in data:
        lines.append(f'    categoryName: "{data["categoryName"]}",')
    if 'displayCategory' in data:
        lines.append(f'    displayCategory: "{data["displayCategory"]}",')
    if 'specialty' in data:
        lines.append(f'    specialty: "{data["specialty"]}",')
    if 'date' in data:
        lines.append(f'    date: "{data["date"]}",')
    if 'readTime' in data:
        lines.append(f'    readTime: {data["readTime"]},')
    
    lines.append(f'    featured: {str(data.get("featured", False)).lower()},')
    
    if 'tags' in data and data['tags']:
        lines.append(f'    tags: [{", ".join(f"{chr(34) + t + chr(34)}" for t in data["tags"])}],')
    if 'audience' in data and data['audience']:
        lines.append(f'    audience: [{", ".join(f"{chr(34) + a + chr(34)}" for a in data["audience"])}],')
    
    if 'series' in data:
        lines.append(f'    series: "{data["series"]}",')
    
    if 'sources' in data and data['sources']:
        sources_str = ', '.join(f'{{ name: "{s["name"]}", url: "{s["url"]}" }}' for s in data['sources'])
        lines.append(f'    sources: [{sources_str}],')
    
    if 'keywords' in data and data['keywords']:
        keywords_str = ', '.join(f'"{k}"' for k in data['keywords'])
        lines.append(f'    keywords: [{keywords_str}],')
    
    lines.append('  },')
    return '\n'.join(lines)

# Rebuild the file
new_articles = []
for block in articles_raw:
    data = extract_article_data(block)
    new_articles.append(format_article(data))

new_text = header + '\n'
new_text += 'export const articles: ArticleMeta[] = [\n'
new_text += '\n'.join(new_articles)
new_text += '];\n'
new_text += tail

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

# Verify
slugs = len(re.findall(r'slug:\s*["\x27][^"\x27]+["\x27]', new_text))
specs = len(re.findall(r'specialty:\s*["\x27][^"\x27]+["\x27]', new_text))
print(f'Rebuilt: {slugs} articles, {specs} specialties')
print('File written')
