import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const pagesRoot = path.join(root, "src", "pages");
const publicRoot = path.join(root, "public");

async function filesUnder(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await filesUnder(file));
    else out.push(file);
  }
  return out;
}

const pages = (await filesUnder(pagesRoot)).filter((file) => file.endsWith(".astro"));
const missingLayout = [];
for (const file of pages) {
  const source = await readFile(file, "utf8");
  // ArticleLayout is the shared article shell and itself renders BaseLayout.
  if (!/<(?:BaseLayout|ArticleLayout)\b/.test(source)) missingLayout.push(path.relative(root, file));
}

const config = await readFile(path.join(root, "astro.config.mjs"), "utf8");
const sitemapOk = /@astrojs\/sitemap/.test(config) && /site\s*:\s*["']https:\/\//.test(config);
const publicFiles = await filesUnder(publicRoot);
const largeRaster = [];
for (const file of publicFiles) {
  if (!/\.(?:png|jpe?g)$/i.test(file)) continue;
  const size = (await stat(file)).size;
  if (size > 500 * 1024) largeRaster.push({ file: path.relative(root, file), bytes: size });
}

if (missingLayout.length || !sitemapOk || largeRaster.length) {
  console.error(`[qa:seo] FAIL: pages=${pages.length}, missingLayout=${missingLayout.length}, sitemap=${sitemapOk}, largeRaster=${largeRaster.length}`);
  for (const file of missingLayout) console.error(`  missing layout: ${file}`);
  for (const item of largeRaster) console.error(`  large raster: ${item.file} (${item.bytes} bytes)`);
  process.exit(1);
}

console.log(`[qa:seo] PASS: ${pages.length} pages wrapped by BaseLayout/ArticleLayout; sitemap configured; no raster image >500KB.`);
