"""Remove chon-dau-an-lanh-manh from articles.ts"""
t = open('src/data/articles.ts', encoding='utf-8').read()
idx = t.find('chon-dau-an-lanh-manh')
start = t.rfind('},', 0, idx)

# Find the 4th '},' after start to get the full article block
end = start
for _ in range(4):
    end = t.find('},', end + 2)

print(f'Removing from {start} to {end+2}')
new_t = t[:start] + t[end+2:]
print(f'New length: {len(new_t)}')
open('src/data/articles.ts', 'w', encoding='utf-8').write(new_t)
print('Done!')
