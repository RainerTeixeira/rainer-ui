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
var BackToTop_exports = {};
__export(BackToTop_exports, {
  BackToTop: () => BackToTop,
  BackToTopButton: () => BackToTopButton
});
module.exports = __toCommonJS(BackToTop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_lucide_react = require("lucide-react");
var import_button = require("../ui/button");
var import_use_smooth_scroll = require("../../hooks/use-smooth-scroll");
const SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = (0, import_react.useState)(false);
  const { scrollToTop, reducedMotion } = (0, import_use_smooth_scroll.useSmoothScroll)();
  (0, import_react.useEffect)(() => {
    const handleScrollEvent = () => {
      setIsButtonVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_button.Button,
    {
      onClick: scrollToTop,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUp, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTopButton, {});
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BackToTop,
  BackToTopButton
});
//# sourceMappingURL=BackToTop.js.map