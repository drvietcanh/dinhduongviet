html = open(r'D:\openclaw\apps\dinh-duong-viet\dist\thuc-pham\index.html', encoding='utf-8').read()
# Find patterns of food-card
idx = html.find('food-card')
print('First food-card occurrence:')
print(html[idx:idx+500])
print()
# Count occurrences
print('Total food-card in HTML:', html.count('food-card'))
import re
# Find href attributes for food pages
links = re.findall(r'href="/thuc-pham/[^"]+"', html)
print(f'Food links: {len(links)}')
if links:
    print(f'First: {links[0]}')
