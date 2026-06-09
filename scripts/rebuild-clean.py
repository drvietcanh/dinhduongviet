import re
import json

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the articles array
start_idx = text.find('export const articles: ArticleMeta[] = [')
end_idx = text.rfind('];')
if start_idx == -1 or end_idx == -1:
    print("Cannot find articles array")
    exit(1)

header = text[:start_idx]
articles_body = text[start_idx:end_idx+2]
tail = text[end_idx+2:]

# Move functions section from header to tail if needed
if 'articleBySlug' in header:
    fn_start = header.find('// Index by slug')
    if fn_start > 0:
        tail = header[fn_start:] + '\n' + tail
        header = header[:fn_start]

# Find all article blocks using regex
article_starts = []
for m in re.finditer(r'slug:\s*[\x22\x27]([^\x22\x27]+)[\x22\x27]', articles_body):
    pos = m.start()
    brace = articles_body.rfind('{', pos-200, pos)
    if brace >= 0:
        article_starts.append(brace)

article_starts = sorted(set(article_starts))
print(f'Found {len(article_starts)} article starts')

# Extract each article block
articles_raw = []
for i, start in enumerate(article_starts):
    end = article_starts[i+1] if i+1 < len(article_starts) else len(articles_body) - 2
    block = articles_body[start:end]
    
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

def extract_field(text, field):
    pattern = re.compile(rf'{field}:\s*[\x22\x27]([^\x22\x27]*)[\x22\x27]')
    m = pattern.search(text)
    return m.group(1) if m else None

def extract_int(text, field):
    m = re.search(rf'{field}:\s*(\d+)', text)
    return int(m.group(1)) if m else None

def extract_array(text, field):
    m = re.search(rf'{field}:\s*\[([^\]]*)\]', text)
    if m:
        items = []
        raw = m.group(1)
        for t in re.findall(r'[\x22\x27]([^\x22\x27]+)[\x22\x27]', raw):
            items.append(t.strip())
        return items
    return None

def extract_sources(text):
    sources = []
    for m in re.finditer(r'\{\s*name:\s*[\x22\x27]([^\x22\x27]*)[\x22\x27][^}]*url:\s*[\x22\x27]([^\x22\x27]*)[\x22\x27]\s*\}', text):
        sources.append({'name': m.group(1), 'url': m.group(2)})
    return sources

def q(s):
    """Quote a string for TypeScript"""
    return '"' + s.replace('"', '\\"') + '"'

def format_article(data):
    lines = []
    lines.append('  {')
    
    for field in ['slug', 'title', 'description', 'emoji', 'category', 'categoryName', 
                  'displayCategory', 'specialty', 'date', 'series']:
        val = data.get(field)
        if val:
            lines.append('    ' + field + ': ' + q(val) + ',')
    
    rt = data.get('readTime')
    if rt is not None:
        lines.append('    readTime: ' + str(rt) + ',')
    
    feat = data.get('featured', False)
    lines.append('    featured: ' + ('true' if feat else 'false') + ',')
    
    tags = data.get('tags')
    if tags:
        quoted = ', '.join(q(t) for t in tags)
        lines.append('    tags: [' + quoted + '],')
    
    audience = data.get('audience')
    if audience:
        quoted = ', '.join(q(a) for a in audience)
        lines.append('    audience: [' + quoted + '],')
    
    sources = data.get('sources')
    if sources:
        src_strs = []
        for s in sources:
            src_strs.append('{ name: ' + q(s['name']) + ', url: ' + q(s['url']) + ' }')
        lines.append('    sources: [' + ', '.join(src_strs) + '],')
    
    keywords = data.get('keywords')
    if keywords:
        quoted = ', '.join(q(k) for k in keywords)
        lines.append('    keywords: [' + quoted + '],')
    
    lines.append('  },')
    return '\n'.join(lines)

# Rebuild
new_articles = []
errors = 0
for block in articles_raw:
    data = {}
    
    for field in ['slug', 'title', 'description', 'emoji', 'category', 'categoryName',
                  'displayCategory', 'date', 'series', 'specialty']:
        val = extract_field(block, field)
        if val:
            data[field] = val
    
    data['readTime'] = extract_int(block, 'readTime') or 5
    data['featured'] = 'featured: true' in block
    
    tags = extract_array(block, 'tags')
    if tags:
        data['tags'] = tags
    
    audience = extract_array(block, 'audience')
    if audience:
        data['audience'] = audience
    
    keywords = extract_array(block, 'keywords')
    if keywords:
        data['keywords'] = keywords
    
    sources = extract_sources(block)
    if sources:
        data['sources'] = sources
    
    if not data.get('slug'):
        errors += 1
        continue
    
    new_articles.append(format_article(data))

print(f'Errors: {errors}')

# Write the file
new_text = header + '\n'
new_text += 'export const articles: ArticleMeta[] = [\n'
new_text += '\n'.join(new_articles)
new_text += '\n'
new_text += '];\n'
new_text += tail

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

# Verify
slugs = len(re.findall(r'slug:\s*[\x22\x27][^\x22\x27]+[\x22\x27]', new_text))
specs = len(re.findall(r'specialty:\s*[\x22\x27][^\x22\x27]+[\x22\x27]', new_text))
print(f'Written: {slugs} articles, {specs} specialties')
