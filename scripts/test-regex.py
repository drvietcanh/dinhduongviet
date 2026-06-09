import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

# Test regex
pattern = r'(slug:\s*"' + re.escape('com-trang-tieu-duong') + r'"[\s\S]*?)(specialty:\s*)"([^"]+)"'
m = re.search(pattern, t)
if m:
    print('MATCHED:', m.group(3))
else:
    print('NO MATCH')
    pos = t.find('com-trang-tieu-duong')
    if pos > 0:
        print(f'Found at {pos}')
        print(t[pos:pos+300])
