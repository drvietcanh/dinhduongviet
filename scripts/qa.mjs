import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];

function walk(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, predicate));
    else if (predicate(full)) out.push(full);
  }
  return out;
}

function fail(message) {
  failures.push(message);
}

function checkDuplicateDataKeys() {
  const dataDir = path.join(root, "src", "data");
  const files = walk(dataDir, (file) => file.endsWith(".ts"));
  for (const field of ["id", "slug"]) {
    const values = new Map();
    const pattern = new RegExp(`\\b${field}\\s*:\\s*"([^"]+)"`, "g");
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const match of text.matchAll(pattern)) {
        const value = match[1];
        if (!values.has(value)) values.set(value, []);
        values.get(value).push(path.relative(root, file));
      }
    }
    for (const [value, locations] of values.entries()) {
      if (locations.length > 1) {
        fail(`Duplicate ${field} "${value}" in ${locations.join(", ")}`);
      }
    }
  }
}

function checkPlaceholders() {
  const srcFiles = walk(path.join(root, "src"), (file) => /\.(astro|ts|js|mjs)$/.test(file));
  const distFiles = walk(path.join(root, "dist"), (file) => /\.(html|js)$/.test(file));
  const srcBadPatterns = [
    /JSON\.parse\('\{[A-Za-z0-9_]+}'\)/,
    /style="width:\s*\{size}[^"]*height:\s*\{size}/,
    /style="background:\s*\{s\.color}/,
    /style="width:\s*\{bar\.pct}%[^"]*background:\s*\{bar\.color}/,
  ];
  const distBadPatterns = [
    /JSON\.parse\('\{[A-Za-z0-9_]+}'\)/,
    /\{size}/,
    /\{s\.color}/,
    /\{bar\.(pct|color)/,
  ];
  for (const file of srcFiles) {
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of srcBadPatterns) {
      if (pattern.test(text)) {
        fail(`Source placeholder matched ${pattern} in ${path.relative(root, file)}`);
      }
    }
  }
  for (const file of distFiles) {
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of distBadPatterns) {
      if (pattern.test(text)) {
        fail(`Rendered placeholder matched ${pattern} in ${path.relative(root, file)}`);
      }
    }
  }
}

function checkInternalLinks() {
  const distDir = path.join(root, "dist");
  if (!fs.existsSync(distDir)) {
    fail("dist/ is missing. Run npm run build before npm run qa.");
    return;
  }
  const htmlFiles = walk(distDir, (file) => file.endsWith(".html"));
  const hrefPattern = /href="(\/[^"#?]+)(?:[#?][^"]*)?"/g;
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    for (const match of html.matchAll(hrefPattern)) {
      const href = match[1];
      if (/^\/(api-foods|api-recipes)\.json$/.test(href)) continue;
      if (/[\$'"+{}]/.test(href)) continue;
      const relative = href.replace(/^\/+/, "");
      const target = path.extname(relative)
        ? path.join(distDir, relative)
        : path.join(distDir, relative, "index.html");
      if (!fs.existsSync(target)) {
        fail(`Broken internal link ${href} from ${path.relative(distDir, file)}`);
      }
    }
  }
}

checkDuplicateDataKeys();
checkPlaceholders();
checkInternalLinks();

if (failures.length > 0) {
  console.error("QA failed:");
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log("QA passed: duplicate data keys, placeholders, and internal links are OK.");
