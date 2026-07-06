# Tool Ty Le Mo Co The QA Polish v1

## 1. Moc dau vao

- Vong truoc: `tool-ti-le-mo-co-the-spec-v1`
- Commit dau vao: `08774d5`
- Branch vong nay: `tool-ti-le-mo-co-the-qa-polish-v1`
- Chua deploy

## 2. File da doc/sua

Da doc:

- `D:\openclaw\apps\dinh-duong-viet\reports\tool-ti-le-mo-co-the-spec-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\needs-spec-triage-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\tools-core-status-v29.md`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\ti-le-mo-co-the.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\package.json`

Da sua:

- `D:\openclaw\apps\dinh-duong-viet\reports\tool-ti-le-mo-co-the-qa-polish-v1.md`

## 3. Scope sau polish

`safe body-fat estimate orientation + safety shell only`

## 4. Chuc nang con lai

Route `/cong-cu/ti-le-mo-co-the/` hien la orientation-only:

- giai thich ty le mo co the la gi
- giai thich day la thong tin tham khao
- giai thich vi sao ket qua uoc tinh co the khac nhau
- neu cac phuong phap thuong gap o muc dinh huong
- safety shell ro rang

Khong con calculator user-facing.

## 5. Nhung phan da bo/khong them lai

Khong con:

- calculator `% mo co the`
- input tuoi / gioi / chieu cao / can nang / vong co / vong eo / vong hong
- cong thuc `US Navy` hoac cong thuc tinh truc tiep user-facing
- `WHR`
- `BMI` nhu mot ket qua tinh toan
- phan loai thap / binh thuong / cao / beo phi
- nhan `Tot / Luu y / Can cai thien`
- `nguy co cao`
- copy nhac tieu duong / benh tim mach nhu ket luan nguy co ca nhan
- loi khuyen giam mo / tang co / an kieng / tap luyen
- muc tieu `% mo ly tuong`
- `localStorage/export/copy/share/chart/canvas`
- `innerHTML` route-scoped

## 6. Safety/content QA

Da giu dung huong wording:

- `thong tin tham khao`
- `uoc tinh co the khac nhau theo phuong phap`
- `khong thay the do thanh phan co the bang phuong phap chuyen mon`
- `khong thay the danh gia lam sang`
- `ket qua phu thuoc cong thuc, thiet bi, cach do va boi canh suc khoe`
- `nen hoi bac si/chuyen gia dinh duong neu can danh gia ca nhan`

Khong con wording cam user-facing:

- `ban bi beo phi`
- `ban thua mo`
- `mo qua cao`
- `mo qua thap`
- `nguy co cao mac benh`
- `nguy co tieu duong`
- `nguy co benh tim mach`
- `can giam mo ngay`
- `can tang co ngay`
- `ti le mo ly tuong cua ban la`
- `dat/khong dat muc tieu`
- `tot/xau`
- `an toan/phu hop cho benh`
- `kiem soat tot/kem`
- `nen an it hon / tap nhieu hon`
- `chinh thuoc/insulin/loi tieu`
- `dieu tri beo phi / dieu tri suy dinh duong`

Ghi chu chap nhan duoc:

- Tu `Luu y` con xuat hien trong disclaimer chung, khong nam trong ngu canh cham diem suc khoe
- Tu `BMI` con xuat hien trong phan giai thich su khac nhau giua chi so nay va ty le mo co the, khong phai ket qua tinh toan hoac phan loai

## 7. Clinical safety shell

Route giu ro:

- Ty le mo co the la chi so tham khao, khong phai chan doan
- Cac phuong phap uoc tinh co the cho ket qua khac nhau
- Ket qua co the kem phu hop trong thai ky, tre em, nguoi cao tuoi, van dong vien, nguoi co phu hoac thay doi can nang nhanh
- Nguoi co benh nen, dang dung thuoc, roi loan an uong, thai ky, tre em hoac can muc tieu dieu tri nen hoi bac si/chuyen gia dinh duong
- Khong tu dieu chinh thuoc, insulin, loi tieu, che do an hoac tap luyen dieu tri dua tren mot chi so uoc tinh

## 8. Logic/UI QA

Vi route da ha orientation-only:

- khong con form input
- khong con nut tinh toan
- khong con result state
- khong con reset
- khong con bieu do
- khong con trang thai danh gia tot/xau

Ket qua kiem:

- Noi dung de doc, chia section ro
- Khong co runtime state loi
- Mobile khong overflow ngang
- Neu phat hien control o header site, da kiem lai rieng trong phan `.content-page`; route scoped khong con form/calculator

## 9. DOM/XSS QA

- Khong dung `innerHTML` route-scoped
- Route khong co user input route-scoped
- Query/fuzz da thu:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
  - `\"><img src=x onerror=alert(1)>`
  - `=HYPERLINK(\"http://x\",\"x\")`
  - `+SUM(1,1)`
  - `@cmd`
  - `-1+2`

Ket qua:

- khong tao dialog
- khong render HTML
- khong pha layout
- khong gay loi console

## 10. Browser/mobile QA

- Browser availability: Browser plugin co san
- Browser fallback: co, vi in-app Browser tra `net::ERR_FAILED` khi mo localhost
- Fallback da dung: Playwright voi system Chrome
- Preview port: `4321`
- Host kiem thu: `http://localhost:4321`
- `/cong-cu/` -> HTTP `200`
- `/cong-cu/ti-le-mo-co-the/` -> HTTP `200`
- Khong redirect
- Khong meta refresh
- Console sach trong fresh reload/session tren desktop va mobile
- Desktop khong overflow ngang
- Mobile `390 x 844` khong overflow ngang
- Noi dung orientation-only hien thi dung
- Khong con form/calculator/result trong phan content cua route
- Query/fuzz khong render HTML, khong tao dialog

Anh chup local:

- Desktop: `D:\openclaw\apps\dinh-duong-viet\.codex-bodyfat-desktop.png`
- Mobile: `D:\openclaw\apps\dinh-duong-viet\.codex-bodyfat-mobile.png`

## 11. Card /cong-cu/

- Mo ta giu dung huong trung tinh:
  - `Ước tính tỉ lệ mỡ cơ thể ở mức tham khảo, không thay thế đo thành phần cơ thể hoặc đánh giá lâm sàng.`
- Chua gan badge `Đã kiểm v1`

## 12. Nhung gi khong sua

- Khong sua engine
- Khong sua du lieu goc
- Khong sua cong thuc chung
- Khong sua `dist`
- Khong sua route ngoai scope, tru mo ta card `/cong-cu/` da duoc ha tu vong spec
- Khong dua calculator quay lai

## 13. QA cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chi co canh bao LF/CRLF Git Windows
- `git status --short`: dung nhu ky vong truoc commit (`src/pages/cong-cu/index.astro`, `src/pages/cong-cu/ti-le-mo-co-the.astro`, `reports/tool-ti-le-mo-co-the-qa-polish-v1.md`)

## 14. Ket luan

- Du dieu kien sang `tool-ti-le-mo-co-the-final-review-v1`
- Khuyen nghi giu route o dang `orientation-only + safety shell` o vong final review tiep theo
- Chua deploy
