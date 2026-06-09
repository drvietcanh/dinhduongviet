import re
f = open('src/data/articles.ts', 'r', encoding='utf-8')
t = f.read()
f.close()

specs = re.findall(r'specialty: "([^"]+)"', t)
from collections import Counter
for s, c in sorted(Counter(specs).items()):
    print(f"  {s}: {c}")
    
tq_slugs = re.findall(r'slug: "([^"]+)"\n(?:.*\n)*?\s*specialty: "dinh-duong-tong-quat"', t)
print(f"\nSlugs in tổng quát: {len(tq_slugs)}")
for s in tq_slugs:
    print(f"  {s}")
