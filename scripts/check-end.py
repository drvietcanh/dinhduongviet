f = open('src/data/articles.ts', 'r', encoding='utf-8')
lines = f.readlines()
f.close()

# Check the last 20 lines
print('Last 20 lines:')
for i in range(max(0, len(lines)-20), len(lines)):
    print(f'{i+1}: {lines[i].rstrip()}')
