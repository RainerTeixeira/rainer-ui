"use client"
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var color_utils_exports = {};
__export(color_utils_exports, {
  getContrastColor: () => getContrastColor,
  getTokenColor: () => getTokenColor,
  hexToRGB: () => hexToRGB,
  hexToRGBA: () => hexToRGBA,
  isValidHex: () => isValidHex,
  overlayFromToken: () => overlayFromToken
});
module.exports = __toCommonJS(color_utils_exports);
var import_design_tokens = require("@rainersoft/design-tokens");
function getTokenColor(tokenName, theme) {
  if (theme) {
    const themeColors = import_design_tokens.tokens.themes[theme];
    const searchPaths = [
      themeColors.button?.primary?.default,
      themeColors.text?.primary,
      themeColors.background?.primary,
      themeColors.border?.default,
      themeColors.status?.success?.default,
      themeColors.status?.error?.default,
      themeColors.status?.warning?.default,
      themeColors.status?.info?.default
    ];
    for (const value of searchPaths) {
      if (typeof value === "string" && value.startsWith("#")) {
        return value;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getContrastColor,
  getTokenColor,
  hexToRGB,
  hexToRGBA,
  isValidHex,
  overlayFromToken
});
//# sourceMappingURL=color-utils.js.map