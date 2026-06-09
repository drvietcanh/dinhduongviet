import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix: find '}\n  {' pattern (end of one article, start of next) without comma
# The pattern shows articles closing with '  }' and next starting with '  {'
# The comma should be '  },' between them
# But each article already ends with '  }' — the issue is that in the 10 new articles
# they are '  }' and then '  {' without commas

# Fix 1: Replace '  }\n  {' with '  },\n  {'
# But careful about the last article before '];'
# The last one should end with '  }' not '  },'

count = text.count('  }\n  {')
print(f"Found {count} instances of '  }}\n  {{'")

text = text.replace('  }\n  {', '  },\n  {')
print("Replaced all")

# But this might have added a comma before '];' — check
# The pattern before '];' is '  }\n];'
# After replacement it would be '  },\n];' which is wrong
# Fix: '  },\n];' -> '  }\n];'
text = text.replace('  },\n];', '  }\n];')

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(text)
print("✅ Written with comma fixes")
print(f"Final '  }}\n  {{' count: {text.count('  }}\n  {{')}")
