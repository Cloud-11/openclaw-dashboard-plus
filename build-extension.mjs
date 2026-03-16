import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const userscriptPath = path.join(currentDir, "openclaw-dashboard-plus.user.js");
const pluginMetadataPath = path.join(currentDir, "plugin-metadata.json");
const themePresetsPath = path.join(currentDir, "theme-presets.json");
const localePacksDir = path.join(currentDir, "language-packs");
const uiLocalesDir = path.join(currentDir, "ui-locales");
const legacyTranslationOverridesPath = path.join(currentDir, "translation-overrides.json");
const extensionSourceDir = path.join(currentDir, "extension-src");
const distDir = path.join(currentDir, "dist");
const extensionOutputDir = path.join(distDir, "extension");
const extensionLocalePacksDir = path.join(extensionOutputDir, "language-packs");
const extensionUiLocalesDir = path.join(extensionOutputDir, "ui-locales");
const extensionLegacyTranslationOverridesPath = path.join(extensionOutputDir, "translation-overrides.json");
const contentPath = path.join(extensionOutputDir, "content.js");
const manifestPath = path.join(extensionOutputDir, "manifest.json");
const extensionPluginMetadataPath = path.join(extensionOutputDir, "plugin-metadata.json");
const extensionThemePresetsPath = path.join(extensionOutputDir, "theme-presets.json");

function readUserscriptVersion(source) {
  const match = source.match(/@version\s+([^\s]+)/);
  if (!match) {
    throw new Error("Unable to determine userscript version from metadata header.");
  }
  return match[1];
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function copyJsonDirectory(sourceDir, targetDir) {
  emptyDir(targetDir);
  if (!fs.existsSync(sourceDir)) {
    return;
  }

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (!entry.isFile() || path.extname(entry.name) !== ".json") {
      continue;
    }
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    fs.copyFileSync(sourcePath, targetPath);
  }
}

function emptyDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function extractBalancedBlock(source, anchor, openChar, closeChar) {
  const anchorIndex = source.indexOf(anchor);
  if (anchorIndex === -1) {
    throw new Error(`Unable to find anchor: ${anchor}`);
  }
  const startIndex = source.indexOf(openChar, anchorIndex + anchor.length);
  if (startIndex === -1) {
    throw new Error(`Unable to find opening ${openChar} after anchor: ${anchor}`);
  }

  let depth = 0;
  let quote = null;
  let escaping = false;

  for (let index = startIndex; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (char === "\\") {
        escaping = true;
        continue;
      }
      if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === openChar) {
      depth += 1;
      continue;
    }

    if (char === closeChar) {
      depth -= 1;
      if (depth === 0) {
        return source.slice(startIndex, index + 1);
      }
    }
  }

  throw new Error(`Unbalanced block for anchor: ${anchor}`);
}

function evaluateLiteral(literal) {
  return Function(`"use strict"; return (${literal});`)();
}

function extractLocaleBundle(userscriptSource, version) {
  const exactTranslations = evaluateLiteral(
    extractBalancedBlock(userscriptSource, "const EXACT_TRANSLATIONS = new Map(", "{", "}"),
  );
  const configHelpTranslations = evaluateLiteral(
    extractBalancedBlock(userscriptSource, "const CONFIG_HELP_TRANSLATIONS = new Map(", "{", "}"),
  );
  const configLabelReplacements = evaluateLiteral(
    extractBalancedBlock(userscriptSource, "let CONFIG_LABEL_REPLACEMENTS = ", "[", "]"),
  );

  return {
    schemaVersion: 1,
    locale: "zh-CN",
    version: `builtin-${version}`,
    exactTranslations,
    configHelpTranslations,
    configLabelReplacements,
  };
}

function createEmptyLocaleBundle(locale, version) {
  return {
    schemaVersion: 1,
    locale,
    version: `builtin-${version}`,
    exactTranslations: {},
    configHelpTranslations: {},
    configLabelReplacements: [],
  };
}

const manifest = {
  manifest_version: 3,
  name: "OpenClaw Dashboard Plus",
  description: "Multilingual enhancements and extension controls for OpenClaw Dashboard.",
  version: "0.0.0",
  homepage_url: "https://github.com/Cloud-11/openclaw-dashboard-plus",
  permissions: ["storage"],
  host_permissions: ["https://raw.githubusercontent.com/*", "https://gitee.com/*"],
  icons: {
    16: "icons/icon-16.png",
    32: "icons/icon-32.png",
    48: "icons/icon-48.png",
    128: "icons/icon-128.png",
  },
  action: {
    default_title: "OpenClaw Dashboard Plus",
    default_popup: "popup.html",
    default_icon: {
      16: "icons/icon-16.png",
      32: "icons/icon-32.png",
      48: "icons/icon-48.png",
      128: "icons/icon-128.png",
    },
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*"],
      js: ["content.js"],
      run_at: "document_end",
    },
  ],
  web_accessible_resources: [
    {
      resources: ["plugin-metadata.json", "language-packs/*.json"],
      matches: ["http://*/*", "https://*/*"],
    },
    {
      resources: ["theme-presets.json"],
      matches: ["http://*/*", "https://*/*"],
    },
  ],
};

function stripUserscriptMetadata(source) {
  const headerPattern = /\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\s*/;
  return source.replace(headerPattern, "");
}

function createExtensionContentSource(userscriptSource) {
  return stripUserscriptMetadata(userscriptSource)
    .replace(
      /const EXACT_TRANSLATIONS = new Map\(\s*Object\.entries\(\{[\s\S]*?\}\),\s*\);/,
      "const EXACT_TRANSLATIONS = new Map();",
    )
    .replace(
      /const CONFIG_HELP_TRANSLATIONS = new Map\(\s*Object\.entries\(\{[\s\S]*?\}\),\s*\);/,
      "const CONFIG_HELP_TRANSLATIONS = new Map();",
    )
    .replace(/let CONFIG_LABEL_REPLACEMENTS = \[[\s\S]*?\n  \];/, "let CONFIG_LABEL_REPLACEMENTS = [];")
    .trimStart();
}

function writeLocalePacks(localeBundles) {
  emptyDir(localePacksDir);
  emptyDir(extensionLocalePacksDir);

  for (const [locale, bundle] of Object.entries(localeBundles)) {
    writeJson(path.join(localePacksDir, `${locale}.json`), bundle);
    writeJson(path.join(extensionLocalePacksDir, `${locale}.json`), bundle);
  }
}

function writeUiLocales() {
  copyJsonDirectory(uiLocalesDir, extensionUiLocalesDir);
}

function copyExtensionSource() {
  if (!fs.existsSync(extensionSourceDir)) {
    throw new Error(`Missing extension source directory: ${extensionSourceDir}`);
  }
  emptyDir(extensionOutputDir);
  fs.cpSync(extensionSourceDir, extensionOutputDir, { recursive: true });
}

function writeExtensionFiles() {
  const userscriptSource = fs.readFileSync(userscriptPath, "utf8");
  const userscriptVersion = readUserscriptVersion(userscriptSource);
  const pluginMetadata = readJson(pluginMetadataPath);
  const themePresets = readJson(themePresetsPath);
  const zhCnBundle = extractLocaleBundle(userscriptSource, userscriptVersion);
  const localeBundles = {
    "zh-CN": zhCnBundle,
    en: createEmptyLocaleBundle("en", userscriptVersion),
  };
  const contentSource = createExtensionContentSource(userscriptSource);

  const nextPluginMetadata = {
    ...pluginMetadata,
    version: userscriptVersion,
    translationBundle: {
      ...(pluginMetadata.translationBundle ?? {}),
      defaultLocale: "zh-CN",
      builtinVersions: Object.fromEntries(
        Object.entries(localeBundles).map(([locale, bundle]) => [locale, bundle.version]),
      ),
    },
    themeBundle: {
      ...(pluginMetadata.themeBundle ?? {}),
      defaultPreset: themePresets.defaultPreset || pluginMetadata.themeBundle?.defaultPreset || "openclaw-classic",
      builtinVersion: themePresets.version || pluginMetadata.themeBundle?.builtinVersion || `builtin-${userscriptVersion}`,
    },
  };

  const extensionManifest = {
    ...manifest,
    version: userscriptVersion,
    homepage_url: nextPluginMetadata.repositories?.github?.repoUrl || manifest.homepage_url,
  };

  copyExtensionSource();
  fs.rmSync(legacyTranslationOverridesPath, { force: true });
  fs.rmSync(extensionLegacyTranslationOverridesPath, { force: true });
  writeJson(pluginMetadataPath, nextPluginMetadata);
  writeLocalePacks(localeBundles);
  writeUiLocales();

  fs.writeFileSync(
    contentPath,
    `// This file is generated by openclaw-dashboard-plus/build-extension.mjs.\n${contentSource}\n`,
    "utf8",
  );
  writeJson(extensionPluginMetadataPath, nextPluginMetadata);
  writeJson(extensionThemePresetsPath, themePresets);
  writeJson(manifestPath, extensionManifest);
}

writeExtensionFiles();
