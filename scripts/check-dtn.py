import re

raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()

# Find existing DTN slugs
for m in re.finditer(r"slug: '(dung-tin-ngay[^']+)'", raw):
    print(m.group(1))

print()
# Find last article entry before functions
idx = raw.rfind('];')
before = raw[:idx]
last_slug = re.findall(r"slug: '([^']+)'", before)
if last_slug:
    print(f'Last slug in articles: {last_slug[-1]}')
    print(f'Total articles: {len(last_slug)}')

# Find the index page to add links
dtn_idx = open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\dung-tin-ngay\index.astro', encoding='utf-8').read()
print()
print(f'DTN index contains {dtn_idx.count("dung-tin-ngay-")} links')
