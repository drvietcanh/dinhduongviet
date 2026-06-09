"""Audit tổng quát articles: check remaining, group by sub-category"""
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

lines = t.split('\n')
articles = []
current = {}

for line in lines:
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        if current.get('slug'):
            articles.append(current)
        current = {'slug': s.split('"')[1]}
    elif current:
        if s.startswith('specialty: "'):
            current['spec'] = s.split('"')[1]
        elif s.startswith('displayCategory: "'):
            current['dc'] = s.split('"')[1]
        elif s.startswith('category: "'):
            current['cat'] = s.split('"')[1]
        elif s.startswith('title: "'):
            current['title'] = s.split('"')[1]
        elif s.startswith('categoryName: "'):
            current['catName'] = s.split('"')[1]

if current.get('slug'):
    articles.append(current)

tq = [a for a in articles if a.get('spec') == 'dinh-duong-tong-quat']
print(f"Tổng số bài trong tổng quát: {len(tq)}\n")

# Categorize
categories = {
    'Ăn lành mạnh (ăn uống khoa học)': [],
    'Giảm cân / tăng cân': [],
    'Phân tích thực phẩm (trứng, sữa, cà phê, dầu...)': [],
    'Hiểu lầm / đừng tin ngay': [],
    'Thực đơn / bữa sáng / bữa tối': [],
    'Vitamin, vi chất, nước': [],
    'Có bệnh nền (nên ở tổng quát)': [],
}

for a in tq:
    s = a['slug']
    ttl = a.get('title', '?')
    
    if any(k in s for k in ['giam-can', 'tang-can', 'beo-phi', 'sai-lam-giam-can', 'che-do-an-giam-can']):
        categories['Giảm cân / tăng cân'].append((s, ttl))
    elif any(k in s for k in ['trung', 'sua-', 'ca-phe', 'dau-an', 'noi-tang', 'rau-cu-dong', 'thuc-pham-giau', 'thuc-pham-giup', 'thuc-pham-bo-sung', 'thuc-pham-kieng']):
        categories['Phân tích thực phẩm (trứng, sữa, cà phê, dầu...)'].append((s, ttl))
    elif any(k in s for k in ['hieu-lam', 'sai-lam', 'hieu-dung', 'nham-lan']):
        categories['Hiểu lầm / đừng tin ngay'].append((s, ttl))
    elif any(k in s for k in ['thuc-don', 'bua-sang', 'bua-toi', 'mon-an-lanh', 'thuc-pham-dinh-duong']):
        categories['Thực đơn / bữa sáng / bữa tối'].append((s, ttl))
    elif any(k in s for k in ['vitamin', 'khoang-chat', 'uong-nuoc', 'thieu-vi-chat', 'bosung']):
        categories['Vitamin, vi chất, nước'].append((s, ttl))
    elif a.get('cat') == 'disease':
        categories['Có bệnh nền (nên ở tổng quát)'].append((s, ttl))
    else:
        categories['Ăn lành mạnh (ăn uống khoa học)'].append((s, ttl))

for cat, items in categories.items():
    if items:
        print(f"\n{'='*60}")
        print(f"📌 {cat} ({len(items)} bài)")
        print(f"{'='*60}")
        for s, ttl in items:
            print(f"  • {s}")
            print(f"    {ttl}")
