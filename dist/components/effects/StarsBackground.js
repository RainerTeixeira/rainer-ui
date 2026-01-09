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
var StarsBackground_exports = {};
__export(StarsBackground_exports, {
  StarsBackground: () => StarsBackground
});
module.exports = __toCommonJS(StarsBackground_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_next_themes = require("next-themes");
var import_react = require("react");
function StarsBackground() {
  const { resolvedTheme } = (0, import_next_themes.useTheme)();
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const [stars, setStars] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  (0, import_react.useEffect)(() => {
    if (!mounted) return;
    const starsCount = 150;
    const newStars = Array.from({ length: starsCount }, (_, i) => {
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      const randomSize = Math.random() * 2 + 0.5;
      const randomDelay = Math.random() * 3;
      const randomOpacity = 0.6 + Math.random() * 0.4;
      return {
        id: i,
        left: randomLeft,
        top: randomTop,
        size: randomSize,
        delay: randomDelay,
        opacity: randomOpacity
      };
    });
    setStars(newStars);
  }, [mounted]);
  if (!mounted) {
    return null;
  }
  if (resolvedTheme !== "dark") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        style: { zIndex: 0 },
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: "absolute rounded-full",
            style: {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              // Usa token dedicado de efeito para a cor das estrelas
              backgroundColor: "var(--effect-star-color)",
              boxShadow: `0 0 ${star.size * 2}px var(--effect-star-color)`,
              animation: "starTwinkle 3s ease-in-out infinite",
              animationDelay: `${star.delay}s`
            }
          },
          star.id
        )) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        /* Anima\xE7\xE3o de brilho das estrelas */
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      ` })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StarsBackground
});
//# sourceMappingURL=StarsBackground.js.map