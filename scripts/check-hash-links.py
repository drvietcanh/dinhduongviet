"""Check health card hash links point to real IDs in ban-do-benh.astro"""
with open('src/pages/ban-do-benh.astro', 'r', encoding='utf-8') as f:
    t = f.read()

home_hashes = {
    'tieu-duong': '🩸 Đái tháo đường',
    'huyet-ap': '🫀 Tăng huyết áp',
    'gout': '🦶 Gout',
    'mo-mau-suy-tim': '❤️ Mỡ máu • Tim mạch',
    'da-day': '😣 Dạ dày • Trào ngược',
    'than': '🫘 Suy thận • Sỏi thận',
    'beo-phi': '⚖️ Béo phì • Giảm cân',
    'nguoi-gia': '👴 Người cao tuổi',
    'dot-quy': '🧠 Đột quỵ • Alzheimer',
    'ho-hap': '🫁 COPD • Hen suyễn',
}

# Check hash -> id mapping
# ban-do-benh renders: <div id={group.id} ...>
# Need to check if group.id matches
ok = []
broken = []
for h, label in home_hashes.items():
    # Find id: "h" or id: 'h' pattern in the group definitions
    if f'id: "{h}"' in t or f"id: '{h}'" in t:
        ok.append((h, label))
    else:
        broken.append((h, label))

print(f"✅ Working hash links ({len(ok)}):")
for h, label in ok:
    print(f"  /ban-do-benh#{h} ← {label}")

print()
print(f"❌ Broken hash links ({len(broken)}):")
for h, label in broken:
    print(f"  /ban-do-benh#{h} ← {label}")

# Group listing to confirm ID patterns
if broken:
    print("\n--- All group IDs in bdb ---")
    import re
    ids = re.findall(r'id:\s*["\']([^"\']+)["\']', t)
    for i in ids:
        print(f"  id: {i}")
