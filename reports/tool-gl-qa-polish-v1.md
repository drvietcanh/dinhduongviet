# Tool GL QA Polish v1

Branch: `tool-gl-qa-polish-v1`

Scope: QA thu cong va polish nhe cong cu `/cong-cu/tinh-gl-bua-an/`. Khong doi cong thuc, khong mo rong mapping GI lon, khong sua du lieu dinh duong.

## Summary

- Engine GL van tinh theo cong thuc `GL = GI * carbGrams / 100`.
- V1 van dung total carbohydrate tu nen `carb-calculator`, chua dung available carb/net carb.
- Khong con bang GL hardcode cu trong page.
- Khong con suy nguoc carb tu GL.
- Khong co wording kieu "an toan tuyet doi", "muc tieu GL bat buoc", "dat chuan GL", hay goi y chinh insulin/thuoc.
- Polish da lam: doi wording canh bao tu "tu chinh" sang "tu thay doi" de tranh bi hieu la huong dan dieu chinh thuoc.

## Engine Tests

`scripts/test-glycemic-load-calculator.mjs` da duoc ra lai va bo sung:

| Case | Expected | Result |
| --- | --- | --- |
| GI 70, carb 30 g | GL 21 | Pass |
| 2 mon | Tong GL cong dung | Pass |
| `exact` | Tinh GL, khong warning manh | Pass |
| `close` | Tinh GL, warning gan dung | Pass |
| `generic` | Tinh GL, warning theo nhom thuc pham | Pass |
| `estimated` | Khong tinh mac dinh, warning manh | Pass |
| `no_gi` | Khong tinh GL, khong crash | Pass |
| Missing GI mapping | Warning, khong crash | Pass |
| Gram sai: 0, am, rong, NaN, Infinity | Loi than thien | Pass |
| Output text cam | Khong co "chinh insulin", "tang/giam thuoc", "an toan tuyet doi", "muc tieu bat buoc" | Pass |

## Manual Browser QA

Preview thuc te chay o `http://localhost:4323/` vi port 4321 va 4322 dang ban.

Route kiem tra: `http://localhost:4323/cong-cu/tinh-gl-bua-an/`

| Scenario | Result |
| --- | --- |
| Mo trang cong cu | Trang render dung, title va UI dung cong cu GL |
| Them mon co GI generic: Bap My luoc 100 g | Tong GL 21.3, carb 38 g, badge "Uoc tinh theo nhom thuc pham", co warning generic |
| Them mon thu hai: Bun tuoi 100 g | Tong GL 38.8, tong carb 63 g, dong gop tung mon hien dung |
| Xoa Bap My luoc | Tong GL con 17.5 cho Bun tuoi, UI cap nhat dung |
| Them mon khong co GI: Bap cai | Tong GL khong doi, mon hien "Chua tinh GL", warning ro rang |
| Desktop overflow | `scrollWidth == clientWidth`, khong overflow ngang |
| Mobile 390 x 844 | Khong overflow ngang, nut/input du kich thuoc cham, result/warning khong tran |
| Wording cam | Khong thay "an toan tuyet doi", "muc tieu bat buoc", "dat chuan GL", "chinh insulin", "chinh thuoc" |

Ghi chu: lop Browser automation hien tai khong go duoc text vao input do loi clipboard ao, nen case nhap chu/gram sai duoc cover bang engine test. Cac thao tac click, them/xoa mon, no-GI warning, desktop/mobile layout deu da kiem tra tren browser local.

## GI Mapping Review

Tong mapping ban dau: 27

- Keep in v1: 10
- Keep with caution: 17
- Remove or hide: 0

| slug/id | Ten | GI | Match | Source | Note | v1 | Ly do |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| `com-trang` | Com trang | 73 | close | International GI tables / Sydney GI database | Gan voi cooked white rice, cach nau Viet co the thay doi | yes | Gan voi thuc pham chinh, badge close phu hop |
| `com-gao-lut` | Com gao lut | 55 | generic | International GI tables / Sydney GI database | Generic brown rice | caution | Nen giu nhung can badge theo nhom |
| `com-gao-lut-do` | Com gao lut do | 55 | generic | International GI tables / Sydney GI database | Ap dung theo nhom brown rice, khong phai do truc tiep cho gao lut do Viet Nam | caution | Generic, can warning |
| `com-gao-lut-den` | Com gao lut den | 55 | generic | International GI tables / Sydney GI database | Ap dung theo nhom brown rice, khong phai do truc tiep cho gao lut den Viet Nam | caution | Generic, can warning |
| `com-nep` | Com nep | 75 | generic | International GI tables / Sydney GI database | Generic glutinous/sticky rice | caution | Cach nau va loai nep co the thay doi |
| `bun-tuoi` | Bun tuoi | 70 | generic | International GI tables / Sydney GI database | Gan voi rice noodles | caution | Can badge generic, khong coi la do truc tiep cho bun Viet |
| `banh-pho-chin` | Banh pho chin | 62 | generic | International GI tables / Sydney GI database | Gan voi rice noodle/flat rice noodle | caution | GI theo nhom, khong phai moi loai pho |
| `banh-mi` | Banh mi | 71 | close | International GI tables / Sydney GI database | Gan voi white wheat bread | yes | Gan dung voi nhom banh mi trang |
| `khoai-lang` | Khoai lang | 54 | close | International GI tables / Sydney GI database | Gan voi sweet potato | yes | Phu hop muc close |
| `khoai-lang-tim` | Khoai lang tim | 54 | generic | International GI tables / Sydney GI database | Dung theo nhom sweet potato | caution | Khac giong/kieu nau |
| `khoai-lang-mat` | Khoai lang mat | 54 | generic | International GI tables / Sydney GI database | Dung theo nhom sweet potato | caution | Khac giong/kieu nau |
| `khoai-tay` | Khoai tay | 65 | generic | International GI tables / Sydney GI database | GI khoai tay phu thuoc cach che bien | caution | Generic, bien thien lon theo cach nau |
| `bap-nep-luoc` | Bap nep luoc | 56 | generic | International GI tables / Sydney GI database | Gan voi sweet corn/corn | caution | Khac giong bap, can warning |
| `bap-my-luoc` | Bap My luoc | 56 | generic | International GI tables / Sydney GI database | Gan voi sweet corn/corn | caution | Generic, can warning |
| `yen-mach-can` | Yen mach can | 55 | close | International GI tables / Sydney GI database | Gan voi rolled oats | yes | Gan dung nguon tested |
| `chuoi` | Chuoi | 51 | generic | International GI tables / Sydney GI database | GI chuoi phu thuoc do chin | caution | Can warning theo do chin |
| `chuoi-cau` | Chuoi cau | 51 | generic | International GI tables / Sydney GI database | Dung theo nhom banana | caution | Khong phai exact cho giong chuoi |
| `chuoi-su` | Chuoi su | 51 | generic | International GI tables / Sydney GI database | Dung theo nhom banana | caution | Khong phai exact cho giong chuoi |
| `chuoi-tieu` | Chuoi tieu | 51 | generic | International GI tables / Sydney GI database | Dung theo nhom banana | caution | Khong phai exact cho giong chuoi |
| `tao` | Tao | 36 | close | International GI tables / Sydney GI database | Gan voi apple | yes | Phu hop v1 |
| `tao-xanh` | Tao xanh | 36 | close | International GI tables / Sydney GI database | Gan voi apple | yes | Phu hop v1 nhung khong phai exact cultivar |
| `cam` | Cam | 40 | close | International GI tables / Sydney GI database | Gan voi orange | yes | Phu hop v1 |
| `cam-sanh` | Cam sanh | 40 | generic | International GI tables / Sydney GI database | Dung theo nhom orange | caution | Khac giong, can warning |
| `xoai` | Xoai | 56 | generic | International GI tables / Sydney GI database | GI phu thuoc do chin/giong | caution | Generic, can warning |
| `sua-tuoi` | Sua tuoi | 37 | close | International GI tables / Sydney GI database | Gan voi milk | yes | Phu hop v1 |
| `ca-rot` | Ca rot | 71 | close | International GI tables / Sydney GI database | Gan voi carrot tested GI; cach nau co the thay doi | yes | Phu hop close, can ngu canh cach nau |
| `duong-trang` | Duong trang | 65 | exact | International GI tables / Sydney GI database | Sucrose/white sugar | yes | Exact/generic reference on dinh |

## Changes Made

- `src/lib/glycemic-load-calculator.ts`: polish safety wording.
- `src/pages/cong-cu/tinh-gl-bua-an.astro`: polish high-GL education wording.
- `scripts/test-glycemic-load-calculator.mjs`: bo sung invalid input cases va forbidden wording checks.
- `reports/tool-gl-qa-polish-v1.md`: report QA nay.

## Formula And Data

- Khong doi cong thuc GL.
- Khong doi du lieu dinh duong.
- Khong mo rong mapping GI.
- Khong doi GI value hien co.

## Remaining Risks For v2

- Nhieu mapping GI dang o muc `generic`, can source review sau neu muon hien thi tin cay hon cho mon Viet.
- V1 dung total carbohydrate, chua dung available carbohydrate do chua khoa du lieu chat xo/carb kha dung cho tung mon.
- UI chua co che do nang cao de nguoi dung nhap GI rieng co nguon.
- Can browser QA them sau neu them typing automation hoac test E2E Playwright rieng.

## Decision

Cong cu GL du dieu kien chot v1: engine tach rieng, khong suy nguoc carb, co warning cho no-GI/generic match, wording an toan, va da du de lam nen cho vong polish/source review tiep theo.
