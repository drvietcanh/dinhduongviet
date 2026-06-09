import fs from 'fs';
let content = fs.readFileSync('src/data/recipes-extra6.ts', 'utf8');

// We have duplicates IDs and slugs. The script will rename them.
// Read QA output: 
const fixes = [
  { from: '"sinh-to-bo"', to: '"sinh-to-bo-v2"' },
  { from: '"banh-tieu"', to: '"banh-tieu-chien"' },
  { from: '"banh-cuon"', to: '"banh-cuon-nhan-thit"' },
  { from: '"banh-khot"', to: '"banh-khot-vung-tau"' },
  { from: '"che-ba-ba"', to: '"che-ba-ba-moi"' },
  { from: '"che-dau-den"', to: '"che-dau-den-moi"' },
  { from: '"tra-chanh"', to: '"tra-chanh-tuoi"' },
  { from: '"goi-muc"', to: '"goi-muc-chua-ngot"' },
];

// Apply both id and slug for each
const slugs = [
  { from: '"sinh-to-bo"', to: '"sinh-to-bo-v2"' },
  { from: '"banh-tieu"', to: '"banh-tieu-chien"' },
  { from: '"banh-cuon"', to: '"banh-cuon-nhan-thit"' },
  { from: '"banh-khot"', to: '"banh-khot-vung-tau"' },
  { from: '"che-ba-ba"', to: '"che-ba-ba-moi"' },
  { from: '"che-dau-den"', to: '"che-dau-den-moi"' },
  { from: '"tra-chanh"', to: '"tra-chanh-tuoi"' },
  { from: '"goi-muc"', to: '"goi-muc-chua-ngot"' },
];

for (const f of fixes) {
  // match id followed by any compat slug in same recipe
  // Replace id: "old" with id: "new"
  content = content.split(`id: ${f.from}`).join(`id: ${f.to}`);
}

for (const s of slugs) {
  content = content.split(`slug: ${s.from}`).join(`slug: ${s.to}`);
}

fs.writeFileSync('src/data/recipes-extra6.ts', content, 'utf8');
console.log('Fixed all duplicates');
