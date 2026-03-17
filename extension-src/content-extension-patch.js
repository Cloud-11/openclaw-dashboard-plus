(() => {
  "use strict";

  const SELECT_FIX_ATTR = "data-ocdp-selectfix-bound";
  const SELECT_FIX_WRAPPER_ATTR = "data-ocdp-selectfix-wrapper";
  const SELECT_FIX_VALUE_ATTR = "data-ocdp-selectfix-value";
  const SELECT_FIX_LABEL_CLASS = "ocdp-selectfix__label";
  const SELECT_FIX_OPEN_CLASS = "is-open";
  const SELECT_FIX_HIDDEN_STYLE =
    "position:absolute !important; inset:0 !important; width:100% !important; height:100% !important; opacity:0 !important; pointer-events:none !important; margin:0 !important;";

  let selectFixEnabled = true;
  let activeState = null;
  let observerStarted = false;
  let scheduledSweep = 0;
  const stateBySelect = new WeakMap();

  function storageGetSync(defaults) {
    return new Promise((resolve) => {
      const storageSync = window.chrome?.storage?.sync;
      if (!storageSync || typeof storageSync.get !== "function") {
        resolve(defaults);
        return;
      }
      try {
        storageSync.get(defaults, (result) => {
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

  function closeActiveSelect() {
    if (!activeState) {
      return;
    }
    activeState.wrapper.classList.remove(SELECT_FIX_OPEN_CLASS);
    activeState.menu.hidden = true;
    activeState = null;
  }

  function optionLabel(option) {
    if (!(option instanceof HTMLOptionElement)) {
      return "";
    }
    const text = typeof option.label === "string" && option.label.trim()
      ? option.label.trim()
      : typeof option.text === "string" && option.text.trim()
        ? option.text.trim()
        : option.textContent.trim();
    return text;
  }

  function selectButtonLabel(select) {
    const selectedOption = select.selectedOptions?.[0] || select.options?.[select.selectedIndex] || null;
    if (selectedOption) {
      const selectedLabel = optionLabel(selectedOption);
      if (selectedLabel) {
        return selectedLabel;
      }
    }
    const fallbackOption = Array.from(select.options || []).find((option) => !option.disabled);
    return fallbackOption ? optionLabel(fallbackOption) : "";
  }

  function dispatchSelectChange(select) {
    select.dispatchEvent(new Event("input", { bubbles: true }));
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function positionMenu(state) {
    const { wrapper, menu } = state;
    const rect = wrapper.getBoundingClientRect();
    const viewportPadding = 12;
    const gap = 6;
    const minWidth = Math.max(160, Math.ceil(rect.width));
    const left = Math.min(
      Math.max(viewportPadding, rect.left),
      Math.max(viewportPadding, window.innerWidth - minWidth - viewportPadding),
    );
    const top = Math.max(viewportPadding, Math.min(rect.bottom + gap, window.innerHeight - viewportPadding));
    const availableHeight = Math.max(120, Math.floor(window.innerHeight - top - viewportPadding));

    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
    menu.style.width = `${minWidth}px`;
    menu.style.maxHeight = `${Math.min(360, availableHeight)}px`;
  }

  function buildMenu(state) {
    const { select, menu, button, label } = state;
    menu.innerHTML = "";
    const fragment = document.createDocumentFragment();

    for (const child of select.children) {
      if (child instanceof HTMLOptGroupElement) {
        const groupLabel = document.createElement("div");
        groupLabel.className = "ocdp-selectfix__group";
        groupLabel.textContent = child.label || "";
        fragment.append(groupLabel);

        for (const option of child.children) {
          if (!(option instanceof HTMLOptionElement)) {
            continue;
          }
          fragment.append(createOptionButton(state, option));
        }
        continue;
      }

      if (child instanceof HTMLOptionElement) {
        fragment.append(createOptionButton(state, child));
      }
    }

    menu.append(fragment);
    label.textContent = selectButtonLabel(select);
    button.title = label.textContent;
    button.disabled = select.disabled;
    if (activeState === state) {
      positionMenu(state);
    }
  }

  function createOptionButton(state, option) {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "ocdp-selectfix__option";
    item.setAttribute(SELECT_FIX_VALUE_ATTR, option.value);
    item.textContent = optionLabel(option);
    item.disabled = option.disabled;
    item.classList.toggle("is-selected", option.selected);
    item.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    item.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (option.disabled) {
        return;
      }
      state.select.value = option.value;
      buildMenu(state);
      closeActiveSelect();
      dispatchSelectChange(state.select);
    });
    return item;
  }

  function teardownSelectFix(select) {
    const state = stateBySelect.get(select);
    if (!state) {
      return;
    }
    if (activeState === state) {
      closeActiveSelect();
    }
    state.observer.disconnect();
    if (state.wrapper.parentNode) {
      state.wrapper.parentNode.insertBefore(select, state.wrapper);
      state.wrapper.remove();
    }
    if (state.originalStyle === null) {
      select.removeAttribute("style");
    } else {
      select.setAttribute("style", state.originalStyle);
    }
    select.removeAttribute(SELECT_FIX_ATTR);
    if (state.originalTabIndex === null) {
      select.removeAttribute("tabindex");
    } else {
      select.tabIndex = state.originalTabIndex;
    }
    stateBySelect.delete(select);
  }

  function enhanceSelect(select) {
    if (!(select instanceof HTMLSelectElement) || stateBySelect.has(select)) {
      return;
    }
    if (select.multiple || select.size > 1 || select.closest(`[${SELECT_FIX_WRAPPER_ATTR}="true"]`)) {
      return;
    }

    const wrapper = document.createElement("span");
    wrapper.className = "ocdp-selectfix";
    wrapper.setAttribute(SELECT_FIX_WRAPPER_ATTR, "true");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "ocdp-selectfix__trigger";

    const label = document.createElement("span");
    label.className = SELECT_FIX_LABEL_CLASS;
    button.append(label);

    const menu = document.createElement("div");
    menu.className = "ocdp-selectfix__menu";
    menu.hidden = true;

    const display = getComputedStyle(select).display;
    wrapper.style.display = display === "block" ? "block" : "inline-block";
    wrapper.style.width = display === "block" ? "100%" : `${Math.max(140, Math.ceil(select.getBoundingClientRect().width || 0))}px`;

    const parent = select.parentNode;
    if (!parent) {
      return;
    }
    parent.insertBefore(wrapper, select);
    wrapper.append(select, button, menu);

    const state = {
      select,
      wrapper,
      button,
      label,
      menu,
      originalStyle: select.getAttribute("style"),
      originalTabIndex: select.hasAttribute("tabindex") ? select.tabIndex : null,
      observer: new MutationObserver(() => buildMenu(state)),
    };

    select.setAttribute(SELECT_FIX_ATTR, "true");
    select.style.cssText = `${select.getAttribute("style") || ""};${SELECT_FIX_HIDDEN_STYLE}`;
    select.tabIndex = -1;

    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button.disabled) {
        return;
      }
      const isOpen = wrapper.classList.contains(SELECT_FIX_OPEN_CLASS);
      closeActiveSelect();
      if (!isOpen) {
        wrapper.classList.add(SELECT_FIX_OPEN_CLASS);
        menu.hidden = false;
        positionMenu(state);
        activeState = state;
      }
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeActiveSelect();
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
      }
    });

    select.addEventListener("input", () => buildMenu(state));
    select.addEventListener("change", () => buildMenu(state));
    state.observer.observe(select, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled", "label", "selected"],
    });

    buildMenu(state);
    stateBySelect.set(select, state);
  }

  function enhanceAllSelects(root = document) {
    if (!selectFixEnabled || !root.querySelectorAll) {
      return;
    }
    for (const select of root.querySelectorAll("select")) {
      enhanceSelect(select);
    }
  }

  function scheduleEnhanceSweep(delayMs = 60) {
    window.clearTimeout(scheduledSweep);
    scheduledSweep = window.setTimeout(() => {
      if (!selectFixEnabled) {
        return;
      }
      enhanceAllSelects();
    }, delayMs);
  }

  function teardownAllSelects() {
    for (const select of document.querySelectorAll(`select[${SELECT_FIX_ATTR}="true"]`)) {
      teardownSelectFix(select);
    }
    closeActiveSelect();
  }

  function updateSelectFixEnabled(nextValue) {
    selectFixEnabled = nextValue !== false;
    if (selectFixEnabled) {
      enhanceAllSelects();
    } else {
      teardownAllSelects();
    }
  }

  function startSelectFixObserver() {
    if (observerStarted || typeof MutationObserver !== "function") {
      return;
    }
    observerStarted = true;
    const observer = new MutationObserver((mutations) => {
      if (!selectFixEnabled) {
        return;
      }
      scheduleEnhanceSweep();
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof Element)) {
            continue;
          }
          if (node instanceof HTMLSelectElement) {
            enhanceSelect(node);
            continue;
          }
          enhanceAllSelects(node);
        }
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  document.addEventListener("click", (event) => {
    if (!activeState) {
      return;
    }
    if (activeState.wrapper.contains(event.target)) {
      return;
    }
    closeActiveSelect();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeActiveSelect();
    }
  });

  window.addEventListener("resize", () => {
    if (activeState) {
      positionMenu(activeState);
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      if (activeState) {
        positionMenu(activeState);
      }
    },
    true,
  );

  const storage = window.chrome?.storage;
  if (storage?.onChanged && typeof storage.onChanged.addListener === "function") {
    storage.onChanged.addListener((changes, areaName) => {
      if (areaName === "sync" && changes.selectStyleFix) {
        updateSelectFixEnabled(changes.selectStyleFix.newValue);
      }
    });
  }

  storageGetSync({ selectStyleFix: true }).then((settings) => {
    updateSelectFixEnabled(settings.selectStyleFix);
    startSelectFixObserver();
    scheduleEnhanceSweep(0);
    scheduleEnhanceSweep(400);
    scheduleEnhanceSweep(1600);
    scheduleEnhanceSweep(4200);
  });
})();
