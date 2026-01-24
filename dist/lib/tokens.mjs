import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';

var tokens = tokensData;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var Z_INDEX = {
  base: String(tokens.primitives?.zIndex?.base ?? 100),
  navigation: String(tokens.primitives?.zIndex?.content ?? 150),
  dropdown: String(tokens.primitives?.zIndex?.dropdown ?? 300),
  modal: String(tokens.primitives?.zIndex?.modal ?? 400),
  overlay: String(tokens.primitives?.zIndex?.overlay ?? 400),
  sticky: String(tokens.primitives?.zIndex?.sticky ?? 200),
  fixed: String(tokens.primitives?.zIndex?.fixed ?? 300),
  tooltip: String(tokens.primitives?.zIndex?.tooltip ?? 500)
};
var motionTokens = tokens.primitives?.motion ?? {};
var animationDelays = motionTokens.delay ?? {};
var animationDurations = motionTokens.duration ?? {};
var animationEasings = motionTokens.easing ?? {};
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
    }
  },
  interaction: {
    hover: {
      duration: fastDuration,
      easing: easeOut
    },
    focus: {
      duration: baseDuration,
      easing: easeInOut
    },
    active: {
      duration: fastDuration,
      easing: spring
    }
  },
  feedback: {
    success: {
      duration: slowDuration,
      easing: easeInOut
    },
    error: {
      duration: slowDuration,
      easing: spring
    },
    warning: {
      duration: slowDuration,
      easing: easeOut
    }
  },
  navigation: {
    page: {
      duration: slowDuration,
      easing: easeOut
    },
    modal: {
      duration: baseDuration,
      easing: easeInOut
    }
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
  return getTheme(theme)?.colors ?? {};
}
function getSemanticColors(theme) {
  return {
    colors: getThemeColors(theme)
  };
}
function getStatusColor(status, theme = "light") {
  return getThemeColors(theme)?.[status]?.base ?? "var(--color-black)";
}
function getButtonPrimaryColor(theme = "light") {
  return getThemeColors(theme)?.primary?.base ?? "var(--color-cyan-600)";
}
function getButtonSecondaryColor(theme = "light") {
  return getThemeColors(theme)?.secondary?.base ?? "var(--color-indigo-500)";
}
function getButtonPrimaryTextColor(theme = "light") {
  return getThemeColors(theme)?.primary?.text ?? "var(--color-white)";
}
function getColorFromTheme(theme, category, shade) {
  return getThemeColors(theme)?.[category]?.[shade];
}
function getBrandColor(variant, theme = "light") {
  return getThemeColors(theme)?.[variant]?.base;
}
function generateTailwindClasses(options) {
  return Object.entries(options).filter(([, value]) => Boolean(value)).map(([key, value]) => `${key}-${value}`).join(" ");
}
function getTokenColor(tokenName) {
  return `var(--${tokenName})`;
}
function overlayFromToken(tokenName, alpha = 0.08) {
  const normalized = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
  return `rgba(var(--${normalized}-rgb, 0 0 0), ${alpha})`;
}
function isValidHex(hex) {
  return /^#?[0-9A-Fa-f]{6}$/.test(hex);
}
function getContrastColor(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "var(--color-black)" : "var(--color-white)";
}
var lightTokens = tokens.themes?.light ?? {};
var darkTokens = tokens.themes?.dark ?? {};
var COMPONENT_CLASSES = tokens.semantics?.layoutClasses?.components ?? {};
var SECTION_CLASSES = tokens.semantics?.layoutClasses?.sections ?? {};
var GRADIENT_DIRECTIONS = tokens.primitives?.gradientDirections ?? {};

export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, GRADIENT_DIRECTIONS, MOTION, SECTION_CLASSES, Z_INDEX, animationDelays, animationDurations, animationEasings, cn, darkTokens, generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getColorFromTheme, getContrastColor, getSemanticColors, getStatusColor, getTheme, getThemeColors, getTokenColor, isValidHex, lightTokens, motion, motionPresets, motionSemantic, motionTokens, overlayFromToken, tokens };
//# sourceMappingURL=tokens.mjs.map
//# sourceMappingURL=tokens.mjs.map