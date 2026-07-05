# Post Needs QA Polish Complete v1

Date: 2026-07-05

Branch: `post-needs-qa-polish-complete-v1`

## A. Moc dau vao

- Status baseline: `tools-core-status-v28`
- Commit: `dedc214 docs: update tool status with grocery list safety shell v1`
- Chua deploy.
- Worktree dau vao sach.

## B. Ket luan chinh

- Nhom `needs_qa_polish` da hoan tat.
- `needs_qa_polish = 0`.
- `clinical_high_risk = 0`.
- Tong `stable_v1` hien tai la `31/38`.

## C. Counts hien tai

- `stable_v1`: 31
- `needs_spec`: 5
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- `total`: 38

## D. Cac tool da xu ly trong chuoi `needs_qa_polish` sau triage

1. `ke-hoach-bua-an`
2. `lap-thuc-don-tuan`
3. `nhat-ky`
4. `tra-cuu-thuc-pham-viet`
5. `loc-thuc-pham`
6. `so-sanh-thuc-pham`
7. `so-sanh-bua-an`
8. `them-thuc-pham-dong-goi`
9. `tim-mon-tu-nguyen-lieu`
10. `doi-don-vi`
11. `bang-xep-hang`
12. `checklist-an-uong`
13. `danh-sach-di-cho`

## E. Scope on dinh cua cac tool gan day

- `so-sanh-bua-an`: `neutral meal comparison + data QA shell only`
- `them-thuc-pham-dong-goi`: `neutral packaged food entry + data QA shell only`
- `tim-mon-tu-nguyen-lieu`: `neutral ingredient-to-dish idea lookup + safety shell only`
- `doi-don-vi`: `neutral unit conversion helper + data QA shell only`
- `bang-xep-hang`: `neutral nutrient ranking/table + data QA shell only`
- `checklist-an-uong`: `neutral eating checklist + safety shell only`
- `danh-sach-di-cho`: `neutral grocery list helper + safety shell only`

## F. Nguyen tac an toan da khoa

- Khong ket luan `tot/xau`, `nen/khong nen`, `dat/khong dat`.
- Khong target benh nen.
- Khong ket luan `phu hop/an toan` cho benh.
- Khong huong dan chinh thuoc / insulin / loi tieu / bua an.
- Khong de tool user-facing giong tu van dieu tri ca nhan.
- Du lieu thuc pham phai ghi ro don vi, nguon/ngu canh, missing data va `0`.
- Tranh `innerHTML` voi du lieu nguoi dung nhap.
- XSS/fuzz da duoc kiem theo tung vong.
- Mobile `390 x 844` da duoc kiem theo tung vong.

## G. Backlog con lai

- `needs_spec`: 5 tool, can triage/spec rieng.
- `stub_or_draft`: 2 tool, can triage rieng.
- Backlog data QA ma `6014` van chua xu ly:
  - Ma `6014` -- `Dau oliu` -- `metadata/name_en` nghi ngo gay nhieu search query `thit`.
- Khong xu ly backlog nay trong vong tong ket nay.

## H. De xuat buoc tiep theo

- Khong deploy ngay.
- Nen tao vong triage cho `needs_spec`:
  - `needs-spec-triage-v1`
- Sau do moi chon tung tool trong `needs_spec`.
- `stub_or_draft` de sau hoac triage rieng sau khi `needs_spec` xong.

## I. File sua

- `reports/post-needs-qa-polish-complete-v1.md`

## J. QA cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: to confirm after report update
- `git status --short`: to confirm after report update

## K. Ket luan

- Queue `needs_qa_polish` da dong.
- Project da co `31` tool `stable_v1` tren tong `38` tool.
- `clinical_high_risk` van bang `0`.
- Nen chuyen sang pha triage/spec cho `needs_spec`.
- Chua deploy.
