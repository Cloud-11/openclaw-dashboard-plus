<p align="center">
  <img src="../../icon.png" alt="Bieu tuong OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

Cong cu userscript va tien ich mo rong trinh duyet da ngon ngu cho OpenClaw Dashboard.

> Luu y: nha phat trien khong thong thao tieng Viet. Tai lieu nay duoc tao bang mo hinh AI va co the co cau truc cau chua tu nhien.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Tong quan

Du an duoc phan phoi duoi hai hinh thuc:

- `openclaw-dashboard-plus.user.js` duoi dang userscript
- Tien ich mo rong trinh duyet duoc tao trong `dist/extension/`

No bo sung cho OpenClaw Dashboard lop da ngon ngu, bang dieu khien popup, cap nhat metadata tu xa va cac goi ngon ngu co the tai xuong.

## Tinh nang

- Tach rieng ngon ngu noi dung va ngon ngu giao dien popup
- Lay metadata va goi ngon ngu tu GitHub va Gitee
- Popup cua tien ich mo rong de quan ly cai dat, bo nho dem va thong tin phien ban
- Cung mot bieu tuong du an cho tai lieu va tien ich mo rong
- Tep sinh ra duoc dua vao `dist/` thay vi tron voi ma nguon

## Cau truc du an

- `openclaw-dashboard-plus.user.js`: diem vao cua userscript
- `extension-src/`: ma nguon tien ich mo rong va tai nguyen bieu tuong
- `dist/extension/`: tien ich mo rong da tao dang giai nen
- `language-packs/`: dau ra goi ngon ngu trong kho ma nguon
- `ui-locales/`: tep ngon ngu cho giao dien popup
- `.github/workflows/build-extension.yml`: quy trinh GitHub Actions

## Build

1. Tao tien ich mo rong dang giai nen:
   `node build-extension.mjs`
2. Dau ra:
   `dist/extension/`
3. Tao goi ZIP de phan phoi:
   `node package-extension-zip.mjs`
4. Tuy chon tao CRX cuc bo:
   `node package-crx.mjs`

## Cai dat

### Userscript

1. Mo `openclaw-dashboard-plus.user.js`
2. Cai bang Tampermonkey, ScriptCat hoac trinh quan ly tuong thich

### Tep ZIP cua tien ich mo rong

1. Tai `openclaw-dashboard-plus-extension.zip` tu artifact GitHub Actions hoac releases
2. Giai nen vao thu muc on dinh
3. Mo `chrome://extensions` hoac `edge://extensions`
4. Bat Developer mode
5. Bam `Load unpacked`
6. Chon thu muc da giai nen

### Tien ich mo rong giai nen cuc bo

1. Chay `node build-extension.mjs`
2. Mo `chrome://extensions` hoac `edge://extensions`
3. Bat Developer mode
4. Bam `Load unpacked`
5. Chon `dist/extension/`

## GitHub Actions

Kho ma nguon bao gom workflow GitHub Actions tren Windows, tu dong:

- Build `dist/extension/`
- Tao `dist/openclaw-dashboard-plus-extension.zip`
- Tai len artifact gom ZIP va ban giai nen

## Anh chup man hinh

![Xem truoc popup](../../image.png)
![Xem truoc cai dat](../../image2.png)

## Giay phep

Du an nay duoc phat hanh theo [MIT License](../../LICENSE).
