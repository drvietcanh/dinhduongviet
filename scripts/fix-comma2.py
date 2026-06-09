import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

t = t.replace('}  {', '},\n  {')
print(f'Fixed 1: count {t.count("}  {")}')

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(t)
print('Written')
