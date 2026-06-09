import os, glob, re

base = r'D:\openclaw\apps\dinh-duong-viet\src\pages\kien-thuc-dinh-duong'
files = glob.glob(os.path.join(base, '*goc-nhin*'))

print(f'Found {len(files)} goc-nhin articles:')
for f in sorted(files):
    name = os.path.basename(f)
    with open(f, encoding='utf-8') as fh:
        raw = fh.read()
    
    body_start = raw.find('<ArticleLayout')
    body_end = raw.find('</ArticleLayout>', body_start)
    body = raw[body_start:body_end+16]
    sections = body.count('<section') + body.count('<h2') + body.count('<h3') + body.count('## ')
    words = len(re.findall(r'\b\w+\b', body))
    has_conclusion = 'Kết luận' in body or 'kết luận' in body
    has_nutrient_table = 'table' in body.lower() and ('kcal' in body.lower() or 'protein' in body.lower())
    
    ok = 'OK' if sections >= 4 and words >= 300 else 'SHORT'
    
    print(f'  [{ok}] {name:45s} {sections:2d} sections {words:4d} words | konklusion={"ok" if has_conclusion else "---"} | table={"ok" if has_nutrient_table else "---"}')
