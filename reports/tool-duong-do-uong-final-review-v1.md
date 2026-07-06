# tool-duong-do-uong-final-review-v1

## 1. Final review pass/fail

Pass.

## 2. Scope stable de xuat

`neutral beverage sugar label helper + safety shell only`

## 3. Route

- Route: `/cong-cu/duong-do-uong/`
- QA polish commit: `04cb077`
- Chua deploy.

## 4. Chuc nang con lai

- Search/tra cuu theo ten do uong
- Danh sach gram duong theo khau phan tham khao
- Help state trung tinh khi chua nhap
- Empty state trung tinh khi khong co ket qua
- Safety shell nhac gioi han va cac truong hop can hoi nhan vien y te

## 5. Nhung phan da bo/khong them lai

- Khong con WHO `25g/ngay`
- Khong con `% nhu cau ngay`
- Khong con quy doi `1 muong ca phe = 4g`
- Khong con nhan mau `high/medium/low`
- Khong con nhan `tot/xau/lanh manh/khong lanh manh`
- Khong con ket luan `vuot nguong`, `qua nhieu duong`, `it duong nen an toan`
- Khong con loi khuyen `nen uong/khong nen uong/giam/cat`
- Khong con filter benh nen
- Khong con target ca nhan
- Khong con noi ve nguy co ca nhan nhu tieu duong/beo phi/sau rang/tim mach
- Khong con huong dan chinh insulin/thuoc ha duong huyet/loi tieu
- Khong co `localStorage/export/copy/share/chart/canvas`
- Khong con `innerHTML` route-scoped

## 6. Logic/search/data final QA

- Search co dau/khong dau pass:
  - `sua` va `sữa` tra ve cung nhom ket qua nhu `Tra sua tran chau size M`, `Ca phe sua da`, `Sua Milo`, `Sua chua uong Yakult`
  - `tra` va `trà` tra ve cung nhom ket qua nhu `Tra dao`, `Tra chanh co duong`, `Tra sua tran chau`
  - `nuoc` va `nước` tra ve cung nhom ket qua nhu `Nuoc cam ep dong hop`, `Nuoc dua tuoi`, `Nuoc mia`, `Nuoc tang luc`
  - `coca` tra ve `Coca-Cola`
- Search rong hien help state trung tinh:
  - `Nhap ten do uong de tra cuu`
  - Goi y thu cac tu khoa nhu `tra`, `trà`, `sua`, `sữa`, `nuoc`, `nước`, `coca`
- Search khong co ket qua hien empty state trung tinh:
  - `Chua co ket qua phu hop`
  - `Hay thu ten do uong khac hoac kiem tra lai cach viet. Ket qua chi mang tinh tham khao theo du lieu hien co.`
- Search chu hoa/chu thuong hoat dong on dinh trong browser QA
- Ket qua hien thi:
  - ten do uong
  - khau phan tham khao
  - gram duong (`g duong`)
- Don vi gram duong ro rang
- Gia tri `0 g` duoc giu la so lieu that, khong bi lan voi missing data
- Khong thay missing data bi ep thanh `0`
- Khong co cong thuc/nguong ngay an trong ket qua
- Nhap nhanh, xoa nhanh, chuoi dai va payload fuzz khong lam route crash

## 7. Safety/content final QA

- Da giu wording trung tinh:
  - `tham khao`
  - `dua tren du lieu noi bo va khau phan hien thi`
  - `khong ket luan do uong tot hay xau`
  - `khong thay the tu van cua bac si hoac chuyen gia dinh duong`
  - `kiem tra khau phan, dung tich thuc uong va nhan san pham`
- Khong con wording user-facing mang nghia khuyen nghi hoac dieu tri:
  - `nen uong/khong nen uong`
  - `vuot nguong`
  - `qua nhieu duong`
  - `an toan cho nguoi benh`
  - `kiem soat duong huyet`
  - `nguy co tieu duong/beo phi/sau rang/tim mach`

## 8. Clinical safety shell

- Route con safety shell ro:
  - Chi ho tro doc nhan hoac tra cuu luong duong tham khao trong do uong pho bien
  - Khong ket luan do uong tot hay xau
  - Khong thay the tu van cua bac si hoac chuyen gia dinh duong
  - Nguoi co benh nen, dang dung thuoc, thai ky, tre em hoac can che do an dieu tri nen hoi nhan vien y te neu can huong dan ca nhan
- Khong co huong dan tu chan doan, tu dieu tri, tu chinh insulin/thuoc ha duong huyet/loi tieu

## 9. DOM/XSS final QA

- Route khong dung `innerHTML` voi du lieu nguoi dung nhap
- Render bang `createElement`, `textContent`, `appendChild`, `replaceChildren`
- Query/search khong render HTML tho
- Khong co `export/copy`, nen khong co nguy co CSV/formula injection trong route nay
- Da thu payload:
  - `<script>alert(1)</script>`
  - `<b>tra</b>`
  - `"><img src=x onerror=alert(1)>`
  - `=HYPERLINK("http://x","x")`
  - `+SUM(1,1)`
  - `@cmd`
  - `-1+2`
- Ket qua:
  - khong tao dialog
  - khong render HTML
  - khong pha layout
  - khong gay loi console
  - khong lam hong search/result/empty state

## 10. Browser/mobile QA

- Preview port: `4321`
- `/cong-cu/`: HTTP 200
- `/cong-cu/duong-do-uong/`: HTTP 200
- Khong redirect
- Khong meta refresh
- Console fresh reload/session: sach (`[]`)
- Desktop: khong overflow ngang
- Mobile `390 x 844`: khong overflow ngang
- Search co dau/khong dau hoat dong tren desktop va mobile
- Search rong/khong co ket qua khong crash
- Query/fuzz khong render HTML, khong tao dialog
- Khong con WHO/% ngay/quy doi muong ca phe/nhan mau trong user-facing chinh

Ghi chu:
- Fresh-load help state va no-result state da duoc xac nhan.
- Trong in-app browser runtime, thao tac clear input bang automation co luc khong on dinh tuyet doi, nhung route van hien dung blank/help state o fresh load va khong co loi console moi.

## 11. Card /cong-cu/

- Mo ta giu trung tinh:
  - `Tra cuu luong duong tham khao trong mot so do uong, khong dung de ket luan do uong tot hay xau.`
- Badge `Da kiem v1`: da gan sau khi final review pass

## 12. Nhung gi khong sua

- Khong sua engine
- Khong sua du lieu goc
- Khong sua cong thuc chung
- Khong sua `dist`
- Khong sua route ngoai scope

## 13. QA command pass/fail

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chi co canh bao Git Windows `LF will be replaced by CRLF` voi `src/pages/cong-cu/index.astro`
- `git status --short`: chi con dung 2 thay doi trong scope truoc khi commit

## 14. Ghi chu LF/CRLF

- `git diff --check` khong bao loi whitespace/blocker.
- Chi co canh bao Git Windows ve viec `LF` se duoc thay bang `CRLF` tren `src/pages/cong-cu/index.astro` khi Git cham vao file.

## 15. Ket luan

- Du dieu kien sang `tools-core-status-v31` neu QA cuoi pass.
- Stable scope de xuat giu nguyen: `neutral beverage sugar label helper + safety shell only`
- Chua deploy.
