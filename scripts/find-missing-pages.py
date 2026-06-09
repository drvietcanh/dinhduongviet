import re, os

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

# Get all slugs from articles.ts
slugs = re.findall(r'slug:\s*"([^"]+)"', t)
print(f'Total articles in registry: {len(slugs)}')

# Get all page files
page_dir = 'src/pages/kien-thuc-dinh-duong'
existing = [f.replace('.astro', '') for f in os.listdir(page_dir) if f.endswith('.astro')]
print(f'Existing page files: {len(existing)}')

# Find missing
missing = [s for s in slugs if s not in existing]
print(f'\nArticles WITHOUT page file ({len(missing)}):')
for s in missing:
    # Get title
    idx = t.find(f'slug: "{s}"')
    block = t[idx:idx+800]
    title_m = re.search(r'title:\s*"([^"]+)"', block)
    title = title_m.group(1) if title_m else '?'
    spec_m = re.search(r'specialty:\s*"([^"]+)"', block)
    spec = spec_m.group(1) if spec_m else '?'
    print(f'  {s:50s} [{spec:20s}] {title[:55]}')

# Also check orphan pages (page file exists but no article entry)
registry_slugs = set(slugs)
page_slugs = set(existing)
orphans = page_slugs - registry_slugs
print(f'\nOrphan page files (no registry entry) ({len(orphans)}):')
for s in sorted(orphans):
    print(f'  {s}')
