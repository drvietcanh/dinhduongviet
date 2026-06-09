export type ProteinRequirementMode = "auto" | "caution" | "clinical_no_auto";

export interface ProteinRequirementProfile {
  profileId: string;
  label: string;
  shortLabel: string;
  minGPerKg: number | null;
  maxGPerKg: number | null;
  mode: ProteinRequirementMode;
  sourceLabel: string;
  safetyMessage: string;
  appliesTo: string;
  notFor: string;
  requiresClinicalReview: boolean;
  resultNote: string;
  uiWording: string;
}

export interface ProteinFoodExample {
  name: string;
  proteinG: number;
  serving: string;
}

export const PROTEIN_GLOBAL_SAFETY_NOTE =
  "Kết quả là ước tính giáo dục, không thay thế tư vấn dinh dưỡng cá thể. Nếu có bệnh thận, gan, tim, phù, xơ gan, đang mang thai/cho con bú, ung thư, suy dinh dưỡng, đang lọc máu hoặc đang ăn theo chỉ định, hãy hỏi bác sĩ/dinh dưỡng viên trước khi thay đổi lượng đạm.";

export const PROTEIN_PROFILES: ProteinRequirementProfile[] = [
  {
    profileId: "healthy",
    label: "Người lớn khỏe mạnh / ít vận động",
    shortLabel: "Người khỏe",
    minGPerKg: 0.8,
    maxGPerKg: 1.0,
    mode: "auto",
    sourceLabel: "DRI/National Academies; RDA protein người lớn 0.8 g/kg/ngày.",
    safetyMessage: "Khoảng ước tính cho người lớn khỏe mạnh. Nếu có bệnh nền hoặc đang ăn theo chỉ định, hãy hỏi bác sĩ/dinh dưỡng viên.",
    appliesTo: "Người lớn, không mang thai/cho con bú, không CKD/bệnh gan, không suy dinh dưỡng hoặc bệnh cấp.",
    notFor: "Trẻ em, thai kỳ/cho con bú, CKD/lọc máu, ung thư/suy dinh dưỡng, phù/suy tim/xơ gan, hoặc đang ăn theo chỉ định.",
    requiresClinicalReview: false,
    resultNote: "Có thể dùng như mức ước tính ban đầu nếu bạn không thuộc nhóm cần cá thể hóa.",
    uiWording: "Tự động tính được sau khi loại trừ các nhóm lâm sàng.",
  },
  {
    profileId: "active_muscle",
    label: "Vận động vừa / tăng cơ",
    shortLabel: "Vận động / tăng cơ",
    minGPerKg: 1.2,
    maxGPerKg: 2.0,
    mode: "auto",
    sourceLabel: "ISSN protein and exercise; DRI làm mốc tối thiểu.",
    safetyMessage: "Dành cho người tập luyện và không có bệnh thận/gan. Nếu có bệnh nền, không tự tăng đạm.",
    appliesTo: "Người lớn khỏe mạnh, tập luyện đều, mục tiêu duy trì hoặc tăng cơ.",
    notFor: "CKD, protein niệu/eGFR giảm, bệnh gan tiến triển, gout không kiểm soát, thai kỳ, ung thư/suy dinh dưỡng hoặc hậu phẫu.",
    requiresClinicalReview: false,
    resultNote: "Khoảng này chỉ dành cho người khỏe đang tập luyện; không áp dụng nếu có bệnh thận/gan.",
    uiWording: "Tự động tính có điều kiện cho người lớn khỏe mạnh.",
  },
  {
    profileId: "weight_loss",
    label: "Giảm cân / giữ cơ",
    shortLabel: "Giảm cân",
    minGPerKg: 1.2,
    maxGPerKg: 1.6,
    mode: "caution",
    sourceLabel: "needs_source cho obesity/weight management; ISSN hỗ trợ khi có tập luyện.",
    safetyMessage: "Ước tính ban đầu khi giảm cân. Không áp dụng nếu có bệnh thận, suy dinh dưỡng, thai kỳ hoặc đang điều trị.",
    appliesTo: "Người lớn giảm năng lượng có kiểm soát, muốn giữ khối cơ.",
    notFor: "CKD, rối loạn ăn uống, suy dinh dưỡng, thai kỳ, ung thư, người cao tuổi yếu, phù/suy tim/xơ gan.",
    requiresClinicalReview: true,
    resultNote: "Đây là khoảng tham khảo có cảnh báo, nên cá thể hóa theo cân nặng mục tiêu, mức tập luyện và bệnh nền.",
    uiWording: "Hiển thị khoảng tham khảo, không coi là khuyến nghị cá nhân.",
  },
  {
    profileId: "elderly",
    label: "Người cao tuổi",
    shortLabel: "Cao tuổi",
    minGPerKg: 1.0,
    maxGPerKg: 1.2,
    mode: "caution",
    sourceLabel: "ESPEN geriatrics; DRI làm mốc tối thiểu.",
    safetyMessage: "Người cao tuổi cần cá nhân hóa theo chức năng thận, khối cơ, khả năng nhai/nuốt và nguy cơ suy dinh dưỡng.",
    appliesTo: "Người từ 65 tuổi trở lên, ăn uống ổn, không có CKD tiến triển.",
    notFor: "CKD G3-G5, lọc máu, suy dinh dưỡng nặng, bệnh cấp, khó nuốt, phù/suy tim/xơ gan.",
    requiresClinicalReview: true,
    resultNote: "Khoảng này là mức ban đầu cho người cao tuổi tương đối ổn định; người yếu/sarcopenia cần đánh giá riêng.",
    uiWording: "Cần thận trọng và nên kiểm chức năng thận/nguy cơ suy dinh dưỡng.",
  },
  {
    profileId: "diabetes_no_ckd",
    label: "Đái tháo đường không CKD",
    shortLabel: "Đái tháo đường không CKD",
    minGPerKg: 0.8,
    maxGPerKg: 1.2,
    mode: "caution",
    sourceLabel: "ADA/Endotext: không có mức protein tối ưu chung nếu không có bệnh thận.",
    safetyMessage: "Đái tháo đường không có bệnh thận không có mức protein tối ưu chung; ưu tiên cá nhân hóa và theo dõi chức năng thận.",
    appliesTo: "Người có đái tháo đường nhưng không albumin niệu, không eGFR giảm, không CKD.",
    notFor: "Diabetic kidney disease, CKD, albumin niệu, eGFR giảm, thai kỳ, suy tim/gan/thận hoặc đang ăn theo chỉ định.",
    requiresClinicalReview: true,
    resultNote: "Khoảng này chỉ là tham khảo; mục tiêu dinh dưỡng trong đái tháo đường cần cá nhân hóa.",
    uiWording: "Không tự tăng đạm nếu chưa rõ chức năng thận.",
  },
  {
    profileId: "ckd_nondialysis",
    label: "CKD chưa lọc máu",
    shortLabel: "CKD chưa lọc",
    minGPerKg: 0.55,
    maxGPerKg: 0.8,
    mode: "clinical_no_auto",
    sourceLabel: "KDOQI/NKF 2020 Nutrition in CKD.",
    safetyMessage: "Bệnh thận mạn chưa lọc máu: không tự giảm hoặc tăng đạm. Range này chỉ để trao đổi với bác sĩ/dinh dưỡng viên.",
    appliesTo: "CKD stage/eGFR đã xác định, chưa lọc máu, có theo dõi dinh dưỡng và năng lượng ăn vào.",
    notFor: "Đang lọc máu, suy dinh dưỡng, bệnh cấp/catabolic, thai kỳ, ung thư, hội chứng thận hư hoặc không biết eGFR/stage.",
    requiresClinicalReview: true,
    resultNote: "Công cụ không đưa khuyến nghị cá nhân cho CKD chưa lọc máu.",
    uiWording: "Chỉ hiển thị cảnh báo và nguồn tham khảo, không tự động tính mục tiêu cá nhân.",
  },
  {
    profileId: "ckd_diabetes",
    label: "CKD + đái tháo đường",
    shortLabel: "CKD + ĐTĐ",
    minGPerKg: 0.6,
    maxGPerKg: 0.8,
    mode: "clinical_no_auto",
    sourceLabel: "KDOQI/KDIGO commentary; ADA Standards CKD.",
    safetyMessage: "CKD kèm đái tháo đường cần mục tiêu riêng và theo dõi sát; không tự áp dụng range giảm đạm.",
    appliesTo: "CKD 3-5 + đái tháo đường, không lọc máu, dưới medical nutrition therapy.",
    notFor: "Đang lọc máu, suy dinh dưỡng, bệnh cấp, eGFR/stage không rõ hoặc thai kỳ.",
    requiresClinicalReview: true,
    resultNote: "Guideline có cách framing khác nhau; cần bác sĩ/dinh dưỡng viên quyết định.",
    uiWording: "Không tự động tính mục tiêu cá nhân.",
  },
  {
    profileId: "dialysis",
    label: "Đang lọc máu",
    shortLabel: "Lọc máu",
    minGPerKg: 1.0,
    maxGPerKg: 1.2,
    mode: "clinical_no_auto",
    sourceLabel: "KDOQI/NKF 2020 Nutrition in CKD; phác đồ trung tâm lọc máu.",
    safetyMessage: "Đang lọc máu khác CKD chưa lọc máu. Không tự ăn kiêng đạm; mức đạm cần theo trung tâm lọc máu.",
    appliesTo: "Hemodialysis/peritoneal dialysis đã xác nhận và được theo dõi albumin, nPNA, tình trạng viêm, năng lượng ăn vào.",
    notFor: "CKD chưa lọc máu, không rõ loại lọc máu, bệnh cấp/ICU.",
    requiresClinicalReview: true,
    resultNote: "Công cụ không thay thế kế hoạch dinh dưỡng của đơn vị lọc máu.",
    uiWording: "Chỉ hiển thị cảnh báo và nguồn tham khảo, không tự động tính mục tiêu cá nhân.",
  },
  {
    profileId: "gout",
    label: "Gout",
    shortLabel: "Gout",
    minGPerKg: 0.8,
    maxGPerKg: 1.0,
    mode: "caution",
    sourceLabel: "ACR 2020 gout guideline; DRI cho nền protein chung.",
    safetyMessage: "Gout không chỉ phụ thuộc tổng đạm; quan trọng là purin, rượu/bia, fructose, cân nặng và chức năng thận.",
    appliesTo: "Gout ổn định, không CKD, không đợt cấp nặng.",
    notFor: "CKD, sỏi thận urat, đợt gout cấp, đang hạn chế dịch, suy tim/xơ gan hoặc đang điều trị cần tư vấn.",
    requiresClinicalReview: true,
    resultNote: "Khoảng protein chỉ là nền tham khảo; ưu tiên chọn nguồn ít purin và hạn chế rượu/fructose.",
    uiWording: "Caution: không dùng tổng protein làm tiêu chí duy nhất.",
  },
  {
    profileId: "pregnancy_lactation",
    label: "Thai kỳ / cho con bú",
    shortLabel: "Thai kỳ / cho con bú",
    minGPerKg: null,
    maxGPerKg: null,
    mode: "clinical_no_auto",
    sourceLabel: "DRI/National Academies pregnancy/lactation; cần nguồn sản khoa chính thức.",
    safetyMessage: "Thai kỳ/cho con bú cần cá nhân hóa theo sản khoa. Công cụ không thay thế tư vấn của bác sĩ sản và dinh dưỡng viên.",
    appliesTo: "Cần tuổi thai, cân nặng trước mang thai, BMI, song thai/không, nguy cơ sản khoa và mục tiêu sản khoa.",
    notFor: "Thai nguy cơ cao, tiền sản giật, CKD, đái tháo đường thai kỳ, suy dinh dưỡng, sinh non hoặc mẹ có bệnh nền.",
    requiresClinicalReview: true,
    resultNote: "Chưa khóa range g/kg vào engine tự phục vụ.",
    uiWording: "Không tự động tính mục tiêu cá nhân.",
  },
  {
    profileId: "cancer_malnutrition",
    label: "Ung thư / suy dinh dưỡng",
    shortLabel: "Ung thư / suy dinh dưỡng",
    minGPerKg: 1.0,
    maxGPerKg: 1.5,
    mode: "clinical_no_auto",
    sourceLabel: "ESPEN Clinical Nutrition in cancer; ESPEN polymorbid medical inpatients.",
    safetyMessage: "Nhóm này cần đánh giá dinh dưỡng, nguy cơ refeeding, mục tiêu điều trị và khả năng ăn/uống/nuốt.",
    appliesTo: "Chỉ sau sàng lọc/đánh giá dinh dưỡng, mục tiêu điều trị và nguy cơ refeeding.",
    notFor: "CKD/gan tiến triển, ICU, refeeding risk cao, nuốt kém, điều trị đặc hiệu cần phác đồ riêng.",
    requiresClinicalReview: true,
    resultNote: "Công cụ chỉ hiển thị nguồn tham khảo; không tự động đưa mục tiêu cá nhân.",
    uiWording: "Cần chuyên môn trước khi thay đổi protein.",
  },
  {
    profileId: "vegan",
    label: "Ăn chay",
    shortLabel: "Ăn chay",
    minGPerKg: 0.9,
    maxGPerKg: 1.1,
    mode: "caution",
    sourceLabel: "needs_source cho protein quality/digestibility; DRI làm mốc tối thiểu.",
    safetyMessage: "Ăn chay cần chú ý đủ tổng protein, chất lượng protein và B12/sắt/kẽm; không tự tăng đạm nếu có bệnh thận.",
    appliesTo: "Người lớn khỏe, ăn chay cân đối, không CKD/gan/thai kỳ/suy dinh dưỡng.",
    notFor: "CKD, thai kỳ, trẻ em, suy dinh dưỡng, người cao tuổi yếu hoặc ăn chay quá hạn chế.",
    requiresClinicalReview: true,
    resultNote: "Khoảng này là tham khảo; cần phối hợp nhiều nguồn đạm thực vật trong ngày.",
    uiWording: "Caution do chất lượng protein và vi chất cần được xem cùng nhau.",
  },
];

export const PROTEIN_FOOD_EXAMPLES: ProteinFoodExample[] = [
  { name: "Ức gà chín", serving: "100g", proteinG: 31 },
  { name: "Cá nạc", serving: "100g", proteinG: 18 },
  { name: "Trứng gà", serving: "1 quả khoảng 50g", proteinG: 6.5 },
  { name: "Đậu phụ", serving: "150g", proteinG: 12 },
  { name: "Sữa tươi", serving: "200ml", proteinG: 7 },
  { name: "Đậu nành luộc", serving: "100g", proteinG: 16 },
];
