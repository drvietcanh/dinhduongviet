import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const reportPath = path.join(root, "test-results", "food-data-qa.json");

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function hasVietnameseMarks(value) {
  return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(String(value || ""));
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

function groupBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!key) continue;
    const bucket = map.get(key) || [];
    bucket.push(item);
    map.set(key, bucket);
  }
  return [...map.entries()].filter(([, values]) => values.length > 1);
}

function fullToFood(row) {
  return {
    slug: row[0],
    name: row[1],
    category: row[2],
    kcal: row[3],
    protein: row[4],
    glucid: row[5],
    lipid: row[6],
    fiber: row[7],
    sodium: row[8],
    potassium: row[9],
    tags: row[10],
    gi: row[11],
  };
}

function issue(severity, payload) {
  return { severity, ...payload };
}

function classifyDuplicate(entries) {
  const names = new Set(entries.map((item) => normalize(item.name)));
  const categories = new Set(entries.map((item) => item.category));
  const macros = new Set(entries.map((item) => [item.kcal, item.protein, item.glucid, item.lipid].join("|")));
  if (names.size === 1 && categories.size === 1 && macros.size === 1) {
    return "same_food_keep_one_log_merged";
  }
  if (names.size > 1 || categories.size > 1) {
    return "slug_collision_needs_descriptor";
  }
  return "uncertain_report_only";
}

function duplicateSeverity(action) {
  if (action === "same_food_keep_one_log_merged") return "info";
  if (action === "slug_collision_needs_descriptor") return "error";
  return "warning";
}

function findAliasWarnings(foods, searchFoods) {
  const bySlug = new Map(searchFoods.map((item) => [item.slug, item]));
  const synonymPairs = [
    ["bắp", "ngô"],
    ["heo", "lợn"],
    ["đậu phộng", "lạc"],
    ["gạo lứt", "gạo lật"],
    ["tôm sú", "tom su"],
    ["cà phê", "ca phe"],
  ];

  const warnings = [];
  for (const food of foods) {
    const searchItem = bySlug.get(food.slug) || {};
    const aliases = Array.isArray(searchItem.aliases) ? searchItem.aliases : [];
    const haystack = normalize([food.name, food.slug, ...aliases].join(" "));
    const aliasNorms = new Set(aliases.map(normalize));
    const nameNorm = normalize(food.name);
    const slugNorm = normalize(food.slug.replace(/-/g, " "));

    if (hasVietnameseMarks(food.name) && nameNorm !== slugNorm && !aliasNorms.has(nameNorm)) {
      warnings.push({
        type: "missing_unaccented_alias",
        slug: food.slug,
        name: food.name,
        suggestedAlias: nameNorm,
      });
    }

    for (const [left, right] of synonymPairs) {
      const leftNorm = normalize(left);
      const rightNorm = normalize(right);
      if (haystack.includes(leftNorm) && !haystack.includes(rightNorm)) {
        warnings.push({ type: "missing_synonym_alias", slug: food.slug, name: food.name, present: left, suggestedAlias: right });
      }
      if (haystack.includes(rightNorm) && !haystack.includes(leftNorm)) {
        warnings.push({ type: "missing_synonym_alias", slug: food.slug, name: food.name, present: right, suggestedAlias: left });
      }
    }
  }
  return warnings;
}

const slim = await readJson("public/api/foods-slim.json");
const fullRows = await readJson("public/api/foods-full.json");
const searchIndex = await readJson("public/api/search-index.json");
const fullFoods = fullRows.map(fullToFood);
const searchFoods = searchIndex.filter((item) => item.type === "food");

const duplicateSlugs = groupBy(slim, (item) => item.slug).map(([slug, entries]) => ({
  severity: duplicateSeverity(classifyDuplicate(entries)),
  slug,
  count: entries.length,
  action: classifyDuplicate(entries),
  entries,
}));

const duplicateDisplayNames = groupBy(slim, (item) => normalize(item.name)).map(([key, entries]) => ({
  severity: "info",
  key,
  displayName: entries[0].name,
  count: entries.length,
  entries: entries.map((item) => ({ slug: item.slug, name: item.name, category: item.category, kcal: item.kcal })),
}));

const suspiciousSlugRules = [
  { slug: "ca-pha", reason: "Tên hiển thị là Cà phê đen; slug có vẻ thiếu 'phe'." },
  { slug: "ca-pha-sua-da", reason: "Tên hiển thị là Cà phê sữa đá; slug có vẻ thiếu 'phe'." },
  { slug: "tom-sudo", reason: "Tên hiển thị là Tôm sú; slug có vẻ dính 'do'." },
];

const suspiciousSlugs = [];
const rawCookedAmbiguity = [];
for (const rule of suspiciousSlugRules) {
  const item = slim.find((food) => food.slug === rule.slug);
  if (item) suspiciousSlugs.push(issue("warning", { ...rule, name: item.name, category: item.category, suggestion: "canonical_slug_or_alias_redirect" }));
}
for (const food of fullFoods) {
  const name = String(food.name || "");
  const nameNorm = normalize(name);
  if (nameNorm.startsWith("gao ") && Number(food.kcal) > 0 && Number(food.kcal) < 250) {
    rawCookedAmbiguity.push(issue("warning", {
      slug: food.slug,
      name: food.name,
      reason: "Tên là gạo nhưng năng lượng thấp hơn gạo sống thông thường; cần xác nhận sống/chín trong tên/basis.",
      kcal: food.kcal,
      suggestion: "clarify_raw_or_cooked",
    }));
  }
  if (/^Cơm\s/i.test(name) && !/^Cơm\s+(cháy|dừa)/i.test(name) && Number(food.kcal) > 250) {
    rawCookedAmbiguity.push(issue("warning", {
      slug: food.slug,
      name: food.name,
      reason: "Tên là cơm nhưng năng lượng cao; cần xác nhận sống/chín hoặc khẩu phần.",
      kcal: food.kcal,
      suggestion: "clarify_raw_or_cooked",
    }));
  }
}

const mainFoodCategories = new Set(["Tinh bột", "Rau xanh", "Củ quả", "Trái cây", "Thịt", "Cá", "Hải sản", "Trứng sữa", "Sữa", "Đậu", "Hạt", "Nấm"]);
const missingCoreNutrients = fullFoods
  .filter((food) => mainFoodCategories.has(food.category))
  .filter((food) => [food.kcal, food.protein, food.lipid, food.glucid].some((value) => value === null || value === undefined || value === ""))
  .map((food) => issue("error", { slug: food.slug, name: food.name, category: food.category, kcal: food.kcal, protein: food.protein, lipid: food.lipid, glucid: food.glucid }));

const aliasWarnings = findAliasWarnings(fullFoods, searchFoods).map((warning) => issue("info", warning));

const watchedDuplicates = ["nuoc-dung-ga", "nuoc-dung-nam", "nam-bao-ngu", "nam-linh-chi-nau", "vu-sua", "bo-vien", "bi-dao", "bot-san-day"];
const watchedDuplicateStatus = watchedDuplicates.map((slug) => duplicateSlugs.find((item) => item.slug === slug) || { slug, count: 0, action: "not_found_as_duplicate" });

const sourceNotes = [
  "public/api/foods-slim.json is consumed by scripts/build-search-index.py.",
  "scripts/build-foods-slim.mjs reads dist/api-foods.json and writes public/api/foods-slim.json.",
  "scripts/build-foods-full.py reads dist/api/foods-slim.json and writes public/api/foods-full.json.",
  "src/pages/api-foods.json.ts exports full food data from src/data/nutrition.ts at build time.",
  "No nutrition values or source data were changed by this QA script.",
];

const allIssues = [
  ...duplicateSlugs,
  ...duplicateDisplayNames,
  ...suspiciousSlugs,
  ...rawCookedAmbiguity,
  ...missingCoreNutrients,
  ...aliasWarnings,
];
const issuesBySeverity = allIssues.reduce((totals, item) => {
  totals[item.severity] = (totals[item.severity] || 0) + 1;
  return totals;
}, {});

const report = {
  generatedAt: new Date().toISOString(),
  counts: {
    foodsSlim: slim.length,
    foodsFull: fullFoods.length,
    searchFoods: searchFoods.length,
    duplicateSlugs: duplicateSlugs.length,
    duplicateDisplayNames: duplicateDisplayNames.length,
    suspiciousSlugs: suspiciousSlugs.length,
    rawCookedAmbiguity: rawCookedAmbiguity.length,
    missingCoreNutrients: missingCoreNutrients.length,
    aliasWarnings: aliasWarnings.length,
  },
  issuesBySeverity,
  sourceNotes,
  watchedDuplicateStatus,
  duplicateSlugs,
  duplicateDisplayNames,
  suspiciousSlugs,
  rawCookedAmbiguity,
  missingCoreNutrients,
  aliasWarnings: aliasWarnings.slice(0, 200),
};

await mkdir(path.dirname(reportPath), { recursive: true });
await writeFile(reportPath, JSON.stringify(report, null, 2), "utf8");

console.log("Food data QA report written:", path.relative(root, reportPath));
console.log(JSON.stringify(report.counts, null, 2));
if (duplicateSlugs.length > 0) {
  console.log("Duplicate slugs:", duplicateSlugs.map((item) => `${item.slug}(${item.count})`).join(", "));
}
