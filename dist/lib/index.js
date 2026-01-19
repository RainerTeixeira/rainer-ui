'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');

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
function getThemeColors(theme) {
  const tokenObj = designTokens.tokens;
  return tokenObj.themes?.[theme] || {};
}
function getTokenColor(tokenName, theme) {
  if (theme) {
    const themeColors = getThemeColors(theme);
    const colorValue = themeColors[tokenName];
    if (colorValue) {
      return colorValue;
    }
  }
  const tokenObj = designTokens.tokens;
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
  return themeData?.colors?.[status]?.base || "var(--color-black)";
}
function getButtonPrimaryColor(theme = "light") {
  const themeData = designTokens.themes[theme];
  return themeData?.colors?.primary?.base || "var(--color-cyan-600)";
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
  return themeData?.colors?.primary?.text || "var(--color-white)";
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

exports.ANIMATION_DELAYS = ANIMATION_DELAYS;
exports.ANIMATION_DURATIONS = ANIMATION_DURATIONS;
exports.ANIMATION_EASINGS = ANIMATION_EASINGS;
exports.COMPONENT_CLASSES = COMPONENT_CLASSES;
exports.GRADIENT_DIRECTIONS = GRADIENT_DIRECTIONS;
exports.MOTION = MOTION;
exports.SECTION_CLASSES = SECTION_CLASSES;
exports.Z_INDEX = Z_INDEX;
exports.cn = cn;
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
exports.getThemeColors = getThemeColors2;
exports.getTokenColor = getTokenColor;
exports.isValidHex = isValidHex;
exports.motion = motion;
exports.motionPresets = motionPresets;
exports.motionSemantic = motionSemantic;
exports.overlayFromToken = overlayFromToken;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map