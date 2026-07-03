# tool-checklist-an-uong-qa-polish-v1

## 1. Moc dau vao

- Status input: `tools-core-status-v26`
- Commit input: `186c209 docs: update tool status with nutrient ranking safety shell v1`
- Route: `/cong-cu/checklist-an-uong/`
- Chua deploy.

## 2. File da doc

- `src/pages/cong-cu/checklist-an-uong.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v26.md`
- `reports/tools-core-status-v25.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## 3. Hien trang truoc polish

- Route co form checklist 7 cau hoi radio.
- Khong co localStorage/export/copy/share/chart/canvas/free-text note.
- Co output cham diem theo nhom `good`/`alert`, summary nhu "rat tot", "Tam on", "Can cai thien nhieu".
- Co wording de bi hieu la danh gia an uong ca nhan: "co du", "co on khong", "nen an", "giam", "cat giam".
- Output render bang `resultDiv.innerHTML`.
- Khong thay filter benh nen hay target kcal/protein/carb/natri/nuoc, nhung co ngu can ha rui ro vi checklist co the bi hieu la ket luan khau phan dat/chua dat.

## 4. File da sua

- `src/pages/cong-cu/checklist-an-uong.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

`neutral eating checklist + safety shell only`

Route hien chi la checklist nhac viec an uong o muc tham khao. Output chi tong hop so muc da danh dau, khong cham diem suc khoe va khong ket luan khau phan dat/chua dat.

## 6. Nhung thu da ha rui ro

- Bo scoring `good`/`alert` va cac summary "rat tot", "Tam on", "Can cai thien nhieu".
- Bo wording khuyen an/giam/cat giam theo dang ca nhan.
- Doi cau hoi thanh "ghi nhan" va "nhac viec".
- Output dung "Muc da danh dau" / "Muc chua danh dau", khong dung dat/chua dat nhu nhan danh gia.
- Them safety shell: checklist chi de tu nhac viec, khong tu chan doan, khong tu dieu chinh che do dieu tri; nguoi co benh nen/dung thuoc/thai ky/tre em/can che do an dieu tri nen hoi bac si/chuyen gia dinh duong.
- Thay `innerHTML` bang render DOM-safe.

## 7. Logic/UI QA

- Con checklist tick/untick: co, 7 muc.
- Con nhom bua/ngay/tuan: khong, chi checklist trong ngay.
- Con diem so/phan tram hoan thanh: khong; chi hien so muc da danh dau `X/7`.
- Con nhan dat/chua dat/tot/xau/can cai thien: khong.
- Con localStorage: khong.
- Con export/copy/share: khong.
- Con free-text note: khong.
- Con chart/canvas: khong.
- Reset checklist: hoat dong, xoa result, bo radio checked, an notes.
- Tick/untick nhanh va reload: khong crash trong browser QA.

## 8. Clinical safety

- Con filter benh nen: khong.
- Con target benh nen: khong.
- Con ket luan an toan/phu hop cho tieu duong, tang huyet ap, benh than, gout, suy tim, thai ky, tre em: khong.
- Con loi khuyen nen an/khong nen an/chinh thuoc/insulin/loi tieu/bua an: khong.
- Con dat/khong dat muc tieu, thieu/thua, tot/xau nhu danh gia ca nhan: khong.
- Tu benh nen con lai chi nam trong safety shell/ghi chu can hoi bac si hoac chuyen gia.

## 9. DOM/XSS

- `innerHTML`: khong con trong route.
- Render bang: `createElement`, `textContent`, `appendChild`, `replaceChildren`.
- Input/free-text: khong co.
- Query payload da thu:
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
  - `"><img src=x onerror=alert(1)>`
  - `=HYPERLINK("http://x","x")`
  - `+SUM(1,1)`
  - `@cmd`
  - `-1+2`
- Ket qua: khong tao dialog, khong render HTML, khong hien payload trong body, khong loi console, checklist van render 7 muc.
- CSV/formula injection: khong ap dung vi route khong co copy/export.

## 10. Browser/mobile QA

- Preview port: `4328`
- `/cong-cu/`: HTTP 200, khong redirect, khong meta refresh.
- `/cong-cu/checklist-an-uong/`: HTTP 200, khong redirect, khong meta refresh.
- Console fresh tab/session: khong co error.
- Desktop: khong overflow ngang.
- Mobile viewport 390 x 844: khong overflow ngang; buttons/form full width va dung duoc.
- Checklist interaction:
  - Desktop tick q1/q2/q6/q7 va submit: result hien 7 dong, tong hop so muc da danh dau.
  - Reset: result hidden, radio checked = 0, note visible = 0.
  - Mobile tick q1 va submit: result hien, khong overflow.
- Empty state: khi chua chon muc nao, submit van hien tong hop trung tinh `0/7` va khong crash.

## 11. /cong-cu/ card

- Mo ta hien tai: "Checklist nhac viec an uong o muc tham khao, khong dung de ket luan khau phan dat hay chua dat."
- Badge `Da kiem v1`: chua gan trong vong QA polish.

## 12. Wording cam

- Grep route/index da kiem cac cum: `innerHTML`, `localStorage`, `export`, `copy`, `share`, `chart`, `canvas`, `dat`, `khong dat`, `tot`, `xau`, `nen an`, `khong nen an`, `kiem soat`, `thieu`, `thua`, `phu hop`, `an toan`, `tieu duong`, `tang huyet ap`, `benh than`, `gout`, `suy tim`, `chinh thuoc`, `insulin`, `loi tieu`, `console.log`.
- Trong route, cac tu con lai duoc chap nhan:
  - `dat/chua dat`: chi nam trong cau phu dinh "khong dung de ket luan khau phan dat hay chua dat".
  - `kiem soat`: chi nam trong ghi chu safety "khong danh gia kiem soat duong huyet" hoac can hoi chuyen gia.
  - `benh than`, `gout`, `benh nen`, `thuoc`: chi nam trong safety shell/ghi chu nhac hoi bac si/chuyen gia.
- Trong `src/pages/cong-cu/index.astro`, cac tu `tot/xau/phu hop` con o card tool khac da stable va ngoai scope. Card `checklist-an-uong` da dung wording trung tinh.

## 13. Khong sua

- Khong sua engine.
- Khong sua du lieu goc.
- Khong sua cong thuc chung.
- Khong sua route ngoai scope.
- Khong sua dist thu cong.
- Khong xu ly backlog data QA ma 6014.

## 14. QA command cuoi

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass. Report van co cac so lieu review/alias hien huu, khong phai loi cua vong nay.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass. Git tren Windows bao LF se duoc thay bang CRLF khi cham vao `src/pages/cong-cu/checklist-an-uong.astro` va `src/pages/cong-cu/index.astro`.

## 15. Worktree cuoi

- Se kiem lai bang `git status --short` sau commit.

## 16. Ket luan

- QA polish pass.
- Route du dieu kien sang `tool-checklist-an-uong-final-review-v1`.
- Chua stable/status update trong vong nay.
- Chua deploy.
