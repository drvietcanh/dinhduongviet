import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputPath = path.join(root, "reports", "food-source-crosscheck-v1.md");

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
    proposal: "needs_manual_dietitian_review",
    reason: "VN 2007 có gạo nếp khô, không phải 100g cơm nếp đã nấu chín; không thay trực tiếp.",
  },
  "com-gao-lut-do": {
    codes: ["1005"],
    fit: "ingredient_only",
    proposal: "needs_manual_dietitian_review",
    reason: "VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đỏ đã nấu chín; cần nguồn cơm chín.",
  },
  "com-gao-lut-den": {
    codes: ["1005"],
    fit: "ingredient_only",
    proposal: "needs_manual_dietitian_review",
    reason: "VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đen đã nấu chín; cần nguồn cơm chín.",
  },
  "suon-heo-nuong": {
    codes: ["7053"],
    fit: "ingredient_only",
    proposal: "keep_current_add_note",
    reason: "Có sườn lợn bỏ xương nhưng không có trạng thái nướng/ướp; dùng để đối chiếu nguyên liệu, không thay số món nướng.",
  },
  "nem-lui": {
    codes: ["7072", "7073"],
    fit: "close_match",
    proposal: "needs_manual_dietitian_review",
    reason: "Nem chạo/nem chua là món thịt chế biến gần nhóm nem nhưng khác nem lụi nướng; không thay trực tiếp.",
  },
  "thit-heo-quay": {
    codes: ["7018", "7016", "7064"],
    fit: "ingredient_only",
    proposal: "needs_manual_dietitian_review",
    reason: "Có thịt lợn nạc/mỡ và chả lợn nhưng không có heo quay; cần nguồn món quay hoặc chuẩn hóa basis phần da/mỡ.",
  },
  "banh-chung": {
    codes: ["1001", "7018"],
    fit: "ingredient_only",
    proposal: "needs_manual_dietitian_review",
    reason: "Chỉ có nguyên liệu gạo nếp/thịt lợn, không có bánh chưng hoàn chỉnh; không thể thay số trực tiếp.",
  },
  "banh-troi": {
    codes: ["1016"],
    fit: "ingredient_only",
    proposal: "rename_or_add_basis",
    reason: "Có bột gạo nếp khô, không có bánh trôi đã nấu và nhân đường; cần basis món thành phẩm.",
  },
  "banh-chay": {
    codes: ["1016"],
    fit: "ingredient_only",
    proposal: "rename_or_add_basis",
    reason: "Có bột gạo nếp khô, không có bánh chay thành phẩm; cần làm rõ nhân/nước đường/basis.",
  },
  "banh-gio": {
    codes: ["1017", "7018"],
    fit: "ingredient_only",
    proposal: "rename_or_add_basis",
    reason: "Có bột gạo tẻ và thịt lợn nhưng không có bánh giò thành phẩm; cần nguồn món hoặc công thức chuẩn.",
  },
  "banh-mi-pate": {
    codes: ["1012"],
    fit: "ingredient_only",
    proposal: "rename_or_add_basis",
    reason: "Có bánh mỳ nhưng không có pate/nhân; chỉ đối chiếu phần vỏ bánh.",
  },
  "banh-mi-cha-ca": {
    codes: ["1012"],
    fit: "ingredient_only",
    proposal: "rename_or_add_basis",
    reason: "Có bánh mỳ nhưng không có chả cá trong VN 2007; cần nguồn món hoàn chỉnh.",
  },
  "banh-mi-cha-lua": {
    codes: ["1012", "7069"],
    fit: "ingredient_only",
    proposal: "rename_or_add_basis",
    reason: "Có bánh mỳ và giò lụa riêng lẻ, không có bánh mì chả lụa thành phẩm.",
  },
  "nem-nuong": {
    codes: ["7072", "7064"],
    fit: "close_match",
    proposal: "needs_manual_dietitian_review",
    reason: "Có nem chạo/chả lợn gần nhóm thịt chế biến nhưng không có nem nướng; cần nguồn riêng cho món nướng.",
  },
  "lap-xuong-nuong": {
    codes: ["7071"],
    fit: "close_match",
    proposal: "replace_with_source_after_review",
    reason: "VN 2007 có Lạp xường rất gần; khác trạng thái nướng và tên chuẩn, cần duyệt trước khi thay số.",
  },
  "thit-xong-khoi": {
    codes: [],
    fit: "no_match",
    proposal: "needs_manual_dietitian_review",
    reason: "Không tìm thấy thịt hun khói/xông khói tương ứng trong VN 2007 local.",
  },
  "thit-bacon": {
    codes: [],
    fit: "no_match",
    proposal: "needs_manual_dietitian_review",
    reason: "Không tìm thấy bacon tương ứng trong VN 2007 local; không dùng thịt lợn mỡ để thay trực tiếp.",
  },
  "thit-bacon-chien": {
    codes: [],
    fit: "no_match",
    proposal: "needs_manual_dietitian_review",
    reason: "Không tìm thấy bacon chiên tương ứng trong VN 2007 local.",
  },
  "xuc-xich-duc": {
    codes: ["7077"],
    fit: "close_match",
    proposal: "replace_with_source_after_review",
    reason: "VN 2007 có Xúc xích generic; không phân biệt bratwurst nhưng đủ gần để bác sĩ/dinh dưỡng viên duyệt.",
  },
  "xuc-xich-my": {
    codes: ["7077"],
    fit: "close_match",
    proposal: "replace_with_source_after_review",
    reason: "VN 2007 có Xúc xích generic; không phân biệt hot dog/frankfurter.",
  },
  "xuc-xich-bo": {
    codes: ["7077"],
    fit: "close_match",
    proposal: "replace_with_source_after_review",
    reason: "VN 2007 có Xúc xích generic; không phân biệt xúc xích bò.",
  },
  "xuc-xich-ga": {
    codes: ["7077"],
    fit: "close_match",
    proposal: "replace_with_source_after_review",
    reason: "VN 2007 có Xúc xích generic; không phân biệt xúc xích gà.",
  },
  "xuc-xich-heo": {
    codes: ["7077"],
    fit: "close_match",
    proposal: "replace_with_source_after_review",
    reason: "VN 2007 có Xúc xích generic; không phân biệt xúc xích heo.",
  },
};

function metric(value) {
  if (value === null || value === undefined || value === "") return "-";
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function currentMacros(food) {
  return {
    kcal: food.nutrients?.energyKcal,
    protein: food.nutrients?.proteinG,
    lipid: food.nutrients?.fatG,
    glucid: food.nutrients?.carbG,
  };
}

function candidateMacros(food) {
  return {
    kcal: food.energy_kcal,
    protein: food.protein_g,
    lipid: food.lipid_g,
    glucid: food.glucid_g,
  };
}

function sourceId(food) {
  return food.sourceId || food.source || "-";
}

function candidateCell(candidates, sourceByCode) {
  if (candidates.length === 0) return "Không có candidate nội bộ phù hợp";
  return candidates.map((food) => {
    const source = sourceByCode.get(String(food.code));
    const suffix = source ? ` (${source.source}; ${source.per})` : " (Bảng thành phần thực phẩm Việt Nam 2007)";
    return `${food.code} - ${food.name_vi}${suffix}`;
  }).join("; ");
}

function candidateMacroCell(candidates) {
  if (candidates.length === 0) return "-";
  return candidates.map((food) => {
    const n = candidateMacros(food);
    return `${food.code}: ${metric(n.kcal)}/${metric(n.protein)}/${metric(n.lipid)}/${metric(n.glucid)}`;
  }).join("; ");
}

function row(food, candidates, config, sourceByCode) {
  const n = currentMacros(food);
  return [
    food.slug,
    prioritySlugs.has(food.slug) ? "yes" : "",
    food.name,
    `${metric(n.kcal)}/${metric(n.protein)}/${metric(n.lipid)}/${metric(n.glucid)}`,
    food.state,
    food.basis,
    sourceId(food),
    food.confidence,
    candidateCell(candidates, sourceByCode),
    candidateMacroCell(candidates),
    config.fit,
    config.proposal,
    config.reason,
  ].map(metric);
}

function table(rows) {
  const header = [
    "slug hiện tại",
    "ưu tiên cao",
    "tên hiện tại",
    "hiện tại kcal/protein/lipid/glucid",
    "state",
    "basis",
    "source",
    "confidence",
    "candidate nguồn nội bộ",
    "candidate kcal/protein/lipid/glucid",
    "mức phù hợp",
    "đề xuất",
    "lý do",
  ];
  return [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...rows.map((cells) => `| ${cells.join(" | ")} |`),
  ].join("\n");
}

const [qaReport, foods, vietnamFoods, vietnamNutrients] = await Promise.all([
  readFile(path.join(root, "test-results", "food-data-qa.json"), "utf8").then(JSON.parse),
  readFile(path.join(root, "dist", "api-foods.json"), "utf8").then(JSON.parse),
  readFile(path.join(root, "public", "api", "vietnam-foods.json"), "utf8").then(JSON.parse),
  readFile(path.join(root, "public", "api", "vietnam-nutrients.json"), "utf8").then(JSON.parse),
]);

const foodBySlug = new Map(foods.map((food) => [food.slug, food]));
const vnByCode = new Map(vietnamFoods.map((food) => [String(food.code), food]));
const sourceByCode = new Map();
for (const nutrient of vietnamNutrients) {
  const code = String(nutrient.code);
  if (!sourceByCode.has(code) && nutrient.source && nutrient.per) {
    sourceByCode.set(code, { source: nutrient.source, per: nutrient.per });
  }
}
const slugs = [
  ...(qaReport.riceSourceReview || []).map((item) => item.slug),
  ...(qaReport.cookedHighEnergyReview || []).map((item) => item.slug),
];
const uniqueSlugs = [...new Set(slugs)];
const crosscheck = uniqueSlugs.map((slug) => {
  const food = foodBySlug.get(slug);
  const config = candidateMap[slug] || {
    codes: [],
    fit: "no_match",
    proposal: "needs_manual_dietitian_review",
    reason: "Chưa có mapping candidate nội bộ.",
  };
  const candidates = config.codes.map((code) => vnByCode.get(code)).filter(Boolean);
  return { food, config, candidates };
});

const fitCounts = crosscheck.reduce((totals, item) => {
  totals[item.config.fit] = (totals[item.config.fit] || 0) + 1;
  return totals;
}, {});
const proposalCounts = crosscheck.reduce((totals, item) => {
  totals[item.config.proposal] = (totals[item.config.proposal] || 0) + 1;
  return totals;
}, {});
const foundCount = crosscheck.filter((item) => item.candidates.length > 0).length;
const priorityRows = crosscheck.filter((item) => prioritySlugs.has(item.food.slug));
const riceRows = crosscheck.filter((item) => (qaReport.riceSourceReview || []).some((r) => r.slug === item.food.slug));
const cookedRows = crosscheck.filter((item) => (qaReport.cookedHighEnergyReview || []).some((r) => r.slug === item.food.slug));

const markdown = `# Food Source Crosscheck v1

Generated from local data only:

- \`reports/food-source-review-v1.md\`
- \`test-results/food-data-qa.json\`
- \`dist/api-foods.json\`
- \`public/api/vietnam-foods.json\`
- \`public/api/vietnam-nutrients.json\`
- SQLite source used by export script: \`data/nutrition/nutrition_final_with_core.sqlite\`

No web sources were used. No nutrition values were changed.

## Tóm Tắt

- Unique items cross-checked: ${crosscheck.length}.
- Items with at least one internal candidate: ${foundCount}/${crosscheck.length}.
- Rice source review items: ${riceRows.length}.
- Cooked high energy review rows: ${cookedRows.length}.
- Fit counts: ${Object.entries(fitCounts).map(([key, count]) => `${key}: ${count}`).join(", ")}.
- Proposal counts: ${Object.entries(proposalCounts).map(([key, count]) => `${key}: ${count}`).join(", ")}.

## Nguyên Tắc Đọc Report

- \`exact_match\`: cùng món và cùng trạng thái/basis đủ tin cậy để cân nhắc thay sau duyệt.
- \`close_match\`: cùng nhóm rất gần nhưng còn khác loại/thương phẩm/cách chế biến.
- \`ingredient_only\`: chỉ có nguyên liệu hoặc thành phần chính, không thay trực tiếp cho món chín.
- \`no_match\`: chưa tìm thấy candidate nội bộ phù hợp.

## 5 Mục Ưu Tiên Cao

${table(priorityRows.map((item) => row(item.food, item.candidates, item.config, sourceByCode)))}

## 3 Mục Cơm/Gạo

${table(riceRows.map((item) => row(item.food, item.candidates, item.config, sourceByCode)))}

## Toàn Bộ Cooked High Energy

${table(cookedRows.map((item) => row(item.food, item.candidates, item.config, sourceByCode)))}

## Kết Luận Tự Động

- Không có item nào đủ điều kiện \`exact_match\` từ dữ liệu local trong vòng này.
- Các mục cơm/gạo chỉ có candidate gạo khô trong VN 2007, vì vậy cần nguồn 100g cơm đã nấu chín trước khi sửa.
- \`lap-xuong-nuong\` và nhóm \`xuc-xich-*\` có candidate nội bộ gần nhất, nhưng cần duyệt vì VN 2007 không phân biệt nướng/loại thịt/thương phẩm.
- \`thit-xong-khoi\`, \`thit-bacon\`, \`thit-bacon-chien\` chưa có match nội bộ; cần nguồn ngoài hoặc duyệt thủ công trước khi sửa dữ liệu.
`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, markdown, "utf8");
console.log(`Food source crosscheck written: ${path.relative(root, outputPath)}`);
console.log(JSON.stringify({ total: crosscheck.length, foundCount, fitCounts, proposalCounts }, null, 2));
