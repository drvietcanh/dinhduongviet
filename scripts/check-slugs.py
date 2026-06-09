import re
raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()

# Find articles array
idx = raw.find('export const articles')
print('articles starts at', idx)
print(raw[idx:idx+400])

# Find end
idx2 = raw.find('\n];', idx)
print('\narticles semi end at', idx2)

# Check slug format
test = raw[idx:idx2]
print('\nFirst 5 slug patterns:')
matches = re.findall(r'slug: "([^"]+)"', test[:500])
for m in matches:
    print(f'  {m}')
print()

all_matches = re.findall(r'slug: "([^"]+)"', test)
print('Total slugs in articles:', len(all_matches))
