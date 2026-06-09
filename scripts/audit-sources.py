import re

text = open('src/data/articles.ts', 'r', encoding='utf-8').read()

# Parse article blocks more precisely
# Find position of each article start
articles = []
pos = 0
while True:
    # Find each article: starts with '  {\n    slug'
    start_pos = text.find('  {\n    slug:', pos)
    if start_pos == -1:
        break
    # End: next '  },' or '  }\n];'
    end_pos = text.find('  },\n', start_pos)
    if end_pos == -1:
        end_pos = text.find('  }\n];', start_pos)
    if end_pos == -1:
        # Try the end pattern with slug:
        end_pos = text.find('\n  {\n    slug:', start_pos + 10)
        if end_pos == -1:
            end_pos = len(text)
    block = text[start_pos:end_pos]

    # Extract slug and title
    slug_m = re.search(r'slug:\s*"([^"]+)"', block)
    title_m = re.search(r'title:\s*"([^"]+)"', block)
    slug = slug_m.group(1) if slug_m else '?'
    title = title_m.group(1) if title_m else '?'

    # Check if sources has actual content (not empty or [] on its own)
    src_match = re.search(r'sources:\s*\[([^\]]*)\]', block)
    if src_match:
        inner = src_match.group(1).strip()
        if len(inner) > 5:
            has = 'SOURCES'
        else:
            has = 'EMPTY'
    else:
        has = 'NO_FIELD'

    articles.append((slug, has, title))
    pos = end_pos + 10

# count
has = sum(1 for s, h, t in articles if h == 'SOURCES')
empty = sum(1 for s, h, t in articles if h == 'EMPTY')
no = sum(1 for s, h, t in articles if h == 'NO_FIELD')

print(f'Total: {len(articles)}')
print(f'Has real sources: {has}')
print(f'Empty sources[]:  {empty}')
print(f'No sources field: {no}')
print()
print('=== Articles with EMPTY sources[] ===')
for s, h, t in sorted(articles):
    if h == 'EMPTY':
        print(f'  {s}')
