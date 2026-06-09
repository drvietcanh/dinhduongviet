import os, glob, re

base = r'D:\openclaw\apps\dinh-duong-viet\src\pages\kien-thuc-dinh-duong'
results = []

for f in sorted(glob.glob(os.path.join(base, '*.astro'))):
    name = os.path.basename(f)
    with open(f, encoding='utf-8') as fh:
        raw = fh.read()
    
    # Find content after ArticleLayout opening
    start = raw.find('<ArticleLayout')
    end = raw.find('</ArticleLayout>', start)
    if start < 0 or end < 0:
        continue
    
    body = raw[start:end+16]
    # Count sections (both HTML and markdown style)
    sections = body.count('<section') + body.count('<h2') + body.count('## ')
    words = len(re.findall(r'\b\w+\b', body))
    
    if words < 100:
        results.append((name, sections, words))

print(f'Found {len(results)} articles with <100 words of actual content:\n')
for f, s, w in sorted(results, key=lambda x: x[2]):
    print(f'  {f:50s} {s:2d} sections {w:4d} words')
