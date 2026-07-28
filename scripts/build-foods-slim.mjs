import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const inputPath = path.join(root, "dist", "api-foods.json");
const outputPath = path.join(root, "public", "api", "foods-slim.json");

function kcalOf(food) {
  const value = food?.nutrients?.energyKcal;
  return Number.isFinite(value) ? Math.round(value) : 0;
}

function normalizeAlias(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function aliasesOf(food) {
  const aliases = Array.isArray(food.aliases) ? food.aliases : [];
  const normalizedName = normalizeAlias(food.name);
  if (!normalizedName) return aliases;
  const seen = new Set(aliases.map(normalizeAlias));
  return seen.has(normalizedName) ? aliases : [...aliases, normalizedName];
}

const foods = JSON.parse(await readFile(inputPath, "utf8"));
const slim = foods.map((food) => ({
  slug: food.slug,
  name: food.name,
  aliases: aliasesOf(food),
  category: food.category,
  kcal: kcalOf(food),
  state: food.state,
  basis: food.basis
}));

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, JSON.stringify(slim, null, 0), "utf8");

console.log(`Written ${path.relative(root, outputPath)}: ${slim.length} foods`);
