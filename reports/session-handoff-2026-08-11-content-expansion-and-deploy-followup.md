# Session Handoff - 2026-08-11 - Content Expansion And Deploy Follow-up

## 1. Boi canh chung

Du an: `D:\openclaw\apps\dinh-duong-viet`

Nhanh git hien tai:

- `data-qa-olive-metadata-followup-v1`

Muc tieu chinh cua chuoi phien gan day:

- Ra soat noi dung va bo cuc tong the cua web Dinh dưỡng Việt
- Chuan hoa thuat ngu y khoa tieng Viet
- Gop, sap xep lai cac cum benh va menu de de tim hon
- Bo sung bai viet dinh duong theo benh theo huong phong phu, thuc hanh, bot trung lap
- Dam bao build va deploy duoc len Cloudflare Pages

User da yeu cau tiep tuc trien khai theo tung cum benh cho den khi phong phu hon, sau do deploy lai.

## 2. Tinh hinh deploy / build hien tai

Tinh den cuoi phien nay:

- `npm run build` da chay thanh cong o local
- Quet skill `medical-fact-checker` cho thu muc bai viet moi: khong co red flags
- Cac loi build truoc day lien quan Python / sqlite / duong dan Windows / fallback da duoc xu ly o nhung phien truoc
- Cloudflare truoc do da co luc build loi, nhung gan day user bao "Da chay tot"

Luu y:

- Build full local thanh cong trong phien nay voi khoang hon 1600 trang static
- `public/api/search-index.json` duoc cap nhat sau build va da duoc dua vao commit

## 3. Cac commit gan day quan trong

Gan nhat:

1. `c781e92` - `Add practical deep-dive disease nutrition articles`
2. `9f5abe3` - `Expand practical content for chronic disease clusters`
3. `8f4d126` - `Deepen disease cluster content`
4. `3311e69` - `Polish remaining nutrition terminology`
5. `37a067b` - `Refine disease hubs and standardize terminology`
6. `ab32270` - `feat: improve navigation and disease discovery`

Y nghia:

- `ab32270`, `37a067b`, `3311e69`: tap trung vao menu, hub benh, thuat ngu, sap xep noi dung
- `8f4d126`, `9f5abe3`, `c781e92`: tap trung vao bo sung bai viet moi theo cum benh va huong thuc hanh

## 4. Viec da hoan tat trong chuoi phien nay

### 4.1. Chuan hoa thuat ngu

Da dieu chinh theo huong uu tien tu y khoa chuan:

- `tieu duong` -> uu tien `dai thao duong` khi noi benh ly
- `cao huyet ap` -> uu tien `tang huyet ap`
- Sap xep lai ten chuyen khoa va cum benh de nhat quan hon
- User tung neu y tuong gop `phau thuat` vao `ngoai khoa`; can tiep tuc ra soat nhet hon toan site neu chua xong triệt để

### 4.2. Toi uu hub / menu / disease map

Da co nhieu dot dieu chinh:

- Giam tinh roi cua menu
- Day manh `Ban do benh`
- Bo sung bai viet vao cac cum co lien quan
- Chinh lai cach hien thi de nguoi dung thay "bai nen tang" va "bai thuc hanh"

File lien quan da dong cham:

- `src/pages/ban-do-benh.astro`
- `src/data/disease-hubs.ts`
- `src/data/articles.ts`
- mot so file layout / nav o cac phien truoc

### 4.3. Bo sung bai viet moi o cac cum benh da lam trong nhung phien truoc

Da them cac bai thuc hanh / dao sau:

- `ckd-kali-phot-pho-muoi-thuc-hanh`
- `tang-huyet-ap-natri-an-trong-mon-viet`
- `ibs-an-ngoai-low-fodmap-kieu-viet`
- `hen-suyen-beo-phi-giam-can`

Va tiep tuc mo rong them o phien nay.

## 5. Viec da hoan tat trong phien ngay 2026-08-11

### 5.1. 4 bai moi vua duoc them

Da them 4 bai "deep-dive thuc hanh" theo dung yeu cau tiep tuc `1,2,3,4`:

1. [suy-tim-can-nang-muoi-dich.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/suy-tim-can-nang-muoi-dich.astro)
2. [xo-gan-co-truong-muoi-dich-dam.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/xo-gan-co-truong-muoi-dich-dam.astro)
3. [tien-dai-thao-duong-di-lam-ban-ron.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/tien-dai-thao-duong-di-lam-ban-ron.astro)
4. [nguoi-gia-an-it-mat-co-thuc-hanh.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/nguoi-gia-an-it-mat-co-thuc-hanh.astro)

Muc dich 4 bai nay:

- khong lap lai bai nen tang da co
- bo sung tinh huong thuc te, de ap dung
- tang do day noi dung cho 4 cum user da yeu cau:
  - suy tim / phu / can nang / muoi / dich
  - xo gan / co truong / muoi / dich / dam
  - tien dai thao duong o nguoi di lam ban ron
  - nguoi lon tuoi an it, sut co, mat co

### 5.2. Metadata va dieu huong da cap nhat

Da bo sung vao:

- [src/data/articles.ts](D:/openclaw/apps/dinh-duong-viet/src/data/articles.ts)
- [src/data/disease-hubs.ts](D:/openclaw/apps/dinh-duong-viet/src/data/disease-hubs.ts)
- [src/pages/ban-do-benh.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/ban-do-benh.astro)

Cu the:

- cum `dai-thao-duong` co them bai thuc hanh cho nguoi di lam ban ron
- cum `mo-mau / tim-mach / suy-tim` co them bai ve phu - tang can - muoi - dich
- cum `gan / xo-gan` co them 2 bai co lien ket ro hon den co truong
- cum `nguoi cao tuoi` co them bai thuc hanh ve an it va sut co

### 5.3. Search index da cap nhat

Sau build, file:

- `public/api/search-index.json`

da duoc update de nhan 4 bai moi trong tim kiem.

### 5.4. Kiem tra da chay

Da chay:

1. `node .agents/skills/medical-fact-checker/scripts/scanner.mjs src/pages/kien-thuc-dinh-duong`
2. `npm run build`

Ket qua:

- scanner: an toan, khong co red flags
- build: thanh cong

## 6. Nguon y khoa da tra cuu trong phien nay

Vi day la noi dung y khoa / dinh duong benh ly, da browse web de kiem chung.

### 6.1. Suy tim

Nguon da dung:

- HFSA patient guidance: `https://hfsa.org/managing-heart-failure`
- 2022 AHA/ACC/HFSA guideline:
  `https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063`

Diem chinh da rut ra:

- can buoi sang hang ngay
- bao bac si neu tang can nhanh
- muoi / natri la diem uu tien rat quan trong
- han che dich can ca the hoa, khong phai ai cung tu siet cung muc

### 6.2. Xo gan co co truong

Nguon da dung:

- AASLD Practice Guidance:
  `https://www.aasld.org/practice-guidelines/diagnosis-evaluation-and-management-ascites-spontaneous-bacterial-peritonitis`
- BSG/BASL / Gut guideline:
  `https://pmc.ncbi.nlm.nih.gov/articles/PMC7788190/`

Diem chinh:

- giam natri la nen tang
- khong phai ai co co truong cung can han che nuoc giong nhau
- khong nen tu bo dam mot cach may moc

### 6.3. Tien dai thao duong

Nguon da dung:

- CDC Lifestyle Change Program:
  `https://www.cdc.gov/diabetes/hcp/lifestyle-change-program/index.html`
- ADA Standards of Care:
  `https://diabetesjournals.org/care/article/49/Supplement_1/S50/163924/3-Prevention-or-Delay-of-Diabetes-and-Associated`

Diem chinh:

- giam 5-7% can nang co y nghia
- it nhat 150 phut/tuần van dong muc vua
- doi tuong di lam ban ron can uu tien sua dung diem gay nguy co nhieu nhat

### 6.4. Nguoi cao tuoi, sut co

Nguon da dung:

- ESPEN geriatrics guidance
- PROT-AGE study group

Diem chinh:

- nguoi cao tuoi thuong can du dam hon suy nghi thong thuong
- cach ap dung thuc te la chia nho bua, tang mat do dam, chinh texture mon an

## 7. Trang thai repo hien tai

Tinh den luc viet handoff nay:

- commit moi nhat da tao: `c781e92`
- khong co ghi nhan loi build dang mo

Can kiem tra lai trang thai git o phien sau de xac nhan file handoff nay co duoc commit hay khong.

## 8. Nhung file quan trong de doc tiep o phien sau

### Handoff cu can tham khao

- [session-handoff-2026-07-29-predeploy-and-clinical-audit.md](D:/openclaw/apps/dinh-duong-viet/reports/session-handoff-2026-07-29-predeploy-and-clinical-audit.md)

### File du lieu / dieu huong

- [src/data/articles.ts](D:/openclaw/apps/dinh-duong-viet/src/data/articles.ts)
- [src/data/disease-hubs.ts](D:/openclaw/apps/dinh-duong-viet/src/data/disease-hubs.ts)
- [src/pages/ban-do-benh.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/ban-do-benh.astro)

### 4 bai moi nhat

- [suy-tim-can-nang-muoi-dich.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/suy-tim-can-nang-muoi-dich.astro)
- [xo-gan-co-truong-muoi-dich-dam.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/xo-gan-co-truong-muoi-dich-dam.astro)
- [tien-dai-thao-duong-di-lam-ban-ron.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/tien-dai-thao-duong-di-lam-ban-ron.astro)
- [nguoi-gia-an-it-mat-co-thuc-hanh.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/kien-thuc-dinh-duong/nguoi-gia-an-it-mat-co-thuc-hanh.astro)

## 9. Viec con dang mo / uu tien cho phien sau

### Muc uu tien cao

1. Tiep tuc mo rong noi dung theo cum benh ma user da neu:
   - gan nhiem mo
   - eczema / viem da co dia
   - viem xoang / viem mui di ung
   - dau da day

2. Rà soat trung lap noi dung benh ly:
   - user da tung noi nghi co bai trung ve `lupus ban do he thong`
   - can quet them cac cum co nguy co trung chu de / trung y chinh

3. Ra soat chuyen khoa va cum benh:
   - xem viec gop `phau thuat` vao `ngoai khoa` da xuyen suot chua
   - kiem tra cac nhan con so luong bai / ten chuyen khoa ngoai giao dien

4. Tiep tuc nang cap bo cuc disease map:
   - uu tien bai nen tang + bai thuc hanh + bai thuc don + bai hieu dung
   - tranh cum nao qua day, cum nao qua mong

### Muc uu tien trung binh

5. So sanh lai voi cac web dinh duong khac theo huong:
   - thieu noi dung nao
   - thieu tinh huong thuc hanh nao
   - co can them "quick actions" / "doc tiep theo" / "theo doi trieu chung" trong bai hay khong

6. Rà soat muc `nguoi cao tuoi`, `nhi khoa`, `san khoa`, `ngoai khoa`, `tai mui hong`, `di ung` de bo sung neu cum nao con qua it bai

## 10. Goi y cach tiep tuc o phien sau

Prompt mo dau de tiep tuc nhanh:

```text
Doc file D:/openclaw/apps/dinh-duong-viet/reports/session-handoff-2026-08-11-content-expansion-and-deploy-followup.md va tiep tuc cac muc uu tien cao chua hoan thanh. Uu tien ra soat trung lap noi dung, sau do bo sung tiep cac cum gan nhiem mo, eczema/viem da co dia, viem xoang/viem mui di ung, dau da day.
```

Neu muon di thang vao trien khai noi dung:

```text
Doc handoff moi nhat trong reports va tiep tuc bo sung bai viet thuc hanh cho 4 cum: gan nhiem mo, eczema/viem da co dia, viem xoang/viem mui di ung, dau da day. Nho ra soat trung lap truoc khi viet.
```

## 11. Ghi chu quan trong

- Khong revert cac thay doi cua user neu gap dirty worktree
- Tiep tuc uu tien thuat ngu chuan y khoa tieng Viet
- Khi tra cuu noi dung y khoa moi / nhay cam, nho browse lai guideline hoac nguon chinh thong
- Sau moi dot them bai, nen chay lai:

```powershell
node .agents/skills/medical-fact-checker/scripts/scanner.mjs src/pages/kien-thuc-dinh-duong
npm run build
```

