import * as React2 from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx } from 'react/jsx-runtime';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.MOTION || {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms"},
  easing: {
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    }
};
var motionSemantic = tokens.MOTION || {
  transition: {
    default: {
      duration: motion.duration.normal,
      easing: motion.easing.easeInOut
    }
  },
  interaction: {
    hover: {
      duration: motion.duration.fast,
      easing: motion.easing.easeOut
    }
  },
  feedback: {
    success: {
      duration: motion.duration.slower,
      easing: motion.easing.spring
    }
  },
  navigation: {
    page: {
      duration: motion.duration.slow,
      easing: motion.easing.easeInOut
    }
  }
};
motion.delay;
motion.duration;
motion.easing;
({
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring
  },
  // Presets semânticos
  semantic: {
    transition: motionSemantic.transition.default,
    interaction: motionSemantic.interaction.hover,
    feedback: motionSemantic.feedback.success,
    navigation: motionSemantic.navigation.page
  }
});
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
function getInitials(name, maxInitials = 2) {
  return name.split(" ").filter((word) => word.length > 0).map((word) => word[0]).join("").toUpperCase().slice(0, maxInitials);
}
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
var sizeClasses = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
  "2xl": "h-20 w-20 text-xl",
  "3xl": "h-24 w-24 text-2xl"
};
var variantClasses = {
  circular: "rounded-full",
  rounded: "rounded-xl",
  square: "rounded-lg"
};
function getColorFromName(name) {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-pink-400 to-pink-600",
    "from-indigo-400 to-indigo-600",
    "from-cyan-400 to-cyan-600",
    "from-emerald-400 to-emerald-600",
    "from-rose-400 to-rose-600",
    "from-amber-400 to-amber-600",
    "from-teal-400 to-teal-600"
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
var Avatar = React2.forwardRef(
  ({
    className,
    src,
    alt,
    name,
    size = "md",
    variant = "circular",
    fallbackColor,
    textColor = "text-white",
    maxInitials = 2,
    onLoad,
    onError,
    children,
    ...props
  }, ref) => {
    const [imageStatus, setImageStatus] = React2.useState("loading");
    const [showFallback, setShowFallback] = React2.useState(!src);
    React2.useEffect(() => {
      if (!src) {
        setShowFallback(true);
        setImageStatus("error");
        return;
      }
      setImageStatus("loading");
      setShowFallback(false);
      const img = new Image();
      img.onload = () => {
        setImageStatus("loaded");
        onLoad?.();
      };
      img.onerror = () => {
        setImageStatus("error");
        setShowFallback(true);
        onError?.();
      };
      img.src = src;
    }, [src, onLoad, onError]);
    const initials = name ? getInitials(name, maxInitials) : "";
    const ariaLabel = alt || name || "Avatar";
    const autoColor = name && !fallbackColor ? getColorFromName(name) : "";
    const bgClass = fallbackColor || (autoColor ? `bg-gradient-to-br ${autoColor}` : "bg-gray-500");
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "relative inline-flex items-center justify-center font-medium select-none",
          "transition-all duration-200 ease-in-out",
          sizeClasses[size],
          variantClasses[variant],
          showFallback ? bgClass : "bg-transparent",
          textColor,
          "shadow-sm hover:shadow-md",
          className
        ),
        role: "img",
        "aria-label": ariaLabel,
        ...props,
        children: [
          showFallback ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: initials ? /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-wide", children: initials }) : /* @__PURE__ */ jsx("span", { className: "opacity-60 text-2xl", children: "?" }) }) : /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt,
              className: cn(
                "h-full w-full object-cover",
                variantClasses[variant],
                "transition-opacity duration-200"
              ),
              style: {
                opacity: imageStatus === "loaded" ? 1 : 0
              }
            }
          ),
          imageStatus === "loading" && !showFallback && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm", children: /* @__PURE__ */ jsx("div", { className: "h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" }) }),
          children
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";
var AvatarImage = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "img",
  {
    ref,
    className: cn("h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center font-medium",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarFallback, AvatarImage };
//# sourceMappingURL=avatar.mjs.map
//# sourceMappingURL=avatar.mjs.map