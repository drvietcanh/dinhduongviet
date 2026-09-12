/**
 * Reference calculations for pregnancy nutrition.
 *
 * These are education-oriented ranges based on pre-pregnancy BMI and
 * singleton pregnancy guidance. They are deliberately not a prescription:
 * adolescents, multiple pregnancy and clinical complications are gated to a
 * clinician instead of receiving a false-precision number.
 */

export type PregnancyType = "singleton" | "twins";

export type PregnancyNutritionInput = {
  ageYears: number;
  heightCm: number;
  prePregnancyWeightKg: number;
  gestationalWeek: number;
  pregnancyType?: PregnancyType;
  currentWeightKg?: number;
  clinicalFlags?: {
    highRiskPregnancy?: boolean;
    gestationalDiabetes?: boolean;
    hypertensionOrPreeclampsia?: boolean;
    kidneyOrHeartDisease?: boolean;
    severeVomitingOrPoorIntake?: boolean;
  };
};

export type PregnancyBmiCategory = "underweight" | "normal" | "overweight" | "obesity";

export type PregnancyRange = {
  min: number;
  max: number;
  unit: string;
};

export type PregnancyNutrientReference = {
  nutrient: string;
  amount: string;
  note?: string;
};

export type PregnancyNutritionResult = {
  ok: boolean;
  error?: string;
  mode: "reference" | "clinical_no_auto";
  isPersonalPrescription: false;
  pregnancyType: PregnancyType;
  gestationalTrimester?: 1 | 2 | 3;
  gestationalTrimesterLabel?: string;
  prePregnancyBmi?: number;
  prePregnancyBmiCategory?: PregnancyBmiCategory;
  prePregnancyBmiLabel?: string;
  totalWeightGainKg?: PregnancyRange;
  firstTrimesterGainKg?: PregnancyRange;
  secondThirdTrimesterRateKgPerWeek?: PregnancyRange;
  extraCaloriesPerDay?: number;
  currentGainKg?: number;
  currentGainStatus?: "below_reference" | "within_reference" | "above_reference";
  currentGainReferenceKg?: PregnancyRange;
  nutrientReferences: PregnancyNutrientReference[];
  warnings: string[];
  reasons: string[];
  sourceLabels: string[];
};

export const PREGNANCY_GLOBAL_SAFETY_NOTE =
  "Đây là khoảng tham khảo giáo dục, không phải đơn thuốc. Không tự dùng vitamin/khoáng chất liều cao, tự giảm cân hoặc tự điều chỉnh thuốc trong thai kỳ.";

export const PREGNANCY_SOURCE_LABELS = [
  "CDC/ACOG: khoảng tăng cân theo BMI trước thai kỳ và năng lượng bổ sung theo tam cá nguyệt.",
  "NIH Office of Dietary Supplements: DRI thai kỳ cho folate, sắt, i-ốt, canxi, vitamin D, choline, B12 và vitamin C.",
];

const LIMITS = {
  ageMin: 14,
  ageMax: 50,
  heightMin: 120,
  heightMax: 230,
  weightMin: 30,
  weightMax: 250,
  weekMin: 0,
  weekMax: 42,
};

const SINGLETON_RECOMMENDATIONS: Record<
  PregnancyBmiCategory,
  { label: string; total: PregnancyRange; weekly: PregnancyRange }
> = {
  underweight: {
    label: "Thiếu cân (BMI trước thai kỳ <18,5)",
    total: { min: 12.5, max: 18, unit: "kg" },
    weekly: { min: 0.44, max: 0.58, unit: "kg/tuần" },
  },
  normal: {
    label: "Khoảng tham chiếu (BMI trước thai kỳ 18,5–24,9)",
    total: { min: 11.5, max: 16, unit: "kg" },
    weekly: { min: 0.35, max: 0.50, unit: "kg/tuần" },
  },
  overweight: {
    label: "Thừa cân (BMI trước thai kỳ 25,0–29,9)",
    total: { min: 7, max: 11.5, unit: "kg" },
    weekly: { min: 0.23, max: 0.33, unit: "kg/tuần" },
  },
  obesity: {
    label: "Béo phì (BMI trước thai kỳ ≥30)",
    total: { min: 5, max: 9, unit: "kg" },
    weekly: { min: 0.17, max: 0.27, unit: "kg/tuần" },
  },
};

const TWINS_TOTAL_RECOMMENDATIONS: Record<PregnancyBmiCategory, PregnancyRange> = {
  underweight: { min: 22.7, max: 28.1, unit: "kg" },
  normal: { min: 16.8, max: 24.5, unit: "kg" },
  overweight: { min: 14.1, max: 22.7, unit: "kg" },
  obesity: { min: 11.3, max: 19.1, unit: "kg" },
};

const FIRST_TRIMESTER_GAIN: PregnancyRange = { min: 0.5, max: 2, unit: "kg" };

function round(value: number, decimals = 1) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function validNumber(value: number, min: number, max: number) {
  return Number.isFinite(value) && value >= min && value <= max;
}

export function calculatePregnancyBmi(weightKg: number, heightCm: number) {
  return round(weightKg / (heightCm / 100) ** 2, 1);
}

export function classifyPregnancyBmi(bmi: number): PregnancyBmiCategory {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obesity";
}

function trimesterForWeek(week: number): { number: 1 | 2 | 3; label: string } {
  if (week <= 13) return { number: 1, label: "Tam cá nguyệt 1 (tuần 0–13)" };
  if (week <= 27) return { number: 2, label: "Tam cá nguyệt 2 (tuần 14–27)" };
  return { number: 3, label: "Tam cá nguyệt 3 (tuần 28–42)" };
}

function nutrientsForAge(ageYears: number): PregnancyNutrientReference[] {
  const adolescent = ageYears < 19;
  return [
    { nutrient: "Folate (DFE)", amount: "600 µg/ngày" },
    { nutrient: "Sắt", amount: "27 mg/ngày" },
    { nutrient: "I-ốt", amount: "220 µg/ngày" },
    { nutrient: "Canxi", amount: adolescent ? "1.300 mg/ngày" : "1.000 mg/ngày", note: adolescent ? "14–18 tuổi" : "19–50 tuổi" },
    { nutrient: "Vitamin D", amount: "15 µg (600 IU)/ngày" },
    { nutrient: "Choline", amount: "450 mg/ngày" },
    { nutrient: "Vitamin B12", amount: "2,6 µg/ngày" },
    { nutrient: "Vitamin C", amount: adolescent ? "80 mg/ngày" : "85 mg/ngày", note: adolescent ? "14–18 tuổi" : "19–50 tuổi" },
  ];
}

function invalidResult(error: string, pregnancyType: PregnancyType): PregnancyNutritionResult {
  return {
    ok: false,
    error,
    mode: "clinical_no_auto",
    isPersonalPrescription: false,
    pregnancyType,
    nutrientReferences: [],
    warnings: [error],
    reasons: ["invalid_input"],
    sourceLabels: PREGNANCY_SOURCE_LABELS,
  };
}

export function calculatePregnancyNutrition(input: PregnancyNutritionInput): PregnancyNutritionResult {
  const pregnancyType = input.pregnancyType ?? "singleton";

  if (pregnancyType !== "singleton" && pregnancyType !== "twins") {
    return invalidResult("Loại thai không hợp lệ; hãy chọn một thai hoặc đa thai.", "singleton");
  }

  if (!validNumber(input.ageYears, LIMITS.ageMin, LIMITS.ageMax)) {
    return invalidResult(`Vui lòng nhập tuổi từ ${LIMITS.ageMin} đến ${LIMITS.ageMax}.`, pregnancyType);
  }
  if (!validNumber(input.heightCm, LIMITS.heightMin, LIMITS.heightMax)) {
    return invalidResult(`Vui lòng nhập chiều cao từ ${LIMITS.heightMin} đến ${LIMITS.heightMax} cm.`, pregnancyType);
  }
  if (!validNumber(input.prePregnancyWeightKg, LIMITS.weightMin, LIMITS.weightMax)) {
    return invalidResult(`Vui lòng nhập cân nặng trước thai kỳ từ ${LIMITS.weightMin} đến ${LIMITS.weightMax} kg.`, pregnancyType);
  }
  if (!Number.isInteger(input.gestationalWeek) || !validNumber(input.gestationalWeek, LIMITS.weekMin, LIMITS.weekMax)) {
    return invalidResult(`Vui lòng nhập tuổi thai là số tuần nguyên từ ${LIMITS.weekMin} đến ${LIMITS.weekMax}.`, pregnancyType);
  }
  if (input.currentWeightKg !== undefined && !validNumber(input.currentWeightKg, LIMITS.weightMin, LIMITS.weightMax + 80)) {
    return invalidResult(`Cân nặng hiện tại cần nằm trong khoảng hợp lý (từ ${LIMITS.weightMin} đến ${LIMITS.weightMax + 80} kg).`, pregnancyType);
  }

  const trimester = trimesterForWeek(input.gestationalWeek);
  const bmi = calculatePregnancyBmi(input.prePregnancyWeightKg, input.heightCm);
  const bmiCategory = classifyPregnancyBmi(bmi);
  const recommendation = SINGLETON_RECOMMENDATIONS[bmiCategory];
  const flags = input.clinicalFlags ?? {};
  const reasons: string[] = [];
  const warnings: string[] = [PREGNANCY_GLOBAL_SAFETY_NOTE];

  if (input.ageYears < 18) reasons.push("under_18_bmi_percentile_needed");
  if (pregnancyType === "twins") reasons.push("multiple_pregnancy");
  if (flags.highRiskPregnancy) reasons.push("high_risk_pregnancy");
  if (flags.gestationalDiabetes) reasons.push("gestational_diabetes");
  if (flags.hypertensionOrPreeclampsia) reasons.push("hypertension_or_preeclampsia");
  if (flags.kidneyOrHeartDisease) reasons.push("kidney_or_heart_disease");
  if (flags.severeVomitingOrPoorIntake) reasons.push("severe_vomiting_or_poor_intake");

  if (pregnancyType === "twins") {
    warnings.push("Đa thai cần theo dõi tăng trưởng thai và tăng cân riêng với bác sĩ sản khoa; công cụ không tự tính kcal hay tốc độ tăng cân theo tuần cho đa thai.");
  }
  if (input.ageYears < 19) {
    warnings.push("Người mang thai dưới 19 tuổi cần được đọc BMI theo tuổi và tốc độ tăng trưởng; không dùng ngưỡng BMI người lớn như một kết luận.");
  }
  if (bmi < 18.5 || bmi >= 30) {
    warnings.push("BMI trước thai kỳ nằm ngoài khoảng tham chiếu; mục tiêu tăng cân cần được bác sĩ/dinh dưỡng viên đặt cùng hồ sơ thai kỳ.");
  }
  if (reasons.some((reason) => reason !== "multiple_pregnancy")) {
    warnings.push("Có yếu tố cần cá thể hóa lâm sàng; hãy mang kết quả này đến bác sĩ, không dùng số tham khảo để tự điều chỉnh ăn uống hoặc thuốc.");
  }

  const clinicalOnly = input.ageYears < 18 || reasons.some((reason) => reason !== "multiple_pregnancy");
  const currentGainKg = input.currentWeightKg === undefined ? undefined : round(input.currentWeightKg - input.prePregnancyWeightKg, 1);

  let currentGainReferenceKg: PregnancyRange | undefined;
  let currentGainStatus: PregnancyNutritionResult["currentGainStatus"];
  let totalWeightGainKg: PregnancyRange | undefined;
  let secondThirdTrimesterRateKgPerWeek: PregnancyRange | undefined;
  let extraCaloriesPerDay: number | undefined;

  if (!clinicalOnly) {
    totalWeightGainKg = pregnancyType === "twins" ? TWINS_TOTAL_RECOMMENDATIONS[bmiCategory] : recommendation.total;
    if (pregnancyType === "singleton") {
      secondThirdTrimesterRateKgPerWeek = recommendation.weekly;
      extraCaloriesPerDay = trimester.number === 1 ? 0 : trimester.number === 2 ? 340 : 450;
      const weeksAfterFirstTrimester = Math.max(0, input.gestationalWeek - 13);
      currentGainReferenceKg = {
        min: round(FIRST_TRIMESTER_GAIN.min + weeksAfterFirstTrimester * recommendation.weekly.min),
        max: round(FIRST_TRIMESTER_GAIN.max + weeksAfterFirstTrimester * recommendation.weekly.max),
        unit: "kg",
      };
      if (currentGainKg !== undefined) {
        currentGainStatus = currentGainKg < currentGainReferenceKg.min ? "below_reference" : currentGainKg > currentGainReferenceKg.max ? "above_reference" : "within_reference";
      }
    }
  }

  return {
    ok: true,
    mode: clinicalOnly ? "clinical_no_auto" : "reference",
    isPersonalPrescription: false,
    pregnancyType,
    gestationalTrimester: trimester.number,
    gestationalTrimesterLabel: trimester.label,
    prePregnancyBmi: bmi,
    prePregnancyBmiCategory: bmiCategory,
    prePregnancyBmiLabel: recommendation.label,
    totalWeightGainKg,
    firstTrimesterGainKg: clinicalOnly || pregnancyType !== "singleton" ? undefined : FIRST_TRIMESTER_GAIN,
    secondThirdTrimesterRateKgPerWeek,
    extraCaloriesPerDay,
    currentGainKg,
    currentGainStatus,
    currentGainReferenceKg,
    nutrientReferences: nutrientsForAge(input.ageYears),
    warnings,
    reasons: reasons.length > 0 ? reasons : ["singleton_adult_reference"],
    sourceLabels: PREGNANCY_SOURCE_LABELS,
  };
}
