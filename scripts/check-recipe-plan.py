import re, json

with open(r'D:\openclaw\apps\dinh-duong-viet\dist\cong-cu\lap-thuc-don-tuan\index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Check recipe-data-store div
idx = c.find('recipe-data-store')
if idx >= 0:
    print(f'Found recipe-data-store at position {idx}')
    print(c[idx:idx+300])
else:
    print('recipe-data-store NOT found')
