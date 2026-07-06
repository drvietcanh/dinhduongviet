# Tool Duong Do Uong Spec v1

Date: 2026-07-06

Branch: `tool-duong-do-uong-spec-v1`

## 1. Moc dau vao

- Status baseline: `reports/tools-core-status-v30.md`
- Triage baseline: `reports/needs-spec-triage-v1.md`
- Prior status reference: `reports/tools-core-status-v29.md`
- Input commit: `2bcbf19 docs: update tool status with body fat orientation safety shell v1`
- Route: `/cong-cu/duong-do-uong/`
- Chua deploy.

## 2. File da doc / sua

Da doc:

- `reports/tools-core-status-v30.md`
- `reports/needs-spec-triage-v1.md`
- `reports/tools-core-status-v29.md`
- `src/pages/cong-cu/index.astro`
- `src/pages/cong-cu/duong-do-uong.astro`
- `package.json`

Da sua:

- `src/pages/cong-cu/duong-do-uong.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-duong-do-uong-spec-v1.md`

## 3. Hien trang truoc spec

Route da ton tai va la mot lookup/search tool cho do uong pho bien.

Truoc khi ha scope trong vong nay, route co:

- search text theo ten do uong
- dataset noi bo hardcode trong route
- hien thi gram duong theo tung khau phan
- moc `WHO 25g/ngay`
- quy doi `1 muong ca phe duong = 4g`
- `% nhu cau ngay`
- nhan mau `high / medium / low`
- `grid.innerHTML` de render ket qua

Khong thay:

- form tinh theo ml user-facing
- nhap duong `g/100 ml` hoac `g/khau phan`
- nhap so chai / ly / khau phan
- localStorage / export / copy / share / chart / canvas
- filter benh nen
- target ca nhan

## 4. Rui ro user-facing

Truoc khi ha scope, route co cac rui ro ro rang:

- de bi doc nhu bang xep hang do uong tot / xau vi dung mau `high / medium / low`
- de bi suy dien thanh khuyen nghi dinh duong ca nhan vi co `% nhu cau ngay`
- de bi hieu nhu dang ap nguong `WHO 25g/ngay` lam ket luan user-facing, trong khi vong nay chua source-lock theo scope
- quy doi `1 muong ca phe = 4g` chua duoc khoa nguon trong route
- `innerHTML` voi ket qua search la diem rui ro DOM/XSS can bo
- lead copy `so voi khuyen nghi 25g/ngay` keo route ve huong “vuot / khong vuot ngưỡng”

## 5. Scope de xuat

- `neutral beverage sugar label helper + safety shell only`

Scope nay chi nen bao gom:

- tra cuu luong duong tham khao trong mot so do uong
- hien thi gram duong theo khau phan mo ta
- nhac kiem tra nhan san pham, khau phan va dung tich thuc uong
- safety shell trung tinh, khong dua ra khuyen nghi dieu tri

Khong nen bao gom:

- khuyen nghi nen / khong nen uong
- danh gia do uong tot / xau / lanh manh
- nguong duong toi da / ngay user-facing neu chua source-lock
- ket luan vuot nguong, nguy co benh ca nhan
- target duong/ngay ca nhan

## 6. Cong thuc hien co, nguon hien co hoac thieu nguon

Trang thai sau audit:

- Khong co cong thuc tinh toan tu do user nhap trong route hien tai.
- Route dang la lookup theo dataset noi bo hardcode.
- Khong co nguon hien thi ro cho:
  - moc `WHO 25g/ngay`
  - quy doi `1 muong ca phe duong = 4g`
  - tung muc du lieu do uong trong danh sach

Quyet dinh spec:

- Bo `WHO 25g/ngay` khoi user-facing chinh trong vong nay.
- Bo quy doi `muong ca phe` khoi user-facing chinh trong vong nay.
- Khong dua nguong/ngay vao ket qua chinh cho den khi source-lock ro o vong rieng neu can.
- Giu lookup gram duong theo khau phan tham khao, vi day la surface trung tinh hon.

## 7. Quyet dinh giu / bo

Giu:

- search theo ten do uong
- danh sach lookup do uong pho bien
- gram duong theo khau phan hien thi
- empty state trung tinh
- safety shell

Bo hoac ha khoi user-facing chinh:

- lead copy `so voi khuyen nghi 25g/ngay`
- summary card `WHO`
- summary card `1 muong ca phe duong = 4g`
- `% nhu cau ngay`
- nhan mau `high / medium / low`
- thanh mau / phan loai mau
- `innerHTML`

Khong them trong vong nay:

- form nhap `ml`
- form nhap `g/100 ml`
- form nhap `g/khau phan`
- so chai / ly / khau phan
- localStorage
- export / copy / CSV
- chart / canvas

## 8. Wording can dung / tranh

Wording nen dung:

- `tham khao`
- `dua tren du lieu noi bo va khau phan hien thi`
- `so gram duong theo khau phan`
- `khong ket luan do uong tot hay xau`
- `khong thay the tu van cua bac si / chuyen gia dinh duong`
- `kiem tra khau phan, dung tich thuc uong va nhan san pham`

Wording can tranh:

- `nen uong`
- `khong nen uong`
- `tranh uong`
- `cat bo`
- `giam ngay`
- `do uong tot`
- `do uong xau`
- `lanh manh`
- `vuot nguong`
- `qua nhieu duong`
- `it duong nen an toan`
- `phu hop cho tieu duong`
- `an toan cho nguoi benh`
- `kiem soat duong huyet`
- `nguy co tieu duong`
- `nguy co beo phi`
- `nguy co sau rang`
- `nguy co tim mach`
- `dat / khong dat muc tieu`
- `chinh insulin / thuoc ha duong huyet / loi tieu`

## 9. Logic / input spec

Huong spec hien tai:

- Route o muc lookup helper trung tinh, chua can mo rong thanh calculator.
- Search text duoc giu lai vi blast radius thap neu render an toan.
- Search nen ho tro khong dau khi co the.
- Ket qua hien thi:
  - ten do uong
  - khau phan tham khao
  - gram duong
- `0 g duong` duoc giu la so lieu that, khong xem la missing data.
- Khong co phan loai mau.
- Khong co phan tram / muc tieu / nguong ngay.
- Neu vong sau co them form nhap lieu:
  - don vi dung tich: `ml`
  - duong: `g/100 ml` hoac `g/khau phan`
  - khong tinh khi du lieu thieu / khong hop le
  - ho tro hoac bao loi nhe cho dau phay thap phan kieu Viet Nam
  - lam tron ket qua hop ly, vi du `1` chu so thap phan

## 10. Clinical safety shell

Safety shell can giu ro:

- Cong cu chi ho tro doc nhan hoac tra cuu luong duong tham khao trong do uong.
- Khong dung de tu chan doan, tu dieu tri hoac tu dieu chinh thuoc.
- Nguoi co tieu duong, benh than, benh tim mach, gout, thai ky, tre em, roi loan an uong, hoac dang dung thuoc nen hoi bac si / chuyen gia dinh duong neu can huong dan ca nhan.
- Khong tu chinh insulin, thuoc ha duong huyet, loi tieu hoac che do dieu tri dua tren ket qua nay.

## 11. DOM / XSS spec

Quyet dinh vong nay:

- Bo `innerHTML` route-scoped.
- Render ket qua bang DOM-safe API:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`

Neu giu search/free-text:

- query khong duoc render bang HTML tho
- empty state cung phai tao bang DOM-safe API

Payload can kiem o vong QA polish:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

## 12. /cong-cu/ card

Da doi mo ta card theo huong trung tinh:

- `Tính lượng đường ước tính trong đồ uống từ thông tin nhãn hoặc số liệu nhập, không dùng để kết luận đồ uống tốt hay xấu.`

Trong vong nay:

- khong gan badge `Đã kiểm v1`

Ghi chu:

- Card copy da trung tinh hon route cu, nhung route thuc te hien dang la lookup helper chua co form nhap so lieu.
- Neu muon dong bo sat hon voi route thuc te o vong sau, co the doi tiep thanh mo ta lookup/nhan san pham ma khong mo rong scope.

## 13. Nhung gi khong lam trong vong nay

- Khong deploy.
- Khong dua `duong-do-uong` len stable.
- Khong cap nhat `tools-core-status`.
- Khong lam QA polish / final review day du trong vong nay.
- Khong sua engine, du lieu goc, cong thuc chung, `dist`.
- Khong xu ly backlog data QA ma `6014`.
- Khong them calculator theo `ml`, `g/100 ml`, `g/khau phan`.
- Khong them nguong WHO / AHA / Bo Y te user-facing.

## 14. QA cuoi

- `npm run build`: pass
  - Lan goi dau timeout do command budget; rerun timeout dai hon thi pass.
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: truoc commit chi con:
  - `src/pages/cong-cu/duong-do-uong.astro`
  - `src/pages/cong-cu/index.astro`
  - `reports/tool-duong-do-uong-spec-v1.md`

## 15. Ket luan

- Route da duoc ha scope toi thieu ngay trong vong spec:
  - bo WHO / `25g/ngay`
  - bo quy doi muong ca phe
  - bo `% nhu cau ngay`
  - bo nhan mau `high / medium / low`
  - bo `innerHTML`
- Scope de xuat on dinh cho cac vong sau:
  - `neutral beverage sugar label helper + safety shell only`
- Co du dieu kien sang `tool-duong-do-uong-qa-polish-v1`.
- Khong can source-lock bo sung truoc khi vao QA polish, mien la khong dua nguong/ngay va quy doi chua khoa nguon tro lai user-facing chinh.
