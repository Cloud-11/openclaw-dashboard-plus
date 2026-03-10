import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const extensionDir = path.join(currentDir, "extension");
const buildScriptPath = path.join(currentDir, "build-extension.mjs");
const distDir = path.join(currentDir, "dist");
const extensionName = "openclaw-dashboard-zh-cn";
const defaultKeyPath = path.join(currentDir, "extension.pem");

function readArg(name) {
  const index = process.argv.indexOf(name);
  if (index === -1) {
    return "";
  }
  return process.argv[index + 1] ?? "";
}

function ensureBuiltExtension() {
  const buildResult = spawnSync(process.execPath, [buildScriptPath], { stdio: "inherit" });
  if (buildResult.status !== 0) {
    throw new Error("构建扩展内容失败。");
  }
}

function getBrowserCandidates() {
  const envBinary = process.env.CHROME_BIN || process.env.CHROMIUM_BIN || process.env.EDGE_BIN || "";
  const candidates = envBinary ? [envBinary] : [];

  if (process.platform === "win32") {
    candidates.push(
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
      "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    );
  } else if (process.platform === "darwin") {
    candidates.push(
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
      "/Applications/Chromium.app/Contents/MacOS/Chromium",
    );
  } else {
    candidates.push(
      "/usr/bin/google-chrome",
      "/usr/bin/google-chrome-stable",
      "/usr/bin/chromium-browser",
      "/usr/bin/chromium",
      "/usr/bin/microsoft-edge",
    );
  }

  return candidates;
}

function findBrowserBinary() {
  const candidates = getBrowserCandidates();
  const found = candidates.find((candidate) => candidate && fs.existsSync(candidate));
  if (!found) {
    throw new Error(
      [
        "未找到可用于打包 CRX 的 Chrome/Edge 可执行文件。",
        "请设置 CHROME_BIN 或 EDGE_BIN，例如：",
        "CHROME_BIN=\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\"",
      ].join("\n"),
    );
  }
  return found;
}

function packageCrx(browserBinary, keyPath) {
  const args = [`--pack-extension=${extensionDir}`];
  if (keyPath) {
    args.push(`--pack-extension-key=${path.resolve(keyPath)}`);
  }

  const result = spawnSync(browserBinary, args, { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error("浏览器打包 CRX 失败。");
  }
}

function moveArtifacts() {
  const generatedCrx = `${extensionDir}.crx`;
  const generatedPem = `${extensionDir}.pem`;
  const targetCrx = path.join(distDir, `${extensionName}.crx`);
  const targetPem = path.join(distDir, `${extensionName}.pem`);

  if (!fs.existsSync(generatedCrx)) {
    throw new Error(`未找到打包产物：${generatedCrx}`);
  }

  fs.mkdirSync(distDir, { recursive: true });
  fs.copyFileSync(generatedCrx, targetCrx);

  if (fs.existsSync(generatedPem)) {
    fs.copyFileSync(generatedPem, targetPem);
  }

  return {
    targetCrx,
    targetPem: fs.existsSync(targetPem) ? targetPem : "",
  };
}

function main() {
  const inputKeyPath = readArg("--key");
  const keyPath = inputKeyPath || (fs.existsSync(defaultKeyPath) ? defaultKeyPath : "");
  ensureBuiltExtension();

  const browserBinary = findBrowserBinary();
  packageCrx(browserBinary, keyPath);

  const { targetCrx, targetPem } = moveArtifacts();
  console.log(`CRX 已生成：${targetCrx}`);
  if (targetPem) {
    console.log(`PEM 已生成：${targetPem}`);
  } else {
    console.log("未生成新的 PEM（可能使用了已有 key）。");
  }
}

main();
