# Carbohydrate Calculator QA Polish v1

Pham vi: `/cong-cu/tinh-carb`.

Muc tieu: QA thu cong va polish nhe cong cu tinh carbohydrate sau khi da chuyen sang engine data-driven. Khong doi cong thuc, khong doi du lieu dinh duong.

## 1. Engine QA

Script: `scripts/test-carb-calculator.mjs`.

Da kiem:

- 100 g thuc pham co 28 g carb/100 g -> 28 g carb.
- 200 g thuc pham co 28 g carb/100 g -> 56 g carb.
- 2 mon cong dung tong carb.
- Ty le dong gop tung mon dung va de doc.
- 30 g carb -> 2 phan carb voi quy uoc giao duc 15 g/phan.
- Thieu carb -> warning, khong crash.
- Gram 0, am, NaN, Infinity, qua cao -> error than thien.
- Gram rong trong UI khi ep so -> error than thien.
- Lam tron carb/tong/ty le khong hien so dai.
- Engine output khong co chuoi goi y tang/giam insulin, chinh thuoc, lieu insulin.

Ket qua:

```text
npm run test:carb -> pass
```

## 2. Package script

Da them script tong hop:

```json
"test:tools": "npm run test:protein && npm run test:carb"
```

Ket qua:

```text
npm run test:tools -> pass
```

## 3. UI QA bang Chrome local

Preview URL:

```text
http://localhost:4321/cong-cu/tinh-carb/
```

Chrome local duoc kiem qua DevTools Protocol sau khi chay `npm run build` va `npm run preview`.

Ket qua test UI:

| Case | Ket qua |
| --- | --- |
| Search `com` | first result `Com trang` |
| Search `com trang` | first result `Com trang` |
| Search `bun` | first result `Bun tuoi` |
| Search `pho` | first result `Banh pho chin` |
| Search `banh mi` | first result `Banh mi` |
| `Com trang` 100 g | 28.2 g carb, 1.9 phan carb |
| `Com trang` 200 g | 56.4 g carb |
| 3 mon: com + bun + banh mi | tong 105.2 g; ty le tung mon hien dung |
| Xoa 1 mon | tong cap nhat con 77 g, con 2 item |
| Gram rong/0/am/chu | warning: khoi luong can nam trong 0.1-2000 g |
| Mobile width 390 px | khong overflow ngang; nut Them 40 px; search input 46.7 px |

## 4. Polish da lam

1. Bo sung test engine cho gram rong, lam tron so va wording khong tao output chinh lieu thuoc.
2. Cai thien ranking search trong page:
   - exact name/alias match truoc
   - prefix match sau
   - token match sau
   - contains/haystack match thap hon
3. Sua CSS scoped cho cac item render bang `innerHTML`:
   - `food-item`
   - `gram-input`
   - `food-add`
   - `total-item`
   - `ti-*`

Ly do: cac node dong khong mang scoped attribute cua Astro, nen truoc do mot so class khong nhan CSS trong browser thuc. Sau khi chuyen selector sang `:global(...)`, mobile touch target dung nhu CSS khai bao.

## 5. Safety wording

Trang van giu wording an toan:

- Cong cu chi uoc tinh gram carbohydrate trong bua an.
- Khong tu chinh insulin, sulfonylurea hoac thuoc ha duong huyet dua vao ket qua.
- Nguoi dung insulin/sulfonylurea, tre em, thai ky, CKD, benh nang hoac hay ha duong huyet can ke hoach ca the hoa.
- Duong huyet sau an con phu thuoc GI, chat xo, chat beo, dam, van dong, thoi diem an, thuoc va sai so khau phan/cach nau.
- Moc 15 g/phan carb va 45-60 g/bua chi la thong tin giao duc tuy chon, khong phai muc tieu bat buoc.

## 6. Khong doi

- Khong doi cong thuc carb.
- Khong tinh net carb/carb kha dung.
- Khong doi range hay muc 15 g/45-60 g.
- Khong sua kcal/protein/lipid/glucid hay du lieu dinh duong.
- Khong deploy.

## 7. Rui ro con lai

- Recipe carb/100 g phu thuoc `servingWeightG`; neu serving weight cua recipe chua chuan thi can vong data review rieng.
- Search trong tool carb da du dung cho chon mon, nhung chua thay the search toan site.
- V1 chua xu ly don vi chen/bat/ly; hien uu tien gram de giu cong thuc minh bach.
- Chua tinh GI/GL trong cong cu nay; do se la pham vi cua `tinh-gl-bua-an`.

## 8. Ket luan

Cong cu `tinh-carb` da du lam nen cho `tinh-gl-bua-an`: carb da data-driven, cong thuc minh bach, co engine rieng, co test rieng, UI can ban on dinh va wording an toan khong gay hieu nham ve chinh thuoc.
