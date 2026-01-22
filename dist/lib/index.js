'use strict';

require('@rainersoft/design-tokens/formats/css-vars.css');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

var tokens = {};
var tokensWithThemes = tokens;
var lightTokens = tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens;
var darkTokens = tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var layoutClassesSemantic = tokens.semantics?.layoutClasses ?? {};
var COMPONENT_CLASSES = layoutClassesSemantic.components ?? {};
var SECTION_CLASSES = layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens.primitives?.zIndex ?? {};
var zIndexTokens = {
  ...zIndexPrimitive,
  ...zIndexSemantic
};
var Z_INDEX = {
  BACKDROP: String(zIndexTokens.overlay ?? zIndexTokens.modal ?? 400),
  MODAL: String(zIndexTokens.modal ?? 400),
  DROPDOWN: String(zIndexTokens.dropdown ?? 300),
  TOOLTIP: String(zIndexTokens.tooltip ?? 500),
  NAVIGATION: String(zIndexTokens.content ?? zIndexTokens.base ?? 100),
  OVERLAY: String(zIndexTokens.overlay ?? 400),
  STICKY: String(zIndexTokens.sticky ?? zIndexTokens.fixed ?? 200),
  FIXED: String(zIndexTokens.fixed ?? 300)
};
var GRADIENT_DIRECTIONS = tokens.primitives?.gradientDirections ?? {};
var motionClasses = tokens.semantics?.motionClasses ?? {};
var MOTION = {
  TRANSITION: {
    DEFAULT: motionClasses.transition?.default,
    FAST: motionClasses.transition?.fast,
    SLOW: motionClasses.transition?.slow,
    COLOR: motionClasses.transition?.color,
    TRANSFORM: motionClasses.transition?.transform,
    OPACITY: motionClasses.transition?.opacity
  }
};
var motionTokens = tokens.MOTION ?? tokens.motionTokens ?? tokens.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens.semantics?.motion ?? {};
var motionSemantic = motionSemanticTokens;
var ANIMATION_DELAYS = motion?.delay ?? {};
var ANIMATION_DURATIONS = motion?.duration ?? {};
var ANIMATION_EASINGS = motion?.easing ?? {};
var safeMotionDuration = ANIMATION_DURATIONS;
var safeMotionEasing = ANIMATION_EASINGS;
var defaultDuration = safeMotionDuration?.normal ?? safeMotionDuration?.default;
var fastDuration = safeMotionDuration?.fast ?? defaultDuration;
var slowDuration = safeMotionDuration?.slow ?? defaultDuration;
var easeInOut = safeMotionEasing?.easeInOut ?? safeMotionEasing?.default;
var easeOut = safeMotionEasing?.easeOut ?? easeInOut;
var spring = safeMotionEasing?.spring ?? easeInOut;
var motionSemanticTyped = motionSemantic;
var motionPresets = {
  default: {
    duration: defaultDuration,
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
    duration: defaultDuration,
    easing: spring
  },
  // Presets semânticos
  semantic: {
    transition: motionSemanticTyped.transition?.default,
    interaction: motionSemanticTyped.interaction?.hover,
    feedback: motionSemanticTyped.feedback?.success,
    navigation: motionSemanticTyped.navigation?.page
  }
};
function getThemeColors(theme) {
  const tokenObj = tokens;
  return tokenObj.themes?.[theme] || {};
}
function getSemanticColors(theme) {
  return getThemeColors(theme);
}
function getSemanticColorsSimplified(theme) {
  const themeData = getThemeColors(theme);
  return {
    colors: themeData?.colors || {}
  };
}
function getStatusColor(status, theme = "light") {
  const themeData = getThemeColors(theme);
  return themeData?.colors?.[status]?.base || "var(--color-black)";
}
function getButtonPrimaryColor(theme = "light") {
  const themeData = getThemeColors(theme);
  return themeData?.colors?.primary?.base || "var(--color-cyan-600)";
}
function getButtonSecondaryColor(theme = "light") {
  const themeData = getThemeColors(theme);
  return themeData?.colors?.secondary?.base || "#6366f1";
}
function getButtonTertiaryColor(_theme = "light") {
  return "transparent";
}
function getButtonPrimaryTextColor(theme = "light") {
  const themeData = getThemeColors(theme);
  return themeData?.colors?.primary?.text || "var(--color-white)";
}
function getColorFromTheme(theme, category, shade) {
  const themeData = getThemeColors(theme);
  return themeData?.colors?.[category]?.[shade];
}
function getBrandColor(variant, theme = "light") {
  const themeData = getThemeColors(theme);
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
function getTokenColor(tokenName, theme) {
  if (theme) {
    const themeColors = getThemeColors(theme);
    const colorValue = themeColors[tokenName];
    if (colorValue) {
      return colorValue;
    }
  }
  const tokenObj = tokens;
  const semanticTokens = tokenObj.semantics;
  const colorTokens = semanticTokens.color;
  const colorRoles = colorTokens["color-roles"];
  if (colorRoles?.[tokenName]) {
    return `var(--${tokenName})`;
  }
  const primitiveTokens = tokenObj.primitives;
  const colorPrimitives = primitiveTokens.color;
  if (colorPrimitives?.[tokenName]) {
    return `var(--${tokenName})`;
  }
  return `var(--${tokenName})`;
}
function overlayFromToken(tokenName, alpha = 0.08, theme) {
  const cleanName = tokenName.replace(/^color-/, "");
  if (theme) {
    const hexColor = getTokenColor(cleanName, theme);
    if (hexColor.startsWith("#")) {
      const varName2 = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
      return `rgba(var(--${varName2}-rgb, 0 0 0), ${alpha})`;
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
  return luminance > 0.5 ? "var(--color-black)" : "var(--color-white)";
}

exports.ANIMATION_DELAYS = ANIMATION_DELAYS;
exports.ANIMATION_DURATIONS = ANIMATION_DURATIONS;
exports.ANIMATION_EASINGS = ANIMATION_EASINGS;
exports.COMPONENT_CLASSES = COMPONENT_CLASSES;
exports.GRADIENT_DIRECTIONS = GRADIENT_DIRECTIONS;
exports.MOTION = MOTION;
exports.SECTION_CLASSES = SECTION_CLASSES;
exports.Z_INDEX = Z_INDEX;
exports.cn = cn;
exports.darkTokens = darkTokens;
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
exports.getThemeColors = getThemeColors;
exports.getTokenColor = getTokenColor;
exports.isValidHex = isValidHex;
exports.lightTokens = lightTokens;
exports.motion = motion;
exports.motionPresets = motionPresets;
exports.motionSemantic = motionSemantic;
exports.overlayFromToken = overlayFromToken;
exports.tokens = tokens;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map