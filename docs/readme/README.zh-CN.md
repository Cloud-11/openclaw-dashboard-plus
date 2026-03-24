<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus 图标" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">一个以 OpenClaw WebUI 多语言支持为核心，同时提供 UI 修复、主题美化、字体控制和对话进度快捷跳转的浏览器扩展。</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="OpenClaw 兼容版本"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="最新版本"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Svenska](./README.sv.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## 效果预览

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="OpenClaw WebUI 增强效果">
      <p><strong>OpenClaw WebUI 增强</strong><br>主题配色、界面修复和右侧对话进度快捷跳转都直接作用在 OpenClaw 页面里。</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="主题与风格预设">
      <p><strong>主题配色与风格预设</strong><br>不改 OpenClaw 源码，也能切换配色方案和 UI 风格。</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="UI 修复开关">
      <p><strong>UI 修复开关</strong><br>下拉框、代码块、边框、间距等细节都可以按需单独修补。</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="语言与运行设置">
      <p><strong>语言与运行设置</strong><br>统一管理 WebUI 语言包、面板界面语言、生效网址和同步来源。</p>
    </td>
  </tr>
</table>

## 这个扩展解决什么问题

- 核心重点是给 OpenClaw WebUI 提供多语言支持。
- 内置多种语言包，并支持从 GitHub 或 Gitee 远端刷新更新。
- 修补 OpenClaw 页面里常见的样式细节问题，例如卡片、输入框、下拉框、焦点态、间距和代码块。
- 给 OpenClaw 增加主题配色、UI 风格、字体和字号控制，让界面更完整、更统一。
- 为长对话增加右侧进度点快捷跳转，浏览历史内容更高效。
- 远端更新仅拉取元数据、语言 JSON、CSS、HTML 和 JSON 样式资源，不执行远端 JavaScript。

## 核心功能

- OpenClaw WebUI 多语言：内置支持 `zh-CN`、`en`、`zh-TW`、`ja`、`ko`、`fr`、`es`、`ru`、`de`、`sv`、`vi`、`fil`、`ar`。
- 主题增强：支持切换配色方案、UI 风格预设、字体和字体大小。
- UI 修复：支持独立开启样式覆盖、样式修补、下拉框样式修复、代码块样式修补。
- 对话进度快捷跳转：在长聊天页面中快速跳到不同段落。
- 远端同步：无需重新构建即可刷新元信息、语言包、主题预设和样式模块。

## 安装

推荐方式：[下载ZIP安装包](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. 从 GitHub Release 下载 ZIP 安装包。
2. 解压到一个固定目录。
3. 打开 `chrome://extensions` 或 `edge://extensions`。
4. 开启开发者模式。
5. 点击“加载已解压的扩展程序”。
6. 选择解压后的文件夹,就安装好了。
7. 打开你的 OpenClaw WebUI，例如 `http://127.0.0.1:18789`。

## 快速开始

1. 在 OpenClaw 页面打开扩展弹窗。
2. 在 `设置` 页启用翻译，并按需设置生效网址和端口。
3. 在 `语言` 页选择 OpenClaw WebUI 语言，应用或刷新语言包。
4. 在 `功能` 页选择配色方案、UI 风格、字体和字号。
5. 按需开启下拉框、代码块、间距和整体样式修复。
6. 修改后保存运行配置或主题配置。

## 构建

只有在你要改源码、调试本地修改，或重新生成发布文件时，才需要自己构建。

前置要求：

- Node.js 22 是当前 GitHub Actions 使用的参考版本。
- `package-extension-zip.mjs` 依赖 PowerShell。
- `package-crx.mjs` 需要本机安装 Chrome 或 Edge。

常用命令：

1. 生成解压扩展：
   `node build-extension.mjs`
2. 打包发布 ZIP：
   `node package-extension-zip.mjs`
3. 如需本地 CRX：
   `node package-crx.mjs`

产物目录：

- `dist/extension/`：可直接加载的解压扩展
- `dist/openclaw-dashboard-plus-extension.zip`：发布用 ZIP 包
- `dist/openclaw-dashboard-plus.crx`：可选的本地 CRX 包

## 项目结构

- `extension-src/`：弹窗 UI、内容脚本、图标、主题预设和样式资源
- `extension-src/style-modules/`：模块化 CSS 和 JSON，包括对话进度条与各类修复模块
- `language-packs/`：OpenClaw WebUI 语言包
- `ui-locales/`：扩展弹窗界面语言
- `plugin-metadata.json`：版本、兼容性、语言、主题和远端源元数据
- `build-extension.mjs`：生成 `dist/extension/`
- `package-extension-zip.mjs`：打包扩展 ZIP
- `dist/extension/`：可直接安装的构建产物

## GitHub Actions

仓库内置了基于 Windows 的 GitHub Actions 工作流，会自动：

- 构建 `dist/extension/`
- 打包 `dist/openclaw-dashboard-plus-extension.zip`
- 上传 ZIP 和解压扩展作为工作流产物
- 根据 `plugin-metadata.json` 版本创建标签
- 为标签版本发布 GitHub Release

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## PR 说明

- 请优先修改 `extension-src/`、语言资源、元信息文件或构建脚本。
- 远端拉取资源请保持为 HTML、CSS 和 JSON，不要新增远端 JavaScript 执行路径。
- 涉及弹窗 UI、OpenClaw 页面样式或交互修复时，建议在 PR 中附上截图。
- 提交前请运行对应构建命令，并在 PR 描述里写明验证结果。
- 用户可见行为变化时，优先更新英文主 README，再按需同步本地化文档。

## 贡献者感谢

感谢所有帮助完善 OpenClaw Dashboard Plus 的贡献者。

- [@yeager](https://github.com/yeager)：为项目贡献了瑞典语支持。

## 许可证

本项目使用 [MIT License](../../LICENSE)。
