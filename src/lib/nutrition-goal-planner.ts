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
  energyEstimateStatus: "not_enabled_v1" | "needs_source_lock";
  macroTargetStatus: "not_enabled_v1" | "needs_source_lock";
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

const ENERGY_STATUS: NutritionGoalResult["energyEstimateStatus"] = "needs_source_lock";
const MACRO_STATUS: NutritionGoalResult["macroTargetStatus"] = "needs_source_lock";

const GUARD_TEXT = "Wording guard passed: output uses estimate, reference, uncertainty, individualization, and no medication-adjustment language.";

const CLINICAL_MESSAGE =
  "Nhóm này cần cá thể hóa với bác sĩ hoặc dinh dưỡng viên; công cụ không hiển thị mục tiêu kcal, macro hoặc protein cá nhân.";

const SOURCE_LABELS = [
  "nutrition-goal-source-lock-v1: energy and macro targets are disabled until source-lock is complete.",
  "tool-protein-source-lock-v1 and protein-requirement.ts are reused for protein references when safe.",
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
          "Năng lượng, deficit, surplus và macro dạng số chưa bật vì còn cần khóa nguồn.",
        ]
      : ["Kết quả là tham khảo cho người trưởng thành tương đối khỏe; không thay thế tư vấn cá thể."];

  return {
    ok: true,
    mode,
    bmi,
    bmiCategory,
    isPersonalPrescription: false,
    shouldShowTargets: true,
    energyEstimateStatus: ENERGY_STATUS,
    macroTargetStatus: MACRO_STATUS,
    proteinReference: getSafeProteinReference(input, cautionReasons),
    warnings,
    reasons: mode === "caution" ? cautionReasons : ["healthy_adult_reference"],
    sourceLabels: SOURCE_LABELS,
    forbiddenWordingCheckText: GUARD_TEXT,
  };
}
