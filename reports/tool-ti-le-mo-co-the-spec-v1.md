# Tool Ty Le Mo Co The Spec v1

## 1. Moc dau vao

- Status baseline: `tools-core-status-v29`
- Commit dau vao: `b0a409b`
- Branch vong nay: `tool-ti-le-mo-co-the-spec-v1`
- Chua deploy

## 2. File da doc/sua

Da doc:

- `D:\openclaw\apps\dinh-duong-viet\reports\tools-core-status-v29.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\needs-spec-triage-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\tool-bmi-spec-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\tool-bmi-final-review-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\ti-le-mo-co-the.astro`
- `D:\openclaw\apps\dinh-duong-viet\package.json`

Da sua:

- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\ti-le-mo-co-the.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\reports\tool-ti-le-mo-co-the-spec-v1.md`

## 3. Hien trang truoc spec

Route `/cong-cu/ti-le-mo-co-the/` da ton tai va truoc khi ha scope co cac thanh phan sau:

- Form nhap:
  - gioi tinh
  - chieu cao (cm)
  - can nang (kg)
  - vong eo (cm)
  - vong mong (cm)
- Nut `Tinh toan`
- Ket qua 3 khoi:
  - `% mo co the`
  - `WHR`
  - `BMI`
- Copy user-facing gom:
  - `Nguy co thap / trung binh / cao`
  - `Thieu can / Binh thuong / Thua can / Beo phi`
  - `Qua thap / Can doi / Trung binh / Cao`
  - `Tot! / Luu y / Can cai thien`
  - `Nguy co hoi chung chuyen hoa cao`
  - `mo noi tang tang nguy co benh tim mach va tieu duong`
- Inline script dung `innerHTML` cho:
  - `bmi-result`
  - `bmi-assess`
  - `whr-result`
  - `whr-assess`
  - `bfp-result`
  - `bfp-table`
  - `overall`
- Route khong co `localStorage`, `export`, `copy`, `share`, `chart`, `canvas`
- Khong thay helper import truc tiep; cong thuc nam inline trong route

## 4. Rui ro user-facing

Rui ro chinh truoc spec:

- De bi doc nhu cong cu danh gia suc khoe ca nhan hoac chuan doan
- Co ket luan benh ly va nguy co benh user-facing
- Co nhan `Tot / Luu y / Can cai thien` nhu cham diem suc khoe
- Co dung BMI va WHR de suy dien `beo phi`, `nguy co cao`
- Co copy khuyen nguoi dung dieu chinh che do an/uong/van dong
- Co the bi hieu nhu cong cu dat muc tieu % mo ca nhan
- Dung cong thuc `% mo co the` voi mo ta `US Navy` nhung:
  - khong ghi nguon ro
  - bien dau vao khong khop cong thuc US Navy day du
  - co dau hieu don gian hoa qua muc user-facing

## 5. Scope de xuat

`safe body-fat estimate orientation + safety shell only`

Scope an toan cho route trong vong nay:

- Giai thich ty le mo co the la chi so tham khao
- Giai thich vi sao cac phuong phap uoc tinh co the cho ket qua khac nhau
- Neu nguoi dung can danh gia ca nhan, nhac hoi bac si/chuyen gia dinh duong
- Khong cung cap calculator user-facing cho den khi cong thuc va nguong duoc source-lock ro

## 6. Cong thuc hien co, nguon hien co hoac thieu nguon

Cong thuc hien co trong route cu:

- BMI:
  - `BMI = can nang / (chieu cao m)^2`
- WHR:
  - `WHR = vong eo / vong mong`
- `% mo co the`:
  - route ghi chu `US Navy`
  - nam:
    - `86.010 * log10(waist) - 70.041 * log10(height) + 36.76`
  - nu:
    - `163.205 * log10(waist) - 97.684 * log10(height) - 78.387`

Van de source-lock:

- Route khong dua nguon user-facing ro
- Cong thuc `% mo co the` dang duoc goi la `US Navy` nhung khong dung bo bien dau vao day du thong thuong cho phien ban circumference-based
- Route cu khong giai thich gioi han ap dung theo dan so, cach do, sai so hay ngu canh
- Cac nguong `% mo`, `WHR`, `BMI`, `nguy co` khong co source-lock ro trong route

Quyet dinh o vong spec nay:

- Khong tiep tuc hien calculator user-facing trong khi cong thuc va nguong chua source-lock day du
- Ha route xuong orientation + safety shell only
- Giu backlog source-lock cho vong sau neu muon dua calculator tro lai

## 7. Quyet dinh giu/bo

Giu:

- Route `/cong-cu/ti-le-mo-co-the/`
- Chu de giao duc ve ty le mo co the
- Safety shell hoi bac si/chuyen gia khi can danh gia ca nhan

Bo trong vong spec nay:

- Form nhap gioi tinh
- Form nhap chieu cao
- Form nhap can nang
- Form nhap vong eo
- Form nhap vong mong
- Calculator `% mo co the`
- Calculator `WHR`
- Calculator `BMI` trong route nay
- Bang chuan nam/nu
- Phan loai thap/binh thuong/cao/beo phi
- Ket luan nguy co benh
- Nhan `Tot / Luu y / Can cai thien`
- `innerHTML`

Khong co:

- `localStorage`
- `chart`
- `copy`
- `export`
- `share`
- `canvas`

## 8. Wording can dung/tranh

Nen dung:

- `uoc tinh tham khao`
- `khong thay the do thanh phan co the bang phuong phap chuyen mon`
- `khong thay the danh gia lam sang`
- `ket qua phu thuoc cong thuc va cach do vong co the`
- `khong dung rieng ket qua nay de tu dat muc tieu dieu tri`
- `nen hoi bac si/chuyen gia dinh duong neu can danh gia ca nhan`

Tranh:

- `ban bi beo phi`
- `ban thua mo`
- `mo qua cao`
- `mo qua thap`
- `nguy co cao mac benh`
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

## 9. Logic/input spec

Quyet dinh o vong spec:

- Khong giu input user-facing trong route hien tai
- Khong giu tinh toan user-facing trong route hien tai
- Khong co nhu cau local input validation vi route da duoc ha xuong orientation-only

Neu calculator duoc dua tro lai sau khi source-lock:

- phai chot ro:
  - ten cong thuc
  - bien dau vao
  - don vi
  - gioi han ap dung
  - cach lam tron
  - xu ly input rong, `0`, am, qua lon, `NaN`, `Infinity`
  - ho tro hoac bao ro dau phay thap phan kieu Viet Nam

## 10. DOM/XSS spec

Yeu cau:

- Khong dung `innerHTML` voi du lieu nguoi dung nhap
- Render bang `textContent`, `appendChild`, `replaceChildren` hoac noi dung Astro tĩnh an toan
- Khong render payload vao DOM bang HTML thô

Payload can dua vao vong QA polish/final review neu route co input tro lai:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `\"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Khi route orientation-only:

- Khong con surface input route-scoped
- Rui ro XSS giam ve muc rat thap

## 11. Clinical safety shell

Safety shell can giu ro:

- Ty le mo co the la thong tin tham khao, khong phai chan doan
- Cac cong thuc uoc tinh co the khong phu hop voi:
  - thai ky
  - tre em
  - nguoi cao tuoi
  - van dong vien
  - nguoi co phu
- Khong dung rieng ket qua nay de tu dat muc tieu dieu tri
- Nguoi co benh nen, dang dung thuoc hoac can muc tieu dieu tri nen hoi bac si/chuyen gia dinh duong
- Khong tu dieu chinh thuoc, insulin, loi tieu hoac che do dieu tri dua tren mot cong thuc uoc tinh mo co the

## 12. /cong-cu/ card

Da ha card theo huong trung tinh:

- Ten: `Tỷ lệ mỡ cơ thể tham khảo`
- Mo ta:
  - `Ước tính tỉ lệ mỡ cơ thể ở mức tham khảo, không thay thế đo thành phần cơ thể hoặc đánh giá lâm sàng.`
- Chua gan badge `Đã kiểm v1`

## 13. Nhung gi khong lam trong vong nay

- Khong dua tool len stable
- Khong cap nhat `tools-core-status`
- Khong lam QA polish/final review
- Khong sua engine, du lieu goc, cong thuc chung, `dist`
- Khong mo rong sang BMI, BMR/TDEE, calo, khau phan, giam can, tang co hoac benh nen
- Khong source-lock cong thuc bang nguon ngoai trong vong nay
- Khong xu ly backlog data QA ma `6014`

## 14. QA cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chi co canh bao LF/CRLF Git Windows
- `git status --short`: dung nhu ky vong truoc commit (`src/pages/cong-cu/index.astro`, `src/pages/cong-cu/ti-le-mo-co-the.astro`, `reports/tool-ti-le-mo-co-the-spec-v1.md`)

## 15. Ket luan

Route da duoc ha scope an toan de tranh bi hieu thanh cong cu chan doan hoac tu van dieu tri.

Ket luan hien tai:

- Du dieu kien sang `tool-ti-le-mo-co-the-qa-polish-v1`
- Khuyen nghi giu route o dang `orientation + safety shell only` trong vong QA polish tiep theo
- Neu muon dua calculator tro lai o vong sau, can source-lock bo cong thuc va nguong ro rang truoc

Ghi chu:

- `git diff --check` chi bao canh bao LF se duoc thay bang CRLF trong working copy Windows, khong co blocker whitespace.
