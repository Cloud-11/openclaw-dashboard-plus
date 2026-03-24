<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus icon" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">Browser extension na nakatuon sa multilingguwal na suporta para sa OpenClaw WebUI, kasama ang UI repairs, theme polish, font controls, at mabilis na pagtalon sa progreso ng usapan.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="Compatible na bersyon ng OpenClaw"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="Pinakabagong release"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> Paalala: hindi bihasa ang developer sa Filipino. Ginawa ang dokumentong ito gamit ang AI model at maaaring may hindi natural na pananalita.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Svenska](./README.sv.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

> Paalala: Isinalin ang dokumentong ito gamit ang isang AI large language model at hindi pa ito nasusuring manu-mano. Paumanhin kung may ilang salin na hindi pa ganap na natural o eksakto.

## Preview

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="OpenClaw WebUI enhancement">
      <p><strong>OpenClaw WebUI enhancement</strong><br>Direktang inilalapat sa OpenClaw page ang theme colors, UI repairs, at mabilis na pagtalon sa progreso ng usapan.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="Theme at style presets">
      <p><strong>Theme at style presets</strong><br>Magpalit ng color palette at UI style nang hindi binabago ang source ng OpenClaw.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="UI repair toggles">
      <p><strong>UI repair toggles</strong><br>Ayusin nang hiwalay ang dropdowns, code blocks, borders, spacing, at iba pang detalye ng interface kung kinakailangan.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="Language at runtime settings">
      <p><strong>Language at runtime settings</strong><br>Pamahalaan sa isang lugar ang WebUI language packs, wika ng popup, mga aktibong URL, at sync sources.</p>
    </td>
  </tr>
</table>

## Pangkalahatan

Ang OpenClaw Dashboard Plus ay browser extension na lamang at bino-build sa `dist/extension/`.

Nagdadala ito ng:

- Hiwalay na setting para sa wika ng nilalaman ng OpenClaw at wika ng popup UI
- Pagkuha ng metadata, language pack, at style asset mula sa GitHub o Gitee
- Theme controls para sa UI style, font, laki ng font, at visual repairs
- Iisang icon at metadata chain para sa dokumentasyon at extension

## Mga Tampok

- Popup tabs na `Settings`, `Features`, `Languages`, at `About`
- Remote refresh para sa metadata, language packs, theme presets, at style modules
- Theme assets na HTML / CSS / JSON lang, walang remote JavaScript
- Modular na layout gamit ang `extension-src/`, `language-packs/`, `ui-locales/`, at `plugin-metadata.json`
- Lahat ng build output ay nasa `dist/`

## Paggamit

1. Patakbuhin ang `node build-extension.mjs` o i-download ang ZIP artifact mula sa GitHub Actions.
2. Buksan ang `chrome://extensions` o `edge://extensions` at i-on ang Developer mode.
3. I-load ang `dist/extension/` bilang unpacked extension.
4. Buksan ang OpenClaw panel, halimbawa `http://127.0.0.1:18789`.
5. Gamitin ang mga tab sa popup:
   - `Settings`: paganahin ang translation at itakda ang pinapayagang host at port
   - `Features`: pumili ng UI preset, font, laki, at style repair toggles
   - `Languages`: palitan ang content language, i-refresh ang remote packs, at linisin ang cache
   - `About`: i-refresh ang remote metadata at tingnan ang compatibility info
6. I-save ang settings pagkatapos ng pagbabago. Mananatiling lokal ang cached remote assets hanggang burahin sa popup.

## Build

Mga kailangan:

- Node.js 22 ang reference runtime.
- Kailangan ng `package-extension-zip.mjs` ang PowerShell.
- Kailangan ng `package-crx.mjs` ang Chrome o Edge.

Mga utos:

1. I-build ang unpacked extension:
   `node build-extension.mjs`
2. Gumawa ng ZIP para sa distribution:
   `node package-extension-zip.mjs`
3. Opsyonal: gumawa ng lokal na CRX:
   `node package-crx.mjs`

Mga output:

- `dist/extension/`: generated unpacked extension
- `dist/openclaw-dashboard-plus-extension.zip`: distribution ZIP
- `dist/openclaw-dashboard-plus.crx`: opsyonal na lokal na CRX

## Gabay Sa Mga File

- `extension-src/`: source ng extension, popup UI, icons, theme presets, at content logic
- `extension-src/content-main.js`: source ng content script
- `extension-src/style-bundle.json`: manifest ng remote-loadable style modules
- `extension-src/style-modules/`: modular na CSS / HTML / JSON assets
- `extension-src/theme-presets.json`: built-in theme preset definitions
- `language-packs/`: OpenClaw content language packs
- `ui-locales/`: popup UI strings at localized preset labels
- `plugin-metadata.json`: canonical metadata para sa versions, remote sources, at available locales
- `build-extension.mjs`: bumubuo ng `dist/extension/`
- `package-extension-zip.mjs`: gumagawa ng ZIP sa `dist/`
- `package-crx.mjs`: helper para sa lokal na CRX

## Install

Inirerekomenda: [I-download ang ZIP installation package](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. I-download ang ZIP installation package mula sa GitHub Releases.
2. I-extract ito sa stable na folder.
3. Buksan ang `chrome://extensions` o `edge://extensions`.
4. I-on ang Developer mode.
5. I-click ang `Load unpacked`.
6. Piliin ang extracted folder.
7. Buksan ang iyong OpenClaw WebUI, halimbawa `http://127.0.0.1:18789`.

## GitHub Actions

May Windows-based GitHub Actions workflow ang repository na awtomatikong:

- Nagbu-build ng `dist/extension/`
- Gumagawa ng `dist/openclaw-dashboard-plus-extension.zip`
- Nag-a-upload ng ZIP at unpacked extension bilang artifacts

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- Magbago sa `extension-src/`, locales, metadata, o build scripts. Huwag direktang i-edit ang `dist/extension/`.
- Extension-only na ang repository. Huwag ibalik ang lumang script packaging o parallel delivery path.
- Ang remote theme assets ay dapat manatiling HTML / CSS / JSON lang, walang remote JavaScript execution.
- Para sa UI o style fixes, magdagdag ng reproduction steps at screenshots kung makakatulong.
- Patakbuhin ang kaukulang build bago magbukas ng PR at ilagay ang verification result.

## Lisensya

Ang proyektong ito ay nasa ilalim ng [MIT License](../../LICENSE).
