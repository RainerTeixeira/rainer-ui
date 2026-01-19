import { themes } from '@rainersoft/design-tokens';

function getThemeColors(theme) {
  return themes[theme];
}
function getSemanticColors(theme) {
  return themes[theme];
}
function getSemanticColorsSimplified(theme) {
  const themeData = themes[theme];
  return {
    colors: themeData?.colors || {}
  };
}
function getStatusColor(status, theme = "light") {
  const themeData = themes[theme];
  return themeData?.colors?.[status]?.base || "var(--color-black)";
}
function getButtonPrimaryColor(theme = "light") {
  const themeData = themes[theme];
  return themeData?.colors?.primary?.base || "var(--color-cyan-600)";
}
function getButtonSecondaryColor(theme = "light") {
  const themeData = themes[theme];
  return themeData?.colors?.secondary?.base || "#6366f1";
}
function getButtonTertiaryColor(theme = "light") {
  return "transparent";
}
function getButtonPrimaryTextColor(theme = "light") {
  const themeData = themes[theme];
  return themeData?.colors?.primary?.text || "var(--color-white)";
}
function getColorFromTheme(theme, category, shade) {
  const themeData = themes[theme];
  return themeData?.colors?.[category]?.[shade];
}
function getBrandColor(variant, theme = "light") {
  const themeData = themes[theme];
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

export { generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getButtonTertiaryColor, getColorFromTheme, getSemanticColorConstants, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getThemeColors };
//# sourceMappingURL=theme-utils.mjs.map
//# sourceMappingURL=theme-utils.mjs.map