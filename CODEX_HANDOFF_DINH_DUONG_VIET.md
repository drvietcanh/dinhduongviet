# Dinh dưỡng Việt — Handoff cho Codex

Cập nhật: Tue 2026-06-09 09:01 GMT+7  
Mục đích: gom toàn bộ bối cảnh kỹ thuật, cấu trúc, trạng thái, quy tắc và việc cần làm để Codex có thể tiếp tục ngay.

> Lưu ý: memory_search của OpenClaw đang tạm lỗi index metadata; nội dung này được tổng hợp từ MEMORY.md đã inject trong session + khảo sát trực tiếp thư mục dự án.

---

## 1) Đường dẫn và lệnh nhanh

- Root dự án: `D:\openclaw\apps\dinh-duong-viet\`
- Website production: `https://dinh-duong-viet.pages.dev`
- Framework: Astro static site
- Node hiện tại trong runtime OpenClaw: `v24.16.0`
- Python dùng trong script build: `C:\Python313\python.exe`

### Lệnh làm việc

```powershell
cd D:\openclaw\apps\dinh-duong-viet
npm install
npm run dev
npm run build
npm run qa
npm run preview
```

### Script package.json hiện tại

```json
{
  "dev": "astro dev --host 0.0.0.0",
  "prebuild": "C:\\Python313\\python.exe scripts/export_vietnam_json.py",
  "build": "npm run prebuild && astro build",
  "qa": "node scripts/qa.mjs",
  "preview": "astro preview --host 0.0.0.0"
}
```

---

## 2) Tóm tắt hiện trạng dự án

Dinh dưỡng Việt là website kiến thức dinh dưỡng tiếng Việt dạng static, tập trung vào:

- Bài kiến thức dinh dưỡng/bệnh mạn/lối sống.
- Công cụ tính toán dinh dưỡng, chỉ số sức khỏe, khẩu phần.
- Tra cứu thực phẩm Việt Nam.
- Tra cứu món ăn/công thức.
- Chuyên mục “Đừng tin ngay” để đính chính hiểu lầm dinh dưỡng phổ biến.

### Số liệu khảo sát hiện tại

- `src/pages`: 256 file `.astro`.
- Tổng trong `src`: 276 `.astro`, 25 `.ts`, 1 `.bak`.
- `src/data/articles.ts`: 196 slug, 196 unique slug.
- Công cụ trong `src/pages/cong-cu`: 38 tool page, chưa tính `index.astro`.
- Trang kiến thức trong `src/pages/kien-thuc-dinh-duong`: 195 page, chưa tính `index.astro`.
- Trang `/dung-tin-ngay`: 9 page, chưa tính `index.astro`.
- OG SVG trong `public/og`: 194 SVG.
- Public API:
  - `public/api/foods-full.json`: 717 item, 106 KB.
  - `public/api/foods-slim.json`: 683 item, 53.8 KB.
  - `public/api/search-index.json`: 1120 item, 217.8 KB.
  - `public/api/vietnam-foods.json`: 526 item, 429.7 KB.
  - `public/api/vietnam-nutrients.json`: 45,759 item, 3.47 MB.
  - `public/api/vn-crossref.json`: 201 key, 12.9 KB.

### Category trong `articles.ts`

- `category`:
  - `disease`: 88
  - `education`: 97
  - `guidelines`: 3
  - `special`: 8
- `displayCategory`:
  - `bai-viet`: 130
  - `dung-tin-ngay`: 19
  - `mon-an`: 20
  - `thuc-don`: 26
- `series`:
  - `dung-tin-ngay`: 19
- `specialty`:
  - `dinh-duong-tong-quat`: 52
  - `noi-tiet`: 34
  - `tieu-hoa`: 34
  - `tim-mach`: 17
  - `phu-nu-nhi`: 16
  - `co-xuong-khop`: 9
  - `huyet-hoc`: 9
  - `than-kinh`: 6
  - `ho-hap`: 5
  - `than-tiet-nieu`: 5
  - `ung-thu`: 5
  - `da-lieu`: 4

---

## 3) Cấu hình chính

### `astro.config.mjs`

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dinh-duong-viet.pages.dev",
  output: "static",
  vite: {
    build: {
      cssMinify: false
    }
  }
});
```

### Dependencies chính

- `astro ^5.16.4`
- `@astrojs/check ^0.9.4`
- `typescript ^5.9.3`
- `glob ^13.0.6`
- `marked ^18.0.4`

---

## 4) Cấu trúc thư mục quan trọng

```text
D:\openclaw\apps\dinh-duong-viet\
├─ astro.config.mjs
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ README.md
├─ src\
│  ├─ components\
│  ├─ data\
│  ├─ layouts\
│  ├─ lib\
│  └─ pages\
├─ public\
│  ├─ api\
│  ├─ fonts\
│  ├─ icons\
│  ├─ og\
│  ├─ ingredient-map.json
│  ├─ logo.svg
│  └─ manifest.json
├─ scripts\
├─ dist\                 # output build hiện có
├─ node_modules\
├─ test-results\
└─ nhiều file log/audit tạm
```

### File/layout cốt lõi

- `src/layouts/BaseLayout.astro`
  - Shell chung toàn site.
  - Chứa style/global layout, header/nav/footer, SEO base, AutoSearch integration.
- `src/layouts/ArticleLayout.astro`
  - Layout cho bài viết kiến thức.
  - Render metadata, nguồn, nội dung, công cụ liên quan, chuyên khoa/liên kết.
- `src/data/articles.ts`
  - File dữ liệu bài viết quan trọng nhất.
  - Chứa interface, category, source org, articles array.
  - Không nên rewrite bằng script Python đại trà vì dễ hỏng cấu trúc.
- `src/data/nutrition.ts`
  - Dữ liệu thực phẩm/nutrition core.
- `src/lib/nutrition.ts`, `src/lib/vietnam-nutrition.ts`
  - Helper/logic dinh dưỡng.

### Components quan trọng

- `AutoSearch.astro`: tìm kiếm nhanh toàn site, lazy load index.
- `ArticleCard.astro`: card bài viết.
- `FoodCard.astro`, `FoodIcon.astro`: hiển thị thực phẩm.
- `DietMealPlan.astro`, `DRIWidget.astro`, `GlycemicLoad.astro`, `MacroPie.astro`, `VNHealthScore.astro`: widget/công cụ dinh dưỡng.
- `Fonts.astro`: self-host font.
- `HealthAlert.astro`, `NutritionChart.astro`, `NutritionBars.astro`, `NutritionTable.astro`, `PortionCalculator.astro`.

---

## 5) Các tuyến trang chính

### Trang cấp cao

- `/` → `src/pages/index.astro`
- `/kien-thuc-dinh-duong/` → index chuyên mục kiến thức
- `/cong-cu/` → index công cụ
- `/thuc-pham/` → tra cứu thực phẩm
- `/thuc-pham/[slug]/` → detail thực phẩm
- `/mon-an/` → danh sách món ăn
- `/mon-an/[slug]/` → detail món ăn
- `/dung-tin-ngay/` → chuyên mục đính chính hiểu lầm
- `/hoi-dap/`
- `/ban-do-benh/`
- `/tim-kiem/`
- `/thong-ke/`
- `/phuong-phap/`
- `/sitemap-index.xml`
- `/404`

### Công cụ hiện có trong `/cong-cu/`

38 tool pages, gồm:

- `bmi`
- `chi-so-gi`
- `tinh-carb`
- `tinh-gl-bua-an`
- `tinh-nhu-cau-dam`
- `tinh-calo-tieu-thu`
- `muc-tieu-can-nang`
- `ti-le-mo-co-the`
- `nuoc-uong`
- `nuoc-muoi-mon-an`
- `duong-do-uong`
- `doi-don-vi`
- `khau-phan-don-gian`
- `khau-phan-viet-clinical`
- `ke-hoach-bua-an`
- `lap-thuc-don-tuan`
- `danh-sach-di-cho`
- `dia-an-lanh-manh`
- `checklist-an-uong`
- `dinh-duong-thai-ky`
- `nhu-cau-dinh-duong-tre-em`
- `theo-doi-duong-huyet`
- `theo-doi-suc-khoe`
- `nhat-ky`
- `so-sanh-thuc-pham`
- `so-sanh-bua-an`
- `tim-mon-tu-nguyen-lieu`
- `loc-thuc-pham`
- `tra-cuu-thuc-pham-viet`
- `them-thuc-pham-dong-goi`
- `tuong-tac-thuoc`
- `tuong-tac-thuoc-thuc-pham`
- `bang-xep-hang`
- Và một số stub/page nhỏ: `danh-gia-bua-an`, `muc-tieu-dinh-duong`, `so-sanh`, `tinh-macro`, `tinh-nang-luong`.

---

## 6) Dữ liệu public/API

Các file public/API được tạo/dùng để giảm tải HTML và phục vụ tìm kiếm/tra cứu client-side:

```text
public/api/foods-full.json        # 717 item, full food index
public/api/foods-slim.json        # 683 item, slim food index
public/api/search-index.json      # 1120 item, AutoSearch
public/api/vietnam-foods.json     # 526 item food source
public/api/vietnam-nutrients.json # 45,759 item nutrient compact/lazy data
public/api/vn-crossref.json       # cross-reference 201 key
```

### Tối ưu đã làm

- Google Fonts đã self-host ở `public/fonts/`.
- Search index lazy load trên idle/focus.
- Nutrients JSON đã giảm từ khoảng 14.2 MB xuống 3.4 MB dạng compact array và lazy load.
- Food index HTML giảm từ khoảng 835 KB xuống 33 KB bằng client-render từ JSON.
- Icon PNG tối ưu/resized.
- OG image là SVG, không cần satori/sharp.

---

## 7) Script quan trọng

### Script nên biết/dùng lại

- `scripts/export_vietnam_json.py`
  - Chạy trong `prebuild`.
  - Xuất dữ liệu Việt Nam sang JSON public.
- `scripts/qa.mjs`
  - QA internal links / sitemap / file output.
  - Hiện đang fail vì một số broken internal link (xem mục 10).
- `scripts/build-search-index.py`
  - Build `public/api/search-index.json`.
- `scripts/build-foods-full.py`
  - Tạo/extract `public/api/foods-full.json`.
- `scripts/gen-og-svgs.py`
  - Tạo OG SVG cho bài viết.
- `scripts/gen-sitemap.py`
  - Tạo sitemap nếu cần.
- `scripts/download-fonts.py`
  - Tải/self-host font.
- `scripts/compact-nutrients.py`
  - Compact dữ liệu nutrients.
- `scripts/lazy-load-data.py`
  - Hỗ trợ lazy load data.
- `scripts/check-internal-links.py`, `scripts/check-search-idx.py`, `scripts/check-og-pkgs.py`, `scripts/check-mobile.py`
  - Kiểm tra từng mảng.

### Script cảnh báo / không nên dùng bừa

- `scripts/del-entry.py`: KHÔNG dùng trên `articles.ts`, từng được ghi nhớ là có thể làm hỏng cấu trúc.
- Các script kiểu rebuild/reclassify/batch modify (`rebuild-articles.py`, `rebuild-clean.py`, `fix-reclassify-and-add.py`, `standardize-lifestyle.py`, v.v.) chỉ dùng sau khi đọc kỹ, backup trước, vì nhiều script là tạm thời trong quá trình sửa lỗi.
- Không dùng Python rewrite toàn bộ `articles.ts` nếu không thật cần; ưu tiên edit thủ công/targeted.

---

## 8) Quy ước nội dung và kỹ thuật

### Quy ước bài viết

- Ngôn ngữ: tiếng Việt.
- Nội dung cần thực dụng cho người Việt.
- Ưu tiên nguồn: WHO, CDC, FDA, EFSA, Bộ Y tế, hội chuyên ngành, guideline, review/systematic review/meta-analysis, văn bản pháp luật.
- Báo chí chỉ dùng làm bối cảnh, không làm nguồn y khoa chính.
- Không đưa khuyến cáo y khoa tuyệt đối nếu nguồn chỉ ủng hộ mức độ vừa phải.
- Không bịa nguồn.
- Bài backbone thường theo template 9 phần; bài lifestyle/analysis khoảng 6 phần.
- Tất cả article cần có content thật, tối thiểu khoảng 200 từ.

### Quy ước slug

- Article slug: lowercase hyphenated, ví dụ `dinh-duong-{disease}`.
- Đừng tin ngay: slug dạng `dung-tin-ngay-{topic}`.
- Lưu ý folder `/dung-tin-ngay/` đã có prefix rồi, nhưng hiện một số slug/page vẫn dùng prefix đầy đủ.

### Quy ước Astro/parser

- Ký tự `<` trong text content phải escape `&lt;` hoặc tránh dùng trực tiếp; Astro fragment parsing dễ lỗi.
- Khi sửa lỗi build trên PowerShell, stderr có thể bị truncation; nên redirect/tee log ra file.

### Design pattern tool pages

- `.section-label` + `.sl-num` cho heading section có số.
- `.form-card` / `.form-grid` cho form input.
- `.input-wrap` kèm suffix đơn vị.
- `.btn-calc` gradient button.
- `.card-plain` result card.
- `.safety-note` flex icon + text.
- Dark mode compatible.

---

## 9) Trạng thái build/deploy

Theo memory trước đó:

- Build từng đạt: 1381 pages, 0 errors, dist khoảng 50.6 MB.
- Cloudflare Pages là đích deploy.
- Chưa xác nhận deploy production sau các lần chỉnh gần đây.

Trong khảo sát hiện tại:

- `dist\` đang tồn tại.
- Có nhiều file log build/audit ở root do các vòng sửa trước.
- `npm run qa` hiện FAIL vì broken internal links (chi tiết mục 10).

Khuyến nghị Codex:

1. Trước khi sửa: chạy `npm run build` để xác nhận build còn xanh.
2. Chạy `npm run qa` và sửa broken internal links.
3. Sau khi sửa link: chạy lại `npm run build && npm run qa`.
4. Nếu deploy: dùng Cloudflare Pages theo cấu hình hiện hành, không tự ý đổi domain/site config.

---

## 10) QA hiện tại — lỗi cần sửa trước

Lệnh chạy:

```powershell
npm -C D:\openclaw\apps\dinh-duong-viet run qa 2>&1 | Tee-Object -FilePath D:\openclaw\apps\dinh-duong-viet\qa-handoff.txt
```

Kết quả: QA failed vì broken internal link. Log đã lưu tại:

```text
D:\openclaw\apps\dinh-duong-viet\qa-handoff.txt
```

### Nhóm lỗi chính

#### 1) Link công cụ sai slug

Nhiều trang link tới:

```text
/cong-cu/tinh-glucozo-dam
```

Nhưng tool thực tế có vẻ là:

```text
/cong-cu/tinh-nhu-cau-dam
```

Hoặc nếu ý là glucose/đạm thì cần xác định lại. Nên search toàn bộ:

```powershell
Select-String -Path D:\openclaw\apps\dinh-duong-viet\src\**\*.astro -Pattern '/cong-cu/tinh-glucozo-dam'
```

và thay bằng route đúng.

#### 2) Link có dấu trong slug

Một số trang link tới:

```text
/cong-cu/theo-doi-duong-huyết
```

Route thực tế:

```text
/cong-cu/theo-doi-duong-huyet
```

Cần replace dấu `huyết` → `huyet` trong href.

#### 3) Link `/dung-tin-ngay/` trỏ nhầm các bài cảnh báo

Index `/dung-tin-ngay/` và `/kien-thuc-dinh-duong/index` đang link tới các slug như:

```text
/dung-tin-ngay/canh-bao-hieu-lam-com-tieu-duong
/dung-tin-ngay/canh-bao-hieu-lam-gout-dam
/dung-tin-ngay/canh-bao-hieu-lam-suy-than-kieng
/dung-tin-ngay/canh-bao-hieu-lam-gan-bo-gan
/dung-tin-ngay/canh-bao-hieu-lam-nuoc-ep-trai-cay
/dung-tin-ngay/canh-bao-hieu-lam-an-nhat-muoi
/dung-tin-ngay/canh-bao-hieu-lam-sua-hat-dam
/dung-tin-ngay/canh-bao-hieu-lam-nuoc-ham-xuong
/dung-tin-ngay/canh-bao-hieu-lam-thuc-pham-chuc-nang
/dung-tin-ngay/canh-bao-hieu-lam-giam-can-nhanh
```

Các page thực tế đang ở:

```text
/kien-thuc-dinh-duong/canh-bao-hieu-lam-...
```

Hoặc cần tạo page trong `src/pages/dung-tin-ngay/` tương ứng. Chọn một hướng nhất quán:

- Nếu đây là bài “Đừng tin ngay” thật: tạo/move page vào `/dung-tin-ngay/`.
- Nếu đang là bài kiến thức/cảnh báo chung: sửa link về `/kien-thuc-dinh-duong/...`.

#### 4) Link thực phẩm thiếu page/slug mismatch

Broken examples:

```text
/thuc-pham/gao-lut
/thuc-pham/qua-ocho
/thuc-pham/pho-mai
/thuc-pham/ca-chem
/thuc-pham/thit-ga-ta
```

Cần đối chiếu dữ liệu `foods-full.json`/route thực tế để:

- Sửa slug đúng, hoặc
- Bổ sung item/page thực phẩm, hoặc
- Xóa link nếu không có dữ liệu.

---

## 11) Cách Codex nên tiếp tục an toàn

### Bước 1 — tạo baseline

```powershell
cd D:\openclaw\apps\dinh-duong-viet
npm run build 2>&1 | Tee-Object -FilePath build-codex-baseline.txt
npm run qa 2>&1 | Tee-Object -FilePath qa-codex-baseline.txt
```

### Bước 2 — sửa broken links bằng search targeted

Ưu tiên sửa trong source Astro/data, không sửa trong `dist`.

Search lỗi cụ thể:

```powershell
Select-String -Path .\src\**\*.astro,.\src\**\*.ts -Pattern 'tinh-glucozo-dam','theo-doi-duong-huyết','/dung-tin-ngay/canh-bao','/thuc-pham/gao-lut','/thuc-pham/qua-ocho','/thuc-pham/pho-mai','/thuc-pham/ca-chem','/thuc-pham/thit-ga-ta'
```

### Bước 3 — rebuild derived files nếu cần

Sau khi sửa article/page/data:

```powershell
C:\Python313\python.exe scripts/build-search-index.py
C:\Python313\python.exe scripts/gen-og-svgs.py
npm run build
npm run qa
```

Chỉ chạy `gen-og-svgs.py` khi sửa title/description metadata ảnh hưởng OG.

### Bước 4 — kiểm mobile/performance

Sau khi QA xanh:

```powershell
C:\Python313\python.exe scripts/check-mobile.py
C:\Python313\python.exe scripts/check-search-idx.py
```

Nếu có dev server:

```powershell
npm run dev
# mở http://localhost:4321 hoặc URL Astro báo
```

---

## 12) Những việc còn lại từ memory

- Mobile real-world test.
- Deploy lên Cloudflare Pages.
- Thêm nhiều bài myth/“Đừng tin ngay”.
- Kiểm tra/fix `ArticleLayout` phần `.map()` cho “Công cụ liên quan” nếu esbuild choke.
- Lazy load images nếu sau này thêm ảnh trong articles.

---

## 13) Ghi chú về file/log tạm

Root có rất nhiều log/script tạm từ các vòng sửa trước:

- `build-*.txt`, `build*.log`, `err*.txt`, `stderr.txt`, `stdout.txt`, `audit-latest.txt`, `site-audit.txt`, v.v.
- Các file `_fix-*.mjs`, `_check-*.mjs`, `_find-*.mjs` ở root.

Không nên xóa ngay nếu chưa backup vì có thể chứa dấu vết sửa lỗi. Nếu cần dọn:

1. Tạo thư mục `archive/logs-YYYYMMDD/`.
2. Move log vào archive, không xóa cứng.
3. Không move `package.json`, `astro.config.mjs`, `tsconfig.json`, `README.md`, `src`, `public`, `scripts`, `data`, `lib`, `layouts`, `pages` nếu chưa hiểu vì có một số folder ngoài `src` có thể là legacy/staging.

---

## 14) Checklist bàn giao cho Codex

Codex có thể bắt đầu bằng checklist này:

- [ ] Đọc file này.
- [ ] Chạy `npm run build` để lấy trạng thái build hiện tại.
- [ ] Chạy `npm run qa` để xác nhận danh sách broken links mới nhất.
- [ ] Sửa các link sai slug:
  - [ ] `/cong-cu/tinh-glucozo-dam`
  - [ ] `/cong-cu/theo-doi-duong-huyết`
  - [ ] `/dung-tin-ngay/canh-bao-...`
  - [ ] `/thuc-pham/gao-lut`, `/qua-ocho`, `/pho-mai`, `/ca-chem`, `/thit-ga-ta`
- [ ] Chạy lại `npm run build && npm run qa`.
- [ ] Nếu sửa metadata/search: rebuild `search-index.json`, OG SVG nếu cần.
- [ ] Mobile test.
- [ ] Chuẩn bị deploy Cloudflare Pages.

---

## 15) Quy tắc vàng

- Sửa source, không sửa `dist`.
- Không rewrite toàn bộ `articles.ts` bằng script tự động nếu không backup và diff kỹ.
- Không dùng `scripts/del-entry.py` trên `articles.ts`.
- Tránh ký tự `<` raw trong text content Astro.
- Sau mọi batch edit: build + qa.
- Dự án phục vụ nội dung sức khỏe: không thêm khuyến cáo y khoa mạnh nếu không có nguồn tốt.

---

## 16) Tiến trình gần nhất cần nhớ

### Đã hoàn tất

- Đã gom lớp phương pháp cho tool trong `src/data/tool-methodology.ts`.
- Đã thêm component hiển thị chung `src/components/ToolMethodologyCard.astro`.
- Đã gắn card phương pháp vào shell tool qua `src/layouts/BaseLayout.astro` để các trang `/cong-cu/*` dùng cùng một khung copy, công thức, lưu ý và nguồn.
- Đã siết copy các tool mỏng nhưng hay bị đọc quá tay:
  - `bmi`
  - `tinh-nang-luong`
  - `tinh-macro`
  - `tinh-calo-tieu-thu`
  - `ti-le-mo-co-the`
  - `muc-tieu-can-nang`
  - `muc-tieu-dinh-duong`
  - `duong-do-uong`
  - `nuoc-muoi-mon-an`
  - `dinh-duong-thai-ky`
  - `nhu-cau-dinh-duong-tre-em`
  - `theo-doi-suc-khoe`
  - `tuong-tac-thuoc`
  - `tuong-tac-thuoc-thuc-pham`
- Đã rà tiếp các trang chi tiết món ăn/thực phẩm để tránh logic lặp kiểu “bảng tĩnh + bộ đổi khẩu phần”:
  - giữ `PortionCalculator` làm lớp đổi khẩu phần
  - bỏ các bảng 100g bị lặp logic ở các trang chi tiết
  - gọt bớt inline style cũ, chuyển sang class để dễ đồng bộ v1
- Đã tiếp tục siết copy hiển thị của `/ban-do-benh` và `/theo-benh/[slug]` theo logic ưu tiên bệnh cảnh/đối tượng trước specialty.

### Trạng thái kiểm tra

- `npx astro check` đã pass ở vòng gần nhất trước khi chốt batch.
- Nếu phiên sau có thêm sửa copy/hành vi, vẫn nên chạy lại `npx astro check` ngay sau batch đó.

### Nên tiếp tục ở phiên sau

1. Rà nốt các tool còn mỏng để xem có entry phương pháp nào cần bổ sung cho đồng bộ v1.
2. Chuẩn hóa thêm câu chữ cảnh báo chung trên toàn bộ `/cong-cu/` nếu còn page nào lệch giọng.
3. Rà tiếp các trang món ăn/thực phẩm khác xem còn chỗ nào lặp logic giữa bảng tĩnh, khẩu phần và bảng dinh dưỡng.
4. Nếu mở rộng `ti-le-mo-co-the`, phải giữ rất chặt vì đây là vùng sai số cao.
