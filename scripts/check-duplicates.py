"""Check the dau-da-day-nen-an-gi / dinh-duong-benh-da-day-nen-an-gi situation"""
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

# Find both articles
lines = t.split('\n')
current = {}
all_articles = []

for line in lines:
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        if current.get('slug'):
            all_articles.append(current)
        current = {'slug': s.split('"')[1]}
    elif current:
        if s.startswith('specialty: "'):
            current['spec'] = s.split('"')[1]
        elif s.startswith('displayCategory: "'):
            current['dc'] = s.split('"')[1]
        elif s.startswith('title: "'):
            current['title'] = s.split('"')[1]
        elif s.startswith('sources:'):
            current['has_sources'] = True

if current.get('slug'):
    all_articles.append(current)

# Find relevant articles
for a in all_articles:
    if 'da-day' in a['slug']:
        print(f"  {a['slug']}")
        print(f"    title: {a.get('title','?')}")
        print(f"    spec: {a.get('spec','?')}")
        print(f"    dc: {a.get('dc','?')}")
        print(f"    sources: {a.get('has_sources',False)}")
        print()
