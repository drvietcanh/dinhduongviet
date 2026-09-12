import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import ts from "typescript";

const source = await readFile(join(process.cwd(), "src", "lib", "pregnancy-nutrition.ts"), "utf8");
const transpiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString("base64")}`;
const { calculatePregnancyNutrition } = await import(moduleUrl);

const base = { ageYears: 30, heightCm: 160, prePregnancyWeightKg: 55, gestationalWeek: 20 };
const normal = calculatePregnancyNutrition({ ...base, currentWeightKg: 60 });
assert.equal(normal.ok, true);
assert.equal(normal.mode, "reference");
assert.equal(normal.prePregnancyBmi, 21.5);
assert.deepEqual(normal.totalWeightGainKg, { min: 11.5, max: 16, unit: "kg" });
assert.deepEqual(normal.secondThirdTrimesterRateKgPerWeek, { min: 0.35, max: 0.5, unit: "kg/tuần" });
assert.equal(normal.extraCaloriesPerDay, 340);
assert.equal(normal.currentGainKg, 5);
assert.equal(normal.currentGainStatus, "within_reference");
assert.equal(normal.nutrientReferences.find((item) => item.nutrient === "Sắt")?.amount, "27 mg/ngày");

const thirdTrimester = calculatePregnancyNutrition({ ...base, gestationalWeek: 30 });
assert.equal(thirdTrimester.extraCaloriesPerDay, 450);
const firstTrimester = calculatePregnancyNutrition({ ...base, gestationalWeek: 12 });
assert.equal(firstTrimester.extraCaloriesPerDay, 0);

const twins = calculatePregnancyNutrition({ ...base, pregnancyType: "twins" });
assert.equal(twins.mode, "reference");
assert.deepEqual(twins.totalWeightGainKg, { min: 16.8, max: 24.5, unit: "kg" });
assert.equal(twins.firstTrimesterGainKg, undefined);
assert.equal(twins.extraCaloriesPerDay, undefined);
assert.equal(twins.secondThirdTrimesterRateKgPerWeek, undefined);
assert.ok(twins.warnings.some((warning) => warning.includes("Đa thai")));

const teen = calculatePregnancyNutrition({ ...base, ageYears: 17 });
assert.equal(teen.mode, "clinical_no_auto");
assert.equal(teen.totalWeightGainKg, undefined);
assert.ok(teen.reasons.includes("under_18_bmi_percentile_needed"));

const risk = calculatePregnancyNutrition({ ...base, clinicalFlags: { gestationalDiabetes: true } });
assert.equal(risk.mode, "clinical_no_auto");
assert.equal(risk.totalWeightGainKg, undefined);
assert.ok(risk.reasons.includes("gestational_diabetes"));

assert.equal(calculatePregnancyNutrition({ ...base, pregnancyType: "triplets" }).ok, false);

for (const input of [
  { ...base, heightCm: 0 },
  { ...base, gestationalWeek: 20.5 },
  { ...base, prePregnancyWeightKg: 10 },
]) {
  const result = calculatePregnancyNutrition(input);
  assert.equal(result.ok, false);
  assert.equal(result.mode, "clinical_no_auto");
}

console.log("Pregnancy nutrition reference tests passed.");
