# Tool Tinh Calo Tieu Thu Final Review v1

Date: 2026-07-06

Branch: `tool-tinh-calo-tieu-thu-final-review-v1`

## 1. Final review pass / fail

- Final review: `pass`

## 2. Scope stable de xuat

- `neutral activity energy estimate orientation + safety shell only`

## 3. Route

- `/cong-cu/tinh-calo-tieu-thu/`

## 4. QA polish commit

- `04d74bb test: add activity energy estimate page QA`

## 5. Chuc nang con lai

Route hien con:

- calculator tham khao
- input can nang `kg`
- input thoi gian `phut`
- chon hoat dong tu danh sach co dinh
- ket qua `kcal uoc tinh`
- validation trung tinh
- safety shell ro

Khong con:

- quy doi `kcal` sang mon an / bua an
- goi y tap bao lau de `dot` mon an
- target `kcal/ngay`
- giam can / tang can / an bu / dot bu
- danh gia van dong du / chua du
- localStorage / export / copy / share / chart / canvas
- `innerHTML` route-scoped

## 6. Nhung phan da bo / khong them lai

- Khong dua lai quy doi sang mon an / bua an.
- Khong them target `kcal/ngay`.
- Khong them giam can / tang can / an bu / dot bu.
- Khong them danh gia van dong du / chua du.
- Khong them nhan `tot/xau`, `dat/khong dat`.
- Khong them filter benh nen hoac ket luan phu hop / an toan cho nguoi benh.
- Khong them reset button rieng; route van an toan va khong can reset de dung scope.

## 7. Logic / input final QA

Cong thuc route dang dung:

- `kcal uoc tinh = MET x 3.5 x can nang (kg) / 200 x thoi gian (phut)`

Kiem tra da qua:

- can nang co don vi `kg` ro
- thoi gian co don vi `phut` ro
- hoat dong la danh sach co dinh, khong co free-text
- `MET` neu hien thi chi o muc `tham khao`
- ket qua duoc goi la `kcal uoc tinh`, khong phai calo chinh xac
- khong auto-calculate khi load
- input rong / `0` / am / qua lon / text khong crash
- `70,5` hoat dong binh thuong
- khong tu sinh target `kcal/ngay`
- khong co mau / nguong danh gia tot-xau

Case kiem nhanh:

- `70 kg`, `30 phut`, `gym-light` -> `128.6 kcal`
- `60 kg`, `45 phut`, `walk-moderate` -> `179.5 kcal`
- `70,5 kg`, `30 phut`, `gym-light` -> `129.5 kcal`

Invalid state:

- `rong/rong`: feedback trung tinh, khong crash
- `0/30`: feedback trung tinh, khong tinh
- `70/0`: feedback trung tinh, khong tinh
- `-70/30`: feedback trung tinh, khong tinh
- `9999/9999`: feedback trung tinh, khong crash
- `abc/def`: feedback trung tinh, khong crash

## 8. MET / source note final QA

- Route van giu bang MET noi bo inline.
- User-facing da frame ro:
  - `ước tính tham khảo`
  - `phụ thuộc cường độ thực tế và thể trạng`
  - `MET tham khảo`
- Route khong dung MET de ket luan van dong du / chua du.
- Route khong dung MET de dua ra muc tieu giam can, an bu, hay dieu tri.

Ghi nhan tiep:

- Source-lock ro hon cho bang MET / edition cua `Compendium of Physical Activities` van la diem nen lam ro hon sau nay.
- Diem nay khong blocker vi route hien chi la calculator tham khao + safety shell.

## 9. Safety / content final QA

Khong con user-facing:

- `nên tập`
- `không nên tập`
- `cần tập`
- `phải tập`
- `tập nhiều hơn`
- `đốt bù`
- `đốt hết món này`
- `calo dư`
- `calo thiếu`
- `đạt mục tiêu`
- `không đạt`
- `vận động đủ`
- `vận động chưa đủ`
- `tốt/xấu`
- `phù hợp cho bệnh`
- `an toàn cho người bệnh`
- `kiểm soát đường huyết/huyết áp/mỡ máu`
- `nguy cơ tim mạch`
- `nguy cơ tiểu đường`
- `điều trị béo phì`
- `chỉnh insulin/thuốc/lợi tiểu`

Tu `giảm cân`, `tăng cân`, `ăn bù` con xuat hien chi trong canh bao phu dinh:

- khong dung cong cu de tu dat muc tieu giam can
- khong dung de an bu
- khong dung de dieu tri

Day la ngu canh chap nhan duoc va phu hop safety shell.

## 10. Clinical safety shell

Route con ro cac diem:

- Cong cu chi cung cap uoc tinh nang luong tieu hao khi van dong o muc tham khao.
- Khong dung de tu xay dung che do giam can / tang can / an bu / dieu tri.
- Khong dung de tu chan doan muc van dong du / chua du.
- Nguoi co benh tim mach, tang huyet ap, tieu duong, benh than, benh ho hap, benh co xuong khop, thai ky, tre em, nguoi cao tuoi, hoac co dau nguc / kho tho / chong mat khi van dong nen hoi bac si / chuyen gia truoc khi thay doi muc van dong.
- Khong tu chinh insulin, thuoc ha duong huyet, loi tieu, thuoc tim mach hoac che do dieu tri dua tren ket qua nay.

## 11. DOM / XSS final QA

Source:

- khong con `innerHTML` route-scoped
- khong co free-text ten hoat dong
- khong co export / copy / CSV nen khong mo surface formula injection cho route nay

Payload da test:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Ket qua:

- khong tao dialog
- khong render HTML
- khong pha layout
- khong loi console

Query fuzz:

- `?q=<script>alert(1)</script>` khong render payload
- khong tao dialog
- khong loi console

## 12. Browser / mobile QA

Preview:

- port preview final review: `4322`

Ket qua:

- `/cong-cu/` tra `200`
- `/cong-cu/tinh-calo-tieu-thu/` tra `200`
- khong redirect
- khong meta refresh
- console sach trong fresh reload / session
- desktop khong overflow ngang
- mobile `390 x 844` khong overflow ngang
- calculator hoat dong voi input hop le
- input loi hien feedback trung tinh, khong crash
- khong auto-calculate khi load
- query / fuzz khong render HTML, khong tao dialog
- khong con quy doi mon an / bua an, target `kcal`, danh gia du / chua du

## 13. Card `/cong-cu/`

Card giu copy trung tinh:

- `Ước tính năng lượng tiêu hao khi vận động ở mức tham khảo, không dùng để đặt mục tiêu giảm cân, ăn bù hoặc điều trị.`

Final review pass nen da gan badge:

- `Đã kiểm v1`

## 14. Nhung gi khong sua

- engine
- du lieu goc
- cong thuc chung
- `dist`
- route ngoai scope

## 15. QA command pass / fail

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: se xac nhan cuoi vong
- `git status --short`: se xac nhan cuoi vong

## 16. Ghi chu LF/CRLF hoac EPIPE

- `npm run build` qua terminal pipe thong thuong co the gap `EPIPE` tren Windows; final review da rerun bang redirect log file va pass that su.
- `git diff --check` co the hien canh bao LF/CRLF kieu Git Windows, nhung khong co loi whitespace noi dung.

## 17. Ket luan

- Tool dat dieu kien sang `tools-core-status-v33`.
- Stable scope de xuat:
  - `neutral activity energy estimate orientation + safety shell only`
- Chua deploy.
