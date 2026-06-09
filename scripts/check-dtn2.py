import re

raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()

# Find DTN slugs in articles array
articles_end = raw.rfind('];')
articles_code = raw[:articles_end]
slugs = re.findall(r"slug: '([^']+DKDTN[^']+DK'", articles_code)
print(f"Regex search: found {len(slugs)}")

# Alternative: search for dung-tin-ngay anywhere
dtn_in_file = [line.strip() for line in raw.split('\n') if 'dung-tin-ngay' in line.lower() and 'slug' in line.lower()]
print(f"DTN slug lines: {len(dtn_in_file)}")
for l in dtn_in_file:
    print(f'  {l.strip()[:80]}')
