const DEFAULT_SETTINGS = {
  enabled: true,
  hosts: "127.0.0.1,localhost",
  ports: "18789",
};

const OPENCLAW_COMPAT_VERSION = "2026.3.9+";

function getElements() {
  return {
    enabled: document.getElementById("enabled"),
    hosts: document.getElementById("hosts"),
    ports: document.getElementById("ports"),
    save: document.getElementById("save"),
    status: document.getElementById("status"),
    extensionVersion: document.getElementById("extension-version"),
    openclawVersion: document.getElementById("openclaw-version"),
  };
}

function setStatus(elements, message, isError = false) {
  elements.status.textContent = message;
  elements.status.style.color = isError ? "#b23615" : "#2f6f2f";
}

function renderVersion(elements) {
  const manifest = chrome.runtime.getManifest();
  elements.extensionVersion.textContent = manifest.version || "-";
  elements.openclawVersion.textContent = OPENCLAW_COMPAT_VERSION;
}

function loadSettings(elements) {
  chrome.storage.sync.get(DEFAULT_SETTINGS, (savedSettings) => {
    if (chrome.runtime.lastError) {
      setStatus(elements, `读取配置失败：${chrome.runtime.lastError.message}`, true);
      return;
    }
    elements.enabled.checked = savedSettings.enabled !== false;
    elements.hosts.value = savedSettings.hosts || DEFAULT_SETTINGS.hosts;
    elements.ports.value = savedSettings.ports || DEFAULT_SETTINGS.ports;
  });
}

function saveSettings(elements) {
  const nextSettings = {
    enabled: elements.enabled.checked,
    hosts: elements.hosts.value.trim() || DEFAULT_SETTINGS.hosts,
    ports: elements.ports.value.trim() || DEFAULT_SETTINGS.ports,
  };
  chrome.storage.sync.set(nextSettings, () => {
    if (chrome.runtime.lastError) {
      setStatus(elements, `保存失败：${chrome.runtime.lastError.message}`, true);
      return;
    }
    setStatus(elements, "已保存，刷新目标页面后生效。");
  });
}

function initializePopup() {
  const elements = getElements();
  renderVersion(elements);
  loadSettings(elements);
  elements.save.addEventListener("click", () => {
    saveSettings(elements);
  });
}

document.addEventListener("DOMContentLoaded", initializePopup);
