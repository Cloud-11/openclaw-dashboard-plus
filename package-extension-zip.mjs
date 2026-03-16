import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const buildScriptPath = path.join(currentDir, "build-extension.mjs");
const distDir = path.join(currentDir, "dist");
const extensionDir = path.join(distDir, "extension");
const outputZipPath = path.join(distDir, "openclaw-dashboard-plus-extension.zip");

function ensureBuiltExtension() {
  const buildResult = spawnSync(process.execPath, [buildScriptPath], { stdio: "inherit" });
  if (buildResult.status !== 0) {
    throw new Error("Failed to build the extension output.");
  }
}

function findPowerShell() {
  const candidates = process.platform === "win32" ? ["pwsh.exe", "powershell.exe"] : ["pwsh", "powershell"];
  for (const candidate of candidates) {
    const result = spawnSync(candidate, ["-NoLogo", "-NoProfile", "-Command", "$PSVersionTable.PSVersion.ToString()"], {
      stdio: "ignore",
    });
    if (result.status === 0) {
      return candidate;
    }
  }
  throw new Error("PowerShell is required to create the extension zip archive.");
}

function packageZip(shellBinary) {
  if (!fs.existsSync(extensionDir)) {
    throw new Error(`Missing extension directory: ${extensionDir}`);
  }

  fs.mkdirSync(distDir, { recursive: true });
  fs.rmSync(outputZipPath, { force: true });

  const command = [
    `$source = Join-Path '${extensionDir.replace(/'/g, "''")}' '*'`,
    `$destination = '${outputZipPath.replace(/'/g, "''")}'`,
    "Compress-Archive -Path $source -DestinationPath $destination -Force",
  ].join("; ");

  const result = spawnSync(shellBinary, ["-NoLogo", "-NoProfile", "-Command", command], { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error("Failed to package the extension zip archive.");
  }
}

function main() {
  ensureBuiltExtension();
  packageZip(findPowerShell());
  console.log(`Extension zip created: ${outputZipPath}`);
}

main();
