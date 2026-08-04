# Session Handoff - 2026-07-29

## Muc tieu cua phien nay

Phien nay tap trung vao 2 cum viec chinh:

1. Chot dot ra soat noi dung y khoa co nguy co cao, sua cac cau dien dat qua muc hoac mang tinh co che/nhan qua khong du than trong.
2. Ra soat toan bo app truoc deploy, nhung giu pham vi hep: khong mo rong them tinh nang, khong lan sang refactor khong can thiet.

## Nhanh gon ket qua cuoi phien

- Local QA hien tai sach.
- Khong con red flag y khoa theo scanner tu dong.
- `npx astro check` pass.
- `npm run qa` pass.
- `npm run test:tools` pass.
- `npm run build` pass.
- Worktree sach.
- Chua thuc hien deploy that su.

## Branch va trang thai git

- Branch hien tai: `data-qa-olive-metadata-followup-v1`
- HEAD cuoi phien: `1f263ea`
- `git status --short --branch`: worktree sach

## Cac commit da tao trong cum sua noi dung y khoa

Thu tu moi nhat truoc:

1. `1f263ea` - `fix: refine digestive and endocrine mechanisms`
2. `f075095` - `fix: soften causal nutrition language`
3. `9697190` - `fix: qualify lipid and metabolic mechanisms`
4. `72ed2a8` - `fix: temper metabolic and allergy claims`
5. `66859c6` - `fix: soften hormone and autophagy claims`
6. `ffc257a` - `fix: moderate immune and inflammation guidance`
7. `09c3176` - `fix: temper exaggerated clinical mechanisms`
8. `d255c85` - `fix: qualify anti-inflammatory and gout guidance`
9. `326fb3c` - `fix: soften mechanistic nutrition wording`

## Pham vi sua noi dung trong phien

Muc tieu cua cac commit tren la:

- Loai bo hoac lam mem cac cum tu de gay hieu nham theo kieu "chua khoi", "dao nguoc", "giam chac chan", "tai tao", "thanh loc", "detox", "thuc pham gay thay doi hormone/co che benh hoc mot cach qua muc".
- Chuyen cach viet sang van phong canh bao, dieu kien hoa, va phu hop hon voi giao duc dinh duong.
- Giu nguyen y nghia huong dan thuc hanh cho nguoi doc, nhung tranh tuyen bo co tinh dieu tri hoac quan he nhan qua qua manh.

## Mot so file noi dung da duoc sua o cum cuoi

Day la nhom file gan nhat duoc cham vao trong cum commit cuoi:

- `src/data/articles/lactose.md`
- `src/data/articles/cuong-can-giap.md`
- `src/data/articles/dinh-duong-viem-mui-di-ung.md`
- `src/data/articles/suy-giap.md`
- `src/data/articles/tieu-chay-mat-nuoc.md`
- `src/data/articles/tieu-chay-o-nguoi-lon.md`
- `src/data/articles/tin-don-nhin-doi-ung-thu.md`

Ngoai ra, cac commit truoc trong cung phien da sua nhieu bai khac lien quan toi:

- viem khop dang thap
- ung thu
- an toan thuc pham
- com trang va tieu duong
- tang chieu cao tuoi day thi
- ca kip truc
- gout
- viem, lipid, di ung, no i tiet, autophagy, mien dich

Neu can tra lai chi tiet exact diff, bat dau bang:

- `git show 1f263ea`
- `git show f075095`
- `git show 9697190`

## Cac buoc kiem tra da chay thanh cong

### 1. Kiem tra cau truc Astro / TypeScript

Da chay:

```powershell
npx astro check
```

Ket qua:

- `398 files`
- `0 errors`
- `0 warnings`
- `0 hints`

### 2. QA noi bo du lieu va internal links

Da chay:

```powershell
npm run qa
```

Ket qua:

- Pass
- `duplicate data keys, placeholders, and internal links are OK`

### 3. Test bo cong cu dinh duong

Da chay:

```powershell
npm run test:tools
```

Tat ca deu pass:

- protein requirement
- carbohydrate calculator
- glycemic load calculator
- water intake calculator
- vietnamese meal assessment
- nutrition goal planner

### 4. Quet red flag y khoa

Da chay:

```powershell
node .agents/skills/medical-fact-checker/scripts/scanner.mjs src/pages
```

Ket qua:

- `AN TOAN: Khong tim thay bai viet nao chua tu khoa nhay cam (Red Flags).`

### 5. Quet debug/deploy smell

Da chay:

```powershell
rg -n "console\.log" src public
```

Ket qua:

- Khong co `console.log` trong `src` va `public`

Luu y:

- Co nhieu `console.log` trong `scripts/`, nhung do la script test/build/report noi bo, khong phai debug leak trong app runtime.

### 6. Build production

Da chay:

```powershell
npm run build
```

Ket qua build cuoi cung:

- Pass
- Tao `1595` pages
- Sitemap duoc tao
- PWA generate xong
- `Public and dist API data are up to date.`

So lieu build dang nho:

- Export `526 foods`
- Export `45,759 nutrient records`

## Luu y quan trong ve build log

Co mot lan build bi vo voi loi `EPIPE` sau gan 4 phut. Sau khi kiem tra lai, day rat co kha nang la loi do terminal/pipe output bi ngat, khong phai loi logic cua app.

Build xac minh lai bang cach tee output vao file va giam ap luc stdout da thanh cong hoan toan.

Y nghia:

- Khong nen coi `EPIPE` lan do la blocker deploy cua app.
- Neu can chay lai build trong phien sau, uu tien cach ghi log ra file hoac gioi han output de tranh loi pipe gia.

## Cau hinh deploy dang thay trong repo

File cau hinh lien quan:

- [astro.config.mjs](D:/openclaw/apps/dinh-duong-viet/astro.config.mjs)

Diem dang chu y:

- `site: "https://dinh-duong-viet.pages.dev"`
- `output: "static"`
- Da bat `@astrojs/sitemap`
- Da bat `@vite-pwa/astro`

Nhan dinh:

- App duoc cau hinh theo huong static site.
- Hosting dich den co kha nang la Cloudflare Pages do `pages.dev`.
- Trong repo hien tai chua thay file deploy provider dac thu nhu `netlify.toml`, `vercel.json`, `wrangler.toml`, `firebase.json`.

## Trang thai "san sang deploy" o cuoi phien

Co the ket luan:

- App da san sang ve mat local build va local QA.
- Chua the ket luan "da deploy" vi phien nay chua thuc hien deploy that.
- Chua xac minh production URL dang phuc vu dung ban moi nhat.

## Nhung gi KHONG nen lam o phien sau neu muon giu pham vi hep

- Khong mo rong them tinh nang UI/UX.
- Khong refactor scripts build/test chi vi dep code.
- Khong mo rong audit noi dung y khoa sang cac bai khac neu scanner va grep van sach.
- Khong doi wording hang loat nua neu khong co bang chung cu the can sua.

## Diem vao viec tot nhat cho phien sau

Neu muc tieu la dua len production, thu tu de xuat:

1. Xac dinh chinh xac kenh deploy dang dung hien nay.
2. Kiem tra xem co pipeline CI/CD, dashboard Pages, hay deploy thu cong.
3. Chay deploy that.
4. Mo URL production va smoke test:
   - trang chu
   - `/tim-kiem/`
   - `/thuc-pham/`
   - 1 vai trang bai viet
   - 1 vai trang thuc pham
   - manifest/PWA/sitemap neu can
5. Xac nhan production dang phuc vu commit moi nhat hoac ban build moi nhat.

## Lenh nen dung de tiep tuc o phien sau

```powershell
git status --short --branch
git rev-parse --short HEAD
npx astro check
npm run qa
npm run test:tools
$env:CI='1'; npm run build 2>&1 | Tee-Object -FilePath build-predeploy.log | Select-Object -Last 80
```

Neu can doi chieu lai scanner y khoa:

```powershell
node .agents/skills/medical-fact-checker/scripts/scanner.mjs src/pages
```

## Ket luan handoff

Phien nay da chot xong cum sua noi dung y khoa muc tieu hep va da dua app ve trang thai local pre-deploy on dinh. Diem dung hop ly nhat cho phien sau la buoc xac minh quy trinh hosting/deploy va day ban build len moi truong production.
