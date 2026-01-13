import { tokens } from '@rainersoft/design-tokens';

function getThemeColors(theme) {
  return tokens.themes[theme];
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
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
function hexToRGBA(hex, alpha = 1) {
  const rgb = hexToRGB(hex);
  return `rgba(${rgb}, ${alpha})`;
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

export { getContrastColor, getTokenColor, hexToRGB, hexToRGBA, isValidHex, overlayFromToken };
//# sourceMappingURL=color-utils.mjs.map
//# sourceMappingURL=color-utils.mjs.map