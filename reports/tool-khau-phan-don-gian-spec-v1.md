# Tool Khau Phan Don Gian Spec v1

Date: 2026-07-06

Branch: `tool-khau-phan-don-gian-spec-v1`

## 1. Moc dau vao

- Status baseline: `reports/tools-core-status-v31.md`
- Triage baseline: `reports/needs-spec-triage-v1.md`
- Prior status reference: `reports/tools-core-status-v30.md`
- Input commit: `9a4db4b docs: update tool status with beverage sugar safety shell v1`
- Route: `/cong-cu/khau-phan-don-gian/`
- Chua deploy.

## 2. File da doc / sua

Da doc:

- `reports/tools-core-status-v31.md`
- `reports/needs-spec-triage-v1.md`
- `reports/tools-core-status-v30.md`
- `src/pages/cong-cu/index.astro`
- `src/pages/cong-cu/khau-phan-don-gian.astro`
- `package.json`

Da sua:

- `src/pages/cong-cu/khau-phan-don-gian.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-khau-phan-don-gian-spec-v1.md`

## 3. Hien trang truoc spec

Route da ton tai.

Truoc khi ha scope trong vong nay, route co:

- tab click theo nhom thuc pham
- bang vi du khau phan bang chen, bat, muong, lat, mieng
- so kcal user-facing cho nhieu muc
- quy doi muoi user-facing cho nuoc mam, nuoc tuong
- lead copy: `Moi khau phan duoi day tinh cho nguoi truong thanh trung binh. Dieu chinh len/xuong tuy nhu cau.`
- render ket qua bang `content.innerHTML`

Khong thay:

- form nhap tuoi/gioi/can nang/chieu cao/muc van dong
- filter benh nen
- target ca nhan
- localStorage/export/copy/share/chart/canvas

## 4. Rui ro user-facing

Route cu co cac rui ro chinh:

- de bi hieu thanh khuyen nghi khau phan cho ca nhan vi co copy `nguoi truong thanh trung binh` va `dieu chinh tuy nhu cau`
- de bi doc nhu cong cu huong dan an uong vi co kcal, muoi va nhom mon an trong cung mot bang
- de bi suy dien thanh `du/khong du` hoac `can an bao nhieu` du route khong noi thang
- cac don vi dan gian nhu chen, muong, ly, nam tay, long ban tay chua duoc source-lock ro
- quy doi muoi user-facing cho gia vi de bi keo sang huong benh nen
- `innerHTML` la diem rui ro DOM/XSS du route hien tai khong co free-text

## 5. Scope de xuat

- `neutral simple portion orientation + safety shell only`

Scope nay chi nen bao gom:

- giai thich khau phan la gi o muc tham khao
- nhac rang chen, muong, lat, mieng, ly chi la cach goi dinh huong
- dua vi du minh hoa rat trung tinh
- nhac kiem tra nhan san pham neu co
- safety shell ro, khong dua ra khau phan ca nhan

Khong nen bao gom:

- ke khau phan theo ngay/bua
- tong kcal/protein/carb/fat/natri/nuoc
- ket luan du chat/thieu/thua/can doi
- meal plan, giam can, tang can, tre em, thai ky, the thao, benh nen
- khuyen nghi `nen an bao nhieu`

## 6. Du lieu / cong thuc / khau phan hien co, nguon hien co hoac thieu nguon

Tinh trang sau audit:

- Route cu khong dung engine tinh toan phuc tap.
- Du lieu chu yeu la bang minh hoa hardcode trong route.
- Co cac dinh luong dan gian va quy doi don gian:
  - `1 chen com`
  - `1 bat bun`
  - `1 muong canh`
  - `1 ly sua`
  - `bang long ban tay`, `bang bo bai`, `1 nam`
- Nguon cua cac quy doi nay khong duoc khoa ro trong route.
- Gia tri `kcal` va `muoi` user-facing khong duoc source-lock day du trong scope hien tai.

Quyet dinh trong vong spec nay:

- bo kcal user-facing
- bo quy doi muoi user-facing
- bo logic tab + render bang `innerHTML`
- ha route ve orientation-only voi vi du minh hoa trung tinh

## 7. Quyet dinh giu / bo

Giu:

- route ton tai
- noi dung dinh huong ve khau phan
- vi du minh hoa theo nhom thuc pham

Bo hoac khong them lai:

- form input
- bang kcal
- bang muoi
- nhan huong dan `dieu chinh tuy nhu cau`
- bat ky logic ket luan khau phan ca nhan
- plate method / ban tay / khau phan chuan theo nghia khuyen nghi
- localStorage
- chart
- copy / export / share
- `innerHTML`

## 8. Wording can dung / tranh

Wording nen dung:

- `tham khao`
- `dinh huong`
- `uoc luong`
- `vi du minh hoa`
- `khong phai khau phan ca nhan`
- `khong dung de ket luan bua an du chat hay can doi`
- `khau phan thuc te phu thuoc mon an, cach che bien, dung cu do va boi canh suc khoe`
- `khong thay the tu van cua bac si/chuyen gia dinh duong`

Wording can tranh:

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
- `thieu`
- `thua`
- `tot/xau`
- `phu hop/an toan cho tieu duong/tang huyet ap/benh than/gout/suy tim`
- `dieu tri giam can/tang can/suy dinh duong`

## 9. Logic / input spec

Quyet dinh chot trong vong nay:

- khong giu form input
- khong giu tinh toan
- ha route ve orientation-only

He qua:

- khong co input rong/0/am/NaN/Infinity can xu ly user-facing trong route sau spec
- khong co localStorage can giu hoac xoa
- khong co muc tieu bua/ngay
- khong tu sinh khau phan dieu tri

Neu vong sau can them tuong tac, phai bat dau tu logic trung tinh va co don vi ro rang, nhung hien tai chua can.

## 10. Clinical safety shell

Route can co safety shell ro:

- Cong cu chi cung cap thong tin tham khao ve cach hieu khau phan.
- Khong dung de tu xay dung che do an dieu tri.
- Khong dung de tu chan doan thieu/thua chat hoac tu dieu chinh thuoc.
- Nguoi co tieu duong, benh than, benh tim mach, gout, suy tim, ung thu, thai ky, tre em, nguoi cao tuoi, roi loan an uong, hoac dang dung thuoc nen hoi bac si/chuyen gia dinh duong neu can khau phan ca nhan.
- Khong tu chinh insulin, thuoc ha duong huyet, loi tieu hoac che do dieu tri dua tren cong cu nay.

## 11. DOM / XSS spec

- Route cu dung `innerHTML`; da bo trong vong spec nay.
- Route moi render bang Astro template an toan, khong dua query hay user input vao HTML tho.
- Khong co search/free-text/export/copy trong route sau spec.
- Khong co nguy co CSV/formula injection vi route khong co export/copy.

Payload can tiep tuc giu trong report cho cac vong sau neu route co them input:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

## 12. /cong-cu/ card

Da doi mo ta theo huong trung tinh:

- `Tim hieu khau phan o muc tham khao, khong dung de ket luan bua an du chat hay phu hop cho benh.`

Khong gan badge `Da kiem v1` trong vong spec nay.

## 13. Nhung gi khong lam trong vong nay

- Khong deploy
- Khong dua tool len stable
- Khong cap nhat `tools-core-status`
- Khong lam QA polish/final review
- Khong sua engine
- Khong sua du lieu goc
- Khong sua cong thuc chung
- Khong sua `dist`
- Khong mo rong sang meal plan, calo muc tieu, giam can, tang can, benh nen, tre em, thai ky, the thao

## 14. QA cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chi co canh bao Git Windows `LF will be replaced by CRLF`
- `git status --short`: dung 3 thay doi trong scope truoc khi commit

## 15. Ket luan

- Du dieu kien sang `tool-khau-phan-don-gian-qa-polish-v1`.
- Khong can source-lock bo sung truoc khi vao QA polish, vi route da duoc ha ve `orientation-only` va bo cac phan de bi hieu thanh khuyen nghi ca nhan.
- Scope de xuat giu nguyen: `neutral simple portion orientation + safety shell only`
- Chua deploy.
