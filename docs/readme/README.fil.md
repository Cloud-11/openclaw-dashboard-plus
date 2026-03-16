<p align="center">
  <img src="../../icon.png" alt="Icon ng OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

Multilingual na userscript at browser extension tool para sa OpenClaw Dashboard.

> Paalala: Hindi bihasa ang developer sa Filipino. Ang dokumentong ito ay ginawa gamit ang AI model at maaaring may mga salitang hindi natural ang tunog.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Buod

May dalawang anyo ang proyektong ito:

- `openclaw-dashboard-plus.user.js` bilang userscript
- Browser extension na bina-build sa `dist/extension/`

Nagdadagdag ito ng multilingual na content layer, popup settings panel, remote metadata updates, at downloadable language packs para sa OpenClaw Dashboard.

## Mga Tampok

- Magkahiwalay ang content language at popup UI language
- Kumukuha ng metadata at language packs mula sa GitHub at Gitee
- Popup ng extension para sa runtime settings, cache controls, at version info
- Iisang project icon para sa dokumentasyon at extension
- Ang generated output ay nasa `dist/` imbes na nakahalo sa source files

## Ayos ng Repository

- `openclaw-dashboard-plus.user.js`: entry ng userscript
- `extension-src/`: source files at icon assets ng extension
- `dist/extension/`: generated unpacked extension
- `language-packs/`: output ng language packs sa repository
- `ui-locales/`: locale files para sa popup UI
- `.github/workflows/build-extension.yml`: GitHub Actions pipeline

## Build

1. I-build ang unpacked extension:
   `node build-extension.mjs`
2. Output:
   `dist/extension/`
3. Gumawa ng ZIP para sa distribusyon:
   `node package-extension-zip.mjs`
4. Opsyonal na gumawa ng lokal na CRX:
   `node package-crx.mjs`

## Pag-install

### Userscript

1. Buksan ang `openclaw-dashboard-plus.user.js`
2. I-install gamit ang Tampermonkey, ScriptCat, o ibang compatible manager

### ZIP ng Browser Extension

1. I-download ang `openclaw-dashboard-plus-extension.zip` mula sa GitHub Actions artifacts o releases
2. I-extract ito sa isang permanenteng folder
3. Buksan ang `chrome://extensions` o `edge://extensions`
4. I-enable ang Developer mode
5. I-click ang `Load unpacked`
6. Piliin ang na-extract na folder

### Lokal na Unpacked Extension

1. Patakbuhin ang `node build-extension.mjs`
2. Buksan ang `chrome://extensions` o `edge://extensions`
3. I-enable ang Developer mode
4. I-click ang `Load unpacked`
5. Piliin ang `dist/extension/`

## GitHub Actions

May kasamang Windows-based GitHub Actions workflow ang repository na awtomatikong:

- Nagbu-build ng `dist/extension/`
- Gumagawa ng `dist/openclaw-dashboard-plus-extension.zip`
- Nag-a-upload ng ZIP at unpacked extension bilang artifacts

## Mga Screenshot

![Preview ng popup](../../image.png)
![Preview ng pag-install](../../image2.png)

## Lisensya

Ang proyektong ito ay nasa ilalim ng [MIT License](../../LICENSE).
