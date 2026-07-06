# Tool Tinh Calo Tieu Thu Spec v1

Date: 2026-07-06

Branch: `tool-tinh-calo-tieu-thu-spec-v1`

## 1. Moc dau vao

- Status baseline: `tools-core-status-v32`
- Commit dau vao: `8d14a0b docs: update tool status with simple portion safety shell v1`
- Triage baseline: `ac401cb docs: triage tools needing specs`
- Route: `/cong-cu/tinh-calo-tieu-thu/`
- Chua deploy.
- Worktree dau vao sach.

## 2. File da doc/sua

Da doc:

- `reports/tools-core-status-v32.md`
- `reports/needs-spec-triage-v1.md`
- `reports/tools-core-status-v31.md`
- `src/pages/cong-cu/index.astro`
- `src/pages/cong-cu/tinh-calo-tieu-thu.astro`
- `package.json`

Da sua:

- `src/pages/cong-cu/tinh-calo-tieu-thu.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-tinh-calo-tieu-thu-spec-v1.md`

Khong thay route nay import helper/cong thuc rieng. Toan bo logic dang nam inline trong route.

## 3. Hien trang truoc spec

Route da ton tai va la calculator user-facing dang hoat dong.

Truoc khi ha scope:

- Co form nhap:
  - can nang `kg`
  - thoi gian `phut`
  - hoat dong tu danh sach co dinh
- Co bang MET noi bo inline.
- Co cong thuc tinh `kcal` tieu thu theo MET, can nang va thoi gian.
- Co ket qua `kcal đã đốt cháy`.
- Co thanh progress bar.
- Co phan `Tương đương với:` quy doi sang do an/do uong.
- Co `innerHTML` cho khu vuc `food-equiv`.
- Tu dong tinh ket qua khi load trang.
- Chua co validation trung tinh cho:
  - rong
  - am
  - 0
  - qua lon
  - dau phay thap phan
- Chua co safety shell du ro cho:
  - khong dung de an bu
  - khong dung de dat muc tieu giam can
  - khong dung de tu dieu chinh thuoc

## 4. Rui ro user-facing

Rui ro chinh truoc spec:

- Copy `calo đốt cháy` de dan user sang framing giam can/tang can.
- Quy doi sang mon an / do an de user hieu thanh:
  - `tap xong co the bu lai`
  - `dot mon nay bang bai tap kia`
- Bang MET la du lieu noi bo, nhung chua source-lock ro edition/nguon trong route hay report cu.
- Chua co wording ngan can hanh vi:
  - an bu
  - dat muc tieu giam can
  - tu danh gia van dong du/chua du
- `innerHTML` trong ket qua la diem XSS/DOM can dong lai som.

Rui ro clinical truc tiep hien tai khong cao bang nhom BMI / mo co the, nhung route de bi suy dien thanh cong cu hanh vi:

- giam can
- an bu
- `dot b` mon an
- tu tang cuong do tap

## 5. Scope de xuat

`neutral activity energy estimate orientation + safety shell only`

Scope nay cho phep:

- giu calculator tham khao don gian
- chi hien thi `kcal` uoc tinh tu:
  - can nang
  - thoi gian
  - hoat dong co dinh
- giai thich day la uoc tinh
- nhac gioi han cong thuc va cuong do thuc te
- nhac safety shell cho nhom can hoi bac si/chuyen gia

Scope nay khong cho phep:

- giam can / tang can
- an bu / dot bu
- quy doi sang mon an
- muc tieu `kcal/ngay`
- danh gia van dong du/chua du
- ke bai tap
- khuyen nghi dieu tri

## 6. Cong thuc / MET / du lieu hoat dong hien co

Cong thuc hien co trong route:

- `kcal = MET x can nang (kg) x thoi gian (gio)`

Sau khi chinh route, cong thuc duoc giu o muc tinh toan tuong duong:

- `kcal uoc tinh = MET x can nang (kg) x thoi gian (phut) / 60`

Bang MET dang la danh sach co dinh inline cho cac nhom:

- di bo
- chay bo
- dap xe
- boi
- yoga / pilates
- tap ta
- cau long / bong da / bong ro / bong ban
- nhay
- leo cau thang
- viec nha

Nguon hien co / thieu nguon:

- Route cu co mention `Compendium of Physical Activities`.
- Chua source-lock ro:
  - edition / phien ban
  - mapping cu the tung MET value
  - ly do chon danh sach hoat dong hien tai

Danh gia:

- Du lieu MET hien tai co the tam chap nhan cho vong QA polish neu giu framing:
  - `uoc tinh tham khao`
  - `phu thuoc cuong do thuc te va the trang`
  - `khong dung de dat muc tieu giam can, an bu hoac dieu tri`
- Source-lock chi tiet cho tung MET value van nen duoc ghi nhan tiep trong vong QA polish / final review, nhung khong can chan vong nay.

## 7. Quyet dinh giu / bo

Giu:

- calculator can nang + thoi gian + hoat dong
- ket qua `kcal uoc tinh`
- progress bar mang tinh hinh anh trung tinh
- danh sach hoat dong co dinh
- ghi chu day la `uoc tinh tham khao`

Bo / ha scope:

- bo phrasing `đốt cháy` o mo ta chinh
- bo phan quy doi sang mon an / do an
- bo `innerHTML` o `food-equiv`
- bo auto-calculate khi vua load trang
- bo hanh vi fallback ngam `|| 65` / `|| 30` khi input sai

Khong them:

- localStorage
- export
- copy
- share
- chart
- canvas
- target `kcal`
- quy doi mon an
- target giam can / tang can

## 8. Wording can dung / tranh

Tranh user-facing:

- `nên tập`
- `không nên tập`
- `cần tập`
- `phải tập`
- `tập nhiều hơn`
- `đốt mỡ`
- `giảm cân`
- `tăng cân`
- `ăn bù`
- `đốt bù`
- `đốt hết món này`
- `calo dư`
- `calo thiếu`
- `đạt mục tiêu`
- `không đạt`
- `vận động đủ/chưa đủ`
- `tốt/xấu`
- `phù hợp cho bệnh`
- `an toàn cho người bệnh`
- `kiểm soát đường huyết/huyết áp/mỡ máu`
- `nguy cơ tim mạch`
- `nguy cơ tiểu đường`
- `điều trị béo phì`
- `chỉnh insulin/thuốc/lợi tiểu`

Nen dung:

- `ước tính tham khảo`
- `phụ thuộc cường độ thực tế và thể trạng`
- `không thay thế tư vấn y tế hoặc đánh giá thể lực`
- `không dùng để tự đặt mục tiêu giảm cân, ăn bù hoặc điều trị`
- `người có bệnh nền, triệu chứng bất thường khi vận động, thai kỳ, trẻ em hoặc người cao tuổi nên hỏi bác sĩ/chuyên gia`

## 9. Logic / input spec

Giữ calculator voi spec sau:

- Can nang: `kg`
- Thoi gian: `phut`
- Hoat dong: chon tu danh sach co dinh
- Khong co free-text ten hoat dong

Cong thuc user-facing cho vong sau:

- `kcal uoc tinh = MET x can nang (kg) x thoi gian (phut) / 60`

Validation can co:

- Input rong: khong crash, khong tinh
- `0`: khong crash, khong tinh
- Am: khong crash, khong tinh
- Qua lon: khong crash, thong diep trung tinh
- `NaN` / `Infinity`: khong crash, khong tinh
- Dau phay thap phan kieu Viet Nam: ho tro qua normalize `,` -> `.`

Lam tron:

- ket qua `kcal`: 1 chu so thap phan hoac 0 neu can
- `kcal/gio`: 1 chu so thap phan

Khong duoc co:

- danh gia du/chua du
- mau/nguong tot/xau
- target `kcal/ngay`
- quy doi sang mon an / bua an
- hanh vi auto-tinh ket qua khi load trang

## 10. Clinical safety shell

Route can co safety shell ro:

- Cong cu chi cung cap uoc tinh nang luong tieu hao khi van dong o muc tham khao.
- Khong dung de tu xay dung che do giam can/tang can, an bu hoac dieu tri.
- Khong dung de tu chan doan muc van dong du/chua du.
- Nguoi co benh tim mach, tang huyet ap, tieu duong, benh than, benh ho hap, benh co xuong khop, thai ky, tre em, nguoi cao tuoi, hoac co dau nguc, kho tho, chong mat khi van dong nen hoi bac si/chuyen gia truoc khi thay doi muc van dong.
- Khong tu chinh insulin, thuoc ha duong huyet, loi tieu, thuoc tim mach hoac che do dieu tri dua tren ket qua nay.

## 11. DOM / XSS spec

Yeu cau:

- Khong dung `innerHTML` voi du lieu nguoi dung nhap
- Render bang `textContent`, `appendChild`, `replaceChildren` hoac template an toan
- Khong co free-text hoat dong
- Khong co export/copy/CSV, nen khong mo them be mat formula injection trong route nay

Payload can test o vong QA polish:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Ky vong:

- khong tao dialog
- khong render HTML
- khong pha layout
- khong loi console

Ghi nhan da ha mot diem rui ro ngay trong vong spec:

- da bo `innerHTML` o ket qua quy doi mon an bang cach bo toan bo khoi quy doi nay

## 12. `/cong-cu/` card

Da dieu chinh copy theo huong trung tinh:

- `Ước tính năng lượng tiêu hao khi vận động ở mức tham khảo, không dùng để đặt mục tiêu giảm cân, ăn bù hoặc điều trị.`

Khong gan badge `Đã kiểm v1` trong vong nay.

## 13. Nhung gi khong lam trong vong nay

- Khong deploy
- Khong dua tool len `stable_v1`
- Khong cap nhat `tools-core-status`
- Khong lam QA polish / final review
- Khong sua engine, du lieu goc, cong thuc chung, `dist`
- Khong them target ca nhan, giam can, tang can, an bu, quy doi sang mon an

## 14. QA cuoi

Se chay:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

## 15. Ket luan

- Route khong can ha ve orientation-only o vong nay.
- Calculator co the duoc giu cho vong sau neu khoa scope ro la `neutral activity energy estimate orientation + safety shell only`.
- Tool da du dieu kien sang `tool-tinh-calo-tieu-thu-qa-polish-v1`.
- Ghi nhan tiep mot backlog nho cho vong QA polish / final review:
  - source-lock ro hon cho bang MET / edition cua `Compendium of Physical Activities`
  - xac nhan lai wording `MET tham khảo` co du ro va khong bi hieu thanh ket qua chinh xac cao
