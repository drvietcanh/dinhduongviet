import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const data = JSON.parse(await readFile(join(process.cwd(), "public", "api", "vietnamese-nutrition-needs-2026.json"), "utf8"));

assert.equal(data.ages.length, 15);
assert.equal(data.physiology.length, 5);
assert.equal(data.core.length, 129);
assert.equal(data.profiles.length, 69);
assert.match(data.sourceUrl, /viendinhduong\.vn/);

const coreKeys = data.core.map((record) => record.slice(0, 4).join("|"));
assert.equal(new Set(coreKeys).size, coreKeys.length, "duplicate core lookup key");
const profileKeys = data.profiles.map((record) => record[0].join("|"));
assert.equal(new Set(profileKeys).size, profileKeys.length, "duplicate nutrient profile key");

for (const record of data.core) {
  assert.equal(record.length, 5);
  assert.equal(record[4].length, 4);
  for (const row of record[4]) assert.equal(row.length, 3);
}
for (const record of data.profiles) {
  assert.equal(record.length, 2);
  assert.equal(record[0].length, 3);
  assert.equal(record[1].length, 12);
  for (const row of record[1]) assert.equal(row.length, 3);
}

assert.ok(data.core.some((record) => record[3] === "women-in-the-third-trimester-of-pregnancy"));
assert.ok(data.core.some((record) => record[3] === "breastfeeding-mothers"));
console.log("Vietnamese nutrition needs snapshot tests passed.");
