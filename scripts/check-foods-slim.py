import json

f = r'D:\openclaw\apps\dinh-duong-viet\dist\api\foods-slim.json'
data = json.load(open(f, encoding='utf-8'))
print(f'{len(data)} items')
print(f'Sample: {data[0]}')
print(f'Sample keys: {list(data[0].keys()) if isinstance(data[0], dict) else "list of arrays"}')
