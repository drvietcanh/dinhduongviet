import { foods, recipes, sources, type Food, type NutrientValues, type Recipe } from "../data/nutrition";

export const primaryNutrients: (keyof NutrientValues)[] = ["energyKcal", "proteinG", "carbG", "fatG", "fiberG", "sodiumMg"];
export const detailNutrients: (keyof NutrientValues)[] = [
  "energyKcal",
  "proteinG",
  "carbG",
  "fatG",
  "fiberG",
  "sugarG",
  "cholesterolMg",
  "saturatedFatG",
  "sodiumMg",
  "potassiumMg",
  "calciumMg",
  "ironMg",
  "zincMg",
  "magnesiumMg",
  "seleniumMcg",
  "vitaminAUg",
  "vitaminCMg",
  "vitaminDMcg",
  "vitaminEMg",
  "vitaminB12Mcg",
  "folateUg",
  "phosphorusMg",
  "glycemicIndex"
];

export function sourceFor(id: string) {
  return sources.find((source) => source.id === id);
}

export function foodById(id: string) {
  return foods.find((food) => food.id === id);
}

export function foodBySlug(slug: string) {
  return foods.find((food) => food.slug === slug);
}

export function recipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function scaleNutrients(nutrients: NutrientValues, grams: number): NutrientValues {
  const ratio = grams / 100;
  return mapNutrients(nutrients, (value) => value * ratio);
}

export function calculateRecipe(recipe: Recipe): NutrientValues {
  // First pass: sum all additive nutrients
  const sum = recipe.items.reduce<NutrientValues>((total, item) => {
    const food = foodById(item.foodId);
    if (!food) return total;
    return addNutrients(total, scaleNutrients(food.nutrients, item.amountG));
  }, emptyNutrients());

  // Second pass: calculate glycemicIndex as weighted average by carb contribution
  // GI is NOT additive — must be weighted by each ingredient's carb share
  const totalCarb = sum.carbG;
  if (totalCarb > 0) {
    let giNumerator = 0;
    let giWeightSum = 0;
    recipe.items.forEach(item => {
      const food = foodById(item.foodId);
      if (!food) return;
      const gi = food.nutrients.glycemicIndex;
      if (gi != null) {
        const ingCarb = (food.nutrients.carbG ?? 0) * item.amountG / 100;
        giNumerator += gi * ingCarb;
        giWeightSum += ingCarb;
      }
    });
    if (giWeightSum > 0) {
      sum.glycemicIndex = Math.round((giNumerator / giWeightSum) * 10) / 10;
    } else {
      delete sum.glycemicIndex;
    }
  } else {
    delete sum.glycemicIndex;
  }

  return sum;
}

export function searchAll(query: string) {
  const normalized = normalize(query);
  if (!normalized) return { foods: foods.slice(0, 6), recipes: recipes.slice(0, 6) };

  const foodResults = foods.filter((food) => searchableText(food).includes(normalized));
  const recipeResults = recipes.filter((recipe) => searchableText(recipe).includes(normalized));
  return { foods: foodResults, recipes: recipeResults };
}

// Vietnamese tag labels
const tagLabels: Record<string, string> = {
  "vegan": "Thuần chay",
  "vegetarian": "Chay",
  "gluten-free": "Không gluten",
  "gluten": "Có gluten",
  "low-carb": "Ít carb",
  "alcohol": "Có cồn",
  "high-protein": "Nhiều đạm",
  "low-calorie": "Ít kcal",
  "high-calorie": "Nhiều kcal",
  "high-sugar": "Nhiều đường",
  "high-fiber": "Giàu xơ",
  "high-calcium": "Giàu canxi",
  "iron-rich": "Giàu sắt",
  "vitamin-c-rich": "Giàu vitamin C",
  "glycemic-index-low": "GI thấp",
  "glycemic-index-medium": "GI trung bình",
  "glycemic-index-high": "GI cao",
  "glycemic-load-low": "GL thấp",
  "glycemic-load-medium": "GL trung bình",
  "glycemic-load-high": "GL cao",
  "low-purine": "Ít purin",
  "moderate-purine": "Purin vừa",
  "high-purine": "Nhiều purin",
  "low-sodium": "Ít natri",
  "moderate-sodium": "Natri vừa",
  "high-sodium": "Nhiều natri",
  "low-potassium": "Ít kali",
  "moderate-potassium": "Kali vừa",
  "high-potassium": "Nhiều kali",
  "low-fat": "Ít béo",
  "high-fat": "Nhiều béo",
};

export function tagLabel(tag: string): string {
  return tagLabels[tag] ?? tag;
}

export function computeNutrientTags(n: NutrientValues): string[] {
  const tags: string[] = [];
  
  // ── Glycemic Index (GI) & Glycemic Load (GL) ──
  const gi = n.glycemicIndex;
  const carb = n.carbG ?? 0;
  if (gi !== undefined) {
    // GL = GI × carbs(g) / 100
    const gl = (gi * carb) / 100;
    if (gi <= 55) tags.push("glycemic-index-low");
    else if (gi <= 69) tags.push("glycemic-index-medium");
    else tags.push("glycemic-index-high");
    if (gl <= 10) tags.push("glycemic-load-low");
    else if (gl <= 19) tags.push("glycemic-load-medium");
    else tags.push("glycemic-load-high");
  } else {
    // Fallback proxy (no GI data)
    const netCarb = carb - (n.fiberG ?? 0);
    const sugar = n.sugarG ?? 0;
    if (netCarb <= 5 && carb <= 10) tags.push("glycemic-index-low");
    else if (netCarb > 20 || sugar > 10) tags.push("glycemic-index-high");
    else tags.push("glycemic-index-medium");
  }

  // Purin (proxy by protein content)
  if ((n.proteinG ?? 0) >= 20) tags.push("high-purine");
  else if ((n.proteinG ?? 0) >= 10) tags.push("moderate-purine");
  else tags.push("low-purine");

  // Sodium
  const sodium = n.sodiumMg ?? 0;
  if (sodium > 400) tags.push("high-sodium");
  else if (sodium > 100) tags.push("moderate-sodium");
  else tags.push("low-sodium");

  // Potassium
  const potassium = n.potassiumMg ?? 0;
  if (potassium > 400) tags.push("high-potassium");
  else if (potassium > 150) tags.push("moderate-potassium");
  else tags.push("low-potassium");

  // Fat class
  const fat = n.fatG ?? 0;
  if (fat > 20) tags.push("high-fat");
  else if (fat <= 5) tags.push("low-fat");

  return tags;
}

export function allTags(item: { nutrients?: NutrientValues; tags?: string[] }): string[] {
  const tags = [...(item.tags ?? [])];
  if (item.nutrients) {
    tags.push(...computeNutrientTags(item.nutrients));
  }
  return tags;
}

export function foodCategoryCounts() {
  return foods
    .reduce<{ category: string; count: number }[]>((groups, food) => {
      const existing = groups.find((group) => group.category === food.category);
      if (existing) {
        existing.count += 1;
      } else {
        groups.push({ category: food.category, count: 1 });
      }
      return groups;
    }, [])
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category, "vi"));
}

export function dataSummary() {
  const categories = foodCategoryCounts();
  return {
    totalFoods: foods.length,
    totalRecipes: recipes.length,
    totalCategories: categories.length,
    categories
  };
}

export function confidenceLabel(confidence: Food["confidence"]) {
  if (confidence === "high") return "Độ tin cậy cao";
  if (confidence === "medium") return "Cần đối chiếu nguồn";
  return "Ước tính MVP";
}

export function formatValue(value: number | undefined) {
  if (value === undefined || Number.isNaN(value)) return "—";
  if (value >= 100) return value.toLocaleString("vi-VN", { maximumFractionDigits: 0 });
  if (value >= 10) return value.toLocaleString("vi-VN", { maximumFractionDigits: 1, minimumFractionDigits: 0 });
  return value.toLocaleString("vi-VN", { maximumFractionDigits: 2, minimumFractionDigits: 0 });
}

function emptyNutrients(): NutrientValues {
  return { energyKcal: 0, proteinG: 0, carbG: 0, fatG: 0 };
}

function addNutrients(a: NutrientValues, b: NutrientValues): NutrientValues {
  const keys = new Set([...(Object.keys(a) as (keyof NutrientValues)[]), ...(Object.keys(b) as (keyof NutrientValues)[])]);
  const out: Partial<NutrientValues> = {};
  keys.forEach((key) => {
    out[key] = (a[key] ?? 0) + (b[key] ?? 0);
  });
  return out as NutrientValues;
}

function mapNutrients(nutrients: NutrientValues, fn: (value: number) => number): NutrientValues {
  const out: Partial<NutrientValues> = {};
  (Object.keys(nutrients) as (keyof NutrientValues)[]).forEach((key) => {
    const value = nutrients[key];
    if (value !== undefined) out[key] = fn(value);
  });
  return out as NutrientValues;
}

function searchableText(item: { name: string; aliases: string[]; category?: string }) {
  return normalize([item.name, item.category, ...item.aliases].filter(Boolean).join(" "));
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}
