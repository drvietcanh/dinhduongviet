# Needs Spec Triage v1

Date: 2026-07-05

Branch: `needs-spec-triage-v1`

## 1. Moc dau vao

- Checkpoint report: `reports/post-needs-qa-polish-complete-v1.md`
- Status baseline: `reports/tools-core-status-v28.md`
- Commit dau vao: `dedc214 docs: update tool status with grocery list safety shell v1`
- Checkpoint commit gan nhat: `85458d3 docs: summarize completion of QA polish tools`
- Chua deploy.
- Worktree dau vao sach.

## 2. Counts hien tai

- `stable_v1`: 31
- `needs_spec`: 5
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- `total`: 38

## 3. Danh sach chinh xac 5 tool `needs_spec`

Danh sach nay duoc xac nhan bang cach doi chieu:

- `reports/tools-core-status-v1.md` la moc phan loai goc
- `reports/tools-core-status-v28.md` cho counts hien tai
- `src/pages/cong-cu/index.astro` cho cac tool con lai chua co badge `Đã kiểm v1` va khong nam trong nhom draft

5 tool `needs_spec` hien tai:

1. `bmi`
2. `ti-le-mo-co-the`
3. `tinh-calo-tieu-thu`
4. `khau-phan-don-gian`
5. `duong-do-uong`

## 4. Bang audit tung tool

| Slug | Route | Ten hien thi tren `/cong-cu/` | File route | Hien trang | User input | localStorage / export / copy / share | innerHTML | Du lieu / cong thuc | Target ca nhan / benh nen | Rui ro user-facing | Muc uu tien |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `bmi` | `/cong-cu/bmi/` | `Tính BMI & Vòng eo` | co | calculator dang hoat dong, inline JS | co: can nang, chieu cao, vong eo, gioi tinh | khong thay | khong thay route-scoped `innerHTML`, nhung co output text cứng + `alert()` | BMI, vong eo, “cân nặng lý tưởng (Creff)”, khoang can nang khoe manh | co output “ly tuong”; khong co disease filter explicit | co copy “thừa cân”, “béo phì”, “nguy cơ”, “cần giảm cân”, tham chiếu tieu duong / tang huyet ap / mo mau | `P0` |
| `ti-le-mo-co-the` | `/cong-cu/ti-le-mo-co-the/` | `Tỷ lệ mỡ cơ thể & WHR` | co | calculator dang hoat dong, inline JS | co: gioi tinh, chieu cao, can nang, eo, mong | khong thay | co nhieu cho dung `innerHTML` cho ket qua | US Navy simplified, WHR, BMI, tong hop danh gia | khong target benh nen explicit, nhung co danh gia suc khoe ca nhan | co nhan “Tốt”, “Lưu ý”, “Cần cải thiện”, “Nguy cơ cao”, “mỡ nội tạng”, “tiểu đường”, “bệnh tim mạch” | `P0` |
| `tinh-calo-tieu-thu` | `/cong-cu/tinh-calo-tieu-thu/` | `Calo tiêu thụ khi tập` | co | calculator dang hoat dong, inline JS | co: can nang, thoi gian, hoat dong | khong thay | co `innerHTML` o food equivalent | MET table noi bo + food equivalent | khong target benh nen explicit, khong disease filter | co nguy co bi hieu thanh chinh xac cao; co “tương đương đồ ăn” de dan user sang bu tru nang luong qua muc | `P1` |
| `khau-phan-don-gian` | `/cong-cu/khau-phan-don-gian/` | `Khẩu phần đơn giản` | co | static/tabbed lookup | khong co free-text, chi click tab | khong thay | co `content.innerHTML = html` | bang quy doi khau phan, kcal, muoi cho do uong/gia vi | co wording “người trưởng thành trung bình”, dieu chinh tuy nhu cau | chua co source/spec ro cho cac gia dinh chén/muỗng/lát/miếng; co quy doi muoi user-facing | `P1` |
| `duong-do-uong` | `/cong-cu/duong-do-uong/` | `Đường trong đồ uống` | co | data lookup/search dang hoat dong | co search text | khong thay | co `grid.innerHTML` | du lieu duong noi bo + so sanh WHO 25g/ngay | khong target ca nhan explicit, khong disease filter | de bi suy dien thanh khuyen nghi cho tieu duong; co nhan mau `high/medium/low`; chua ro nguon tung muc | `P1` |

## 5. Rui ro user-facing theo tung tool

### `bmi`

- Dung cac nhan va thong diep gan voi danh gia suc khoe ca nhan:
  - `Gầy`
  - `Thừa cân`
  - `Béo phì độ I/II`
  - `Nguy cơ cao cho sức khoẻ`
- Co thong diep dan huong den benh:
  - `tiểu đường`
  - `tăng huyết áp`
  - `mỡ máu`
- Co output `cân nặng lý tưởng (Creff)` va `khoảng cân nặng khoẻ mạnh`, can source-lock ro truoc khi coi la scope on dinh.
- Co rui ro bi doc nhu cong cu dat muc tieu can nang ca nhan, du route chua qua spec/safety shell vong rieng.

### `ti-le-mo-co-the`

- Hien co nhieu nhan suc khoe truc tiep:
  - `Tốt!`
  - `Lưu ý`
  - `Cần cải thiện`
  - `Nguy cơ hội chứng chuyển hóa cao`
- Co ket luan benh ly / nguy co:
  - `bệnh tim mạch`
  - `tiểu đường`
- Dung `innerHTML` de render ket qua tong hop va cac bang tham chieu.
- Can source-lock cho:
  - cong thuc US Navy simplified
  - nguong WHR
  - nguong % mo theo gioi

### `tinh-calo-tieu-thu`

- Rui ro chinh khong nam o clinical wording ma o gia dinh cong thuc:
  - bang MET noi bo can nguon ro
  - food equivalent de user co the hieu nham thanh “tap xong bu lai duoc”
- Dung `innerHTML` cho `food-equiv`.
- Chua co spec cho:
  - gioi han input
  - cach xu ly MET ngoai bien
  - muc do “uoc tinh” can hien thi ro hon

### `khau-phan-don-gian`

- Look-up data co ve huu ich, nhung dang dua ra nhieu quy doi khau phan user-facing ma chua co source trail.
- Lead copy hien tai:
  - `Mỗi khẩu phần dưới đây tính cho người trưởng thành trung bình`
  - `Điều chỉnh lên/xuống tùy nhu cầu`
- Cau nay mo cua cho suy dien thanh huong dan ca the hoa ma chua co spec/safety shell.
- Dung `innerHTML` de render tab content.
- Co quy doi muoi o `Nước mắm`, `Nước tương`; can source / context ro hon de tranh bi doc nhu khuyen nghi dieu tri.

### `duong-do-uong`

- Co so sanh cứng voi `25g đường/ngày` tu WHO, nhung chua co safety shell cho nguoi co benh nen.
- Danh sach drink dung mau `high/medium/low`, de bi doc nhu nhan “xau/tot”.
- Dung `innerHTML` cho ket qua list.
- Search la free-text, can review XSS/DOM-safe nếu giu lai cau truc nay o vong sau.
- Co nguy co bi hieu thanh bang khuyen nghi cho tieu duong du route chua noi ro scope “tham khảo”.

## 6. De xuat scope an toan cho tung tool

- `bmi`:
  - `safe body-size orientation + safety shell only`
- `ti-le-mo-co-the`:
  - `safe body-composition orientation + safety shell only`
- `tinh-calo-tieu-thu`:
  - `exercise calorie estimate orientation + safety shell only`
- `khau-phan-don-gian`:
  - `educational household-portion lookup + safety shell only`
- `duong-do-uong`:
  - `educational drink sugar lookup + safety shell only`

## 7. Thu tu xu ly de xuat

### 1. `bmi`

Ly do:

- Cong thuc don gian nhung surface user-facing rat lon.
- Co ket hop:
  - cutoff chau A
  - vong eo
  - “cân nặng lý tưởng”
  - goi y co nhac benh ly
- De bi bi hieu thanh cong cu dat muc tieu ca nhan neu chua khoa scope.
- Nen co vong spec truoc khi QA polish vi can quyet dinh:
  - giu hay bo `Creff`
  - giu hay bo vong eo risk wording
  - giu muc “nguy cơ bệnh” den dau

### 2. `ti-le-mo-co-the`

Ly do:

- Day la tool co clinical tone ro nhat trong 5 tool needs_spec con lai.
- Co nhieu ket luan suc khoe ca nhan va dung `innerHTML`.
- Can source-lock cac nguong va phai ha scope xuong orientation/safety shell truoc khi nghiem thu UI.

### 3. `duong-do-uong`

Ly do:

- Blast radius user-facing kha rong, de bi nguoi dung suy dien cho tieu duong.
- Du lieu + wording + mau sac can chot spec ro:
  - list du lieu nao duoc giu
  - co giu `25g/ngay` lam moc context hay khong
  - co doi nhan `high/medium/low` thanh mo ta trung tinh hay khong

### 4. `khau-phan-don-gian`

Ly do:

- Can source-lock cho bang quy doi household portion.
- Tuy khong clinical bang hai tool tren, nhung risk data/context cao hon `tinh-calo-tieu-thu`.
- Co the ha scope thanh lookup giao duc don gian, khong khau phan ca nhan.

### 5. `tinh-calo-tieu-thu`

Ly do:

- Rui ro clinical thap hon 4 tool kia.
- Chu yeu can spec cho:
  - nguon MET
  - cach frame ket qua la `uoc tinh`
  - co nen giu “tuong duong mon an” hay khong
- Phu hop de xu ly sau khi da khoa convention wording/spec cho nhom tool orientation.

## 8. Tool dau tien nen chon cho vong sau

- Slug: `bmi`
- Route: `/cong-cu/bmi/`
- Branch/vong de xuat: `tool-bmi-spec-v1`

Ly do chon:

- Dung nhom `needs_spec`.
- Rui ro user-facing cao nhat trong 5 tool con lai neu tinh ca clinical wording + target-like output.
- Scope co the duoc ha ro rang ve:
  - orientation body-size
  - safety shell
  - khong dua huong dan giam can dieu tri ca nhan

## 9. Nhung viec khong lam trong vong nay

- Khong sua route/tool.
- Khong cap nhat stable/status counts.
- Khong sua engine, du lieu goc, cong thuc chung, `dist`.
- Khong xu ly `stub_or_draft`.
- Khong xu ly backlog data QA ma `6014`.
- Khong chay browser QA theo tung route vi day la vong triage/spec, khong phai QA polish hay final review.

## 10. Backlog giu nguyen

- `stub_or_draft`: 2
- Data QA ma `6014` chua xu ly:
  - `Dau oliu`
  - `metadata/name_en` nghi ngo gay nhieu search query `thit`

## 11. QA cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: to confirm after report update
- `git status --short`: to confirm after report update

## 12. Worktree cuoi

- Se xac nhan lai sach sau khi commit report.
