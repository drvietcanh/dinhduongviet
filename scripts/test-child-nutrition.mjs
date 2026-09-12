import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import ts from "typescript";

const source = await readFile(join(process.cwd(), "src", "lib", "child-nutrition.ts"), "utf8");
const transpiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString("base64")}`;
const { calculateChildNutrition } = await import(moduleUrl);

let result = calculateChildNutrition({ ageYears: 8, sex: "female", activity: "moderate", weightKg: 26, heightCm: 128 });
assert.equal(result.ok, true);
assert.equal(result.mode, "reference");
assert.equal(result.ageBand, "4_8");
assert.deepEqual(result.energyReference, { minKcal: 1400, maxKcal: 1600, label: "Vận động vừa" });
assert.equal(result.rawBmi, 15.9);

result = calculateChildNutrition({ ageYears: 14, sex: "female", activity: "active" });
assert.deepEqual(result.energyReference, { minKcal: 2400, maxKcal: 2400, label: "Năng động" });

result = calculateChildNutrition({ ageYears: 3, sex: "male", activity: "sedentary" });
assert.deepEqual(result.energyReference, { minKcal: 1000, maxKcal: 1200, label: "Ít vận động" });

assert.equal(calculateChildNutrition({ ageYears: 8, sex: "other", activity: "moderate" }).ok, false);
assert.equal(calculateChildNutrition({ ageYears: 8, sex: "female", activity: "unknown" }).ok, false);

const underTwo = calculateChildNutrition({ ageYears: 1.5, sex: "female", activity: "moderate" });
assert.equal(underTwo.mode, "clinical_no_auto");
assert.equal(underTwo.energyReference, undefined);
assert.ok(underTwo.reasons.includes("under_2_growth_monitoring"));

const clinical = calculateChildNutrition({ ageYears: 10, sex: "male", activity: "active", clinicalConcern: true });
assert.equal(clinical.mode, "clinical_no_auto");
assert.equal(clinical.energyReference, undefined);

for (const input of [
  { ageYears: 19, sex: "female" },
  { ageYears: 8, sex: "female", weightKg: 25 },
  { ageYears: 8, sex: "female", heightCm: 125 },
]) {
  const invalid = calculateChildNutrition(input);
  assert.equal(invalid.ok, false);
  assert.equal(invalid.mode, "clinical_no_auto");
}

console.log("Child nutrition reference tests passed.");
