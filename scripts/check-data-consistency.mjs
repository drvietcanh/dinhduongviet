import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const reportPath = path.join(root, "test-results", "data-consistency.json");
const apiFiles = [
  "foods-slim.json",
  "foods-full.json",
  "search-index.json",
  "vietnam-foods.json",
  "vietnam-nutrients.json",
];

function hashFile(filePath) {
  return createHash("sha256").update(readFileSync(filePath)).digest("hex").toUpperCase();
}

const checks = apiFiles.map((fileName) => {
  const publicPath = path.join(root, "public", "api", fileName);
  const distPath = path.join(root, "dist", "api", fileName);
  const publicExists = existsSync(publicPath);
  const distExists = existsSync(distPath);
  const publicHash = publicExists ? hashFile(publicPath) : null;
  const distHash = distExists ? hashFile(distPath) : null;

  return {
    file: fileName,
    publicExists,
    distExists,
    publicHash,
    distHash,
    matches: publicExists && distExists && publicHash === distHash,
  };
});

const failures = checks.filter((check) => !check.matches);
const report = {
  generatedAt: new Date().toISOString(),
  filesChecked: checks.length,
  failures: failures.length,
  checks,
};

mkdirSync(path.dirname(reportPath), { recursive: true });
writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");

console.log("Data consistency report written:", path.relative(root, reportPath));
for (const check of checks) {
  const status = check.matches ? "OK" : "FAIL";
  console.log(`${status} ${check.file}`);
}

if (failures.length > 0) {
  console.error("Data consistency failed:");
  for (const failure of failures) {
    console.error(`- ${failure.file}: publicExists=${failure.publicExists}, distExists=${failure.distExists}, publicHash=${failure.publicHash}, distHash=${failure.distHash}`);
  }
  process.exit(1);
}
