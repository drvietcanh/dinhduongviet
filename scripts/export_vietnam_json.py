#!/usr/bin/env python3
"""Export Vietnam Food Composition DB (SQLite) to JSON files for the Astro static site."""
import sqlite3
import json
import os
import sys

DB_PATH = "D:/openclaw/apps/dinh-duong-viet/data/nutrition/nutrition_final_with_core.sqlite"
OUT_DIR = "D:/openclaw/apps/dinh-duong-viet/public/api"

os.makedirs(OUT_DIR, exist_ok=True)

db = sqlite3.connect(DB_PATH)
db.row_factory = sqlite3.Row

# ── 1. Foods (core nutrition) ──
print("Exporting foods...")
rows = db.execute("SELECT * FROM nutrition_core ORDER BY stt").fetchall()
foods_list = []
for r in rows:
    d = dict(r)
    # Remove per/source for brevity
    d.pop("per", None)
    # Convert None to null
    for k, v in d.items():
        if v is None:
            d[k] = None
    foods_list.append(d)

with open(os.path.join(OUT_DIR, "vietnam-foods.json"), "w", encoding="utf-8") as f:
    json.dump(foods_list, f, ensure_ascii=False, indent=1)
print(f"  {len(foods_list)} foods written.")

# ── 2. All nutrients ──
print("Exporting nutrients...")
rows = db.execute("SELECT * FROM nutrients ORDER BY stt, id").fetchall()
nutrients_list = []
for r in rows:
    d = dict(r)
    for k, v in d.items():
        if v is None:
            d[k] = None
    nutrients_list.append(d)

with open(os.path.join(OUT_DIR, "vietnam-nutrients.json"), "w", encoding="utf-8") as f:
    json.dump(nutrients_list, f, ensure_ascii=False, indent=1)
print(f"  {len(nutrients_list)} nutrient records written.")

# ── 3. Verify ──
print("\nVerification:")
print(f"  Total foods: {len(foods_list)}")
f1001 = [f for f in foods_list if f["code"] == "1001"]
if f1001:
    f = f1001[0]
    print(f"  Food 1001: {f['name_vi']}")
    print(f"    Energy: {f['energy_kcal']} KCal, Protein: {f['protein_g']}g, Lipid: {f['lipid_g']}g, Glucid: {f['glucid_g']}g")
    calc = f['energy_kcal'] * 50 / 100
    print(f"    calc_by_weight(1001, 50g) = {calc:.0f} KCal (expected ~172)")

# search test
gao = [f for f in foods_list if "gạo" in f["name_vi"].lower()]
if gao:
    print(f"  Foods matching 'gạo':", [f["name_vi"] for f in gao[:5]])

db.close()
print("\nDone.")
