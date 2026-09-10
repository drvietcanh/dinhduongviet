import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];

function walk(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, predicate));
    else if (predicate(full)) out.push(full);
  }
  return out;
}

function fail(message) {
  failures.push(message);
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function checkBrandConsistency() {
  const allowedExtensions = new Set([
    ".astro",
    ".css",
    ".js",
    ".json",
    ".md",
    ".mjs",
    ".py",
    ".svg",
    ".ts",
  ]);
  const ignoredDirs = new Set([".git", "dist", "node_modules"]);
  const forbiddenBrandPhrases = [
    ["Dinh", "Dưỡng", "Việt"].join(" "),
    ["Dinh", "Duong", "Viet"].join(" "),
  ];
  const files = [];

  function collect(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) collect(full);
      else if (allowedExtensions.has(path.extname(entry.name))) files.push(full);
    }
  }

  collect(root);

  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const phrase of forbiddenBrandPhrases) {
      if (text.includes(phrase)) {
        fail(`Outdated brand spelling "${phrase}" found in ${path.relative(root, file)}`);
      }
    }
  }
}

function checkDuplicateDataKeys() {
  const dataDir = path.join(root, "src", "data");
  const files = walk(dataDir, (file) => file.endsWith(".ts"));
  for (const field of ["id", "slug"]) {
    const values = new Map();
    const pattern = new RegExp(`\\b${field}\\s*:\\s*"([^"]+)"`, "g");
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const match of text.matchAll(pattern)) {
        const value = match[1];
        if (!values.has(value)) values.set(value, []);
        values.get(value).push(path.relative(root, file));
      }
    }
    for (const [value, locations] of values.entries()) {
      if (locations.length > 1) {
        fail(`Duplicate ${field} "${value}" in ${locations.join(", ")}`);
      }
    }
  }
}

function checkPlaceholders() {
  const srcFiles = walk(path.join(root, "src"), (file) => /\.(astro|ts|js|mjs)$/.test(file));
  const distFiles = walk(path.join(root, "dist"), (file) => /\.(html|js)$/.test(file));
  const srcBadPatterns = [
    /JSON\.parse\('\{[A-Za-z0-9_]+}'\)/,
    /style="width:\s*\{size}[^"]*height:\s*\{size}/,
    /style="background:\s*\{s\.color}/,
    /style="width:\s*\{bar\.pct}%[^"]*background:\s*\{bar\.color}/,
  ];
  const distBadPatterns = [
    /JSON\.parse\('\{[A-Za-z0-9_]+}'\)/,
    /\{size}/,
    /\{s\.color}/,
    /\{bar\.(pct|color)/,
  ];
  for (const file of srcFiles) {
    const text = fs.readFileSync(file, "utf8");
    if (/\bMVP\b|Ước tính MVP|ước tính MVP/.test(text)) {
      fail(`Public-facing/internal MVP wording should be replaced with reader-friendly estimate language in ${path.relative(root, file)}`);
    }
    for (const pattern of srcBadPatterns) {
      if (pattern.test(text)) {
        fail(`Source placeholder matched ${pattern} in ${path.relative(root, file)}`);
      }
    }
  }
  for (const file of distFiles) {
    const text = fs.readFileSync(file, "utf8");
    if (/\bMVP\b|Ước tính MVP|ước tính MVP/.test(text)) {
      fail(`Rendered page still contains MVP wording in ${path.relative(root, file)}`);
    }
    for (const pattern of distBadPatterns) {
      if (pattern.test(text)) {
        fail(`Rendered placeholder matched ${pattern} in ${path.relative(root, file)}`);
      }
    }
  }
}

function checkInternalLinks() {
  const distDir = path.join(root, "dist");
  if (!fs.existsSync(distDir)) {
    fail("dist/ is missing. Run npm run build before npm run qa.");
    return;
  }
  const htmlFiles = walk(distDir, (file) => file.endsWith(".html"));
  const hrefPattern = /href="(\/[^"#?]+)(?:[#?][^"]*)?"/g;
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    for (const match of html.matchAll(hrefPattern)) {
      const href = match[1];
      if (/^\/(api-foods|api-recipes)\.json$/.test(href)) continue;
      if (/[\$'"+{}]/.test(href)) continue;
      const relative = href.replace(/^\/+/, "");
      const target = path.extname(relative)
        ? path.join(distDir, relative)
        : path.join(distDir, relative, "index.html");
      if (!fs.existsSync(target)) {
        fail(`Broken internal link ${href} from ${path.relative(distDir, file)}`);
      }
    }
  }
}

function compareSearchSlugs(label, expectedItems, actualItems) {
  const expected = new Set(expectedItems.map((item) => item.slug));
  const actual = new Set(actualItems.map((item) => item.slug));
  const missing = [...expected].filter((slug) => !actual.has(slug));
  const extra = [...actual].filter((slug) => !expected.has(slug));

  if (missing.length > 0) {
    fail(`Search index is missing ${missing.length} ${label} slugs: ${missing.slice(0, 12).join(", ")}`);
  }
  if (extra.length > 0) {
    fail(`Search index has ${extra.length} stale ${label} slugs: ${extra.slice(0, 12).join(", ")}`);
  }
}

function checkDuplicateSlugs(label, items) {
  const counts = new Map();
  for (const item of items) {
    counts.set(item.slug, (counts.get(item.slug) || 0) + 1);
  }
  const duplicates = [...counts.entries()].filter(([, count]) => count > 1).map(([slug]) => slug);
  if (duplicates.length > 0) {
    fail(`${label} API has duplicate slugs: ${duplicates.slice(0, 12).join(", ")}`);
  }
}

function checkSearchIndexCoverage() {
  const requiredFiles = [
    "dist/api-foods.json",
    "dist/api-recipes.json",
    "public/api/search-index.json",
  ];

  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(root, file))) {
      fail(`${file} is missing. Run npm run build before npm run qa.`);
      return;
    }
  }

  const foods = readJson("dist/api-foods.json");
  const recipes = readJson("dist/api-recipes.json");
  const searchIndex = readJson("public/api/search-index.json");
  const searchKeyCounts = new Map();

  checkDuplicateSlugs("Food", foods);
  checkDuplicateSlugs("Recipe", recipes);

  for (const item of searchIndex) {
    const key = `${item.type}:${item.slug}`;
    searchKeyCounts.set(key, (searchKeyCounts.get(key) || 0) + 1);
  }

  const duplicateKeys = [...searchKeyCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([key]) => key);
  if (duplicateKeys.length > 0) {
    fail(`Search index has duplicate entries: ${duplicateKeys.slice(0, 12).join(", ")}`);
  }

  const missingDescriptions = searchIndex
    .filter((item) => !String(item.description || "").trim())
    .map((item) => `${item.type}:${item.slug}`);
  if (missingDescriptions.length > 0) {
    fail(`Search index items missing descriptions: ${missingDescriptions.slice(0, 12).join(", ")}`);
  }

  compareSearchSlugs("food", foods, searchIndex.filter((item) => item.type === "food"));
  compareSearchSlugs("recipe", recipes, searchIndex.filter((item) => item.type === "recipe"));
}

function checkSitemapFoodAliases() {
  const sitemapPath = path.join(root, "dist", "sitemap-0.xml");
  const aliasesPath = path.join(root, "src", "lib", "food-slug-aliases.ts");
  if (!fs.existsSync(sitemapPath) || !fs.existsSync(aliasesPath)) return;

  const aliasesText = fs.readFileSync(aliasesPath, "utf8");
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const aliases = [...aliasesText.matchAll(/\["([^"]+)",\s*"([^"]+)"\]/g)].map((match) => ({
    from: match[1],
    to: match[2],
  }));

  const leakedAliases = aliases
    .filter(({ from }) => sitemap.includes(`/thuc-pham/${from}/`))
    .map(({ from }) => from);
  if (leakedAliases.length > 0) {
    fail(`Food alias URLs should not be in sitemap: ${leakedAliases.join(", ")}`);
  }

  const missingCanonicals = aliases
    .filter(({ to }) => !sitemap.includes(`/thuc-pham/${to}/`))
    .map(({ to }) => to);
  if (missingCanonicals.length > 0) {
    fail(`Canonical food URLs missing from sitemap: ${[...new Set(missingCanonicals)].join(", ")}`);
  }
}

function checkRecipeContentQuality() {
  const recipesPath = path.join(root, "dist", "api-recipes.json");
  if (!fs.existsSync(recipesPath)) {
    fail("dist/api-recipes.json is missing. Run npm run build before npm run qa.");
    return;
  }

  const recipes = readJson("dist/api-recipes.json");
  for (const recipe of recipes) {
    const missing = ["slug", "name", "servingName", "servingWeightG", "note"]
      .filter((field) => !recipe[field]);
    if (missing.length > 0) {
      fail(`Recipe ${recipe.slug || recipe.name || "(unknown)"} is missing required content fields: ${missing.join(", ")}`);
    }

    if (!Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) {
      fail(`Recipe ${recipe.slug || recipe.name || "(unknown)"} has no ingredients.`);
      continue;
    }

    for (const ingredient of recipe.ingredients) {
      if (!ingredient.foodId || !Number.isFinite(ingredient.amountG) || ingredient.amountG <= 0) {
        fail(`Recipe ${recipe.slug} has an invalid ingredient entry.`);
      }
    }
  }
}

function checkFoodContentQuality() {
  const foodsPath = path.join(root, "dist", "api-foods.json");
  if (!fs.existsSync(foodsPath)) {
    fail("dist/api-foods.json is missing. Run npm run build before npm run qa.");
    return;
  }

  const foods = readJson("dist/api-foods.json");
  const variabilityWords = [/ước tính/i, /tham khảo/i, /dao động/i, /thay đổi/i, /tùy/i, /khẩu phần/i, /công thức/i, /nhãn/i, /đối chiếu/i];
  const reviewWords = [/cần/i, /đối chiếu/i, /rà soát/i, /chuyên gia/i, /nguồn/i, /nhãn/i, /tư vấn cá thể/i];
  const saltWarningWords = [/muối/i, /natri/i, /mặn/i, /nước chấm/i, /gia vị/i, /tăng huyết áp/i, /bệnh thận/i, /suy tim/i];
  const fatWarningWords = [/béo bão hòa/i, /mỡ/i, /chất béo/i, /cholesterol/i, /mỡ máu/i];
  const sodiumRiskWords = [/mắm/i, /muối/i, /nước tương/i, /xì dầu/i, /đồ hộp/i, /mì gói/i, /snack/i, /xúc xích/i, /lạp xưởng/i];
  const processedFatWords = [/xúc xích/i, /lạp xưởng/i, /thịt hộp/i, /pate/i, /paté/i, /heo quay/i, /thịt quay/i];

  for (const food of foods) {
    const missing = ["slug", "name", "category", "basis", "edibleNote", "note"]
      .filter((field) => !food[field]);
    if (missing.length > 0) {
      fail(`Food ${food.slug || food.name || "(unknown)"} is missing required content fields: ${missing.join(", ")}`);
    }

    const note = `${food.note || ""} ${food.reviewNote || ""} ${food.basisNote || ""}`;
    const text = [food.name, food.category, food.state, food.basis, food.edibleNote, note].filter(Boolean).join(" ");
    const nutrients = food.nutrients || {};
    const isEstimate =
      food.confidence === "low" ||
      food.dataQuality === "recipe_estimate" ||
      food.source === "recipe-estimate-v1" ||
      food.sourceReviewStatus === "recipe_estimate_only";
    const needsReview =
      food.needsDietitianReview ||
      food.needsExternalSource ||
      food.sourceReviewStatus === "needs_better_source" ||
      food.sourceReviewStatus === "candidate_pending_dietitian_review" ||
      food.sourceReviewStatus === "needs_external_source";
    const highSodium = Number(nutrients.sodiumMg || 0) >= 400 || textHasAny(text, sodiumRiskWords);
    const highProcessedFat = food.state === "processed" && (Number(nutrients.saturatedFatG || 0) >= 5 || textHasAny(text, processedFatWords));

    if (isEstimate && !textHasAny(note, variabilityWords)) {
      fail(`Food ${food.slug} uses estimated/low-confidence data but lacks reader-facing uncertainty wording.`);
    }
    if (needsReview && !textHasAny(note, reviewWords)) {
      fail(`Food ${food.slug} needs source/dietitian review but lacks reader-facing review wording.`);
    }
    if (highSodium && !textHasAny(note, saltWarningWords)) {
      fail(`Food ${food.slug} appears high-sodium/salty but lacks a salt/natri note.`);
    }
    if (highProcessedFat && !textHasAny(note, fatWarningWords)) {
      fail(`Food ${food.slug} appears processed/high saturated fat but lacks fat/cholesterol note.`);
    }
  }
}

function textHasAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function checkHighRiskRecipeNotes() {
  const recipesPath = path.join(root, "dist", "api-recipes.json");
  if (!fs.existsSync(recipesPath)) {
    fail("dist/api-recipes.json is missing. Run npm run build before npm run qa.");
    return;
  }

  const recipes = readJson("dist/api-recipes.json");
  const saltWords = [/muối/i, /natri/i, /nước mắm/i, /mắm/i, /xì dầu/i, /nước tương/i, /mắm tôm/i, /dưa muối/i, /cà muối/i];
  const friedWords = [/chiên/i, /rán/i, /xào/i, /áp chảo/i, /dầu/i, /mỡ hành/i, /heo quay/i, /thịt quay/i];
  const diseaseWords = [/đái tháo đường/i, /tiểu đường/i, /\bCKD\b/i, /bệnh thận/i, /suy thận/i, /gout/i, /tăng huyết áp/i, /tim mạch/i];
  const variabilityWords = [/ước tính/i, /tham khảo/i, /dao động/i, /thay đổi/i, /tùy/i, /khẩu phần/i, /công thức/i, /nhãn/i];
  const saltWarningWords = [/muối/i, /natri/i, /nước mắm/i, /nước chấm/i, /hạn chế/i, /gia vị/i];
  const oilWarningWords = [/dầu/i, /mỡ/i, /chiên/i, /rán/i, /xào/i, /hấp thụ/i, /thấm dầu/i];
  const individualizationWords = [/cá thể/i, /bác sĩ/i, /chuyên gia/i, /xét nghiệm/i, /không thay thế/i, /tư vấn/i];

  for (const recipe of recipes) {
    const sourceText = [
      recipe.name,
      recipe.portionNote,
      recipe.note,
      ...(recipe.ingredients || []).flatMap((ingredient) => [ingredient.name, ingredient.note]),
    ].filter(Boolean).join(" ");
    const recipeText = [recipe.name, recipe.portionNote, recipe.note].filter(Boolean).join(" ");
    const nutrients = recipe.nutrients || {};
    const isEstimate = recipe.confidence === "low" || recipe.source === "recipe-estimate-v1";
    const isHighSodium = Number(nutrients.sodiumMg || 0) >= 800 || textHasAny(recipeText, saltWords);
    const isFried = textHasAny(recipeText, friedWords);
    const isDiseaseTargeted = textHasAny(recipeText, diseaseWords);

    if (isEstimate && !textHasAny(`${recipe.portionNote || ""} ${recipe.note || ""}`, variabilityWords)) {
      fail(`Recipe ${recipe.slug} uses estimated data but lacks reader-facing uncertainty/variability wording.`);
    }
    if (isHighSodium && !textHasAny(`${recipe.portionNote || ""} ${recipe.note || ""}`, saltWarningWords)) {
      fail(`Recipe ${recipe.slug} appears high-sodium/salty but lacks a salt/natri note.`);
    }
    if (isFried && !textHasAny(`${recipe.portionNote || ""} ${recipe.note || ""}`, oilWarningWords)) {
      fail(`Recipe ${recipe.slug} appears fried/oily but lacks an oil absorption/cooking-fat note.`);
    }
    if (isDiseaseTargeted && !textHasAny(`${recipe.portionNote || ""} ${recipe.note || ""}`, individualizationWords)) {
      fail(`Recipe ${recipe.slug} mentions a disease context but lacks individualization/clinician warning language.`);
    }
  }
}

checkBrandConsistency();
checkDuplicateDataKeys();
checkPlaceholders();
checkInternalLinks();
checkSearchIndexCoverage();
checkSitemapFoodAliases();
checkRecipeContentQuality();
checkFoodContentQuality();
checkHighRiskRecipeNotes();

if (failures.length > 0) {
  console.error("QA failed:");
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log("QA passed: brand consistency, duplicate data keys, placeholders, internal links, search coverage, food/recipe content, and canonical sitemap are OK.");
