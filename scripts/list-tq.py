import re
f = open('src/data/articles.ts', 'r', encoding='utf-8')
t = f.read()
f.close()

lines = t.split('\n')
current_slug = None
current_spec = None
tq_slugs = []

for line in lines:
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        current_slug = s.split('"')[1]
        current_spec = None
    elif s.startswith('specialty: "'):
        current_spec = s.split('"')[1]
        if current_slug and current_spec == 'dinh-duong-tong-quat':
            tq_slugs.append(current_slug)

print(f"Tổng quát articles: {len(tq_slugs)}")
for s in tq_slugs:
    print(f"  {s}")
