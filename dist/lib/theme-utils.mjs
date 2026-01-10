"use client"
import { tokens } from "@rainersoft/design-tokens";
function getThemeColors(theme) {
  return tokens.themes[theme];
}
function getSemanticColors(theme) {
  return tokens.themes[theme];
}
function getSemanticColorsSimplified(theme) {
  const colors = tokens.themes[theme];
  return {
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      tertiary: colors.text.tertiary,
      disabled: colors.text.disabled,
      inverse: colors.text.inverse,
      link: colors.text.link || colors.interactive?.link?.default || colors.text.primary,
      linkHover: colors.text.linkHover || colors.interactive?.link?.hover || colors.text.primary
    },
    background: {
      primary: colors.background.primary,
      secondary: colors.background.secondary,
      tertiary: colors.background.tertiary,
      disabled: colors.background.disabled,
      overlay: colors.background.overlay
    },
    border: {
      default: colors.border.default,
      light: colors.border.light,
      medium: colors.border.medium || colors.border.default,
      dark: colors.border.dark || colors.border.default,
      focus: colors.border.focus || colors.border.default,
      error: colors.border.error || colors.border.default,
      success: colors.border.success || colors.border.default,
      warning: colors.border.warning || colors.border.default
    },
    button: colors.button,
    status: colors.status,
    interactive: colors.interactive || {},
    surface: colors.surface || {}
  };
}
function getStatusColor(status, theme = "light") {
  const colors = tokens.themes[theme];
  const statusColors = colors.status?.[status];
  if (typeof statusColors === "string") {
    return statusColors;
  }
  if (statusColors && typeof statusColors === "object" && "default" in statusColors) {
    return statusColors.default;
  }
  if (status === "success") return colors.status?.success?.default || "#22c55e";
  if (status === "error") return colors.status?.error?.default || "#ef4444";
  if (status === "warning") return colors.status?.warning?.default || "#f87171";
  return colors.status?.info?.default || "#0ea5e9";
}
function getButtonPrimaryColor(theme = "light") {
  const colors = tokens.themes[theme];
  const buttonPrimary = colors.button?.primary;
  if (typeof buttonPrimary === "string") {
    return buttonPrimary;
  }
  return buttonPrimary?.default || "#0ea5e9";
}
function getButtonSecondaryColor(theme = "light") {
  const colors = tokens.themes[theme];
  const buttonSecondary = colors.button?.secondary;
  if (typeof buttonSecondary === "string") {
    return buttonSecondary;
  }
  return buttonSecondary?.default || "#e5e7eb";
}
function getButtonTertiaryColor(theme = "light") {
  const colors = tokens.themes[theme];
  const buttonTertiary = colors.button?.tertiary;
  if (typeof buttonTertiary === "string") {
    return buttonTertiary;
  }
  return buttonTertiary?.default || "transparent";
}
function getButtonPrimaryTextColor(theme = "light") {
  const colors = tokens.themes[theme];
  const buttonPrimary = colors.button?.primary;
  if (typeof buttonPrimary === "string") {
    return "#ffffff";
  }
  return buttonPrimary?.text || "#ffffff";
}
function getColorFromTheme(theme, category, shade) {
  const colors = tokens.themes[theme];
  const colorCategory = colors[category];
  if (!colorCategory || typeof colorCategory !== "object") {
    return void 0;
  }
  const shadeValue = colorCategory[shade];
  if (typeof shadeValue === "string") {
    return shadeValue;
  }
  if (shadeValue && typeof shadeValue === "object" && "default" in shadeValue) {
    return shadeValue.default;
  }
  return void 0;
}
function getBrandColor(variant, theme = "light") {
  const colors = tokens.themes[theme];
  const button = colors.button || {};
  if (variant === "primary") {
    const primary = button.primary;
    return typeof primary === "string" ? primary : primary?.default;
  } else if (variant === "secondary") {
    const secondary = button.secondary;
    return typeof secondary === "string" ? secondary : secondary?.default;
  } else if (variant === "tertiary" && button.tertiary) {
    const tertiary = button.tertiary;
    return typeof tertiary === "string" ? tertiary : tertiary?.default;
  }
  return void 0;
}
const SEMANTIC_COLORS = {
  light: getSemanticColorsSimplified("light"),
  dark: getSemanticColorsSimplified("dark")
};
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
export {
  SEMANTIC_COLORS,
  generateTailwindClasses,
  getBrandColor,
  getButtonPrimaryColor,
  getButtonPrimaryTextColor,
  getButtonSecondaryColor,
  getButtonTertiaryColor,
  getColorFromTheme,
  getSemanticColors,
  getSemanticColorsSimplified,
  getStatusColor,
  getThemeColors
};
//# sourceMappingURL=theme-utils.mjs.map