# tool-bmi-final-review-v1

## 1. Final review pass/fail

Pass.

## 2. Scope stable de xuat

`safe BMI orientation + safety shell only`

## 3. Route

- Route: `/cong-cu/bmi/`

## 4. QA polish commit

- `6d6108d` - `test: add BMI page QA`

## 5. Chuc nang con lai

- Nhap can nang (kg)
- Nhap chieu cao (cm)
- Tinh BMI tham khao
- Hien ket qua BMI lam tron 1 chu so thap phan
- Giai thich day la chi so sang loc/tham khao
- Ghi chu gioi han cua BMI
- Safety shell nhac hoi bac si/chuyen gia khi can danh gia ca nhan

## 6. Nhung phan da bo/khong them lai

- Khong con vong eo
- Khong con gioi tinh
- Khong con tuoi de tinh/phan loai
- Khong con Creff
- Khong con can nang ly tuong
- Khong con khoang can nang khoe manh
- Khong con bang phan loai BMI
- Khong con danh gia nguy co benh
- Khong con loi khuyen giam can/tang can
- Khong con muc tieu BMI/can nang
- Khong con BMR/TDEE/calo/khau phan
- Khong con filter benh nen
- Khong co localStorage/export/copy/share/chart/canvas
- Khong con innerHTML route-scoped

## 7. Logic/input final QA

- Cong thuc giu dung: `BMI = can nang kg / (chieu cao m)^2`
- Chieu cao nhap theo `cm`, can nang nhap theo `kg`
- Test hop le:
  - `170 cm + 70 kg -> 24.2 kg/m²`
  - `160 cm + 50 kg -> 19.5 kg/m²`
- `1,70` o o chieu cao bi chan nhe voi thong bao: `Chieu cao can nhap theo cm, vi du 170 hoac 170,5.`
- Input rong/rong khong crash; thong bao: `Vui long nhap chieu cao va can nang truoc khi tinh BMI.`
- `0/70`, `70/0`, `-170/70`, `9999/9999`, `abc/def` deu khong crash
- Input khong hop le khong tinh BMI
- Ket qua lam tron 1 chu so thap phan
- Khong sinh phan loai/chuan doan/nguy co benh sau khi tinh

## 8. Safety/content final QA

- Giu wording an toan:
  - `BMI tham khao`
  - `chi so sang loc don gian`
  - `khong thay the danh gia lam sang`
  - `ket qua can duoc hieu cung tuoi, gioi, vong eo, thanh phan co the, benh nen va boi canh suc khoe`
  - `nen hoi bac si/chuyen gia dinh duong neu can danh gia ca nhan`
- Khong con wording cam user-facing:
  - `ban bi beo phi`
  - `ban bi suy dinh duong`
  - `nguy co cao mac benh`
  - `can giam can ngay`
  - `can tang can ngay`
  - `can nang ly tuong cua ban la`
  - `nen an it hon / an nhieu hon`
  - `dat/khong dat muc tieu`
  - `tot/xau`
  - `an toan/phu hop cho benh`
  - `kiem soat tot/kem`
  - `chinh thuoc/insulin/loi tieu`
  - `dieu tri beo phi / dieu tri suy dinh duong`

## 9. Clinical safety shell

- Route con nhac ro:
  - BMI khong phan anh day du thanh phan co the
  - BMI co the kem phu hop trong thai ky, tre em, nguoi cao tuoi, van dong vien, nguoi co phu hoac thay doi can nang nhanh
  - Nguoi co benh nen, dang dung thuoc, roi loan an uong, thai ky, tre em hoac can muc tieu dieu tri nen hoi bac si/chuyen gia dinh duong
  - Khong tu dieu chinh thuoc, insulin, loi tieu hoac che do dieu tri dua tren BMI

## 10. DOM/XSS final QA

- Khong dung `innerHTML` voi du lieu nguoi dung nhap
- Render route bang DOM-safe API va `textContent`
- Payload da thu:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
  - `\"><img src=x onerror=alert(1)>`
  - `=HYPERLINK("http://x","x")`
  - `+SUM(1,1)`
  - `@cmd`
  - `-1+2`
- Ket qua:
  - Khong tao dialog
  - Khong render HTML
  - Khong pha layout
  - Khong loi console
  - Khong lam hong form/ket qua

## 11. Browser/mobile QA

- Preview port: `4321`
- `/cong-cu/` -> HTTP `200`
- `/cong-cu/bmi/` -> HTTP `200`
- Khong redirect
- Khong meta refresh
- Console sach trong fresh reload/session tren desktop va mobile
- Desktop khong overflow ngang
- Mobile `390 x 844` khong overflow ngang
- Tinh BMI voi input hop le hoat dong
- Input loi hien thi trung tinh, khong crash
- Badge BMI tren `/cong-cu/` hien `Da kiem v1`

## 12. Card /cong-cu/

- Mo ta giu nguyen:
  - `Tinh BMI o muc tham khao va nhac cac gioi han cua chi so nay, khong thay the danh gia lam sang.`
- Badge `Da kiem v1`: da gan trong vong final review nay

## 13. Nhung gi khong sua

- Khong sua engine
- Khong sua du lieu goc
- Khong sua cong thuc chung ngoai pham vi route BMI
- Khong sua `dist`
- Khong sua route ngoai scope, tru card `/cong-cu/` de them badge BMI

## 14. QA command pass/fail

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chi co canh bao LF/CRLF Git Windows
- `git status --short`: dung nhu ky vong truoc commit (`src/pages/cong-cu/bmi.astro`, `src/pages/cong-cu/index.astro`, `reports/tool-bmi-final-review-v1.md`)

## 15. Ghi chu LF/CRLF

- Mot lan `npm run build` khi chay song song bi `EPIPE` do output pipe dai; rerun don le da pass.
- `git diff --check` chi bao canh bao LF se duoc thay bang CRLF trong working copy Windows, khong co loi whitespace/blocker.

## 16. Ket luan

- Du dieu kien sang `tools-core-status-v29` neu full QA command cuoi deu pass.
- Chua deploy.
