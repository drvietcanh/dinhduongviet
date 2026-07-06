# Tool Duong Do Uong QA Polish v1

Date: 2026-07-06

Branch: `tool-duong-do-uong-qa-polish-v1`

## 1. Moc dau vao

- Spec baseline: `tool-duong-do-uong-spec-v1`
- Input commit: `62a64bf docs: specify safe beverage sugar tool scope`
- Route: `/cong-cu/duong-do-uong/`
- Chua deploy.

## 2. File da doc / sua

Da doc:

- `reports/tool-duong-do-uong-spec-v1.md`
- `reports/needs-spec-triage-v1.md`
- `reports/tools-core-status-v30.md`
- `src/pages/cong-cu/duong-do-uong.astro`
- `src/pages/cong-cu/index.astro`
- `package.json`

Da sua:

- `src/pages/cong-cu/duong-do-uong.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-duong-do-uong-qa-polish-v1.md`

## 3. Scope sau polish

- `neutral beverage sugar label helper + safety shell only`

## 4. Chuc nang con lai

- search / tra cuu theo ten do uong
- danh sach gram duong theo khau phan tham khao
- empty / help state trung tinh
- safety shell ro
- search khong dau

Khong co:

- form tinh theo `ml`
- `g/100 ml`
- `g/khau phan`
- `localStorage`
- export / copy / share
- chart / canvas

## 5. Nhung phan da bo / khong them lai

- `WHO 25g/ngay`
- `% nhu cau ngay`
- `1 muong ca phe = 4g`
- nhan mau `high / medium / low`
- nhan tot / xau / lanh manh
- ket luan vuot nguong / qua nhieu duong
- filter benh nen
- target ca nhan
- khuyen nghi dieu tri
- `innerHTML` route-scoped

## 6. Logic / search / data QA

Ket qua QA:

- Search co dau / khong dau: pass
  - `sua` va `sữa` tra ve cung tap ket qua lien quan den sua
  - `tra` va `trà` tra ve cung tap ket qua lien quan den tra
  - `nuoc` va `nước` tra ve cung tap ket qua lien quan den nuoc
  - `coca` tra ve `Coca-Cola`
- Search rong: pass
  - hien help state trung tinh `Nhập tên đồ uống để tra cứu`
- Search khong co ket qua: pass
  - hien empty state `Chưa có kết quả phù hợp`
- Search hoa / thuong: pass theo co che normalize hien tai
- Ket qua hien thi:
  - ten do uong
  - khau phan tham khao
  - gram duong
- Don vi gram duong ro rang: pass
- `0 g` duoc giu la so lieu that: pass (`Bia tuy loai`)
- Khong co missing data bi ep thanh `0`: pass trong route hien tai vi danh sach khong dua missing state vao result
- Khong co phan loai mau hoac ket luan suc khoe tu gram duong: pass
- Khong co cong thuc / nguong ngay an trong result: pass
- Nhap nhanh / xoa nhanh / chuoi dai test trong browser: khong crash

## 7. Safety / content QA

Da xac nhan user-facing khong con:

- `WHO 25g/ngay`
- `% nhu cau ngay`
- `1 muong ca phe = 4g`
- `high / medium / low`
- `nen uong`
- `khong nen uong`
- `vuot nguong`
- `qua nhieu duong`
- `phu hop cho tieu duong`
- `kiem soat duong huyet`
- `nguy co tieu duong / beo phi / sau rang / tim mach`
- `chinh insulin / thuoc ha duong huyet / loi tieu`

Wording dang giu dung huong:

- `tham khao`
- `tra cuu luong duong tham khao`
- `khong ket luan do uong tot hay xau`
- `khong thay the tu van cua bac si / chuyen gia dinh duong`
- `kiem tra khau phan, dung tich thuc uong va nhan san pham`

## 8. Clinical safety shell

Safety shell hien tai dat:

- cong cu chi ho tro doc nhan / tim luong duong tham khao trong do uong
- khong dung de tu chan doan, tu dieu tri hoac tu dieu chinh thuoc
- nguoi co benh nen, dang dung thuoc, thai ky, tre em hoac can che do an dieu tri nen hoi nhan vien y te neu can huong dan ca nhan

Ghi chu:

- route da giu du huong an toan cho vong QA polish
- co the lam chat them wording o final review neu can bo sung ro hon ve insulin / thuoc ha duong huyet / loi tieu

## 9. DOM / XSS QA

Da xac nhan:

- khong dung `innerHTML` route-scoped
- render bang:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- query / search khong render HTML tho
- route khong co export / copy / CSV, nen khong mo ra surface formula injection rieng trong vong nay

Payload da thu:

- `<script>alert(1)</script>`
- `<b>tra</b>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Ket qua:

- khong tao dialog
- khong render HTML
- khong tao `script` / `b` tag trong `.drink-results`
- khong pha layout
- khong loi console
- khong hong search / result / empty state

## 10. Browser / mobile QA

Preview:

- `http://127.0.0.1:4321/`

Route kiem:

- `/cong-cu/`: pass `200`
- `/cong-cu/duong-do-uong/`: pass `200`
- khong redirect: pass
- khong meta refresh: pass
- console fresh reload / session: clean

Desktop:

- page identity: pass
- meaningful content render: pass
- khong blank / khong overlay framework: pass
- overflow ngang: pass

Mobile `390 x 844`:

- overflow ngang: pass
- search `trà`: pass
- search rong: pass
- search khong ket qua: pass
- query / fuzz khong render HTML, khong tao dialog: pass

Ghi chu browser:

- anh chup `/cong-cu/duong-do-uong/` desktop lay duoc trong session
- chup screenshot bang CDP o mot so buoc sau bi timeout, nhung DOM / URL / console / interaction proof van day du va khong cho thay runtime issue cua route

## 11. Card `/cong-cu/`

Mo ta card da duoc dong bo sat hon voi route thuc te:

- `Tra cứu lượng đường tham khảo trong một số đồ uống, không dùng để kết luận đồ uống tốt hay xấu.`

Badge:

- chua gan `Đã kiểm v1`

## 12. Nhung gi khong sua

- engine
- du lieu goc
- cong thuc chung
- `dist`
- route ngoai scope
- tools-core-status
- badge `Đã kiểm v1`

## 13. QA cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
  - chi co canh bao LF / CRLF Git Windows khi stage, khong co loi diff check
- `git status --short`: truoc commit con:
  - `src/pages/cong-cu/duong-do-uong.astro`
  - `src/pages/cong-cu/index.astro`
  - `reports/tool-duong-do-uong-qa-polish-v1.md`

## 14. Ket luan

- Route dat scope `neutral beverage sugar label helper + safety shell only`
- Da polish xong cac diem rui ro chinh:
  - bo nguong WHO / `% ngay`
  - bo quy doi muong ca phe
  - bo nhan mau
  - bo `innerHTML`
  - bo display all khi search rong, thay bang help state trung tinh
  - dong bo card `/cong-cu/` theo huong tra cuu
- Du dieu kien sang `tool-duong-do-uong-final-review-v1`
- Chua deploy.
