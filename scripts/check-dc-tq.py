import re
t = open('src/data/articles.ts', encoding='utf-8').read()

# Check displayCategory for goc-nhin articles  
food_slugs = ['tra-sua-goc-nhin-dinh-duong', 'com-tam-goc-nhin-dinh-duong', 'mon-kho-goc-nhin-dinh-duong',
              'banh-mi-goc-nhin-dinh-duong', 'chao-goc-nhin-dinh-duong', 'canh-goc-nhin-dinh-duong',
              'do-chien-goc-nhin-dinh-duong', 'nuoc-cham-goc-nhin-dinh-duong',
              'nuoc-ep-khong-nhu-trai-cay']
for s in food_slugs:
    idx = t.find(f'slug: "{s}"')
    if idx >= 0:
        block = t[idx:idx+300]
        dc_match = re.search(r'displayCategory:\s*"([^"]+)"', block)
        dc = dc_match.group(1) if dc_match else 'N/A'
        cat_match = re.search(r'category:\s*"([^"]+)"', block)
        cat = cat_match.group(1) if cat_match else 'N/A'
        print(f'  {s}: dc={dc}, cat={cat}')
