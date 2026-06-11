import assert from "node:assert/strict";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const rootDir = process.cwd();
const tmpDir = join(rootDir, "test-results", "tmp-meal-assessment");

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

const files = [
  ["src/lib/carb-calculator.ts", "carb-calculator.mjs"],
  ["src/lib/protein-requirement.ts", "protein-requirement.mjs"],
  ["src/lib/vietnamese-meal-assessment.ts", "vietnamese-meal-assessment.mjs"],
];

for (const [sourcePath, outName] of files) {
  let source = await readFile(join(rootDir, sourcePath), "utf8");
  let js = transpile(source);
  js = js
    .replace(/from "\.\/carb-calculator"/g, 'from "./carb-calculator.mjs"')
    .replace(/from "\.\/protein-requirement"/g, 'from "./protein-requirement.mjs"');
  await writeFile(join(tmpDir, outName), js);
}

const {
  calculateVietnameseMealAssessment,
} = await import(pathToFileURL(join(tmpDir, "vietnamese-meal-assessment.mjs")).href);

function baseInput(overrides = {}) {
  return {
    age: 35,
    sex: "female",
    weightKg: 60,
    heightCm: 160,
    activity: "moderate",
    generalGoal: "healthy_eating",
    mealMode: "meal",
    selectedItems: [
      {
        id: "com-trang",
        slug: "com-trang",
        type: "food",
        name: "Cơm trắng",
        grams: 150,
        energyKcalPer100g: 130,
        carbGPer100g: 28.2,
        proteinGPer100g: 2.7,
        fatGPer100g: 0.3,
        fiberGPer100g: 0.4,
        sodiumMgPer100g: 1,
        sugarGPer100g: null,
        sourceId: "vn-fct-2007",
        confidence: "medium",
      },
      {
        id: "uc-ga",
        slug: "uc-ga",
        type: "food",
        name: "Ức gà",
        grams: 100,
        energyKcalPer100g: 120,
        carbGPer100g: 0,
        proteinGPer100g: 22.5,
        fatGPer100g: 2.6,
        fiberGPer100g: null,
        sodiumMgPer100g: 60,
        sugarGPer100g: null,
        sourceId: "recipe-estimate-v1",
        confidence: "low",
        dataQuality: "recipe_estimate",
      },
    ],
    flags: {},
    ...overrides,
  };
}

function textOf(result) {
  return JSON.stringify(result);
}

let result = calculateVietnameseMealAssessment(baseInput());
assert.equal(result.mode, "auto");
assert.equal(result.isPersonalTarget, false);
assert.equal(result.totals.energyKcal, 315);
assert.equal(result.totals.carbG, 42.3);
assert.equal(result.totals.proteinG, 26.6);
assert.ok(result.warnings.some((warning) => /ước tính|độ tin cậy thấp/.test(warning)));

result = calculateVietnameseMealAssessment(baseInput({ generalGoal: "mild_weight_loss" }));
assert.equal(result.mode, "caution");
assert.ok(!/bắt buộc ăn/i.test(textOf(result)));

result = calculateVietnameseMealAssessment(baseInput({ generalGoal: "mild_weight_gain" }));
assert.equal(result.mode, "caution");

result = calculateVietnameseMealAssessment(baseInput({ flags: { diabetesMedicationRisk: true } }));
assert.equal(result.mode, "clinical_no_auto");
assert.match(textOf(result), /insulin|sulfonylurea/);
assert.ok(!/tự tăng\/giảm insulin|tự ngưng thuốc|chỉnh liều|liều insulin/i.test(textOf(result)));

for (const [flag, pattern] of [
  ["chronicKidneyDisease", /Bệnh thận|đạm|natri|kali|phospho|dịch/],
  ["dialysis", /Lọc máu/],
  ["heartFailureFluidRestriction", /Suy tim|hạn chế dịch/],
  ["pregnancyLactation", /Thai kỳ|cho con bú/],
  ["childTeen", /Trẻ em|vị thành niên/],
  ["cancerMalnutrition", /Ung thư|suy dinh dưỡng/],
  ["rapidUnintentionalWeightLoss", /Sụt cân nhanh/],
]) {
  result = calculateVietnameseMealAssessment(baseInput({ flags: { [flag]: true } }));
  assert.equal(result.mode, "clinical_no_auto", `${flag} mode`);
  assert.match(textOf(result), pattern, `${flag} message`);
  assert.equal(result.proteinReference, undefined, `${flag} must not return protein reference`);
}

result = calculateVietnameseMealAssessment(baseInput({ flags: { goutAcuteOrSevere: true } }));
assert.equal(result.mode, "clinical_no_auto");
assert.match(textOf(result), /không đánh giá chỉ bằng tổng đạm/);

result = calculateVietnameseMealAssessment(baseInput({ flags: { goutHistory: true } }));
assert.equal(result.mode, "caution");
assert.match(textOf(result), /không đánh giá nguy cơ chỉ bằng tổng protein/);

result = calculateVietnameseMealAssessment(baseInput({
  flags: { chronicKidneyDisease: true, diabetesMedicationRisk: true, heartFailureFluidRestriction: true },
}));
assert.equal(result.mode, "clinical_no_auto");
assert.equal(result.isPersonalTarget, false);
assert.equal(result.proteinReference, undefined);
assert.ok(result.modeMessages.length >= 3, "combined diseases should produce multiple reasons");

result = calculateVietnameseMealAssessment(baseInput({
  selectedItems: [
    {
      name: "Món thiếu dữ liệu",
      grams: 120,
      energyKcalPer100g: null,
      carbGPer100g: null,
      proteinGPer100g: null,
      fatGPer100g: null,
    },
  ],
}));
assert.equal(result.ok, true);
assert.ok(result.warnings.some((warning) => /chưa có dữ liệu/.test(warning)));

const forbiddenText = [
  "khẩu phần điều trị chuẩn cho bệnh",
  "bắt buộc ăn",
  "an toàn cho tiểu đường",
  "an toàn cho CKD",
  "an toàn cho gout",
  "tự tăng/giảm insulin",
  "tự ngưng thuốc",
  "bệnh thận nên ăn 0.6",
  "uống nhiều nước",
];
const outputText = textOf(calculateVietnameseMealAssessment(baseInput({
  flags: { chronicKidneyDisease: true, goutAcuteOrSevere: true, diabetesMedicationRisk: true },
})));
for (const phrase of forbiddenText) {
  assert.ok(!outputText.toLowerCase().includes(phrase.toLowerCase()), `output must not contain "${phrase}"`);
}

console.log("Vietnamese meal assessment engine tests passed.");
