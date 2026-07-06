# Tool Khau Phan Don Gian Final Review v1

## 1. Final review pass/fail

- Pass

## 2. Scope stable de xuat

- `neutral simple portion orientation + safety shell only`

## 3. Route

- `/cong-cu/khau-phan-don-gian/`

## 4. QA polish commit

- `1fb33cc test: add simple portion orientation page QA`

## 5. Chuc nang con lai

Route hien giu dung scope orientation-only:

- giai thich khai niem khau phan
- dua vi du minh hoa trung tinh theo nhom
- ghi ro day khong phai khau phan ca nhan
- co safety shell ro rang

Khong co form, tab cu, calculator, result hay reset.

## 6. Nhung phan da bo/khong them lai

Khong con hoac khong dua lai:

- form nhap tuoi / gioi / can nang / chieu cao / muc van dong
- muc tieu giam can / tang can
- filter benh nen
- khau phan ca nhan theo ngay / bua
- tinh `calo / protein / carb / fat / nuoc / natri`
- `kcal` user-facing
- quy doi muoi user-facing
- tab du lieu cu
- calculator / result / reset
- ket luan `du chat / can doi / dat muc tieu / thieu / thua`
- loi khuyen `nen an / khong nen an / giam / tang / cat`
- `localStorage / export / copy / share / chart / canvas`
- `innerHTML` route-scoped

## 7. Logic/UI final QA

Vi route la orientation-only:

- khong co form input
- khong co nut tinh toan
- khong co result state
- khong co reset
- khong co bieu do
- khong co trang thai danh gia tot/xau

Ket qua kiem:

- vi du minh hoa duoc giu o ngu canh tham khao / uoc luong
- khong dung vi du de ket luan bua an du chat, thieu chat, thua chat, can doi hoac phu hop cho benh
- noi dung de doc, chia section ro
- khong co runtime state loi
- mobile khong overflow ngang

## 8. Safety/content final QA

Khong con wording user-facing theo huong khuyen nghi hoac danh gia:

- `nen an`
- `khong nen an`
- `can an`
- `phai an`
- `giam ngay`
- `tang ngay`
- `cat bo`
- `khau phan du chat`
- `khau phan can doi`
- `khau phan chuan cho ban`
- `dat muc tieu`
- `khong dat`
- `thieu chat`
- `thua chat`
- `tot/xau`
- `lanh manh nhat`
- `phu hop cho tieu duong / tang huyet ap / benh than / gout / suy tim`
- `an toan cho nguoi benh`
- `kiem soat duong huyet / huyet ap / acid uric`
- `chinh insulin / thuoc / loi tieu`
- `dieu tri giam can / tang can / suy dinh duong`

Wording dang giu dung huong:

- `tham khao`
- `dinh huong`
- `uoc luong`
- `vi du minh hoa`
- `khong phai khau phan ca nhan`
- `khong dung de ket luan bua an du chat hay phu hop cho benh`
- `khong thay the tu van cua bac si/chuyen gia dinh duong`
- `khau phan thuc te phu thuoc mon an, cach che bien, dung cu do va boi canh suc khoe`

## 9. Clinical safety shell

Route con ro:

- cong cu chi cung cap thong tin tham khao ve cach hieu khau phan
- khong dung de tu xay dung che do an dieu tri
- khong dung de tu chan doan van de dinh duong hoac tu dieu chinh thuoc
- nguoi co tieu duong, benh than, benh tim mach, gout, suy tim, ung thu, thai ky, tre em, nguoi cao tuoi, roi loan an uong, hoac dang dung thuoc nen hoi bac si/chuyen gia dinh duong neu can khau phan ca nhan
- khong tu chinh insulin, thuoc ha duong huyet, loi tieu hoac che do dieu tri dua tren cong cu nay

## 10. DOM/XSS final QA

- khong dung `innerHTML` route-scoped
- route khong co user input route-scoped
- render bang Astro template an toan
- khong dua query vao HTML tho
- route khong co export/copy, nen khong co nguy co CSV/formula injection tai day

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

## 11. Browser/mobile QA

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
- query/fuzz khong render HTML, khong tao dialog
- safety shell hien thi ro

Ghi chu build:

- `npm run build` lan dau bi `EPIPE` do output pipe dai
- rerun build pass, va ban preview sau do duoc dung cho browser final QA

## 12. Card /cong-cu/

Card `Khẩu phần đơn giản` hien:

- mo ta: `Tìm hiểu khẩu phần ở mức tham khảo, không dùng để kết luận bữa ăn đủ chất hay phù hợp cho bệnh.`
- badge: `Đã kiểm v1`

## 13. Nhung gi khong sua

- engine
- du lieu goc
- cong thuc chung
- `dist`
- route ngoai scope

## 14. QA command pass/fail

- `npm run build`: pass sau khi rerun
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: sach sau commit

## 15. Ghi chu LF/CRLF

- Git Windows co canh bao `LF will be replaced by CRLF` trong working copy, khong phai blocker

## 16. Ket luan

- Du dieu kien sang `tools-core-status-v32`
- Stable scope de xuat giu nguyen:
  - `neutral simple portion orientation + safety shell only`
- Chua deploy
