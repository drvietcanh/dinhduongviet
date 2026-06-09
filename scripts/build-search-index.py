import re, json, os

os.chdir(r'D:\openclaw\apps\dinh-duong-viet')

# --- Get recipes ---
recipe_files = [
    'src/data/recipes-extra.ts', 'src/data/recipes-extra2.ts', 'src/data/recipes-extra3.ts',
    'src/data/recipes-extra4.ts', 'src/data/recipes-extra5.ts', 'src/data/recipes-extra6.ts'
]

all_recipes = []
for fname in recipe_files:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    slugs = re.findall(r"slug:\s*['\"](.+?)['\"]", content)
    names = re.findall(r"name:\s*['\"](.+?)['\"]", content)
    aliases_blocks = re.findall(r'aliases:\s*\[(.*?)\]', content, re.DOTALL)

    for i in range(len(slugs)):
        aliases = []
        if i < len(aliases_blocks):
            found = re.findall(r"['\"](.+?)['\"]", aliases_blocks[i])
            aliases = found
        all_recipes.append({
            'type': 'recipe',
            'slug': slugs[i],
            'name': names[i] if i < len(names) else slugs[i],
            'aliases': aliases,
            'category': 'Mon an'
        })
print(f'Recipes: {len(all_recipes)}')

# --- Get articles: parse slug: blocks ---
with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all slug occurrences
articles = []
seen = set()
for m in re.finditer(r"slug:\s*['\"]([^'\"]+)['\"]", content):
    slug = m.group(1)
    if slug in seen:
        continue
    seen.add(slug)
    # Get surrounding context (300 chars after slug)
    endpos = m.end()
    ctx = content[endpos:endpos + 400]
    t_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", ctx)
    title = t_match.group(1) if t_match else slug
    d_match = re.search(r"description:\s*['\"]([^'\"]+?)['\"]", ctx)
    desc = d_match.group(1) if d_match else ''
    articles.append({
        'type': 'article',
        'slug': slug,
        'name': title,
        'aliases': [],
        'description': desc,
        'category': 'Bai viet'
    })
print(f'Articles: {len(articles)}')

# --- Get tools ---
# Tool metadata
TOOLS = [
    {"slug": "bmi", "name": "BMI & Vòng eo", "desc": "Tính BMI, vòng eo theo tieu chuản châu Á"},
    {"slug": "muc-tieu-can-nang", "name": "Muc tieu cân nặng", "desc": "Xác định cân nặng lý tưởng"},
    {"slug": "chi-so-gi", "name": "Chỉ số GI thực phẩm", "desc": "Tra GI của cơm, bún, phở, trái cây"},
    {"slug": "tinh-gl-bua-an", "name": "Tính GL từ bữa ăn (mới)", "desc": "Ghép nhiều thực phẩm tính tổng GL bữa ăn"},
    {"slug": "tinh-carb", "name": "Tính carb trong bữa ăn", "desc": "Tính tổng carb bữa ăn"},
    {"slug": "tinh-calo-tieu-thu", "name": "Tính calo tiêu thụ khi tập", "desc": "26 môn thể thao, MET-based"},
    {"slug": "tinh-nhu-cau-dam", "name": "Tính nhu cầu đạm", "desc": "13 tình trạng sức khỏe"},
    {"slug": "nhu-cau-dinh-duong-tre-em", "name": "Nhu cầu dinh dưỡng trẻ em", "desc": "WHO growth chart"},
    {"slug": "dinh-duong-thai-ky", "name": "Dinh dưỡng thai kỳ", "desc": "IOM khuyến nghị"},
    {"slug": "theo-doi-duong-huyet", "name": "Theo dõi dường huyết", "desc": "Log + biểu đồ, ADA targets"},
    {"slug": "tuong-tac-thuoc-thuc-pham", "name": "Tương tác thuốc-thực phẩm", "desc": "16 loại thuốc"},
    {"slug": "ti-le-mo-co-the", "name": "Tỷ lệ mỡ cơ thể & WHR", "desc": "US Navy formula"},
]
tools = []
for t in TOOLS:
    tools.append({
        'type': 'tool',
        'slug': t['slug'],
        'name': t['name'],
        'aliases': [],
        'description': t['desc'],
        'category': 'Cong cu'
    })
print(f'Tools: {len(tools)}')

# --- Get foods ---
with open('public/api/foods-slim.json', 'r', encoding='utf-8') as f:
    food_slim = json.load(f)
try:
    with open('public/api/vn-crossref.json', 'r', encoding='utf-8') as f:
        xref = json.load(f)
except:
    xref = {}
foods = []
for item in food_slim:
    slug = item['slug']
    food = {
        'type': 'food',
        'slug': slug,
        'name': item['name'],
        'aliases': xref.get(slug, {}).get('aliases', []),
        'category': item['category'],
        'kcal': item['kcal'],
    }
    if item.get('protein'):
        food['protein'] = item['protein']
    if item.get('fiber'):
        food['fiber'] = item['fiber']
    foods.append(food)
print(f'Foods: {len(foods)}')

# --- Combine ---
combined = articles + all_recipes + tools + foods
with open('public/api/search-index.json', 'w', encoding='utf-8') as f:
    json.dump(combined, f, ensure_ascii=False, indent=2)

types = {}
for i in combined:
    t = i['type']
    types[t] = types.get(t, 0) + 1
print(f'Total: {len(combined)}, Types: {types}')
print('Done!')
