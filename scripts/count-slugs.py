f = open('src/data/articles.ts', 'r', encoding='utf-8')
c = f.read()
f.close()
print(c.count('slug: "'))
