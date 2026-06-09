// ── Module tra cứu thực phẩm Việt Nam (Bảng TP Việt Nam 2007) ──
// Data gốc: SQLite nutrition_final_with_core.sqlite
// Exported to /public/api/vietnam-foods.json (core) + vietnam-nutrients.json (full)

export interface VietnamFood {
  stt: number;
  code: string;
  name_vi: string;
  name_en: string | null;
  waste_percent: number | null;
  // core nutrients (nullable)
  water_g: number | null;
  energy_kcal: number | null;
  energy_kj: number | null;
  protein_g: number | null;
  lipid_g: number | null;
  glucid_g: number | null;
  fiber_g: number | null;
  ash_g: number | null;
  sugar_g: number | null;
  calcium_mg: number | null;
  iron_mg: number | null;
  magnesium_mg: number | null;
  manganese_mg: number | null;
  phosphorus_mg: number | null;
  potassium_mg: number | null;
  sodium_mg: number | null;
  zinc_mg: number | null;
  copper_ug: number | null;
  selenium_ug: number | null;
  vitamin_c_mg: number | null;
  vitamin_b1_mg: number | null;
  vitamin_b2_mg: number | null;
  vitamin_pp_mg: number | null;
  vitamin_b5_mg: number | null;
  vitamin_b6_mg: number | null;
  folate_ug: number | null;
  vitamin_b12_ug: number | null;
  vitamin_a_ug: number | null;
  vitamin_d_ug: number | null;
  vitamin_e_mg: number | null;
  vitamin_k_ug: number | null;
  beta_carotene_ug: number | null;
  cholesterol_mg: number | null;
  purin_mg: number | null;
}

export interface VietnamNutrient {
  id: number;
  stt: number;
  code: string;
  name_vi: string;
  nutrient_key: string;
  nutrient_name: string;
  unit: string;
  value_text: string;
  value_num: number | null;
  source_ref: string | null;
  per: string | null;
  source: string | null;
}

// ── Cached data (loaded once) ──
let _foods: VietnamFood[] | null = null;
let _nutrients: VietnamNutrient[] | null = null;
let _foodsByCode: Map<string, VietnamFood> | null = null;

async function loadFoods(): Promise<VietnamFood[]> {
  if (_foods) return _foods;
  const res = await fetch("/api/vietnam-foods.json");
  _foods = await res.json() as VietnamFood[];
  // Build code index
  _foodsByCode = new Map();
  for (const f of _foods) {
    _foodsByCode.set(f.code, f);
  }
  return _foods;
}

async function loadNutrients(): Promise<VietnamNutrient[]> {
  if (_nutrients) return _nutrients;
  const res = await fetch("/api/vietnam-nutrients.json");
  _nutrients = await res.json() as VietnamNutrient[];
  return _nutrients;
}

// ── Public API ──

/** Tìm thực phẩm theo keyword (name_vi, name_en, code) */
export async function searchFood(keyword: string): Promise<VietnamFood[]> {
  const foods = await loadFoods();
  const q = keyword.toLowerCase().trim();
  if (!q) return foods;

  return foods.filter((f) => {
    if (f.code.toLowerCase() === q) return true;
    if (f.name_vi.toLowerCase().includes(q)) return true;
    if (f.name_en && f.name_en.toLowerCase().includes(q)) return true;
    return false;
  }).slice(0, 50);
}

/** Lấy thông tin thực phẩm theo code */
export async function getFoodByCode(code: string): Promise<VietnamFood | null> {
  await loadFoods();
  return _foodsByCode?.get(code) ?? null;
}

/** Lấy toàn bộ chất dinh dưỡng của một thực phẩm */
export async function getNutrientsByCode(code: string): Promise<VietnamNutrient[]> {
  const nutrients = await loadNutrients();
  return nutrients.filter((n) => n.code === code);
}

/** Lấy các chỉ số core (từ nutrition_core) */
export async function getCoreNutrition(code: string): Promise<VietnamFood | null> {
  return getFoodByCode(code);
}

/** Tính dinh dưỡng theo khối lượng grams */
export async function calculateByWeight(code: string, grams: number): Promise<{
  food: VietnamFood | null;
  nutrients: Record<string, number | null>;
}> {
  const food = await getFoodByCode(code);
  if (!food) return { food: null, nutrients: {} };

  const factor = grams / 100;
  const keys = [
    "energy_kcal", "protein_g", "lipid_g", "glucid_g", "fiber_g",
    "calcium_mg", "iron_mg", "magnesium_mg", "phosphorus_mg",
    "potassium_mg", "sodium_mg", "zinc_mg",
    "vitamin_c_mg", "cholesterol_mg", "purin_mg", "ash_g", "sugar_g",
    "vitamin_a_ug", "vitamin_d_ug", "vitamin_e_mg",
    "vitamin_b1_mg", "vitamin_b2_mg", "vitamin_pp_mg",
    "vitamin_b6_mg", "folate_ug", "vitamin_b12_ug",
  ];

  const result: Record<string, number | null> = {};
  for (const key of keys) {
    const val = (food as any)[key];
    result[key] = val !== null && val !== undefined ? parseFloat((val * factor).toFixed(2)) : null;
  }
  result.grams = grams;
  return { food, nutrients: result };
}
