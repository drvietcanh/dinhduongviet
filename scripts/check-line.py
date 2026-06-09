lines = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8').readlines()
for i in range(110, 120):
    if i < len(lines):
        ln = lines[i].rstrip()
        in_col = ln.find('.') + 1 if '.' in ln else -1
        print(f'L{i+1} col{in_col}: {ln}')
