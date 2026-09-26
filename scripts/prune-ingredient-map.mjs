import fs from "node:fs";

const mapPath = "public/ingredient-map.json";
const recipePath = "dist/api-recipes.json";
const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const recipes = JSON.parse(fs.readFileSync(recipePath, "utf8"));
const validSlugs = new Set(recipes.map((recipe) => recipe.slug));
let removed = 0;

for (const category of map.categories ?? []) {
  for (const item of category.items ?? []) {
    const before = item.recipes ?? [];
    item.recipes = before.filter((slug) => validSlugs.has(slug));
    removed += before.length - item.recipes.length;
    item.recipeCount = item.recipes.length;
  }
  category.items = (category.items ?? []).filter((item) => item.recipes.length > 0);
}

fs.writeFileSync(mapPath, `${JSON.stringify(map)}\n`, "utf8");
console.log(`[ingredient-map] removed ${removed} stale recipe references`);
