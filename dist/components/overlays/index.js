"use client"
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var overlays_exports = {};
module.exports = __toCommonJS(overlays_exports);
__reExport(overlays_exports, require("./context-menu"), module.exports);
__reExport(overlays_exports, require("./dialog"), module.exports);
__reExport(overlays_exports, require("./dropdown-menu"), module.exports);
__reExport(overlays_exports, require("./hover-card"), module.exports);
__reExport(overlays_exports, require("./popover"), module.exports);
__reExport(overlays_exports, require("./tooltip"), module.exports);
__reExport(overlays_exports, require("./modal"), module.exports);
__reExport(overlays_exports, require("./drawer"), module.exports);
__reExport(overlays_exports, require("./lightbox"), module.exports);
__reExport(overlays_exports, require("./confirm-dialog"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./context-menu"),
  ...require("./dialog"),
  ...require("./dropdown-menu"),
  ...require("./hover-card"),
  ...require("./popover"),
  ...require("./tooltip"),
  ...require("./modal"),
  ...require("./drawer"),
  ...require("./lightbox"),
  ...require("./confirm-dialog")
});
//# sourceMappingURL=index.js.map