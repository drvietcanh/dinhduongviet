import re, os
raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', 'r', encoding='utf-8').read()

# Find the marked render section
idx = raw.find('set:html')
print('=== set:html section ===')
print(raw[max(0,idx-50):idx+100])

# Check for table-responsive class
print('\n=== table-wrap/table-responsive ===')
print('table-wrap:', raw.count('table-wrap'))
print('table-responsive:', raw.count('table-responsive'))
print('overflow:', raw.count('overflow-auto'), raw.count('overflow-x'))
