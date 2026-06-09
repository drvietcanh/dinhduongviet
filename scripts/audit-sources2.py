import re

f = open('src/data/articles.ts', 'r', encoding='utf-8')
t = f.read()
f.close()

# Find article blocks - they start with '  {' followed by slug
blocks = re.findall(r'  \{\n    slug: "([^"]+)"([\s\S]*?)\n  \},?\n', t)

n_with_sources = 0
n_no_sources = 0
empty_sources = 0

for slug, body in blocks:
    if 'sources: [' in body:
        src_match = re.search(r'sources: \[([^\]]*)\]', body, re.DOTALL)
        if src_match:
            inner = src_match.group(1).strip()
            if inner and len(inner) > 5:
                n_with_sources += 1
            else:
                empty_sources += 1
        else:
            n_no_sources += 1
    else:
        n_no_sources += 1

print(f'Total article blocks: {len(blocks)}')
print(f'With real sources:    {n_with_sources}')
print(f'Empty sources[]:      {empty_sources}')
print(f'No sources field:     {n_no_sources}')
print()
print('Articles missing sources:')
for slug, body in blocks:
    has_src = 'sources:' in body
    if not has_src:
        title_m = re.search(r'title:\s*"([^"]+)"', body)
        title = title_m.group(1)[:60] if title_m else '?'
        print(f'  {slug:45s} {title}')
