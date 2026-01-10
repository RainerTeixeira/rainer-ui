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
var constants_exports = {};
__export(constants_exports, {
  GRADIENT_DIRECTIONS: () => GRADIENT_DIRECTIONS,
  MOTION: () => MOTION,
  Z_INDEX: () => Z_INDEX
});
module.exports = __toCommonJS(constants_exports);
const Z_INDEX = {
  BACKDROP: "999",
  MODAL: "1000",
  DROPDOWN: "1050",
  TOOLTIP: "1100",
  NAVIGATION: "1200",
  OVERLAY: "1300",
  STICKY: "1400",
  FIXED: "1500"
};
const MOTION = {
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
const GRADIENT_DIRECTIONS = {
  TO_TOP: "to-t",
  TO_RIGHT: "to-r",
  TO_BOTTOM: "to-b",
  TO_LEFT: "to-l",
  TO_TOP_RIGHT: "to-tr",
  TO_TOP_LEFT: "to-tl",
  TO_BOTTOM_RIGHT: "to-br",
  TO_BOTTOM_LEFT: "to-bl"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GRADIENT_DIRECTIONS,
  MOTION,
  Z_INDEX
});
//# sourceMappingURL=constants.js.map