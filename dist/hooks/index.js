'use strict';

var React2 = require('react');
var nextThemes = require('next-themes');

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
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var DEFAULT_LOCALE = "pt-BR";
var CURRENCY_MAP = {
  "pt-BR": "BRL",
  "en-US": "USD",
  "es-ES": "EUR"
};
var date_exports = {};
__export(date_exports, {
  formatDate: () => formatDate,
  formatDateTime: () => formatDateTime,
  formatRelativeDate: () => formatRelativeDate,
  isValidDate: () => isValidDate,
  toISOString: () => toISOString
});
var RELATIVE_TEXTS = {
  "pt-BR": {
    now: "agora",
    minute: (n) => `h\xE1 ${n} ${n === 1 ? "minuto" : "minutos"}`,
    hour: (n) => `h\xE1 ${n} ${n === 1 ? "hora" : "horas"}`,
    day: (n) => `h\xE1 ${n} ${n === 1 ? "dia" : "dias"}`,
    month: (n) => `h\xE1 ${n} ${n === 1 ? "m\xEAs" : "meses"}`,
    year: (n) => `h\xE1 ${n} ${n === 1 ? "ano" : "anos"}`
  },
  "en-US": {
    now: "now",
    minute: (n) => `${n} ${n === 1 ? "minute" : "minutes"} ago`,
    hour: (n) => `${n} ${n === 1 ? "hour" : "hours"} ago`,
    day: (n) => `${n} ${n === 1 ? "day" : "days"} ago`,
    month: (n) => `${n} ${n === 1 ? "month" : "months"} ago`,
    year: (n) => `${n} ${n === 1 ? "year" : "years"} ago`
  },
  "es-ES": {
    now: "ahora",
    minute: (n) => `hace ${n} ${n === 1 ? "minuto" : "minutos"}`,
    hour: (n) => `hace ${n} ${n === 1 ? "hora" : "horas"}`,
    day: (n) => `hace ${n} ${n === 1 ? "d\xEDa" : "d\xEDas"}`,
    month: (n) => `hace ${n} ${n === 1 ? "mes" : "meses"}`,
    year: (n) => `hace ${n} ${n === 1 ? "a\xF1o" : "a\xF1os"}`
  }
};
function formatDate(date, format = "long", locale = DEFAULT_LOCALE) {
  const d = typeof date === "string" ? new Date(date) : date;
  const options = {
    day: "numeric",
    month: format === "short" ? "2-digit" : "long",
    year: "numeric",
    ...format === "full" && { weekday: "long" }
  };
  if (format === "short") {
    return d.toLocaleDateString(locale, { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  return d.toLocaleDateString(locale, options);
}
function formatDateTime(date, locale = DEFAULT_LOCALE) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function formatRelativeDate(date, locale = DEFAULT_LOCALE) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date) || Number.isNaN(d.getTime())) {
    return "";
  }
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1e3);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30.4375);
  const diffYear = Math.floor(diffDay / 365);
  const texts = RELATIVE_TEXTS[locale];
  if (diffSec < 10) {
    if (locale === "pt-BR") return "agora mesmo";
    if (locale === "en-US") return "just now";
    if (locale === "es-ES") return "ahora mismo";
  }
  if (diffSec < 60) return texts.now;
  if (diffMin < 60) return texts.minute(diffMin);
  if (diffHour < 24) return texts.hour(diffHour);
  if (diffDay === 1) {
    if (locale === "pt-BR") return "ontem";
    if (locale === "en-US") return "yesterday";
    if (locale === "es-ES") return "ayer";
  }
  if (diffDay === 2) {
    if (locale === "pt-BR") return "anteontem";
    if (locale === "en-US") return "the day before yesterday";
    if (locale === "es-ES") return "anteayer";
  }
  if (diffDay < 30) return texts.day(diffDay);
  if (diffMonth < 12) return texts.month(diffMonth);
  return texts.year(diffYear);
}
function toISOString(date) {
  return date.toISOString();
}
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
var status_exports = {};
__export(status_exports, {
  getStatusColor: () => getStatusColor,
  getStatusVariant: () => getStatusVariant,
  translatePostStatus: () => translatePostStatus,
  translateStatus: () => translateStatus
});
var STATUS_TRANSLATIONS = {
  "pt-BR": {
    // Estados de conteúdo
    DRAFT: "Rascunho",
    PUBLISHED: "Publicado",
    ARCHIVED: "Arquivado",
    SCHEDULED: "Agendado",
    DELETED: "Exclu\xEDdo",
    // Estados de processo
    PENDING: "Pendente",
    ACTIVE: "Ativo",
    INACTIVE: "Inativo",
    COMPLETED: "Conclu\xEDdo",
    CANCELLED: "Cancelado",
    // Estados de aprovação
    APPROVED: "Aprovado",
    REJECTED: "Rejeitado",
    // Estados de pedido/pagamento
    PROCESSING: "Processando",
    PAID: "Pago",
    UNPAID: "N\xE3o Pago",
    REFUNDED: "Reembolsado",
    FAILED: "Falhou",
    // Estados de usuário
    VERIFIED: "Verificado",
    UNVERIFIED: "N\xE3o Verificado",
    BANNED: "Banido",
    SUSPENDED: "Suspenso"
  },
  "en-US": {
    DRAFT: "Draft",
    PUBLISHED: "Published",
    ARCHIVED: "Archived",
    SCHEDULED: "Scheduled",
    DELETED: "Deleted",
    PENDING: "Pending",
    ACTIVE: "Active",
    INACTIVE: "Inactive",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    APPROVED: "Approved",
    REJECTED: "Rejected",
    PROCESSING: "Processing",
    PAID: "Paid",
    UNPAID: "Unpaid",
    REFUNDED: "Refunded",
    FAILED: "Failed",
    VERIFIED: "Verified",
    UNVERIFIED: "Unverified",
    BANNED: "Banned",
    SUSPENDED: "Suspended"
  },
  "es-ES": {
    DRAFT: "Borrador",
    PUBLISHED: "Publicado",
    ARCHIVED: "Archivado",
    SCHEDULED: "Programado",
    DELETED: "Eliminado",
    PENDING: "Pendiente",
    ACTIVE: "Activo",
    INACTIVE: "Inactivo",
    COMPLETED: "Completado",
    CANCELLED: "Cancelado",
    APPROVED: "Aprobado",
    REJECTED: "Rechazado",
    PROCESSING: "Procesando",
    PAID: "Pagado",
    UNPAID: "No Pagado",
    REFUNDED: "Reembolsado",
    FAILED: "Fallido",
    VERIFIED: "Verificado",
    UNVERIFIED: "No Verificado",
    BANNED: "Bloqueado",
    SUSPENDED: "Suspendido"
  }
};
function translateStatus(status, locale = DEFAULT_LOCALE) {
  const normalized = status.toUpperCase();
  return STATUS_TRANSLATIONS[locale][normalized] || status;
}
function getStatusColor(status) {
  const normalized = status.toUpperCase();
  const colorMap = {
    DRAFT: "text-gray-600",
    PENDING: "text-yellow-600",
    PUBLISHED: "text-green-600",
    ACTIVE: "text-green-600",
    INACTIVE: "text-gray-600",
    ARCHIVED: "text-orange-600",
    DELETED: "text-red-600",
    SCHEDULED: "text-blue-600",
    COMPLETED: "text-green-600",
    CANCELLED: "text-red-600",
    APPROVED: "text-green-600",
    REJECTED: "text-red-600",
    FAILED: "text-red-600",
    VERIFIED: "text-green-600",
    BANNED: "text-red-600"
  };
  return colorMap[normalized] || "text-gray-600";
}
function getStatusVariant(status) {
  const normalized = status.toUpperCase();
  if (["PUBLISHED", "ACTIVE", "COMPLETED", "APPROVED", "VERIFIED"].includes(normalized)) {
    return "default";
  }
  if (["DELETED", "CANCELLED", "REJECTED", "FAILED", "BANNED"].includes(normalized)) {
    return "destructive";
  }
  if (["DRAFT", "INACTIVE", "ARCHIVED"].includes(normalized)) {
    return "secondary";
  }
  return "outline";
}
function translatePostStatus(status, locale = DEFAULT_LOCALE) {
  const postStatusMap = {
    "draft": "DRAFT",
    "published": "PUBLISHED",
    "archived": "ARCHIVED",
    "scheduled": "SCHEDULED",
    "pending_review": "PENDING"
  };
  const normalized = postStatusMap[status.toLowerCase()] || status.toUpperCase();
  if (status.toLowerCase() === "pending_review") {
    const translations = {
      "pt-BR": "Aguardando Revis\xE3o",
      "en-US": "Pending Review",
      "es-ES": "Pendiente de Revisi\xF3n"
    };
    return translations[locale] || translations["pt-BR"];
  }
  return translateStatus(normalized, locale);
}
function scrollToElement(element, options = {}) {
  if (typeof window === "undefined") return;
  const { smooth = false, offset = 0, behavior } = options;
  let targetElement;
  if (typeof element === "string") {
    targetElement = document.querySelector(element);
  } else {
    targetElement = element;
  }
  if (!targetElement) return;
  const rect = targetElement.getBoundingClientRect();
  const absoluteY = rect.top + window.scrollY - offset;
  window.scrollTo({
    left: 0,
    top: absoluteY,
    behavior: behavior || (smooth ? "smooth" : "auto")
  });
}
var authentication_exports = {};
__export(authentication_exports, {
  getRefreshToken: () => getRefreshToken,
  getToken: () => getToken,
  getTokens: () => getTokens,
  hasToken: () => hasToken,
  removeToken: () => removeToken,
  setRefreshToken: () => setRefreshToken,
  setToken: () => setToken,
  setTokens: () => setTokens
});
var TOKEN_KEY = "auth_token";
var REFRESH_TOKEN_KEY = "refresh_token";
var getToken = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem(TOKEN_KEY);
};
var setToken = (token) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(TOKEN_KEY, token);
};
var getRefreshToken = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};
var setRefreshToken = (refreshToken) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};
var removeToken = () => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
var hasToken = () => {
  return !!getToken();
};
var getTokens = () => {
  return {
    accessToken: getToken(),
    refreshToken: getRefreshToken()
  };
};
var setTokens = ({
  accessToken,
  refreshToken
}) => {
  setToken(accessToken);
  setRefreshToken(refreshToken);
};
var COOKIE_CONSENT_KEY = "cookie-consent";
var COOKIE_PREFERENCES_KEY = "cookie-preferences";
var COOKIE_VERSION = "1.0.0";
var _CookieManager = class _CookieManager2 {
  constructor() {
  }
  static getInstance() {
    if (!_CookieManager2.instance) {
      _CookieManager2.instance = new _CookieManager2();
    }
    return _CookieManager2.instance;
  }
  hasConsent() {
    if (typeof window === "undefined") return false;
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) return false;
      const consentData = JSON.parse(consent);
      return consentData.consented === true;
    } catch {
      return false;
    }
  }
  getPreferences() {
    if (typeof window === "undefined") return null;
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) return null;
      const consentData = JSON.parse(consent);
      return consentData.preferences || null;
    } catch {
      return null;
    }
  }
  saveConsent(preferences) {
    if (typeof window === "undefined") return;
    try {
      const consent = {
        version: COOKIE_VERSION,
        consented: true,
        timestamp: Date.now(),
        preferences
      };
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
      window.dispatchEvent(
        new CustomEvent("cookie-consent-updated", { detail: preferences })
      );
      this.loadScripts(preferences);
    } catch {
    }
  }
  updatePreferences(preferences) {
    this.saveConsent(preferences);
  }
  revokeConsent() {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      localStorage.removeItem(COOKIE_PREFERENCES_KEY);
      this.clearAnalyticsCookies();
      window.dispatchEvent(
        new CustomEvent("cookie-consent-revoked", { detail: null })
      );
    } catch {
    }
  }
  isAllowed(type) {
    const preferences = this.getPreferences();
    if (!preferences) return false;
    if (type === "essential") {
      return preferences.essential === true;
    }
    return preferences[type] === true;
  }
  loadScripts(preferences) {
    if (preferences.analytics) {
      this.loadGoogleAnalytics();
    } else {
      this.unloadGoogleAnalytics();
    }
  }
  loadGoogleAnalytics() {
  }
  unloadGoogleAnalytics() {
    const scripts = document.querySelectorAll(
      'script[src*="googletagmanager.com"], script[src*="google-analytics.com"]'
    );
    scripts.forEach((script) => script.remove());
    this.clearAnalyticsCookies();
    const win = window;
    if (win.dataLayer) {
      win.dataLayer = [];
    }
    if (win.gtag) {
      delete win.gtag;
    }
  }
  clearAnalyticsCookies() {
    if (typeof document === "undefined") return;
    const analyticsCookies = [
      "_ga",
      "_ga_*",
      "_gid",
      "_gat",
      "_gat_gtag_*",
      "__utma",
      "__utmt",
      "__utmb",
      "__utmc",
      "__utmz",
      "__utmv"
    ];
    analyticsCookies.forEach((cookieName) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      if (cookieName.includes("*")) {
        const baseName = cookieName.replace("*", "");
        const cookies = document.cookie.split(";");
        cookies.forEach((cookie) => {
          const parts = cookie.split("=");
          if (parts.length === 0) return;
          const name = parts[0]?.trim();
          if (!name || !name.startsWith(baseName)) return;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
        });
      }
    });
  }
};
__publicField(_CookieManager, "instance");
var AuthStorage = class {
  static setItem(key, value) {
    if (!this.isClient) return;
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn("Failed to save to localStorage:", error);
    }
  }
  static getItem(key) {
    if (!this.isClient) return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn("Failed to read from localStorage:", error);
      return null;
    }
  }
  static removeItem(key) {
    if (!this.isClient) return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn("Failed to remove from localStorage:", error);
    }
  }
  static setUser(user, key) {
    this.setItem(key, JSON.stringify(user));
  }
  static getUser(key) {
    const data = this.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      this.removeItem(key);
      return null;
    }
  }
  static removeUser(key) {
    this.removeItem(key);
  }
};
__publicField(AuthStorage, "isClient", typeof window !== "undefined");
function formatCurrency(value, locale = DEFAULT_LOCALE, options) {
  const currency = CURRENCY_MAP[locale];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    ...options
  }).format(value);
}
function formatNumber2(value, decimals = 0, locale = DEFAULT_LOCALE) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}
function formatCompact(value, decimals = 1, locale = DEFAULT_LOCALE) {
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}
var pt_br_exports = {};
__export(pt_br_exports, {
  default: () => pt_br_default,
  formatCompact: () => formatCompact2,
  formatCurrency: () => formatCurrency2,
  formatDate: () => formatDate2,
  formatDateTime: () => formatDateTime2,
  formatNumber: () => formatNumber3,
  formatRelativeDate: () => formatRelativeDate2,
  translateStatus: () => translateStatus2
});
function formatDate2(date, format = "long") {
  return formatDate(date, format, "pt-BR");
}
function formatDateTime2(date) {
  return formatDateTime(date, "pt-BR");
}
function formatRelativeDate2(date) {
  return formatRelativeDate(date, "pt-BR");
}
function formatCurrency2(value, options) {
  return formatCurrency(value, "pt-BR", options);
}
function formatNumber3(value, decimals = 0) {
  return formatNumber2(value, decimals, "pt-BR");
}
function formatCompact2(value, decimals = 1) {
  return formatCompact(value, decimals, "pt-BR");
}
function translateStatus2(status) {
  return translateStatus(status, "pt-BR");
}
var pt_br_default = {
  formatDate: formatDate2,
  formatDateTime: formatDateTime2,
  formatRelativeDate: formatRelativeDate2,
  formatCurrency: formatCurrency2,
  formatNumber: formatNumber3,
  formatCompact: formatCompact2,
  translateStatus: translateStatus2
};
var text_exports = {};
__export(text_exports, {
  calculateReadingTime: () => calculateReadingTime,
  capitalize: () => capitalize,
  cleanText: () => cleanText,
  countWords: () => countWords,
  extractInitials: () => extractInitials,
  generateAvatarUrl: () => generateAvatarUrl,
  generateDynamicAvatarUrl: () => generateDynamicAvatarUrl,
  generateUniqueId: () => generateUniqueId,
  getAvatarColorFromName: () => getAvatarColorFromName,
  isEmpty: () => isEmpty,
  isValidAvatarUrl: () => isValidAvatarUrl,
  normalizeSpaces: () => normalizeSpaces,
  truncateText: () => truncateText
});
function extractInitials(name, maxChars = 2) {
  if (!name || !name.trim()) {
    return "";
  }
  const words = name.trim().split(/\s+/);
  const initials = words.slice(0, maxChars).map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
}
function generateAvatarUrl(name, size = 200, backgroundColor = "0891b2", textColor = "fff") {
  const encodedName = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encodedName}&size=${size}&background=${backgroundColor}&color=${textColor}&font-size=0.5`;
}
function isValidAvatarUrl(url) {
  if (!url || typeof url !== "string") {
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
function getAvatarColorFromName(name) {
  if (!name || typeof name !== "string") {
    return "#0891b2";
  }
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    "#0891b2",
    // cyan-600
    "#9333ea",
    // purple-600
    "#db2777",
    // pink-600
    "#059669",
    // emerald-600
    "#2563eb",
    // blue-600
    "#f97316",
    // orange-500
    "#dc2626",
    // red-600
    "#7c3aed"
    // violet-600
  ];
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
function generateDynamicAvatarUrl(name, size = 200) {
  const color = getAvatarColorFromName(name);
  const colorHex = color.replace("#", "");
  return generateAvatarUrl(name, size, colorHex, "fff");
}
function generateUniqueId(text, prefix = "", suffix = "") {
  const slug = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim().substring(0, 50);
  const parts = [prefix, slug, suffix].filter(Boolean);
  return parts.join("-");
}
function truncateText(text, maxLength, suffix = "...") {
  if (!text || text.length <= maxLength) {
    return text || "";
  }
  return text.substring(0, maxLength - suffix.length) + suffix;
}
function capitalize(text, options = {}) {
  if (!text) return "";
  const { firstWordOnly = false, lowerRest = false } = options;
  if (firstWordOnly) {
    return text.charAt(0).toUpperCase() + (lowerRest ? text.slice(1).toLowerCase() : text.slice(1));
  }
  if (lowerRest) {
    return text.replace(/\b\w/g, (char) => char.toUpperCase()).toLowerCase();
  }
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
function cleanText(text, allowSpaces = true) {
  if (!text) return "";
  const pattern = allowSpaces ? /[^\w\s]/g : /[^\w]/g;
  return text.replace(pattern, "");
}
function countWords(text) {
  if (!text || !text.trim()) {
    return 0;
  }
  return text.trim().split(/\s+/).length;
}
function isEmpty(text) {
  return !text || !text.trim();
}
function normalizeSpaces(text, options = {}) {
  if (!text) return "";
  const { newlines = false } = options;
  let cleaned = text;
  if (newlines) {
    cleaned = cleaned.replace(/\s+/g, " ");
  } else {
    cleaned = cleaned.replace(/\s+/g, " ");
  }
  return cleaned.trim();
}
function calculateReadingTime(content, wordsPerMinute = 200) {
  let text = "";
  if (typeof content === "object" && content !== null) {
    const extractText = (node) => {
      if (!node) return "";
      let result = "";
      if (node.text) {
        result += node.text + " ";
      }
      if (Array.isArray(node.content)) {
        result += node.content.map(extractText).join(" ");
      }
      return result;
    };
    text = extractText(content);
  } else if (typeof content === "string") {
    text = content.replace(/<[^>]*>/g, "");
  }
  const words = text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time > 0 ? time : 1;
}

// src/hooks/use-table-of-contents.ts
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
    scrollToElement(element, {
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