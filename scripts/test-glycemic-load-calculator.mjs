import assert from "node:assert/strict";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import ts from "typescript";

const rootDir = process.cwd();
const tmpDir = join(rootDir, "test-results", "tmp-gl-engine");
const carbSourcePath = join(rootDir, "src", "lib", "carb-calculator.ts");
const glSourcePath = join(rootDir, "src", "lib", "glycemic-load-calculator.ts");
const availableCarbSourcePath = join(rootDir, "src", "lib", "available-carbohydrate.ts");
const giDataSourcePath = join(rootDir, "src", "data", "glycemic-index.ts");

await rm(tmpDir, { recursive: true, force: true });
await mkdir(tmpDir, { recursive: true });

function transpile(source) {
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
}

const carbSource = await readFile(carbSourcePath, "utf8");
const glSource = await readFile(glSourcePath, "utf8");
const availableCarbSource = await readFile(availableCarbSourcePath, "utf8");
const giDataSource = await readFile(giDataSourcePath, "utf8");
await writeFile(join(tmpDir, "carb-calculator.mjs"), transpile(carbSource));
await writeFile(
  join(tmpDir, "glycemic-load-calculator.mjs"),
  transpile(glSource).replace(/from "\.\/carb-calculator"/g, 'from "./carb-calculator.mjs"'),
);
await writeFile(join(tmpDir, "available-carbohydrate.mjs"), transpile(availableCarbSource));
await writeFile(join(tmpDir, "glycemic-index.mjs"), transpile(giDataSource));

const {
  GL_GLOBAL_SAFETY_NOTE,
  GL_METHOD_NOTE,
  categorizeGL,
  calculateGlycemicLoadMeal,
  matchQualityLabel,
} = await import(pathToFileURL(join(tmpDir, "glycemic-load-calculator.mjs")).href);
const { availableCarbohydratePer100g } = await import(pathToFileURL(join(tmpDir, "available-carbohydrate.mjs")).href);
const { glycemicIndexMappings } = await import(pathToFileURL(join(tmpDir, "glycemic-index.mjs")).href);

function item({ name = "Món test", grams = 100, carbPer100g = 30, availableCarbPer100g = carbPer100g, gi = 70, matchQuality = "exact" } = {}) {
  return {
    name,
    grams,
    carbPer100g,
    availableCarbPer100g,
    glycemicIndex: {
      gi,
      giCategory: gi <= 55 ? "low" : gi <= 69 ? "medium" : "high",
      matchQuality,
      sourceLabel: "Test GI source",
      note: "Test mapping",
    },
  };
}

let result = calculateGlycemicLoadMeal([item()]);
assert.equal(result.ok, true);
assert.equal(result.totalCarbGrams, 30);
assert.equal(result.totalAvailableCarbGrams, 30);
assert.equal(result.totalGL, 21);
assert.equal(result.items[0].gl, 21);
assert.equal(calculateGlycemicLoadMeal([item({ availableCarbPer100g: 0, gi: 50 })]).totalGL, 0);
assert.ok(
  calculateGlycemicLoadMeal([item({ carbPer100g: 0, availableCarbPer100g: 10, gi: 50 })])
    .items[0].warningCodes.includes("invalid_available_carb"),
  "available carbohydrate cannot exceed a zero total-carbohydrate value",
);
result = calculateGlycemicLoadMeal([item({ carbPer100g: 0, availableCarbPer100g: 10, gi: 50 })]);
assert.equal(result.totalGL, null);
assert.equal(result.totalGLComplete, false);

result = calculateGlycemicLoadMeal([item({ carbPer100g: 30, availableCarbPer100g: 24 })]);
assert.equal(result.totalCarbGrams, 30, "total carbohydrate remains available for display");
assert.equal(result.totalAvailableCarbGrams, 24);
assert.equal(result.items[0].availableCarbGrams, 24);
assert.equal(result.items[0].gl, 16.8, "GL uses available carbohydrate, not total carbohydrate");

result = calculateGlycemicLoadMeal([
  item({ name: "Món A", grams: 50, carbPer100g: 20, gi: 50, matchQuality: "exact" }),
  item({ name: "Món B", grams: 100, carbPer100g: 10, gi: 60, matchQuality: "exact" }),
]);
assert.equal(result.totalCarbGrams, 20);
assert.equal(result.totalAvailableCarbGrams, 20);
assert.equal(result.items[0].gl, 5);
assert.equal(result.items[1].gl, 6);
assert.equal(result.totalGL, 11);
assert.equal(result.items[0].contributionPercent, 45.5);
assert.equal(result.items[1].contributionPercent, 54.5);

result = calculateGlycemicLoadMeal([
  { name: "Thiếu GI", grams: 100, carbPer100g: 30, glycemicIndex: null },
]);
assert.equal(result.ok, true);
assert.equal(result.items[0].gl, null);
assert.equal(result.totalGL, null, "a meal with an unmeasured GI must not show a partial sum as the total");
assert.equal(result.totalGLComplete, false);
assert.ok(result.items[0].warningCodes.includes("missing_gi"));
assert.ok(result.warnings.some((warning) => /chưa có GI phù hợp/.test(warning)));

for (const matchQuality of ["exact", "close", "generic"]) {
  result = calculateGlycemicLoadMeal([item({ matchQuality })]);
  assert.equal(result.items[0].gl, 21, `${matchQuality} should calculate GL`);
  assert.equal(matchQualityLabel(matchQuality).length > 0, true);
}

result = calculateGlycemicLoadMeal([item({ matchQuality: "close" })]);
assert.ok(result.items[0].warningCodes.includes("gi_match_close"));

result = calculateGlycemicLoadMeal([item({ matchQuality: "generic" })]);
assert.ok(result.items[0].warningCodes.includes("gi_match_generic"));

result = calculateGlycemicLoadMeal([item({ matchQuality: "estimated" })]);
assert.equal(result.items[0].gl, null);
assert.equal(result.totalGL, null);
assert.ok(result.items[0].warningCodes.includes("estimated_gi_not_used"));

result = calculateGlycemicLoadMeal([item({ availableCarbPer100g: null })]);
assert.equal(result.items[0].gl, null);
assert.equal(result.totalGL, null);
assert.ok(result.items[0].warningCodes.includes("missing_available_carb"));

result = calculateGlycemicLoadMeal([item({ availableCarbPer100g: -1 })]);
assert.equal(result.items[0].gl, null);
assert.ok(result.items[0].warningCodes.includes("invalid_available_carb"));

result = calculateGlycemicLoadMeal([item({ gi: null, matchQuality: "no_gi" })]);
assert.equal(result.items[0].gl, null);
assert.ok(result.items[0].warningCodes.includes("missing_gi"));

result = calculateGlycemicLoadMeal([item({ grams: -1 })]);
assert.equal(result.ok, false);
assert.equal(result.items[0].gl, null);
assert.ok(result.items[0].warningCodes.includes("invalid_grams"));
assert.match(result.errors[0], /Khối lượng/);

for (const badGrams of [0, Number.NaN, Infinity, Number("")]) {
  result = calculateGlycemicLoadMeal([item({ grams: badGrams })]);
  assert.equal(result.ok, false, `grams ${badGrams} should fail`);
  assert.equal(result.items[0].gl, null);
  assert.ok(result.items[0].warningCodes.includes("invalid_grams"));
  assert.match(result.errors[0], /Khối lượng/);
}

result = calculateGlycemicLoadMeal([item({ grams: 33.3, carbPer100g: 28, gi: 53 })]);
assert.equal(result.items[0].carbGrams, 9.3);
assert.equal(result.items[0].gl, 4.9);
assert.equal(categorizeGL(10), "low");
assert.equal(categorizeGL(10.1), "medium");
assert.equal(categorizeGL(19.9), "medium");
assert.equal(categorizeGL(20), "high");

assert.equal(availableCarbohydratePer100g({ sourceId: "vn-fct-2007", nutrients: { carbG: 28.2, fiberG: 0.4 } }), 28.2);
assert.equal(availableCarbohydratePer100g({ sourceId: "vdd-food-portal-2026", nutrients: { carbG: 4.8 } }), null, "withhold sources that do not document the carbohydrate basis");
assert.equal(availableCarbohydratePer100g({ sourceId: "usda-fdc-169711", nutrients: { carbG: 21.09, fiberG: 1 } }), 20.09);
assert.equal(availableCarbohydratePer100g({ sourceId: "usda-fdc-169711", nutrients: { carbG: 21.09 } }), null);
assert.equal(availableCarbohydratePer100g({ sourceId: "recipe-estimate-v1", nutrients: { carbG: 30, fiberG: 2 } }), null);

for (const mapping of glycemicIndexMappings) {
  if (mapping.gi == null) continue;
  assert.ok(mapping.sourceUrl, `${mapping.foodName} must link to a GI source when a numeric value is published`);
  assert.doesNotMatch(mapping.sourceLabel, /internal|source-lock|\bv1\b/i, `${mapping.foodName} must not present internal GI data as sourced`);
}

for (const slug of ["bun-tuoi", "banh-pho-chin", "ca-chua", "dua-leo", "du-du", "mien-dong", "sua-dac", "xoai", "sua-tuoi", "ca-rot"]) {
  const mapping = glycemicIndexMappings.find((entry) => entry.foodSlug === slug);
  assert.ok(mapping, `${slug} should have an explicit GI lookup state`);
  assert.equal(mapping.gi, null, `${slug} must not reuse an internal GI without a traceable source`);
  assert.equal(mapping.matchQuality, "no_gi");
}

assert.ok(!/gl\s*\*\s*100\s*\/\s*gi|food\.gl\s*\*\s*100\s*\/\s*food\.gi/i.test(glSource), "engine must not infer carb backward from GL");

const engineText = JSON.stringify(result) + GL_GLOBAL_SAFETY_NOTE;
assert.ok(!/chỉnh insulin|liều insulin|tăng insulin|giảm insulin|tăng thuốc|giảm thuốc|an toàn tuyệt đối|mục tiêu bắt buộc/i.test(engineText), "engine output must not provide medication dosing advice or overconfident goals");
assert.match(GL_GLOBAL_SAFETY_NOTE, /Không tự thay đổi insulin/);
assert.match(GL_GLOBAL_SAFETY_NOTE, /sulfonylurea/);
assert.match(GL_METHOD_NOTE, /carbohydrate khả dụng/);
assert.doesNotMatch(GL_METHOD_NOTE, /V1|thử nghiệm/i);

console.log("Glycemic load calculator engine tests passed.");
