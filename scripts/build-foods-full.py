"""
Build foods-full.json with all data needed for client-side filtering/rendering.

Source of truth: dist/api-foods.json generated from src/data/nutrition.ts.
Compact format:
[[slug, name, category, kcal, protein, carb, fat, fiber, sodium, potassium, tags_str, gi]]
"""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INPUT = ROOT / "dist" / "api-foods.json"
OUTPUT = ROOT / "public" / "api" / "foods-full.json"


def num(value):
    if value is None:
        return 0
    try:
        return int(round(float(value)))
    except (TypeError, ValueError):
        return 0


with INPUT.open("r", encoding="utf-8") as f:
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

with OUTPUT.open("w", encoding="utf-8") as f:
    json.dump(compact, f, ensure_ascii=False, separators=(",", ":"))

print(f"Written {OUTPUT.relative_to(ROOT)}: {len(compact)} foods")
