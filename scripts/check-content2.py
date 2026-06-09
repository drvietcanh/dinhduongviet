import os, re, glob

base = r'D:\openclaw\apps\dinh-duong-viet\src\pages\kien-thuc-dinh-duong'
results = []

for f in sorted(glob.glob(os.path.join(base, '*.astro'))):
    name = os.path.basename(f)
    with open(f, encoding='utf-8') as fh:
        raw = fh.read()
    
    # Find ArticleLayout content
    start = raw.find('<ArticleLayout')
    end = raw.find('</ArticleLayout>', start)
    if start < 0 or end < 0:
        continue
    
    body = raw[start:end+16]
    lines = body.count('\n') + 1
    sections = body.count('<section') + body.count('<h2') + body.count('<h3')
    words = len(body.split())
    
    if words < 200:
        results.append((name, lines, sections, words))

print(f'Found {len(results)} articles with <200 words content:\n')
for f, l, s, w in sorted(results, key=lambda x: x[3]):
    print(f'  {f:50s} {l:3d} lines {s:2d} sections {w:4d} words')
