# openclaw-dashboard-zh-cn

OpenClaw Dashboard 的简体中文增强项目。

- 用户脚本文件：`openclaw-dashboard-zh-cn.user.js`
- 扩展目录：`extension/`
- CRX 输出目录：`dist/`
- 扩展弹窗：龙虾图标入口，支持启用开关、网址端口配置、版本信息显示

## 截图

![扩展弹窗示意图](./image.png)
![扩展安装与效果示意图](./image2.png)

## 安装方式

### 1) JS 脚本安装（Tampermonkey / ScriptCat）

1. 打开 `openclaw-dashboard-zh-cn.user.js`
2. 复制完整内容
3. 在 Tampermonkey 或 ScriptCat 新建脚本
4. 粘贴并保存

### 2) CRX 安装

1. 执行打包：
   `node package-crx.mjs`
2. 产物：
   `dist/openclaw-dashboard-zh-cn.crx`
3. 拖拽 `openclaw-dashboard-zh-cn.crx` 到 `chrome://extensions` 或 `edge://extensions`
4. 按提示确认安装

注意：部分 Chrome / Edge 版本会直接拦截本地 `crx` 安装并提示失败，这是浏览器策略限制，不是包损坏。遇到此情况请使用下面“压缩包安装”或“解压扩展程序安装”。

复用已有签名 key（保持扩展 ID 不变）：

`node package-crx.mjs --key dist/openclaw-dashboard-zh-cn.pem`

### 3) 压缩包安装（推荐备用）

1. 从 Releases 下载：
   `openclaw-dashboard-zh-cn-extension.zip`
2. 解压到固定目录（例如：`D:\Tools\openclaw-dashboard-zh-cn-extension`）
3. 打开 `chrome://extensions` 或 `edge://extensions`
4. 开启开发者模式
5. 点击“加载已解压的扩展程序”
6. 选择第 2 步解压后的目录（目录内要直接看到 `manifest.json`）

提示：

- 不要删除该解压目录，否则扩展会失效
- 升级版本时，替换解压目录内容后在扩展页面点“刷新”

### 4) 解压的扩展程序安装（本地构建）

1. 先生成扩展文件：
   `node build-extension.mjs`
2. 打开 `chrome://extensions` 或 `edge://extensions`
3. 开启开发者模式
4. 点击“加载已解压的扩展程序”
5. 选择 `extension/`

加载后点击工具栏龙虾图标，可在弹窗中配置：

- 启动/关闭汉化
- 生效网址（支持逗号分隔）
- 生效端口（支持逗号分隔）
- 当前插件版本与适配 OpenClaw 版本

## 适用页面

- `http://127.0.0.1:18789/*`
- `http://localhost:18789/*`

## 许可证

本项目使用 MIT 许可证，详见 `LICENSE`。

## 感谢名单

- OpenClaw 项目与社区
- Tampermonkey、ScriptCat 与 Chromium 扩展生态
- 所有提供测试与反馈的使用者
