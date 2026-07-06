# Tool Ty Le Mo Co The Final Review v1

## 1. Final review pass/fail

Pass.

## 2. Scope stable de xuat

`safe body-fat estimate orientation + safety shell only`

## 3. Route

- Route: `/cong-cu/ti-le-mo-co-the/`

## 4. QA polish commit

- `cf66d1f` - `test: add body fat orientation page QA`

## 5. Chuc nang con lai

- Route orientation-only
- Giai thich ty le mo co the la gi
- Giai thich day la thong tin tham khao
- Giai thich vi sao ket qua uoc tinh co the khac nhau
- Neu cac phuong phap thuong gap o muc dinh huong
- Safety shell ro rang

Khong con calculator user-facing.

## 6. Nhung phan da bo/khong them lai

Khong con:

- calculator user-facing
- form input tuoi / gioi / chieu cao / can nang / vong co / vong eo / vong hong
- cong thuc `US Navy` hoac cong thuc khac de tinh truc tiep
- `% mo` tinh truc tiep
- `WHR`
- `BMI` nhu ket qua tinh toan
- phan loai thap / binh thuong / cao / beo phi
- nhan `Tot / Luu y / Can cai thien` nhu danh gia ca nhan
- `nguy co cao`
- nguy co ca nhan kieu `tieu duong` / `benh tim mach`
- loi khuyen giam mo / tang co / an kieng / tap luyen
- target `% mo ly tuong`
- `localStorage/export/copy/share/chart/canvas`
- `innerHTML` route-scoped

## 7. Safety/content final QA

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

- Tu `Luu y` con o disclaimer chung, khong phai nhan danh gia ca nhan
- Tu `BMI` con o phan giai thich khai niem, khong phai ket qua tinh toan hay phan loai

## 8. Clinical safety shell

Route con ro:

- Ti le mo co the la chi so tham khao, khong phai chan doan
- Cac phuong phap uoc tinh co the cho ket qua khac nhau
- Ket qua co the kem phu hop trong thai ky, tre em, nguoi cao tuoi, van dong vien, nguoi co phu hoac thay doi can nang nhanh
- Nguoi co benh nen, dang dung thuoc, roi loan an uong, thai ky, tre em hoac can muc tieu dieu tri nen hoi bac si/chuyen gia dinh duong
- Khong tu dieu chinh thuoc, insulin, loi tieu, che do an hoac tap luyen dieu tri dua tren mot chi so uoc tinh

## 9. Logic/UI final QA

Vi route la orientation-only:

- khong con form input
- khong con nut tinh toan
- khong con result state
- khong con reset
- khong con bieu do
- khong con trang thai danh gia tot/xau

Ket qua kiem:

- noi dung de doc, chia section ro
- khong co runtime state loi
- mobile khong overflow ngang
- khong can hạ them scope nua o vong final review

## 10. DOM/XSS final QA

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

## 11. Browser/mobile QA

- Preview port: `4321`
- Browser path: in-app browser
- Fallback: khong can trong final review nay
- `/cong-cu/` -> HTTP `200`
- `/cong-cu/ti-le-mo-co-the/` -> HTTP `200`
- Khong redirect
- Khong meta refresh
- Console sach trong fresh reload/session tren desktop va mobile
- Desktop khong overflow ngang
- Mobile `390 x 844` khong overflow ngang
- Noi dung orientation-only hien thi dung
- Khong con form/calculator/result
- Query/fuzz khong render HTML, khong tao dialog

## 12. Card /cong-cu/

- Mo ta giu dung huong trung tinh:
  - `Ước tính tỉ lệ mỡ cơ thể ở mức tham khảo, không thay thế đo thành phần cơ thể hoặc đánh giá lâm sàng.`
- Badge `Đã kiểm v1`: da gan trong vong final review nay

## 13. Nhung gi khong sua

- Khong sua engine
- Khong sua du lieu goc
- Khong sua cong thuc chung
- Khong sua `dist`
- Khong sua route ngoai scope, tru card `/cong-cu/` de them badge
- Khong dua calculator quay lai

## 14. QA command pass/fail

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chi co canh bao LF/CRLF Git Windows
- `git status --short`: dung nhu ky vong truoc commit (`src/pages/cong-cu/index.astro`, `reports/tool-ti-le-mo-co-the-final-review-v1.md`)

## 15. Ghi chu LF/CRLF

- `git diff --check` chi bao canh bao LF se duoc thay bang CRLF trong working copy Windows, khong co blocker whitespace.

## 16. Ket luan

- Du dieu kien sang `tools-core-status-v30`
- Stable scope de xuat: `safe body-fat estimate orientation + safety shell only`
- Chua deploy
