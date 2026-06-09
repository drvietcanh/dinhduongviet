import { spawnSync } from "node:child_process";

const steps = [
  ["data:vietnam", "Export Vietnam nutrition API files"],
  ["build:astro", "Generate dist/api-foods.json from Astro sources"],
  ["data:foods-slim", "Build public/api/foods-slim.json from dist/api-foods.json"],
  ["data:foods-full", "Build public/api/foods-full.json from dist/api-foods.json"],
  ["data:search", "Build public/api/search-index.json from current public API data"],
  ["build:astro", "Copy regenerated public API files into dist"],
];

for (const [script, label] of steps) {
  console.log(`\n[data:all] ${label}`);
  const result = process.platform === "win32"
    ? spawnSync(`npm run ${script}`, { shell: true, stdio: "inherit" })
    : spawnSync("npm", ["run", script], { stdio: "inherit" });

  if (result.status !== 0) {
    if (result.error) console.error(`[data:all] ${result.error.message}`);
    console.error(`[data:all] Failed at npm run ${script}`);
    process.exit(result.status || 1);
  }
}

console.log("\n[data:all] Public and dist API data are up to date.");
