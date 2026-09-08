import re, json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RECIPE_FILES = [
    ROOT / 'src/data/recipes-extra.ts',
    ROOT / 'src/data/recipes-extra2.ts',
    ROOT / 'src/data/recipes-extra3.ts',
    ROOT / 'src/data/recipes-extra4.ts',
    ROOT / 'src/data/recipes-extra5.ts',
    ROOT / 'src/data/recipes-extra6.ts'
]

# --- Get recipes ---
all_recipes = []
for fname in RECIPE_FILES:
    with fname.open('r', encoding='utf-8') as f:
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
with (ROOT / 'src/data/articles.ts').open('r', encoding='utf-8') as f:
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

# --- Get tools directly from the actual routes ---
# This keeps search in sync whenever a tool page is added, renamed or removed.
def clean_markup(value):
    value = re.sub(r'<[^>]+>', ' ', value)
    value = re.sub(r'\{[^}]+\}', ' ', value)
    return re.sub(r'\s+', ' ', value).strip()


def quoted_constant(source, names):
    for name in names:
        match = re.search(
            rf"const\s+{name}\s*=\s*(['\"])(.*?)\1\s*;",
            source,
            re.DOTALL,
        )
        if match:
            return re.sub(r'\s+', ' ', match.group(2)).strip()
    return ''


tools = []
for tool_path in sorted((ROOT / 'src/pages/cong-cu').glob('*.astro')):
    if tool_path.stem == 'index':
        continue
    source = tool_path.read_text(encoding='utf-8')
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', source, re.DOTALL | re.IGNORECASE)
    name = clean_markup(h1_match.group(1)) if h1_match else ''
    if not name:
        name = quoted_constant(source, ['title', 'siteTitle', 'toolTitle'])
    name = re.sub(r'\s*[-|]\s*Dinh Dưỡng Việt\s*$', '', name).strip()

    description = quoted_constant(source, ['desc', 'siteDesc', 'description', 'toolDesc'])
    if not description:
        description_match = re.search(r'description=["\']([^"\']+)["\']', source)
        description = description_match.group(1).strip() if description_match else ''
    if not description:
        lead_match = re.search(r'<p[^>]*class=["\'][^"\']*lead[^"\']*["\'][^>]*>(.*?)</p>', source, re.DOTALL | re.IGNORECASE)
        description = clean_markup(lead_match.group(1)) if lead_match else ''

    tools.append({
        'type': 'tool',
        'slug': tool_path.stem,
        'name': name or tool_path.stem.replace('-', ' ').title(),
        'aliases': [],
        'description': description,
        'category': 'Công cụ'
    })
print(f'Tools: {len(tools)}')

# --- Get disease/topic hubs ---
hub_source = (ROOT / 'src/data/disease-hubs.ts').read_text(encoding='utf-8')
hubs = []
hub_pattern = re.compile(
    r'id:\s*"([^"]+)"\s*,\s*'
    r'name:\s*"([^"]+)"\s*,\s*'
    r'shortName:\s*"([^"]+)"\s*,\s*'
    r'emoji:\s*"([^"]+)"\s*,.*?'
    r'description:\s*"([^"]+)"',
    re.DOTALL,
)
for slug, name, short_name, emoji, description in hub_pattern.findall(hub_source):
    hubs.append({
        'type': 'hub',
        'slug': slug,
        'name': name,
        'aliases': [short_name] if short_name != name else [],
        'description': description,
        'category': 'Theo bệnh',
        'emoji': emoji,
    })
print(f'Hubs: {len(hubs)}')

# --- Get foods ---
with (ROOT / 'public/api/foods-slim.json').open('r', encoding='utf-8') as f:
    food_slim = json.load(f)
try:
    with (ROOT / 'public/api/vn-crossref.json').open('r', encoding='utf-8') as f:
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
        'aliases': item.get('aliases', []) + xref.get(slug, {}).get('aliases', []),
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
combined = hubs + articles + all_recipes + tools + foods
with (ROOT / 'public/api/search-index.json').open('w', encoding='utf-8') as f:
    json.dump(combined, f, ensure_ascii=False, indent=2)

types = {}
for i in combined:
    t = i['type']
    types[t] = types.get(t, 0) + 1
print(f'Total: {len(combined)}, Types: {types}')
print('Done!')
