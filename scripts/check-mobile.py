import re
raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\BaseLayout.astro', encoding='utf-8').read()

# Find @media hamburger section
idx = raw.find('hamburger { display')
print('=== hamburger CSS ===')
print(raw[max(0,idx-100):idx+300])

# Show as both CSS and HTML
idx2 = raw.find('class="hamburger"')
print('\n=== hamburger HTML ===')
print(raw[idx2-200:idx2+300])

# Find mobile nav menu
idx3 = raw.find('mobile-menu')
if idx3 == -1:
    idx3 = raw.find('nav-links', idx2)
    print('\n=== nav-links container HTML ===')
    print(raw[idx3-200:idx3+300])

# Find responsive rules
for m in re.finditer(r'@media\s*\([^)]*\)\s*\{', raw):
    start = m.start()
    # Get content until next @media or end of this block
    print(f'\n=== Rule at pos {start} ===')
    print(raw[start:start+200])
