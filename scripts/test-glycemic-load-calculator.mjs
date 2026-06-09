import assert from "node:assert/strict";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import ts from "typescript";

const rootDir = process.cwd();
const tmpDir = join(rootDir, "test-results", "tmp-gl-engine");
const carbSourcePath = join(rootDir, "src", "lib", "carb-calculator.ts");
const glSourcePath = join(rootDir, "src", "lib", "glycemic-load-calculator.ts");

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
await writeFile(join(tmpDir, "carb-calculator.mjs"), transpile(carbSource));
await writeFile(
  join(tmpDir, "glycemic-load-calculator.mjs"),
  transpile(glSource).replace(/from "\.\/carb-calculator"/g, 'from "./carb-calculator.mjs"'),
);

const {
  GL_GLOBAL_SAFETY_NOTE,
  calculateGlycemicLoadMeal,
  matchQualityLabel,
} = await import(pathToFileURL(join(tmpDir, "glycemic-load-calculator.mjs")).href);

function item({ name = "Món test", grams = 100, carbPer100g = 30, gi = 70, matchQuality = "exact" } = {}) {
  return {
    name,
    grams,
    carbPer100g,
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
assert.equal(result.totalGL, 21);
assert.equal(result.items[0].gl, 21);

result = calculateGlycemicLoadMeal([
  item({ name: "Món A", grams: 50, carbPer100g: 20, gi: 50, matchQuality: "exact" }),
  item({ name: "Món B", grams: 100, carbPer100g: 10, gi: 60, matchQuality: "exact" }),
]);
assert.equal(result.totalCarbGrams, 20);
assert.equal(result.items[0].gl, 5);
assert.equal(result.items[1].gl, 6);
assert.equal(result.totalGL, 11);
assert.equal(result.items[0].contributionPercent, 45.5);
assert.equal(result.items[1].contributionPercent, 54.5);

result = calculateGlycemicLoadMeal([
  { name: "Thiếu GI", grams: 100, carbPer100g: 30, glycemicIndex: null },
]);
assert.equal(result.ok, true);
assert.equal(result.totalGL, 0);
assert.equal(result.items[0].gl, null);
assert.ok(result.items[0].warningCodes.includes("missing_gi"));
assert.match(result.warnings[0], /chưa có GI phù hợp/);

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
assert.ok(result.items[0].warningCodes.includes("estimated_gi_not_used"));

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

assert.ok(!/gl\s*\*\s*100\s*\/\s*gi|food\.gl\s*\*\s*100\s*\/\s*food\.gi/i.test(glSource), "engine must not infer carb backward from GL");

const engineText = JSON.stringify(result) + GL_GLOBAL_SAFETY_NOTE;
assert.ok(!/chỉnh insulin|liều insulin|tăng insulin|giảm insulin|tăng thuốc|giảm thuốc|an toàn tuyệt đối|mục tiêu bắt buộc/i.test(engineText), "engine output must not provide medication dosing advice or overconfident goals");
assert.match(GL_GLOBAL_SAFETY_NOTE, /Không tự thay đổi insulin/);
assert.match(GL_GLOBAL_SAFETY_NOTE, /sulfonylurea/);

console.log("Glycemic load calculator engine tests passed.");
