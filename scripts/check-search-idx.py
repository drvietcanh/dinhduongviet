import json, os, re

# Find search-index.json
idx_path = None
for root, dirs, files in os.walk(r'D:\openclaw\apps\dinh-duong-viet'):
    for f in files:
        if 'search-index' in f and f.endswith('.json'):
            idx_path = os.path.join(root, f)
            break
    if idx_path:
        break

if not idx_path:
    # check scripts
    bdir = r'D:\openclaw\apps\dinh-duong-viet\scripts'
    for f in os.listdir(bdir):
        if 'search' in f.lower() and f.endswith('.py'):
            print(f'Search build script: {f}')
    print('Search index not found.')
else:
    print(f'Found: {idx_path}')
    data = json.load(open(idx_path, encoding='utf-8'))
    types = {}
    for item in data:
        t = item.get('type','?')
        types[t] = types.get(t,0) + 1
    print('Types in index:', types)
    arts = [i for i in data if i.get('type') == 'article']
    print(f'Article count: {len(arts)}')
    tools = [i for i in data if i.get('type') == 'tool']
    print(f'Tool count: {len(tools)}')
