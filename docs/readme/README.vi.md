<p align="center">
  <img src="../../icon.png" alt="Bieu tuong OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">Tien ich mo rong trinh duyet tap trung vao ho tro da ngon ngu cho OpenClaw WebUI, kem theo sua UI, palette theme, dieu khien font va nhay nhanh theo tien do hoi thoai.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="Phien ban tuong thich OpenClaw"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="Ban phat hanh moi nhat"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> Luu y: nha phat trien khong thong thao tieng Viet. Tai lieu nay duoc tao boi mo hinh AI va co the co cach dien dat chua tu nhien.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Xem Truoc

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="Nang cap OpenClaw WebUI">
      <p><strong>Nang cap OpenClaw WebUI</strong><br>Mau theme, sua UI va thanh nhay nhanh theo tien do hoi thoai duoc ap dung truc tiep tren trang OpenClaw.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="Theme va style preset">
      <p><strong>Theme va style preset</strong><br>Chuyen doi bang mau va phong cach UI ma khong can sua ma nguon OpenClaw.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="Tuy chon sua UI">
      <p><strong>Tuy chon sua UI</strong><br>Co the sua rieng menu dropdown, code block, vien, khoang cach va cac chi tiet giao dien khac khi can.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="Ngon ngu va van hanh">
      <p><strong>Ngon ngu va van hanh</strong><br>Quan ly goi ngon ngu WebUI, ngon ngu popup, URL kich hoat va nguon dong bo tai mot noi.</p>
    </td>
  </tr>
</table>

## Tong Quan

OpenClaw Dashboard Plus hien chi duoc phan phoi duoi dang tien ich mo rong trinh duyet, duoc build vao `dist/extension/`.

Du an cung cap:

- Cai dat rieng cho ngon ngu noi dung OpenClaw va ngon ngu giao dien popup
- Tai metadata, goi ngon ngu va tai nguyen style tu GitHub hoac Gitee
- Tinh nang theme cho kieu UI, font, co chu va cac bo sua giao dien
- Chuoi icon va metadata thong nhat giua tai lieu va tien ich

## Tinh Nang

- Cac tab popup `Settings`, `Features`, `Languages`, `About`
- Lam moi tu xa cho metadata, goi ngon ngu, theme preset va style module
- Phan phoi tai nguyen theme bang HTML / CSS / JSON, khong cho phep JavaScript tu xa
- Cau truc mo dun tach ro `extension-src/`, `language-packs/`, `ui-locales/`, `plugin-metadata.json`
- Toan bo tep build duoc dat trong `dist/`

## Cach Su Dung

1. Chay `node build-extension.mjs` hoac tai file ZIP tu GitHub Actions.
2. Mo `chrome://extensions` hoac `edge://extensions` va bat Developer mode.
3. Nap `dist/extension/` duoi dang extension da giai nen.
4. Mo bang dieu khien OpenClaw, vi du `http://127.0.0.1:18789`.
5. Su dung cac tab trong popup:
   - `Settings`: bat dich va dat host, port duoc phep
   - `Features`: chon preset UI, font, co chu va cac tuy chon sua style
   - `Languages`: doi ngon ngu noi dung, lam moi goi ngon ngu tu xa, xoa cache
   - `About`: lam moi metadata tu xa va xem thong tin tuong thich
6. Luu cau hinh sau khi thay doi. Cache tai nguyen tu xa se duoc giu cuc bo cho den khi ban xoa trong popup.

## Build

Yeu cau:

- Node.js 22 la runtime tham chieu.
- `package-extension-zip.mjs` can PowerShell.
- `package-crx.mjs` can Chrome hoac Edge.

Lenh:

1. Build extension da giai nen:
   `node build-extension.mjs`
2. Tao ZIP phat hanh:
   `node package-extension-zip.mjs`
3. Tuy chon: tao CRX cuc bo:
   `node package-crx.mjs`

Dau ra:

- `dist/extension/`: extension da giai nen duoc tao ra
- `dist/openclaw-dashboard-plus-extension.zip`: file ZIP phat hanh
- `dist/openclaw-dashboard-plus.crx`: CRX cuc bo tuy chon

## Huong Dan Tep

- `extension-src/`: ma nguon extension, popup UI, icon, theme preset va logic noi dung
- `extension-src/content-main.js`: nguon content script
- `extension-src/style-bundle.json`: manifest cho style module tai tu xa
- `extension-src/style-modules/`: tai nguyen CSS / HTML / JSON theo mo dun
- `extension-src/theme-presets.json`: dinh nghia theme preset tich hop
- `language-packs/`: goi ngon ngu noi dung OpenClaw
- `ui-locales/`: chuoi popup UI va ten, mo ta preset da duoc dia phuong hoa
- `plugin-metadata.json`: metadata chuan cho phien ban, nguon tu xa va locale kha dung
- `build-extension.mjs`: tao `dist/extension/`
- `package-extension-zip.mjs`: tao ZIP trong `dist/`
- `package-crx.mjs`: ho tro tao CRX cuc bo

## Cai Dat

Khuyen dung: [Tai goi cai dat ZIP](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. Tai goi cai dat ZIP tu GitHub Releases.
2. Giai nen vao mot thu muc on dinh.
3. Mo `chrome://extensions` hoac `edge://extensions`.
4. Bat Developer mode.
5. Bam `Load unpacked`.
6. Chon thu muc da giai nen.
7. Mo OpenClaw WebUI cua ban, vi du `http://127.0.0.1:18789`.

## GitHub Actions

Kho chua co workflow GitHub Actions tren Windows se tu dong:

- Build `dist/extension/`
- Tao `dist/openclaw-dashboard-plus-extension.zip`
- Tai len ZIP va extension da giai nen nhu artifact

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- Hay sua `extension-src/`, locale, metadata hoac script build. Khong sua truc tiep `dist/extension/`.
- Kho chua nay gio chi phat hanh extension. Khong dua lai kieu dong goi cu hay duong phan phoi song song.
- Tai nguyen theme tu xa phai gioi han o HTML / CSS / JSON, khong them duong chay JavaScript.
- Voi sua UI hoac style, hay them buoc tai hien va neu can thi kem anh trong PR.
- Chay build lien quan truoc khi mo PR va ghi ro ket qua xac minh.

## Giay Phep

Du an duoc phat hanh theo [MIT License](../../LICENSE).
