// Batch-convert knowledge articles to use ArticleLayout with metadata registry
// v2 - handles CRLF, BOM, <section> wrappers, all variants
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesDir = path.resolve(__dirname, "../src/pages/kien-thuc-dinh-duong");
const articlesMetaPath = path.resolve(__dirname, "../src/data/articles.ts");

// Read article registry slugs
const registryContent = fs.readFileSync(articlesMetaPath, "utf-8");
const slugMatches = [...registryContent.matchAll(/slug:\s+"([^"]+)"/g)];
const slugSet = new Set(slugMatches.map(m => m[1]));
console.log(`Found ${slugSet.size} slugs in registry`);

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".astro") && f !== "index.astro");

let converted = 0;
let skipped = 0;
let errors = [];

for (const file of files) {
  const filePath = path.join(articlesDir, file);
  const slug = file.replace(".astro", "");
  
  if (!slugSet.has(slug)) {
    console.log(`SKIP ${slug}: not in registry`);
    skipped++;
    continue;
  }

  // Read with BOM stripping
  let raw = fs.readFileSync(filePath);
  // Strip BOM if present
  if (raw[0] === 0xEF && raw[1] === 0xBB && raw[2] === 0xBF) {
    raw = raw.slice(3);
  }
  const content = raw.toString("utf-8");

  // Check if already converted
  if (content.includes("ArticleLayout")) {
    console.log(`SKIP ${slug}: already converted`);
    skipped++;
    continue;
  }

  // Parse frontmatter: handle both \n and \r\n
  const fmMatch = content.match(/^---[\r\n]([\s\S]*?)[\r\n]---[\r\n]/);
  if (!fmMatch) {
    errors.push(`${slug}: no frontmatter`);
    console.log(`  --> content starts: ${JSON.stringify(content.slice(0,40))}`);
    continue;
  }
  const frontmatter = fmMatch[1];
  let body = content.slice(fmMatch[0].length);

  // Check for extra imports in frontmatter (like DietMealPlan)
  const extraImports = frontmatter
    .split(/\r?\n/)
    .filter(l => l.startsWith("import ") && !l.includes("BaseLayout"))
    .join("\n");

  // New frontmatter
  const newFm = `import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
${extraImports ? extraImports + "\n" : ""}const art = articleBySlug["${slug}"];
if (!art) throw new Error("Article not found: ${slug}");`;

  // Clean body
  let clean = body.trim();

  // Remove BaseLayout wrapper (any variant)
  clean = clean.replace(/^<BaseLayout[^>]*>\s*/, "");
  clean = clean.replace(/<\/BaseLayout>\s*$/, "");

  // Remove wrapping <section>...</section> if it wraps everything
  // (some articles have <section> around header content)
  // Remove opening <section> tag
  clean = clean.replace(/^<section[^>]*>\s*/, "");
  // Only remove closing </section> if it's the LAST closing tag or near it
  const cleanNoSection = clean.replace(/<\/section>\s*$/, "");
  if (cleanNoSection !== clean) {
    clean = cleanNoSection;
  }

  // Remove badge spans
  clean = clean.replace(/<span class="badge">[^<]*<\/span>/g, "");

  // Remove first <h1>...</h1> (article title)
  clean = clean.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, "");

  // Remove first <p class="lead">...</p>
  clean = clean.replace(/<p class="lead"[^>]*>[\s\S]*?<\/p>/, "");

  // Remove <div class="article-wrapper"> and its matching close
  clean = clean.replace(/<div class="article-wrapper">\s*/, "");
  // From end, find last </div> - strip it if likely the wrapper close
  const trimmed = clean.trim();
  if (trimmed.endsWith("</div>")) {
    const lastDiv = trimmed.lastIndexOf("</div>");
    clean = trimmed.slice(0, lastDiv);
  }

  // Remove empty <div class="toc">...</div> templates (if any left without content)
  clean = clean.replace(/<div class="toc">[\s\S]*?<\/div>/, "");

  // Normalize CRLF to LF, collapse multiple blank lines
  clean = clean.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

  const newContent = `---
${newFm}
---

<ArticleLayout article={art}>
${clean}
</ArticleLayout>
`;

  fs.writeFileSync(filePath, newContent, "utf-8");
  console.log(`CONVERTED ${slug}`);
  converted++;
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped, ${errors.length} errors`);
if (errors.length) console.log("Errors:", errors.join(", "));
