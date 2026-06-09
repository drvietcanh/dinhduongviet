import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import ts from "typescript";

const rootDir = process.cwd();
const sourcePath = join(rootDir, "src", "lib", "carb-calculator.ts");
const source = await readFile(sourcePath, "utf8");
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
});

const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString("base64")}`;
const {
  CARB_GLOBAL_SAFETY_NOTE,
  calculateCarbMeal,
} = await import(moduleUrl);

function single(carbPer100g, grams) {
  return calculateCarbMeal([{ name: "Món test", grams, carbPer100g }]);
}

let result = single(28, 100);
assert.equal(result.ok, true);
assert.equal(result.totalCarbGrams, 28);
assert.equal(result.items[0].carbGrams, 28);

result = single(28, 200);
assert.equal(result.ok, true);
assert.equal(result.totalCarbGrams, 56);
assert.equal(result.items[0].carbGrams, 56);

result = calculateCarbMeal([
  { name: "Món A", grams: 100, carbPer100g: 20 },
  { name: "Món B", grams: 50, carbPer100g: 40 },
]);
assert.equal(result.totalCarbGrams, 40);
assert.equal(result.items[0].carbGrams, 20);
assert.equal(result.items[1].carbGrams, 20);
assert.equal(result.items[0].contributionPercent, 50);
assert.equal(result.items[1].contributionPercent, 50);

result = single(30, 100);
assert.equal(result.totalCarbGrams, 30);
assert.equal(result.carbServings, 2);

result = calculateCarbMeal([{ name: "Thiếu carb", grams: 100, carbPer100g: null }]);
assert.equal(result.ok, true);
assert.equal(result.totalCarbGrams, 0);
assert.equal(result.items[0].carbGrams, null);
assert.deepEqual(result.items[0].warningCodes, ["missing_carb"]);
assert.match(result.warnings[0], /chưa có dữ liệu carbohydrate/);

for (const badGrams of [0, -1, Number.NaN, Infinity, 2001]) {
  result = calculateCarbMeal([{ name: "Gram lỗi", grams: badGrams, carbPer100g: 20 }]);
  assert.equal(result.ok, false, `grams ${badGrams} should fail`);
  assert.equal(result.items[0].carbGrams, null);
  assert.ok(result.items[0].warningCodes.includes("invalid_grams"));
  assert.match(result.errors[0], /Khối lượng/);
}

assert.ok(!/liều insulin|insulin dose|chỉnh liều/i.test(CARB_GLOBAL_SAFETY_NOTE), "engine safety text must not provide insulin dosing");
assert.match(CARB_GLOBAL_SAFETY_NOTE, /Không tự chỉnh insulin/);
assert.match(CARB_GLOBAL_SAFETY_NOTE, /sulfonylurea/);

console.log("Carbohydrate calculator engine tests passed.");
