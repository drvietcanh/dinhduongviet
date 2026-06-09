import re

text = open('src/data/articles.ts', 'r', encoding='utf-8').read()

# Find all article blocks - find from "slug:" to the next "slug:" or end
pattern = r'slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?specialty:\s*"([^"]+)"'
articles = re.findall(pattern, text)
print(f'Total articles: {len(articles)}')
print()

# Group by specialty
from collections import defaultdict
by_spec = defaultdict(list)
for s, t, sp in articles:
    by_spec[sp].append((s, t))

for sp in sorted(by_spec.keys()):
    items = by_spec[sp]
    print(f'\n=== {sp} ({len(items)}) ===')
    for s, t in sorted(items):
        print(f'  {s:45s} {t[:70]}')
