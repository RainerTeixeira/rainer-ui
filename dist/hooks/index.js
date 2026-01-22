'use strict';

var React2 = require('react');
var nextThemes = require('next-themes');
var utils = require('@rainersoft/utils');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);

function useTheme() {
  const { theme, resolvedTheme, setTheme } = nextThemes.useTheme();
  const toggle = React2__namespace.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React2__namespace.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React2__namespace.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React2__namespace.useCallback(() => {
    setTheme("system");
  }, [setTheme]);
  return {
    theme,
    resolvedTheme,
    setTheme,
    toggle,
    setLight,
    setDark,
    setSystem,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    isSystem: theme === "system"
  };
}
function useCarouselKeyboard({
  totalItems,
  currentIndex = 0,
  onIndexChange,
  autoPlay = false,
  autoPlayInterval = 3e3,
  options = {}
}) {
  const {
    loop = true,
    pauseOnHover = true,
    keyMap = ["ArrowLeft", "ArrowRight"]
  } = options;
  const [isPaused, setIsPaused] = React2__namespace.default.useState(false);
  const intervalRef = React2__namespace.default.useRef(null);
  const containerRef = React2__namespace.default.useRef(null);
  const next = React2__namespace.default.useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= totalItems) {
      if (loop) {
        onIndexChange?.(0);
      }
    } else {
      onIndexChange?.(nextIndex);
    }
  }, [currentIndex, totalItems, loop, onIndexChange]);
  const prev = React2__namespace.default.useCallback(() => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      if (loop) {
        onIndexChange?.(totalItems - 1);
      }
    } else {
      onIndexChange?.(prevIndex);
    }
  }, [currentIndex, totalItems, loop, onIndexChange]);
  const goTo = React2__namespace.default.useCallback((index) => {
    if (index >= 0 && index < totalItems) {
      onIndexChange?.(index);
    }
  }, [totalItems, onIndexChange]);
  React2__namespace.default.useEffect(() => {
    if (autoPlay && !isPaused) {
      intervalRef.current = setInterval(next, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isPaused, next, autoPlayInterval]);
  React2__namespace.default.useEffect(() => {
    const handleKeyDown = (event) => {
      if (!keyMap.includes(event.key)) return;
      event.preventDefault();
      if (event.key === keyMap[0]) {
        prev();
      } else if (event.key === keyMap[1]) {
        next();
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
    } else {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (container) {
        container.removeEventListener("keydown", handleKeyDown);
      } else {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [keyMap, next, prev]);
  React2__namespace.default.useEffect(() => {
    if (!pauseOnHover || !autoPlay) return;
    const container = containerRef.current;
    if (!container) return;
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover, autoPlay]);
  const pause = React2__namespace.default.useCallback(() => {
    setIsPaused(true);
  }, []);
  const resume = React2__namespace.default.useCallback(() => {
    setIsPaused(false);
  }, []);
  const stop = React2__namespace.default.useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return {
    // Refs
    containerRef,
    // Funções de navegação
    next,
    prev,
    goTo,
    // Controle de auto-play
    pause,
    resume,
    stop,
    // Estado
    isPaused,
    canGoNext: loop || currentIndex < totalItems - 1,
    canGoPrev: loop || currentIndex > 0,
    // Utilitários
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalItems - 1,
    progress: totalItems > 0 ? (currentIndex + 1) / totalItems * 100 : 0
  };
}
function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = React2.useState(null);
  const [isInstallable, setIsInstallable] = React2.useState(false);
  const [isInstalled, setIsInstalled] = React2.useState(false);
  const [isStandalone, setIsStandalone] = React2.useState(false);
  const [updateAvailable, setUpdateAvailable] = React2.useState(false);
  const [swRegistration, setSwRegistration] = React2.useState(null);
  React2.useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      setSwRegistration(registration);
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1e3);
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        }
      });
    }).catch(() => {
    });
  }, []);
  React2.useEffect(() => {
    if (typeof window === "undefined") return;
    const nav = window.navigator;
    const isStandaloneiOS = nav.standalone === true;
    const isStandaloneAndroid = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isStandaloneBrowser = window.matchMedia(
      "(display-mode: minimal-ui)"
    ).matches;
    const standalone = isStandaloneiOS || isStandaloneAndroid || isStandaloneBrowser;
    setIsStandalone(standalone);
    setIsInstalled(standalone);
  }, []);
  React2.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);
  const promptInstall = React2.useCallback(async () => {
    if (!deferredPrompt) {
      return;
    }
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
  }, [deferredPrompt]);
  const updateServiceWorker = React2.useCallback(() => {
    if (!swRegistration || !swRegistration.waiting) {
      return;
    }
    swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, [swRegistration]);
  return {
    isInstallable,
    isInstalled,
    isStandalone,
    updateAvailable,
    promptInstall,
    updateServiceWorker
  };
}
function useTableOfContents({
  containerRef,
  headings = ["h2", "h3"],
  options = {}
}) {
  const {
    offset = 100,
    smoothScroll = true,
    activeOnScroll = true,
    nested = true
  } = options;
  const [items, setItems] = React2__namespace.default.useState([]);
  const [activeId, setActiveId] = React2__namespace.default.useState(null);
  const generateTOC = React2__namespace.default.useCallback(() => {
    const container = containerRef?.current;
    if (!container) return [];
    const headingElements = container.querySelectorAll(headings.join(", "));
    const tocItems = [];
    headingElements.forEach((element, index) => {
      const text = element.textContent?.trim() || "";
      const level = parseInt(element.tagName.substring(1));
      if (!element.id) {
        element.id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim() || `heading-${index}`;
      }
      tocItems.push({
        id: element.id,
        text,
        level,
        element,
        index
      });
    });
    return tocItems;
  }, [containerRef, headings]);
  React2__namespace.default.useEffect(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);
  const scrollToItem = React2__namespace.default.useCallback((itemId) => {
    const element = document.getElementById(itemId);
    if (!element) return;
    utils.scrollToElement(element, {
      smooth: smoothScroll,
      offset
    });
    setActiveId(itemId);
  }, [offset, smoothScroll]);
  React2__namespace.default.useEffect(() => {
    if (!activeOnScroll || items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 100}px 0px`,
        threshold: 0
      }
    );
    items.forEach((item) => {
      if (item.element) {
        observer.observe(item.element);
      }
    });
    return () => {
      items.forEach((item) => {
        if (item.element) {
          observer.unobserve(item.element);
        }
      });
    };
  }, [activeOnScroll, items, offset]);
  const nestedItems = React2__namespace.default.useMemo(() => {
    if (!nested) return items;
    const result = [];
    const stack = [];
    items.forEach((item) => {
      const tocItem = { ...item, children: [] };
      while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(tocItem);
      } else {
        stack[stack.length - 1].children.push(tocItem);
      }
      stack.push(tocItem);
    });
    return result;
  }, [items, nested]);
  const renderItem = React2__namespace.default.useCallback((item, depth = 0) => {
    const isActive = item.id === activeId;
    const hasChildren = "children" in item && item.children && item.children.length > 0;
    return {
      ...item,
      isActive,
      depth,
      hasChildren,
      scrollTo: () => scrollToItem(item.id)
    };
  }, [activeId, scrollToItem]);
  const renderItems = React2__namespace.default.useCallback(() => {
    const flatItems = [];
    const flatten = (items2, depth = 0) => {
      items2.forEach((item) => {
        flatItems.push(renderItem(item, depth));
        if (item.children && item.children.length > 0) {
          flatten(item.children, depth + 1);
        }
      });
    };
    flatten(nestedItems);
    return flatItems;
  }, [nestedItems, renderItem]);
  const stats = React2__namespace.default.useMemo(() => {
    const levelCounts = {};
    items.forEach((item) => {
      levelCounts[item.level] = (levelCounts[item.level] || 0) + 1;
    });
    return {
      totalItems: items.length,
      levels: Object.keys(levelCounts).map(Number).sort(),
      levelCounts,
      hasActive: !!activeId,
      activeIndex: items.findIndex((item) => item.id === activeId)
    };
  }, [items, activeId]);
  const refresh = React2__namespace.default.useCallback(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);
  const reset = React2__namespace.default.useCallback(() => {
    setItems([]);
    setActiveId(null);
  }, []);
  return {
    // Dados do TOC
    items,
    nestedItems,
    renderItems: renderItems(),
    // Estado
    activeId,
    hasItems: items.length > 0,
    // Funções de controle
    scrollToItem,
    refresh,
    reset,
    // Estatísticas
    stats,
    // Utilitários
    generateTOC,
    renderItem
  };
}

exports.useCarouselKeyboard = useCarouselKeyboard;
exports.usePWA = usePWA;
exports.useTableOfContents = useTableOfContents;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map