f = open('src/data/articles.ts', 'r', encoding='utf-8')
lines = f.readlines()
f.close()
# Show lines around 3995
for i in range(3985, min(4015, len(lines))):
    print(f'{i+1}: {lines[i].rstrip()}')
