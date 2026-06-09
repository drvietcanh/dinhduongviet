import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const reportJsonPath = path.join(root, "test-results", "food-data-qa.json");
const foodsJsonPath = path.join(root, "dist", "api-foods.json");
const outputPath = path.join(root, "reports", "food-source-review-v1.md");
const dataDir = path.join(root, "src", "data");

function value(value) {
  if (value === null || value === undefined || value === "") return "-";
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function aliases(food) {
  return Array.isArray(food.aliases) && food.aliases.length > 0 ? food.aliases.join("; ") : "-";
}

function sourceId(food) {
  return food.sourceId || food.source || "-";
}

function macros(food) {
  const n = food.nutrients || {};
  return {
    kcal: n.energyKcal,
    protein: n.proteinG,
    lipid: n.fatG,
    glucid: n.carbG,
  };
}

function needsBasisReview(food) {
  const text = `${food.name || ""} ${food.basis || ""} ${food.edibleNote || ""} ${food.note || ""}`.toLowerCase();
  if (food.state === "cooked" && !/(cơm|nấu|luộc|nướng|hấp|chiên|xào|chín|cooked)/i.test(text)) return true;
  if (/gạo/i.test(food.name || "") && !/(cơm|khô|chưa nấu|nấu chín)/i.test(text)) return true;
  return false;
}

function recommendation(food) {
  const n = macros(food);
  const lowConfidenceEstimate = sourceId(food) === "recipe-estimate-v1" && food.confidence === "low";
  if (food.state === "cooked" && Number(n.kcal) > 300 && lowConfidenceEstimate) return "possible_value_issue_do_not_change_yet";
  if (needsBasisReview(food)) return "rename_or_add_basis";
  if (lowConfidenceEstimate) return "needs_source_review";
  return "accept_current";
}

function comment(food) {
  const n = macros(food);
  const notes = [];
  if (food.state === "cooked" && Number(n.kcal) > 180) notes.push("kcal >180 ở item cooked, cần rà basis/nước/khẩu phần");
  if (sourceId(food) === "recipe-estimate-v1" && food.confidence === "low") notes.push("recipe-estimate-v1 + confidence low");
  if (needsBasisReview(food)) notes.push("tên/basis có thể gây hiểu nhầm sống-chín");
  return notes.length > 0 ? notes.join("; ") : "chưa thấy cảnh báo tự động";
}

async function listTsFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await listTsFiles(fullPath));
    if (entry.isFile() && entry.name.endsWith(".ts")) files.push(fullPath);
  }
  return files;
}

async function sourceLocator() {
  const files = (await listTsFiles(dataDir)).filter((file) => {
    const name = path.basename(file);
    return name === "nutrition.ts" || name === "bulk-catalog.ts" || name.startsWith("foods-extra");
  });
  const texts = await Promise.all(files.map(async (file) => ({
    file,
    relative: path.relative(root, file).replace(/\\/g, "/"),
    text: await readFile(file, "utf8"),
  })));

  return (food) => {
    const probes = [food.slug, food.id, food.name].filter(Boolean);
    const found = texts
      .filter(({ text }) => probes.some((probe) => text.includes(probe)))
      .map(({ relative }) => relative);
    return found.length > 0 ? [...new Set(found)].join("; ") : "not_found_generated_or_indirect";
  };
}

function table(rows) {
  const header = [
    "id", "slug", "name", "aliases", "state", "basis", "kcal/100g", "protein/100g",
    "lipid/100g", "glucid/100g", "source", "confidence", "note", "file source", "đề xuất"
  ];
  const lines = [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
  ];
  for (const row of rows) {
    const n = macros(row.food);
    lines.push(`| ${[
      row.food.id,
      row.food.slug,
      row.food.name,
      aliases(row.food),
      row.food.state,
      row.food.basis,
      n.kcal,
      n.protein,
      n.lipid,
      n.glucid,
      sourceId(row.food),
      row.food.confidence,
      row.food.note,
      row.sourceFile,
      row.recommendation,
    ].map(value).join(" | ")} |`);
  }
  return lines.join("\n");
}

const [qaReport, foods] = await Promise.all([
  readFile(reportJsonPath, "utf8").then(JSON.parse),
  readFile(foodsJsonPath, "utf8").then(JSON.parse),
]);
const bySlug = new Map(foods.map((food) => [food.slug, food]));
const locateSource = await sourceLocator();

function enrich(items) {
  return items.map((item) => {
    const food = bySlug.get(item.slug);
    if (!food) throw new Error(`Food not found in dist/api-foods.json: ${item.slug}`);
    return {
      food,
      sourceFile: locateSource(food),
      recommendation: recommendation(food),
      comment: comment(food),
    };
  });
}

const riceRows = enrich(qaReport.riceSourceReview || []);
const cookedRows = enrich(qaReport.cookedHighEnergyReview || []);
const actionCounts = [...riceRows, ...cookedRows].reduce((counts, row) => {
  counts[row.recommendation] = (counts[row.recommendation] || 0) + 1;
  return counts;
}, {});

const markdown = `# Food Source Review v1

Generated from \`test-results/food-data-qa.json\` and \`dist/api-foods.json\`.

## Tóm tắt

- Rice source review: ${riceRows.length} item.
- Cooked high energy review: ${cookedRows.length} item.
- Không sửa số liệu dinh dưỡng trong report này.
- Action counts: ${Object.entries(actionCounts).map(([key, count]) => `${key}: ${count}`).join(", ")}.

## Nhận xét Tự Động

- \`kcal >180\` ở món \`state: cooked\` cần rà lại basis, lượng nước sau nấu, và định nghĩa 100g phần ăn được.
- \`source: recipe-estimate-v1\` kèm \`confidence: low\` cần ưu tiên đối chiếu nguồn chuẩn hơn trước khi chỉnh số liệu.
- Tên có thể gây hiểu nhầm sống/chín cần đổi tên hoặc bổ sung basis/note trước khi dùng làm canonical.
- Các đề xuất trong report này là nhãn rà soát, không phải thay đổi dữ liệu dinh dưỡng.

## 3 Mục Cơm/Gạo Cần Rà Nguồn

${table(riceRows)}

## 23 Mục Cooked High Energy

${table(cookedRows)}

## Ghi Chú Theo Item

| slug | nhận xét tự động |
| --- | --- |
${[...riceRows, ...cookedRows].map((row) => `| ${value(row.food.slug)} | ${value(row.comment)} |`).join("\n")}

## Ưu Tiên Duyệt

1. Các item \`possible_value_issue_do_not_change_yet\`: năng lượng cao, source ước tính, cần bác sĩ/dinh dưỡng viên duyệt trước khi sửa.
2. Các item cơm/gạo trong \`riceSourceReview\`: cần xác nhận nguồn 100g cơm chín tương ứng, đặc biệt \`com-gao-lut-do\` và \`com-gao-lut-den\`.
3. Các item \`needs_source_review\`: giữ nguyên hiện tại nhưng cần nguồn chuẩn trước khi nâng confidence.
`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, markdown, "utf8");
console.log(`Food source review written: ${path.relative(root, outputPath)}`);
