<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus Symbol" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">Browser-Erweiterung mit Fokus auf mehrsprachige Unterstuetzung fuer die OpenClaw WebUI sowie UI-Reparaturen, Theme-Feinschliff, Schriftsteuerung und schnelles Springen im Chat-Fortschritt.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="OpenClaw Kompatibilitaet"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="Neueste Version"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> Hinweis: Der Entwickler ist mit Deutsch nicht vertraut. Dieses Dokument wurde mit Hilfe eines KI-Modells erstellt und kann unnatuerliche Formulierungen enthalten.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Vorschau

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="OpenClaw WebUI Verbesserung">
      <p><strong>OpenClaw WebUI Verbesserung</strong><br>Theme-Farben, UI-Reparaturen und schnelles Springen im Gespraechsfortschritt wirken direkt auf der OpenClaw-Seite.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="Theme- und Stil-Presets">
      <p><strong>Theme- und Stil-Presets</strong><br>Farbschema und UI-Stil lassen sich wechseln, ohne den OpenClaw-Quellcode anzupassen.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="UI-Reparatur-Schalter">
      <p><strong>UI-Reparatur-Schalter</strong><br>Dropdowns, Codebloecke, Rahmen, Abstaende und andere Details koennen bei Bedarf einzeln korrigiert werden.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="Sprache und Laufzeit">
      <p><strong>Sprache und Laufzeit</strong><br>WebUI-Sprachpakete, Popup-Sprache, aktive URLs und Synchronquellen werden zentral verwaltet.</p>
    </td>
  </tr>
</table>

## Ueberblick

OpenClaw Dashboard Plus wird jetzt nur noch als Browser-Erweiterung bereitgestellt und nach `dist/extension/` gebaut.

Das Projekt bietet:

- Getrennte Einstellungen fuer OpenClaw-Inhaltssprache und Popup-UI-Sprache
- Laden von Metadaten, Sprachpaketen und Style-Ressourcen ueber GitHub oder Gitee
- Theme-Optionen fuer UI-Stil, Schrift, Schriftgroesse und visuelle Reparaturen
- Eine gemeinsame Symbol- und Metadatenkette fuer Doku und Erweiterung

## Funktionen

- Popup-Tabs `Settings`, `Features`, `Languages` und `About`
- Remote-Aktualisierung fuer Metadaten, Sprachpakete, Theme-Presets und Style-Module
- Theme-Ressourcen nur als HTML / CSS / JSON, ohne Remote-JavaScript
- Modulare Struktur mit `extension-src/`, `language-packs/`, `ui-locales/` und `plugin-metadata.json`
- Generierte Dateien liegen gesammelt unter `dist/`

## Verwendung

1. `node build-extension.mjs` ausfuehren oder das ZIP-Artefakt aus GitHub Actions herunterladen.
2. `chrome://extensions` oder `edge://extensions` oeffnen und den Entwicklermodus aktivieren.
3. `dist/extension/` als entpackte Erweiterung laden.
4. Das OpenClaw-Panel oeffnen, zum Beispiel `http://127.0.0.1:18789`.
5. Die Popup-Tabs verwenden:
   - `Settings`: Uebersetzung aktivieren sowie erlaubte Hosts und Ports setzen
   - `Features`: UI-Preset, Schrift, Groesse und Style-Reparaturen umschalten
   - `Languages`: Inhaltssprache wechseln, Remote-Sprachpakete aktualisieren, Cache leeren
   - `About`: Remote-Metadaten aktualisieren und Kompatibilitaetsinfos pruefen
6. Einstellungen nach Aenderungen speichern. Gecachte Remote-Ressourcen bleiben lokal, bis sie im Popup geloescht werden.

## Build

Voraussetzungen:

- Node.js 22 ist die Referenzlaufzeit.
- `package-extension-zip.mjs` benoetigt PowerShell.
- `package-crx.mjs` benoetigt Chrome oder Edge.

Befehle:

1. Entpackte Erweiterung bauen:
   `node build-extension.mjs`
2. ZIP fuer die Verteilung erzeugen:
   `node package-extension-zip.mjs`
3. Optional lokales CRX erzeugen:
   `node package-crx.mjs`

Ausgaben:

- `dist/extension/`: generierte entpackte Erweiterung
- `dist/openclaw-dashboard-plus-extension.zip`: Verteilungs-ZIP
- `dist/openclaw-dashboard-plus.crx`: optionales lokales CRX

## Dateiguide

- `extension-src/`: Erweiterungsquellen, Popup-UI, Icons, Theme-Presets und Inhaltslogik
- `extension-src/content-main.js`: Quelle des Content-Skripts
- `extension-src/style-bundle.json`: Manifest fuer remote geladene Style-Module
- `extension-src/style-modules/`: modulare CSS / HTML / JSON-Ressourcen
- `extension-src/theme-presets.json`: Definition der eingebauten Theme-Presets
- `language-packs/`: OpenClaw-Inhaltssprachpakete
- `ui-locales/`: Popup-Texte und lokalisierte Preset-Bezeichnungen
- `plugin-metadata.json`: kanonische Metadaten fuer Versionen, Remote-Quellen und verfuegbare Sprachen
- `build-extension.mjs`: erzeugt `dist/extension/`
- `package-extension-zip.mjs`: erstellt das ZIP in `dist/`
- `package-crx.mjs`: optionale lokale CRX-Hilfe

## Installation

Empfohlen: [ZIP-Installationspaket herunterladen](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. Das ZIP-Installationspaket aus den GitHub Releases herunterladen.
2. In einen festen Ordner entpacken.
3. `chrome://extensions` oder `edge://extensions` oeffnen.
4. Entwicklermodus aktivieren.
5. `Load unpacked` klicken.
6. Den entpackten Ordner waehlen.
7. Die OpenClaw WebUI oeffnen, zum Beispiel `http://127.0.0.1:18789`.

## GitHub Actions

Das Repository enthaelt einen Windows-basierten GitHub-Actions-Workflow, der automatisch:

- `dist/extension/` baut
- `dist/openclaw-dashboard-plus-extension.zip` erzeugt
- ZIP und entpackte Erweiterung als Artefakte hochlaedt

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- Aendere `extension-src/`, Lokalisierungen, Metadaten oder Build-Skripte. `dist/extension/` nicht direkt bearbeiten.
- Das Repository ist jetzt erweiterungsbasiert. Fuehre keine Userscript- oder Parallel-Distribution erneut ein.
- Remote-Theme-Ressourcen muessen auf HTML / CSS / JSON beschraenkt bleiben, ohne JavaScript-Ausfuehrung.
- Fuer UI- oder Style-Fixes bitte Reproduktionsschritte und bei Bedarf Screenshots in die PR aufnehmen.
- Vor der PR den relevanten Build ausfuehren und das Ergebnis dokumentieren.

## Lizenz

Dieses Projekt steht unter der [MIT License](../../LICENSE).
