"""
Build foods-full.json with all data needed for client-side filtering/rendering.

Source of truth: dist/api-foods.json generated from src/data/nutrition.ts.
Compact format:
[[slug, name, category, kcal, protein, carb, fat, fiber, sodium, potassium, tags_str, gi]]
"""

import json
import os

ROOT = r"D:\openclaw\apps\dinh-duong-viet"
INPUT = os.path.join(ROOT, "dist", "api-foods.json")
OUTPUT = os.path.join(ROOT, "public", "api", "foods-full.json")


def num(value):
    if value is None:
        return 0
    try:
        return int(round(float(value)))
    except (TypeError, ValueError):
        return 0


with open(INPUT, "r", encoding="utf-8") as f:
    foods = json.load(f)

compact = []
for food in foods:
    nutrients = food.get("nutrients") or {}
    tags = food.get("tags") or []
    compact.append([
        food.get("slug", ""),
        food.get("name", ""),
        food.get("category", ""),
        num(nutrients.get("energyKcal")),
        num(nutrients.get("proteinG")),
        num(nutrients.get("carbG")),
        num(nutrients.get("fatG")),
        num(nutrients.get("fiberG")),
        num(nutrients.get("sodiumMg")),
        num(nutrients.get("potassiumMg")),
        " ".join(tags),
        "" if nutrients.get("glycemicIndex") is None else nutrients.get("glycemicIndex"),
    ])

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(compact, f, ensure_ascii=False, separators=(",", ":"))

print(f"Written {OUTPUT}: {len(compact)} foods")
