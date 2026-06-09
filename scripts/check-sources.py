import re, textwrap

text = open('src/data/articles.ts', 'r', encoding='utf-8').read()

# Find each article block: starts with { and ends with },
# But we can be smarter: find blocks that start with "slug:" and capture until next "slug:" or end
# Split by "slug:" but keep the delimiter
parts = text.split('slug: "')
slug_blocks = {}
for i, part in enumerate(parts):
    if i == 0:
        continue
    slug = part.split('"')[0]
    # Get the full block by finding from this slug to the end
    # Actually let's just find the block boundaries
    block_start = text.find(f'slug: "{slug}"')
    # Find next slug after this block
    next_idx = text.find('\n  slug: "', block_start + 10)
    if next_idx == -1:
        next_idx = text.find('\n  {\n  slug: "', block_start + 10)
    if next_idx == -1:
        block = text[block_start:]
    else:
        block = text[block_start:next_idx]
    slug_blocks[slug] = block

has_sources = []
missing_sources = []
for slug, block in slug_blocks.items():
    if 'sources: [' in block and block.strip() != 'sources: [],':
        has_sources.append(slug)
    else:
        missing_sources.append(slug)

print(f'Total articles parsed: {len(slug_blocks)}')
print(f'Has sources: {len(has_sources)}')
print(f'Missing sources: {len(missing_sources)}')
print()
print('Missing sources list:')
for s in sorted(missing_sources):
    # Get title
    title_m = re.search(r'title:\s*"([^"]+)"', slug_blocks[s])
    title = title_m.group(1)[:70] if title_m else '?'
    print(f'  {s:45s} {title}')
