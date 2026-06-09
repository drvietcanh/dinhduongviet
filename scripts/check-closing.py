f = open('src/data/articles.ts', 'r', encoding='utf-8')
lines = f.readlines()
f.close()

# Find the closing marker of the articles array
for i in range(len(lines)-1, -1, -1):
    if lines[i].strip() == '];' or lines[i].strip() == ']' or lines[i].strip() == '] as ArticleMeta[]':
        print(f'Found closing marker at line {i+1}: {lines[i].rstrip()}')
        # Show a few lines around it
        for j in range(max(0,i-3), min(len(lines), i+5)):
            print(f'{j+1}: {lines[j].rstrip()}')
        break
else:
    print('No closing marker found in last 100 lines!')
    for i in range(len(lines)-10, len(lines)):
        print(f'{i+1}: {lines[i].rstrip()}')
