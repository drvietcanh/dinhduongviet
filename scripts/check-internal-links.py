import os, glob, re

base = r'D:\openclaw\apps\dinh-duong-viet\src\pages\kien-thuc-dinh-duong'
for f in sorted(glob.glob(os.path.join(base, '*.astro')))[:10]:
    name = os.path.basename(f)
    with open(f, encoding='utf-8') as fh:
        raw = fh.read()
    urls = re.findall(r'href=[\'"](/(?:kien-thuc-dinh-duong|cong-cu|dung-tin-ngay)[^\'"]+)', raw)
    print(f'{name:50s} {len(urls)} internal links')
