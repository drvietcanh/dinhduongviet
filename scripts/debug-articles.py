import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Check for syntax problems near the end
print(f"Total lines: {len(lines)}")
print()

# Find the articles array closing
for i in range(len(lines)-1, len(lines)-30, -1):
    if i >= 0:
        print(f"{i}: {lines[i].rstrip()}")

print()
print("--- Last 5 slug lines ---")
count = 0
for i in range(len(lines)-1, -1, -1):
    if 'slug:' in lines[i] and not lines[i].strip().startswith('//'):
        print(f"{i}: {lines[i].rstrip()}")
        count += 1
        if count >= 5:
            break

print()
print("--- Checking for 'Expected ] but got {' issue ---")
# Look for a } that might be misplaced
# Check the lines around the closing of articles array
for i in range(len(lines)-1, -1, -1):
    if lines[i].strip() == '];':
        print(f"Articles close '];' at line {i}")
        break

# Check how the new 10 articles were inserted vs closing
for i in range(len(lines)-1, -1, -1):
    if 'slug: "' in lines[i] and i > len(lines) - 30:
        # Check next few lines for 'specialty' and closing
        for j in range(i, min(i+20, len(lines))):
            print(f"{j}: {lines[j].rstrip()}")
        break
