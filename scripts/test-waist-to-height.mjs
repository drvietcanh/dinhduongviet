import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const rootDir = process.cwd();
const tempDir = await mkdtemp(join(tmpdir(), "waist-to-height-"));

try {
  const source = await readFile(join(rootDir, "src", "lib", "waist-to-height.ts"), "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const modulePath = join(tempDir, "waist-to-height.mjs");
  await writeFile(modulePath, output, "utf8");

  const { calculateWaistToHeightRatio } = await import(pathToFileURL(modulePath).href);
  const result = calculateWaistToHeightRatio(80, 160);
  assert.deepEqual(result, {
    ok: true,
    ratio: 0.5,
    formula: "80 ÷ 160 = 0.50",
    interpretation:
      "Đây là chỉ số sàng lọc từ số đo vòng eo và chiều cao, không phải % mỡ cơ thể và không dùng để chẩn đoán.",
  });

  assert.equal(calculateWaistToHeightRatio(80, 99).ok, false);
  assert.equal(calculateWaistToHeightRatio(29, 160).ok, false);
  assert.equal(calculateWaistToHeightRatio(Number.NaN, 160).ok, false);
  console.log("Waist-to-height calculator tests passed.");
} finally {
  await rm(tempDir, { recursive: true, force: true });
}
