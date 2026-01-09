"use client"
"use client";
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
var ThemeToggle_exports = {};
__export(ThemeToggle_exports, {
  ThemeToggle: () => ThemeToggle
});
module.exports = __toCommonJS(ThemeToggle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
var import_use_theme = require("../../hooks/use-theme");
var import_utils = require("../../lib/utils");
function ThemeToggle({ className }) {
  const { toggle, isDark } = (0, import_use_theme.useTheme)();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const handleToggle = () => {
    toggle();
  };
  if (!mounted) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        className: (0, import_utils.cn)(
          // Layout base
          "inline-flex items-center justify-center rounded-md",
          "text-sm font-medium transition-colors duration-200",
          "h-9 w-9 relative",
          // Estados interativos
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Cores do tema - usando design tokens
          "bg-surface border border-border shadow-sm",
          "hover:bg-surface-hover",
          // Dark mode
          "dark:bg-surface-dark dark:border-border-dark",
          "dark:hover:bg-surface-hover-dark",
          className
        ),
        "aria-label": "Alternar tema",
        disabled: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1.2rem] w-[1.2rem]" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Alternar tema" })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      onClick: handleToggle,
      className: (0, import_utils.cn)(
        // Layout base
        "inline-flex items-center justify-center rounded-md",
        "text-sm font-medium transition-colors duration-200",
        "h-9 w-9 relative",
        // Estados interativos
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Cores do tema - usando design tokens
        "bg-surface border border-border shadow-sm",
        "hover:bg-surface-hover",
        // Dark mode
        "dark:bg-surface-dark dark:border-border-dark",
        "dark:hover:bg-surface-hover-dark",
        className
      ),
      "aria-label": isDark ? "Mudar para tema claro" : "Mudar para tema escuro",
      children: [
        isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_lucide_react.Moon,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-secondary",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_lucide_react.Sun,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-primary",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: isDark ? "Mudar para tema claro" : "Mudar para tema escuro" })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeToggle
});
//# sourceMappingURL=ThemeToggle.js.map