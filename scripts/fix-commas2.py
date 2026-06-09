import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

fixed = []
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped == '  }' and i + 1 < len(lines) and lines[i+1].strip() == '  {':
        # Replace with closing brace and comma
        fixed.append('  },\n')
    else:
        fixed.append(line)

t = ''.join(fixed)

# Fix the line before ]; if it has a trailing comma
t = t.replace('  },\n];', '  }\n];')

# Final check - should not have missing commas
if '  }\n  {' in t:
    t = t.replace('  }\n  {', '  },\n  {')

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(t)

print('Applied fixes.')
