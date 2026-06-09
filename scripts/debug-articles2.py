import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find slug positions
slug_lines = []
for i, line in enumerate(lines):
    if line.strip().startswith('slug: "') and line.strip().endswith('",'):
        slug_lines.append(i)

print(f"Found {len(slug_lines)} slug lines")
print()

# Check for missing commas between articles
# Look for '  },' pattern followed by '  {' without a comma between
issues = []
for i in range(len(lines)-1):
    curr = lines[i].rstrip()
    next_l = lines[i+1].rstrip()
    # If current ends with '}' and next starts with '{', there should be ','
    if curr == '  }' and next_l == '  {':
        issues.append((i, 'Missing comma between articles'))
    # If an article lasts too long
    if curr == '    }' and next_l == '  {':
        issues.append((i, 'Missing comma between articles (indented)'))
    # Check for {  {{  {  {  
    if '{\n' in curr and '{' in next_l:
        pass

if issues:
    print(f"Found {len(issues)} syntax issues:")
    for line_num, desc in issues[:20]:
        print(f"  Line {line_num+1}: {desc}")
        print(f"    Prev: {lines[line_num].rstrip()}")
        print(f"    Curr: {lines[line_num+1].rstrip() if line_num+1 < len(lines) else 'EOF'}")
else:
    print("No missing comma issues found")

# Check for source array formatting errors
print()
print("Checking source arrays for '[' issues...")
for i, line in enumerate(lines):
    stripped = line.strip()
    if 'sources:' in stripped and '[' in stripped and ']' not in stripped:
        # This sources: [ is split across lines - check closing
        j = i + 1
        src_lines = []
        while j < min(i+20, len(lines)):
            if ']' in lines[j]:
                break
            src_lines.append(lines[j].strip())
            j += 1
        if j >= min(i+20, len(lines)):
            print(f"  Line {i+1}: sources array never closed!")
    
    # Check for ]{, ]{ (bad punctuation)
    if stripped == '] {' or stripped == ']{':
        print(f"  Line {i+1}: Bad ']{{' pattern: {stripped}")
    if stripped == '},' and i+1 < len(lines) and lines[i+1].strip() == '    keywords:':
        pass  # normal

# Check for any } without comma before the next article
print()
print("Checking article boundary commas...")
for i in range(len(lines)-1):
    curr = lines[i].rstrip().strip()
    next_l = lines[i+1].rstrip().strip()
    
    # An article ends with '  },' or '  }'
    # Next article starts with '  {' or '  {'
    if curr == '  }' and next_l == '  {':
        print(f"  Line {i+1}: MISSING COMMA: '  }}' -> '  {{'")
        print(f"    {lines[i].rstrip()}")
        print(f"    {lines[i+1].rstrip() if i+1 < len(lines) else 'EOF'}")

# Check last few articles for proper closing
print()
print("Last 3 articles (slugs):")
for sl in slug_lines[-3:]:
    print(f"  Line {sl+1}: {lines[sl].strip()}")

# Check the line before '];'
close_line = None
for i, line in enumerate(lines):
    if line.strip() == '];':
        close_line = i
        print(f"\nLine before '];':")
        print(f"  {close_line-1}: {lines[close_line-1].rstrip()}")
        if close_line-2 >= 0:
            print(f"  {close_line-2}: {lines[close_line-2].rstrip()}")
        break
