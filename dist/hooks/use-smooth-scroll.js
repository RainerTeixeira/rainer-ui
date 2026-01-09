"use client"
"use client";
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
var use_smooth_scroll_exports = {};
__export(use_smooth_scroll_exports, {
  useSmoothScroll: () => useSmoothScroll
});
module.exports = __toCommonJS(use_smooth_scroll_exports);
var import_scroll_utils = require("../lib/scroll-utils");
var import_react = require("react");
function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setReducedMotion((0, import_scroll_utils.prefersReducedMotion)());
    const cleanup = (0, import_scroll_utils.onReducedMotionChange)((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = (0, import_react.useCallback)(
    (target, options) => {
      (0, import_scroll_utils.smoothScrollTo)(target, options);
    },
    []
  );
  const toTop = (0, import_react.useCallback)(() => {
    (0, import_scroll_utils.scrollToTop)();
  }, []);
  const toPosition = (0, import_react.useCallback)((top, left = 0) => {
    (0, import_scroll_utils.scrollToPosition)(left, top);
  }, []);
  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useSmoothScroll
});
//# sourceMappingURL=use-smooth-scroll.js.map