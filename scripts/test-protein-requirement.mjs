import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const rootDir = process.cwd();
const sourcePath = join(rootDir, "src", "lib", "protein-requirement.ts");
const source = await readFile(sourcePath, "utf8");
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
});

const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString("base64")}`;
const {
  PROTEIN_PROFILES,
  calculateProteinRequirement,
} = await import(moduleUrl);

function expectRange(profileId, weightKg, expectedMin, expectedMax, expectedMode) {
  const result = calculateProteinRequirement(profileId, weightKg);
  assert.equal(result.ok, true, `${profileId} should be valid`);
  assert.equal(result.mode, expectedMode, `${profileId} mode`);
  assert.equal(result.minGPerDay, expectedMin, `${profileId} min g/day`);
  assert.equal(result.maxGPerDay, expectedMax, `${profileId} max g/day`);
  assert.equal(result.isPersonalTarget, true, `${profileId} should render a personal target`);
}

function expectClinical(profileId, weightKg) {
  const result = calculateProteinRequirement(profileId, weightKg);
  assert.equal(result.ok, true, `${profileId} should be valid`);
  assert.equal(result.mode, "clinical_no_auto", `${profileId} mode`);
  assert.equal(result.isPersonalTarget, false, `${profileId} must not render a personal target`);
  assert.equal(result.minGPerDay, undefined, `${profileId} min target must stay empty`);
  assert.equal(result.maxGPerDay, undefined, `${profileId} max target must stay empty`);
}

expectRange("healthy", 60, 48, 60, "auto");
expectRange("active_muscle", 70, 84, 140, "auto");
expectClinical("ckd_nondialysis", 65);
expectClinical("dialysis", 65);
expectRange("gout", 55, 44, 55, "caution");
expectClinical("pregnancy_lactation", 60);
expectClinical("cancer_malnutrition", 50);

const gout = PROTEIN_PROFILES.find((profile) => profile.profileId === "gout");
assert.ok(gout?.safetyMessage.includes("purin"), "gout message should mention purin");
assert.ok(gout?.safetyMessage.includes("tổng đạm"), "gout message should not reduce advice to total protein");

for (const badWeight of [0, -1, Number.NaN, Infinity, 201]) {
  const result = calculateProteinRequirement("healthy", badWeight);
  assert.equal(result.ok, false, `invalid weight ${badWeight} should fail`);
  assert.equal(result.error, "Vui lòng nhập cân nặng từ 20 đến 200 kg.");
  assert.equal(result.isPersonalTarget, false);
}

const emptyWeight = calculateProteinRequirement("healthy", Number(""));
assert.equal(emptyWeight.ok, false, "empty UI weight should fail after numeric coercion");

console.log("Protein requirement engine tests passed.");
