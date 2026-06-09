import json

with open('D:/openclaw/apps/dinh-duong-viet/public/api/search-index.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

missing = [i for i in d if 'type' not in i]
if missing:
    print(f'ERROR: {len(missing)} items missing type field')
else:
    print('All items have type field')

types = {}
for i in d:
    types[i['type']] = types.get(i['type'], 0) + 1
print('Types:', types)

# Check articles
arts = [i for i in d if i['type'] == 'article']
print(f'Articles: {len(arts)}')

no_desc = [i for i in arts if not i.get('description')]
print(f'Articles without description: {len(no_desc)}')
if no_desc:
    for a in no_desc[:5]:
        print(f'  {a["slug"]}')
