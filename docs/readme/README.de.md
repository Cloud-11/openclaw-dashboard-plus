<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus Symbol" width="160">
</p>

# OpenClaw Dashboard Plus

Mehrsprachiges Userscript- und Browser-Erweiterungswerkzeug fuer OpenClaw Dashboard.

> Hinweis: Der Entwickler ist mit Deutsch nicht vertraut. Dieses Dokument wurde mit Hilfe eines KI-Modells erstellt und kann unnatuerliche Formulierungen enthalten.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Ueberblick

Das Projekt wird in zwei Formen bereitgestellt:

- `openclaw-dashboard-plus.user.js` als Userscript
- Eine Browser-Erweiterung, die nach `dist/extension/` gebaut wird

Es ergaenzt OpenClaw Dashboard um mehrsprachige Inhalte, ein Popup-Einstellungsfenster, Remote-Metadaten-Updates und herunterladbare Sprachpakete.

## Funktionen

- Getrennte Einstellungen fuer Inhalts-Sprache und Popup-UI-Sprache
- Laden von Metadaten und Sprachpaketen ueber GitHub und Gitee
- Erweiterungs-Popup fuer Laufzeitoptionen, Cache-Steuerung und Versionsinfos
- Dasselbe Projektsymbol in Dokumentation und Erweiterung
- Generierte Dateien landen in `dist/` statt zwischen den Quelldateien

## Projektstruktur

- `openclaw-dashboard-plus.user.js`: Einstieg fuer das Userscript
- `extension-src/`: Quellcode der Erweiterung und Icons
- `dist/extension/`: generierte entpackte Erweiterung
- `language-packs/`: Ausgabe der Sprachpakete im Repository
- `ui-locales/`: Sprachdateien fuer die Popup-Oberflaeche
- `.github/workflows/build-extension.yml`: GitHub-Actions-Pipeline

## Build

1. Entpackte Erweiterung erzeugen:
   `node build-extension.mjs`
2. Ausgabe:
   `dist/extension/`
3. ZIP fuer die Verteilung erzeugen:
   `node package-extension-zip.mjs`
4. Optional lokales CRX erzeugen:
   `node package-crx.mjs`

## Installation

### Userscript

1. `openclaw-dashboard-plus.user.js` oeffnen
2. Mit Tampermonkey, ScriptCat oder einem kompatiblen Manager installieren

### Erweiterungs-ZIP

1. `openclaw-dashboard-plus-extension.zip` aus GitHub-Actions-Artefakten oder Releases herunterladen
2. In einen festen Ordner entpacken
3. `chrome://extensions` oder `edge://extensions` oeffnen
4. Entwicklermodus aktivieren
5. `Load unpacked` klicken
6. Den entpackten Ordner waehlen

### Lokale entpackte Erweiterung

1. `node build-extension.mjs` ausfuehren
2. `chrome://extensions` oder `edge://extensions` oeffnen
3. Entwicklermodus aktivieren
4. `Load unpacked` klicken
5. `dist/extension/` waehlen

## GitHub Actions

Das Repository enthaelt einen Windows-basierten GitHub-Actions-Workflow, der automatisch:

- `dist/extension/` baut
- `dist/openclaw-dashboard-plus-extension.zip` erzeugt
- ZIP und entpackte Erweiterung als Artefakte hochlaedt

## Screenshots

![Popup-Vorschau](../../image.png)
![Installationsvorschau](../../image2.png)

## Lizenz

Dieses Projekt steht unter der [MIT License](../../LICENSE).
