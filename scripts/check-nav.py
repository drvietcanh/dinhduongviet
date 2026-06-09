import re
raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\BaseLayout.astro', encoding='utf-8').read()

# Find nav-links in HTML part (not CSS)
idx = raw.find('nav-links')
print('=== nav-links HTML ===')
print(raw[idx:idx+800])

print('\n=== hamburger toggles ===')
for m in re.finditer(r'(id|class)="[^"]*hamburger[^"]*"', raw):
    print(m.group())

for m in re.finditer(r'(id|class)="[^"]*nav-toggle[^"]*"', raw):
    print(m.group())
