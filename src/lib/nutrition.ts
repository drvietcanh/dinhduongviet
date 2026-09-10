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

function hasAnyText(text: string, patterns: RegExp[]) {
  return patterns.some((pattern) => pattern.test(text));
}

export function recipePublicNote(recipe: Recipe, nutrients = calculateRecipe(recipe)) {
  const base = recipe.note?.trim() || "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.";
  const sourceText = [
    recipe.name,
    recipe.portionNote,
    recipe.note,
    ...recipe.items.map((item) => item.note),
  ].filter(Boolean).join(" ");
  const recipeText = [recipe.name, recipe.portionNote, recipe.note].filter(Boolean).join(" ");
  const additions: string[] = [];

  const isEstimate = recipe.confidence === "low" || recipe.sourceId === "recipe-estimate-v1";
  const hasVariabilityNote = hasAnyText(base, [/ước tính/i, /tham khảo/i, /dao động/i, /thay đổi/i, /tùy/i, /khẩu phần/i, /công thức/i, /nhãn/i]);
  if (isEstimate && !hasVariabilityNote) {
    additions.push("Giá trị chỉ nên xem là tham khảo vì khẩu phần, công thức và cách nêm có thể dao động.");
  }

  const saltyByName = hasAnyText(recipeText, [/kho/i, /mắm/i, /muối/i, /lẩu/i, /phở/i, /bún/i, /hủ tiếu/i, /mì/i, /miến/i, /nước chấm/i, /xì dầu/i, /nước tương/i]);
  const saltyByIngredients = hasAnyText(sourceText, [/nước mắm/i, /mắm/i, /xì dầu/i, /nước tương/i, /mắm tôm/i, /dưa muối/i, /cà muối/i, /gia vị mặn/i]);
  const highSodium = (nutrients.sodiumMg ?? 0) >= 800 || saltyByName || saltyByIngredients;
  if (highSodium && !hasAnyText(base, [/muối/i, /natri/i, /nước mắm/i, /nước chấm/i, /gia vị mặn/i])) {
    additions.push("Người cần hạn chế muối/natri nên giảm nước chấm, nước dùng và gia vị mặn.");
  }

  const friedOrOily = hasAnyText(recipeText, [/chiên/i, /rán/i, /xào/i, /áp chảo/i, /mỡ hành/i, /heo quay/i, /thịt quay/i, /quay/i]);
  if (friedOrOily && !hasAnyText(base, [/dầu/i, /mỡ/i, /chiên/i, /rán/i, /xào/i, /hấp thụ/i, /thấm dầu/i])) {
    additions.push("Lượng dầu/mỡ hấp thụ khi chiên, rán hoặc xào có thể làm năng lượng tăng đáng kể.");
  }

  const diseaseContext = hasAnyText(recipeText, [/đái tháo đường/i, /tiểu đường/i, /\bCKD\b/i, /bệnh thận/i, /suy thận/i, /gout/i, /tăng huyết áp/i, /tim mạch/i]);
  if (diseaseContext && !hasAnyText(base, [/cá thể/i, /bác sĩ/i, /chuyên gia/i, /xét nghiệm/i, /không thay thế/i, /tư vấn/i])) {
    additions.push("Nếu dùng cho chế độ ăn điều trị, cần cá thể hóa theo bệnh nền, thuốc và xét nghiệm.");
  }

  return additions.length > 0 ? `${base} ${additions.join(" ")}` : base;
}

export function foodPublicNote(food: Food) {
  const base = food.note?.trim() || "Giá trị tham khảo theo 100g phần ăn được.";
  const text = [
    food.name,
    food.category,
    food.state,
    food.basis,
    food.edibleNote,
    food.note,
    food.basisNote,
    food.reviewNote,
  ].filter(Boolean).join(" ");
  const additions: string[] = [];

  const isEstimate =
    food.confidence === "low" ||
    food.dataQuality === "recipe_estimate" ||
    food.sourceId === "recipe-estimate-v1" ||
    food.sourceReviewStatus === "recipe_estimate_only";
  if (isEstimate && !hasAnyText(base, [/ước tính/i, /tham khảo/i, /dao động/i, /thay đổi/i, /tùy/i, /khẩu phần/i, /công thức/i, /nhãn/i])) {
    additions.push("Giá trị nên đọc như tham khảo vì công thức, nhãn hàng, phần ăn được và cách chế biến có thể khác.");
  }

  const needsReview =
    food.needsDietitianReview ||
    food.needsExternalSource ||
    food.sourceReviewStatus === "needs_better_source" ||
    food.sourceReviewStatus === "candidate_pending_dietitian_review" ||
    food.sourceReviewStatus === "needs_external_source";
  if (needsReview && !hasAnyText(base, [/cần/i, /đối chiếu/i, /rà soát/i, /chuyên gia/i, /nguồn/i, /nhãn/i])) {
    additions.push("Mục này cần đối chiếu thêm nguồn hoặc chuyên gia trước khi dùng cho tư vấn cá thể.");
  }

  const highSodium = (food.nutrients.sodiumMg ?? 0) >= 400 || hasAnyText(text, [/mắm/i, /muối/i, /nước tương/i, /xì dầu/i, /đồ hộp/i, /mì gói/i, /snack/i, /xúc xích/i, /lạp xưởng/i]);
  if (highSodium && !hasAnyText(base, [/muối/i, /natri/i, /mặn/i, /nước chấm/i, /gia vị/i])) {
    additions.push("Người tăng huyết áp, bệnh thận hoặc suy tim nên chú ý khẩu phần vì natri/muối có thể cao.");
  }

  const processedFat = food.state === "processed" && ((food.nutrients.saturatedFatG ?? 0) >= 5 || hasAnyText(text, [/xúc xích/i, /lạp xưởng/i, /thịt hộp/i, /pate/i, /paté/i, /heo quay/i, /thịt quay/i]));
  if (processedFat && !hasAnyText(base, [/béo bão hòa/i, /mỡ/i, /chất béo/i, /cholesterol/i])) {
    additions.push("Thực phẩm chế biến có thể nhiều chất béo bão hòa; nên đối chiếu nhãn nếu cần kiểm soát mỡ máu.");
  }

  return additions.length > 0 ? `${base} ${additions.join(" ")}` : base;
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
  return "ước tính tham khảo";
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
