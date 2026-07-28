import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputPath = path.join(root, "reports", "food-quality-notes-v1.md");
const decisionSlugs = [
  "com-nep",
  "com-gao-lut-do",
  "com-gao-lut-den",
  "suon-heo-nuong",
  "nem-lui",
  "thit-heo-quay",
  "banh-chung",
  "banh-troi",
  "banh-chay",
  "banh-gio",
  "banh-mi-pate",
  "banh-mi-cha-ca",
  "banh-mi-cha-lua",
  "nem-nuong",
  "lap-xuong-nuong",
  "thit-xong-khoi",
  "thit-bacon",
  "thit-bacon-chien",
  "xuc-xich-duc",
  "xuc-xich-my",
  "xuc-xich-bo",
  "xuc-xich-ga",
  "xuc-xich-heo",
];

function metric(value) {
  if (value === null || value === undefined || value === "") return "-";
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function countBy(items, key) {
  return items.reduce((totals, item) => {
    const value = item[key] || "missing";
    totals[value] = (totals[value] || 0) + 1;
    return totals;
  }, {});
}

function formatCounts(counts) {
  return Object.entries(counts).map(([key, count]) => `- ${key}: ${count}`).join("\n");
}

function row(food) {
  return [
    food.slug,
    food.name,
    food.nutrients?.energyKcal,
    food.sourceId || food.source,
    food.confidence,
    food.dataQuality,
    food.sourceReviewStatus,
    food.needsExternalSource === true ? "yes" : "",
    food.needsDietitianReview === true ? "yes" : "",
    food.basisNote,
    food.reviewNote,
    food.candidateSource,
  ].map(metric);
}

function table(items) {
  const header = [
    "slug",
    "name",
    "kcal",
    "source",
    "confidence",
    "dataQuality",
    "sourceReviewStatus",
    "needsExternalSource",
    "needsDietitianReview",
    "basisNote",
    "reviewNote",
    "candidateSource",
  ];
  return [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...items.map((item) => `| ${row(item).join(" | ")} |`),
  ].join("\n");
}

const [foods, qaReport] = await Promise.all([
  readFile(path.join(root, "dist", "api-foods.json"), "utf8").then(JSON.parse),
  readFile(path.join(root, "test-results", "food-data-qa.json"), "utf8").then(JSON.parse),
]);

const bySlug = new Map(foods.map((food) => [food.slug, food]));
const items = decisionSlugs.map((slug) => bySlug.get(slug)).filter(Boolean);
const missingMetadata = items.filter((food) => !food.dataQuality || !food.sourceReviewStatus || !food.reviewNote);
const externalSource = items.filter((food) => food.needsExternalSource === true);
const dietitianReview = items.filter((food) => food.needsDietitianReview === true);
const needsBetterSource = items.filter((food) => food.sourceReviewStatus === "needs_better_source");
const sourceBackedPendingReview = items.filter((food) => food.dataQuality === "source_backed" && food.needsDietitianReview === true);
const dataQualityCounts = countBy(items, "dataQuality");
const sourceReviewStatusCounts = countBy(items, "sourceReviewStatus");

const markdown = `# Food Quality Notes v1

Generated from \`dist/api-foods.json\` and \`test-results/food-data-qa.json\`.

This report summarizes current food quality metadata and the remaining review backlog.

## Tóm Tắt

- Decision table items checked: ${items.length}/${decisionSlugs.length}.
- Items with review metadata: ${items.length - missingMetadata.length}.
- Items still missing required review metadata: ${missingMetadata.length}.
- Items requiring external source: ${externalSource.length}.
- Items marked needs_better_source: ${needsBetterSource.length}.
- Source-backed items still pending dietitian review: ${sourceBackedPendingReview.length}.
- Items requiring dietitian review: ${dietitianReview.length}.

Data quality counts:

${formatCounts(dataQualityCounts)}

Source review status counts:

${formatCounts(sourceReviewStatusCounts)}

QA food-data counters:

- dataQuality: ${qaReport.counts?.dataQuality ?? "-"}
- sourceReviewStatus: ${qaReport.counts?.sourceReviewStatus ?? "-"}
- needsExternalSource: ${qaReport.counts?.needsExternalSource ?? "-"}
- needsDietitianReview: ${qaReport.counts?.needsDietitianReview ?? "-"}
- cookedHighEnergyWithoutReviewMetadata: ${qaReport.counts?.cookedHighEnergyWithoutReviewMetadata ?? "-"}
- decisionTableMissingMetadata: ${qaReport.counts?.decisionTableMissingMetadata ?? "-"}

## Cần Nguồn Ngoài

${externalSource.length > 0 ? externalSource.map((food) => `- \`${food.slug}\`: ${food.name}`).join("\n") : "- Không còn mục nào gắn `needsExternalSource`."}

## Cần Nguồn Tốt Hơn

${needsBetterSource.length > 0 ? needsBetterSource.map((food) => `- \`${food.slug}\`: ${food.name} - ${food.reviewNote}`).join("\n") : "- Không còn mục nào gắn `needs_better_source`."}

## Đã Có Nguồn, Chờ Duyệt

${sourceBackedPendingReview.length > 0 ? sourceBackedPendingReview.map((food) => `- \`${food.slug}\`: ${food.name} - ${food.candidateSource}`).join("\n") : "- Không có mục source-backed nào đang chờ duyệt."}

## Chờ Dietitian Review

${dietitianReview.map((food) => `- \`${food.slug}\`: ${food.name} (${food.sourceReviewStatus})`).join("\n")}

## Ưu Tiên Tiếp Theo

1. Tìm nguồn nấu chín đáng tin cậy cho \`com-nep\`, \`com-gao-lut-do\`, \`com-gao-lut-den\`; chỉ thay số liệu khi nguồn mô tả rõ cooked/prepared basis.
2. Với nhóm xúc xích, dùng nguồn riêng theo loại thịt hoặc giữ \`candidate_pending_dietitian_review\` vì VN 2007 chỉ có mục xúc xích chung.
3. Với \`thit-heo-quay\`, cần công thức chuẩn hoặc nguồn phân tích món quay; không nên tự thay bằng thịt heo sống/nạc/mỡ riêng lẻ.

## Toàn Bộ Metadata

${table(items)}
`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, markdown, "utf8");
console.log(`Food quality notes report written: ${path.relative(root, outputPath)}`);
console.log(JSON.stringify({
  total: items.length,
  missingMetadata: missingMetadata.length,
  externalSource: externalSource.length,
  dietitianReview: dietitianReview.length,
  dataQualityCounts,
  sourceReviewStatusCounts,
}, null, 2));
