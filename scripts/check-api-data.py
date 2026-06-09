import json
import os

# Check what files exist in dist/api
api_dir = r'D:\openclaw\apps\dinh-duong-viet\dist\api'
for f in sorted(os.listdir(api_dir)):
    sz = os.path.getsize(os.path.join(api_dir, f)) / 1024
    print(f'{sz:7.0f} KB  {f}')

print()

# Check what api foods look like
f = r'D:\openclaw\apps\dinh-duong-viet\dist\api\api-foods.json'
if os.path.exists(f):
    data = json.load(open(f, encoding='utf-8'))
    print(f'{len(data)} foods')
    print(f'Sample keys: {list(data[0].keys())}')
    print(f"  name: {data[0]['name']}")
