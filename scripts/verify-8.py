import re

text = open('src/data/articles.ts', 'r', encoding='utf-8').read()
slugs = re.findall(r'slug:\s*"([^"]+)"', text)

targets = [
    'benh-addison-suy-thuong-than', 'cuong-can-giap',
    'dinh-duong-sau-ghep-tang', 'benh-wilson-dinh-duong',
    'viem-mach-dinh-duong', 'me-day-man-dinh-duong',
    'dinh-duong-loet-ty-de', 'benh-than-iga-dinh-duong'
]
for t in targets:
    print(f'{"✅" if t in slugs else "❌"} {t}')

print(f'\nTotal articles: {len(slugs)}')
print(f'Expected: 185 (177 + 8)')
