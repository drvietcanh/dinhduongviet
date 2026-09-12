import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const recipesPath = path.join(root, "dist", "api-recipes.json");
const foodsPath = path.join(root, "dist", "api-foods.json");

if (!fs.existsSync(recipesPath) || !fs.existsSync(foodsPath)) {
  console.error("[qa:recipes] Chưa có dist/api-recipes.json hoặc dist/api-foods.json; chạy npm run build trước.");
  process.exit(1);
}

const recipes = JSON.parse(fs.readFileSync(recipesPath, "utf8"));
const foods = JSON.parse(fs.readFileSync(foodsPath, "utf8"));
const foodIds = new Set(foods.map((food) => food.id));

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const errors = [];
const duplicateNames = [];
const nameIndex = new Map();
const slugIndex = new Map();
let ingredientTotalMismatches = 0;
let documentedWeightMismatches = 0;

for (const recipe of recipes) {
  if (!recipe.id || !recipe.slug || !recipe.name) errors.push(`${recipe.id ?? "<unknown>"}: thiếu id/slug/name`);
  if (!Number.isFinite(recipe.servingWeightG) || recipe.servingWeightG <= 0) errors.push(`${recipe.id}: servingWeightG không hợp lệ`);
  if (!Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) errors.push(`${recipe.id}: không có ingredients`);

  const normalizedName = normalize(recipe.name ?? "");
  if (!nameIndex.has(normalizedName)) nameIndex.set(normalizedName, []);
  nameIndex.get(normalizedName).push(recipe.id);
  if (!slugIndex.has(recipe.slug)) slugIndex.set(recipe.slug, []);
  slugIndex.get(recipe.slug).push(recipe.id);

  let ingredientTotal = 0;
  for (const ingredient of recipe.ingredients ?? []) {
    if (!foodIds.has(ingredient.foodId)) errors.push(`${recipe.id}: foodId không tồn tại: ${ingredient.foodId}`);
    if (!Number.isFinite(ingredient.amountG) || ingredient.amountG <= 0) errors.push(`${recipe.id}: amountG không hợp lệ cho ${ingredient.foodId}`);
    ingredientTotal += ingredient.amountG || 0;
  }

  // Nước/độ ẩm thường không được ghi như một thực phẩm có năng lượng,
  // vì vậy đây là chỉ số cảnh báo để rà soát thủ công, không phải lỗi build.
  const delta = Math.abs(ingredientTotal - recipe.servingWeightG);
  if (delta > Math.max(40, recipe.servingWeightG * 0.25)) {
    ingredientTotalMismatches += 1;
    if (recipe.weightNote) documentedWeightMismatches += 1;
  }
}

for (const [name, ids] of nameIndex) {
  if (name && ids.length > 1) duplicateNames.push({ name, ids });
}
for (const [slug, ids] of slugIndex) {
  if (ids.length > 1) errors.push(`slug trùng: ${slug} (${ids.join(", ")})`);
}

console.log(`[qa:recipes] ${recipes.length} món, ${foods.length} thực phẩm tham chiếu`);
console.log(`[qa:recipes] ${ingredientTotalMismatches} món có chênh lệch khối lượng thành phẩm/nguyên liệu; ${documentedWeightMismatches} món đã có ghi chú giải thích nước, độ ẩm hoặc hao hụt`);
if (duplicateNames.length) console.log(`[qa:recipes] Trùng tên chuẩn hóa: ${duplicateNames.map((item) => `${item.name} [${item.ids.join(", ")}]`).join("; ")}`);

if (duplicateNames.length || errors.length) {
  if (errors.length) console.error(errors.map((error) => `[qa:recipes] ${error}`).join("\n"));
  process.exit(1);
}

console.log("[qa:recipes] PASS: không có foodId hỏng, amountG lỗi, slug trùng hoặc tên món trùng.");
