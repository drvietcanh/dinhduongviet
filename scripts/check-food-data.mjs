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

function hasPhrase(haystack, phrase) {
  const normalizedHaystack = ` ${normalize(haystack)} `;
  const normalizedPhrase = normalize(phrase).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(` ${normalizedPhrase} `).test(normalizedHaystack);
}

function normalizeWithMarks(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function hasPhraseWithMarks(haystack, phrase) {
  const normalizedHaystack = ` ${normalizeWithMarks(haystack)} `;
  const normalizedPhrase = normalizeWithMarks(phrase).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(` ${normalizedPhrase} `, "u").test(normalizedHaystack);
}

function nameTokens(value) {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length >= 2);
}

function tokenOverlapRatio(left, right) {
  const leftTokens = new Set(nameTokens(left));
  const rightTokens = new Set(nameTokens(right));
  if (leftTokens.size === 0 || rightTokens.size === 0) return 0;
  const overlap = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  return overlap / Math.min(leftTokens.size, rightTokens.size);
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

async function readCompatAliases() {
  const source = await readFile(path.join(root, "src/lib/food-slug-aliases.ts"), "utf8");
  return [...source.matchAll(/"([^"]+)":\s*"([^"]+)"/g)].map((match) => ({
    from: match[1],
    to: match[2],
  }));
}

async function readVnMicronutrientOverrideSlugs() {
  const source = await readFile(path.join(root, "src/data/food-vn-micronutrient-overrides.ts"), "utf8");
  return new Set([...source.matchAll(/^\s+"([^"]+)":/gm)].map((match) => match[1]));
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
  const ignoredRegionalNameSlugs = new Set(["banh-da-lon"]);
  const synonymPairs = [
    { left: "heo", right: "lợn", group: "regional-name" },
    { left: "đậu phộng", right: "lạc", group: "regional-name" },
    { left: "gạo lứt", right: "gạo lật", group: "regional-name" },
    { left: "nước dùng", right: "nước hầm", group: "missing-common-alias" },
    { left: "phô mai", right: "pho mai", group: "diacritic" },
    { left: "tôm sú", right: "tom su", group: "spelling" },
    { left: "cà phê", right: "ca phe", group: "spelling" },
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
        type: "diacritic",
        subtype: "missing_unaccented_alias",
        slug: food.slug,
        name: food.name,
        suggestedAlias: nameNorm,
      });
    }

    for (const { left, right, group } of synonymPairs) {
      if (group === "regional-name" && ignoredRegionalNameSlugs.has(food.slug)) continue;
      const phraseMatcher = group === "regional-name" || group === "missing-common-alias"
        ? hasPhraseWithMarks
        : hasPhrase;
      const phraseHaystack = phraseMatcher === hasPhraseWithMarks
        ? [food.name, food.slug.replace(/-/g, " "), ...aliases].join(" ")
        : haystack;

      if (phraseMatcher(phraseHaystack, left) && !phraseMatcher(phraseHaystack, right)) {
        warnings.push({ type: group, subtype: "missing_common_alias", slug: food.slug, name: food.name, present: left, suggestedAlias: right });
      }
      if (phraseMatcher(phraseHaystack, right) && !phraseMatcher(phraseHaystack, left)) {
        warnings.push({ type: group, subtype: "missing_common_alias", slug: food.slug, name: food.name, present: right, suggestedAlias: left });
      }
    }
  }
  return warnings;
}

function isRawCookedClear(sourceFood) {
  if (!sourceFood) return false;
  const text = normalize([sourceFood.name, sourceFood.slug, sourceFood.state, sourceFood.basis, sourceFood.edibleNote, sourceFood.note].join(" "));
  const hasState = sourceFood.state === "raw" || sourceFood.state === "cooked";
  const hasRawDescriptor = hasPhrase(text, "khô") || hasPhrase(text, "chưa nấu") || hasPhrase(text, "hạt khô") || hasPhrase(text, "raw");
  const hasCookedDescriptor = hasPhrase(text, "cơm") || hasPhrase(text, "đã nấu") || hasPhrase(text, "nấu chín") || hasPhrase(text, "cooked");
  return hasState && (hasRawDescriptor || hasCookedDescriptor);
}

const slim = await readJson("public/api/foods-slim.json");
const fullRows = await readJson("public/api/foods-full.json");
const searchIndex = await readJson("public/api/search-index.json");
const sourceFoods = await readJson("dist/api-foods.json");
const vnCrossref = await readJson("public/api/vn-crossref.json");
const compatAliases = await readCompatAliases();
const vnMicronutrientOverrideSlugs = await readVnMicronutrientOverrideSlugs();
const fullFoods = fullRows.map(fullToFood);
const searchFoods = searchIndex.filter((item) => item.type === "food");
const sourceBySlug = new Map(sourceFoods.map((item) => [item.slug, item]));
const slimBySlug = new Map(slim.map((item) => [item.slug, item]));
const compatAliasTargets = new Map(compatAliases.map(({ from, to }) => [from, to]));
const decisionTableSlugs = [
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
  const sourceFood = sourceBySlug.get(food.slug);
  if (nameNorm.startsWith("gao ") && Number(food.kcal) > 0 && Number(food.kcal) < 250 && !isRawCookedClear(sourceFood)) {
    rawCookedAmbiguity.push(issue("warning", {
      slug: food.slug,
      name: food.name,
      reason: "Tên là gạo nhưng năng lượng thấp hơn gạo sống thông thường; cần xác nhận sống/chín trong tên/basis.",
      kcal: food.kcal,
      state: sourceFood?.state,
      basis: sourceFood?.basis,
      suggestion: "clarify_raw_or_cooked",
    }));
  }
  if (/^Cơm\s/i.test(name) && !/^Cơm\s+(cháy|dừa)/i.test(name) && Number(food.kcal) > 250 && !isRawCookedClear(sourceFood)) {
    rawCookedAmbiguity.push(issue("warning", {
      slug: food.slug,
      name: food.name,
      reason: "Tên là cơm nhưng năng lượng cao; cần xác nhận sống/chín hoặc khẩu phần.",
      kcal: food.kcal,
      state: sourceFood?.state,
      basis: sourceFood?.basis,
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
const aliasWarningsByType = aliasWarnings.reduce((totals, item) => {
  totals[item.type] = (totals[item.type] || 0) + 1;
  return totals;
}, {});
const compatAliasStatus = compatAliases.map(({ from, to }) => issue("info", {
  from,
  to,
  sourceExists: slimBySlug.has(from),
  targetExists: slimBySlug.has(to),
  action: "static_route_redirect_to_canonical",
}));
const cookedHighEnergyReview = sourceFoods
  .filter((food) => food.state === "cooked" && Number(food.nutrients?.energyKcal) > 180)
  .map((food) => issue("info", {
    slug: food.slug,
    name: food.name,
    kcal: food.nutrients.energyKcal,
    basis: food.basis,
    source: food.sourceId || food.source,
    confidence: food.confidence,
    suggestion: "review_cooked_basis_or_source",
  }));
const riceSourceReview = ["com-nep", "com-gao-lut-do", "com-gao-lut-den"]
  .map((slug) => sourceBySlug.get(slug))
  .filter(Boolean)
  .map((food) => issue("info", {
    slug: food.slug,
    id: food.id,
    name: food.name,
    state: food.state,
    basis: food.basis,
    kcal: food.nutrients?.energyKcal,
    protein: food.nutrients?.proteinG,
    lipid: food.nutrients?.fatG,
    glucid: food.nutrients?.carbG,
    source: food.sourceId || food.source,
    confidence: food.confidence,
    note: food.note,
    suggestion: food.sourceId === "recipe-estimate-v1" || food.source === "recipe-estimate-v1" ? "needs_source_review" : "source_present",
  }));
const foodsWithDataQuality = sourceFoods.filter((food) => Boolean(food.dataQuality));
const foodsWithSourceReviewStatus = sourceFoods.filter((food) => Boolean(food.sourceReviewStatus));
const foodsNeedingExternalSource = sourceFoods.filter((food) => food.needsExternalSource === true);
const foodsNeedingDietitianReview = sourceFoods.filter((food) => food.needsDietitianReview === true);
const sourceReviewStatusCounts = foodsWithSourceReviewStatus.reduce((totals, food) => {
  totals[food.sourceReviewStatus] = (totals[food.sourceReviewStatus] || 0) + 1;
  return totals;
}, {});
const dataQualityCounts = foodsWithDataQuality.reduce((totals, food) => {
  totals[food.dataQuality] = (totals[food.dataQuality] || 0) + 1;
  return totals;
}, {});
const decisionTableMissingMetadata = decisionTableSlugs
  .map((slug) => sourceBySlug.get(slug))
  .filter((food) => !food || !food.sourceReviewStatus || !food.dataQuality || !food.reviewNote)
  .map((food) => issue("info", {
    slug: food?.slug || "missing-food",
    name: food?.name || "-",
    reason: "Decision table item is missing dataQuality/sourceReviewStatus/reviewNote metadata.",
  }));
const cookedHighEnergyWithoutReviewMetadata = cookedHighEnergyReview
  .filter((item) => {
    const food = sourceBySlug.get(item.slug);
    return !food?.sourceReviewStatus || !food?.reviewNote;
  })
  .map((item) => issue("info", {
    slug: item.slug,
    name: item.name,
    reason: "Cooked high energy item has no source review metadata yet.",
  }));

const intentionallySkippedVnMicronutrientCandidates = [
  {
    slug: "bo-trai",
    name: "Bơ",
    matchedVnName: "Bơ",
    reason: "Nguồn match có cholesterol/B12 như bơ sữa, không đủ chắc cho quả bơ.",
  },
  {
    slug: "ca-moi",
    name: "Cá mòi",
    matchedVnName: "Cá mối",
    reason: "Khác loài/tên; không dùng dữ liệu cá mối cho cá mòi.",
  },
  {
    slug: "tuong-ot",
    name: "Tương ớt",
    matchedVnName: "Tương ớt",
    reason: "Giá trị natri nguồn không phù hợp kỳ vọng gia vị mặn; cần nguồn nhãn hàng hoặc xác minh lại.",
  },
  {
    slug: "la-lot",
    name: "Lá lốt",
    matchedVnName: "Lá lốt",
    reason: "Phosphorus 980 mg/100g bất thường với rau lá; cần xác minh nguồn trước khi nhập.",
  },
  {
    slug: "luu",
    name: "Lựu",
    matchedVnName: "Lùu",
    reason: "Tên nguồn có lỗi chính tả/mapping nhập nhằng; giữ lại chờ xác minh.",
  },
  {
    slug: "gan-bo",
    name: "Gân bò",
    matchedVnName: "Gan bò",
    reason: "Khác bộ phận; không dùng dữ liệu gan bò cho gân bò.",
  },
  {
    slug: "mut-dua",
    name: "Mứt dừa",
    matchedVnName: "Mứt dứa",
    reason: "Khác thực phẩm; không dùng dữ liệu mứt dứa cho mứt dừa.",
  },
].map((item) => issue("info", {
  ...item,
  action: vnMicronutrientOverrideSlugs.has(item.slug) ? "review_existing_override" : "skip_until_verified",
}));

const allowedVnCrossrefTransformSlugs = new Set([
  "com-trang",
  "com-gao-lut",
  "com-nep",
  "gao-te",
  "gao-lut",
  "bot-gao",
  "bot-mi",
  "bot-nghe",
  "mi-goi",
  "lap-xuong",
  "thit-ga-ta",
  "thit-lon-nac",
  "xi-dau",
]);

function findVnCrossrefSuspiciousEntries(crossref) {
  const entries = Object.entries(crossref || {});
  const warnings = [];
  for (const [slug, match] of entries) {
    const food = slimBySlug.get(slug) || sourceBySlug.get(slug);
    const appName = food?.name || slug.replace(/-/g, " ");
    const matchedName = match?.name || "";
    const normalizedAppName = normalize(appName);
    const normalizedMatchedName = normalize(matchedName);
    const markedAppName = normalizeWithMarks(appName);
    const markedMatchedName = normalizeWithMarks(matchedName);
    const overlap = tokenOverlapRatio(appName, matchedName);

    if (!food && compatAliasTargets.has(slug)) {
      warnings.push(issue("warning", {
        type: "vn_crossref",
        subtype: "noncanonical_alias_slug_key",
        slug,
        canonicalSlug: compatAliasTargets.get(slug),
        matchedCode: match?.code,
        matchedName,
        suggestion: "move_crossref_mapping_to_canonical_slug",
      }));
      continue;
    }

    if (!matchedName || /^\d+$/.test(String(matchedName).trim())) {
      warnings.push(issue("warning", {
        type: "vn_crossref",
        subtype: "missing_or_numeric_name",
        slug,
        name: appName,
        matchedCode: match?.code,
        matchedName,
        suggestion: "verify_vietnam_fct_mapping_before_reuse",
      }));
      continue;
    }

    if (allowedVnCrossrefTransformSlugs.has(slug)) continue;

    if (normalizedAppName === normalizedMatchedName && markedAppName !== markedMatchedName) {
      warnings.push(issue("warning", {
        type: "vn_crossref",
        subtype: "diacritic_near_miss",
        slug,
        name: appName,
        matchedCode: match?.code,
        matchedName,
        suggestion: "verify_name_with_tones_marks_species_or_food_part",
      }));
      continue;
    }

    if (overlap < 0.5) {
      warnings.push(issue("info", {
        type: "vn_crossref",
        subtype: "low_name_token_overlap",
        slug,
        name: appName,
        matchedCode: match?.code,
        matchedName,
        tokenOverlapRatio: Number(overlap.toFixed(2)),
        suggestion: "manual_review_before_importing_micronutrients",
      }));
    }
  }
  return warnings;
}

const vnCrossrefEntries = Object.entries(vnCrossref || {});
const vnCrossrefSuspicious = findVnCrossrefSuspiciousEntries(vnCrossref);

const watchedDuplicates = ["nuoc-dung-ga", "nuoc-dung-nam", "nam-bao-ngu", "nam-linh-chi-nau", "vu-sua", "bo-vien", "bi-dao", "bot-san-day"];
const watchedDuplicateStatus = watchedDuplicates.map((slug) => duplicateSlugs.find((item) => item.slug === slug) || { slug, count: 0, action: "not_found_as_duplicate" });

const sourceNotes = [
  "public/api/foods-slim.json is consumed by scripts/build-search-index.py.",
  "scripts/build-foods-slim.mjs reads dist/api-foods.json and writes public/api/foods-slim.json.",
  "scripts/build-foods-full.py reads dist/api-foods.json and writes public/api/foods-full.json.",
  "scripts/build-data-all.mjs runs an Astro build before food API generation, then runs a final Astro build to copy regenerated public API files into dist.",
  "src/pages/api-foods.json.ts exports full food data from src/data/nutrition.ts at build time.",
  "No nutrition values or source data were changed by this QA script.",
  "Vietnam micronutrient overlays are intentionally conservative; skipped candidates must be verified before import.",
  "public/api/vn-crossref.json is used as an auxiliary Vietnam FCT mapping; suspicious crossrefs are reported but do not fail QA because some cooked/raw or generic-source transforms are intentional.",
];

const allIssues = [
  ...duplicateSlugs,
  ...duplicateDisplayNames,
  ...suspiciousSlugs,
  ...rawCookedAmbiguity,
  ...missingCoreNutrients,
  ...aliasWarnings,
  ...compatAliasStatus,
  ...cookedHighEnergyReview,
  ...riceSourceReview,
  ...decisionTableMissingMetadata,
  ...cookedHighEnergyWithoutReviewMetadata,
  ...intentionallySkippedVnMicronutrientCandidates,
  ...vnCrossrefSuspicious,
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
    compatAliases: compatAliasStatus.length,
    cookedHighEnergyReview: cookedHighEnergyReview.length,
    riceSourceReview: riceSourceReview.length,
    dataQuality: foodsWithDataQuality.length,
    sourceReviewStatus: foodsWithSourceReviewStatus.length,
    needsExternalSource: foodsNeedingExternalSource.length,
    needsDietitianReview: foodsNeedingDietitianReview.length,
    cookedHighEnergyWithoutReviewMetadata: cookedHighEnergyWithoutReviewMetadata.length,
    decisionTableMissingMetadata: decisionTableMissingMetadata.length,
    vnMicronutrientOverrides: vnMicronutrientOverrideSlugs.size,
    intentionallySkippedVnMicronutrientCandidates: intentionallySkippedVnMicronutrientCandidates.length,
    vnCrossrefMappings: vnCrossrefEntries.length,
    vnCrossrefSuspicious: vnCrossrefSuspicious.length,
  },
  dataQualityCounts,
  sourceReviewStatusCounts,
  aliasWarningsByType,
  issuesBySeverity,
  sourceNotes,
  watchedDuplicateStatus,
  compatAliasStatus,
  duplicateSlugs,
  duplicateDisplayNames,
  suspiciousSlugs,
  rawCookedAmbiguity,
  cookedHighEnergyReview,
  riceSourceReview,
  foodQualityMetadata: foodsWithSourceReviewStatus.map((food) => ({
    severity: "info",
    slug: food.slug,
    name: food.name,
    dataQuality: food.dataQuality,
    sourceReviewStatus: food.sourceReviewStatus,
    needsExternalSource: food.needsExternalSource === true,
    needsDietitianReview: food.needsDietitianReview === true,
    hasBasisNote: Boolean(food.basisNote),
    hasReviewNote: Boolean(food.reviewNote),
    candidateSource: food.candidateSource,
  })),
  decisionTableMissingMetadata,
  cookedHighEnergyWithoutReviewMetadata,
  intentionallySkippedVnMicronutrientCandidates,
  vnCrossrefSuspicious: vnCrossrefSuspicious.slice(0, 200),
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
