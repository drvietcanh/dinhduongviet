import { spawnSync } from "node:child_process";

const scriptPath = process.argv[2];
const extraArgs = process.argv.slice(3);

if (!scriptPath) {
  console.error("[run-python] Missing script path.");
  process.exit(1);
}

const candidates = process.platform === "win32"
  ? [
      "C:\\Python313\\python.exe",
      "python",
      "python3",
    ]
  : [
      "python3",
      "python",
    ];

let lastError = null;

for (const cmd of candidates) {
  const result = spawnSync(cmd, [scriptPath, ...extraArgs], { stdio: "inherit" });
  if (!result.error) {
    process.exit(result.status ?? 0);
  }
  lastError = result.error;
}

console.error("[run-python] Unable to locate a usable Python interpreter.");
if (lastError) {
  console.error(lastError.message);
}
process.exit(1);
