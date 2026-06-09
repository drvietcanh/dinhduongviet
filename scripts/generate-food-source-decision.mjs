import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputPath = path.join(root, "reports", "food-source-decision-v1.md");

const prioritySlugs = new Set([
  "thit-heo-quay",
  "lap-xuong-nuong",
  "thit-xong-khoi",
  "thit-bacon",
  "thit-bacon-chien",
]);

const candidateMap = {
  "com-nep": {
    codes: ["1001", "1002"],
    fit: "ingredient_only",
    risk: "high",
    decision: "do_not_change_yet",
    reason: "Candidate nội bộ là gạo nếp khô, không phải 100g cơm nếp đã nấu chín.",
  },
  "com-gao-lut-do": {
    codes: ["1005"],
    fit: "ingredient_only",
    risk: "high",
    decision: "do_not_change_yet",
    reason: "Candidate nội bộ là gạo lứt khô chung, không phải cơm gạo lứt đỏ đã nấu chín.",
  },
  "com-gao-lut-den": {
    codes: ["1005"],
    fit: "ingredient_only",
    risk: "high",
    decision: "do_not_change_yet",
    reason: "Candidate nội bộ là gạo lứt khô chung, không phải cơm gạo lứt đen đã nấu chín.",
  },
  "suon-heo-nuong": {
    codes: ["7053"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Chỉ có sườn lợn bỏ xương, thiếu trạng thái nướng/ướp; nên giữ số ước tính và làm rõ basis.",
  },
  "nem-lui": {
    codes: ["7072", "7073"],
    fit: "close_match",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Nem chạo/nem chua gần nhóm nhưng khác nem lụi nướng; chưa thay số.",
  },
  "thit-heo-quay": {
    codes: ["7018", "7016", "7064"],
    fit: "ingredient_only",
    risk: "high",
    decision: "recipe_estimate_only",
    reason: "Chỉ có nguyên liệu/thịt chế biến khác, không có món heo quay; cần duyệt công thức hoặc nguồn món quay.",
  },
  "banh-chung": {
    codes: ["1001", "7018"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Chỉ có nguyên liệu gạo nếp/thịt lợn, không có bánh chưng thành phẩm.",
  },
  "banh-troi": {
    codes: ["1016"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Chỉ có bột gạo nếp khô, thiếu món thành phẩm và nhân đường.",
  },
  "banh-chay": {
    codes: ["1016"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Chỉ có bột gạo nếp khô, thiếu món thành phẩm và basis nhân/nước đường.",
  },
  "banh-gio": {
    codes: ["1017", "7018"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Có bột gạo tẻ và thịt lợn riêng lẻ, không có bánh giò thành phẩm.",
  },
  "banh-mi-pate": {
    codes: ["1012"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Có bánh mỳ nhưng thiếu pate/nhân; không thay số món hoàn chỉnh.",
  },
  "banh-mi-cha-ca": {
    codes: ["1012"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Có bánh mỳ nhưng thiếu chả cá và món hoàn chỉnh.",
  },
  "banh-mi-cha-lua": {
    codes: ["1012", "7069"],
    fit: "ingredient_only",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Có bánh mỳ và giò lụa riêng lẻ, không có bánh mì chả lụa thành phẩm.",
  },
  "nem-nuong": {
    codes: ["7072", "7064"],
    fit: "close_match",
    risk: "medium",
    decision: "keep_current_add_note",
    reason: "Có món thịt chế biến gần nhóm nhưng không có nem nướng; giữ ước tính và bổ sung basis.",
  },
  "lap-xuong-nuong": {
    codes: ["7071"],
    fit: "close_match",
    risk: "medium",
    decision: "replace_after_dietitian_review",
    reason: "VN 2007 có Lạp xường gần nhất; cần duyệt vì khác trạng thái nướng và tên chuẩn.",
  },
  "thit-xong-khoi": {
    codes: [],
    fit: "no_match",
    risk: "high",
    decision: "needs_external_source",
    reason: "Không có candidate nội bộ cho thịt hun khói/xông khói.",
  },
  "thit-bacon": {
    codes: [],
    fit: "no_match",
    risk: "high",
    decision: "needs_external_source",
    reason: "Không có candidate nội bộ cho bacon; không thay bằng thịt lợn mỡ.",
  },
  "thit-bacon-chien": {
    codes: [],
    fit: "no_match",
    risk: "high",
    decision: "needs_external_source",
    reason: "Không có candidate nội bộ cho bacon chiên.",
  },
  "xuc-xich-duc": {
    codes: ["7077"],
    fit: "close_match",
    risk: "medium",
    decision: "replace_after_dietitian_review",
    reason: "Có Xúc xích generic trong VN 2007 nhưng không phân biệt bratwurst.",
  },
  "xuc-xich-my": {
    codes: ["7077"],
    fit: "close_match",
    risk: "medium",
    decision: "replace_after_dietitian_review",
    reason: "Có Xúc xích generic trong VN 2007 nhưng không phân biệt hot dog/frankfurter.",
  },
  "xuc-xich-bo": {
    codes: ["7077"],
    fit: "close_match",
    risk: "medium",
    decision: "replace_after_dietitian_review",
    reason: "Có Xúc xích generic trong VN 2007 nhưng không phân biệt xúc xích bò.",
  },
  "xuc-xich-ga": {
    codes: ["7077"],
    fit: "close_match",
    risk: "medium",
    decision: "replace_after_dietitian_review",
    reason: "Có Xúc xích generic trong VN 2007 nhưng không phân biệt xúc xích gà.",
  },
  "xuc-xich-heo": {
    codes: ["7077"],
    fit: "close_match",
    risk: "medium",
    decision: "replace_after_dietitian_review",
    reason: "Có Xúc xích generic trong VN 2007 nhưng không phân biệt xúc xích heo.",
  },
};

function metric(value) {
  if (value === null || value === undefined) return "-";
  if (value === "") return "";
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function currentMacros(food) {
  return `${metric(food.nutrients?.energyKcal)}/${metric(food.nutrients?.proteinG)}/${metric(food.nutrients?.fatG)}/${metric(food.nutrients?.carbG)}`;
}

function candidateMacros(food) {
  return `${metric(food.energy_kcal)}/${metric(food.protein_g)}/${metric(food.lipid_g)}/${metric(food.glucid_g)}`;
}

function candidateCell(candidates, sourceByCode) {
  if (candidates.length === 0) return "Không có candidate nội bộ phù hợp";
  return candidates.map((food) => {
    const source = sourceByCode.get(String(food.code));
    const suffix = source ? ` (${source.source}; ${source.per})` : "";
    return `${food.code} - ${food.name_vi} ${candidateMacros(food)}${suffix}`;
  }).join("; ");
}

function row(food, candidates, config) {
  return [
    food.slug,
    prioritySlugs.has(food.slug) ? "yes" : "",
    food.name,
    currentMacros(food),
    food.state,
    food.basis,
    food.source || food.sourceId,
    food.confidence,
    candidateCell(candidates, sourceByCode),
    config.fit,
    config.risk,
    config.decision,
    config.reason,
    "",
  ].map(metric);
}

function table(items) {
  const header = [
    "slug",
    "priority",
    "name",
    "current kcal/protein/lipid/glucid",
    "state",
    "basis",
    "source",
    "confidence",
    "best internal candidate",
    "fit",
    "risk level",
    "proposed decision",
    "reason",
    "doctor_decision",
  ];
  return [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...items.map((item) => `| ${row(item.food, item.candidates, item.config).join(" | ")} |`),
  ].join("\n");
}

function countsBy(items, key) {
  return items.reduce((totals, item) => {
    const value = item.config[key];
    totals[value] = (totals[value] || 0) + 1;
    return totals;
  }, {});
}

function formatCounts(counts) {
  return Object.entries(counts).map(([key, count]) => `- ${key}: ${count}`).join("\n");
}

const [
  crosscheckReport,
  reviewReport,
  qaReport,
  foods,
  vietnamFoods,
  vietnamNutrients,
] = await Promise.all([
  readFile(path.join(root, "reports", "food-source-crosscheck-v1.md"), "utf8"),
  readFile(path.join(root, "reports", "food-source-review-v1.md"), "utf8"),
  readFile(path.join(root, "test-results", "food-data-qa.json"), "utf8").then(JSON.parse),
  readFile(path.join(root, "dist", "api-foods.json"), "utf8").then(JSON.parse),
  readFile(path.join(root, "public", "api", "vietnam-foods.json"), "utf8").then(JSON.parse),
  readFile(path.join(root, "public", "api", "vietnam-nutrients.json"), "utf8").then(JSON.parse),
]);

if (!crosscheckReport.includes("Food Source Crosscheck v1") || !reviewReport.includes("Food Source Review v1")) {
  throw new Error("Required source reports were not readable or did not match expected headings.");
}

const foodBySlug = new Map(foods.map((food) => [food.slug, food]));
const vnByCode = new Map(vietnamFoods.map((food) => [String(food.code), food]));
const sourceByCode = new Map();
for (const nutrient of vietnamNutrients) {
  const code = String(nutrient.code);
  if (!sourceByCode.has(code) && nutrient.source && nutrient.per) {
    sourceByCode.set(code, { source: nutrient.source, per: nutrient.per });
  }
}

const riceSlugs = [...new Set((qaReport.riceSourceReview || []).map((item) => item.slug))];
const cookedSlugs = [...new Set((qaReport.cookedHighEnergyReview || []).map((item) => item.slug))];
const uniqueSlugs = [...new Set([...riceSlugs, ...cookedSlugs])];

const decisionItems = uniqueSlugs.map((slug) => {
  const food = foodBySlug.get(slug);
  if (!food) throw new Error(`Food not found in dist/api-foods.json: ${slug}`);
  const config = candidateMap[slug];
  if (!config) throw new Error(`Decision config missing for slug: ${slug}`);
  const candidates = config.codes.map((code) => vnByCode.get(code)).filter(Boolean);
  return { food, config, candidates };
});

const riceItems = decisionItems.filter((item) => riceSlugs.includes(item.food.slug));
const cookedItems = decisionItems.filter((item) => cookedSlugs.includes(item.food.slug));
const priorityItems = decisionItems.filter((item) => prioritySlugs.has(item.food.slug));
const replaceReady = decisionItems.filter((item) => item.config.decision === "replace_after_dietitian_review");
const externalSource = decisionItems.filter((item) => item.config.decision === "needs_external_source");

const decisionCounts = countsBy(decisionItems, "decision");
const riskCounts = countsBy(decisionItems, "risk");
const fitCounts = countsBy(decisionItems, "fit");

const markdown = `# Food Source Decision v1

Generated for doctor/dietitian approval before changing the canonical food data.

Inputs read:

- \`reports/food-source-crosscheck-v1.md\`
- \`reports/food-source-review-v1.md\`
- \`test-results/food-data-qa.json\`
- \`dist/api-foods.json\`
- \`public/api/vietnam-foods.json\`
- \`public/api/vietnam-nutrients.json\`

No nutrition values, slugs, names, sources, or canonical food records were changed.

## Tóm Tắt

- Unique decision items: ${decisionItems.length}.
- Rice source review items: ${riceItems.length}.
- Cooked high energy review items: ${cookedItems.length}.
- Note: the 3 rice items also appear inside cooked high energy review, so the combined unique count remains ${decisionItems.length}.

Decision counts:

${formatCounts(decisionCounts)}

Risk counts:

${formatCounts(riskCounts)}

Fit counts:

${formatCounts(fitCounts)}

## Nguyên Tắc Duyệt

- \`keep_current\`: giữ nguyên hiện tại, chưa cần thay đổi.
- \`keep_current_add_note\`: giữ số hiện tại, sau duyệt có thể bổ sung basis/note/source note rõ hơn.
- \`replace_after_dietitian_review\`: có candidate nội bộ gần nhất, chỉ thay sau khi bác sĩ/dinh dưỡng viên duyệt.
- \`needs_external_source\`: dữ liệu nội bộ không có candidate đủ gần, cần nguồn ngoài hoặc nguồn chuyên môn.
- \`recipe_estimate_only\`: chỉ nên xem là ước tính công thức, không thay bằng nguyên liệu đơn lẻ.
- \`do_not_change_yet\`: chưa đủ căn cứ để sửa bất kỳ metadata chính hoặc số liệu.

## Item Có Thể Sửa Sau Khi Duyệt

${replaceReady.map((item) => `- \`${item.food.slug}\`: ${item.food.name} -> ${item.config.decision}; candidate: ${candidateCell(item.candidates, sourceByCode)}.`).join("\n")}

## Item Bắt Buộc Cần Nguồn Ngoài

${externalSource.map((item) => `- \`${item.food.slug}\`: ${item.food.name}; ${item.config.reason}`).join("\n")}

## 5 Mục Ưu Tiên Cao

${table(priorityItems)}

## 3 Mục Cơm/Gạo

${table(riceItems)}

## Toàn Bộ Decision Table

${table(decisionItems)}

## Kết Luận Dành Cho Người Duyệt

- Không có \`exact_match\` trong nguồn nội bộ cho các item này.
- Các mục cơm/gạo cần nguồn cho 100g cơm đã nấu chín, không dùng gạo khô để thay trực tiếp.
- Nhóm \`xuc-xich-*\` và \`lap-xuong-nuong\` là nhóm có thể xử lý sớm nhất nếu bác sĩ/dinh dưỡng viên chấp nhận dùng candidate generic VN 2007.
- \`thit-xong-khoi\`, \`thit-bacon\`, \`thit-bacon-chien\` cần nguồn ngoài trước khi sửa dữ liệu chính.
`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, markdown, "utf8");
console.log(`Food source decision written: ${path.relative(root, outputPath)}`);
console.log(JSON.stringify({
  total: decisionItems.length,
  decisionCounts,
  riskCounts,
  fitCounts,
  replaceAfterDietitianReview: replaceReady.map((item) => item.food.slug),
  needsExternalSource: externalSource.map((item) => item.food.slug),
}, null, 2));
