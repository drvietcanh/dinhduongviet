f = open('src/data/articles.ts', 'r', encoding='utf-8')
lines = f.readlines()
f.close()

# Let's check line 3994 (the error points to this area)
# Show lines 3990-4010
for i in range(3989, min(4011, len(lines))):
    print(f'{i+1}: {lines[i].rstrip()}')
