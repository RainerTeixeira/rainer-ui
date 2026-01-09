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
var kbd_exports = {};
__export(kbd_exports, {
  Kbd: () => Kbd,
  KbdCombo: () => KbdCombo,
  KeyboardShortcuts: () => KeyboardShortcuts
});
module.exports = __toCommonJS(kbd_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const kbdVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded border font-mono text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground shadow-sm",
        outline: "border-border bg-transparent text-foreground",
        filled: "border-border bg-muted text-foreground",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        neon: "neon-border bg-background text-primary dark:shadow-glow-cyan"
      },
      size: {
        xs: "h-5 px-1.5 text-[10px]",
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-xs",
        lg: "h-8 px-3 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
);
const Kbd = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "kbd",
      {
        ref,
        className: (0, import_utils.cn)(kbdVariants({ variant, size }), className),
        ...props,
        children
      }
    );
  }
);
Kbd.displayName = "Kbd";
const KbdCombo = React.forwardRef(
  ({
    className,
    keys,
    separator = "+",
    size = "sm",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("flex items-center gap-1", className),
        ...props,
        children: keys.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(React.Fragment, { children: [
          index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground text-xs font-normal", children: separator }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { size, variant, children: key })
        ] }, index))
      }
    );
  }
);
KbdCombo.displayName = "KbdCombo";
const KeyboardShortcuts = {
  // Windows/Linux
  CtrlC: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "C"] }),
  CtrlV: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "V"] }),
  CtrlX: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "X"] }),
  CtrlZ: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "Z"] }),
  CtrlY: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "Y"] }),
  CtrlA: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "A"] }),
  CtrlS: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "S"] }),
  CtrlF: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "F"] }),
  CtrlP: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Ctrl", "P"] }),
  Delete: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "Delete" }),
  Enter: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "Enter" }),
  Esc: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "Esc" }),
  Space: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "Space" }),
  Tab: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "Tab" }),
  ShiftTab: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Shift", "Tab"] }),
  AltTab: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["Alt", "Tab"] }),
  // macOS
  CmdC: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "C"] }),
  CmdV: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "V"] }),
  CmdX: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "X"] }),
  CmdZ: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "Z"] }),
  CmdShiftZ: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "Shift", "Z"] }),
  CmdA: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "A"] }),
  CmdS: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "S"] }),
  CmdF: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "F"] }),
  CmdP: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "P"] }),
  CmdSpace: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2318", "Space"] }),
  OptionTab: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KbdCombo, { keys: ["\u2325", "Tab"] }),
  // Setas
  ArrowUp: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "\u2191" }),
  ArrowDown: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "\u2193" }),
  ArrowLeft: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "\u2190" }),
  ArrowRight: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "\u2192" }),
  // Função
  F1: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F1" }),
  F2: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F2" }),
  F3: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F3" }),
  F4: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F4" }),
  F5: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F5" }),
  F6: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F6" }),
  F7: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F7" }),
  F8: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F8" }),
  F9: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F9" }),
  F10: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F10" }),
  F11: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F11" }),
  F12: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "F12" })
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Kbd,
  KbdCombo,
  KeyboardShortcuts
});
//# sourceMappingURL=kbd.js.map