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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  ANIMATION_DELAYS: () => import_utils.ANIMATION_DELAYS,
  ANIMATION_DURATIONS: () => import_utils.ANIMATION_DURATIONS,
  ANIMATION_EASINGS: () => import_utils.ANIMATION_EASINGS,
  SEMANTIC_COLORS: () => import_theme_utils.SEMANTIC_COLORS,
  cn: () => import_utils.cn,
  convertToWebP: () => import_image_utils.convertToWebP,
  darkTheme: () => import_design_tokens2.darkTheme,
  generatePlaceholder: () => import_image_utils.generatePlaceholder,
  generateTailwindClasses: () => import_theme_utils.generateTailwindClasses,
  getBrandColor: () => import_theme_utils.getBrandColor,
  getButtonPrimaryColor: () => import_theme_utils.getButtonPrimaryColor,
  getButtonPrimaryTextColor: () => import_theme_utils.getButtonPrimaryTextColor,
  getButtonSecondaryColor: () => import_theme_utils.getButtonSecondaryColor,
  getButtonTertiaryColor: () => import_theme_utils.getButtonTertiaryColor,
  getColorFromTheme: () => import_theme_utils.getColorFromTheme,
  getContrastColor: () => import_color_utils.getContrastColor,
  getImageInfo: () => import_image_utils.getImageInfo,
  getSemanticColors: () => import_theme_utils.getSemanticColors,
  getSemanticColorsSimplified: () => import_theme_utils.getSemanticColorsSimplified,
  getStatusColor: () => import_theme_utils.getStatusColor,
  getThemeColors: () => import_theme_utils.getThemeColors,
  getTokenColor: () => import_color_utils.getTokenColor,
  hexToRGB: () => import_color_utils.hexToRGB,
  hexToRGBA: () => import_color_utils.hexToRGBA,
  isAcceptedFormat: () => import_image_utils.isAcceptedFormat,
  isValidHex: () => import_color_utils.isValidHex,
  isWebP: () => import_image_utils.isWebP,
  lightTheme: () => import_design_tokens2.lightTheme,
  motion: () => import_utils.motion,
  motionPresets: () => import_utils.motionPresets,
  motionSemantic: () => import_utils.motionSemantic,
  overlayFromToken: () => import_color_utils.overlayFromToken,
  prepareImageForUpload: () => import_image_utils.prepareImageForUpload,
  resizeImage: () => import_image_utils.resizeImage,
  supportsWebP: () => import_image_utils.supportsWebP,
  tokens: () => import_design_tokens.tokens
});
module.exports = __toCommonJS(index_exports);
var import_design_tokens = require("@rainersoft/design-tokens");
var import_design_tokens2 = require("@rainersoft/design-tokens");
var import_image_utils = require("./lib/image-utils");
var import_utils = require("./lib/utils");
var import_color_utils = require("./lib/color-utils");
var import_theme_utils = require("./lib/theme-utils");
__reExport(index_exports, require("./components"), module.exports);
__reExport(index_exports, require("./hooks/use-mobile"), module.exports);
__reExport(index_exports, require("./hooks/use-pwa"), module.exports);
__reExport(index_exports, require("./hooks/use-theme"), module.exports);
__reExport(index_exports, require("./hooks/use-carousel-keyboard"), module.exports);
__reExport(index_exports, require("./hooks/use-table-of-contents"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  ANIMATION_EASINGS,
  SEMANTIC_COLORS,
  cn,
  convertToWebP,
  darkTheme,
  generatePlaceholder,
  generateTailwindClasses,
  getBrandColor,
  getButtonPrimaryColor,
  getButtonPrimaryTextColor,
  getButtonSecondaryColor,
  getButtonTertiaryColor,
  getColorFromTheme,
  getContrastColor,
  getImageInfo,
  getSemanticColors,
  getSemanticColorsSimplified,
  getStatusColor,
  getThemeColors,
  getTokenColor,
  hexToRGB,
  hexToRGBA,
  isAcceptedFormat,
  isValidHex,
  isWebP,
  lightTheme,
  motion,
  motionPresets,
  motionSemantic,
  overlayFromToken,
  prepareImageForUpload,
  resizeImage,
  supportsWebP,
  tokens,
  ...require("./components"),
  ...require("./hooks/use-mobile"),
  ...require("./hooks/use-pwa"),
  ...require("./hooks/use-theme"),
  ...require("./hooks/use-carousel-keyboard"),
  ...require("./hooks/use-table-of-contents")
});
//# sourceMappingURL=index.js.map