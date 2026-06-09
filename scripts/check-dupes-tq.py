import re
t = open('src/data/articles.ts', encoding='utf-8').read()

pairs = [('chon-dau-an', 'chon-dau-an-lanh-manh'),
         ('nuoc-ep-khong-nhu-trai-cay', 'canh-bao-hieu-lam-nuoc-ep-trai-cay'),
         ('doc-nhan-dinh-duong', 'doc-nhan-thuc-pham'),
         ('bua-sang-lanh-manh-kieu-viet', 'bua-sang-lanh-manh'),
         ('dau-an-mo-heo', 'chon-dau-an')]

for a, b in pairs:
    def get_title(slug):
        idx = t.find(f'slug: "{slug}"')
        if idx < 0:
            return None, 'NOT FOUND'
        tidx = t.find('title: "', idx)
        tend = t.find('",', tidx)
        title = t[tidx+8:tend]
        return idx, title
    
    idx_a, title_a = get_title(a)
    idx_b, title_b = get_title(b)
    
    print(f'\n  {a}: "{title_a}"')
    print(f'  {b}: "{title_b}"')
    if title_a == title_b:
        print('  ⚠️ DUPLICATE!')
    elif title_a and title_b:
        print('  ✅ Khác nhau')

# Check other potential issues - articles with "thực phẩm giàu" or "thực phẩm giúp" that might be disease-specific
search_terms = ['an-quan-khi-benh-nen', 'goi-mon-tiec-cuoi', 'dinh-duong-sau-phau-thuat']
print('\n--- Kiểm tra bài có thể chuyển chuyên khoa ---')
for s in search_terms:
    idx = t.find(f'slug: "{s}"')
    if idx >= 0:
        spec_idx = t.find('specialty: "', idx)
        spec_end = t.find('",', spec_idx)
        spec = t[spec_idx+11:spec_end]
        print(f'  {s}: specialty = {spec}')
