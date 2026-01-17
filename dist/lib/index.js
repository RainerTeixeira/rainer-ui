'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function getThemeColors(theme) {
  const tokenObj = designTokens.tokens;
  return tokenObj.themes?.[theme] || {};
}
function getTokenColor(tokenName, theme) {
  if (theme) {
    const themeColors = getThemeColors(theme);
    const searchPaths = [
      themeColors.button?.primary,
      themeColors.text?.primary,
      themeColors.background?.primary,
      themeColors.border?.default
    ];
    for (const value of searchPaths) {
      if (typeof value === "string" && value.startsWith("#")) {
        return value;
      }
      if (value && typeof value === "object" && "default" in value) {
        const defaultValue = value.default;
        if (typeof defaultValue === "string" && defaultValue.startsWith("#")) {
          return defaultValue;
        }
      }
    }
  }
  const varName = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
  return `var(--${varName})`;
}
function hexToRGB(hex) {
  const cleanHex = hex.replace("#", "");
  if (!/^[0-9A-F]{6}$/i.test(cleanHex)) {
    return "0, 0, 0";
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
function hexToRGBA(hex, alpha = 1) {
  const cleanHex = hex.replace("#", "");
  alpha = Math.max(0, Math.min(1, alpha));
  if (!/^[0-9A-F]{6}$/i.test(cleanHex)) {
    return "rgb(0, 0, 0)";
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  if (alpha === 1) {
    return `rgb(${r}, ${g}, ${b})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function overlayFromToken(tokenName, alpha = 0.08, theme) {
  const cleanName = tokenName.replace(/^color-/, "");
  if (theme) {
    const hexColor = getTokenColor(cleanName, theme);
    if (hexColor.startsWith("#")) {
      return hexToRGBA(hexColor, alpha);
    }
  }
  const varName = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
  return `rgba(var(--${varName}-rgb, 0 0 0), ${alpha})`;
}
function isValidHex(hex) {
  const cleanHex = hex.replace("#", "");
  return /^[0-9A-Fa-f]{6}$/.test(cleanHex);
}
function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
}

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var COMPONENT_CLASSES = {
  /** Container padrão com largura máxima e padding responsivo */
  container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  /** Espaçamento vertical responsivo */
  spacing: "space-y-4 sm:space-y-6 md:space-y-8",
  /** Classes base para cards */
  card: {
    base: "rounded-lg border bg-card text-card-foreground shadow-sm",
    hover: "transition-all duration-200 hover:shadow-lg"
  },
  /** Classes base para buttons */
  button: {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  },
  /** Classes base para inputs */
  input: {
    base: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  }
};
var SECTION_CLASSES = {
  /** Container padrão de página com largura máxima e padding responsivo */
  container: "w-full max-w-6xl mx-auto px-6 py-12"
};
var motion = designTokens.tokens.MOTION || {
  duration: {
    instant: "0ms",
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
    slowest: "800ms"
  },
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    none: "0ms",
    short: "50ms",
    medium: "100ms",
    long: "200ms"
  }
};
var motionSemantic = designTokens.tokens.MOTION || {
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
var ANIMATION_DELAYS = motion.delay;
var ANIMATION_DURATIONS = motion.duration;
var ANIMATION_EASINGS = motion.easing;
var motionPresets = {
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
};

// src/lib/image-utils.ts
function isAcceptedFormat(mimeType) {
  const acceptedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/avif"
  ];
  return acceptedTypes.includes(mimeType);
}
function isWebP(mimeType) {
  return mimeType === "image/webp";
}
function supportsWebP() {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  });
}
async function getImageInfo(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        size: file.size,
        type: file.type
      });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}
async function resizeImage(file, maxWidth, maxHeight, quality = 0.9, format = "image/jpeg") {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }
      let { width, height } = img;
      if (width > maxWidth) {
        height = maxWidth / width * height;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = maxHeight / height * width;
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, {
              type: format,
              lastModified: Date.now()
            });
            resolve(resizedFile);
          } else {
            reject(new Error("Failed to create blob"));
          }
        },
        format,
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}
async function convertToWebP(file, quality = 0.9) {
  if (isWebP(file.type)) {
    return file;
  }
  return resizeImage(file, file.size, file.size, quality, "image/webp");
}
async function prepareImageForUpload(file, options = {}) {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    quality = 0.9,
    shouldConvertToWebP = true,
    maxSizeBytes = 5 * 1024 * 1024
    // 5MB
  } = options;
  if (!isAcceptedFormat(file.type)) {
    throw new Error("Formato de imagem n\xE3o suportado");
  }
  if (file.size > maxSizeBytes) {
    throw new Error(`Arquivo muito grande. M\xE1ximo: ${maxSizeBytes / 1024 / 1024}MB`);
  }
  const info = await getImageInfo(file);
  let processedFile = file;
  if (info.width > maxWidth || info.height > maxHeight) {
    processedFile = await resizeImage(file, maxWidth, maxHeight, quality);
  }
  if (shouldConvertToWebP && !isWebP(processedFile.type)) {
    try {
      const isWebPSupported = await supportsWebP();
      if (isWebPSupported === true) {
        processedFile = await convertToWebP(processedFile, quality);
      }
    } catch {
    }
  }
  return processedFile;
}
function generatePlaceholder(width, height, text = "") {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  ctx.fillStyle = "rgb(229, 231, 235)";
  ctx.fillRect(0, 0, width, height);
  if (text) {
    ctx.fillStyle = "rgb(107, 114, 128)";
    ctx.font = `${Math.min(width, height) / 10}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);
  }
  return canvas.toDataURL();
}
function getThemeColors2(theme) {
  return designTokens.themes[theme];
}
function getSemanticColors(theme) {
  return designTokens.themes[theme];
}
function getSemanticColorsSimplified(theme) {
  const themeData = designTokens.themes[theme];
  return {
    colors: themeData?.colors || {}
  };
}
function getStatusColor(status, theme = "light") {
  const themeData = designTokens.themes[theme];
  return themeData?.colors?.[status]?.base || "#000000";
}
function getButtonPrimaryColor(theme = "light") {
  const themeData = designTokens.themes[theme];
  return themeData?.colors?.primary?.base || "#0891b2";
}
function getButtonSecondaryColor(theme = "light") {
  const themeData = designTokens.themes[theme];
  return themeData?.colors?.secondary?.base || "#6366f1";
}
function getButtonTertiaryColor(theme = "light") {
  return "transparent";
}
function getButtonPrimaryTextColor(theme = "light") {
  const themeData = designTokens.themes[theme];
  return themeData?.colors?.primary?.text || "#ffffff";
}
function getColorFromTheme(theme, category, shade) {
  const themeData = designTokens.themes[theme];
  return themeData?.colors?.[category]?.[shade];
}
function getBrandColor(variant, theme = "light") {
  const themeData = designTokens.themes[theme];
  return themeData?.colors?.[variant]?.base;
}
function getSemanticColorConstants() {
  return {
    light: getSemanticColorsSimplified("light"),
    dark: getSemanticColorsSimplified("dark")
  };
}
function generateTailwindClasses(options) {
  const classes = [];
  if (options.bg) classes.push(`bg-${options.bg}`);
  if (options.text) classes.push(`text-${options.text}`);
  if (options.border) classes.push(`border-${options.border}`);
  if (options.rounded) classes.push(`rounded-${options.rounded}`);
  if (options.shadow) classes.push(`shadow-${options.shadow}`);
  if (options.p) classes.push(`p-${options.p}`);
  if (options.m) classes.push(`m-${options.m}`);
  Object.entries(options).forEach(([key, value]) => {
    if (value && !["bg", "text", "border", "rounded", "shadow", "p", "m"].includes(key)) {
      classes.push(`${key}-${value}`);
    }
  });
  return classes.join(" ");
}

// src/lib/constants.ts
var Z_INDEX = {
  BACKDROP: "999",
  MODAL: "1000",
  DROPDOWN: "1050",
  TOOLTIP: "1100",
  NAVIGATION: "1200",
  OVERLAY: "1300",
  STICKY: "1400",
  FIXED: "1500"
};
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out",
    FAST: "transition-all duration-150 ease-in-out",
    SLOW: "transition-all duration-300 ease-in-out",
    COLOR: "transition-colors duration-200 ease-in-out",
    TRANSFORM: "transition-transform duration-200 ease-in-out",
    OPACITY: "transition-opacity duration-200 ease-in-out"
  },
  DURATION: {
    FAST: "150ms",
    NORMAL: "200ms",
    SLOW: "300ms"
  },
  EASING: {
    DEFAULT: "ease-in-out",
    EASE_IN: "ease-in",
    EASE_OUT: "ease-out"
  }
};
var GRADIENT_DIRECTIONS = {
  TO_TOP: "to-t",
  TO_RIGHT: "to-r",
  TO_BOTTOM: "to-b",
  TO_LEFT: "to-l",
  TO_TOP_RIGHT: "to-tr",
  TO_TOP_LEFT: "to-tl",
  TO_BOTTOM_RIGHT: "to-br",
  TO_BOTTOM_LEFT: "to-bl"
};

// src/lib/scroll-utils.ts
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollTo(target, options) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    console.warn(`Elemento n\xE3o encontrado: ${target}`);
    return;
  }
  const shouldAnimate = !prefersReducedMotion();
  element.scrollIntoView({
    behavior: shouldAnimate ? "smooth" : "auto",
    block: "start",
    inline: "nearest",
    ...options
  });
}
function scrollToTop() {
  const shouldAnimate = !prefersReducedMotion();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function scrollToPosition(x, y, smooth = true) {
  const shouldAnimate = smooth && !prefersReducedMotion();
  window.scrollTo({
    top: y,
    left: x,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "";
}
function onReducedMotionChange(callback) {
  if (typeof window === "undefined") {
    return () => {
    };
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = (event) => {
    callback(event.matches);
  };
  handler(mediaQuery);
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }
  if (mediaQuery.addListener) {
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }
  return () => {
  };
}

// src/lib/cookie-utils.ts
var COOKIE_CONSENT_KEY = "cookie-consent";
var COOKIE_PREFERENCES_KEY = "cookie-preferences";
var COOKIE_VERSION = "1.0.0";
var _CookieManager = class _CookieManager {
  constructor() {
  }
  static getInstance() {
    if (!_CookieManager.instance) {
      _CookieManager.instance = new _CookieManager();
    }
    return _CookieManager.instance;
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
var CookieManager = _CookieManager;
function getCookieManager() {
  return CookieManager.getInstance();
}
function hasCookieConsent() {
  return getCookieManager().hasConsent();
}
function getCookiePreferences() {
  return getCookieManager().getPreferences();
}
function saveCookieConsent(preferences) {
  getCookieManager().saveConsent(preferences);
}
function isCookieAllowed(type) {
  return getCookieManager().isAllowed(type);
}

exports.ANIMATION_DELAYS = ANIMATION_DELAYS;
exports.ANIMATION_DURATIONS = ANIMATION_DURATIONS;
exports.ANIMATION_EASINGS = ANIMATION_EASINGS;
exports.COMPONENT_CLASSES = COMPONENT_CLASSES;
exports.COOKIE_CONSENT_KEY = COOKIE_CONSENT_KEY;
exports.COOKIE_PREFERENCES_KEY = COOKIE_PREFERENCES_KEY;
exports.COOKIE_VERSION = COOKIE_VERSION;
exports.CookieManager = CookieManager;
exports.GRADIENT_DIRECTIONS = GRADIENT_DIRECTIONS;
exports.MOTION = MOTION;
exports.SECTION_CLASSES = SECTION_CLASSES;
exports.Z_INDEX = Z_INDEX;
exports.cn = cn;
exports.convertToWebP = convertToWebP;
exports.disableScroll = disableScroll;
exports.enableScroll = enableScroll;
exports.generatePlaceholder = generatePlaceholder;
exports.generateTailwindClasses = generateTailwindClasses;
exports.getBrandColor = getBrandColor;
exports.getButtonPrimaryColor = getButtonPrimaryColor;
exports.getButtonPrimaryTextColor = getButtonPrimaryTextColor;
exports.getButtonSecondaryColor = getButtonSecondaryColor;
exports.getButtonTertiaryColor = getButtonTertiaryColor;
exports.getColorFromTheme = getColorFromTheme;
exports.getContrastColor = getContrastColor;
exports.getCookieManager = getCookieManager;
exports.getCookiePreferences = getCookiePreferences;
exports.getImageInfo = getImageInfo;
exports.getSemanticColorConstants = getSemanticColorConstants;
exports.getSemanticColors = getSemanticColors;
exports.getSemanticColorsSimplified = getSemanticColorsSimplified;
exports.getStatusColor = getStatusColor;
exports.getThemeColors = getThemeColors2;
exports.getTokenColor = getTokenColor;
exports.hasCookieConsent = hasCookieConsent;
exports.hexToRGB = hexToRGB;
exports.hexToRGBA = hexToRGBA;
exports.isAcceptedFormat = isAcceptedFormat;
exports.isCookieAllowed = isCookieAllowed;
exports.isValidHex = isValidHex;
exports.isWebP = isWebP;
exports.motion = motion;
exports.motionPresets = motionPresets;
exports.motionSemantic = motionSemantic;
exports.onReducedMotionChange = onReducedMotionChange;
exports.overlayFromToken = overlayFromToken;
exports.prefersReducedMotion = prefersReducedMotion;
exports.prepareImageForUpload = prepareImageForUpload;
exports.resizeImage = resizeImage;
exports.saveCookieConsent = saveCookieConsent;
exports.scrollToPosition = scrollToPosition;
exports.scrollToTop = scrollToTop;
exports.smoothScrollTo = smoothScrollTo;
exports.supportsWebP = supportsWebP;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map