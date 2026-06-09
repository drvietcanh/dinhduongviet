import re

# Data from articles.ts
from src.data.articles import articles

# Load ban-do-benh.astro content
with open('src/pages/ban-do-benh.astro', 'r', encoding='utf-8') as f:
    bdb_content = f.read()

# Extract existing foundation slugs from ban-do-benh.astro
foundation_slugs = re.findall(r'slug:\s*"([^"]+)"', bdb_content)

# --- RECLASSIFICATION --- 
# Articles that should be moved out of 'dinh-duong-tong-quat' and have displayCategory 'dang-co-benh'
reclassification_map = {
    "dinh-duong-loet-ty-de": "tieu-hoa",
    "dinh-duong-sau-ghep-tang": "tieu-hoa",
    "gan-nhiem-mo-nguoi-gay": "tieu-hoa",
    "dinh-duong-chay": "an-lanh-manh", # Moved to a more general category within 'tong-quat' as it's not disease-specific
}

# Update specialties in the main articles data (for consistency)
for slug, new_spec in reclassification_map.items():
    if slug in articles:
        articles[slug]['specialty'] = new_spec
        if new_spec == 'an-lanh-manh': # For the vegetarian article, adjust displayCategory if needed
            articles[slug]['displayCategory'] = 'an-lanh-manh'
    else:
        print(f"Warning: Slug '{slug}' not found in articles registry for reclassification.")

# --- ADDING MISSING LINKS TO ban-do-benh.astro --- 
# Identify articles with displayCategory 'dang-co-benh' that are missing in bdb
missing_in_bdb = []
for slug, meta in articles.items():
    if meta.get('dc') == 'dang-co-benh' and slug not in foundation_slugs and meta.get('specialty') != 'dinh-duong-tong-quat':
        missing_in_bdb.append(slug)

# Group missing articles by their correct specialty for easier addition to bdb
missing_by_spec = {sp['key']: [] for sp in specialties}
for slug in missing_in_bdb:
    spec = articles[slug].get('specialty')
    if spec and spec in missing_by_spec:
        missing_by_spec[spec].append(slug)
    else:
        # Fallback if specialty is missing or not in our map
        print(f"Warning: Article '{slug}' has missing or unknown specialty '{spec}'. Cannot auto-assign to BDB.")

# --- GENERATE NEW BDB ENTRIES --- 
# This is a simplified approach; manual review of content is still needed for accuracy
new_bdb_entries = []

# Add for 'da-lieu' (3 missing)
for slug in missing_by_spec.get('da-lieu', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "da-lieu",
    id: "{slug.split('-')[-1]}", # Basic ID generation
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}", # Simplified name
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'ho-hap' (2 missing)
for slug in missing_by_spec.get('ho-hap', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "ho-hap",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'huyet-hoc' (2 missing)
for slug in missing_by_spec.get('huyet-hoc', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "huyet-hoc",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'noi-tiet' (2 missing)
for slug in missing_by_spec.get('noi-tiet', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "noi-tiet",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'phu-nu-nhi' (2 missing)
for slug in missing_by_spec.get('phu-nu-nhi', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "phu-nu-nhi",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'than-kinh' (1 missing)
for slug in missing_by_spec.get('than-kinh', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "than-kinh",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'than-tiet-nieu' (1 missing)
for slug in missing_by_spec.get('than-tiet-nieu', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "than-tiet-nieu",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'tim-mach' (1 missing)
for slug in missing_by_spec.get('tim-mach', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "tim-mach",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')

# Add for 'ung-thu' (2 missing)
for slug in missing_by_spec.get('ung-thu', []):
    art = articles.get(slug)
    if art:
        new_bdb_entries.append(f'''  {{
    specialty: "ung-thu",
    id: "{slug.split('-')[-1]}",
    emoji: "{art.get('emoji', '❓')}",
    name: "{art.get('title', slug).replace('Dinh dưỡng ', '').replace(' — Dinh dưỡng', '')}",
    foundation: [
      {{ slug: "{slug}", title: "{art.get('title', slug)}", desc: "Bài nền tảng" }},
    ],
    faq: null,
    menus: [],
  }},''')


# --- MODIFYING ban-do-benh.astro --- 
# Find the 'groups = [' marker
groups_start_marker = bdb_content.find('const groups = [')

if groups_start_marker != -1:
    # Find the end of the groups array (closing bracket before other consts)
    # Look for 'const specialties = [' or 'const getBy = ('
    specialties_start = bdb_content.find('const specialties = [', groups_start_marker)
    if specialties_start != -1:
        groups_end_marker = bdb_content.rfind(']', 0, specialties_start)
        if groups_end_marker != -1:
            # Extract the part before the groups array starts
            header = bdb_content[:groups_start_marker + len('const groups = [')]
            # Extract the part after the groups array ends
            footer = bdb_content[groups_end_marker:]
            
            # Combine and write back
            new_content = header + '\n'.join(new_bdb_entries) + '\n' + footer
            
            with open('src/pages/ban-do-benh.astro', 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Successfully added {len(new_bdb_entries)} new entries to ban-do-benh.astro.")
        else:
            print("Error: Could not find end of groups array in ban-do-benh.astro.")
    else:
        print("Error: Could not find start of specialties array to determine groups end.")
else:
    print("Error: Could not find start of groups array in ban-do-benh.astro.")

# Re-run the build to check for errors after modifications
print("\nRunning build to check for errors...")
build_command = "cd D:\\openclaw\\apps\\dinh-duong-viet && npx astro build 2>&1"
process = os.popen(build_command)
build_output = process.read()
print(build_output)

if "error" in build_output.lower() or "✗" in build_output:
    print("\nBuild failed after modifications. Please check manually.")
else:
    print("\nBuild successful after modifications.")
