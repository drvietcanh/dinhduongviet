"""Download Google Fonts variable font files for self-hosting.
Uses the range syntax (wght@400..700) to get proper variable fonts."""
import os, re, requests

FONTS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "fonts")
os.makedirs(FONTS_DIR, exist_ok=True)

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
      "AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/120.0.0.0 Safari/537.36")

# Use range syntax to get variable font CSS
families = [
    ("Inter:wght@400..700", "Inter"),
    ("Noto+Sans:wght@400..700", "Noto Sans"),
]

all_entries = []
for query, family_name in families:
    CSS_URL = f"https://fonts.googleapis.com/css2?family={query}&display=swap"
    resp = requests.get(CSS_URL, headers={"User-Agent": UA})
    resp.raise_for_status()
    
    # Parse comment+@font-face pairs
    pairs = re.findall(r"/\*\s*([^*]+)\s*\*/\s*(@font-face\s*\{[^}]+\})", resp.text)
    
    for comment_text, block in pairs:
        subset = comment_text.strip()
        if subset not in ("latin", "vietnamese"):
            continue
        
        wgt = re.search(r"font-weight:\s*([\d\s]+);", block)
        src = re.search(r"src:\s*url\(([^)]+)\)", block)
        stretch = re.search(r"font-stretch:\s*([^;]+);", block)
        style = re.search(r"font-style:\s*([^;]+);", block)
        
        if wgt and src:
            all_entries.append({
                "family": family_name,
                "weight": wgt.group(1).strip(),
                "subset": subset,
                "url": src.group(1).strip(),
                "stretch": stretch.group(1).strip() if stretch else "normal",
                "style": style.group(1).strip() if style else "normal",
            })

# Deduplicate by URL
seen = set()
unique = []
for e in all_entries:
    if e["url"] not in seen:
        seen.add(e["url"])
        unique.append(e)

print(f"Unique files to download: {len(unique)}")
for e in unique:
    print(f"  {e['family']:15s} weight={e['weight']:10s} {e['subset']:12s}")

# Download
for e in unique:
    family = e["family"]
    weight = e["weight"]
    subset = e["subset"]
    url = e["url"]
    
    fam_slug = family.lower().replace(" ", "-")
    # Variable font: inter-{subset}.woff2 or noto-sans-{subset}.woff2
    filename = f"{fam_slug}-{subset}.woff2"
    filepath = os.path.join(FONTS_DIR, filename)
    
    if os.path.exists(filepath):
        print(f"  ✓ {filename}")
        continue
    print(f"  ⬇ {filename}")
    r = requests.get(url, headers={"User-Agent": UA})
    r.raise_for_status()
    with open(filepath, "wb") as f:
        f.write(r.content)
    print(f"    saved {len(r.content):,} bytes")

print("\nFinal files:")
for f in sorted(os.listdir(FONTS_DIR)):
    sz = os.path.getsize(os.path.join(FONTS_DIR, f))
    print(f"  {f:45s} {sz:>8,} bytes")

# Now check fvar
print("\nChecking variable font status:")
for f in sorted(os.listdir(FONTS_DIR)):
    fp = os.path.join(FONTS_DIR, f)
    with open(fp, "rb") as fp_h:
        data = fp_h.read()
    has_fvar = b"fvar" in data
    has_wght = b"wght" in data
    print(f"  {f:45s} fvar={has_fvar} wght_axis={has_wght}")
