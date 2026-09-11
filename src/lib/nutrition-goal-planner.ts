import { calculateProteinRequirement } from "./protein-requirement";

export type NutritionGoalMode = "auto" | "caution" | "clinical_no_auto";

export type NutritionGoalInput = {
  age: number;
  sex: "male" | "female";
  weightKg: number;
  heightCm: number;
  activityLevel?: "low" | "moderate" | "high";
  goal: "maintain" | "healthy_eating" | "mild_weight_loss" | "mild_weight_gain";
  vegetarianPattern?: boolean;
  redFlags?: {
    pregnancyLactation?: boolean;
    rapidUnintentionalWeightLoss?: boolean;
    eatingDisorder?: boolean;
    chronicKidneyDisease?: boolean;
    dialysis?: boolean;
    heartFailureOrFluidRestriction?: boolean;
    cirrhosisAscites?: boolean;
    diabetesInsulinOrSulfonylurea?: boolean;
    cancerMalnutrition?: boolean;
    acuteIllness?: boolean;
    complexMedication?: boolean;
  };
};

export type NutritionGoalResult = {
  ok: boolean;
  error?: string;
  mode: NutritionGoalMode;
  bmi?: number;
  bmiCategory?: string;
  isPersonalPrescription: false;
  shouldShowTargets: boolean;
  energyEstimateStatus: "available_adult_reference" | "not_enabled_v1" | "needs_source_lock";
  macroTargetStatus: "available_adult_reference" | "not_enabled_v1" | "needs_source_lock";
  energyReference?: {
    bmrKcal: number;
    maintenanceKcal: number;
    activityFactor: number;
    label: string;
    sourceLabel: string;
  };
  macroReference?: {
    carbohydrate: { minGrams: number; maxGrams: number; percentRange: string };
    fat: { minGrams: number; maxGrams: number; percentRange: string };
    label: string;
    sourceLabel: string;
  };
  proteinReference?: {
    mode: string;
    minGrams?: number;
    maxGrams?: number;
    label: string;
    sourceLabel: string;
  };
  warnings: string[];
  reasons: string[];
  sourceLabels: string[];
  forbiddenWordingCheckText: string;
};

const VALID_AGE_MIN = 1;
const VALID_AGE_MAX = 120;
const VALID_WEIGHT_MIN_KG = 20;
const VALID_WEIGHT_MAX_KG = 300;
const VALID_HEIGHT_MIN_CM = 100;
const VALID_HEIGHT_MAX_CM = 250;

const ENERGY_STATUS: NutritionGoalResult["energyEstimateStatus"] = "not_enabled_v1";
const MACRO_STATUS: NutritionGoalResult["macroTargetStatus"] = "not_enabled_v1";
const AVAILABLE_STATUS: NutritionGoalResult["energyEstimateStatus"] = "available_adult_reference";

const GUARD_TEXT = "Wording guard passed: output uses estimate, reference, uncertainty, individualization, and no medication-adjustment language.";

const CLINICAL_MESSAGE =
  "Nhóm này cần cá thể hóa với bác sĩ hoặc dinh dưỡng viên; công cụ không hiển thị mục tiêu kcal, macro hoặc protein cá nhân.";

const SOURCE_LABELS = [
  "NIDDK Body Weight Planner: phạm vi người lớn, không áp dụng cho thai kỳ hoặc cho con bú; BMR là ước tính theo Mifflin-St Jeor.",
  "National Academies DRI: AMDR carbohydrate 45–65% và chất béo 20–35% năng lượng cho người lớn.",
  "protein-requirement.ts: khoảng đạm chỉ được hiện khi bộ lọc an toàn cho phép.",
];

function invalidResult(error: string): NutritionGoalResult {
  return {
    ok: false,
    error,
    mode: "clinical_no_auto",
    isPersonalPrescription: false,
    shouldShowTargets: false,
    energyEstimateStatus: ENERGY_STATUS,
    macroTargetStatus: MACRO_STATUS,
    warnings: [error],
    reasons: ["invalid_input"],
    sourceLabels: SOURCE_LABELS,
    forbiddenWordingCheckText: GUARD_TEXT,
  };
}

function isValidNumber(value: number, min: number, max: number): boolean {
  return Number.isFinite(value) && value >= min && value <= max;
}

export function calculateAdultBmi(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

function roundKcal(value: number): number {
  return Math.round(value);
}

export function calculateMifflinStJeorBmr(input: Pick<NutritionGoalInput, "sex" | "weightKg" | "heightCm" | "age">): number {
  const sexAdjustment = input.sex === "male" ? 5 : -161;
  return roundKcal(10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age + sexAdjustment);
}

export function getActivityFactor(activityLevel: NutritionGoalInput["activityLevel"]): number {
  if (activityLevel === "high") return 1.725;
  if (activityLevel === "moderate") return 1.55;
  return 1.2;
}

function getEnergyReference(input: NutritionGoalInput): NutritionGoalResult["energyReference"] {
  const bmrKcal = calculateMifflinStJeorBmr(input);
  const activityFactor = getActivityFactor(input.activityLevel);

  return {
    bmrKcal,
    maintenanceKcal: roundKcal(bmrKcal * activityFactor),
    activityFactor,
    label: "Ước tính BMR và mức duy trì cho người lớn tương đối khỏe; không phải mức ăn bắt buộc.",
    sourceLabel: "Mifflin-St Jeor; hệ số hoạt động chỉ là quy ước tham khảo (thấp 1,20; vừa 1,55).",
  };
}

function getMacroReference(maintenanceKcal: number): NutritionGoalResult["macroReference"] {
  return {
    carbohydrate: {
      minGrams: Math.round((maintenanceKcal * 0.45) / 4),
      maxGrams: Math.round((maintenanceKcal * 0.65) / 4),
      percentRange: "45–65% năng lượng",
    },
    fat: {
      minGrams: Math.round((maintenanceKcal * 0.2) / 9),
      maxGrams: Math.round((maintenanceKcal * 0.35) / 9),
      percentRange: "20–35% năng lượng",
    },
    label: "Khoảng phân bố năng lượng đa lượng (AMDR), không phải macro tối ưu hoặc kế hoạch điều trị cá nhân.",
    sourceLabel: "National Academies DRI (AMDR cho người lớn): carbohydrate 45–65%, chất béo 20–35% năng lượng.",
  };
}

function getBmiCategory(bmi: number): string {
  if (bmi < 18.5) return "low_bmi";
  if (bmi >= 25) return "bmi_25_or_higher";
  return "adult_reference_range";
}

function getClinicalReasons(input: NutritionGoalInput, bmi: number): string[] {
  const flags = input.redFlags ?? {};
  const reasons: string[] = [];

  if (input.age < 18) reasons.push("under_18");
  if (bmi < 18.5) reasons.push("bmi_below_18_5");
  if (flags.pregnancyLactation) reasons.push("pregnancy_lactation");
  if (flags.rapidUnintentionalWeightLoss) reasons.push("rapid_unintentional_weight_loss");
  if (flags.eatingDisorder) reasons.push("eating_disorder");
  if (flags.chronicKidneyDisease) reasons.push("chronic_kidney_disease");
  if (flags.dialysis) reasons.push("dialysis");
  if (flags.heartFailureOrFluidRestriction) reasons.push("heart_failure_or_fluid_restriction");
  if (flags.cirrhosisAscites) reasons.push("cirrhosis_ascites");
  if (flags.diabetesInsulinOrSulfonylurea) reasons.push("diabetes_insulin_or_sulfonylurea");
  if (flags.cancerMalnutrition) reasons.push("cancer_malnutrition");
  if (flags.acuteIllness) reasons.push("acute_illness");
  if (flags.complexMedication) reasons.push("complex_medication");

  return reasons;
}

function getCautionReasons(input: NutritionGoalInput, bmi: number): string[] {
  const reasons: string[] = [];

  if (input.goal === "mild_weight_loss") reasons.push("mild_weight_loss");
  if (input.goal === "mild_weight_gain") reasons.push("mild_weight_gain");
  if (input.age >= 65) reasons.push("age_65_or_older");
  if (input.activityLevel === "high") reasons.push("high_activity");
  if (input.vegetarianPattern) reasons.push("vegetarian_pattern");
  if (bmi >= 25) reasons.push("bmi_25_or_higher");

  return reasons;
}

function getProteinProfileId(input: NutritionGoalInput, cautionReasons: string[]): string {
  if (input.vegetarianPattern) return "vegan";
  if (input.age >= 65) return "elderly";
  if (input.goal === "mild_weight_loss") return "weight_loss";
  if (input.activityLevel === "high") return "active_muscle";
  if (cautionReasons.length > 0) return "healthy";
  return "healthy";
}

function getSafeProteinReference(input: NutritionGoalInput, cautionReasons: string[]): NutritionGoalResult["proteinReference"] {
  const protein = calculateProteinRequirement(getProteinProfileId(input, cautionReasons), input.weightKg);

  if (!protein.ok || protein.mode === "clinical_no_auto" || !protein.profile) {
    return undefined;
  }

  return {
    mode: protein.mode ?? protein.profile.mode,
    minGrams: protein.minGPerDay,
    maxGrams: protein.maxGPerDay,
    label: `${protein.profile.label} - khoảng tham khảo, không phải chỉ định bắt buộc.`,
    sourceLabel: protein.profile.sourceLabel,
  };
}

export function planNutritionGoal(input: NutritionGoalInput): NutritionGoalResult {
  if (!isValidNumber(input.age, VALID_AGE_MIN, VALID_AGE_MAX)) {
    return invalidResult(`Vui lòng nhập tuổi từ ${VALID_AGE_MIN} đến ${VALID_AGE_MAX}.`);
  }

  if (!isValidNumber(input.weightKg, VALID_WEIGHT_MIN_KG, VALID_WEIGHT_MAX_KG)) {
    return invalidResult(`Vui lòng nhập cân nặng từ ${VALID_WEIGHT_MIN_KG} đến ${VALID_WEIGHT_MAX_KG} kg.`);
  }

  if (!isValidNumber(input.heightCm, VALID_HEIGHT_MIN_CM, VALID_HEIGHT_MAX_CM)) {
    return invalidResult(`Vui lòng nhập chiều cao từ ${VALID_HEIGHT_MIN_CM} đến ${VALID_HEIGHT_MAX_CM} cm.`);
  }

  const bmi = calculateAdultBmi(input.weightKg, input.heightCm);
  const bmiCategory = getBmiCategory(bmi);
  const clinicalReasons = getClinicalReasons(input, bmi);

  if (clinicalReasons.length > 0) {
    return {
      ok: true,
      mode: "clinical_no_auto",
      bmi,
      bmiCategory,
      isPersonalPrescription: false,
      shouldShowTargets: false,
      energyEstimateStatus: ENERGY_STATUS,
      macroTargetStatus: MACRO_STATUS,
      warnings: [CLINICAL_MESSAGE],
      reasons: clinicalReasons,
      sourceLabels: SOURCE_LABELS,
      forbiddenWordingCheckText: GUARD_TEXT,
    };
  }

  const cautionReasons = getCautionReasons(input, bmi);
  const mode: NutritionGoalMode = cautionReasons.length > 0 ? "caution" : "auto";
  const warnings =
    mode === "caution"
      ? [
          "Kết quả là tham khảo và có sai số; không dùng để hứa tốc độ thay đổi cân nặng.",
          "Năng lượng và macro cá thể hóa vẫn không hiển thị khi có yếu tố cần thận trọng.",
        ]
      : [
          "BMR, mức duy trì và khoảng carbohydrate/chất béo là tham khảo cho người trưởng thành tương đối khỏe; không thay thế tư vấn cá thể.",
          "Công cụ không tạo deficit, surplus, tốc độ giảm/tăng cân hoặc hướng dẫn chỉnh thuốc.",
        ];

  const energyReference = mode === "auto" ? getEnergyReference(input) : undefined;
  const macroReference = energyReference ? getMacroReference(energyReference.maintenanceKcal) : undefined;

  return {
    ok: true,
    mode,
    bmi,
    bmiCategory,
    isPersonalPrescription: false,
    shouldShowTargets: true,
    energyEstimateStatus: energyReference ? AVAILABLE_STATUS : ENERGY_STATUS,
    macroTargetStatus: macroReference ? AVAILABLE_STATUS : MACRO_STATUS,
    energyReference,
    macroReference,
    proteinReference: getSafeProteinReference(input, cautionReasons),
    warnings,
    reasons: mode === "caution" ? cautionReasons : ["healthy_adult_reference"],
    sourceLabels: SOURCE_LABELS,
    forbiddenWordingCheckText: GUARD_TEXT,
  };
}
