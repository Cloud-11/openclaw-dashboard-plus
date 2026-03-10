# openclaw-dashboard-zh-cn

OpenClaw Dashboard 的简体中文增强项目。

- 用户脚本文件：`openclaw-dashboard-zh-cn.user.js`
- 扩展目录：`extension/`
- CRX 输出目录：`dist/`
- 扩展弹窗：龙虾图标入口，支持启用开关、网址端口配置、版本信息显示

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
3. 若浏览器未允许直接装 `crx`，可改用下面“解压扩展程序安装”

复用已有签名 key（保持扩展 ID 不变）：

`node package-crx.mjs --key dist/openclaw-dashboard-zh-cn.pem`

### 3) 解压的扩展程序安装

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
