import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "src", "data");
const files = fs.readdirSync(dataDir).filter((file) => /^(recipes|foods).*\.ts$/.test(file) || file === "nutrition.ts");
const nutritionSource = fs.readFileSync(path.join(dataDir, "nutrition.ts"), "utf8");
const excludedBlock = nutritionSource.match(/const duplicateFoodSlugsExcludedFromLibrary = new Set\(\[([\s\S]*?)\]\);/);
const excludedFoodSlugs = new Set([...(excludedBlock?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((match) => match[1]));
const recipeDeclarationOffset = nutritionSource.indexOf("export const recipes: Recipe[]");

const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
const slugify = (value) => normalize(value).replace(/ /g, "-");
const rows = [];

for (const file of files) {
  const source = fs.readFileSync(path.join(dataDir, file), "utf8");
  for (const match of source.matchAll(/id:\s*"([^"]+)"\s*,\s*slug:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"[\s\S]{0,180}?aliases:\s*\[([^\]]*)\]/g)) {
    const aliases = [...match[4].matchAll(/"([^"]+)"/g)].map((alias) => alias[1]);
    const kind = file.startsWith("foods") || (file === "nutrition.ts" && (recipeDeclarationOffset < 0 || match.index < recipeDeclarationOffset)) ? "food" : "recipe";
    if (kind === "food" && excludedFoodSlugs.has(match[2])) continue;
    rows.push({ file, id: match[1], slug: match[2], name: match[3], key: normalize(match[3]), aliases, kind });
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
const duplicateAliases = [...aliasGroups.entries()].flatMap(([key, group]) => {
  const byKind = new Map();
  for (const row of group) (byKind.get(row.kind) ?? byKind.set(row.kind, []).get(row.kind)).push(row);
  return [...byKind.entries()]
    .map(([kind, matches]) => [kind, [...new Map(matches.map((row) => [row.id, row])).values()]])
    .filter(([, matches]) => matches.length > 1)
    .map(([kind, matches]) => [key, matches.map((row) => ({ ...row, kind }))]);
});
const crossKindAliasCollisions = [...aliasGroups.entries()]
  .filter(([, group]) => new Set(group.map((row) => row.kind)).size > 1)
  .map(([key, group]) => [key, [...new Map(group.map((row) => [`${row.kind}:${row.id}`, row])).values()]]);
const foodRowsByName = new Map(rows.filter((row) => row.kind === "food").map((row) => [row.key, row]));
const freshNameCandidates = rows
  .filter((row) => row.kind === "food" && row.key.endsWith(" tuoi"))
  .flatMap((fresh) => {
    const base = foodRowsByName.get(fresh.key.slice(0, -" tuoi".length));
    return base && base.id !== fresh.id ? [{ base, fresh }] : [];
  });

console.log(JSON.stringify({
  duplicateSlugs: groupBy("slug"),
  duplicateNormalizedNames: groupBy("key"),
  duplicateAliases,
  crossKindAliasCollisions,
  freshNameCandidates,
}, null, 2));
