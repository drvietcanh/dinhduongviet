/**
 * Age-band energy references for children and adolescents.
 *
 * The result is an age/sex/activity range, not an individualized prescription.
 * Children under two and children with growth/medical concerns are routed to
 * WHO growth monitoring and a clinician rather than assigned a number here.
 */

export type ChildSex = "female" | "male";
export type ChildActivity = "sedentary" | "moderate" | "active";

export type ChildNutritionInput = {
  ageYears: number;
  sex: ChildSex;
  activity?: ChildActivity;
  weightKg?: number;
  heightCm?: number;
  clinicalConcern?: boolean;
};

export type ChildEnergyRange = {
  minKcal: number;
  maxKcal: number;
  label: string;
};

export type ChildNutritionResult = {
  ok: boolean;
  error?: string;
  mode: "reference" | "clinical_no_auto";
  isPersonalPrescription: false;
  ageBand?: "under_2" | "2_3" | "4_8" | "9_13" | "14_18";
  ageBandLabel?: string;
  activity: ChildActivity;
  activityLabel: string;
  energyReference?: ChildEnergyRange;
  rawBmi?: number;
  warnings: string[];
  reasons: string[];
  sourceLabels: string[];
};

export const CHILD_GLOBAL_SAFETY_NOTE =
  "Đây là khoảng năng lượng tham khảo theo nhóm tuổi, không phải mục tiêu bắt buộc. Không dùng để ép trẻ ăn, giảm cân hoặc tự điều chỉnh sữa/thuốc.";

export const CHILD_SOURCE_LABELS = [
  "NHLBI/NIH Integrated Guidelines: khoảng nhu cầu năng lượng theo tuổi, giới và mức hoạt động cho trẻ 2–18 tuổi.",
  "WHO Child Growth Standards: trẻ cần được theo dõi chiều cao, cân nặng và BMI theo tuổi/giới; không dùng ngưỡng BMI người lớn.",
];

const ENERGY_RANGES: Record<"2_3" | "4_8" | "9_13" | "14_18", Record<ChildSex | "all", Record<ChildActivity, ChildEnergyRange>>> = {
  "2_3": {
    all: {
      sedentary: { minKcal: 1000, maxKcal: 1200, label: "Ít vận động" },
      moderate: { minKcal: 1000, maxKcal: 1400, label: "Vận động vừa" },
      active: { minKcal: 1000, maxKcal: 1400, label: "Năng động" },
    },
    female: {
      sedentary: { minKcal: 1000, maxKcal: 1200, label: "Ít vận động" },
      moderate: { minKcal: 1000, maxKcal: 1400, label: "Vận động vừa" },
      active: { minKcal: 1000, maxKcal: 1400, label: "Năng động" },
    },
    male: {
      sedentary: { minKcal: 1000, maxKcal: 1200, label: "Ít vận động" },
      moderate: { minKcal: 1000, maxKcal: 1400, label: "Vận động vừa" },
      active: { minKcal: 1000, maxKcal: 1400, label: "Năng động" },
    },
  },
  "4_8": {
    female: {
      sedentary: { minKcal: 1200, maxKcal: 1400, label: "Ít vận động" },
      moderate: { minKcal: 1400, maxKcal: 1600, label: "Vận động vừa" },
      active: { minKcal: 1400, maxKcal: 1800, label: "Năng động" },
    },
    male: {
      sedentary: { minKcal: 1200, maxKcal: 1400, label: "Ít vận động" },
      moderate: { minKcal: 1400, maxKcal: 1600, label: "Vận động vừa" },
      active: { minKcal: 1600, maxKcal: 2000, label: "Năng động" },
    },
    all: {
      sedentary: { minKcal: 1200, maxKcal: 1400, label: "Ít vận động" },
      moderate: { minKcal: 1400, maxKcal: 1600, label: "Vận động vừa" },
      active: { minKcal: 1400, maxKcal: 1800, label: "Năng động" },
    },
  },
  "9_13": {
    female: {
      sedentary: { minKcal: 1400, maxKcal: 1600, label: "Ít vận động" },
      moderate: { minKcal: 1600, maxKcal: 2000, label: "Vận động vừa" },
      active: { minKcal: 1800, maxKcal: 2200, label: "Năng động" },
    },
    male: {
      sedentary: { minKcal: 1600, maxKcal: 2000, label: "Ít vận động" },
      moderate: { minKcal: 1800, maxKcal: 2200, label: "Vận động vừa" },
      active: { minKcal: 2000, maxKcal: 2600, label: "Năng động" },
    },
    all: {
      sedentary: { minKcal: 1400, maxKcal: 1600, label: "Ít vận động" },
      moderate: { minKcal: 1600, maxKcal: 2000, label: "Vận động vừa" },
      active: { minKcal: 1800, maxKcal: 2200, label: "Năng động" },
    },
  },
  "14_18": {
    female: {
      sedentary: { minKcal: 1800, maxKcal: 1800, label: "Ít vận động" },
      moderate: { minKcal: 2000, maxKcal: 2000, label: "Vận động vừa" },
      active: { minKcal: 2400, maxKcal: 2400, label: "Năng động" },
    },
    male: {
      sedentary: { minKcal: 2000, maxKcal: 2400, label: "Ít vận động" },
      moderate: { minKcal: 2400, maxKcal: 2800, label: "Vận động vừa" },
      active: { minKcal: 2800, maxKcal: 3200, label: "Năng động" },
    },
    all: {
      sedentary: { minKcal: 1800, maxKcal: 2400, label: "Ít vận động" },
      moderate: { minKcal: 2000, maxKcal: 2800, label: "Vận động vừa" },
      active: { minKcal: 2400, maxKcal: 3200, label: "Năng động" },
    },
  },
};

const ACTIVITY_LABELS: Record<ChildActivity, string> = {
  sedentary: "Ít vận động",
  moderate: "Vận động vừa",
  active: "Năng động",
};

function invalidResult(error: string, activity: ChildActivity): ChildNutritionResult {
  return {
    ok: false,
    error,
    mode: "clinical_no_auto",
    isPersonalPrescription: false,
    activity,
    activityLabel: ACTIVITY_LABELS[activity],
    warnings: [error],
    reasons: ["invalid_input"],
    sourceLabels: CHILD_SOURCE_LABELS,
  };
}

function getAgeBand(ageYears: number): ChildNutritionResult["ageBand"] {
  if (ageYears < 2) return "under_2";
  if (ageYears < 4) return "2_3";
  if (ageYears < 9) return "4_8";
  if (ageYears < 14) return "9_13";
  return "14_18";
}

function ageBandLabel(ageBand: NonNullable<ChildNutritionResult["ageBand"]>) {
  if (ageBand === "under_2") return "0–23 tháng";
  if (ageBand === "2_3") return "2–3 tuổi";
  if (ageBand === "4_8") return "4–8 tuổi";
  if (ageBand === "9_13") return "9–13 tuổi";
  return "14–18 tuổi";
}

export function calculateChildRawBmi(weightKg: number, heightCm: number) {
  return Math.round((weightKg / (heightCm / 100) ** 2) * 10) / 10;
}

export function calculateChildNutrition(input: ChildNutritionInput): ChildNutritionResult {
  const activity = input.activity ?? "moderate";
  if (!Object.prototype.hasOwnProperty.call(ACTIVITY_LABELS, activity)) {
    return invalidResult("Mức vận động không hợp lệ; hãy chọn ít, vừa hoặc năng động.", "moderate");
  }
  if (input.sex !== "female" && input.sex !== "male") {
    return invalidResult("Vui lòng chọn giới tính nữ hoặc nam để tra khoảng tham khảo.", activity);
  }
  if (!Number.isFinite(input.ageYears) || input.ageYears < 0 || input.ageYears > 18) {
    return invalidResult("Vui lòng nhập tuổi từ 0 đến 18 năm.", activity);
  }
  if (input.weightKg !== undefined && (!Number.isFinite(input.weightKg) || input.weightKg < 2 || input.weightKg > 250)) {
    return invalidResult("Cân nặng cần nằm trong khoảng 2–250 kg.", activity);
  }
  if (input.heightCm !== undefined && (!Number.isFinite(input.heightCm) || input.heightCm < 45 || input.heightCm > 230)) {
    return invalidResult("Chiều cao cần nằm trong khoảng 45–230 cm.", activity);
  }
  if ((input.weightKg === undefined) !== (input.heightCm === undefined)) {
    return invalidResult("Nếu nhập theo dõi tăng trưởng, hãy nhập cả cân nặng và chiều cao.", activity);
  }

  const ageBand = getAgeBand(input.ageYears);
  const rawBmi = input.weightKg !== undefined && input.heightCm !== undefined ? calculateChildRawBmi(input.weightKg, input.heightCm) : undefined;
  const commonWarnings = [
    CHILD_GLOBAL_SAFETY_NOTE,
    "Nhu cầu thực tế còn phụ thuộc tốc độ tăng trưởng, khẩu phần, bệnh nền và biểu đồ WHO; không dùng khoảng kcal này để ép ăn hoặc đặt mục tiêu giảm cân.",
  ];

  if (ageBand === "under_2") {
    return {
      ok: true,
      mode: "clinical_no_auto",
      isPersonalPrescription: false,
      ageBand,
      ageBandLabel: ageBandLabel(ageBand),
      activity,
      activityLabel: ACTIVITY_LABELS[activity],
      rawBmi,
      warnings: [
        ...commonWarnings,
        "Trẻ dưới 2 tuổi không dùng bảng năng lượng 2–18 tuổi. Hãy theo dõi biểu đồ tăng trưởng WHO và trao đổi về bú/ăn bổ sung với bác sĩ hoặc chuyên gia dinh dưỡng.",
      ],
      reasons: ["under_2_growth_monitoring"],
      sourceLabels: CHILD_SOURCE_LABELS,
    };
  }

  if (input.clinicalConcern) {
    return {
      ok: true,
      mode: "clinical_no_auto",
      isPersonalPrescription: false,
      ageBand,
      ageBandLabel: ageBandLabel(ageBand),
      activity,
      activityLabel: ACTIVITY_LABELS[activity],
      rawBmi,
      warnings: [
        ...commonWarnings,
        "Bạn đã chọn có yếu tố cần cá thể hóa. Không hiển thị số kcal tự động; hãy dùng biểu đồ tăng trưởng, hồ sơ bệnh và hướng dẫn của bác sĩ.",
      ],
      reasons: ["clinical_concern"],
      sourceLabels: CHILD_SOURCE_LABELS,
    };
  }

  const range = ENERGY_RANGES[ageBand][input.sex][activity];
  return {
    ok: true,
    mode: "reference",
    isPersonalPrescription: false,
    ageBand,
    ageBandLabel: ageBandLabel(ageBand),
    activity,
    activityLabel: ACTIVITY_LABELS[activity],
    energyReference: range,
    rawBmi,
    warnings: commonWarnings,
    reasons: ["age_sex_activity_reference"],
    sourceLabels: CHILD_SOURCE_LABELS,
  };
}
