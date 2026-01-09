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
var progress_exports = {};
__export(progress_exports, {
  Progress: () => Progress
});
module.exports = __toCommonJS(progress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var ProgressPrimitive = __toESM(require("@radix-ui/react-progress"));
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
const Progress = React.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  ProgressPrimitive.Root,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ProgressPrimitive.Indicator,
      {
        className: (0, import_utils.cn)("h-full w-full flex-1 transition-all", "bg-primary"),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = "Progress";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Progress
});
//# sourceMappingURL=progress.js.map