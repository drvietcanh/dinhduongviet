# tool-checklist-an-uong-final-review-v1

## 1. Final review

- Ket qua: pass
- Scope stable de xuat: `neutral eating checklist + safety shell only`
- Route: `/cong-cu/checklist-an-uong/`
- QA polish commit: `22218ce test: add eating checklist page QA`
- Chua deploy

## 2. File da doc

- `src/pages/cong-cu/checklist-an-uong.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-checklist-an-uong-qa-polish-v1.md`
- `reports/tools-core-status-v26.md`

## 3. File da sua

- `src/pages/cong-cu/index.astro`
- `reports/tool-checklist-an-uong-final-review-v1.md`

Khong sua route logic trong final review vi khong phat hien blocker thuc te.

## 4. Chuc nang con lai

- Checklist 7 muc
- Tick/untick bang radio
- Submit/result
- Reset

Khong co:

- localStorage
- export
- copy
- share
- free-text note
- chart
- canvas

## 5. Source audit

- `innerHTML`: khong con route-scoped
- Render ket qua bang DOM-safe API:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- Query payload khong duoc render vao DOM bang HTML tho

## 6. Safety/content

- Tool chi la checklist nhac viec an uong o muc tham khao
- Khong dung de ket luan khau phan dat/chua dat
- Khong cham diem suc khoe
- Khong con nhan "rat tot", "tam on", "can cai thien"
- Khong co dat/khong dat, tot/xau, an dung/an sai
- Khong dung wording "nen an", "khong nen an", "bat buoc", "giam/cat giam" theo nghia khuyen nghi dieu tri
- Khong co checklist benh nen
- Khong target benh nen
- Khong target kcal/protein/carb/natri/nuoc ca nhan
- Khong ket luan an toan/phu hop cho tieu duong, tang huyet ap, benh than, gout, suy tim, thai ky, tre em
- Khong huong dan chinh thuoc/insulin/loi tieu/bua an
- Tong hop chi dung "Muc da danh dau / Muc chua danh dau", khong goi la diem suc khoe

## 7. Safety shell

Safety shell con ro va dung scope:

- Checklist chi de tu nhac viec/tham khao
- Khong dung de tu chan doan hoac tu dieu chinh che do dieu tri
- Nguoi co benh nen, thai ky, tre em, dang dung thuoc hoac can che do an dieu tri nen hoi bac si/chuyen gia dinh duong

## 8. Logic/UI QA

- Tick tung muc: pass
- Untick/chuyen trang thai tung muc: pass
- Submit khi chua tick muc nao: pass, hien tong hop trung tinh `0/7`, khong crash
- Submit khi da tick nhieu muc: pass, khong sinh nhan danh gia tot/xau
- Reset: pass, dua checklist va result ve trang thai trung tinh
- Tick/untick nhanh: khong loi console trong browser QA
- Reload route: pass
- Mobile: khong overflow ngang

## 9. XSS/fuzz test

Payload da thu:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Ket qua:

- Khong tao dialog
- Khong render HTML
- Khong pha layout
- Khong gay loi console
- Khong lam hong checklist/result/reset

## 10. Browser/mobile QA

- Preview port: `4329`
- `/cong-cu/`: HTTP 200
- `/cong-cu/checklist-an-uong/`: HTTP 200
- Khong redirect
- Khong meta refresh
- Console clean trong fresh session
- Desktop khong overflow ngang
- Mobile viewport `390 x 844` khong overflow ngang
- Tick/submit/reset hoat dong tren desktop va mobile
- Empty state khi submit voi `0/7` muc da danh dau hien ro rang va trung tinh
- Payload XSS qua query khong render HTML va khong tao dialog

## 11. Card /cong-cu/

- Mo ta giu nguyen:
  - `Checklist nhắc việc ăn uống ở mức tham khảo, không dùng để kết luận khẩu phần đạt hay chưa đạt.`
- Badge `Đã kiểm v1`: da gan sau khi final review pass

## 12. Khong sua

- Khong sua engine
- Khong sua du lieu goc
- Khong sua cong thuc chung
- Khong sua dist thu cong
- Khong sua route ngoai scope

## 13. QA command

- `npm run build`: lan dau gap `EPIPE` do output pipe dai trong moi truong; rerun pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass

## 14. Ghi chu LF/CRLF

- Neu Git Windows bao LF se duoc thay bang CRLF khi cham vao file, day la canh bao moi truong, khong phai loi noi dung

## 15. Ket luan

- Final review pass
- Du dieu kien sang `tools-core-status-v27`
- Stable scope de xuat: `neutral eating checklist + safety shell only`
- Chua deploy
