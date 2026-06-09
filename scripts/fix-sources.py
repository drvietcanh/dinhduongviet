import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Step 1: extract all article content before fixing
text = ''.join(lines)

# Step 2: fix sources blocks that look like:
# sources: [
#       { name: "WHO", url: "..." }
#     },
#   (missing proper array closing bracket pattern)
# 
# Pattern: sources: [\n  { name: ... }\n  },\n  \n  { name: ... }\n  },  },\n
# Fix: { name: X, url: Y }\n  }, -> { name: X, url: Y },\n  ]
# Then the extra }, we keep as article close

# Process line by line, fixing source sections
result = []
i = 0
while i < len(lines):
    line = lines[i]
    
    if 'sources: [' in line:
        # Start collecting source entries
        result.append(line)
        source_entries = []
        j = i + 1
        
        while j < len(lines):
            s = lines[j].strip()
            
            if s.startswith('{ name:') and 'url:' in s:
                # Clean the line: remove trailing '],' or '},'
                cleaned = s
                if cleaned.endswith('],'):
                    cleaned = cleaned[:-2]
                elif cleaned.endswith('},'):
                    cleaned = cleaned[:-2]
                source_entries.append(cleaned + ',')
                j += 1
                
            elif s == '' or s.startswith('//') or s == '\r':
                # Blank or comment lines inside sources block
                j += 1
                
            elif s.startswith('{') or s.startswith('}') or 'slug:' in s:
                # We've moved past the sources - probably article closing }
                break
                
            elif s.endswith('],') or s.endswith('],'):
                # Skip existing bad closing
                j += 1
                
            elif s == '},':
                # Could be end of sources or end of article
                # Check if next is blank then { or article close
                nxt = lines[j+1].strip() if j+1 < len(lines) else ''
                if nxt == '' or nxt.startswith('{') or nxt == '}' or (j+2 < len(lines) and 'slug' in lines[j+2]):
                    # This }, ends the article or the sources section
                    break
                else:
                    j += 1
            else:
                j += 1
                
        # Write collected source entries
        for entry in source_entries:
            result.append('      ' + entry + '\n')
        result.append('    ],\n')
        i = j
        continue
    
    result.append(line)
    i += 1

# Write back
with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
    f.writelines(result)

# Count
with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    final = f.read()

slugs = len(re.findall(r'slug:\s*["\x27][^"\x27]+["\x27]', final))
print(f'Articles: {slugs}')

# Check specific block
idx = final.find('thap-dinh-duong-viet-nam')
if idx >= 0:
    block = final[final[:idx].rfind('\n{', final[:idx-500].find('export')):final.find('}\n  {', idx)]
    print('Sample block check:')
    lines_block = block.split('\n')
    for l in lines_block:
        print(f'  {l}')
