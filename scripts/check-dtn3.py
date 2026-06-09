import re

raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()

# Simple count of dung-tin-ngay references
count = raw.count("dung-tin-ngay")
print(f"'dung-tin-ngay' in articles.ts: {count} times")

# Count article blocks by 'slug:' before '];'
articles_end = raw.find('\n];')
if articles_end < 0:
    articles_end = raw.rfind('];')
article_section = raw[:articles_end]

# Simple line-by-line check
lines = article_section.split('\n')
slug_lines = [l.strip() for l in lines if 'slug:' in l and 'dung-tin-ngay' in l]
print(f'DTN slug lines: {len(slug_lines)}')
for l in slug_lines:
    print(f'  {l.strip()[:80]}')

# Check index.astro
dtn_idx = open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\dung-tin-ngay\index.astro', encoding='utf-8').read()
print(f'\nDTN index pages referenced:')
for m in re.findall(r'/([\w-]+)', dtn_idx):
    if 'dung-tin-ngay-' in m:
        print(f'  {m}')
