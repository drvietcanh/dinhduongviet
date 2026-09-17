#!/usr/bin/env python3
"""Export Vietnam Food Composition DB to JSON files for the Astro static site."""
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "api"
DB_PATH = ROOT / "data" / "nutrition" / "nutrition_final_with_core.sqlite"
FALLBACK_FOODS = OUT_DIR / "vietnam-foods.json"
FALLBACK_NUTRIENTS = OUT_DIR / "vietnam-nutrients.json"

OUT_DIR.mkdir(parents=True, exist_ok=True)


def sanitize_food_rows(rows):
    cleaned = []
    seen_codes = set()
    excluded = []
    for item in rows:
        code = str(item.get("code") or "")
        name = str(item.get("name_vi") or "").strip()
        if not name or name.isdigit():
            excluded.append((code, name, "malformed_name"))
            continue
        if code and code in seen_codes:
            excluded.append((code, name, "duplicate_code"))
            continue
        if code:
            seen_codes.add(code)
        cleaned.append(item)
    return cleaned, excluded


def copy_fallback() -> None:
    if not FALLBACK_FOODS.exists() or not FALLBACK_NUTRIENTS.exists():
        raise FileNotFoundError("Fallback Vietnam JSON files are missing from public/api.")

    foods_list = json.loads(FALLBACK_FOODS.read_text(encoding="utf-8"))
    nutrients_list = json.loads(FALLBACK_NUTRIENTS.read_text(encoding="utf-8"))
    foods_list, excluded = sanitize_food_rows(foods_list)
    FALLBACK_FOODS.write_text(json.dumps(foods_list, ensure_ascii=False, indent=1), encoding="utf-8")
    print("[export_vietnam_json] sqlite3 unavailable, reused checked-in JSON exports.")
    print(f"  Foods: {len(foods_list)}")
    print(f"  Excluded malformed/duplicate rows: {len(excluded)}")
    print(f"  Nutrients: {len(nutrients_list)}")


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
raw_foods = []
for r in rows:
    d = dict(r)
    d.pop("per", None)
    for k, v in d.items():
        if v is None:
            d[k] = None
    raw_foods.append(d)

foods_list, excluded_source_rows = sanitize_food_rows(raw_foods)

(OUT_DIR / "vietnam-foods.json").write_text(
    json.dumps(foods_list, ensure_ascii=False, indent=1),
    encoding="utf-8",
)
print(f"  {len(foods_list)} foods written.")
print(f"  {len(excluded_source_rows)} malformed/duplicate source rows excluded from public lookup.")

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
