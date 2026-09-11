import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const rootDir = process.cwd();
const tempDir = await mkdtemp(join(tmpdir(), "nutrition-goal-planner-"));

async function transpileToMjs(sourcePath, outputName, rewriteImports = false) {
  const source = await readFile(sourcePath, "utf8");
  let outputText = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;

  if (rewriteImports) {
    outputText = outputText.replace(`from "./protein-requirement"`, `from "./protein-requirement.mjs"`);
  }

  const outputPath = join(tempDir, outputName);
  await writeFile(outputPath, outputText, "utf8");
  return outputPath;
}

const proteinPath = await transpileToMjs(
  join(rootDir, "src", "lib", "protein-requirement.ts"),
  "protein-requirement.mjs",
);
const plannerPath = await transpileToMjs(
  join(rootDir, "src", "lib", "nutrition-goal-planner.ts"),
  "nutrition-goal-planner.mjs",
  true,
);

const { planNutritionGoal } = await import(pathToFileURL(plannerPath).href);

const baseInput = {
  age: 35,
  sex: "female",
  weightKg: 60,
  heightCm: 165,
  activityLevel: "moderate",
  goal: "maintain",
};

function plan(overrides = {}) {
  return planNutritionGoal({
    ...baseInput,
    ...overrides,
    redFlags: {
      ...(baseInput.redFlags ?? {}),
      ...(overrides.redFlags ?? {}),
    },
  });
}

function expectMode(result, mode) {
  assert.equal(result.ok, true, `${mode} result should be ok`);
  assert.equal(result.mode, mode);
}

function expectClinical(overrides, reason) {
  const result = plan(overrides);
  expectMode(result, "clinical_no_auto");
  assert.equal(result.shouldShowTargets, false, `${reason} should suppress targets`);
  assert.equal(result.proteinReference, undefined, `${reason} must not show protein target`);
  assert.ok(result.reasons.includes(reason), `${reason} reason should be present`);
}

function assertNoRestrictedNumericTargets(result) {
  const serialized = JSON.stringify(result);
  for (const forbiddenKey of [
    "energyReference",
    "macroReference",
    "kcalDeficit",
    "kcalSurplus",
    "dailyDeficit",
    "dailySurplus",
    "macroRange",
    "fiberTarget",
    "sugarTarget",
    "sodiumTarget",
  ]) {
    assert.equal(
      serialized.includes(forbiddenKey),
      false,
      `restricted output must not include numeric reference key ${forbiddenKey}`,
    );
  }
  assert.equal(result.energyEstimateStatus, "not_enabled_v1");
  assert.equal(result.macroTargetStatus, "not_enabled_v1");
}

function assertNoForbiddenWording(result) {
  const serialized = JSON.stringify(result).toLowerCase();
  for (const phrase of [
    "mục tiêu chuẩn",
    "bắt buộc ăn",
    "giảm x kg/tuần chắc chắn",
    "ăn càng ít càng tốt",
    "macro tối ưu cho mọi người",
    "an toàn cho bệnh",
    "tự chỉnh insulin",
    "ngưng thuốc",
    "bệnh thận nên ăn x g đạm",
  ]) {
    assert.equal(serialized.includes(phrase), false, `output must not contain forbidden wording: ${phrase}`);
  }
}

try {
  const maintain = plan();
  expectMode(maintain, "auto");
  assert.equal(maintain.shouldShowTargets, true);
  assert.equal(maintain.bmi, 22);
  assert.equal(maintain.bmiCategory, "adult_reference_range");
  assert.ok(maintain.proteinReference, "healthy adult should get safe protein reference");
  assert.equal(maintain.proteinReference.mode, "auto");
  assert.equal(maintain.energyEstimateStatus, "available_adult_reference");
  assert.equal(maintain.macroTargetStatus, "available_adult_reference");
  assert.deepEqual(maintain.energyReference, {
    bmrKcal: 1295,
    maintenanceKcal: 2007,
    activityFactor: 1.55,
    label: "Ước tính BMR và mức duy trì cho người lớn tương đối khỏe; không phải mức ăn bắt buộc.",
    sourceLabel: "Mifflin-St Jeor; hệ số hoạt động chỉ là quy ước tham khảo (thấp 1,20; vừa 1,55).",
  });
  assert.deepEqual(maintain.macroReference, {
    carbohydrate: { minGrams: 226, maxGrams: 326, percentRange: "45–65% năng lượng" },
    fat: { minGrams: 45, maxGrams: 78, percentRange: "20–35% năng lượng" },
    label: "Khoảng phân bố năng lượng đa lượng (AMDR), không phải macro tối ưu hoặc kế hoạch điều trị cá nhân.",
    sourceLabel: "National Academies DRI (AMDR cho người lớn): carbohydrate 45–65%, chất béo 20–35% năng lượng.",
  });

  const healthyEating = plan({ goal: "healthy_eating" });
  expectMode(healthyEating, "auto");

  const mildLoss = plan({ goal: "mild_weight_loss" });
  expectMode(mildLoss, "caution");
  assert.ok(mildLoss.reasons.includes("mild_weight_loss"));
  assertNoRestrictedNumericTargets(mildLoss);
  assert.equal("kcalDeficit" in mildLoss, false, "mild loss should not output deficit data");
  assert.equal("dailyDeficit" in mildLoss, false, "mild loss should not output daily deficit data");
  assert.equal(JSON.stringify(mildLoss).includes("kg/tuần"), false, "mild loss should not promise weekly speed");

  const mildGain = plan({ goal: "mild_weight_gain" });
  expectMode(mildGain, "caution");
  assert.ok(mildGain.reasons.includes("mild_weight_gain"));
  assertNoRestrictedNumericTargets(mildGain);
  assert.equal("kcalSurplus" in mildGain, false, "mild gain should not output surplus data");
  assert.equal("dailySurplus" in mildGain, false, "mild gain should not output daily surplus data");

  expectMode(plan({ age: 65 }), "caution");
  assert.ok(plan({ age: 65 }).reasons.includes("age_65_or_older"));

  expectMode(plan({ activityLevel: "high" }), "caution");
  assert.ok(plan({ activityLevel: "high" }).reasons.includes("high_activity"));

  expectMode(plan({ vegetarianPattern: true }), "caution");
  assert.ok(plan({ vegetarianPattern: true }).reasons.includes("vegetarian_pattern"));

  expectMode(plan({ weightKg: 75, heightCm: 165 }), "caution");
  assert.ok(plan({ weightKg: 75, heightCm: 165 }).reasons.includes("bmi_25_or_higher"));

  expectClinical({ age: 17 }, "under_18");
  expectClinical({ weightKg: 45, heightCm: 170 }, "bmi_below_18_5");
  expectClinical({ redFlags: { pregnancyLactation: true } }, "pregnancy_lactation");
  expectClinical({ redFlags: { chronicKidneyDisease: true } }, "chronic_kidney_disease");
  expectClinical({ redFlags: { dialysis: true } }, "dialysis");
  expectClinical({ redFlags: { heartFailureOrFluidRestriction: true } }, "heart_failure_or_fluid_restriction");
  expectClinical({ redFlags: { diabetesInsulinOrSulfonylurea: true } }, "diabetes_insulin_or_sulfonylurea");
  expectClinical({ redFlags: { cancerMalnutrition: true } }, "cancer_malnutrition");
  expectClinical({ redFlags: { rapidUnintentionalWeightLoss: true } }, "rapid_unintentional_weight_loss");
  expectClinical({ redFlags: { eatingDisorder: true } }, "eating_disorder");
  expectClinical({ redFlags: { acuteIllness: true } }, "acute_illness");
  expectClinical({ redFlags: { complexMedication: true } }, "complex_medication");
  expectClinical({ redFlags: { cirrhosisAscites: true } }, "cirrhosis_ascites");

  for (const invalid of [
    [{ age: Number.NaN }, "Vui lòng nhập tuổi từ 1 đến 120."],
    [{ age: 121 }, "Vui lòng nhập tuổi từ 1 đến 120."],
    [{ weightKg: 0 }, "Vui lòng nhập cân nặng từ 20 đến 300 kg."],
    [{ heightCm: 99 }, "Vui lòng nhập chiều cao từ 100 đến 250 cm."],
  ]) {
    const [overrides, expectedError] = invalid;
    const result = plan(overrides);
    assert.equal(result.ok, false);
    assert.equal(result.mode, "clinical_no_auto");
    assert.equal(result.shouldShowTargets, false);
    assert.equal(result.error, expectedError);
  }

  for (const result of [
    maintain,
    healthyEating,
    mildLoss,
    mildGain,
    plan({ age: 17 }),
    plan({ redFlags: { chronicKidneyDisease: true } }),
  ]) {
    assertNoForbiddenWording(result);
    if (result.mode !== "auto") assertNoRestrictedNumericTargets(result);
    assert.equal(result.isPersonalPrescription, false);
  }

  console.log("Nutrition goal planner safety shell tests passed.");
} finally {
  await rm(tempDir, { recursive: true, force: true });
}
