import re
t = open('src/data/articles.ts', encoding='utf-8').read()

# Get displayCategory for goc-nhin articles
for s in ['tra-sua-goc-nhin-dinh-duong', 'com-tam-goc-nhin-dinh-duong', 'mon-kho-goc-nhin-dinh-duong',
          'banh-mi-goc-nhin-dinh-duong', 'chao-goc-nhin-dinh-duong', 'canh-goc-nhin-dinh-duong',
          'do-chien-goc-nhin-dinh-duong', 'nuoc-cham-goc-nhin-dinh-duong']:
    idx = t.find(f'slug: "{s}"')
    block = t[idx:idx+350]
    dc = re.search(r'displayCategory: "([^"]+)"', block)
    print(f'{s}: dc={dc.group(1) if dc else "MISSING"}')
