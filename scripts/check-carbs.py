import json

with open(r'D:\openclaw\apps\dinh-duong-viet\public\api\vietnam-foods.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

print('Sample keys:', list(d[0].keys()))
print(f'Total foods: {len(d)}')

# Check carb field
field = 'glucid_g'
has = sum(1 for i in d if i.get(field))
print(f'Foods with {field}: {has}/{len(d)}')

# Show carb data for common carb-heavy foods
targets = ['gạo', 'cơm', 'bún', 'phở', 'miến', 'bánh', 'khoai', 'sắn', 'ngô', 'bắp', 'xôi', 'mì', 'nui', 'bột']
for i in d:
    name = i['name_vi'].lower()
    if any(t in name for t in targets) and i.get(field):
        print(f'{i["name_vi"]:35s} glucid={i[field]}g/100g')
        if sum(1 for t in targets if t in name) > 0:
            _ = 1
