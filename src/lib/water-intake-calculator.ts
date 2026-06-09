export type WaterMode = "auto" | "caution" | "clinical_no_auto";

export type WaterActivity = "low" | "moderate" | "high";
export type WaterHeatSweat = "normal" | "hot" | "heavy_sweat";
export type PregnancyLactation = "none" | "pregnancy" | "lactation";

export type WaterRedFlags = {
  heartFailure?: boolean;
  chronicKidneyDisease?: boolean;
  dialysis?: boolean;
  cirrhosisAscites?: boolean;
  edema?: boolean;
  hyponatremia?: boolean;
  fluidRestriction?: boolean;
  diuretics?: boolean;
  child?: boolean;
  frailElderly?: boolean;
  acuteIllness?: boolean;
};

export type WaterIntakeInput = {
  weightKg: number;
  activity?: WaterActivity;
  heatSweat?: WaterHeatSweat;
  pregnancyLactation?: PregnancyLactation;
  redFlags?: WaterRedFlags;
};

export type WaterRule = {
  profileId: string;
  label: string;
  mode: WaterMode;
  sourceLabel: string;
  safetyMessage: string;
  appliesTo: string;
  notFor: string;
  requiresClinicalReview: boolean;
};

export type WaterIntakeResult = {
  ok: boolean;
  mode: WaterMode;
  profileId: string;
  label: string;
  isPersonalTarget: boolean;
  totalWaterMinLiters?: number;
  totalWaterMaxLiters?: number;
  estimatedDrinkingWaterMinLiters?: number;
  estimatedDrinkingWaterMaxLiters?: number;
  cups200mlMin?: number;
  cups200mlMax?: number;
  foodWaterNote: string;
  sourceLabel: string;
  safetyMessage: string;
  appliesTo: string;
  notFor: string;
  warnings: string[];
  error?: string;
};

export const WATER_WEIGHT_MIN_KG = 25;
export const WATER_WEIGHT_MAX_KG = 200;
export const WATER_BASE_ML_PER_KG_MIN = 30;
export const WATER_BASE_ML_PER_KG_MAX = 35;
export const WATER_DRINKING_WATER_SHARE = 0.8;

export const WATER_GLOBAL_SAFETY_NOTE =
  "Công cụ chỉ dùng cho giáo dục sức khỏe. Không áp dụng cho người đang được dặn hạn chế dịch. Suy tim, bệnh thận mạn, lọc máu, xơ gan/cổ trướng, phù, hạ natri máu hoặc bệnh cấp cần theo chỉ định bác sĩ.";

export const WATER_ACUTE_SAFETY_NOTE =
  "Không dùng công cụ này để xử trí cấp cứu mất nước, nôn ói, tiêu chảy nặng, rối loạn tri giác, khó thở hoặc phù tăng nhanh.";

export const WATER_FOOD_NOTE =
  "Total water gồm nước uống, đồ uống và một phần nước từ thức ăn. V1 ước tính khoảng 80% từ đồ uống và 20% từ thức ăn; tỷ lệ thực tế thay đổi theo khẩu phần.";

export const WATER_RULES: Record<WaterMode, WaterRule> = {
  auto: {
    profileId: "healthy_adult",
    label: "Ước tính cho người trưởng thành tương đối khỏe mạnh",
    mode: "auto",
    sourceLabel: "Heuristic 30-35 ml/kg/ngày, đối chiếu NASEM/EFSA total water AI.",
    safetyMessage: "Khoảng này là ước tính ban đầu, không phải mức bắt buộc cho mọi người.",
    appliesTo: "Người trưởng thành tương đối khỏe mạnh, không được dặn hạn chế dịch và không có bệnh cấp.",
    notFor: "Trẻ em, suy tim, bệnh thận, lọc máu, xơ gan/cổ trướng, phù, hạ natri máu, đang hạn chế dịch hoặc bệnh cấp.",
    requiresClinicalReview: false,
  },
  caution: {
    profileId: "caution_context",
    label: "Ước tính có cảnh báo",
    mode: "caution",
    sourceLabel: "Heuristic 30-35 ml/kg/ngày; yếu tố nóng, vận động, thai kỳ/cho con bú, lợi tiểu cần cá thể hóa.",
    safetyMessage: "Có thể dùng khoảng tham khảo để trao đổi, nhưng không xem là mục tiêu cứng.",
    appliesTo: "Người trưởng thành không có red flag nặng nhưng có yếu tố cần thận trọng.",
    notFor: "Suy tim, CKD, lọc máu, xơ gan/cổ trướng, phù, hạ natri máu, hạn chế dịch, trẻ em hoặc bệnh cấp.",
    requiresClinicalReview: false,
  },
  clinical_no_auto: {
    profileId: "clinical_no_auto",
    label: "Cần cá thể hóa lâm sàng",
    mode: "clinical_no_auto",
    sourceLabel: "Safety gate theo source-lock v1: nhóm nguy cơ cần bác sĩ/dinh dưỡng viên cá thể hóa.",
    safetyMessage: "Không tự động tính mức nước cá nhân như người khỏe. Hãy theo chỉ định bác sĩ hoặc đơn vị điều trị.",
    appliesTo: "Người có bệnh lý/hoàn cảnh có thể cần hạn chế dịch hoặc xử trí y khoa.",
    notFor: "Không dùng công cụ tự phục vụ để quyết định lượng nước uống.",
    requiresClinicalReview: true,
  },
};

const CLINICAL_FLAG_MESSAGES: Array<[keyof WaterRedFlags, string]> = [
  ["heartFailure", "Suy tim có thể đi kèm giữ dịch; không tự tăng nước."],
  ["chronicKidneyDisease", "Bệnh thận mạn cần cá thể hóa theo eGFR, lượng nước tiểu, phù, natri và thuốc."],
  ["dialysis", "Đang lọc máu cần giới hạn dịch riêng theo đơn vị lọc máu."],
  ["cirrhosisAscites", "Xơ gan/cổ trướng có thể cần hạn chế dịch và muối theo chỉ định."],
  ["edema", "Phù hoặc tăng cân nhanh có thể là dấu hiệu quá tải dịch."],
  ["hyponatremia", "Hạ natri máu có thể nặng hơn khi uống quá nhiều nước."],
  ["fluidRestriction", "Đang được dặn hạn chế dịch thì không dùng công thức người khỏe."],
  ["child", "Công cụ này không áp dụng cho trẻ em."],
  ["acuteIllness", "Sốt cao, nôn, tiêu chảy nhiều hoặc mất nước cấp cần đánh giá y khoa/ORS phù hợp."],
];

function roundLiters(value: number) {
  return Math.round(value * 100) / 100;
}

function getClinicalWarnings(redFlags: WaterRedFlags) {
  return CLINICAL_FLAG_MESSAGES
    .filter(([key]) => Boolean(redFlags[key]))
    .map(([, message]) => message);
}

function hasClinicalRedFlag(redFlags: WaterRedFlags) {
  return getClinicalWarnings(redFlags).length > 0;
}

function buildCautionWarnings(input: WaterIntakeInput) {
  const warnings: string[] = [];
  if (input.activity === "high") {
    warnings.push("Vận động nhiều có thể làm nhu cầu nước tăng, nhưng mức tăng phụ thuộc mồ hôi, thời lượng và điều kiện tập.");
  }
  if (input.heatSweat === "hot") {
    warnings.push("Thời tiết nóng có thể làm tăng mất nước qua mồ hôi; hãy theo dõi khát, mồ hôi và bối cảnh sức khỏe.");
  }
  if (input.heatSweat === "heavy_sweat") {
    warnings.push("Ra mồ hôi nhiều cần thận trọng với cả nước và điện giải; không nên chỉ uống thật nhiều nước lọc.");
  }
  if (input.pregnancyLactation === "pregnancy") {
    warnings.push("Thai kỳ cần cá thể hóa, đặc biệt nếu phù, tăng huyết áp, nôn nhiều hoặc có bệnh nền.");
  }
  if (input.pregnancyLactation === "lactation") {
    warnings.push("Cho con bú có thể làm nhu cầu nước tăng, nhưng vẫn nên uống theo khát và bối cảnh sức khỏe.");
  }
  if (input.redFlags?.frailElderly) {
    warnings.push("Người rất cao tuổi/yếu có cảm giác khát kém tin cậy hơn và dễ rối loạn điện giải; nên cá thể hóa.");
  }
  if (input.redFlags?.diuretics) {
    warnings.push("Thuốc lợi tiểu làm thay đổi cân bằng dịch và điện giải; nên theo hướng dẫn của bác sĩ điều trị.");
  }
  return warnings;
}

function validateWeight(weightKg: number) {
  if (!Number.isFinite(weightKg) || weightKg < WATER_WEIGHT_MIN_KG || weightKg > WATER_WEIGHT_MAX_KG) {
    return `Vui lòng nhập cân nặng từ ${WATER_WEIGHT_MIN_KG} đến ${WATER_WEIGHT_MAX_KG} kg.`;
  }
  return undefined;
}

export function calculateWaterIntake(input: WaterIntakeInput): WaterIntakeResult {
  const redFlags = input.redFlags ?? {};
  const error = validateWeight(input.weightKg);
  if (error) {
    return {
      ok: false,
      mode: "clinical_no_auto",
      profileId: "invalid_input",
      label: "Dữ liệu chưa hợp lệ",
      isPersonalTarget: false,
      foodWaterNote: WATER_FOOD_NOTE,
      sourceLabel: WATER_RULES.clinical_no_auto.sourceLabel,
      safetyMessage: WATER_GLOBAL_SAFETY_NOTE,
      appliesTo: "",
      notFor: "",
      warnings: [],
      error,
    };
  }

  const clinicalWarnings = getClinicalWarnings(redFlags);
  if (clinicalWarnings.length > 0) {
    const rule = WATER_RULES.clinical_no_auto;
    return {
      ok: true,
      mode: "clinical_no_auto",
      profileId: rule.profileId,
      label: rule.label,
      isPersonalTarget: false,
      foodWaterNote: WATER_FOOD_NOTE,
      sourceLabel: rule.sourceLabel,
      safetyMessage: rule.safetyMessage,
      appliesTo: rule.appliesTo,
      notFor: rule.notFor,
      warnings: clinicalWarnings,
    };
  }

  const cautionWarnings = buildCautionWarnings(input);
  const mode: WaterMode = cautionWarnings.length > 0 ? "caution" : "auto";
  const rule = WATER_RULES[mode];
  const totalWaterMinLiters = roundLiters((input.weightKg * WATER_BASE_ML_PER_KG_MIN) / 1000);
  const totalWaterMaxLiters = roundLiters((input.weightKg * WATER_BASE_ML_PER_KG_MAX) / 1000);
  const estimatedDrinkingWaterMinLiters = roundLiters(totalWaterMinLiters * WATER_DRINKING_WATER_SHARE);
  const estimatedDrinkingWaterMaxLiters = roundLiters(totalWaterMaxLiters * WATER_DRINKING_WATER_SHARE);

  return {
    ok: true,
    mode,
    profileId: rule.profileId,
    label: rule.label,
    isPersonalTarget: true,
    totalWaterMinLiters,
    totalWaterMaxLiters,
    estimatedDrinkingWaterMinLiters,
    estimatedDrinkingWaterMaxLiters,
    cups200mlMin: Math.round(estimatedDrinkingWaterMinLiters / 0.2),
    cups200mlMax: Math.round(estimatedDrinkingWaterMaxLiters / 0.2),
    foodWaterNote: WATER_FOOD_NOTE,
    sourceLabel: rule.sourceLabel,
    safetyMessage: rule.safetyMessage,
    appliesTo: rule.appliesTo,
    notFor: rule.notFor,
    warnings: cautionWarnings,
  };
}

export function hasWaterClinicalRedFlag(redFlags: WaterRedFlags = {}) {
  return hasClinicalRedFlag(redFlags);
}
