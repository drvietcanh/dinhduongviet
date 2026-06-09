import fs from 'fs';

const files = [
  'src/data/nutrition.ts',
  'src/data/foods-extra1.ts',
  'src/data/foods-extra2.ts',
  'src/data/foods-extra3.ts',
  'src/data/foods-extra4.ts',
  'src/data/foods-extra5.ts',
  'src/data/foods-extra6.ts',
  'src/data/foods-extra7.ts',
  'src/data/bulk-catalog.ts',
];

const ids = new Set();
for (const f of files) {
  let content;
  try {
    content = fs.readFileSync(f, 'utf8');
  } catch { continue; }
  const matches = content.matchAll(/id:\s+"([^"]+)"/g);
  for (const m of matches) {
    if (m[1] !== 'com-trang' && m[1] !== 'recipe-estimate-v1' && !m[1].includes('bulk-'))
      ids.add(m[1]);
  }
}
console.log([...ids].sort().join('\n'));
