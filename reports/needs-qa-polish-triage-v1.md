## 1. Moc dau vao

- Post-P0 commit: `ddfca30 docs: summarize completion of clinical high risk tools`.
- Status v15 commit: `50b0295 docs: update tool status with glycemic index safety shell v1`.
- Branch triage: `needs-qa-polish-triage-v1`.
- Chua deploy.

## 2. Counts xac nhan

- `stable_v1`: `18`
- `needs_spec`: `5`
- `needs_qa_polish`: `13`
- `stub_or_draft`: `2`
- `clinical_high_risk`: `0`
- total: `38`

Ket qua doi chieu:

- So lieu trong `reports/tools-core-status-v15.md` khop voi tong ket sau P0.
- Khong con tool `clinical_high_risk` nao trong status hien tai.

## 3. Danh sach day du 13 tool `needs_qa_polish`

| # | Slug | Ten hien thi | Route | Trang thai | Ghi chu tu status v15 | Rui ro | Lien quan benh/thuoc/nhom dac biet | Form/input/output ca nhan | Du lieu/cong thuc can kiem | Nguy co wording giong tu van |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `bang-xep-hang` | Bang xep hang thuc pham | `/cong-cu/bang-xep-hang` | `needs_qa_polish` | Data-driven ranking; needs source/UX polish before v1 badge. | medium | Khong truc tiep, nhung co the bi doc nhu xep hang "tot hon" cho suc khoe. | Co tuong tac client-side, khong profile ca nhan. | Co du lieu dinh duong va render bang xep hang. | Co, neu wording "top tot" hoac "it/nhieu" bi hieu thanh khuyen nghi suc khoe. |
| 2 | `checklist-an-uong` | Checklist an uong hom nay | `/cong-cu/checklist-an-uong` | `needs_qa_polish` | Low-risk habit checklist; needs wording/mobile QA. | low | Khong. | Co form radio, output tong hop theo lua chon. | Logic checklist nhe, khong cong thuc nang. | Co mot it, neu thong diep ket qua nghe qua chi dinh. |
| 3 | `danh-sach-di-cho` | Danh sach di cho | `/cong-cu/danh-sach-di-cho` | `needs_qa_polish` | Useful workflow tool; low clinical risk. | low | Khong. | Co search, checkbox, workflow ca nhan. | Co fetch du lieu cong thuc/thuc pham. | Thap. |
| 4 | `doi-don-vi` | Doi don vi | `/cong-cu/doi-don-vi` | `needs_qa_polish` | Conversion tool; needs edge-case/manual UI QA. | low | Khong. | Co input so, select. | Co cong thuc chuyen doi don vi. | Rat thap. |
| 5 | `ke-hoach-bua-an` | Ke hoach bua an ca nhan hoa | `/cong-cu/ke-hoach-bua-an` | `needs_qa_polish` | Heuristic meal planning; needs source notes and UI QA. | high | Co: dai thao duong, tang huyet ap, CKD, gout, roi loan mo mau. | Co form ca nhan: tuoi, gioi, can nang, chieu cao, muc tieu, benh nen; output ca nhan. | Co heuristic meal logic, kcal/macro, BMR/TDEE-like output. | Cao, vi co wording "phu hop cho..." va goi y theo benh nen. |
| 6 | `lap-thuc-don-tuan` | Lap thuc don tuan | `/cong-cu/lap-thuc-don-tuan` | `needs_qa_polish` | Meal planner appears usable but needs testable rules and UI QA. | high | Co: tieu duong, tang huyet ap, suy than, gout, beo phi, mo mau. | Co input muc tieu kcal, bo loc benh nen/an kieng; output thuc don tuan ca nhan hoa. | Co logic loc mon, tip theo benh, kcal/day. | Cao, vi co target kcal va tip benh nen/han che muoi-dam-kali-photpho. |
| 7 | `loc-thuc-pham` | Loc thuc pham nang cao | `/cong-cu/loc-thuc-pham` | `needs_qa_polish` | Data filtering tool; needs QA around tags/ranges. | medium | Gian tiep: tag duong huyet, natri, kali, purin. | Co form loc nhieu truong. | Co du lieu dinh duong va tag/range filter. | Trung binh, vi tag "duong huyet thap/cao", "it natri", "nhieu kali" co the bi doc nhu huong dan benh ly. |
| 8 | `nhat-ky` | Nhat ky an uong | `/cong-cu/nhat-ky` | `needs_qa_polish` | Daily total workflow; needs tests around totals and targets. | high | Khong benh cu the, nhung co muc tieu kcal/macro ca nhan. | Co profile, tim kiem, localStorage, target, tong ket ca nhan. | Co tinh tong dinh duong, muc tieu, suggestions. | Cao, vi co "muc tieu", goi y tang/giam nang luong, natri va tom tat ca nhan. |
| 9 | `so-sanh-bua-an` | So sanh bua an | `/cong-cu/so-sanh-bua-an` | `needs_qa_polish` | Meal comparison should get total/edge-case tests. | medium | Khong truc tiep. | Co select 2-4 bua an, output so sanh. | Co so sanh dinh duong theo du lieu mon. | Trung binh, vi copy hien co "phu hop voi muc tieu cua ban". |
| 10 | `so-sanh-thuc-pham` | So sanh thuc pham | `/cong-cu/so-sanh-thuc-pham` | `needs_qa_polish` | Data comparison; needs UI QA and missing-data handling review. | medium | Gian tiep qua natri, phospho, duong, beo bao hoa. | Co search va chon 2-4 thuc pham. | Co du lieu so sanh da chi tieu. | Trung binh, vi copy co "tot hon cho muc tieu suc khoe cua ban". |
| 11 | `them-thuc-pham-dong-goi` | Them thuc pham dong goi | `/cong-cu/them-thuc-pham-dong-goi` | `needs_qa_polish` | User-entered label conversion needs validation tests. | medium | Khong truc tiep. | Co form nhap nhan dinh duong, localStorage, import/export. | Co validation nutrient fields va persistence. | Thap-den-trung binh; chu yeu la du lieu nguoi dung nhap va validation. |
| 12 | `tim-mon-tu-nguyen-lieu` | Tim mon tu nguyen lieu | `/cong-cu/tim-mon-tu-nguyen-lieu` | `needs_qa_polish` | Search/suggestion workflow; low clinical risk. | low | Khong. | Co checkbox ingredient selection, suggestion output. | Co du lieu ingredient map/recipe mapping. | Thap. |
| 13 | `tra-cuu-thuc-pham-viet` | Tra cuu thuc pham Viet Nam | `/cong-cu/tra-cuu-thuc-pham-viet` | `needs_qa_polish` | Core data lookup; needs dedicated QA around missing values and units. | medium | Gian tiep, vi user co the suy dien cho benh nen. | Co search, gram input, nutrient detail output. | Co du lieu foods/nutrients, scaling theo gram, unit/missing-data handling. | Trung binh, chu yeu do co nhieu nutrient va de bi doc qua muc neu wording khong chat. |

## 4. Phan nhom rui ro / uu tien

### Uu tien cao

Nhung tool nay phu hop voi rule uu tien so 1: co input/output ca nhan va de bi hieu thanh tu van suc khoe.

1. `ke-hoach-bua-an`
   - Form ca nhan day du.
   - Co condition filter benh nen.
   - Co output kcal/macro/BMR/TDEE-like va copy "phu hop cho nguoi...".
   - Nguy co cao nhat trong queue `needs_qa_polish`.

2. `lap-thuc-don-tuan`
   - Meal planner theo `calTarget`, bo loc benh nen va an kieng.
   - Co disease tips rat cu the, gom CKD, tang huyet ap, tieu duong, gout.
   - Co output thuc don + badge kcal lech/chuan.

3. `nhat-ky`
   - Co profile ca nhan, localStorage, tong ket kcal/macro, target va suggestion.
   - De bi hieu la cong cu dua muc tieu an uong ca nhan.

### Uu tien vua

Nhung tool nay phu hop voi rule uu tien so 2: co du lieu/canh bao/logic can QA ky, nhung khong bang nhom tren ve muc do ca nhan hoa.

4. `loc-thuc-pham`
   - Nhieu bo loc nutrient/tag.
   - Tag nhu `duong huyet thap/cao`, `it natri`, `nhieu kali`, `it purin` can wording/an toan ro hon.

5. `tra-cuu-thuc-pham-viet`
   - Core lookup nen blast radius rong.
   - Can QA ky missing values, don vi, scaling theo gram, va text hien thi.

6. `so-sanh-thuc-pham`
   - So sanh nutrient breadth kha rong.
   - Copy hien tai co xu huong danh gia "tot hon" theo muc tieu suc khoe.

7. `so-sanh-bua-an`
   - Co output so sanh dinh duong, de truot sang giong khuyen nghi muc tieu.

8. `them-thuc-pham-dong-goi`
   - User-entered data + localStorage + import/export.
   - Can validation, duplicate/edit flow, don vi va safe persistence polish.

9. `bang-xep-hang`
   - Data-driven ranking co the bi doc thanh "xep hang tot/xau cho suc khoe".
   - Can polish copy, tabs, missing data, va source notes.

### Uu tien thap

Nhung tool nay phu hop voi rule uu tien so 3-4: workflow/layout polish, rui ro logic va y khoa thap hon.

10. `doi-don-vi`
11. `danh-sach-di-cho`
12. `tim-mon-tu-nguyen-lieu`
13. `checklist-an-uong`

Ly do de sau:

- Rui ro clinical thap.
- Khong co disease output manh.
- Chu yeu la mobile QA, empty states, accessibility, va edge cases nhe.

## 5. Tool de xuat xu ly dau tien o vong sau

- Slug: `ke-hoach-bua-an`
- Route: `/cong-cu/ke-hoach-bua-an`
- Vong de xuat: `tool-ke-hoach-bua-an-qa-polish-v1`

### Ly do chon

- Dung nhat voi uu tien user dat ra: tool co input/output ca nhan va de bi hieu thanh tu van suc khoe.
- Trong queue `needs_qa_polish`, day la route co:
  - form profile ca nhan;
  - condition filter theo benh nen;
  - output kcal/macro va BMR/TDEE-like wording;
  - copy "phu hop cho nguoi..." cho dai thao duong, tang huyet ap, CKD, gout.
- Neu muon dua them tool gan `stable_v1`, day la diem nghen QA/polish lon nhat can xu ly truoc.

### Scope vong sau de xuat

- Browser/manual QA day du desktop + mobile.
- Audit wording user-facing de tranh bi doc thanh tu van dieu tri.
- Kiem output ca nhan, kcal/macro, benh nen, va meal recommendation wording.
- Chi polish/canh bao/layout/report trong scope `needs_qa_polish`; neu phat hien route vuot nguong an toan, can pause de realign thay vi tu y promote.

## 6. Cac tool khong chon va ly do de sau

- `lap-thuc-don-tuan`: rui ro cao, nhung scope rong hon va co nhieu disease tips/target; de sau `ke-hoach-bua-an` mot nhip de khong mo hai meal-planner nang cung luc.
- `nhat-ky`: cung rui ro cao, nhung sau khi xu ly planner truoc se de xac dinh quy uoc wording/muc tieu cho tool diary.
- `loc-thuc-pham`: co nutrient/tag risk, nhung it ca nhan hoa hon 3 tool uu tien cao.
- `tra-cuu-thuc-pham-viet`: blast radius rong, nhung logic lookup data ro hon so voi planner.
- `so-sanh-thuc-pham`, `so-sanh-bua-an`: can QA wording "tot hon" va missing-data, nhung rui ro dieu tri thap hon planner.
- `them-thuc-pham-dong-goi`: can validation/localStorage QA, nhung khong can xu ly truoc nhom co output suc khoe ca nhan.
- `bang-xep-hang`: can UX/source polish, nhung khong gap bang tool planner.
- `doi-don-vi`, `danh-sach-di-cho`, `tim-mon-tu-nguyen-lieu`, `checklist-an-uong`: rui ro thap, co the xu ly sau.

## 7. Khong sua trong vong nay

- Khong sua engine.
- Khong sua du lieu.
- Khong sua cong thuc.
- Khong sua `dist`.
- Khong sua route tool.
- Khong cap nhat stable/status.

## 8. QA / check da chay

Trong vong triage nay:

- Khong chay browser preview.
- Ly do: vong nay chi lap danh sach, phan nhom va de xuat thu tu uu tien; khong sua route hay UI, nen browser QA khong tao them gia tri quyet dinh o buoc triage.

Van chay bo QA repo o cuoi vong:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

Neu lan build dau gap `EPIPE` do output pipe tren Windows, rerun va ghi nhan la loi moi truong, khong phai loi app.

## 9. Worktree cuoi

- Se duoc xac nhan sach sau khi commit report neu tat ca QA pass.

## 10. Ket luan

- San sang sang vong QA polish cho tool dau tien trong queue `needs_qa_polish`.
- Tool de xuat tiep theo: `ke-hoach-bua-an`.
- Branch/vong de xuat: `tool-ke-hoach-bua-an-qa-polish-v1`.
- Chua deploy.
