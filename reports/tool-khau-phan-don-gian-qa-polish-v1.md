# Tool Khau Phan Don Gian QA Polish v1

## 1. Moc dau vao

- Vong truoc: `tool-khau-phan-don-gian-spec-v1`
- Commit dau vao: `0ec58b4`
- Branch vong nay: `tool-khau-phan-don-gian-qa-polish-v1`
- Chua deploy

## 2. File da doc/sua

Da doc:

- `D:\openclaw\apps\dinh-duong-viet\reports\tool-khau-phan-don-gian-spec-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\needs-spec-triage-v1.md`
- `D:\openclaw\apps\dinh-duong-viet\reports\tools-core-status-v31.md`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\khau-phan-don-gian.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\package.json`

Da sua:

- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\khau-phan-don-gian.astro`
- `D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro`
- `D:\openclaw\apps\dinh-duong-viet\reports\tool-khau-phan-don-gian-qa-polish-v1.md`

## 3. Scope sau polish

`neutral simple portion orientation + safety shell only`

## 4. Chuc nang con lai

Route `/cong-cu/khau-phan-don-gian/` hien la orientation-only:

- giai thich khai niem khau phan
- dua vi du minh hoa trung tinh theo nhom thuc pham
- ghi ro day khong phai khau phan ca nhan
- co safety shell ro rang

Khong con form, tab cu hoac calculator.

## 5. Nhung phan da bo/khong them lai

Khong con hoac khong dua lai:

- form nhap tuoi / gioi / can nang / chieu cao / muc van dong
- muc tieu giam can / tang can
- filter benh nen
- khau phan ca nhan theo ngay / bua
- tinh `kcal / protein / carb / fat / nuoc / natri`
- `kcal` user-facing
- quy doi muoi user-facing
- tab du lieu cu
- ket luan `du chat / can doi / dat muc tieu / thieu / thua`
- loi khuyen `nen an / khong nen an / giam / tang / cat`
- `localStorage / export / copy / share / chart / canvas`
- `innerHTML` route-scoped

## 6. Logic/UI QA

Vi route da ha orientation-only:

- khong co form input
- khong co nut tinh toan
- khong co result state
- khong co reset
- khong co bieu do
- khong co trang thai danh gia tot/xau

Ket qua kiem:

- vi du minh hoa duoc giu o muc tham khao / uoc luong
- noi dung khong dung de ket luan bua an du hay phu hop cho benh
- noi dung de doc, chia section ro
- khong co runtime state loi
- mobile khong overflow ngang

## 7. Safety/content QA

Da ha wording user-facing khoi cac cum de gay hieu nham:

- `du chat`
- `can doi`
- `thieu chat`
- `thua chat`
- `nen an`
- `khong nen an`
- `khau phan chuan cho ban`
- `dat muc tieu`
- `an toan cho nguoi benh`

Wording dang giu dung huong:

- `tham khao`
- `dinh huong`
- `uoc luong`
- `vi du minh hoa`
- `khong phai khau phan ca nhan`
- `khong dung de danh gia bua an theo muc tieu ca nhan hoac benh ly`
- `khong thay the tu van cua bac si/chuyen gia dinh duong`
- `khau phan thuc te phu thuoc mon an, cach che bien, dung cu do va boi canh suc khoe`

## 8. Clinical safety shell

Route hien nhac ro:

- cong cu chi cung cap thong tin tham khao ve cach hieu khau phan
- khong dung de tu xay dung che do an dieu tri
- khong dung de tu chan doan van de dinh duong hoac tu dieu chinh thuoc
- nguoi co tieu duong, benh than, benh tim mach, gout, suy tim, ung thu, thai ky, tre em, nguoi cao tuoi, roi loan an uong hoac dang dung thuoc nen hoi bac si/chuyen gia dinh duong neu can khau phan ca nhan
- khong tu chinh insulin, thuoc ha duong huyet, loi tieu hoac che do dieu tri dua tren cong cu nay

## 9. DOM/XSS QA

- khong dung `innerHTML` route-scoped
- route khong co user input route-scoped
- khong co export/copy, nen khong co nguy co CSV/formula injection tai route nay

Payload/query da thu:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `\"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Ket qua:

- khong tao dialog
- khong render HTML
- khong phan chieu payload vao noi dung route
- khong pha layout
- khong gay loi console

## 10. Browser/mobile QA

- Preview port: `4323`
- `/cong-cu/` -> `200`
- `/cong-cu/khau-phan-don-gian/` -> `200`
- khong redirect
- khong meta refresh
- console sach trong fresh reload/session
- desktop khong overflow ngang
- mobile `390 x 844` khong overflow ngang
- noi dung orientation-only hien thi dung
- khong con form / tab / calculator / result
- safety shell hien thi ro
- query/fuzz khong render HTML, khong tao dialog

## 11. Card /cong-cu/

Card hien giu mo ta trung tinh:

- `Tìm hiểu khẩu phần ở mức tham khảo, không dùng để đánh giá bữa ăn theo mục tiêu cá nhân hoặc bệnh lý.`

Trang thai:

- chua gan badge `Đã kiểm v1`

## 12. Nhung gi khong sua

- engine
- du lieu goc
- cong thuc chung
- `dist`
- route ngoai scope
- khong dua lai form/tab/calculator cu

## 13. QA cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: sach sau commit

Ghi chu:

- preview browser dung port `4323` vi cac port thap hon dang ban
- Git Windows co canh bao LF/CRLF o working copy, khong phai blocker

## 14. Ket luan

- Du dieu kien sang `tool-khau-phan-don-gian-final-review-v1`
- Scope giu nguyen cho vong sau:
  - `neutral simple portion orientation + safety shell only`
- Chua deploy
