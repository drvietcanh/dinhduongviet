"""Find lifestyle articles (an-lanh-manh/bai-viet in tong-quat) that need standardization"""
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

if current.get('slug'):
    articles.append(current)

# Find lifestyle articles in tong-quat (not disease, not food, not menu, not dtn)
target = [a for a in articles 
    if a.get('spec') == 'dinh-duong-tong-quat' 
    and a.get('dc') in ('bai-viet', None)
    and a.get('cat') not in ('disease',)]  # Exclude disease articles still in tq

print(f"Lifestyle articles in tổng quát needing standardization: {len(target)}\n")
for a in target:
    print(f"  • {a['slug']}")
    print(f"    Title: {a.get('title', '?')}")
    print(f"    DC: {a.get('dc', 'N/A')} Cat: {a.get('cat', 'N/A')}")
    print()
