"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "../layout/card";
import { useEffect, useState } from "react";
function TokensDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const neonCyan = "#60a5fa";
  const neonPurple = "#c084fc";
  const neonPink = "#ef4444";
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Cores" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-cyan-400/30",
              style: { backgroundColor: neonCyan }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-purple-400/30",
              style: { backgroundColor: neonPurple }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-pink-400/30",
              style: { backgroundColor: neonPink }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Cores neon: Cyan, Purple, Pink" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Espa\xE7amentos" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "16px" } }),
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "24px" } }),
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "32px" } }),
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "48px" } })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Espa\xE7amentos: xs, sm, md, lg" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Tipografia" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs", children: "Texto xs (12px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Texto sm (14px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-base", children: "Texto base (16px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg", children: "Texto lg (18px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-xl", children: "Texto xl (20px)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Tamanhos de fonte dispon\xEDveis" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Raios" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-end", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-sm" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-md" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-lg" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-full" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Raios: sm, default, md, lg, full" })
      ] })
    ] })
  ] });
}
export {
  TokensDemo
};
//# sourceMappingURL=TokensDemo.mjs.map