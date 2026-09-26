import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "src", "data");
const files = fs.readdirSync(dataDir).filter((file) => /^(recipes|foods).*\.ts$/.test(file) || file === "nutrition.ts");

const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
const slugify = (value) => normalize(value).replace(/ /g, "-");
const rows = [];

for (const file of files) {
  const source = fs.readFileSync(path.join(dataDir, file), "utf8");
  for (const match of source.matchAll(/id:\s*"([^"]+)"\s*,\s*slug:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"[\s\S]{0,180}?aliases:\s*\[([^\]]*)\]/g)) {
    const aliases = [...match[4].matchAll(/"([^"]+)"/g)].map((alias) => alias[1]);
    rows.push({ file, id: match[1], slug: match[2], name: match[3], key: normalize(match[3]), aliases, kind: file.startsWith("foods") ? "food" : "recipe" });
  }
}

const bulkSource = fs.readFileSync(path.join(dataDir, "bulk-catalog.ts"), "utf8");
const seedBlock = bulkSource.match(/const recipeSeedText = `([\s\S]*?)`;/);
if (seedBlock) {
  for (const name of seedBlock[1].split(/\r?\n/).map((value) => value.trim()).filter(Boolean)) {
    rows.push({ file: "bulk-catalog.ts", id: `bulk:${slugify(name)}`, slug: slugify(name), name, key: normalize(name), aliases: [normalize(name)], kind: "recipe", bulk: true });
  }
}

const groupBy = (field) => {
  const groups = new Map();
  for (const row of rows) (groups.get(row[field]) ?? groups.set(row[field], []).get(row[field])).push(row);
  return [...groups.entries()].filter(([, group]) => new Set(group.filter((row) => row.kind === "recipe").map((row) => row.id)).size > 1 || new Set(group.filter((row) => row.kind === "food").map((row) => row.id)).size > 1);
};

const aliasRows = rows.flatMap((row) => (row.aliases ?? []).map((alias) => ({ ...row, alias, key: normalize(alias) })));
const aliasGroups = new Map();
for (const row of aliasRows) (aliasGroups.get(row.key) ?? aliasGroups.set(row.key, []).get(row.key)).push(row);
const duplicateAliases = [...aliasGroups.entries()].filter(([, group]) => new Set(group.map((row) => row.id)).size > 1);

console.log(JSON.stringify({
  duplicateSlugs: groupBy("slug"),
  duplicateNormalizedNames: groupBy("key"),
  duplicateAliases,
}, null, 2));
