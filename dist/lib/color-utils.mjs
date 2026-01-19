import { tokens } from '@rainersoft/design-tokens';

function getThemeColors(theme) {
  const tokenObj = tokens;
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

export { getContrastColor, getTokenColor, isValidHex, overlayFromToken };
//# sourceMappingURL=color-utils.mjs.map
//# sourceMappingURL=color-utils.mjs.map