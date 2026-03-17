import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const pluginMetadataPath = path.join(currentDir, "plugin-metadata.json");
const localePacksDir = path.join(currentDir, "language-packs");
const uiLocalesDir = path.join(currentDir, "ui-locales");
const extensionSourceDir = path.join(currentDir, "extension-src");
const extensionContentSourcePath = path.join(extensionSourceDir, "content-main.js");
const themePresetsPath = path.join(extensionSourceDir, "theme-presets.json");
const uiStylePresetsPath = path.join(extensionSourceDir, "ui-style-presets.json");
const extensionStyleBundlePath = path.join(extensionSourceDir, "style-bundle.json");
const distDir = path.join(currentDir, "dist");
const extensionOutputDir = path.join(distDir, "extension");
const extensionLocalePacksDir = path.join(extensionOutputDir, "language-packs");
const extensionUiLocalesDir = path.join(extensionOutputDir, "ui-locales");
const extensionLegacyTranslationOverridesPath = path.join(extensionOutputDir, "translation-overrides.json");
const contentPath = path.join(extensionOutputDir, "content.js");
const manifestPath = path.join(extensionOutputDir, "manifest.json");
const extensionPluginMetadataPath = path.join(extensionOutputDir, "plugin-metadata.json");
const extensionThemePresetsPath = path.join(extensionOutputDir, "theme-presets.json");
const extensionUiStylePresetsPath = path.join(extensionOutputDir, "ui-style-presets.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
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

function readJsonDirectory(sourceDir) {
  if (!fs.existsSync(sourceDir)) {
    return {};
  }

  return Object.fromEntries(
    fs.readdirSync(sourceDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && path.extname(entry.name) === ".json")
      .map((entry) => [
        path.basename(entry.name, ".json"),
        readJson(path.join(sourceDir, entry.name)),
      ]),
  );
}

function emptyDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

const manifest = {
  manifest_version: 3,
  name: "OpenClaw Dashboard Plus",
  description: "Multilingual enhancements and extension controls for OpenClaw Dashboard.",
  version: "0.0.0",
  homepage_url: "https://github.com/Cloud-11/openclaw-dashboard-plus",
  permissions: ["storage"],
  host_permissions: ["https://raw.githubusercontent.com/*", "https://gitee.com/*", "https://api.github.com/*"],
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
    {
      resources: ["ui-style-presets.json"],
      matches: ["http://*/*", "https://*/*"],
    },
    {
      resources: ["style-bundle.json", "style-modules/*"],
      matches: ["http://*/*", "https://*/*"],
    },
  ],
};

function hydrateStyleBundle(styleBundlePath) {
  const styleBundle = fs.existsSync(styleBundlePath)
    ? readJson(styleBundlePath)
    : { schemaVersion: 1, version: "builtin", modules: [] };
  const bundleDir = path.dirname(styleBundlePath);
  const modules = Array.isArray(styleBundle.modules) ? styleBundle.modules : [];

  return {
    ...styleBundle,
    modules: modules.map((module) => {
      if (!module || typeof module !== "object") {
        return module;
      }

      const assetPath = typeof module.assetPath === "string" && module.assetPath.trim()
        ? module.assetPath.trim()
        : "";

      if (!assetPath || module.content != null) {
        return module;
      }

      const resolvedPath = path.join(bundleDir, assetPath);
      if (!fs.existsSync(resolvedPath)) {
        return module;
      }

      if (module.kind === "json") {
        return {
          ...module,
          content: readJson(resolvedPath),
        };
      }

      return {
        ...module,
        content: readText(resolvedPath),
      };
    }),
  };
}

function createExtensionContentSource(contentSource, themePresets, uiStylePresets, hydratedStyleBundle) {
  return contentSource
    .replace(
      /const FALLBACK_THEME_PRESET_BUNDLE = Object\.freeze\(\{[\s\S]*?\}\);\r?\n/,
      `const FALLBACK_THEME_PRESET_BUNDLE = Object.freeze(${JSON.stringify(themePresets, null, 2)});\n`,
    )
    .replace(
      /const FALLBACK_UI_STYLE_BUNDLE = Object\.freeze\(\{[\s\S]*?\}\);\r?\n/,
      `const FALLBACK_UI_STYLE_BUNDLE = Object.freeze(${JSON.stringify(uiStylePresets, null, 2)});\n`,
    )
    .replace(
      /const BUILTIN_STYLE_BUNDLE_DATA = [\s\S]*?;\r?\n/,
      `const BUILTIN_STYLE_BUNDLE_DATA = ${JSON.stringify(hydratedStyleBundle)};\n`,
    )
    .trimStart();
}

function writeLocalePacks() {
  copyJsonDirectory(localePacksDir, extensionLocalePacksDir);
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
  const pluginMetadata = readJson(pluginMetadataPath);
  const extensionVersion = typeof pluginMetadata.version === "string" && pluginMetadata.version.trim()
    ? pluginMetadata.version.trim()
    : manifest.version;
  const themePresets = readJson(themePresetsPath);
  const uiStylePresets = readJson(uiStylePresetsPath);
  const styleBundle = fs.existsSync(extensionStyleBundlePath)
    ? readJson(extensionStyleBundlePath)
    : { version: `builtin-${extensionVersion}` };
  const hydratedStyleBundle = hydrateStyleBundle(extensionStyleBundlePath);
  const localeBundles = readJsonDirectory(localePacksDir);
  const builtinLocaleVersions = Object.fromEntries(
    Object.entries(localeBundles).map(([locale, bundle]) => [locale, bundle?.version || `builtin-${extensionVersion}`]),
  );
  const contentSource = createExtensionContentSource(
    readText(extensionContentSourcePath),
    themePresets,
    uiStylePresets,
    hydratedStyleBundle,
  );

  const nextPluginMetadata = {
    ...pluginMetadata,
    version: extensionVersion,
    translationBundle: {
      ...(pluginMetadata.translationBundle ?? {}),
      defaultLocale: pluginMetadata.translationBundle?.defaultLocale || "zh-CN",
      builtinVersions: {
        ...(pluginMetadata.translationBundle?.builtinVersions ?? {}),
        ...builtinLocaleVersions,
      },
    },
    themeBundle: {
      ...(pluginMetadata.themeBundle ?? {}),
      defaultPreset: themePresets.defaultPreset || pluginMetadata.themeBundle?.defaultPreset || "openclaw-classic",
      builtinVersion: themePresets.version || pluginMetadata.themeBundle?.builtinVersion || `builtin-${extensionVersion}`,
    },
    uiStyleBundle: {
      ...(pluginMetadata.uiStyleBundle ?? {}),
      defaultPreset: uiStylePresets.defaultPreset || pluginMetadata.uiStyleBundle?.defaultPreset || "openclaw-default",
      builtinVersion: uiStylePresets.version || pluginMetadata.uiStyleBundle?.builtinVersion || `builtin-${extensionVersion}`,
    },
    styleBundle: {
      ...(pluginMetadata.styleBundle ?? {}),
      builtinVersion: styleBundle.version || pluginMetadata.styleBundle?.builtinVersion || `builtin-${extensionVersion}`,
    },
  };

  const extensionManifest = {
    ...manifest,
    version: extensionVersion,
    homepage_url: nextPluginMetadata.repositories?.github?.repoUrl || manifest.homepage_url,
  };

  copyExtensionSource();
  fs.rmSync(extensionLegacyTranslationOverridesPath, { force: true });
  fs.rmSync(path.join(extensionOutputDir, "content-main.js"), { force: true });
  writeLocalePacks();
  writeUiLocales();

  fs.writeFileSync(
    contentPath,
    `// This file is generated by openclaw-dashboard-plus/build-extension.mjs.\n${contentSource}\n`,
    "utf8",
  );
  writeJson(extensionPluginMetadataPath, nextPluginMetadata);
  writeJson(extensionThemePresetsPath, themePresets);
  writeJson(extensionUiStylePresetsPath, uiStylePresets);
  writeJson(manifestPath, extensionManifest);
}

writeExtensionFiles();
