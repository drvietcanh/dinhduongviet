import re, os
arts_dir = r'D:\openclaw\apps\dinh-duong-viet\src\pages\kien-thuc-dinh-duong'
for f in sorted(os.listdir(arts_dir)):
    if not f.endswith('.astro') or f == 'index.astro':
        continue
    r = open(os.path.join(arts_dir, f), encoding='utf-8').read()
    if '/cong-cu/' in r:
        print('=== ' + f + ' ===')
        for m in re.finditer(r'.{0,30}/cong-cu/[^\s\"]+.{0,40}', r):
            txt = m.group().strip().replace('\n', ' ')[:120]
            print('  ' + txt)
        print()
