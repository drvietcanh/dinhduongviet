# Tool Tinh Calo Tieu Thu QA Polish v1

Date: 2026-07-06

Branch: `tool-tinh-calo-tieu-thu-qa-polish-v1`

## 1. Moc dau vao

- Spec baseline: `tool-tinh-calo-tieu-thu-spec-v1`
- Commit dau vao: `b553878 docs: specify safe activity energy estimate scope`
- Route: `/cong-cu/tinh-calo-tieu-thu/`
- Chua deploy.
- Worktree dau vao sach.

## 2. File da doc/sua

Da doc:

- `reports/tool-tinh-calo-tieu-thu-spec-v1.md`
- `reports/needs-spec-triage-v1.md`
- `reports/tools-core-status-v32.md`
- `src/pages/cong-cu/tinh-calo-tieu-thu.astro`
- `src/pages/cong-cu/index.astro`
- `package.json`

Da sua:

- `src/pages/cong-cu/tinh-calo-tieu-thu.astro`
- `reports/tool-tinh-calo-tieu-thu-qa-polish-v1.md`

Khong sua them engine, du lieu goc, cong thuc chung, `dist`, hay route ngoai scope.

## 3. Scope sau polish

`neutral activity energy estimate orientation + safety shell only`

## 4. Chuc nang con lai

Route hien con:

- calculator tham khao
- input can nang `kg`
- input thoi gian `phut`
- chon hoat dong tu danh sach co dinh
- ket qua `kcal uoc tinh`
- validation trung tinh
- safety shell ro
- progress bar trung tinh

Route hien khong con:

- quy doi `kcal` sang mon an / bua an
- goi y tap bao lau de `dot` mon an
- target `kcal/ngay`
- auto-calculate khi load
- `innerHTML` route-scoped
- `localStorage/export/copy/share/chart/canvas`

## 5. Nhung phan da bo / khong them lai

- Khong dua lai quy doi sang mon an / bua an.
- Khong them target giam can / tang can / an bu / dot bu.
- Khong them danh gia van dong du / chua du.
- Khong them nhan tot / xau / dat / khong dat.
- Khong them filter benh nen hoac target benh nen.
- Khong them localStorage / export / copy / share / chart / canvas.
- Khong them reset rieng; route van hoat dong an toan ma khong can reset button.

## 6. Logic / input QA

Cong thuc dang dung:

- `kcal uoc tinh = MET x 3.5 x can nang (kg) / 200 x thoi gian (phut)`

Kiem tra da qua:

- Don vi ro:
  - can nang: `kg`
  - thoi gian: `phut`
- Ket qua duoc goi la `kcal uoc tinh`, khong phai calo chinh xac.
- Khong auto-calculate khi load.
- Input rong khong crash, hien feedback trung tinh.
- Input `0` khong crash, khong tinh.
- Input am khong crash, khong tinh.
- Input qua lon khong crash, hien feedback trung tinh.
- Input text / script khong crash.
- Ho tro dau phay thap phan:
  - `70,5` tinh duoc binh thuong.
- Khong co nguong mau / nhan danh gia tot-xau.
- Khong tu sinh target `kcal/ngay`.

Case tham chieu browser QA:

- `70 kg`, `30 phut`, `gym-light` (`MET 3.5`) -> `128.6 kcal`
- `60 kg`, `45 phut`, `walk-moderate` (`MET 3.8`) -> `179.5 kcal`
- `70,5 kg`, `30 phut`, `gym-light` -> `129.5 kcal`

Luu y:

- Route khong co option `MET 4.0` chinh xac trong danh sach hien tai, nen test thu hai duoc ghi theo option gan nhat co that trong UI.

## 7. MET / source note QA

- Route van giu bang MET noi bo inline.
- User-facing da ha wording xuong:
  - `MET tham khảo`
  - `phụ thuộc cường độ thực tế và thể trạng`
- Khong dung MET de ket luan van dong du / chua du.
- Khong dung MET de dua ra muc tieu giam can, an bu, hay dieu tri.

Ghi nhan tiep:

- Source-lock ro hon cho bang MET / edition cua `Compendium of Physical Activities` van la viec nen lam o vong final review hoac backlog du lieu cong cu.
- Diem nay khong blocker vi route da bi gioi han ro thanh calculator tham khao + safety shell.

## 8. Safety / content QA

Khong con user-facing:

- quy doi sang mon an / bua an
- `ăn bù`
- `đốt bù`
- `đốt hết món này`
- target `kcal`
- nhan `đạt / không đạt`
- nhan `tốt / xấu`
- ket luan `vận động đủ / chưa đủ`
- khuyen nghi `nên tập / không nên tập / tập nhiều hơn`
- filter benh nen
- ket luan phu hop / an toan cho nguoi benh

Wording giu theo huong an toan:

- `ước tính tham khảo`
- `phụ thuộc cường độ thực tế và thể trạng`
- `không thay thế tư vấn y tế hoặc đánh giá thể lực`
- `không dùng để tự đặt mục tiêu giảm cân, ăn bù hoặc điều trị`

Tu `giảm cân` / `tăng cân` con xuat hien chi trong cau canh bao khong su dung cong cu de tu dat muc tieu hay tu dieu tri, khong phai loi khuyen hanh vi.

## 9. Clinical safety shell

Route hien co safety shell ro:

- Cong cu chi cung cap uoc tinh nang luong tieu hao khi van dong o muc tham khao.
- Khong dung de tu xay dung che do giam can / tang can / an bu / dieu tri.
- Khong dung de tu chan doan muc van dong du / chua du.
- Nguoi co benh tim mach, tang huyet ap, tieu duong, benh than, benh ho hap, benh co xuong khop, thai ky, tre em, nguoi cao tuoi, hoac co dau nguc / kho tho / chong mat khi van dong nen hoi bac si / chuyen gia truoc khi thay doi muc van dong.
- Khong tu chinh insulin, thuoc ha duong huyet, loi tieu, thuoc tim mach hoac che do dieu tri dua tren ket qua nay.

## 10. DOM / XSS QA

Kiem tra source:

- Khong con `innerHTML` route-scoped.
- Ket qua render bang `textContent` va thay doi style DOM an toan.
- Khong co free-text ten hoat dong.
- Khong co export / copy nen khong mo be mat CSV / formula injection cho route nay.

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

- `?q=<script>alert(1)</script>` khong render payload ra man hinh
- khong tao dialog
- khong loi console

## 11. Browser / mobile QA

Preview:

- port: `4321`

Kiem tra da qua:

- `/cong-cu/` tra `200`
- `/cong-cu/tinh-calo-tieu-thu/` tra `200`
- khong redirect
- khong meta refresh
- console sach trong fresh reload/session
- desktop khong overflow ngang
- mobile `390 x 844` khong overflow ngang
- calculator hoat dong voi input hop le
- input loi hien feedback trung tinh, khong crash
- khong auto-calculate khi load
- khong con quy doi mon an / bua an
- query / fuzz khong render HTML, khong tao dialog

Ghi nhan:

- Route khong co reset button rieng; khong phai blocker trong scope hien tai.

## 12. Card `/cong-cu/`

Card hien giu copy trung tinh:

- `Ước tính năng lượng tiêu hao khi vận động ở mức tham khảo, không dùng để đặt mục tiêu giảm cân, ăn bù hoặc điều trị.`

Khong gan badge `Đã kiểm v1` trong vong QA polish nay.

## 13. Nhung gi khong sua

- engine
- du lieu goc
- cong thuc chung ngoai route nay
- `dist`
- route ngoai scope

## 14. QA cuoi

- `npm run build`: pass
  - co gap `EPIPE` khi chay build qua pipe terminal thong thuong; rerun bang redirect log file thi pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: se xac nhan cuoi vong
- `git status --short`: se xac nhan cuoi vong

## 15. Ket luan

- Route da duoc polish dung theo scope `neutral activity energy estimate orientation + safety shell only`.
- Tool da du dieu kien sang `tool-tinh-calo-tieu-thu-final-review-v1`.
- Chua deploy.
