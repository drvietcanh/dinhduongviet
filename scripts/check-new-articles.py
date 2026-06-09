import os, glob, re

base = r'D:\openclaw\apps\dinh-duong-viet\src\pages\kien-thuc-dinh-duong'
slugs_to_check = [
    'dinh-duong-ung-thu-vu', 'dinh-duong-ung-thu-dai-trang',
    'dinh-duong-eczema-viem-da-co-dia', 'dinh-duong-xo-cung-bi',
    'dinh-duong-viem-xoang', 'dinh-duong-benh-thien-sach-hemophilia',
    'dinh-duong-sau-nhau-mau-co-tim', 'dinh-duong-tram-cam',
    'dinh-duong-ma-kinh', 'dinh-duong-tre-bieng-an-suy-dinh-duong',
    'benh-addison-suy-thuong-than', 'benh-than-iga-dinh-duong',
    'benh-wilson-dinh-duong', 'dinh-duong-loet-ty-de',
    'dinh-duong-sau-ghep-tang', 'viem-mach-dinh-duong',
    'me-day-man-dinh-duong', 'cuong-can-giap',
]

for slug in slugs_to_check:
    f = os.path.join(base, slug + '.astro')
    if not os.path.exists(f):
        print(f'  **NOT FOUND** {slug}')
        continue
    with open(f, encoding='utf-8') as fh:
        raw = fh.read()
    start = raw.find('<ArticleLayout')
    end = raw.find('</ArticleLayout>', start)
    body = raw[start:end+16] if start >= 0 else raw[200:]
    sections = body.count('<section') + body.count('<h2') + body.count('<h3') + body.count('## ')
    words = len(re.findall(r'\b\w+\b', body))
    
    has_import = 'import { articleBySlug }' in raw
    use = 'import' if has_import else 'inline'
    
    if sections >= 5 and words >= 500:
        st = 'OK'
    elif sections >= 3:
        st = 'SHORT'
    else:
        st = 'EMPTY'
    
    print(f'  [{st:5s}] {slug:50s} {sections:2d} sections {words:4d} words [{use}]')
