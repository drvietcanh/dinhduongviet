import re

text = open('src/data/articles.ts', 'r', encoding='utf-8').read()
slugs = re.findall(r'slug:\s*"([^"]+)"', text)

targets = [
    'suy-thuong-than', 'cuong-can-giap', 'ghep-tang',
    'benh-wilson', 'viem-mach', 'me-day-man',
    'loet-ty-de', 'benh-than-iga'
]

for t in targets:
    found = [s for s in slugs if t in s]
    print(f'{t:25s} -> {"EXISTS: " + found[0] if found else "MISSING"}')
print()
print(f'Total articles: {len(slugs)}')
