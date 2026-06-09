import { calculateCarbMeal, type CarbFoodInput } from "./carb-calculator";
import type { GiCategory, GiMatchQuality } from "../data/glycemic-index";

export type GlycemicLoadWarningCode =
  | "missing_gi"
  | "invalid_gi"
  | "estimated_gi_not_used"
  | "gi_match_close"
  | "gi_match_generic"
  | "gi_match_estimated"
  | "missing_carb"
  | "invalid_carb"
  | "invalid_grams";

export type GlycemicLoadCategory = "low" | "medium" | "high";

export interface GlycemicIndexInput {
  gi: number | null | undefined;
  giCategory?: GiCategory | null;
  matchQuality: GiMatchQuality;
  sourceLabel?: string;
  sourceUrl?: string;
  note?: string;
}

export interface GlycemicLoadFoodInput extends CarbFoodInput {
  glycemicIndex?: GlycemicIndexInput | null;
}

export interface GlycemicLoadMealItemResult {
  foodId?: string;
  slug?: string;
  name: string;
  grams: number;
  carbPer100g: number | null;
  carbGrams: number | null;
  gi: number | null;
  giCategory: GiCategory | null;
  matchQuality: GiMatchQuality;
  sourceLabel?: string;
  sourceUrl?: string;
  giNote?: string;
  gl: number | null;
  glCategory: GlycemicLoadCategory | null;
  contributionPercent: number | null;
  warnings: string[];
  warningCodes: GlycemicLoadWarningCode[];
  sourceConfidence?: string;
  dataQuality?: string;
}

export interface GlycemicLoadMealResult {
  ok: boolean;
  totalCarbGrams: number;
  totalGL: number;
  totalGLCategory: GlycemicLoadCategory | null;
  items: GlycemicLoadMealItemResult[];
  warnings: string[];
  errors: string[];
  safetyNote: string;
  totalCarbNote: string;
}

export const GL_TOTAL_CARB_NOTE =
  "V1 dùng tổng carbohydrate vì dữ liệu carb khả dụng/chất xơ chưa được khóa nhất quán cho từng món. Kết quả là ước tính giản lược, không phải dự đoán chắc chắn đường huyết cá nhân.";

export const GL_GLOBAL_SAFETY_NOTE =
  "GL chỉ là chỉ số giáo dục. Không tự chỉnh insulin, sulfonylurea hoặc thuốc hạ đường huyết dựa vào kết quả này. Đường huyết sau ăn còn phụ thuộc tổng carb, GI, chất xơ, chất béo, đạm, cách nấu, vận động, thời điểm ăn, thuốc và đáp ứng cá nhân.";

export const GL_CLINICAL_CONTEXT_NOTE =
  "Thai kỳ, trẻ em, CKD, bệnh nặng, người hay hạ đường huyết hoặc đang dùng thuốc có nguy cơ hạ đường huyết cần kế hoạch cá thể hóa với bác sĩ/dinh dưỡng viên.";

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

function validFinite(value: number | null | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function categorizeGL(value: number | null | undefined): GlycemicLoadCategory | null {
  if (!validFinite(value)) return null;
  if (value <= 10) return "low";
  if (value <= 19) return "medium";
  return "high";
}

export function matchQualityLabel(matchQuality: GiMatchQuality): string {
  if (matchQuality === "exact") return "Nguồn khớp trực tiếp";
  if (matchQuality === "close") return "Nguồn gần đúng";
  if (matchQuality === "generic") return "Ước tính theo nhóm thực phẩm";
  if (matchQuality === "estimated") return "Ước tính nội bộ, cần rà nguồn";
  return "Chưa có GI phù hợp";
}

export function calculateGlycemicLoadMeal(
  foods: GlycemicLoadFoodInput[],
  options: { includeEstimatedGi?: boolean } = {},
): GlycemicLoadMealResult {
  const includeEstimatedGi = options.includeEstimatedGi ?? false;
  const carbResult = calculateCarbMeal(foods, { includeCarbServings: false });
  const errors = [...carbResult.errors];

  const items = carbResult.items.map<GlycemicLoadMealItemResult>((carbItem, index) => {
    const input = foods[index];
    const giInput = input.glycemicIndex;
    const warnings = [...carbItem.warnings];
    const warningCodes: GlycemicLoadWarningCode[] = carbItem.warningCodes.slice() as GlycemicLoadWarningCode[];
    const matchQuality = giInput?.matchQuality ?? "no_gi";
    const rawGi = giInput?.gi;
    const gi = validFinite(rawGi) ? rawGi : null;

    if (matchQuality === "no_gi" || giInput == null || rawGi == null) {
      warnings.push(`"${carbItem.name}" chưa có GI phù hợp nên chưa được tính GL.`);
      warningCodes.push("missing_gi");
    } else if (!validFinite(rawGi) || rawGi < 0 || rawGi > 100) {
      warnings.push(`GI của "${carbItem.name}" không hợp lệ nên chưa được tính GL.`);
      warningCodes.push("invalid_gi");
    } else if (matchQuality === "estimated" && !includeEstimatedGi) {
      warnings.push(`GI của "${carbItem.name}" mới là ước tính nội bộ nên chưa được tính GL mặc định.`);
      warningCodes.push("estimated_gi_not_used");
    } else if (matchQuality === "close") {
      warnings.push(`GI của "${carbItem.name}" là match gần đúng; kết quả GL chỉ nên dùng để học và trao đổi với chuyên gia.`);
      warningCodes.push("gi_match_close");
    } else if (matchQuality === "generic") {
      warnings.push(`GI của "${carbItem.name}" lấy theo nhóm thực phẩm; cách nấu và giống thực phẩm có thể làm GL thay đổi.`);
      warningCodes.push("gi_match_generic");
    } else if (matchQuality === "estimated") {
      warnings.push(`GI của "${carbItem.name}" là ước tính nội bộ, độ tin cậy thấp.`);
      warningCodes.push("gi_match_estimated");
    }

    const canCalculate =
      carbItem.carbGrams != null &&
      gi != null &&
      warningCodes.indexOf("invalid_grams") === -1 &&
      warningCodes.indexOf("missing_carb") === -1 &&
      warningCodes.indexOf("invalid_carb") === -1 &&
      warningCodes.indexOf("missing_gi") === -1 &&
      warningCodes.indexOf("invalid_gi") === -1 &&
      warningCodes.indexOf("estimated_gi_not_used") === -1;

    const gl = canCalculate ? round1((gi * carbItem.carbGrams) / 100) : null;

    return {
      foodId: carbItem.foodId,
      slug: carbItem.slug,
      name: carbItem.name,
      grams: carbItem.grams,
      carbPer100g: carbItem.carbPer100g,
      carbGrams: carbItem.carbGrams,
      gi,
      giCategory: giInput?.giCategory ?? null,
      matchQuality,
      sourceLabel: giInput?.sourceLabel,
      sourceUrl: giInput?.sourceUrl,
      giNote: giInput?.note,
      gl,
      glCategory: categorizeGL(gl),
      contributionPercent: null,
      warnings,
      warningCodes,
      sourceConfidence: carbItem.sourceConfidence,
      dataQuality: carbItem.dataQuality,
    };
  });

  const totalGL = round1(items.reduce((sum, item) => sum + (item.gl ?? 0), 0));
  items.forEach((item) => {
    item.contributionPercent = totalGL > 0 && item.gl != null
      ? round1((item.gl / totalGL) * 100)
      : null;
  });

  return {
    ok: errors.length === 0,
    totalCarbGrams: carbResult.totalCarbGrams,
    totalGL,
    totalGLCategory: categorizeGL(totalGL),
    items,
    warnings: items.flatMap((item) => item.warnings),
    errors,
    safetyNote: GL_GLOBAL_SAFETY_NOTE,
    totalCarbNote: GL_TOTAL_CARB_NOTE,
  };
}
