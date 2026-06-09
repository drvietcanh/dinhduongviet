import re,sys

with open('D:/openclaw/apps/dinh-duong-viet/src/data/nutrition.ts', 'r', encoding='utf-8') as f:
    content = f.read()

patches = {
    'gao-te': 'glycemicIndex: 75',
    'khoai-lang': 'glycemicIndex: 54',
    'khoai-tay': 'glycemicIndex: 78',
    'com-trang': 'glycemicIndex: 73',
    'bun-tuoi': 'glycemicIndex: 70',
    'pho-chin': 'glycemicIndex: 72',
    'mi-goi': 'glycemicIndex: 75',
    'mi-y': 'glycemicIndex: 58',
    'chuoi': 'glycemicIndex: 51',
    'xoai': 'glycemicIndex: 56',
    'du-du-chin': 'glycemicIndex: 60',
    'cam': 'glycemicIndex: 40',
    'tao': 'glycemicIndex: 36',
    'dua-hau': 'glycemicIndex: 72',
    'nho': 'glycemicIndex: 59',
    'ca-rot': 'glycemicIndex: 71',
    'ca-chua': 'glycemicIndex: 30',
    'bi-do': 'glycemicIndex: 75',
    'duong-trang': 'glycemicIndex: 65',
    'thanh-long': 'glycemicIndex: 52',
    'sau-rieng': 'glycemicIndex: 60',
    'mit': 'glycemicIndex: 60',
    'bo-sap': 'glycemicIndex: 15',
    'khom': 'glycemicIndex: 59',
    'chanh-day': 'glycemicIndex: 30',
    'oi': 'glycemicIndex: 45',
    'buoi': 'glycemicIndex: 25',
    'khoai-mon': 'glycemicIndex: 55',
    'khoai-mi': 'glycemicIndex: 55',
    'hat-sen-tuoi': 'glycemicIndex: 35',
    'com-gao-lut': 'glycemicIndex: 50',
    'ngu-sac': 'glycemicIndex: 52',
}

# Add phosphorusMg to thit-bo-nac and other meat entries
phosphorus_patches = {
    'thit-bo-nac': 'phosphorusMg: 210',
    'thit-heo-nac': 'phosphorusMg: 230',
    'thit-ga': 'phosphorusMg: 180',
    'thit-ga-uc': 'phosphorusMg: 210',
    'thit-vit': 'phosphorusMg: 160',
    'ca-thu': 'phosphorusMg: 250',
    'tom-tuoi': 'phosphorusMg: 210',
    'cua-dong': 'phosphorusMg: 180',
    'trung-ga': 'phosphorusMg: 180',
    'trung-vit': 'phosphorusMg: 200',
    'sua-tuoi': 'phosphorusMg: 95',
    'dau-phu': 'phosphorusMg: 97',
    'dau-nanh': 'phosphorusMg: 700',
    'dau-xanh': 'phosphorusMg: 367',
    'moc-nhi': 'phosphorusMg: 150',
    'com-trang': 'phosphorusMg: 32',
    'bun-tuoi': 'phosphorusMg: 20',
    'pho-chin': 'phosphorusMg: 25',
    'mi-goi': 'phosphorusMg: 100',
    'khoai-lang': 'phosphorusMg: 47',
    'khoai-tay': 'phosphorusMg: 57',
    'mi-y': 'phosphorusMg: 38',
    'rau-muong': 'phosphorusMg: 50',
    'ca-rot': 'phosphorusMg: 35',
    'ca-chua': 'phosphorusMg: 24',
    'xa-lach': 'phosphorusMg: 29',
    'cai-xanh': 'phosphorusMg: 37',
    'bi-do': 'phosphorusMg: 44',
    'toi': 'phosphorusMg: 153',
    'chuoi': 'phosphorusMg: 22',
    'xoai': 'phosphorusMg: 14',
    'cam': 'phosphorusMg: 14',
    'tao': 'phosphorusMg: 11',
}

# Combine all patches
all_patches = {}
all_patches.update(patches)
for slug, p in phosphorus_patches.items():
    if slug in all_patches:
        all_patches[slug] = all_patches[slug] + ',\n  ' + p
    else:
        all_patches[slug] = p

for slug, gi_text in all_patches.items():
    pattern = r'(slug: "' + re.escape(slug) + r'"[^}]*?)\n(\s+)(sourceId:)'
    # Check if these fields already exist
    block_match = re.search(r'slug: "' + re.escape(slug) + r'"[^}]*?sourceId:', content, re.DOTALL)
    if not block_match:
        print(f'NOT FOUND: {slug}')
        continue
    block = block_match.group(0)
    # Insert before sourceId
    new_block = re.sub(r'\n(\s+)(sourceId:)', r'\n  ' + gi_text + r',\n\1\2', block)
    content = content.replace(block, new_block)
    print(f'Patched: {slug}')

with open('D:/openclaw/apps/dinh-duong-viet/src/data/nutrition.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print('ALL DONE')
