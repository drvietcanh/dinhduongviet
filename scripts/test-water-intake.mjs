import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import ts from "typescript";

const rootDir = process.cwd();
const sourcePath = join(rootDir, "src", "lib", "water-intake-calculator.ts");
const source = await readFile(sourcePath, "utf8");
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
});

const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString("base64")}`;
const {
  WATER_ACUTE_SAFETY_NOTE,
  WATER_GLOBAL_SAFETY_NOTE,
  calculateWaterIntake,
} = await import(moduleUrl);

function expectAuto(weightKg, minLiters, maxLiters) {
  const result = calculateWaterIntake({ weightKg });
  assert.equal(result.ok, true, `${weightKg} kg should be valid`);
  assert.equal(result.mode, "auto");
  assert.equal(result.isPersonalTarget, true);
  assert.equal(result.totalWaterMinLiters, minLiters);
  assert.equal(result.totalWaterMaxLiters, maxLiters);
  assert.ok(result.estimatedDrinkingWaterMinLiters < result.totalWaterMinLiters);
  assert.ok(result.foodWaterNote.includes("thức ăn"));
}

function expectClinical(redFlags, messagePattern) {
  const result = calculateWaterIntake({ weightKg: 65, redFlags });
  assert.equal(result.ok, true);
  assert.equal(result.mode, "clinical_no_auto");
  assert.equal(result.isPersonalTarget, false);
  assert.equal(result.totalWaterMinLiters, undefined);
  assert.equal(result.estimatedDrinkingWaterMinLiters, undefined);
  assert.match(result.warnings.join(" "), messagePattern);
}

expectAuto(60, 1.8, 2.1);
expectAuto(70, 2.1, 2.45);

for (const badWeight of [0, -1, Number.NaN, Infinity, Number(""), 201]) {
  const result = calculateWaterIntake({ weightKg: badWeight });
  assert.equal(result.ok, false, `invalid weight ${badWeight} should fail`);
  assert.equal(result.isPersonalTarget, false);
  assert.match(result.error ?? "", /cân nặng/);
}

let result = calculateWaterIntake({ weightKg: 60, activity: "high" });
assert.equal(result.mode, "caution");
assert.equal(result.isPersonalTarget, true);
assert.match(result.warnings.join(" "), /Vận động nhiều/);

result = calculateWaterIntake({ weightKg: 60, heatSweat: "hot" });
assert.equal(result.mode, "caution");
assert.match(result.warnings.join(" "), /Thời tiết nóng/);

result = calculateWaterIntake({ weightKg: 60, heatSweat: "heavy_sweat" });
assert.equal(result.mode, "caution");
assert.match(result.warnings.join(" "), /điện giải/);

expectClinical({ heartFailure: true }, /Suy tim/);
expectClinical({ chronicKidneyDisease: true }, /Bệnh thận/);
expectClinical({ dialysis: true }, /lọc máu/);
expectClinical({ cirrhosisAscites: true }, /Xơ gan/);
expectClinical({ edema: true }, /Phù/);
expectClinical({ fluidRestriction: true }, /hạn chế dịch/);
expectClinical({ hyponatremia: true }, /Hạ natri/);
expectClinical({ child: true }, /trẻ em/i);
expectClinical({ acuteIllness: true }, /Sốt cao|mất nước cấp/);

result = calculateWaterIntake({ weightKg: 65, redFlags: { diuretics: true } });
assert.equal(result.mode, "caution");
assert.equal(result.isPersonalTarget, true);
assert.match(result.warnings.join(" "), /lợi tiểu/);

result = calculateWaterIntake({ weightKg: 65, redFlags: { diuretics: true, heartFailure: true } });
assert.equal(result.mode, "clinical_no_auto");
assert.equal(result.isPersonalTarget, false);

for (const pairedFlag of ["chronicKidneyDisease", "edema", "hyponatremia"]) {
  result = calculateWaterIntake({ weightKg: 65, redFlags: { diuretics: true, [pairedFlag]: true } });
  assert.equal(result.mode, "clinical_no_auto", `diuretics + ${pairedFlag} should be clinical`);
  assert.equal(result.isPersonalTarget, false);
}

result = calculateWaterIntake({ weightKg: 60, pregnancyLactation: "pregnancy" });
assert.equal(result.mode, "caution");
assert.match(result.warnings.join(" "), /Thai kỳ/);

result = calculateWaterIntake({ weightKg: 60, pregnancyLactation: "lactation" });
assert.equal(result.mode, "caution");
assert.match(result.warnings.join(" "), /Cho con bú/);

const outputText = JSON.stringify(result) + WATER_GLOBAL_SAFETY_NOTE + WATER_ACUTE_SAFETY_NOTE;
assert.ok(!/uống càng nhiều càng tốt|bắt buộc uống\s*\d|đạt chuẩn tuyệt đối|đạt chuẩn nước/i.test(outputText));
assert.match(WATER_GLOBAL_SAFETY_NOTE, /hạn chế dịch/);
assert.match(WATER_ACUTE_SAFETY_NOTE, /cấp cứu mất nước/);

console.log("Water intake calculator engine tests passed.");
