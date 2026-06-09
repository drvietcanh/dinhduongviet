import re, json, os

html = open(r'D:\openclaw\apps\dinh-duong-viet\dist\thuc-pham\index.html', encoding='utf-8').read()

card_start = 0
cards_data = []
while True:
    start = html.find('<a class="food-card', card_start)
    if start < 0:
        break
    end = html.find('</a>', start) + 4
    block = html[start:end]
    m_tags = re.search(r'data-tags="([^"]*)"', block)
    m_cat = re.search(r'data-category="([^"]*)"', block)
    m_kcal = re.search(r'data-kcal="([^"]*)"', block)
    m_prot = re.search(r'data-protein="([^"]*)"', block)
    m_carb = re.search(r'data-carb="([^"]*)"', block)
    m_fat = re.search(r'data-fat="([^"]*)"', block)
    m_fiber = re.search(r'data-fiber="([^"]*)"', block)
    m_sodium = re.search(r'data-sodium="([^"]*)"', block)
    m_potassium = re.search(r'data-potassium="([^"]*)"', block)
    m_gi = re.search(r'data-gi="([^"]*)"', block)
    m_href = re.search(r'href="/thuc-pham/([^"]*)"', block)
    m_name = re.search(r'<h3[^>]*>(.*?)</h3>', block)
    slug = m_href.group(1) if m_href else ''
    name = m_name.group(1).strip() if m_name else ''
    cards_data.append([
        slug, name,
        m_cat.group(1) if m_cat else '',
        int(float((m_kcal.group(1) if m_kcal else '0') or '0')),
        int(float((m_prot.group(1) if m_prot else '0') or '0')),
        int(float((m_carb.group(1) if m_carb else '0') or '0')),
        int(float((m_fat.group(1) if m_fat else '0') or '0')),
        int(float((m_fiber.group(1) if m_fiber else '0') or '0')),
        int(float((m_sodium.group(1) if m_sodium else '0') or '0')),
        int(float((m_potassium.group(1) if m_potassium else '0') or '0')),
        m_tags.group(1) if m_tags else '',
        m_gi.group(1) if m_gi else '',
    ])
    card_start = end

output = json.dumps(cards_data, ensure_ascii=False, separators=(',', ':'))
out_path = r'D:\openclaw\apps\dinh-duong-viet\public\api\foods-full.json'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(output)

sz = os.path.getsize(out_path) / 1024
print(f'{len(cards_data)} foods extracted -> {sz:.0f} KB')
print(f'Sample: {cards_data[0]}')
