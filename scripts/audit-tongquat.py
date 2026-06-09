"""Audit articles in tong-quat to plan sub-categories"""
with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

lines = t.split('\n')
all_articles = []
current = None
for i, line in enumerate(lines):
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        if current is not None:
            all_articles.append(current)
        current = {'slug': s.split('"')[1]}
    elif current is not None:
        if s.startswith('specialty: "'):
            current['spec'] = s.split('"')[1]
        elif s.startswith('displayCategory: "'):
            current['dc'] = s.split('"')[1]
        elif s.startswith('category: "'):
            current['cat'] = s.split('"')[1]
        elif s.startswith('series: "'):
            current['series'] = s.split('"')[1]

if current is not None:
    all_articles.append(current)

tq_articles = [a for a in all_articles if a.get('spec') == 'dinh-duong-tong-quat']

# Classify
cats = {
    '🥗 Ăn lành mạnh': [],
    '🍜 Món ăn & Thực phẩm': [],
    '📋 Thực đơn mẫu': [],
    '🔍 Đừng Tin Ngay / Hiểu lầm': [],
    '🧳 Lối sống & Thói quen': [],
    '🏥 Chăm sóc đặc biệt': [],
}

for a in tq_articles:
    slug = a.get('slug','')
    dc = a.get('dc','')
    series = a.get('series','')
    cat = a.get('cat','')
    
    if series == 'dung-tin-ngay':
        cats['🔍 Đừng Tin Ngay / Hiểu lầm'].append(a)
    elif slug in ('doc-nhan-dinh-duong', 'doc-nhan-thuc-pham'):
        cats['🥗 Ăn lành mạnh'].append(a)
    elif cat == 'food' or dc == 'mon-an':
        cats['🍜 Món ăn & Thực phẩm'].append(a)
    elif dc == 'thuc-don':
        cats['📋 Thực đơn mẫu'].append(a)
    elif slug in ('giam-muoi-mon-ngon', 'di-cho-tieu-duong'):
        cats['🍜 Món ăn & Thực phẩm'].append(a)
    elif slug in ('an-tet-nguoi-benh','an-du-lich-benh-nen','mam-com-gia-dinh-benh-nen','an-ca-kip-truc','an-khuya-va-nhin-an-gian-doan','an-ngoai-hang-quan','an-quan-khi-benh-nen','goi-mon-tiec-cuoi'):
        cats['🧳 Lối sống & Thói quen'].append(a)
    elif slug in ('suy-dinh-duong-nguoi-benh','dinh-duong-sau-phau-thuat','dinh-duong-cho-nguoi-kho-nuot','dinh-duong-thieu-ke-kem','met-moi-thieu-chat','rung-toc-thieu-chat','chuot-rut-thieu-chat','them-dam-nguoi-gia','chon-sua-nguoi-gia','tao-bon-nguoi-cao-tuoi','dinh-duong-nguoi-cao-tuoi','chan-an-nguoi-cao-tuoi'):
        cats['🏥 Chăm sóc đặc biệt'].append(a)
    else:
        cats['🥗 Ăn lành mạnh'].append(a)

print("=" * 60)
print("TỔNG QUÁT — PHÂN LOẠI ĐỀ XUẤT")
print("=" * 60)
for cat, items in cats.items():
    if items:
        print(f"\n📁 {cat} ({len(items)} bài):")
        for a in items:
            dc_info = f" [{a.get('dc','')}]" if a.get('dc') else ''
            print(f"   • {a['slug']}{dc_info}")

total = sum(len(v) for v in cats.values())
print(f"\nTổng: {total} bài (trong tổng quát)")
