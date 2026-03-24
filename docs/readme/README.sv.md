<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus-ikon" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">Ett webbläsartillägg med fokus på flerspråkigt stöd för OpenClaw WebUI, tillsammans med UI-reparationer, temaförbättringar, fontkontroller och snabb hoppning i långa chattkonversationer.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="OpenClaw-kompatibilitet"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="Senaste version"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub-stjärnor"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub-ärenden"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="Licens"></a>
</p>

Tack till @yeager som bidrog med svenskt språkstöd för projektet.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Svenska](./README.sv.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Förhandsvisning

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="OpenClaw WebUI med temaförbättringar och chattens framstegslist">
      <p><strong>Förbättrad OpenClaw WebUI</strong><br>Temafinish, reparerade ytor och snabb hoppning genom långa konversationer direkt i OpenClaw-sidan.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="Popup med tema- och stilförval">
      <p><strong>Temapaletter och stilförval</strong><br>Byt färgpaletter och UI-stilar utan att ändra OpenClaw självt.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="Kontroller för UI-reparationer">
      <p><strong>UI-reparationskontroller</strong><br>Fixa dropdown-menyer, kodblock, ramar, mellanrum och andra ojämnheter med ett klick.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="Popup för språk- och körningsinställningar">
      <p><strong>Språk- och körningskontroll</strong><br>Hantera WebUI-språkpaket, popup-språk, värdfilter och synkkällor på ett ställe.</p>
    </td>
  </tr>
</table>

## Varför det här tillägget

- Ge flerspråkigt stöd direkt i OpenClaw WebUI, inte bara i tilläggets popup.
- Leverera inbyggda språkpaket och tillåt uppdatering från GitHub eller Gitee.
- Reparera vanliga UI-detaljer i kort, inmatningar, dropdown-menyer, mellanrum, fokuslägen och kodblock.
- Lägg till kontroller för temapalett, UI-stil, typsnitt och teckenstorlek för en mer genomarbetad OpenClaw-upplevelse.
- Lägg till en framstegslist för chattar så att långa konversationer går snabbare att navigera.
- Begränsa fjärrlevererade resurser till metadata, språk-JSON, CSS, HTML och JSON-baserade stilpaket.

## Kärnfunktioner

- OpenClaw WebUI-språkpaket: inbyggt stöd för `zh-CN`, `en`, `zh-TW`, `ja`, `ko`, `fr`, `es`, `ru`, `de`, `sv`, `vi`, `fil` och `ar`.
- Lokalisering av popup-UI: tilläggets popup kan också följa användarens språkpreferens som en extra bekvämlighet.
- Temaförbättringar: växla palettförval, UI-stilförval, typsnitt och fontstorlek från popupen.
- UI-reparationsbrytare: aktivera stilöverskrivning, stilreparation, dropdown-reparation och kodblocksreparation var för sig.
- Snabb navigering: aktivera chattens framstegslist för att hoppa till olika delar av en lång konversation.
- Fjärrsynk: uppdatera metadata, språkpaket, temaförval och stilmoduler utan att bygga om tillägget.

## Installation

Rekommenderat: [Ladda ner ZIP-paketet](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. Ladda ner ZIP-paketet från GitHub Releases.
2. Packa upp det till en stabil lokal mapp.
3. Öppna `chrome://extensions` eller `edge://extensions`.
4. Aktivera utvecklarläge.
5. Klicka på `Load unpacked`.
6. Välj den uppackade mappen.
7. Öppna din OpenClaw WebUI, till exempel `http://127.0.0.1:18789`.

## Kom igång

1. Öppna tilläggets popup på din OpenClaw-sida.
2. I `Settings` aktiverar du översättning och ställer vid behov in tillåtna värdar eller portar.
3. I `Languages` väljer du OpenClaw WebUI-språk och använder eller uppdaterar språkpaket.
4. I `Features` väljer du palett, UI-stil, font och fontskala.
5. Slå på de reparationer du vill använda för dropdown-menyer, kodblock, mellanrum och övergripande UI-finish.
6. Spara körningsinställningar eller temainställningar efter ändringar.

## Bygg

Bygg behövs bara om du vill ändra källkoden, testa lokala ändringar eller skapa nya distributionsfiler.

Förkrav:

- Node.js 22 är referensruntime i GitHub Actions-flödet.
- PowerShell krävs för `package-extension-zip.mjs`.
- Chrome eller Edge krävs för `package-crx.mjs`.

Kommandon:

1. Bygg den uppackade tilläggsversionen:
   `node build-extension.mjs`
2. Paketera ZIP-filen för release:
   `node package-extension-zip.mjs`
3. Paketera vid behov en lokal CRX:
   `node package-crx.mjs`

Utdata:

- `dist/extension/`: genererat uppackat webbläsartillägg
- `dist/openclaw-dashboard-plus-extension.zip`: paketerad ZIP för distribution
- `dist/openclaw-dashboard-plus.crx`: valfri lokal CRX-byggnad

## Projektstruktur

- `extension-src/`: popup-UI, innehållslogik, ikoner, temaförval och stilpaket
- `extension-src/style-modules/`: modulära CSS- och JSON-resurser, inklusive chattens framstegslist och reparationsmoduler
- `language-packs/`: språkpaket för OpenClaw WebUI
- `ui-locales/`: popupens lokala UI-strängar
- `plugin-metadata.json`: metadata för version, kompatibilitet, språk, teman och fjärrkällor
- `build-extension.mjs`: genererar `dist/extension/`
- `package-extension-zip.mjs`: paketerar tilläggets ZIP-fil
- `dist/extension/`: färdig byggartifakt som kan laddas direkt

## GitHub Actions

Repositoryt innehåller ett Windows-baserat GitHub Actions-flöde som:

- Bygger `dist/extension/`
- Paketerar `dist/openclaw-dashboard-plus-extension.zip`
- Laddar upp både ZIP-arkivet och den uppackade tilläggsmappen som arbetsflödesartefakter
- Skapar en versionstagg från `plugin-metadata.json`
- Publicerar en GitHub Release för taggade versioner

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Requests

- Gör källändringar i `extension-src/`, språkfiler, metadata eller byggskript i stället för att redigera `dist/extension/` manuellt.
- Begränsa fjärrlevererade resurser till HTML-, CSS- och JSON-data. Lägg inte till exekveringsvägar för fjärr-JavaScript.
- Bifoga gärna skärmbilder när popup-UI, OpenClaw-styling eller interaktionsreparationer ändras.
- Kör relevant byggsteg innan du öppnar en PR och nämn verifieringsresultatet.
- Uppdatera den engelska README-filen först när användarsynliga beteenden ändras, och synka sedan lokala dokument vid behov.

## Licens

Det här projektet distribueras under [MIT License](../../LICENSE).
