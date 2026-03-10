import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const userscriptPath = path.join(currentDir, "openclaw-dashboard-zh-cn.user.js");
const extensionDir = path.join(currentDir, "extension");
const contentPath = path.join(extensionDir, "content.js");
const manifestPath = path.join(extensionDir, "manifest.json");

const manifest = {
  manifest_version: 3,
  name: "OpenClaw Dashboard 简体中文增强翻译",
  description: "为 OpenClaw Web UI 补齐尚未接入 i18n 的固定英文文案。",
  version: "0.1.0",
  homepage_url: "https://github.com/cloud11/openclaw-dashboard-zh-cn",
  content_scripts: [
    {
      matches: ["http://127.0.0.1:18789/*", "http://localhost:18789/*"],
      js: ["content.js"],
      run_at: "document_end",
    },
  ],
};

function stripUserscriptMetadata(source) {
  const headerPattern = /\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\s*/;
  return source.replace(headerPattern, "");
}

function writeExtensionFiles() {
  const userscriptSource = fs.readFileSync(userscriptPath, "utf8");
  const contentSource = stripUserscriptMetadata(userscriptSource).trimStart();

  fs.mkdirSync(extensionDir, { recursive: true });
  fs.writeFileSync(
    contentPath,
    `// 此文件由 openclaw-dashboard-zh-cn/build-extension.mjs 自动生成。\n${contentSource}\n`,
    "utf8",
  );
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

writeExtensionFiles();
