import re, os

raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()

# Find the last article entry before '];'
articles_end = raw.find('\n];')
before = raw[:articles_end]

# Find last slug
slugs = re.findall(r"slug: '([^']+)'", before)
print(f'Current articles: {len(slugs)}')
print(f'Last slug: {slugs[-1]}')

# Check DTN entries
dtn_slugs = [s for s in slugs if 'dung-tin-ngay' in s]
print(f'DTN entries: {len(dtn_slugs)}')
for s in dtn_slugs:
    print(f'  {s}')
