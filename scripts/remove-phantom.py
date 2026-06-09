t = open('articles.ts', encoding='utf-8').read()
idx = t.find('dinh-duong-tim-mach')
start = t.rfind('},', 0, idx)
end = start
for _ in range(4):
    end = t.find('},', end + 2)
print(f'Removing from {start} to {end+2}')
t2 = t[:start] + t[end+2:]
open('articles.ts', 'w', encoding='utf-8').write(t2)
print('Done')
