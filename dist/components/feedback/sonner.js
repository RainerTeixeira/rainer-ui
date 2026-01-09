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
var sonner_exports = {};
__export(sonner_exports, {
  Toaster: () => Toaster
});
module.exports = __toCommonJS(sonner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_utils = require("../../lib/utils");
var import_lucide_react = require("lucide-react");
var import_next_themes = require("next-themes");
var import_sonner = require("sonner");
const Toaster = ({ ...props }) => {
  const { theme = "system" } = (0, import_next_themes.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_sonner.Toaster,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }),
        info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Info, { className: "h-4 w-4" }),
        warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.AlertTriangle, { className: "h-4 w-4" }),
        error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Octagon, { className: "h-4 w-4" }),
        loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, { className: "h-4 w-4 animate-spin" })
      },
      toastOptions: {
        classNames: {
          toast: (0, import_utils.cn)(
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border shadow-lg",
            "dark:group-[.toaster]:bg-background dark:group-[.toaster]:border-border"
          ),
          title: "dark:text-foreground",
          description: "group-[.toast]:text-muted-foreground dark:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: "dark:bg-status-error-background dark:border-status-error-border",
          success: "dark:bg-status-success-background dark:border-status-success-border"
        }
      },
      ...props
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toaster
});
//# sourceMappingURL=sonner.js.map