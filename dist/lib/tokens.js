'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var tokensData__default = /*#__PURE__*/_interopDefault(tokensData);

var tokens = tokensData__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var primitiveZIndex = tokens.primitives?.zIndex ?? {};
var getZIndexValue = (key, fallback) => {
  const value = primitiveZIndex?.[key];
  return value !== void 0 ? String(value) : String(fallback);
};
var baseZIndex = {
  base: getZIndexValue("base", 0),
  content: getZIndexValue("content", 100),
  overlay: getZIndexValue("overlay", 200),
  dropdown: getZIndexValue("dropdown", 300),
  modal: getZIndexValue("modal", 400),
  tooltip: getZIndexValue("tooltip", 500),
  notification: getZIndexValue("notification", 600),
  max: getZIndexValue("max", 9999)
};
var Z_INDEX = {
  ...baseZIndex,
  BASE: baseZIndex.base,
  CONTENT: baseZIndex.content,
  OVERLAY: baseZIndex.overlay,
  DROPDOWN: baseZIndex.dropdown,
  MODAL: baseZIndex.modal,
  TOOLTIP: baseZIndex.tooltip,
  NOTIFICATION: baseZIndex.notification,
  MAX: baseZIndex.max,
  BACKDROP: baseZIndex.overlay
};
var motionPrimitives = tokens.primitives?.motion ?? {};
var motionTokens = motionPrimitives;
var animationDelays = motionTokens?.delay ?? {};
var animationDurations = motionTokens?.duration ?? {};
var animationEasings = motionTokens?.easing ?? {};
var ANIMATION_DELAYS = animationDelays;
var ANIMATION_DURATIONS = animationDurations;
var ANIMATION_EASINGS = animationEasings;
var motion = {
  duration: animationDurations,
  easing: animationEasings,
  delay: animationDelays
};
var baseDuration = animationDurations.normal ?? animationDurations.default ?? "200ms";
var fastDuration = animationDurations.fast ?? baseDuration;
var slowDuration = animationDurations.slow ?? baseDuration;
var easeInOut = animationEasings.easeInOut ?? animationEasings.default ?? "ease-in-out";
var easeOut = animationEasings.easeOut ?? easeInOut;
var spring = animationEasings.spring ?? easeInOut;
var motionPresets = {
  default: {
    duration: baseDuration,
    easing: easeInOut
  },
  fast: {
    duration: fastDuration,
    easing: easeOut
  },
  slow: {
    duration: slowDuration,
    easing: easeInOut
  },
  spring: {
    duration: baseDuration,
    easing: spring
  }
};
var fallbackMotionSemantic = {
  transition: {
    default: { duration: baseDuration, easing: easeInOut },
    fast: { duration: fastDuration, easing: easeOut },
    slow: { duration: slowDuration, easing: easeInOut }
  },
  interaction: {
    hover: { duration: fastDuration, easing: easeOut },
    focus: { duration: baseDuration, easing: easeInOut },
    active: { duration: fastDuration, easing: spring }
  },
  feedback: {
    success: { duration: slowDuration, easing: easeInOut },
    error: { duration: slowDuration, easing: spring },
    warning: { duration: slowDuration, easing: easeOut }
  },
  navigation: {
    page: { duration: slowDuration, easing: easeOut },
    modal: { duration: baseDuration, easing: easeInOut }
  }
};
var motionSemantic = tokens.semantics?.motion ?? fallbackMotionSemantic;
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out",
    COLOR: "transition-colors duration-200 ease-in-out",
    TRANSFORM: "transition-transform duration-200 ease-in-out",
    OPACITY: "transition-opacity duration-200 ease-in-out"
  }
};
function getTheme(theme) {
  return tokens.themes?.[theme] ?? {};
}
function getThemeColors(theme) {
  const themeData = getTheme(theme);
  return themeData.colors ?? {};
}
function getSemanticColors(theme) {
  return {
    colors: getThemeColors(theme)
  };
}
function getStatusColor(status, theme = "light") {
  const statusPalette = getThemeColors(theme)[status];
  return statusPalette?.base ?? `var(--color-${status})`;
}
function getButtonPrimaryColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.primary?.default ?? "var(--color-primary)";
}
function getButtonSecondaryColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.secondary?.default ?? "var(--color-secondary)";
}
function getButtonPrimaryTextColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.primary?.text ?? "var(--color-white)";
}
function getButtonTertiaryColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.tertiary?.default ?? "var(--color-muted)";
}
function getColorFromTheme(theme, category, shade) {
  return getThemeColors(theme)?.[category]?.[shade];
}
function getBrandColor(variant, theme = "light") {
  return getThemeColors(theme)?.[variant]?.base;
}
function getSemanticColorsSimplified(theme) {
  const colors = getThemeColors(theme);
  return {
    primary: colors?.primary,
    secondary: colors?.secondary,
    success: colors?.success,
    warning: colors?.warning,
    error: colors?.error,
    info: colors?.info,
    muted: colors?.muted
  };
}
function getSemanticColorConstants() {
  return tokens.semantics?.colors ?? {};
}
function generateTailwindClasses(options) {
  return Object.entries(options).filter(([, value]) => value !== void 0 && value !== "").map(([key, value]) => {
    if (key === "bg" || key === "text" || key === "border") {
      return `${key}-${value}`;
    }
    return `${key}-${value}`;
  }).join(" ");
}
function getTokenColor(tokenName) {
  const normalizedName = tokenName.startsWith("--") ? tokenName.slice(2) : tokenName;
  return `var(--${normalizedName})`;
}
function overlayFromToken(tokenName, alpha = 0.08) {
  const normalized = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
  const rgbVar = `--${normalized}-rgb`;
  return `rgba(var(${rgbVar}, 0 0 0), ${alpha})`;
}
function isValidHex(hex) {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
}
function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  let r, g, b;
  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6 || cleanHex.length === 8) {
    r = parseInt(cleanHex.slice(0, 2), 16);
    g = parseInt(cleanHex.slice(2, 4), 16);
    b = parseInt(cleanHex.slice(4, 6), 16);
  } else {
    return "var(--color-black)";
  }
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "var(--color-black)" : "var(--color-white)";
}
var lightTokens = tokens.themes?.light ?? {};
var darkTokens = tokens.themes?.dark ?? {};
var COMPONENT_CLASSES = tokens.semantics?.layoutClasses?.components ?? {};
var SECTION_CLASSES = tokens.semantics?.layoutClasses?.sections ?? {};
var defaultGradientDirections = {
  TO_R: "to-r",
  TO_L: "to-l",
  TO_T: "to-t",
  TO_B: "to-b",
  TO_BR: "to-br",
  TO_BL: "to-bl",
  TO_TR: "to-tr",
  TO_TL: "to-tl",
  TO_BOTTOM: "to-b",
  TO_BOTTOM_RIGHT: "to-br",
  TO_BOTTOM_LEFT: "to-bl",
  TO_TOP_RIGHT: "to-tr",
  TO_TOP_LEFT: "to-tl"
};
var rawGradientDirections = tokens.primitives?.gradientDirections ?? {};
var GRADIENT_DIRECTIONS = rawGradientDirections ?? defaultGradientDirections;
var tokenUtils = {
  // Funções principais
  cn,
  getTheme,
  getThemeColors,
  getStatusColor,
  getBrandColor,
  getTokenColor,
  overlayFromToken,
  isValidHex,
  getContrastColor,
  generateTailwindClasses,
  // Constantes
  Z_INDEX,
  motion,
  motionPresets,
  motionSemantic,
  MOTION,
  COMPONENT_CLASSES,
  SECTION_CLASSES,
  GRADIENT_DIRECTIONS,
  // Tokens diretos
  lightTokens,
  darkTokens
};
var tokens_default = tokenUtils;

exports.ANIMATION_DELAYS = ANIMATION_DELAYS;
exports.ANIMATION_DURATIONS = ANIMATION_DURATIONS;
exports.ANIMATION_EASINGS = ANIMATION_EASINGS;
exports.COMPONENT_CLASSES = COMPONENT_CLASSES;
exports.GRADIENT_DIRECTIONS = GRADIENT_DIRECTIONS;
exports.MOTION = MOTION;
exports.SECTION_CLASSES = SECTION_CLASSES;
exports.Z_INDEX = Z_INDEX;
exports.animationDelays = animationDelays;
exports.animationDurations = animationDurations;
exports.animationEasings = animationEasings;
exports.cn = cn;
exports.darkTokens = darkTokens;
exports.default = tokens_default;
exports.generateTailwindClasses = generateTailwindClasses;
exports.getBrandColor = getBrandColor;
exports.getButtonPrimaryColor = getButtonPrimaryColor;
exports.getButtonPrimaryTextColor = getButtonPrimaryTextColor;
exports.getButtonSecondaryColor = getButtonSecondaryColor;
exports.getButtonTertiaryColor = getButtonTertiaryColor;
exports.getColorFromTheme = getColorFromTheme;
exports.getContrastColor = getContrastColor;
exports.getSemanticColorConstants = getSemanticColorConstants;
exports.getSemanticColors = getSemanticColors;
exports.getSemanticColorsSimplified = getSemanticColorsSimplified;
exports.getStatusColor = getStatusColor;
exports.getTheme = getTheme;
exports.getThemeColors = getThemeColors;
exports.getTokenColor = getTokenColor;
exports.isValidHex = isValidHex;
exports.lightTokens = lightTokens;
exports.motion = motion;
exports.motionPresets = motionPresets;
exports.motionSemantic = motionSemantic;
exports.motionTokens = motionTokens;
exports.overlayFromToken = overlayFromToken;
exports.tokenUtils = tokenUtils;
exports.tokens = tokens;
//# sourceMappingURL=tokens.js.map
//# sourceMappingURL=tokens.js.map