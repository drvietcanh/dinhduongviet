"""Check displayCategory assignments for tong-quat articles"""
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

# For each article in tq, find slug and displayCategory
lines = t.split('\n')
current = {}
tq_data = []

for line in lines:
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        if current.get('slug'):
            tq_data.append(current)
        current = {'slug': s.split('"')[1]}
    elif current:
        if s.startswith('specialty: "'):
            current['spec'] = s.split('"')[1]
        elif s.startswith('displayCategory: "'):
            current['dc'] = s.split('"')[1]
        elif s.startswith('series: "'):
            current['series'] = s.split('"')[1]
        elif s.startswith('tags: ['):
            # Capture raw tags
            current['tags_raw'] = s

if current.get('slug'):
    tq_data.append(current)

print("Tổng quát articles with displayCategory:")
print("=" * 60)
for a in tq_data:
    if a.get('spec') == 'dinh-duong-tong-quat':
        dc = a.get('dc', 'NONE')
        series = a.get('series', '')
        extra = f" [series={series}]" if series else ""
        print(f"  • {a['slug']:40s} → {dc}{extra}")
