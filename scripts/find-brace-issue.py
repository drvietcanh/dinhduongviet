import re
raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8').read()
stack = []
for i, ch in enumerate(raw):
    if ch == '{':
        stack.append(('{', i))
    elif ch == '}':
        if stack and stack[-1][0] == '{':
            stack.pop()
        else:
            stack.append(('}', i))
    elif ch == '(':
        stack.append(('(', i))
    elif ch == ')':
        if stack and stack[-1][0] == '(':
            stack.pop()
        else:
            stack.append((')', i))

for token, pos in stack[:5]:
    line_num = raw[:pos].count('\n') + 1
    ctx = raw[max(0,pos-30):pos+30]
    print(f'Line {line_num}, pos {pos}, token {token!r}: ...{ctx!r}...')
