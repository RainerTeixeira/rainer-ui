"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var slider_exports = {};
__export(slider_exports, {
  Slider: () => Slider
});
module.exports = __toCommonJS(slider_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var SliderPrimitive = __toESM(require("@radix-ui/react-slider"));
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  SliderPrimitive.Root,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        SliderPrimitive.Track,
        {
          className: (0, import_utils.cn)(
            "relative h-2 w-full grow overflow-hidden bg-secondary rounded-full"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderPrimitive.Range, { className: "absolute h-full bg-primary" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        SliderPrimitive.Thumb,
        {
          className: (0, import_utils.cn)(
            "block h-5 w-5 border-2 border-primary bg-background ring-offset-background rounded-full transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none",
            "disabled:opacity-50"
          )
        }
      )
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Slider
});
//# sourceMappingURL=slider.js.map