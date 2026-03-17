(() => {
  "use strict";

  const STYLE_ELEMENT_ID = "ocdp-style-bundle-style";
  const STYLE_STATE_GLOBAL = "__OPENCLAW_ZH_CN_STYLE_BUNDLE__";
  const STYLE_BUNDLE_STORAGE_KEYS = Object.freeze({
    bundle: "remoteThemeStyleBundle",
    state: "remoteThemeStyleState",
  });
  const STYLE_RUNTIME_KEYS = new Set([
    "enabled",
    "hosts",
    "ports",
    "themePreset",
    "fontFamily",
    "fontScale",
    "styleOverride",
    "styleRepair",
    "selectStyleFix",
    "codeBlockStyleFix",
  ]);
  const STYLE_LOCAL_KEYS = new Set([
    STYLE_BUNDLE_STORAGE_KEYS.bundle,
    STYLE_BUNDLE_STORAGE_KEYS.state,
    "remoteThemePresetBundle",
    "remoteThemePresetState",
  ]);
  const ALLOWED_MODULE_KINDS = new Set(["css", "html", "json"]);
  const BUILTIN_STYLE_BUNDLE_DATA = "__OCDP_BUILTIN_STYLE_BUNDLE__";

  const fallbackBundle = Object.freeze({
    schemaVersion: 1,
    version: "builtin",
    modules: [],
  });

  function getBundledStyleBundle() {
    if (BUILTIN_STYLE_BUNDLE_DATA && typeof BUILTIN_STYLE_BUNDLE_DATA === "object") {
      return BUILTIN_STYLE_BUNDLE_DATA;
    }
    return fallbackBundle;
  }

  let builtinStyleBundle = fallbackBundle;
  let cachedStyleBundle = null;
  let activeStyleBundle = fallbackBundle;
  let bundleReadyPromise = null;
  let scheduledApply = 0;
  const runtimeAssetCache = new Map();

  function getRuntimeApi() {
    return window.__OPENCLAW_ZH_CN__ || null;
  }

  function storageGet(area, defaults) {
    return new Promise((resolve) => {
      const storageArea = window.chrome?.storage?.[area];
      if (!storageArea || typeof storageArea.get !== "function") {
        resolve(defaults);
        return;
      }
      try {
        storageArea.get(defaults, (result) => {
          if (window.chrome?.runtime?.lastError) {
            resolve(defaults);
            return;
          }
          resolve(result || defaults);
        });
      } catch {
        resolve(defaults);
      }
    });
  }

  async function fetchRuntimeAsset(path, kind) {
    const runtimeUrl = window.chrome?.runtime?.getURL?.(path);
    if (!runtimeUrl) {
      return null;
    }
    const cacheKey = `${kind}:${runtimeUrl}`;
    if (runtimeAssetCache.has(cacheKey)) {
      return runtimeAssetCache.get(cacheKey);
    }
    const nextValuePromise = fetch(runtimeUrl, { cache: "no-store" }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      if (kind === "json") {
        return response.json();
      }
      return response.text();
    });
    runtimeAssetCache.set(cacheKey, nextValuePromise);
    try {
      return await nextValuePromise;
    } catch (error) {
      runtimeAssetCache.delete(cacheKey);
      throw error;
    }
  }

  function normalizeModule(module) {
    if (!module || typeof module !== "object") {
      return null;
    }
    const id = typeof module.id === "string" && module.id.trim() ? module.id.trim() : "";
    if (!id) {
      return null;
    }
    const kind = typeof module.kind === "string" && ALLOWED_MODULE_KINDS.has(module.kind.trim())
      ? module.kind.trim()
      : "css";
    const assetPath = typeof module.assetPath === "string" && module.assetPath.trim()
      ? module.assetPath.trim()
      : "";
    const settingKey = typeof module.settingKey === "string" && module.settingKey.trim()
      ? module.settingKey.trim()
      : "";
    const presetIds = Array.isArray(module.presetIds)
      ? module.presetIds.filter((entry) => typeof entry === "string" && entry.trim()).map((entry) => entry.trim())
      : [];
    const excludePresetIds = Array.isArray(module.excludePresetIds)
      ? module.excludePresetIds.filter((entry) => typeof entry === "string" && entry.trim()).map((entry) => entry.trim())
      : [];
    let content = null;
    if (kind === "json") {
      content = module.content && typeof module.content === "object" ? module.content : null;
    } else if (typeof module.content === "string") {
      content = module.content;
    }
    return {
      id,
      kind,
      assetPath,
      settingKey,
      presetIds,
      excludePresetIds,
      content,
    };
  }

  function normalizeStyleBundle(bundle, fallbackVersion = fallbackBundle.version) {
    const modules = Array.isArray(bundle?.modules)
      ? bundle.modules.map((module) => normalizeModule(module)).filter(Boolean)
      : [];
    return {
      schemaVersion: 1,
      version: typeof bundle?.version === "string" && bundle.version.trim() ? bundle.version.trim() : fallbackVersion,
      modules,
    };
  }

  function mergeStyleBundles(baseBundle, nextBundle) {
    const merged = new Map();
    for (const module of normalizeStyleBundle(baseBundle).modules) {
      merged.set(module.id, module);
    }
    for (const module of normalizeStyleBundle(nextBundle).modules) {
      const previous = merged.get(module.id);
      merged.set(
        module.id,
        previous
          ? {
              ...previous,
              ...module,
              presetIds: module.presetIds.length ? module.presetIds : previous.presetIds,
              excludePresetIds: module.excludePresetIds.length
                ? module.excludePresetIds
                : previous.excludePresetIds,
              content: module.content ?? previous.content,
              assetPath: module.assetPath || previous.assetPath,
            }
          : module,
      );
    }
    return {
      schemaVersion: 1,
      version: normalizeStyleBundle(nextBundle).version || normalizeStyleBundle(baseBundle).version,
      modules: Array.from(merged.values()),
    };
  }

  function getRuntimeSettings() {
    const api = getRuntimeApi();
    const settings = api?.getRuntimeSettings?.();
    if (settings && typeof settings === "object") {
      return settings;
    }
    return {
      enabled: true,
      themePreset: "openclaw-classic",
      styleOverride: true,
      styleRepair: true,
      selectStyleFix: true,
      codeBlockStyleFix: true,
    };
  }

  function getActivePreset() {
    const api = getRuntimeApi();
    const preset = api?.getActiveThemePreset?.();
    if (preset && typeof preset === "object" && typeof preset.id === "string" && preset.id.trim()) {
      return preset;
    }
    const settings = getRuntimeSettings();
    return { id: settings.themePreset || "openclaw-classic" };
  }

  function isOpenClawPage() {
    const api = getRuntimeApi();
    if (typeof api?.isOpenClawPage === "function") {
      try {
        return api.isOpenClawPage(getRuntimeSettings());
      } catch {
        // fall through
      }
    }
    const title = document.title || "";
    if (/OpenClaw/i.test(title)) {
      return true;
    }
    const text = document.body?.textContent || "";
    return /OpenClaw|Cron Jobs|Gateway Token|Main Session/i.test(text);
  }

  async function loadBuiltinBundle() {
    builtinStyleBundle = normalizeStyleBundle(getBundledStyleBundle(), builtinStyleBundle.version);
  }

  async function loadCachedBundle() {
    const stored = await storageGet("local", {
      [STYLE_BUNDLE_STORAGE_KEYS.bundle]: null,
    });
    const bundle = stored?.[STYLE_BUNDLE_STORAGE_KEYS.bundle];
    cachedStyleBundle = bundle && typeof bundle === "object"
      ? normalizeStyleBundle(bundle, builtinStyleBundle.version)
      : null;
  }

  async function refreshStyleBundleState() {
    await loadBuiltinBundle();
    await loadCachedBundle();
    activeStyleBundle = cachedStyleBundle
      ? mergeStyleBundles(builtinStyleBundle, cachedStyleBundle)
      : builtinStyleBundle;
    return activeStyleBundle;
  }

  function ensureBundleState() {
    if (!bundleReadyPromise) {
      bundleReadyPromise = refreshStyleBundleState().catch((error) => {
        bundleReadyPromise = null;
        throw error;
      });
    }
    return bundleReadyPromise;
  }

  function getStyleElement() {
    let style = document.getElementById(STYLE_ELEMENT_ID);
    if (style instanceof HTMLStyleElement) {
      return style;
    }
    style = document.createElement("style");
    style.id = STYLE_ELEMENT_ID;
    (document.head || document.documentElement).append(style);
    return style;
  }

  function clearStyleElement() {
    document.getElementById(STYLE_ELEMENT_ID)?.remove();
  }

  async function resolveModuleContent(module) {
    if (module.content != null) {
      return module.content;
    }
    if (!module.assetPath) {
      return module.kind === "json" ? null : "";
    }
    try {
      return await fetchRuntimeAsset(module.assetPath, module.kind);
    } catch {
      return module.kind === "json" ? null : "";
    }
  }

  function moduleMatches(module, settings, preset) {
    if (module.settingKey && settings[module.settingKey] === false) {
      return false;
    }
    if (module.presetIds.length && !module.presetIds.includes(preset?.id || "")) {
      return false;
    }
    if (module.excludePresetIds.length && module.excludePresetIds.includes(preset?.id || "")) {
      return false;
    }
    return true;
  }

  async function buildStylePayload(settings, preset) {
    const bundle = activeStyleBundle || builtinStyleBundle;
    const cssParts = [];
    const assets = { html: {}, json: {} };

    for (const module of bundle.modules) {
      if (!moduleMatches(module, settings, preset)) {
        continue;
      }
      const content = await resolveModuleContent(module);
      if (module.kind === "css") {
        if (typeof content === "string" && content.trim()) {
          cssParts.push(`/* ${module.id} */\n${content.trim()}`);
        }
        continue;
      }
      if (module.kind === "html" && typeof content === "string") {
        assets.html[module.id] = content;
        continue;
      }
      if (module.kind === "json" && content && typeof content === "object") {
        assets.json[module.id] = content;
      }
    }

    return {
      cssText: cssParts.join("\n\n"),
      assets,
      version: bundle.version,
      moduleIds: bundle.modules.map((module) => module.id),
    };
  }

  async function applyStyleBundle() {
    await ensureBundleState();
    if (!isOpenClawPage()) {
      clearStyleElement();
      return;
    }
    const payload = await buildStylePayload(getRuntimeSettings(), getActivePreset());
    window[STYLE_STATE_GLOBAL] = payload;
    if (!payload.cssText.trim()) {
      clearStyleElement();
      return;
    }
    const styleElement = getStyleElement();
    if (styleElement.textContent !== payload.cssText) {
      styleElement.textContent = payload.cssText;
    }
  }

  function scheduleApply(delayMs = 0) {
    window.clearTimeout(scheduledApply);
    scheduledApply = window.setTimeout(() => {
      applyStyleBundle().catch(() => {
        // keep the extension resilient when a remote bundle is malformed
      });
    }, delayMs);
  }

  function watchStorageChanges() {
    const storage = window.chrome?.storage;
    if (!storage?.onChanged || typeof storage.onChanged.addListener !== "function") {
      return;
    }
    storage.onChanged.addListener((changes, areaName) => {
      if (areaName === "sync" && Object.keys(changes).some((key) => STYLE_RUNTIME_KEYS.has(key))) {
        scheduleApply(0);
        return;
      }
      if (areaName === "local" && Object.keys(changes).some((key) => STYLE_LOCAL_KEYS.has(key))) {
        bundleReadyPromise = refreshStyleBundleState().catch((error) => {
          bundleReadyPromise = null;
          throw error;
        });
        scheduleApply(40);
      }
    });
  }

  watchStorageChanges();
  bundleReadyPromise = refreshStyleBundleState().catch((error) => {
    bundleReadyPromise = null;
    throw error;
  });
  scheduleApply(0);
  scheduleApply(400);
  scheduleApply(1600);
  scheduleApply(4200);
  document.addEventListener("DOMContentLoaded", () => scheduleApply(0), { once: true });
  window.addEventListener("load", () => scheduleApply(0), { once: true });
})();
