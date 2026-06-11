import { calculateCarbMeal, type CarbFoodInput } from "./carb-calculator";
import { calculateProteinRequirement } from "./protein-requirement";

export type MealAssessmentMode = "auto" | "caution" | "clinical_no_auto";
export type MealAssessmentSex = "male" | "female";
export type MealAssessmentActivity = "low" | "moderate" | "high";
export type MealAssessmentGoal = "maintain" | "mild_weight_loss" | "mild_weight_gain" | "healthy_eating";
export type MealAssessmentMealMode = "meal" | "day";

export interface MealAssessmentFlags {
  diabetesMedicationRisk?: boolean;
  chronicKidneyDisease?: boolean;
  dialysis?: boolean;
  heartFailureFluidRestriction?: boolean;
  hypertension?: boolean;
  medicallyPrescribedLowSalt?: boolean;
  goutHistory?: boolean;
  goutAcuteOrSevere?: boolean;
  cirrhosisAscites?: boolean;
  pregnancyLactation?: boolean;
  childTeen?: boolean;
  cancerMalnutrition?: boolean;
  foodAllergy?: boolean;
  eatingDisorder?: boolean;
  rapidUnintentionalWeightLoss?: boolean;
  acuteIllness?: boolean;
  vegetarian?: boolean;
  frailElderly?: boolean;
}

export interface MealAssessmentItemInput {
  id?: string;
  slug?: string;
  type?: "food" | "recipe" | "custom";
  name: string;
  grams: number;
  energyKcalPer100g: number | null | undefined;
  carbGPer100g: number | null | undefined;
  proteinGPer100g: number | null | undefined;
  fatGPer100g: number | null | undefined;
  fiberGPer100g?: number | null;
  sodiumMgPer100g?: number | null;
  sugarGPer100g?: number | null;
  sourceId?: string;
  confidence?: "high" | "medium" | "low" | string;
  dataQuality?: string;
  sourceReviewStatus?: string;
  needsExternalSource?: boolean;
  needsDietitianReview?: boolean;
}

export interface MealAssessmentInput {
  age: number;
  sex: MealAssessmentSex;
  weightKg: number;
  heightCm: number;
  activity: MealAssessmentActivity;
  generalGoal: MealAssessmentGoal;
  mealMode: MealAssessmentMealMode;
  selectedItems: MealAssessmentItemInput[];
  flags?: MealAssessmentFlags;
}

export interface MealAssessmentTotals {
  energyKcal: number;
  carbG: number;
  proteinG: number;
  fatG: number;
  fiberG: number | null;
  sodiumMg: number | null;
  sugarG: number | null;
}

export interface MealAssessmentItemResult extends MealAssessmentItemInput {
  energyKcal: number | null;
  carbG: number | null;
  proteinG: number | null;
  fatG: number | null;
  fiberG: number | null;
  sodiumMg: number | null;
  sugarG: number | null;
  warningCodes: string[];
  warnings: string[];
}

export interface MealAssessmentResult {
  ok: boolean;
  error?: string;
  mode: MealAssessmentMode;
  isPersonalTarget: boolean;
  totals: MealAssessmentTotals;
  items: MealAssessmentItemResult[];
  warnings: string[];
  modeMessages: string[];
  suggestions: string[];
  safetyMessages: string[];
  carbServings: number | null;
  proteinReference?: {
    minGPerDay?: number;
    maxGPerDay?: number;
    note: string;
  };
}

const WEIGHT_MIN_KG = 20;
const WEIGHT_MAX_KG = 250;
const HEIGHT_MIN_CM = 100;
const HEIGHT_MAX_CM = 230;
const AGE_MIN = 13;
const AGE_MAX = 120;
const GRAMS_MIN = 0.1;
const GRAMS_MAX = 3000;

export const MEAL_ASSESSMENT_GLOBAL_SAFETY_NOTE =
  "Công cụ chỉ dùng để ước tính và giáo dục dinh dưỡng, không thay thế tư vấn cá thể của bác sĩ hoặc dinh dưỡng viên.";

export const MEAL_ASSESSMENT_MEDICATION_SAFETY_NOTE =
  "Không tự thay đổi insulin, sulfonylurea, thuốc lợi tiểu, thuốc thận, thuốc gout hoặc thuốc đang dùng dựa vào kết quả này.";

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

function round0(value: number): number {
  return Math.round(value);
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function scale(value: number | null | undefined, grams: number): number | null {
  if (!isFiniteNumber(value) || !isFiniteNumber(grams) || grams < GRAMS_MIN || grams > GRAMS_MAX) return null;
  return round1((value * grams) / 100);
}

function clinicalReasons(flags: MealAssessmentFlags, age: number): string[] {
  const reasons: string[] = [];
  if (flags.diabetesMedicationRisk) reasons.push("Đái tháo đường đang dùng insulin/sulfonylurea cần kế hoạch carb cá thể hóa.");
  if (flags.chronicKidneyDisease) reasons.push("Bệnh thận mạn cần cá thể hóa đạm, natri, kali, phospho và dịch.");
  if (flags.dialysis) reasons.push("Lọc máu cần kế hoạch riêng theo lịch lọc và xét nghiệm.");
  if (flags.heartFailureFluidRestriction) reasons.push("Suy tim hoặc hạn chế dịch cần chỉ định riêng về natri và dịch.");
  if (flags.medicallyPrescribedLowSalt) reasons.push("Chế độ ăn nhạt theo y lệnh cần mục tiêu natri cá nhân.");
  if (flags.cirrhosisAscites) reasons.push("Xơ gan/cổ trướng hoặc phù cần cá thể hóa.");
  if (flags.pregnancyLactation) reasons.push("Thai kỳ/cho con bú cần tư vấn theo sản khoa và tình trạng mẹ bé.");
  if (flags.childTeen || age < 18) reasons.push("Trẻ em/vị thành niên cần đánh giá theo tăng trưởng.");
  if (flags.cancerMalnutrition) reasons.push("Ung thư hoặc suy dinh dưỡng cần đánh giá chuyên môn.");
  if (flags.eatingDisorder) reasons.push("Rối loạn ăn uống cần hỗ trợ chuyên môn.");
  if (flags.rapidUnintentionalWeightLoss) reasons.push("Sụt cân nhanh không chủ ý cần được khám.");
  if (flags.acuteIllness) reasons.push("Bệnh cấp, sốt, nôn, tiêu chảy, mất nước, khó thở hoặc phù tăng nhanh cần xử trí y tế.");
  if (flags.goutAcuteOrSevere) reasons.push("Gout đợt cấp hoặc nặng cần cá thể hóa, không đánh giá chỉ bằng tổng đạm.");
  return reasons;
}

function cautionReasons(input: MealAssessmentInput): string[] {
  const flags = input.flags ?? {};
  const reasons: string[] = [];
  if (input.age >= 65 || flags.frailElderly) reasons.push("Người cao tuổi hoặc yếu nên xem kết quả như tham khảo.");
  if (input.generalGoal === "mild_weight_loss") reasons.push("Giảm cân nhẹ cần theo dõi sức khỏe và không nên giảm ăn quá mức.");
  if (input.generalGoal === "mild_weight_gain") reasons.push("Tăng cân nhẹ nên ưu tiên chất lượng bữa ăn và theo dõi tiêu hóa.");
  if (input.activity === "high") reasons.push("Hoạt động cao làm nhu cầu thực tế biến thiên theo ngày.");
  if (flags.vegetarian) reasons.push("Ăn chay cần chú ý chất lượng đạm và vi chất.");
  if (flags.goutHistory) reasons.push("Tiền sử gout: không đánh giá nguy cơ chỉ bằng tổng protein.");
  if (flags.hypertension) reasons.push("Tăng huyết áp: natri từ dữ liệu món ăn chỉ là ước tính.");
  if (flags.foodAllergy) reasons.push("Dị ứng thực phẩm cần đọc thành phần và tư vấn riêng khi cần.");
  return reasons;
}

function itemResult(item: MealAssessmentItemInput): MealAssessmentItemResult {
  const warnings: string[] = [];
  const warningCodes: string[] = [];
  const grams = item.grams;

  if (!isFiniteNumber(grams) || grams < GRAMS_MIN || grams > GRAMS_MAX) {
    warningCodes.push("invalid_grams");
    warnings.push(`Khối lượng của "${item.name}" cần nằm trong khoảng ${GRAMS_MIN}-${GRAMS_MAX} g.`);
  }

  const required: [keyof MealAssessmentItemInput, string][] = [
    ["energyKcalPer100g", "năng lượng"],
    ["carbGPer100g", "carbohydrate"],
    ["proteinGPer100g", "protein"],
    ["fatGPer100g", "chất béo"],
  ];
  required.forEach(([key, label]) => {
    const value = item[key];
    if (!isFiniteNumber(value) || value < 0) {
      warningCodes.push(`missing_${String(key)}`);
      warnings.push(`"${item.name}" chưa có dữ liệu ${label}/100g hợp lệ.`);
    }
  });

  if (item.fiberGPer100g == null) {
    warningCodes.push("missing_fiber");
    warnings.push(`"${item.name}" chưa có dữ liệu chất xơ.`);
  }
  if (item.sodiumMgPer100g == null) {
    warningCodes.push("missing_sodium");
    warnings.push(`"${item.name}" chưa có dữ liệu natri.`);
  }
  if (item.sugarGPer100g == null) {
    warningCodes.push("missing_sugar");
    warnings.push(`"${item.name}" chưa có dữ liệu đường.`);
  }
  if (item.confidence === "low" || item.dataQuality === "recipe_estimate" || item.sourceId === "recipe-estimate-v1") {
    warningCodes.push("estimated_data");
    warnings.push(`"${item.name}" là dữ liệu ước tính hoặc độ tin cậy thấp.`);
  }
  if (item.needsExternalSource || item.needsDietitianReview || item.sourceReviewStatus === "needs_external_source" || item.sourceReviewStatus === "candidate_pending_dietitian_review") {
    warningCodes.push("source_review_needed");
    warnings.push(`"${item.name}" có metadata cần đối chiếu nguồn/chuyên môn.`);
  }

  return {
    ...item,
    energyKcal: scale(item.energyKcalPer100g, grams),
    carbG: scale(item.carbGPer100g, grams),
    proteinG: scale(item.proteinGPer100g, grams),
    fatG: scale(item.fatGPer100g, grams),
    fiberG: scale(item.fiberGPer100g, grams),
    sodiumMg: scale(item.sodiumMgPer100g, grams),
    sugarG: scale(item.sugarGPer100g, grams),
    warningCodes,
    warnings,
  };
}

function sumKnown(items: MealAssessmentItemResult[], key: keyof MealAssessmentTotals): number | null {
  const values = items.map((item) => item[key as keyof MealAssessmentItemResult]).filter((value): value is number => isFiniteNumber(value));
  if (values.length === 0) return null;
  return round1(values.reduce((sum, value) => sum + value, 0));
}

export function calculateVietnameseMealAssessment(input: MealAssessmentInput): MealAssessmentResult {
  const flags = input.flags ?? {};
  const safetyMessages = [MEAL_ASSESSMENT_GLOBAL_SAFETY_NOTE, MEAL_ASSESSMENT_MEDICATION_SAFETY_NOTE];

  if (!isFiniteNumber(input.age) || input.age < AGE_MIN || input.age > AGE_MAX) {
    return emptyResult("Tuổi cần nằm trong khoảng 13-120.", safetyMessages);
  }
  if (!isFiniteNumber(input.weightKg) || input.weightKg < WEIGHT_MIN_KG || input.weightKg > WEIGHT_MAX_KG) {
    return emptyResult(`Cân nặng cần nằm trong khoảng ${WEIGHT_MIN_KG}-${WEIGHT_MAX_KG} kg.`, safetyMessages);
  }
  if (!isFiniteNumber(input.heightCm) || input.heightCm < HEIGHT_MIN_CM || input.heightCm > HEIGHT_MAX_CM) {
    return emptyResult(`Chiều cao cần nằm trong khoảng ${HEIGHT_MIN_CM}-${HEIGHT_MAX_CM} cm.`, safetyMessages);
  }

  const items = input.selectedItems.map(itemResult);
  const carbInput: CarbFoodInput[] = input.selectedItems.map((item) => ({
    foodId: item.id,
    slug: item.slug,
    name: item.name,
    grams: item.grams,
    carbPer100g: item.carbGPer100g,
    sourceConfidence: item.confidence,
    dataQuality: item.dataQuality,
  }));
  const carbResult = calculateCarbMeal(carbInput);

  const clinical = clinicalReasons(flags, input.age);
  const caution = cautionReasons(input);
  const mode: MealAssessmentMode = clinical.length > 0 ? "clinical_no_auto" : caution.length > 0 ? "caution" : "auto";
  const isPersonalTarget = false;

  const totals: MealAssessmentTotals = {
    energyKcal: round0(sumKnown(items, "energyKcal") ?? 0),
    carbG: carbResult.totalCarbGrams,
    proteinG: round1(sumKnown(items, "proteinG") ?? 0),
    fatG: round1(sumKnown(items, "fatG") ?? 0),
    fiberG: sumKnown(items, "fiberG"),
    sodiumMg: sumKnown(items, "sodiumMg"),
    sugarG: sumKnown(items, "sugarG"),
  };

  const warnings = Array.from(new Set([...items.flatMap((item) => item.warnings), ...carbResult.warnings]));
  const modeMessages = mode === "clinical_no_auto"
    ? clinical
    : mode === "caution"
      ? caution
      : ["Có thể xem như phân tích khẩu phần giáo dục nếu thông tin nhập và dữ liệu món ăn phù hợp."];

  const suggestions = generalSuggestions(input, totals, mode);
  const proteinReference = mode === "clinical_no_auto" ? undefined : proteinReferenceFor(input);

  return {
    ok: carbResult.ok && !items.some((item) => item.warningCodes.includes("invalid_grams")),
    mode,
    isPersonalTarget,
    totals,
    items,
    warnings,
    modeMessages,
    suggestions,
    safetyMessages,
    carbServings: carbResult.carbServings,
    proteinReference,
  };
}

function proteinReferenceFor(input: MealAssessmentInput): MealAssessmentResult["proteinReference"] {
  const profile = input.flags?.vegetarian ? "vegan" : input.age >= 65 || input.flags?.frailElderly ? "elderly" : input.generalGoal === "mild_weight_loss" ? "weight_loss" : "healthy";
  const result = calculateProteinRequirement(profile, input.weightKg);
  if (!result.ok || !result.isPersonalTarget) return undefined;
  return {
    minGPerDay: result.minGPerDay,
    maxGPerDay: result.maxGPerDay,
    note: "Khoảng protein tham khảo từ engine đạm; không phải chỉ định điều trị.",
  };
}

function generalSuggestions(input: MealAssessmentInput, totals: MealAssessmentTotals, mode: MealAssessmentMode): string[] {
  const suggestions: string[] = [];
  if (input.selectedItems.length === 0) {
    suggestions.push("Thêm món ăn hoặc thực phẩm để xem tổng ước tính.");
    return suggestions;
  }
  if (totals.fiberG != null && totals.fiberG < (input.mealMode === "day" ? 18 : 5)) {
    suggestions.push("Có thể cân nhắc thêm rau, đậu hoặc trái cây nguyên miếng nếu phù hợp với tình trạng cá nhân.");
  }
  if (totals.sodiumMg != null && totals.sodiumMg > (input.mealMode === "day" ? 2000 : 700)) {
    suggestions.push("Natri ước tính khá cao; hãy kiểm tra nước chấm, món chế biến sẵn và cách nêm.");
  }
  if (totals.sugarG != null && totals.sugarG > (input.mealMode === "day" ? 35 : 12)) {
    suggestions.push("Đường ước tính cao; đồ uống ngọt và món tráng miệng thường là nguồn dễ bị bỏ sót.");
  }
  if (totals.proteinG > 0 && totals.energyKcal > 0 && totals.proteinG * 4 < totals.energyKcal * 0.08) {
    suggestions.push("Tỷ lệ năng lượng từ protein có vẻ thấp; hãy xem lại nguồn đạm trong bữa nếu bạn không thuộc nhóm cần cá thể hóa.");
  }
  if (mode === "clinical_no_auto") {
    suggestions.push("Với cờ cần cá thể hóa, chỉ nên dùng phần tổng khẩu phần để trao đổi với bác sĩ hoặc dinh dưỡng viên.");
  } else if (suggestions.length === 0) {
    suggestions.push("Kết quả chỉ là ảnh chụp dinh dưỡng của các món đã nhập; hãy xem cùng khẩu phần, cách nấu và mục tiêu cá nhân.");
  }
  return suggestions;
}

function emptyResult(error: string, safetyMessages: string[]): MealAssessmentResult {
  return {
    ok: false,
    error,
    mode: "clinical_no_auto",
    isPersonalTarget: false,
    totals: { energyKcal: 0, carbG: 0, proteinG: 0, fatG: 0, fiberG: null, sodiumMg: null, sugarG: null },
    items: [],
    warnings: [],
    modeMessages: [],
    suggestions: [],
    safetyMessages,
    carbServings: null,
  };
}
