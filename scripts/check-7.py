import os, glob, re
slugs = ['dinh-duong-eczema-viem-da-co-dia','dinh-duong-xo-cung-bi','dinh-duong-viem-xoang','dinh-duong-benh-thien-sach-hemophilia','dinh-duong-sau-nhau-mau-co-tim','dinh-duong-tram-cam','dinh-duong-ma-kinh']
for s in slugs:
    raw=open(s+'.astro',encoding='utf-8').read()
    start=raw.find('<ArticleLayout')
    end=raw.find('</ArticleLayout>',start)
    body=raw[start:end+16]
    w=len(re.findall(r'\b\w+\b',body))
    ok = 'OK' if w >= 600 else 'SHORT'
    print(f'{s:55s} {w:4d} words [{ok}]')
