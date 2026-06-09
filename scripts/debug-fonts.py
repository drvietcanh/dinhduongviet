"""Debug font parsing"""
import re, requests

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
      "AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/120.0.0.0 Safari/537.36")

CSS_URL = ("https://fonts.googleapis.com/css2?"
           "family=Inter:wght@400;500;600;700&"
           "family=Noto+Sans:wght@400;500;600;700&"
           "display=swap")

resp = requests.get(CSS_URL, headers={"User-Agent": UA})
css = resp.text
print(f"CSS length: {len(css)}")
print("First 600 chars:")
print(css[:600])
print("\n===== LAST 400 chars =====")
print(css[-400:])
print("\n===== BLOCKS with latin =====")
blocks = re.findall(r"@font-face\s*\{[^}]+\}", css)
print(f"Total blocks: {len(blocks)}")
latin_blocks = [b for b in blocks if "latin" in b.split("*/")[0] if "*/" in b]
print(f"Latin blocks: {len(latin_blocks)}")
for b in latin_blocks[:3]:
    print(b[:200])
    print("---")
