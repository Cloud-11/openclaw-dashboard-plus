const DEFAULT_UI_LOCALE = "zh-CN";
const SYSTEM_UI_LOCALE = "system";
const DEFAULT_SETTINGS = {
  enabled: true,
  hosts: "127.0.0.1,localhost",
  ports: "18789",
  locale: "zh-CN",
  panelLocale: SYSTEM_UI_LOCALE,
  themePreset: "openclaw-classic",
  fontFamily: "system",
  fontScale: "100",
  styleOverride: true,
  styleRepair: true,
  selectStyleFix: true,
  codeBlockStyleFix: true,
};
const STORAGE_KEYS = {
  bundles: "remoteLanguageBundles",
  states: "remoteLanguageStates",
  themeBundle: "remoteThemePresetBundle",
  themeState: "remoteThemePresetState",
  styleBundle: "remoteThemeStyleBundle",
  styleState: "remoteThemeStyleState",
};
const uiLocaleStringsCache = new Map();
const REMOTE_FETCH_TIMEOUT_MS = 6000;
const ALLOWED_STYLE_MODULE_KINDS = new Set(["css", "html", "json"]);
const FONT_OPTIONS = [
  {
    value: "system",
    labelKey: "theme_font_system",
    fallback: "System Sans",
    noteKey: "theme_font_system_note",
    noteFallback: "Keep the browser and OS default sans-serif stack",
  },
  {
    value: "modern",
    labelKey: "theme_font_modern",
    fallback: "Modern Sans",
    noteKey: "theme_font_modern_note",
    noteFallback: "Prefer Google Sans / Segoe UI style rendering",
  },
  {
    value: "noto",
    labelKey: "theme_font_noto",
    fallback: "Noto Sans CJK",
    noteKey: "theme_font_noto_note",
    noteFallback: "A steadier CJK-heavy reading stack",
  },
  {
    value: "serif",
    labelKey: "theme_font_serif",
    fallback: "Readable Serif",
    noteKey: "theme_font_serif_note",
    noteFallback: "A softer serif presentation for long-form settings",
  },
];
const FONT_SCALE_OPTIONS = [
  {
    value: "90",
    labelKey: "theme_scale_90",
    fallback: "90%",
    noteKey: "theme_scale_small_note",
    noteFallback: "Compact density",
  },
  {
    value: "100",
    labelKey: "theme_scale_100",
    fallback: "100%",
    noteKey: "theme_scale_default_note",
    noteFallback: "Balanced default size",
  },
  {
    value: "110",
    labelKey: "theme_scale_110",
    fallback: "110%",
    noteKey: "theme_scale_large_note",
    noteFallback: "Slightly larger controls and labels",
  },
  {
    value: "120",
    labelKey: "theme_scale_120",
    fallback: "120%",
    noteKey: "theme_scale_xlarge_note",
    noteFallback: "Large text and roomy controls",
  },
];
const FALLBACK_THEME_BUNDLE = {
  schemaVersion: 1,
  version: "builtin",
  defaultPreset: "openclaw-classic",
  presets: [
    {
      id: "openclaw-classic",
      preserveNativeColors: true,
    },
    {
      id: "plus-clean",
    },
    {
      id: "plus-contrast",
    },
  ],
};
const FALLBACK_METADATA = {
  name: "OpenClaw Dashboard Plus",
  version: "0.0.0",
  compatibility: { openclaw: "2026.3.9+" },
  author: { name: "cloud11", homepage: "https://github.com/Cloud-11/openclaw-dashboard-plus" },
  repositories: {
    github: { label: "GitHub", repoUrl: "https://github.com/Cloud-11/openclaw-dashboard-plus" },
    gitee: { label: "Gitee", repoUrl: "https://gitee.com/Cloud-11/openclaw-dashboard-plus" },
  },
  locales: [
    { code: "zh-CN", label: "简体中文", nativeLabel: "简体中文", builtin: true, default: true },
    { code: "en", label: "English", nativeLabel: "English", builtin: true, default: false },
  ],
  uiLocales: [
    { code: "zh-CN", label: "Simplified Chinese", nativeLabel: "简体中文", builtin: true, default: true },
    { code: "en", label: "English", nativeLabel: "English", builtin: true, default: false },
  ],
  translationBundle: { defaultLocale: "zh-CN", builtinVersions: { "zh-CN": "builtin", en: "builtin" } },
  themeBundle: { defaultPreset: "openclaw-classic", builtinVersion: "builtin" },
  styleBundle: { builtinVersion: "builtin" },
  updateSources: [
    {
      id: "github",
      label: "GitHub",
      repoUrl: "https://github.com/Cloud-11/openclaw-dashboard-plus",
      metadataUrl: "https://raw.githubusercontent.com/Cloud-11/openclaw-dashboard-plus/main/plugin-metadata.json",
      localeUrlTemplate: "https://raw.githubusercontent.com/Cloud-11/openclaw-dashboard-plus/main/language-packs/{locale}.json",
      uiLocaleUrlTemplate: "https://raw.githubusercontent.com/Cloud-11/openclaw-dashboard-plus/main/ui-locales/{locale}.json",
      themePresetsUrl: "https://raw.githubusercontent.com/Cloud-11/openclaw-dashboard-plus/main/extension-src/theme-presets.json",
      styleBundleUrl: "https://raw.githubusercontent.com/Cloud-11/openclaw-dashboard-plus/main/extension-src/style-bundle.json",
    },
    {
      id: "gitee",
      label: "Gitee",
      repoUrl: "https://gitee.com/Cloud-11/openclaw-dashboard-plus",
      metadataUrl: "https://gitee.com/Cloud-11/openclaw-dashboard-plus/raw/main/plugin-metadata.json",
      localeUrlTemplate: "https://gitee.com/Cloud-11/openclaw-dashboard-plus/raw/main/language-packs/{locale}.json",
      uiLocaleUrlTemplate: "https://gitee.com/Cloud-11/openclaw-dashboard-plus/raw/main/ui-locales/{locale}.json",
      themePresetsUrl: "https://gitee.com/Cloud-11/openclaw-dashboard-plus/raw/main/extension-src/theme-presets.json",
      styleBundleUrl: "https://gitee.com/Cloud-11/openclaw-dashboard-plus/raw/main/extension-src/style-bundle.json",
    },
  ],
};

function $(id) {
  return document.getElementById(id);
}

function getElements() {
  return {
    root: document.documentElement,
    enabled: $("enabled"),
    enabledHint: $("enabled-hint"),
    hosts: $("hosts"),
    ports: $("ports"),
    save: $("save"),
    saveStatus: $("save-status"),
    panelSelect: { root: $("panel-locale-control"), trigger: $("panel-locale-trigger"), menu: $("panel-locale-menu") },
    contentSelect: { root: $("locale-control"), trigger: $("locale-trigger"), menu: $("locale-menu") },
    themePresetSelect: { root: $("theme-preset-control"), trigger: $("theme-preset-trigger"), menu: $("theme-preset-menu") },
    themeFontSelect: { root: $("theme-font-control"), trigger: $("theme-font-trigger"), menu: $("theme-font-menu") },
    themeScaleSelect: { root: $("theme-scale-control"), trigger: $("theme-scale-trigger"), menu: $("theme-scale-menu") },
    styleOverride: $("style-override"),
    styleRepair: $("style-repair"),
    selectStyleFix: $("select-style-fix"),
    codeBlockStyleFix: $("code-block-style-fix"),
    saveTheme: $("save-theme"),
    downloadTheme: $("download-theme"),
    clearTheme: $("clear-theme"),
    themeStatus: $("theme-status"),
    themeCurrentPreset: $("theme-current-preset"),
    themeBuiltinVersion: $("theme-builtin-version"),
    themeCachedVersion: $("theme-cached-version"),
    themeActiveSource: $("theme-active-source"),
    themeLastSync: $("theme-last-sync"),
    applyLocale: $("apply-locale"),
    downloadLocale: $("download-locale"),
    clearLocale: $("clear-locale"),
    localeStatus: $("locale-status"),
    authorName: $("author-name"),
    githubLink: $("github-link"),
    githubStars: $("github-stars"),
    giteeLink: $("gitee-link"),
    extensionVersion: $("extension-version"),
    latestVersion: $("latest-version"),
    openclawVersion: $("openclaw-version"),
    currentLocale: $("current-locale"),
    builtinVersion: $("builtin-version"),
    cachedVersion: $("cached-version"),
    activeSource: $("active-source"),
    lastSync: $("last-sync"),
    refreshMeta: $("refresh-meta"),
    metaStatus: $("meta-status"),
    tabButtons: [...document.querySelectorAll("[data-tab]")],
    panels: [...document.querySelectorAll("[data-panel]")],
    i18nText: [...document.querySelectorAll("[data-i18n]")],
    i18nPlaceholders: [...document.querySelectorAll("[data-i18n-placeholder]")],
  };
}

function interpolate(template, params = {}) {
  return String(template ?? "").replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? ""));
}

function t(state, key, params = {}, fallback = key) {
  return interpolate(state.uiStrings?.[key] ?? fallback, params);
}

function setStatus(state, slot, key, tone = "info", params = {}) {
  state.messages[slot] = { key, tone, params };
}

function withTimeout(promise, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error("Request timed out")), timeoutMs);
    promise.then((value) => {
      window.clearTimeout(timer);
      resolve(value);
    }).catch((error) => {
      window.clearTimeout(timer);
      reject(error);
    });
  });
}

async function fetchJson(url, timeoutMs = REMOTE_FETCH_TIMEOUT_MS) {
  const response = await withTimeout(fetch(url, { cache: "no-store" }), timeoutMs);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

async function fetchText(url, timeoutMs = REMOTE_FETCH_TIMEOUT_MS) {
  const response = await withTimeout(fetch(url, { cache: "no-store" }), timeoutMs);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.text();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function parseGitHubRepo(repoUrl) {
  if (!repoUrl) {
    return null;
  }
  try {
    const url = new URL(repoUrl);
    if (!/github\.com$/i.test(url.hostname)) {
      return null;
    }
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) {
      return null;
    }
    return {
      owner: decodeURIComponent(parts[0]),
      name: decodeURIComponent(parts[1]).replace(/\.git$/i, ""),
    };
  } catch {
    return null;
  }
}

function storageGet(area, defaults) {
  return new Promise((resolve, reject) => {
    chrome.storage[area].get(defaults, (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }
      resolve(result);
    });
  });
}

function storageSet(area, values) {
  return new Promise((resolve, reject) => {
    chrome.storage[area].set(values, () => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }
      resolve();
    });
  });
}

function storageRemove(area, keys) {
  return new Promise((resolve, reject) => {
    chrome.storage[area].remove(keys, () => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }
      resolve();
    });
  });
}

function normalizeChoice(value, allowedValues, fallbackValue) {
  if (typeof value !== "string") {
    return fallbackValue;
  }
  const normalizedValue = value.trim();
  return allowedValues.includes(normalizedValue) ? normalizedValue : fallbackValue;
}

function normalizeFontScale(value) {
  const rawValue = typeof value === "string" || typeof value === "number" ? String(value).trim() : "";
  const parsedValue = Number.parseFloat(rawValue || DEFAULT_SETTINGS.fontScale);
  if (!Number.isFinite(parsedValue)) {
    return DEFAULT_SETTINGS.fontScale;
  }
  return String(Math.min(130, Math.max(85, Math.round(parsedValue))));
}

function normalizeLocaleEntry(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const code = typeof entry.code === "string" ? entry.code.trim() : "";
  if (!code) {
    return null;
  }
  const label = typeof entry.label === "string" && entry.label.trim() ? entry.label.trim() : code;
  const nativeLabel = typeof entry.nativeLabel === "string" && entry.nativeLabel.trim()
    ? entry.nativeLabel.trim()
    : label;
  return {
    code,
    label,
    nativeLabel,
    builtin: entry.builtin !== false,
    default: entry.default === true,
  };
}

function normalizeLocaleEntries(entries, fallbackEntries = []) {
  const normalizedEntries = Array.isArray(entries)
    ? entries.map((entry) => normalizeLocaleEntry(entry)).filter(Boolean)
    : [];
  if (normalizedEntries.length) {
    return normalizedEntries;
  }
  return Array.isArray(fallbackEntries) ? fallbackEntries.map((entry) => ({ ...entry })) : [];
}

function normalizeThemePreset(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const id = typeof entry.id === "string" && entry.id.trim() ? entry.id.trim() : "";
  if (!id) {
    return null;
  }
  const variables = entry.variables && typeof entry.variables === "object"
    ? Object.fromEntries(
        Object.entries(entry.variables)
          .filter(([key, value]) => typeof key === "string" && typeof value === "string")
          .map(([key, value]) => [key.trim(), value.trim()]),
      )
    : {};
  return {
    id,
    preserveNativeColors: entry.preserveNativeColors === true,
    variables,
  };
}

function normalizeThemeBundle(bundle, fallbackVersion = FALLBACK_THEME_BUNDLE.version) {
  const presets = Array.isArray(bundle?.presets)
    ? bundle.presets.map((entry) => normalizeThemePreset(entry)).filter(Boolean)
    : [];
  const normalizedPresets = presets.length
    ? presets
    : FALLBACK_THEME_BUNDLE.presets.map((entry) => normalizeThemePreset(entry)).filter(Boolean);
  return {
    schemaVersion: 1,
    version: typeof bundle?.version === "string" && bundle.version.trim()
      ? bundle.version.trim()
      : fallbackVersion,
    defaultPreset: typeof bundle?.defaultPreset === "string" && bundle.defaultPreset.trim()
      ? bundle.defaultPreset.trim()
      : normalizedPresets[0]?.id || FALLBACK_THEME_BUNDLE.defaultPreset,
    presets: normalizedPresets,
  };
}

function normalizeStyleModule(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const id = typeof entry.id === "string" && entry.id.trim() ? entry.id.trim() : "";
  if (!id) {
    return null;
  }
  const kind = typeof entry.kind === "string" && ALLOWED_STYLE_MODULE_KINDS.has(entry.kind.trim())
    ? entry.kind.trim()
    : "css";
  const assetPath = typeof entry.assetPath === "string" && entry.assetPath.trim() ? entry.assetPath.trim() : "";
  return {
    id,
    kind,
    assetPath,
    settingKey: typeof entry.settingKey === "string" && entry.settingKey.trim() ? entry.settingKey.trim() : "",
    presetIds: Array.isArray(entry.presetIds)
      ? entry.presetIds.filter((value) => typeof value === "string" && value.trim()).map((value) => value.trim())
      : [],
    excludePresetIds: Array.isArray(entry.excludePresetIds)
      ? entry.excludePresetIds.filter((value) => typeof value === "string" && value.trim()).map((value) => value.trim())
      : [],
    content: kind === "json"
      ? (entry.content && typeof entry.content === "object" ? entry.content : null)
      : (typeof entry.content === "string" ? entry.content : null),
  };
}

function normalizeStyleBundle(bundle, fallbackVersion = "builtin") {
  const modules = Array.isArray(bundle?.modules)
    ? bundle.modules.map((entry) => normalizeStyleModule(entry)).filter(Boolean)
    : [];
  return {
    schemaVersion: 1,
    version: typeof bundle?.version === "string" && bundle.version.trim() ? bundle.version.trim() : fallbackVersion,
    modules,
  };
}

function inferStyleAssetKind(assetPath) {
  const normalized = String(assetPath || "").trim().toLowerCase();
  if (normalized.endsWith(".css")) {
    return "css";
  }
  if (normalized.endsWith(".html")) {
    return "html";
  }
  if (normalized.endsWith(".json")) {
    return "json";
  }
  return "";
}

function resolveAssetUrl(assetPath, bundleUrl) {
  try {
    return new URL(assetPath, bundleUrl).toString();
  } catch {
    return "";
  }
}

async function hydrateRemoteStyleBundle(bundleUrl) {
  const bundle = normalizeStyleBundle(await fetchJson(bundleUrl), "remote");
  const modules = [];
  for (const module of bundle.modules) {
    if (!module.assetPath) {
      modules.push(module);
      continue;
    }
    const inferredKind = inferStyleAssetKind(module.assetPath);
    const kind = module.kind || inferredKind || "css";
    if (!ALLOWED_STYLE_MODULE_KINDS.has(kind)) {
      throw new Error(`Unsupported style asset kind: ${kind}`);
    }
    const assetUrl = resolveAssetUrl(module.assetPath, bundleUrl);
    if (!assetUrl) {
      throw new Error(`Unable to resolve style asset URL for ${module.id}`);
    }
    const content = kind === "json" ? await fetchJson(assetUrl) : await fetchText(assetUrl);
    modules.push({
      ...module,
      kind,
      content,
    });
  }
  return {
    ...bundle,
    modules,
  };
}

function mergeThemeBundles(baseBundle, nextBundle) {
  const mergedMap = new Map();
  for (const preset of normalizeThemeBundle(baseBundle).presets) {
    mergedMap.set(preset.id, preset);
  }
  for (const preset of normalizeThemeBundle(nextBundle).presets) {
    const previousPreset = mergedMap.get(preset.id);
    mergedMap.set(
      preset.id,
      previousPreset
        ? {
            ...previousPreset,
            ...preset,
            variables: {
              ...(previousPreset.variables || {}),
              ...(preset.variables || {}),
            },
          }
        : preset,
    );
  }
  return {
    schemaVersion: 1,
    version: normalizeThemeBundle(nextBundle).version || normalizeThemeBundle(baseBundle).version,
    defaultPreset: normalizeThemeBundle(nextBundle).defaultPreset || normalizeThemeBundle(baseBundle).defaultPreset,
    presets: Array.from(mergedMap.values()),
  };
}

function resolveThemePreset(bundle, presetId) {
  const normalizedBundle = normalizeThemeBundle(bundle);
  return (
    normalizedBundle.presets.find((preset) => preset.id === presetId) ||
    normalizedBundle.presets.find((preset) => preset.id === normalizedBundle.defaultPreset) ||
    normalizedBundle.presets[0] ||
    null
  );
}

function normalizeMetadata(raw, version) {
  const metadata = raw && typeof raw === "object" ? raw : {};
  const locales = normalizeLocaleEntries(metadata.locales, FALLBACK_METADATA.locales);
  const uiLocales = normalizeLocaleEntries(
    Array.isArray(metadata.uiLocales) && metadata.uiLocales.length ? metadata.uiLocales : locales,
    FALLBACK_METADATA.uiLocales,
  );
  return {
    ...FALLBACK_METADATA,
    ...metadata,
    version: version || metadata.version || FALLBACK_METADATA.version,
    compatibility: { ...FALLBACK_METADATA.compatibility, ...(metadata.compatibility || {}) },
    author: { ...FALLBACK_METADATA.author, ...(metadata.author || {}) },
    repositories: { ...FALLBACK_METADATA.repositories, ...(metadata.repositories || {}) },
    locales,
    uiLocales,
    translationBundle: {
      ...FALLBACK_METADATA.translationBundle,
      ...(metadata.translationBundle || {}),
      builtinVersions: {
        ...FALLBACK_METADATA.translationBundle.builtinVersions,
        ...(metadata.translationBundle?.builtinVersions || {}),
      },
    },
    themeBundle: {
      ...FALLBACK_METADATA.themeBundle,
      ...(metadata.themeBundle || {}),
    },
    styleBundle: {
      ...FALLBACK_METADATA.styleBundle,
      ...(metadata.styleBundle || {}),
    },
    updateSources: Array.isArray(metadata.updateSources) && metadata.updateSources.length ? metadata.updateSources : FALLBACK_METADATA.updateSources,
  };
}

function mergeMetadata(base, next) {
  return {
    ...base,
    ...next,
    compatibility: { ...(base.compatibility || {}), ...(next.compatibility || {}) },
    author: { ...(base.author || {}), ...(next.author || {}) },
    repositories: { ...(base.repositories || {}), ...(next.repositories || {}) },
    locales: Array.isArray(next.locales) && next.locales.length ? next.locales : base.locales,
    uiLocales: Array.isArray(next.uiLocales) && next.uiLocales.length ? next.uiLocales : base.uiLocales,
    translationBundle: {
      ...(base.translationBundle || {}),
      ...(next.translationBundle || {}),
      builtinVersions: {
        ...(base.translationBundle?.builtinVersions || {}),
        ...(next.translationBundle?.builtinVersions || {}),
      },
    },
    themeBundle: {
      ...(base.themeBundle || {}),
      ...(next.themeBundle || {}),
    },
    styleBundle: {
      ...(base.styleBundle || {}),
      ...(next.styleBundle || {}),
    },
    updateSources: Array.isArray(next.updateSources) && next.updateSources.length ? next.updateSources : base.updateSources,
  };
}

function effectiveMetadata(state) {
  return state.remoteMetadata ? mergeMetadata(state.localMetadata, state.remoteMetadata) : state.localMetadata;
}

function panelUiLocaleEntries(metadata) {
  if (Array.isArray(metadata?.uiLocales) && metadata.uiLocales.length) {
    return metadata.uiLocales;
  }
  if (Array.isArray(metadata?.locales) && metadata.locales.length) {
    return metadata.locales;
  }
  return FALLBACK_METADATA.uiLocales;
}

function buildUiLocaleUrls(metadata, locale) {
  const sources = Array.isArray(metadata?.updateSources) ? metadata.updateSources : [];
  return sources.map((source) => {
    if (source?.uiLocaleUrlTemplate) {
      return String(source.uiLocaleUrlTemplate).replaceAll("{locale}", encodeURIComponent(locale));
    }
    return null;
  }).filter(Boolean);
}

function buildThemeBundleUrls(metadata) {
  const sources = Array.isArray(metadata?.updateSources) ? metadata.updateSources : [];
  return sources.map((source) => {
    if (source?.themePresetsUrl) {
      return {
        url: source.themePresetsUrl,
        styleUrl: source.styleBundleUrl || "",
        source,
      };
    }
    return null;
  }).filter(Boolean);
}

function effectiveThemeBundle(state) {
  return state.cachedThemeBundle ? mergeThemeBundles(state.builtinThemeBundle, state.cachedThemeBundle) : state.builtinThemeBundle;
}

function localeName(entry, uiLocale) {
  if (!entry) {
    return "";
  }
  return String(uiLocale || "").toLowerCase().startsWith("en")
    ? entry.label || entry.nativeLabel || entry.code
    : entry.nativeLabel || entry.label || entry.code;
}

function localeSelfName(entry) {
  if (!entry) {
    return "";
  }
  return entry.nativeLabel || entry.label || entry.code;
}

function themePresetKey(presetId, suffix) {
  return `theme_preset_${presetId}_${suffix}`;
}

function themePresetName(state, entry) {
  if (!entry) {
    return "";
  }
  return t(state, themePresetKey(entry.id, "label"), {}, entry.id);
}

function themePresetDescription(state, entry) {
  if (!entry) {
    return "";
  }
  return t(state, themePresetKey(entry.id, "description"), {}, "");
}

function systemLocale(supportedCodes = panelUiLocaleEntries(FALLBACK_METADATA).map((entry) => entry.code)) {
  const supported = Array.isArray(supportedCodes) && supportedCodes.length
    ? supportedCodes
    : [DEFAULT_UI_LOCALE];
  const candidates = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language || DEFAULT_UI_LOCALE];
  for (const raw of candidates) {
    const candidate = String(raw || "").trim().replace(/_/g, "-");
    if (supported.includes(candidate)) {
      return candidate;
    }
    const base = candidate.split("-")[0];
    const matched = supported.find((item) => item.split("-")[0] === base);
    if (matched) {
      return matched;
    }
  }
  return DEFAULT_UI_LOCALE;
}

function panelLocaleSetting(state) {
  return state.selectedPanelLocale || state.settings.panelLocale || SYSTEM_UI_LOCALE;
}

function panelUiLocale(setting, metadata = FALLBACK_METADATA) {
  const supportedCodes = panelUiLocaleEntries(metadata).map((entry) => entry.code);
  if (setting === SYSTEM_UI_LOCALE) {
    return systemLocale(supportedCodes);
  }
  return supportedCodes.includes(setting) ? setting : DEFAULT_UI_LOCALE;
}

async function fetchUiLocaleStrings(locale, metadata = null) {
  if (!locale) {
    return null;
  }
  if (uiLocaleStringsCache.has(locale)) {
    return uiLocaleStringsCache.get(locale);
  }
  try {
    const bundle = await fetchJson(chrome.runtime.getURL(`ui-locales/${locale}.json`), 2500);
    const strings = bundle?.strings && typeof bundle.strings === "object" ? bundle.strings : null;
    if (strings) {
      uiLocaleStringsCache.set(locale, strings);
    }
    return strings;
  } catch {
    // try remote mirrors
  }
  for (const remoteUrl of buildUiLocaleUrls(metadata, locale)) {
    try {
      const bundle = await fetchJson(remoteUrl, 3000);
      const strings = bundle?.strings && typeof bundle.strings === "object" ? bundle.strings : null;
      if (strings) {
        uiLocaleStringsCache.set(locale, strings);
      }
      return strings;
    } catch {
      // try next remote url
    }
  }
  return null;
}

function panelUiFallbackLocales(locale) {
  if (locale === DEFAULT_UI_LOCALE) {
    return ["en", DEFAULT_UI_LOCALE];
  }
  if (String(locale || "").toLowerCase().startsWith("zh")) {
    return ["en", DEFAULT_UI_LOCALE, locale];
  }
  return [DEFAULT_UI_LOCALE, "en", locale];
}

function formatCount(state, value) {
  return new Intl.NumberFormat(state.uiLocale || DEFAULT_UI_LOCALE).format(value);
}

async function refreshGitHubRepoStats(elements, state) {
  const metadata = effectiveMetadata(state);
  const repoUrl = metadata.repositories?.github?.repoUrl || FALLBACK_METADATA.repositories.github.repoUrl;
  const repo = parseGitHubRepo(repoUrl);

  if (!repo) {
    state.githubStats = {
      repoUrl,
      stars: null,
      loading: false,
      error: "invalid_repo_url",
    };
    renderAll(elements, state);
    return;
  }

  if (state.githubStats?.loading && state.githubStats.repoUrl === repoUrl) {
    return;
  }

  if (state.githubStats?.repoUrl === repoUrl && Number.isFinite(state.githubStats.stars)) {
    return;
  }

  state.githubStats = {
    repoUrl,
    stars: state.githubStats?.repoUrl === repoUrl ? state.githubStats.stars : null,
    loading: true,
    error: null,
  };
  renderAll(elements, state);

  try {
    const payload = await fetchJson(
      `https://api.github.com/repos/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.name)}`,
      4000,
    );
    state.githubStats = {
      repoUrl,
      stars: Number.isFinite(payload?.stargazers_count) ? payload.stargazers_count : null,
      loading: false,
      error: null,
    };
  } catch (error) {
    state.githubStats = {
      repoUrl,
      stars: null,
      loading: false,
      error: error?.message || String(error || ""),
    };
  }

  renderAll(elements, state);
}

function contentLocale(state, metadata) {
  const fallback = metadata.translationBundle?.defaultLocale || metadata.locales[0]?.code || DEFAULT_SETTINGS.locale;
  const candidate = state.selectedContentLocale || state.settings.locale || fallback;
  return metadata.locales.some((entry) => entry.code === candidate) ? candidate : fallback;
}

function formatDateTime(state, value) {
  if (!value) {
    return t(state, "not_synced", {}, "Not synced");
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return t(state, "not_synced", {}, "Not synced");
  }
  return new Intl.DateTimeFormat(state.uiLocale || DEFAULT_UI_LOCALE, {
    hour12: false,
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function sourceLabel(state, cachedState, localeEntry) {
  if (cachedState?.sourceLabel) {
    return cachedState.sourceLabel;
  }
  return localeEntry?.builtin
    ? t(state, "locale_source_builtin", {}, "Built-in")
    : t(state, "locale_source_original", {}, "Original");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderSelect(control, options, selectedValue, open) {
  const current = options.find((entry) => entry.value === selectedValue) || options[0];
  control.trigger.textContent = current?.label || "";
  control.trigger.setAttribute("aria-expanded", open ? "true" : "false");
  control.root.classList.toggle("is-open", open);
  control.menu.hidden = !open;
  control.menu.innerHTML = options.map((entry) => `
    <button
      type="button"
      class="select-option${entry.value === selectedValue ? " is-selected" : ""}"
      data-value="${escapeHtml(entry.value)}"
      role="option"
      aria-selected="${entry.value === selectedValue ? "true" : "false"}"
    ><span class="select-option__label">${escapeHtml(entry.label)}</span>${
      entry.note ? `<span class="select-option__note">${escapeHtml(entry.note)}</span>` : ""
    }</button>`).join("");
}

function applyUiTexts(elements, state) {
  elements.root.lang = state.uiLocale || DEFAULT_UI_LOCALE;
  elements.root.dir = String(state.uiLocale || DEFAULT_UI_LOCALE).toLowerCase().startsWith("ar") ? "rtl" : "ltr";
  document.title = t(state, "document_title", {}, document.title);
  for (const element of elements.i18nText) {
    element.textContent = t(state, element.dataset.i18n, {}, element.textContent);
  }
  for (const element of elements.i18nPlaceholders) {
    element.placeholder = t(state, element.dataset.i18nPlaceholder, {}, element.placeholder);
  }
}

function renderStatuses(elements, state) {
  for (const [slot, element] of [["save", elements.saveStatus], ["theme", elements.themeStatus], ["content", elements.localeStatus], ["meta", elements.metaStatus]]) {
    const message = state.messages[slot];
    element.textContent = message ? t(state, message.key, message.params, element.textContent) : "";
    element.dataset.tone = message?.tone || "info";
  }
}

function ensureMessages(state, metadata) {
  if (!state.messages.save) {
    setStatus(state, "save", "save_status_loaded");
  }
  if (!state.messages.meta) {
    setStatus(state, "meta", "meta_status_checking");
  }
  if (!state.messages.theme) {
    setStatus(
      state,
      "theme",
      state.cachedThemeBundle ? "theme_status_cached" : "theme_status_builtin",
      "info",
      state.cachedThemeBundle
        ? { source: state.cachedThemeState?.sourceLabel || state.cachedThemeState?.sourceId || "remote" }
        : {},
    );
  }
  if (!state.messages.content) {
    const locale = contentLocale(state, metadata);
    const cached = state.cachedStates?.[locale];
    setStatus(
      state,
      "content",
      cached ? "content_locale_status_cached" : "content_locale_status_builtin",
      "info",
      cached ? { locale: localeName(metadata.locales.find((entry) => entry.code === locale), state.uiLocale) } : {},
    );
  }
}

function renderAll(elements, state) {
  const metadata = effectiveMetadata(state);
  const uiSetting = panelLocaleSetting(state);
  const uiLocale = panelUiLocale(uiSetting, metadata);
  const content = contentLocale(state, metadata);
  const localeEntry = metadata.locales.find((entry) => entry.code === content);
  const cachedBundle = state.cachedBundles?.[content];
  const cachedState = state.cachedStates?.[content];
  const activeSource = sourceLabel(state, cachedState, localeEntry);
  const themeBundle = effectiveThemeBundle(state);
  const themePreset = resolveThemePreset(
    themeBundle,
    state.draft.themePreset || state.settings.themePreset || metadata.themeBundle?.defaultPreset || DEFAULT_SETTINGS.themePreset,
  );

  ensureMessages(state, metadata);
  applyUiTexts(elements, state);

  for (const button of elements.tabButtons) {
    button.classList.toggle("is-active", button.dataset.tab === state.activeTab);
  }
  for (const panel of elements.panels) {
    panel.classList.toggle("is-active", panel.dataset.panel === state.activeTab);
  }

  renderSelect(
    elements.panelSelect,
    [{ value: SYSTEM_UI_LOCALE, label: t(state, "panel_locale_system", {}, "Follow system"), note: t(state, "panel_locale_system_note", {}, "") }].concat(
      panelUiLocaleEntries(metadata).map((entry) => ({ value: entry.code, label: localeSelfName(entry) })),
    ),
    uiSetting,
    state.openSelect === "panel",
  );
  renderSelect(
    elements.contentSelect,
    metadata.locales.map((entry) => {
      const cached = state.cachedStates?.[entry.code];
      const builtin = Boolean(state.localMetadata.translationBundle?.builtinVersions?.[entry.code]);
      return {
        value: entry.code,
        label: localeSelfName(entry),
        note: cached
          ? t(state, "locale_option_cached", { version: cached.version || t(state, "locale_source_cached", {}, "Cached") }, "Cached")
          : builtin
            ? t(state, "locale_option_builtin", {}, "Built-in")
            : t(state, "locale_option_remote", {}, "Remote download"),
      };
    }),
    content,
    state.openSelect === "content",
  );
  renderSelect(
    elements.themePresetSelect,
    themeBundle.presets.map((entry) => ({
      value: entry.id,
      label: themePresetName(state, entry),
      note: themePresetDescription(state, entry) || (
        state.cachedThemeBundle?.presets?.some((preset) => preset.id === entry.id)
          ? t(state, "theme_option_cached", {}, "Cached remote preset")
          : t(state, "theme_option_builtin", {}, "Bundled preset")
      ),
    })),
    themePreset.id,
    state.openSelect === "themePreset",
  );
  renderSelect(
    elements.themeFontSelect,
    FONT_OPTIONS.map((entry) => ({
      value: entry.value,
      label: t(state, entry.labelKey, {}, entry.fallback),
      note: t(state, entry.noteKey, {}, entry.noteFallback),
    })),
    state.draft.fontFamily || DEFAULT_SETTINGS.fontFamily,
    state.openSelect === "themeFont",
  );
  renderSelect(
    elements.themeScaleSelect,
    FONT_SCALE_OPTIONS.map((entry) => ({
      value: entry.value,
      label: t(state, entry.labelKey, {}, entry.fallback),
      note: t(state, entry.noteKey, {}, entry.noteFallback),
    })),
    state.draft.fontScale || DEFAULT_SETTINGS.fontScale,
    state.openSelect === "themeScale",
  );

  elements.enabled.checked = state.draft.enabled !== false;
  elements.enabledHint.textContent = elements.enabled.checked
    ? t(state, "enable_hint_on", {}, "On")
    : t(state, "enable_hint_off", {}, "Off");
  elements.hosts.value = state.draft.hosts || DEFAULT_SETTINGS.hosts;
  elements.ports.value = state.draft.ports || DEFAULT_SETTINGS.ports;
  elements.styleOverride.checked = state.draft.styleOverride !== false;
  elements.styleRepair.checked = state.draft.styleRepair !== false;
  elements.selectStyleFix.checked = state.draft.selectStyleFix !== false;
  elements.codeBlockStyleFix.checked = state.draft.codeBlockStyleFix !== false;
  elements.refreshMeta.disabled = state.busy.meta;
  elements.refreshMeta.textContent = state.busy.meta
    ? t(state, "refresh_meta_busy", {}, "Refreshing...")
    : t(state, "refresh_meta_button", {}, "Refresh remote");
  elements.downloadLocale.disabled = state.busy.download;
  elements.downloadLocale.textContent = state.busy.download
    ? t(state, "content_locale_download_busy", {}, "Downloading...")
    : t(state, "content_locale_download", {}, "Download pack");
  elements.downloadTheme.disabled = state.busy.theme;
  elements.downloadTheme.textContent = state.busy.theme
    ? t(state, "theme_download_busy", {}, "Fetching...")
    : t(state, "theme_download_button", {}, "Fetch remote themes");

  elements.authorName.textContent = metadata.author?.name || FALLBACK_METADATA.author.name;
  elements.githubLink.href = metadata.repositories?.github?.repoUrl || FALLBACK_METADATA.repositories.github.repoUrl;
  elements.giteeLink.href = metadata.repositories?.gitee?.repoUrl || FALLBACK_METADATA.repositories.gitee.repoUrl;
  const githubRepo = parseGitHubRepo(elements.githubLink.href);
  elements.githubStars.hidden = !githubRepo;
  if (githubRepo) {
    const starState = state.githubStats?.repoUrl === elements.githubLink.href ? state.githubStats : null;
    elements.githubStars.dataset.state = starState?.loading
      ? "loading"
      : Number.isFinite(starState?.stars)
        ? "ready"
        : "unavailable";
    elements.githubStars.textContent = starState?.loading
      ? "..."
      : Number.isFinite(starState?.stars)
        ? formatCount(state, starState.stars)
        : "--";
    elements.githubStars.title = Number.isFinite(starState?.stars) ? `${formatCount(state, starState.stars)} stars` : "";
  }
  elements.extensionVersion.textContent = state.localMetadata.version || "-";
  elements.latestVersion.textContent = state.remoteMetadata?.version || state.localMetadata.version || "-";
  elements.openclawVersion.textContent = metadata.compatibility?.openclaw || "-";
  elements.currentLocale.textContent = localeName(localeEntry, uiLocale) || content;
  elements.builtinVersion.textContent = metadata.translationBundle?.builtinVersions?.[content] || t(state, "not_builtin", {}, "Not built-in");
  elements.cachedVersion.textContent = cachedBundle?.version || cachedState?.version || t(state, "not_cached", {}, "Not cached");
  elements.activeSource.textContent = activeSource;
  elements.lastSync.textContent = formatDateTime(state, cachedState?.fetchedAt);
  elements.themeCurrentPreset.textContent = themePresetName(state, themePreset) || themePreset.id;
  elements.themeBuiltinVersion.textContent = state.builtinThemeBundle?.version || metadata.themeBundle?.builtinVersion || t(state, "not_builtin", {}, "Not built-in");
  elements.themeCachedVersion.textContent = state.cachedThemeBundle?.version || t(state, "not_cached", {}, "Not cached");
  elements.themeActiveSource.textContent = state.cachedThemeState?.sourceLabel || (state.cachedThemeBundle ? t(state, "locale_source_cached", {}, "Cached") : t(state, "locale_source_builtin", {}, "Built-in"));
  elements.themeLastSync.textContent = formatDateTime(state, state.cachedThemeState?.fetchedAt);

  renderStatuses(elements, state);
}

async function loadLocalMetadata() {
  const manifest = chrome.runtime.getManifest();
  try {
    return normalizeMetadata(await fetchJson(chrome.runtime.getURL("plugin-metadata.json"), 2500), manifest.version);
  } catch {
    return normalizeMetadata(null, manifest.version || FALLBACK_METADATA.version);
  }
}

async function loadBuiltinThemeBundle() {
  try {
    return normalizeThemeBundle(await fetchJson(chrome.runtime.getURL("theme-presets.json"), 2500));
  } catch {
    return normalizeThemeBundle(FALLBACK_THEME_BUNDLE);
  }
}

async function loadUiLocaleBundle(locale, metadata = null) {
  const requestedLocale = panelUiLocale(locale, metadata || FALLBACK_METADATA);
  const strings = {};
  let loadedAny = false;

  for (const candidate of unique(panelUiFallbackLocales(requestedLocale))) {
    const bundleStrings = await fetchUiLocaleStrings(candidate, metadata);
    if (!bundleStrings) {
      continue;
    }
    Object.assign(strings, bundleStrings);
    loadedAny = true;
  }

  return { locale: requestedLocale, strings: loadedAny ? strings : {} };
}

async function loadSettings(defaultLocale) {
  try {
    const settings = await storageGet("sync", {
      ...DEFAULT_SETTINGS,
      locale: defaultLocale || DEFAULT_SETTINGS.locale,
    });
    const fontOptions = FONT_OPTIONS.map((entry) => entry.value);
    return {
      enabled: settings.enabled !== false,
      hosts: settings.hosts || DEFAULT_SETTINGS.hosts,
      ports: settings.ports || DEFAULT_SETTINGS.ports,
      locale: settings.locale || defaultLocale || DEFAULT_SETTINGS.locale,
      panelLocale: settings.panelLocale || SYSTEM_UI_LOCALE,
      themePreset: typeof settings.themePreset === "string" && settings.themePreset.trim()
        ? settings.themePreset.trim()
        : DEFAULT_SETTINGS.themePreset,
      fontFamily: normalizeChoice(settings.fontFamily, fontOptions, DEFAULT_SETTINGS.fontFamily),
      fontScale: normalizeFontScale(settings.fontScale),
      styleOverride: settings.styleOverride !== false,
      styleRepair: settings.styleRepair !== false,
      selectStyleFix: settings.selectStyleFix !== false,
      codeBlockStyleFix: settings.codeBlockStyleFix !== false,
    };
  } catch {
    return { ...DEFAULT_SETTINGS, locale: defaultLocale || DEFAULT_SETTINGS.locale };
  }
}

async function loadCache() {
  try {
    const stored = await storageGet("local", [
      STORAGE_KEYS.bundles,
      STORAGE_KEYS.states,
      STORAGE_KEYS.themeBundle,
      STORAGE_KEYS.themeState,
      STORAGE_KEYS.styleBundle,
      STORAGE_KEYS.styleState,
    ]);
    return {
      bundles: stored?.[STORAGE_KEYS.bundles] && typeof stored[STORAGE_KEYS.bundles] === "object" ? stored[STORAGE_KEYS.bundles] : {},
      states: stored?.[STORAGE_KEYS.states] && typeof stored[STORAGE_KEYS.states] === "object" ? stored[STORAGE_KEYS.states] : {},
      themeBundle: stored?.[STORAGE_KEYS.themeBundle] && typeof stored[STORAGE_KEYS.themeBundle] === "object" ? normalizeThemeBundle(stored[STORAGE_KEYS.themeBundle]) : null,
      themeState: stored?.[STORAGE_KEYS.themeState] && typeof stored[STORAGE_KEYS.themeState] === "object" ? stored[STORAGE_KEYS.themeState] : null,
      styleBundle: stored?.[STORAGE_KEYS.styleBundle] && typeof stored[STORAGE_KEYS.styleBundle] === "object" ? normalizeStyleBundle(stored[STORAGE_KEYS.styleBundle], "cached") : null,
      styleState: stored?.[STORAGE_KEYS.styleState] && typeof stored[STORAGE_KEYS.styleState] === "object" ? stored[STORAGE_KEYS.styleState] : null,
    };
  } catch {
    return { bundles: {}, states: {}, themeBundle: null, themeState: null, styleBundle: null, styleState: null };
  }
}

async function refreshRemoteMetadata(elements, state) {
  const metadata = effectiveMetadata(state);
  const sources = Array.isArray(metadata.updateSources) ? metadata.updateSources : [];
  if (!sources.length) {
    setStatus(state, "meta", "meta_status_no_sources");
    state.remoteMetadata = null;
    state.busy.meta = false;
    renderAll(elements, state);
    return;
  }
  state.busy.meta = true;
  setStatus(state, "meta", "meta_status_loading");
  renderAll(elements, state);
  let lastError = null;
  for (const source of sources) {
    if (!source?.metadataUrl) {
      continue;
    }
    try {
      state.remoteMetadata = normalizeMetadata(await fetchJson(source.metadataUrl), null);
      const mergedMetadata = effectiveMetadata(state);
      const resolvedUiLocale = panelUiLocale(panelLocaleSetting(state), mergedMetadata);
      const uiBundle = await loadUiLocaleBundle(resolvedUiLocale, mergedMetadata);
      state.uiLocale = uiBundle.locale || resolvedUiLocale;
      state.uiStrings = uiBundle.strings || {};
      state.busy.meta = false;
      setStatus(state, "meta", "meta_status_success", "success", { source: source.label || source.id || "remote" });
      renderAll(elements, state);
      void refreshGitHubRepoStats(elements, state);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  state.busy.meta = false;
  setStatus(state, "meta", "meta_status_error", "error", { message: lastError?.message || String(lastError || "") });
  renderAll(elements, state);
}

async function saveRuntimeSettings(elements, state) {
  const nextSettings = {
    ...state.settings,
    enabled: state.draft.enabled !== false,
    hosts: state.draft.hosts || DEFAULT_SETTINGS.hosts,
    ports: state.draft.ports || DEFAULT_SETTINGS.ports,
  };
  try {
    await storageSet("sync", nextSettings);
    state.settings = { ...nextSettings };
    state.draft = { ...state.draft, ...nextSettings };
    setStatus(state, "save", "save_status_success", "success");
  } catch (error) {
    setStatus(state, "save", "save_status_error", "error", { message: error.message });
  }
  renderAll(elements, state);
}

async function saveThemeSettings(elements, state) {
  const fontOptions = FONT_OPTIONS.map((entry) => entry.value);
  const nextSettings = {
    ...state.settings,
    themePreset: typeof state.draft.themePreset === "string" && state.draft.themePreset.trim()
      ? state.draft.themePreset.trim()
      : DEFAULT_SETTINGS.themePreset,
    fontFamily: normalizeChoice(state.draft.fontFamily, fontOptions, DEFAULT_SETTINGS.fontFamily),
    fontScale: normalizeFontScale(state.draft.fontScale),
    styleOverride: state.draft.styleOverride !== false,
    styleRepair: state.draft.styleRepair !== false,
    selectStyleFix: state.draft.selectStyleFix !== false,
    codeBlockStyleFix: state.draft.codeBlockStyleFix !== false,
  };
  try {
    await storageSet("sync", nextSettings);
    state.settings = { ...nextSettings };
    state.draft = { ...state.draft, ...nextSettings };
    setStatus(state, "theme", "theme_status_success", "success", {
      preset: themePresetName(state, resolveThemePreset(effectiveThemeBundle(state), nextSettings.themePreset)) || nextSettings.themePreset,
    });
  } catch (error) {
    setStatus(state, "theme", "theme_status_error", "error", { message: error.message });
  }
  renderAll(elements, state);
}

async function applyPanelLocale(elements, state) {
  const metadata = effectiveMetadata(state);
  const setting = panelLocaleSetting(state);
  const resolved = panelUiLocale(setting, metadata);
  try {
    await storageSet("sync", { ...state.settings, panelLocale: setting });
    const uiBundle = await loadUiLocaleBundle(resolved, metadata);
    state.settings.panelLocale = setting;
    state.draft.panelLocale = setting;
    state.uiLocale = uiBundle.locale || resolved;
    state.uiStrings = uiBundle.strings || {};
  } catch {
    state.selectedPanelLocale = state.settings.panelLocale || SYSTEM_UI_LOCALE;
  }
  state.openSelect = null;
  renderAll(elements, state);
}

async function applyContentLocale(elements, state) {
  const metadata = effectiveMetadata(state);
  const locale = contentLocale(state, metadata);
  try {
    await storageSet("sync", { ...state.settings, locale });
    state.settings.locale = locale;
    state.draft.locale = locale;
    setStatus(state, "content", "content_locale_status_success", "success", {
      locale: localeName(metadata.locales.find((entry) => entry.code === locale), state.uiLocale) || locale,
    });
  } catch (error) {
    setStatus(state, "content", "content_locale_status_error", "error", { message: error.message });
  }
  renderAll(elements, state);
}

async function downloadLocale(elements, state) {
  const metadata = effectiveMetadata(state);
  const locale = contentLocale(state, metadata);
  const sources = Array.isArray(metadata.updateSources) ? metadata.updateSources : [];
  if (!sources.length) {
    setStatus(state, "content", "content_locale_status_no_sources", "error");
    renderAll(elements, state);
    return;
  }
  state.busy.download = true;
  setStatus(state, "content", "content_locale_status_downloading", "info", {
    locale: localeName(metadata.locales.find((entry) => entry.code === locale), state.uiLocale) || locale,
  });
  renderAll(elements, state);
  let lastError = null;
  for (const source of sources) {
    if (!source?.localeUrlTemplate) {
      continue;
    }
    try {
      const bundle = await fetchJson(String(source.localeUrlTemplate).replaceAll("{locale}", encodeURIComponent(locale)));
      const bundles = { ...(state.cachedBundles || {}), [locale]: bundle };
      const states = {
        ...(state.cachedStates || {}),
        [locale]: {
          locale,
          sourceId: source.id || "remote",
          sourceLabel: source.label || source.id || "remote",
          version: bundle.version || "remote",
          fetchedAt: new Date().toISOString(),
        },
      };
      await storageSet("local", { [STORAGE_KEYS.bundles]: bundles, [STORAGE_KEYS.states]: states });
      state.cachedBundles = bundles;
      state.cachedStates = states;
      state.busy.download = false;
      setStatus(state, "content", "content_locale_status_download_success", "success", {
        source: states[locale].sourceLabel,
        locale: localeName(metadata.locales.find((entry) => entry.code === locale), state.uiLocale) || locale,
        version: states[locale].version,
      });
      renderAll(elements, state);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  state.busy.download = false;
  setStatus(state, "content", "content_locale_status_download_error", "error", {
    message: lastError?.message || String(lastError || ""),
  });
  renderAll(elements, state);
}

async function clearLocale(elements, state) {
  const metadata = effectiveMetadata(state);
  const locale = contentLocale(state, metadata);
  const bundles = { ...(state.cachedBundles || {}) };
  const states = { ...(state.cachedStates || {}) };
  delete bundles[locale];
  delete states[locale];
  try {
    await storageSet("local", { [STORAGE_KEYS.bundles]: bundles, [STORAGE_KEYS.states]: states });
    state.cachedBundles = bundles;
    state.cachedStates = states;
    setStatus(state, "content", "content_locale_status_clear_success", "success", {
      locale: localeName(metadata.locales.find((entry) => entry.code === locale), state.uiLocale) || locale,
    });
  } catch (error) {
    setStatus(state, "content", "content_locale_status_clear_error", "error", { message: error.message });
  }
  renderAll(elements, state);
}

async function downloadThemeBundle(elements, state) {
  const metadata = effectiveMetadata(state);
  const candidates = buildThemeBundleUrls(metadata);
  if (!candidates.length) {
    setStatus(state, "theme", "theme_status_no_sources", "error");
    renderAll(elements, state);
    return;
  }
  state.busy.theme = true;
  setStatus(state, "theme", "theme_status_downloading");
  renderAll(elements, state);
  let lastError = null;
  for (const candidate of candidates) {
    try {
      const bundle = normalizeThemeBundle(await fetchJson(candidate.url));
      const bundleState = {
        sourceId: candidate.source?.id || "remote",
        sourceLabel: candidate.source?.label || candidate.source?.id || "remote",
        version: bundle.version || "remote",
        fetchedAt: new Date().toISOString(),
      };
      let styleBundle = null;
      let styleState = null;
      if (candidate.styleUrl) {
        try {
          styleBundle = await hydrateRemoteStyleBundle(candidate.styleUrl);
          styleState = {
            sourceId: bundleState.sourceId,
            sourceLabel: bundleState.sourceLabel,
            version: styleBundle.version || bundleState.version,
            fetchedAt: bundleState.fetchedAt,
          };
        } catch {
          styleBundle = state.cachedStyleBundle || null;
          styleState = state.cachedStyleState || null;
        }
      }
      await storageSet("local", {
        [STORAGE_KEYS.themeBundle]: bundle,
        [STORAGE_KEYS.themeState]: bundleState,
        [STORAGE_KEYS.styleBundle]: styleBundle,
        [STORAGE_KEYS.styleState]: styleState,
      });
      state.cachedThemeBundle = bundle;
      state.cachedThemeState = bundleState;
      state.cachedStyleBundle = styleBundle;
      state.cachedStyleState = styleState;
      state.busy.theme = false;
      setStatus(state, "theme", "theme_status_download_success", "success", {
        source: bundleState.sourceLabel,
        version: bundleState.version,
      });
      renderAll(elements, state);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  state.busy.theme = false;
  setStatus(state, "theme", "theme_status_download_error", "error", {
    message: lastError?.message || String(lastError || ""),
  });
  renderAll(elements, state);
}

async function clearThemeBundle(elements, state) {
  try {
    await storageSet("local", {
      [STORAGE_KEYS.themeBundle]: null,
      [STORAGE_KEYS.themeState]: null,
      [STORAGE_KEYS.styleBundle]: null,
      [STORAGE_KEYS.styleState]: null,
    });
    state.cachedThemeBundle = null;
    state.cachedThemeState = null;
    state.cachedStyleBundle = null;
    state.cachedStyleState = null;
    setStatus(state, "theme", "theme_status_clear_success", "success");
  } catch (error) {
    setStatus(state, "theme", "theme_status_clear_error", "error", { message: error.message });
  }
  renderAll(elements, state);
}

function bindSelects(elements, state) {
  const selects = {
    panel: {
      control: elements.panelSelect,
      onPick: async (value) => {
        state.selectedPanelLocale = value;
        await applyPanelLocale(elements, state);
      },
    },
    content: {
      control: elements.contentSelect,
      onPick: async (value) => {
        state.selectedContentLocale = value;
        state.openSelect = null;
        setStatus(state, "content", "content_locale_status_selected");
        renderAll(elements, state);
      },
    },
    themePreset: {
      control: elements.themePresetSelect,
      onPick: async (value) => {
        state.draft.themePreset = value;
        state.openSelect = null;
        setStatus(state, "theme", "theme_status_selected", "info", {
          preset: themePresetName(state, resolveThemePreset(effectiveThemeBundle(state), value)) || value,
        });
        renderAll(elements, state);
      },
    },
    themeFont: {
      control: elements.themeFontSelect,
      onPick: async (value) => {
        state.draft.fontFamily = value;
        state.openSelect = null;
        setStatus(state, "theme", "theme_status_selected");
        renderAll(elements, state);
      },
    },
    themeScale: {
      control: elements.themeScaleSelect,
      onPick: async (value) => {
        state.draft.fontScale = normalizeFontScale(value);
        state.openSelect = null;
        setStatus(state, "theme", "theme_status_selected");
        renderAll(elements, state);
      },
    },
  };

  for (const [id, entry] of Object.entries(selects)) {
    entry.control.trigger.addEventListener("click", () => {
      state.openSelect = state.openSelect === id ? null : id;
      renderAll(elements, state);
    });
    entry.control.menu.addEventListener("click", (event) => {
      const option = event.target.closest(".select-option");
      if (option) {
        entry.onPick(option.dataset.value);
      }
    });
  }

  document.addEventListener("click", (event) => {
    const controls = [
      elements.panelSelect.root,
      elements.contentSelect.root,
      elements.themePresetSelect.root,
      elements.themeFontSelect.root,
      elements.themeScaleSelect.root,
    ];
    if (!controls.some((root) => root.contains(event.target)) && state.openSelect) {
      state.openSelect = null;
      renderAll(elements, state);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.openSelect) {
      state.openSelect = null;
      renderAll(elements, state);
    }
  });
}

async function initializePopup() {
  const elements = getElements();
  const localMetadata = await loadLocalMetadata();
  const builtinThemeBundle = await loadBuiltinThemeBundle();
  const settings = await loadSettings(localMetadata.translationBundle?.defaultLocale || DEFAULT_SETTINGS.locale);
  const resolvedUiLocale = panelUiLocale(settings.panelLocale || SYSTEM_UI_LOCALE, localMetadata);
  const uiBundle = await loadUiLocaleBundle(resolvedUiLocale, localMetadata);
  const cache = await loadCache();
  const state = {
    localMetadata,
    remoteMetadata: null,
    builtinThemeBundle,
    cachedThemeBundle: cache.themeBundle,
    cachedThemeState: cache.themeState,
    cachedStyleBundle: cache.styleBundle,
    cachedStyleState: cache.styleState,
    settings,
    draft: { ...settings },
    uiLocale: uiBundle.locale || resolvedUiLocale,
    uiStrings: uiBundle.strings || {},
    selectedPanelLocale: settings.panelLocale || SYSTEM_UI_LOCALE,
    selectedContentLocale: settings.locale || localMetadata.translationBundle?.defaultLocale || DEFAULT_SETTINGS.locale,
    cachedBundles: cache.bundles,
    cachedStates: cache.states,
    activeTab: "settings",
    openSelect: null,
    busy: { meta: false, download: false, theme: false },
    githubStats: { repoUrl: "", stars: null, loading: false, error: null },
    messages: {},
  };

  setStatus(state, "save", "save_status_loaded");
  setStatus(state, "meta", "meta_status_checking");
  bindSelects(elements, state);
  renderAll(elements, state);
  void refreshGitHubRepoStats(elements, state);

  for (const button of elements.tabButtons) {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab || "settings";
      renderAll(elements, state);
    });
  }

  elements.enabled.addEventListener("change", () => {
    state.draft.enabled = elements.enabled.checked;
    elements.enabledHint.textContent = elements.enabled.checked
      ? t(state, "enable_hint_on", {}, "On")
      : t(state, "enable_hint_off", {}, "Off");
  });
  elements.hosts.addEventListener("input", () => {
    state.draft.hosts = elements.hosts.value.trim() || DEFAULT_SETTINGS.hosts;
  });
  elements.ports.addEventListener("input", () => {
    state.draft.ports = elements.ports.value.trim() || DEFAULT_SETTINGS.ports;
  });
  elements.styleOverride.addEventListener("change", () => {
    state.draft.styleOverride = elements.styleOverride.checked;
    setStatus(state, "theme", "theme_status_selected");
    renderAll(elements, state);
  });
  elements.styleRepair.addEventListener("change", () => {
    state.draft.styleRepair = elements.styleRepair.checked;
    setStatus(state, "theme", "theme_status_selected");
    renderAll(elements, state);
  });
  elements.selectStyleFix.addEventListener("change", () => {
    state.draft.selectStyleFix = elements.selectStyleFix.checked;
    setStatus(state, "theme", "theme_status_selected");
    renderAll(elements, state);
  });
  elements.codeBlockStyleFix.addEventListener("change", () => {
    state.draft.codeBlockStyleFix = elements.codeBlockStyleFix.checked;
    setStatus(state, "theme", "theme_status_selected");
    renderAll(elements, state);
  });
  elements.save.addEventListener("click", () => saveRuntimeSettings(elements, state));
  elements.saveTheme.addEventListener("click", () => saveThemeSettings(elements, state));
  elements.applyLocale.addEventListener("click", () => applyContentLocale(elements, state));
  elements.downloadLocale.addEventListener("click", () => downloadLocale(elements, state));
  elements.clearLocale.addEventListener("click", () => clearLocale(elements, state));
  elements.downloadTheme.addEventListener("click", () => downloadThemeBundle(elements, state));
  elements.clearTheme.addEventListener("click", () => clearThemeBundle(elements, state));
  elements.refreshMeta.addEventListener("click", () => refreshRemoteMetadata(elements, state));

  await refreshRemoteMetadata(elements, state);
}

document.addEventListener("DOMContentLoaded", initializePopup);
