#!/usr/bin/env python3
"""Export Vietnam Food Composition DB to JSON files for the Astro static site."""
import json
import os
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "api"
DB_PATH = ROOT / "data" / "nutrition" / "nutrition_final_with_core.sqlite"
FALLBACK_FOODS = OUT_DIR / "vietnam-foods.json"
FALLBACK_NUTRIENTS = OUT_DIR / "vietnam-nutrients.json"

OUT_DIR.mkdir(parents=True, exist_ok=True)


def copy_fallback() -> None:
    if not FALLBACK_FOODS.exists() or not FALLBACK_NUTRIENTS.exists():
        raise FileNotFoundError("Fallback Vietnam JSON files are missing from public/api.")

    shutil.copy2(FALLBACK_FOODS, OUT_DIR / "vietnam-foods.json")
    shutil.copy2(FALLBACK_NUTRIENTS, OUT_DIR / "vietnam-nutrients.json")
    foods_list = json.loads((OUT_DIR / "vietnam-foods.json").read_text(encoding="utf-8"))
    print("[export_vietnam_json] sqlite3 unavailable, reused checked-in JSON exports.")
    print(f"  Foods: {len(foods_list)}")
    print(f"  Nutrients: {len(json.loads((OUT_DIR / 'vietnam-nutrients.json').read_text(encoding='utf-8')))}")


try:
    import sqlite3
except Exception:
    copy_fallback()
    raise SystemExit(0)

if not DB_PATH.exists():
    copy_fallback()
    raise SystemExit(0)

db = sqlite3.connect(DB_PATH)
db.row_factory = sqlite3.Row

# ── 1. Foods (core nutrition) ──
print("Exporting foods...")
rows = db.execute("SELECT * FROM nutrition_core ORDER BY stt").fetchall()
foods_list = []
for r in rows:
    d = dict(r)
    d.pop("per", None)
    for k, v in d.items():
        if v is None:
            d[k] = None
    foods_list.append(d)

(OUT_DIR / "vietnam-foods.json").write_text(
    json.dumps(foods_list, ensure_ascii=False, indent=1),
    encoding="utf-8",
)
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

(OUT_DIR / "vietnam-nutrients.json").write_text(
    json.dumps(nutrients_list, ensure_ascii=False, indent=1),
    encoding="utf-8",
)
print(f"  {len(nutrients_list)} nutrient records written.")

print("\nDone.")
db.close()
