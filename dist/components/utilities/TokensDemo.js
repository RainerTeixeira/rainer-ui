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
var TokensDemo_exports = {};
__export(TokensDemo_exports, {
  TokensDemo: () => TokensDemo
});
module.exports = __toCommonJS(TokensDemo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_card = require("../layout/card");
var import_react = require("react");
function TokensDemo() {
  const [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const neonCyan = "#60a5fa";
  const neonPurple = "#c084fc";
  const neonPink = "#ef4444";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-6 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.Card, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardTitle, { children: "Design Tokens - Cores" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-cyan-400/30",
              style: { backgroundColor: neonCyan }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-purple-400/30",
              style: { backgroundColor: neonPurple }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-pink-400/30",
              style: { backgroundColor: neonPink }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-muted-foreground", children: "Cores neon: Cyan, Purple, Pink" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.Card, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardTitle, { children: "Design Tokens - Espa\xE7amentos" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 bg-primary rounded", style: { width: "16px" } }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 bg-primary rounded", style: { width: "24px" } }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 bg-primary rounded", style: { width: "32px" } }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 bg-primary rounded", style: { width: "48px" } })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-muted-foreground", children: "Espa\xE7amentos: xs, sm, md, lg" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.Card, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardTitle, { children: "Design Tokens - Tipografia" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs", children: "Texto xs (12px)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm", children: "Texto sm (14px)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-base", children: "Texto base (16px)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-lg", children: "Texto lg (18px)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xl", children: "Texto xl (20px)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-muted-foreground", children: "Tamanhos de fonte dispon\xEDveis" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.Card, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardTitle, { children: "Design Tokens - Raios" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-4 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 bg-primary rounded-sm" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 bg-primary rounded" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 bg-primary rounded-md" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 bg-primary rounded-lg" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 bg-primary rounded-full" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-muted-foreground", children: "Raios: sm, default, md, lg, full" })
      ] })
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TokensDemo
});
//# sourceMappingURL=TokensDemo.js.map