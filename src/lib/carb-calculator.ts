export type CarbWarningCode = "missing_carb" | "invalid_grams" | "invalid_carb";

export interface CarbFoodInput {
  foodId?: string;
  slug?: string;
  name: string;
  grams: number;
  carbPer100g: number | null | undefined;
  sourceConfidence?: "high" | "medium" | "low" | string;
  dataQuality?: string;
}

export interface CarbMealItemResult {
  foodId?: string;
  slug?: string;
  name: string;
  grams: number;
  carbPer100g: number | null;
  carbGrams: number | null;
  contributionPercent: number | null;
  warnings: string[];
  warningCodes: CarbWarningCode[];
  sourceConfidence?: string;
  dataQuality?: string;
}

export interface CarbMealResult {
  ok: boolean;
  totalCarbGrams: number;
  carbServings: number | null;
  carbServingGrams: number;
  items: CarbMealItemResult[];
  warnings: string[];
  errors: string[];
}

export const CARB_SERVING_GRAMS = 15;
export const CARB_GRAMS_MIN = 0.1;
export const CARB_GRAMS_MAX = 2000;

export const CARB_GLOBAL_SAFETY_NOTE =
  "Công cụ chỉ ước tính gram carbohydrate trong bữa ăn. Không tự chỉnh insulin, sulfonylurea hoặc thuốc hạ đường huyết dựa vào kết quả này. Người đang dùng thuốc có nguy cơ hạ đường huyết, trẻ em, thai kỳ, CKD, bệnh nặng hoặc hay hạ đường huyết cần kế hoạch cá thể hóa với bác sĩ/dinh dưỡng viên.";

export const CARB_CONTEXT_NOTE =
  "Đường huyết sau ăn còn phụ thuộc GI, chất xơ, chất béo, đạm, vận động, thời điểm ăn, thuốc và sai số khi cân đo khẩu phần/cách nấu.";

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

function validFinite(value: number | null | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function calculateCarbMeal(
  foods: CarbFoodInput[],
  options: { includeCarbServings?: boolean; carbServingGrams?: number } = {},
): CarbMealResult {
  const carbServingGrams = options.carbServingGrams ?? CARB_SERVING_GRAMS;
  const includeCarbServings = options.includeCarbServings ?? true;
  const errors: string[] = [];

  const items: CarbMealItemResult[] = foods.map((food) => {
    const warnings: string[] = [];
    const warningCodes: CarbWarningCode[] = [];
    const grams = food.grams;
    const carbPer100g = food.carbPer100g;

    if (!validFinite(grams) || grams < CARB_GRAMS_MIN || grams > CARB_GRAMS_MAX) {
      const message = `Khối lượng của "${food.name}" cần nằm trong khoảng ${CARB_GRAMS_MIN}-${CARB_GRAMS_MAX} g.`;
      warnings.push(message);
      warningCodes.push("invalid_grams");
      errors.push(message);
    }

    if (carbPer100g == null) {
      warnings.push(`"${food.name}" chưa có dữ liệu carbohydrate/100g nên chưa được tính vào tổng.`);
      warningCodes.push("missing_carb");
    } else if (!validFinite(carbPer100g) || carbPer100g < 0) {
      warnings.push(`Dữ liệu carbohydrate của "${food.name}" không hợp lệ nên chưa được tính vào tổng.`);
      warningCodes.push("invalid_carb");
    }

    const canCalculate =
      warningCodes.indexOf("invalid_grams") === -1 &&
      warningCodes.indexOf("missing_carb") === -1 &&
      warningCodes.indexOf("invalid_carb") === -1 &&
      validFinite(grams) &&
      validFinite(carbPer100g);

    return {
      foodId: food.foodId,
      slug: food.slug,
      name: food.name,
      grams,
      carbPer100g: validFinite(carbPer100g) ? carbPer100g : null,
      carbGrams: canCalculate ? round1((carbPer100g * grams) / 100) : null,
      contributionPercent: null,
      warnings,
      warningCodes,
      sourceConfidence: food.sourceConfidence,
      dataQuality: food.dataQuality,
    };
  });

  const totalCarbGrams = round1(items.reduce((sum, item) => sum + (item.carbGrams ?? 0), 0));
  items.forEach((item) => {
    item.contributionPercent = totalCarbGrams > 0 && item.carbGrams != null
      ? round1((item.carbGrams / totalCarbGrams) * 100)
      : null;
  });

  const warnings = items.flatMap((item) => item.warnings);

  return {
    ok: errors.length === 0,
    totalCarbGrams,
    carbServings: includeCarbServings && carbServingGrams > 0 ? round1(totalCarbGrams / carbServingGrams) : null,
    carbServingGrams,
    items,
    warnings,
    errors,
  };
}
