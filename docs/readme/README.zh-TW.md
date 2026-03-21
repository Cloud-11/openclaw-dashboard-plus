<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus 圖示" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">一個以 OpenClaw WebUI 多語言支援為核心，同時提供 UI 修復、主題美化、字型控制和對話進度快速跳轉的瀏覽器擴充。</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="OpenClaw 相容版本"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="最新版本"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

> 註：本文件由 AI 大模型翻譯，尚未經過人工校對。若有部分翻譯不夠自然或不夠準確之處，敬請見諒。

## 效果預覽

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="OpenClaw WebUI 增強效果">
      <p><strong>OpenClaw WebUI 增強</strong><br>主題配色、介面修復和右側對話進度快速跳轉都直接作用在 OpenClaw 頁面內。</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="主題與風格預設">
      <p><strong>主題配色與風格預設</strong><br>不改 OpenClaw 原始碼，也能切換配色方案和 UI 風格。</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="UI 修復開關">
      <p><strong>UI 修復開關</strong><br>下拉選單、程式碼區塊、邊框、間距等細節都可按需單獨修補。</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="語言與執行設定">
      <p><strong>語言與執行設定</strong><br>統一管理 WebUI 語言包、面板介面語言、生效網址和同步來源。</p>
    </td>
  </tr>
</table>

## 概述

OpenClaw Dashboard Plus 現在僅以瀏覽器擴充形式提供，建置輸出位於 `dist/extension/`。

它主要提供：

- OpenClaw 內容語言與擴充面板語言分離設定
- 從 GitHub / Gitee 取得中繼資料、語言包與樣式資源
- OpenClaw UI 主題預設、字型、字級與樣式修補開關
- 文件與擴充共用同一套圖示與中繼資料鏈路

## 功能

- 彈出視窗包含 `設定`、`功能`、`語言`、`關於` 頁籤
- 支援遠端刷新中繼資料、語言包、主題預設與樣式模組
- 主題增強僅拉取 HTML / CSS / JSON，不執行遠端 JavaScript
- `extension-src/`、`language-packs/`、`ui-locales/`、`plugin-metadata.json` 的責任分離清楚
- 所有建置產物集中輸出到 `dist/`，不與原始碼混放

## 使用方式

1. 執行 `node build-extension.mjs`，或直接下載 GitHub Actions 產出的 ZIP。
2. 開啟 `chrome://extensions` 或 `edge://extensions`，啟用開發人員模式。
3. 載入 `dist/extension/` 作為已解壓擴充。
4. 開啟本機 OpenClaw 面板，例如 `http://127.0.0.1:18789`。
5. 在擴充彈出視窗使用各頁籤：
   - `設定`：啟用翻譯、設定生效主機與連接埠
   - `功能`：選擇 UI 預設、字型、字級，並切換樣式覆蓋、樣式修補、下拉選單修復、程式碼區塊樣式修補
   - `語言`：切換內容語言、刷新遠端語言包、清理快取
   - `關於`：刷新遠端中繼資料，查看倉庫位址、Star 數與相容資訊
6. 修改後請分別儲存執行設定或主題設定。遠端快取會保留在本機，直到你在彈窗中手動清理。

## 建置

前置需求：

- 建議使用 Node.js 22，與 GitHub Actions 工作流程保持一致。
- `package-extension-zip.mjs` 需要 PowerShell。
- `package-crx.mjs` 需要本機安裝 Chrome 或 Edge。

常用命令：

1. 產生解壓擴充：
   `node build-extension.mjs`
2. 打包瀏覽器擴充 ZIP：
   `node package-extension-zip.mjs`
3. 如需本機 CRX：
   `node package-crx.mjs`

產物目錄：

- `dist/extension/`：產生後的解壓擴充目錄
- `dist/openclaw-dashboard-plus-extension.zip`：發佈用 ZIP
- `dist/openclaw-dashboard-plus.crx`：可選的本機 CRX

## 功能檔案說明

- `extension-src/`：擴充原始碼、彈出視窗 UI、圖示、主題預設與內容腳本主邏輯
- `extension-src/content-main.js`：擴充內容腳本的原始檔
- `extension-src/style-bundle.json`：可遠端拉取的樣式模組清單
- `extension-src/style-modules/`：模組化 CSS / HTML / JSON 樣式資源
- `extension-src/theme-presets.json`：內建主題預設結構與變數定義
- `language-packs/`：OpenClaw 內容語言包
- `ui-locales/`：擴充面板多語文案，同時承載主題預設名稱與說明
- `plugin-metadata.json`：版本、遠端來源、內容語言與面板語言能力的統一中繼資料入口
- `build-extension.mjs`：生成 `dist/extension/` 並同步打包資源
- `package-extension-zip.mjs`：在 `dist/` 下生成擴充 ZIP
- `package-crx.mjs`：本機 CRX 打包腳本
- `dist/extension/`：建置產物目錄，不應直接手動修改

## 安裝

推薦方式：[下載 ZIP 安裝包](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. 從 GitHub Releases 下載 ZIP 安裝包。
2. 解壓到固定資料夾。
3. 開啟 `chrome://extensions` 或 `edge://extensions`。
4. 啟用開發人員模式。
5. 點選「載入已解壓的擴充功能」。
6. 選擇解壓後的資料夾。
7. 開啟你的 OpenClaw WebUI，例如 `http://127.0.0.1:18789`。

## GitHub Actions

倉庫內建 Windows 型 GitHub Actions 工作流程，會自動：

- 建置 `dist/extension/`
- 打包 `dist/openclaw-dashboard-plus-extension.zip`
- 上傳 ZIP 與解壓擴充作為工作流程產物

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## PR 說明

- 請優先修改 `extension-src/`、語言資源、中繼資料檔或建置腳本，不要直接手改 `dist/extension/`。
- 倉庫現在是純瀏覽器擴充專案，不要重新引入使用者腳本或雙軌發佈鏈路。
- 遠端拉取的主題資源請維持為 HTML / CSS / JSON，不要新增遠端 JavaScript 執行路徑。
- 涉及彈窗 UI、OpenClaw 樣式或互動修復時，請在 PR 描述附上重現步驟，並盡量補充截圖。
- 提交前至少執行對應建置命令，並在 PR 描述中寫明驗證結果。
- 使用者可見行為改變時，優先更新英文主 README，再同步中文或其他語言文件。

## 授權條款

本專案採用 [MIT License](../../LICENSE)。
