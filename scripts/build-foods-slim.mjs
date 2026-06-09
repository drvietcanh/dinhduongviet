import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const inputPath = path.join(root, "dist", "api-foods.json");
const outputPath = path.join(root, "public", "api", "foods-slim.json");

function kcalOf(food) {
  const value = food?.nutrients?.energyKcal;
  return Number.isFinite(value) ? Math.round(value) : 0;
}

const foods = JSON.parse(await readFile(inputPath, "utf8"));
const slim = foods.map((food) => ({
  slug: food.slug,
  name: food.name,
  aliases: Array.isArray(food.aliases) ? food.aliases : [],
  category: food.category,
  kcal: kcalOf(food),
  state: food.state,
  basis: food.basis
}));

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, JSON.stringify(slim, null, 0), "utf8");

console.log(`Written ${path.relative(root, outputPath)}: ${slim.length} foods`);
