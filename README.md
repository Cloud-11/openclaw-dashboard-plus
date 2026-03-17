<p align="center">
  <img src="./icon.png" alt="OpenClaw Dashboard Plus icon" width="160">
</p>

# OpenClaw Dashboard Plus

Browser extension tooling for OpenClaw Dashboard.

English is the canonical README for this repository.

[English](./README.md) | [简体中文](./docs/readme/README.zh-CN.md) | [繁體中文](./docs/readme/README.zh-TW.md) | [日本語](./docs/readme/README.ja.md) | [한국어](./docs/readme/README.ko.md) | [Français](./docs/readme/README.fr.md) | [Español](./docs/readme/README.es.md) | [Русский](./docs/readme/README.ru.md) | [Deutsch](./docs/readme/README.de.md) | [Tiếng Việt](./docs/readme/README.vi.md) | [Filipino](./docs/readme/README.fil.md) | [العربية](./docs/readme/README.ar.md)

## Overview

OpenClaw Dashboard Plus ships as a browser extension built into `dist/extension/`.

It adds:

- Separate OpenClaw content language and popup UI language settings
- Remote metadata, locale packs, and style assets delivered from GitHub or Gitee
- Theme controls for UI preset, font, font size, and independent repair toggles
- Shared project branding across the docs and extension package

## Features

- Popup tabs for settings, features, languages, and project information
- Remote refresh for metadata, locale packs, theme presets, and style modules
- Theme/style controls without allowing remote JavaScript execution
- Modular source layout for popup UI, content script logic, language packs, and style bundles
- Build output kept under `dist/` instead of mixing generated assets with source files

## Usage

1. Run `node build-extension.mjs`, or download the packaged ZIP artifact from GitHub Actions.
2. Open `chrome://extensions` or `edge://extensions` and enable Developer mode.
3. Load `dist/extension/` as an unpacked extension.
4. Open your OpenClaw panel, for example `http://127.0.0.1:18789`.
5. Use the popup tabs:
   - `Settings`: enable translation and define allowed hosts and ports
   - `Features`: choose UI preset, font, font size, and toggle style override, style repair, select-style fix, and code-block styling
   - `Languages`: switch content language, refresh remote locale packs, and clear caches
   - `About`: refresh remote metadata and review repository or compatibility information
6. Save runtime or theme settings after changes. Cached remote assets stay local until cleared from the popup.

## Build

Prerequisites:

- Node.js 22 is the reference runtime used by the GitHub Actions workflow.
- PowerShell is required for `package-extension-zip.mjs`.
- Chrome or Edge is required for `package-crx.mjs`.

Commands:

1. Build the unpacked browser extension:
   `node build-extension.mjs`
2. Package a ZIP archive for distribution:
   `node package-extension-zip.mjs`
3. Optional: package a local CRX file:
   `node package-crx.mjs`

Outputs:

- `dist/extension/`: generated unpacked browser extension
- `dist/openclaw-dashboard-plus-extension.zip`: packaged extension ZIP
- `dist/openclaw-dashboard-plus.crx`: optional local CRX build

## Feature And File Guide

- `extension-src/`: extension source, popup UI, icons, theme presets, and content logic
- `extension-src/content-main.js`: source-of-truth content script for the extension build
- `extension-src/style-bundle.json`: manifest for remote-loadable style modules
- `extension-src/style-modules/`: modular CSS, HTML, and JSON style assets
- `extension-src/theme-presets.json`: built-in OpenClaw theme preset structure and variables
- `language-packs/`: OpenClaw content locale bundles
- `ui-locales/`: popup UI locale strings, including localized theme preset labels and descriptions
- `plugin-metadata.json`: canonical metadata for versions, remote sources, locale availability, and UI locale support
- `build-extension.mjs`: generates `dist/extension/` and syncs packaged assets
- `package-extension-zip.mjs`: creates the extension ZIP artifact in `dist/`
- `package-crx.mjs`: optional local CRX packaging helper
- `dist/extension/`: generated output that should be treated as build artifacts

## Install

### Browser Extension ZIP

1. Download `openclaw-dashboard-plus-extension.zip` from GitHub Actions artifacts or releases.
2. Extract it to a stable folder.
3. Open `chrome://extensions` or `edge://extensions`.
4. Enable Developer mode.
5. Click `Load unpacked`.
6. Select the extracted folder.

### Local Unpacked Extension

1. Run `node build-extension.mjs`.
2. Open `chrome://extensions` or `edge://extensions`.
3. Enable Developer mode.
4. Click `Load unpacked`.
5. Select `dist/extension/`.

## GitHub Actions

The repository includes a Windows-based GitHub Actions workflow that:

- Builds `dist/extension/`
- Packages `dist/openclaw-dashboard-plus-extension.zip`
- Uploads both the ZIP archive and unpacked extension as workflow artifacts
- Creates a Git tag like `v0.2.1` automatically when a new `plugin-metadata.json` version is pushed to `main` or `master`
- Publishes a GitHub Release for version tags and attaches `dist/openclaw-dashboard-plus-extension.zip` as the release asset

## Pull Requests

- Make source changes in `extension-src/`, locale sources, metadata files, or build scripts. Do not manually edit `dist/extension/`.
- Keep the repository extension-only. Do not reintroduce legacy script packaging or parallel delivery paths.
- Remote-delivered theme assets must stay limited to HTML, CSS, and JSON payloads. Do not add remote JavaScript execution paths.
- Include reproduction steps for fixes, and attach screenshots or short notes when changing popup UI or OpenClaw styling behavior.
- Run the relevant build command before opening a PR, and mention the verification result in the PR description.
- Update the English README first for user-facing changes, then sync localized docs when behavior changes meaningfully.

## Screenshots

![Extension popup preview](./image.png)
![Extension install preview](./image2.png)

## License

This project is released under the [MIT License](./LICENSE).
