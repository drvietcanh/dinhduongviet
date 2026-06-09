import re

f = open('src/data/articles.ts', 'r', encoding='utf-8')
t = f.read()
f.close()

# Find article blocks - they start with '  {' followed by slug
# Use the slug positions more precisely
slugs = [m.group(1) for m in re.finditer(r'slug: "([^"]+)"', t)]
print(f'Total slugs found: {len(slugs)}')

# Count blocks with and without sources
n_src = 0
n_no = 0

for i, slug in enumerate(slugs):
    pos = t.find(f'slug: "{slug}"')
    # Find end of block
    if i + 1 < len(slugs):
        next_pos = t.find(f'slug: "{slugs[i+1]}")', pos + 10)
        if next_pos == -1:
            next_pos = t.find(f'\n    slug: "', pos + 10)
    else:
        next_pos = t.find('\n];\n\n// Index by slug', pos)
        if next_pos == -1:
            next_pos = len(t)
    
    block = t[pos:next_pos] if next_pos > pos else t[pos:pos+500]
    
    if 'sources:' in block:
        # Check it's not empty
        src_match = re.search(r'sources:\s*\[([^\]]*)\]', block, re.DOTALL)
        if src_match and len(src_match.group(1).strip()) > 5:
            n_src += 1
        else:
            n_no += 1
    else:
        n_no += 1

print(f'With sources:       {n_src}')
print(f'Without/empty:      {n_no}')

if n_no > 0:
    print('\nMissing:')
    for i, slug in enumerate(slugs):
        pos = t.find(f'slug: "{slug}"')
        if i + 1 < len(slugs):
            next_pos = t.find(f'\n    slug: "', pos + 10)
        else:
            next_pos = t.find('\n];\n\n// Index by slug', pos)
            if next_pos == -1:
                next_pos = len(t)
        block = t[pos:next_pos] if next_pos > pos else t[pos:pos+500]
        if 'sources:' not in block:
            print(f'  {slug}')
