import re
t = open('src/data/articles.ts', encoding='utf-8').read()

# Check near-duplicates that should merge
suspects = {
    'chon-dau-an-lanh-manh': 'chon-dau-an',
    'canh-bao-hieu-lam-nuoc-ep-trai-cay': 'nuoc-ep-khong-nhu-trai-cay',
}

for keeper, dupe in suspects.items():
    ki = t.find(f'slug: "{keeper}"')
    di = t.find(f'slug: "{dupe}"')
    
    if ki < 0 or di < 0:
        continue
        
    # Get specialty
    for name, idx in [('keeper', ki), ('dupe', di)]:
        sp = t.find('specialty: "', idx)
        spe = t.find('",', sp)
        spec = t[sp+11:spe]
        cat = t.find('category: "', idx)
        cate = t.find('",', cat)
        catv = t[cat+10:cate]
        print(f'{name}: {locals()[name]} — spec={spec}, cat={catv}')
    
    print()

# Also check if những bài này missing from knowledge index
# The knowledge index /kien-thuc-dinh-duong/index.astro filters by displayCategory
# Let's check how it renders tổng quát
print('--- Articles that are food-analysis style (might be better as mon-an subcat) ---')
food_items = ['tra-sua-goc-nhin-dinh-duong', 'com-tam-goc-nhin-dinh-duong', 'mon-kho-goc-nhin-dinh-duong',
              'banh-mi-goc-nhin-dinh-duong', 'chao-goc-nhin-dinh-duong', 'canh-goc-nhin-dinh-duong',
              'do-chien-goc-nhin-dinh-duong', 'nuoc-cham-goc-nhin-dinh-duong']
for s in food_items:
    idx = t.find(f'slug: "{s}"')
    if idx >= 0:
        dc = t.find('displayCategory: "', idx)
        dce = t.find('",', dc)
        dcv = t[dc+17:dce] if dc > 0 and dc < idx+200 else '?'
        print(f'  {s}: displayCategory={dcv}')
