<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus 圖示" width="160">
</p>

# OpenClaw Dashboard Plus

以瀏覽器擴充為主、附帶中文翻譯使用者腳本的 OpenClaw Dashboard 工具集。

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## 概述

此專案提供兩種使用方式，其中擴充為主：

- 建置輸出到 `dist/extension/` 的瀏覽器擴充功能
- `openclaw-dashboard-plus-zh.user.js` 中文翻譯使用者腳本

瀏覽器擴充是目前主形態；使用者腳本保留為較輕量的中文翻譯入口，適合不方便安裝擴充的情境。

## 功能

- 內容語言與擴充面板語言分離設定
- 支援從 GitHub / Gitee 取得中繼資料與語言包
- 擴充彈出視窗可管理執行設定、快取與版本資訊
- 文件與瀏覽器擴充共用同一套專案圖示
- 產物集中輸出到 `dist/`，避免原始碼與建置結果混在一起

## 專案結構

- `openclaw-dashboard-plus-zh.user.js`：中文翻譯使用者腳本入口
- `extension-src/`：擴充原始碼與圖示資源
- `dist/extension/`：產生後的解壓擴充目錄
- `language-packs/`：儲存在倉庫中的語言包輸出
- `ui-locales/`：擴充面板語言檔
- `.github/workflows/build-extension.yml`：GitHub Actions 建置流程

## 建置

1. 產生解壓擴充：
   `node build-extension.mjs`
2. 建置結果輸出到：
   `dist/extension/`
3. 打包瀏覽器擴充 ZIP：
   `node package-extension-zip.mjs`
4. 如需本機 CRX：
   `node package-crx.mjs`

## 安裝

### 使用者腳本

1. 開啟 `openclaw-dashboard-plus-zh.user.js`
2. 使用 Tampermonkey、ScriptCat 或相容的使用者腳本管理器安裝

### 瀏覽器擴充 ZIP

1. 從 GitHub Actions 產物或 Releases 下載 `openclaw-dashboard-plus-extension.zip`
2. 解壓到固定資料夾
3. 開啟 `chrome://extensions` 或 `edge://extensions`
4. 啟用開發人員模式
5. 點選「載入已解壓的擴充功能」
6. 選擇解壓後的資料夾

### 本機解壓擴充

1. 執行 `node build-extension.mjs`
2. 開啟 `chrome://extensions` 或 `edge://extensions`
3. 啟用開發人員模式
4. 點選「載入已解壓的擴充功能」
5. 選擇 `dist/extension/`

## GitHub Actions

倉庫已內建 Windows 型 GitHub Actions 工作流程，會自動：

- 建置 `dist/extension/`
- 打包 `dist/openclaw-dashboard-plus-extension.zip`
- 上傳 ZIP 與解壓擴充作為工作流程產物

## 截圖

![擴充彈出視窗示意圖](../../image.png)
![擴充安裝示意圖](../../image2.png)

## 授權條款

本專案採用 [MIT License](../../LICENSE)。
