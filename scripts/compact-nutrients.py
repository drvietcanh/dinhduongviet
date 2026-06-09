import json, os

FILEPATH = r'D:\openclaw\apps\dinh-duong-viet\public\api\vietnam-nutrients.json'
data = json.load(open(FILEPATH, encoding='utf-8'))

# Group by food id
foods = {}
for item in data:
    fid = item['id']
    if fid not in foods:
        foods[fid] = {
            'id': fid,
            'stt': item['stt'],
            'code': item['code'],
            'name_vi': item['name_vi'],
            'nutrients': []
        }
    foods[fid]['nutrients'].append({
        'k': item['nutrient_key'],
        'n': item['nutrient_name'],
        'v': item['value_num'],
        'u': item['unit']
    })

print(f'{len(foods)} unique foods')
sample = list(foods.values())[0]
print(f'Sample: {sample["name_vi"]}')

# Create compact version with short keys
short = []
for fid, f in foods.items():
    short.append({
        'i': fid,
        'n': f['name_vi'],
        'ns': [{'k': n['k'], 'v': n['v'], 'u': n['u']} for n in f['nutrients']]
    })

import os
FILEPATH = r'D:\openclaw\apps\dinh-duong-viet\public\api\vietnam-nutrients.json'
original_size = os.path.getsize(FILEPATH) / 1024
minified = json.dumps(short, ensure_ascii=False, separators=(',',':'))
with open(FILEPATH, 'w', encoding='utf-8') as fout:
    fout.write(minified)

new_size = os.path.getsize(FILEPATH) / 1024
print(f'Original: {original_size:.0f} KB')
print(f'Compact:  {new_size:.0f} KB')
print(f'Savings:  {original_size - new_size:.0f} KB ({(1-new_size/original_size)*100:.0f}%)')
