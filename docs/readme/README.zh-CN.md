<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus 图标" width="160">
</p>

# OpenClaw Dashboard Plus

OpenClaw Dashboard 的多语言用户脚本与浏览器扩展工具。

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## 概述

项目提供两种使用方式：

- `openclaw-dashboard-plus.user.js` 用户脚本
- 构建输出到 `dist/extension/` 的浏览器扩展

它为 OpenClaw Dashboard 提供多语言内容层、扩展弹窗设置面板、远端元信息更新与可下载语言包。

## 功能

- 内容语言与扩展面板语言分离
- 支持从 GitHub / Gitee 拉取元信息与语言包
- 扩展弹窗可管理运行时设置、缓存与版本信息
- 文档与浏览器扩展统一使用同一套项目图标
- 生成产物集中输出到 `dist/`，避免源码与构建结果混放

## 项目结构

- `openclaw-dashboard-plus.user.js`：用户脚本入口
- `extension-src/`：扩展源码与图标资源
- `dist/extension/`：生成后的解压扩展目录
- `language-packs/`：仓库内语言包输出
- `ui-locales/`：扩展面板语言文件
- `.github/workflows/build-extension.yml`：GitHub Actions 构建流程

## 构建

1. 生成解压扩展：
   `node build-extension.mjs`
2. 构建结果输出到：
   `dist/extension/`
3. 打包浏览器扩展 ZIP：
   `node package-extension-zip.mjs`
4. 如需本地 CRX：
   `node package-crx.mjs`

## 安装

### 用户脚本

1. 打开 `openclaw-dashboard-plus.user.js`
2. 使用 Tampermonkey、ScriptCat 或兼容的用户脚本管理器安装

### 浏览器扩展 ZIP

1. 从 GitHub Actions 构建产物或 Releases 下载 `openclaw-dashboard-plus-extension.zip`
2. 解压到固定目录
3. 打开 `chrome://extensions` 或 `edge://extensions`
4. 开启开发者模式
5. 点击“加载已解压的扩展程序”
6. 选择解压后的目录

### 本地解压扩展

1. 运行 `node build-extension.mjs`
2. 打开 `chrome://extensions` 或 `edge://extensions`
3. 开启开发者模式
4. 点击“加载已解压的扩展程序”
5. 选择 `dist/extension/`

## GitHub Actions

仓库内置了基于 Windows 的 GitHub Actions 工作流，会自动：

- 构建 `dist/extension/`
- 打包 `dist/openclaw-dashboard-plus-extension.zip`
- 上传 ZIP 与解压扩展作为工作流产物

## 截图

![扩展弹窗示意图](../../image.png)
![扩展安装示意图](../../image2.png)

## 许可证

本项目使用 [MIT License](../../LICENSE)。
