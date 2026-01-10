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
var CelestialBackground_exports = {};
__export(CelestialBackground_exports, {
  CelestialBackground: () => CelestialBackground,
  default: () => CelestialBackground_default
});
module.exports = __toCommonJS(CelestialBackground_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_color_utils = require("../../../lib/color-utils");
var import_design_tokens = require("@rainersoft/design-tokens");
var import_constants = require("../../../lib/constants");
const STAR_CONFIGS = {
  default: {
    count: 150,
    sizes: [1, 2, 3],
    opacity: [0.3, 0.5, 0.7, 0.9]
  },
  dense: {
    count: 300,
    sizes: [1, 2, 3, 4],
    opacity: [0.2, 0.4, 0.6, 0.8]
  },
  sparse: {
    count: 75,
    sizes: [2, 3, 4],
    opacity: [0.4, 0.6, 0.8]
  }
};
function generateStars(count, sizes, opacity) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      opacity: opacity[Math.floor(Math.random() * opacity.length)],
      twinkle: Math.random() > 0.8
    });
  }
  return stars;
}
function Star({ star }) {
  const style = {
    left: `${star.x}%`,
    top: `${star.y}%`,
    width: `${star.size}px`,
    height: `${star.size}px`,
    opacity: star.opacity
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `absolute rounded-full bg-white ${star.twinkle ? "animate-pulse" : ""}`,
      style
    }
  );
}
function CelestialBackground({
  variant = "default"
} = {}) {
  const config = STAR_CONFIGS[variant];
  const [stars, setStars] = (0, import_react.useState)([]);
  const [isMounted, setIsMounted] = (0, import_react.useState)(false);
  const cyan400 = import_design_tokens.tokens?.primitives?.color?.blue?.[400] || "#60a5fa";
  const purple400 = import_design_tokens.tokens?.primitives?.color?.purple?.[400] || "#c084fc";
  const pink500 = import_design_tokens.tokens?.primitives?.color?.red?.[500] || "#ef4444";
  (0, import_react.useEffect)(() => {
    setStars(generateStars(config.count, [...config.sizes], [...config.opacity]));
    setIsMounted(true);
  }, [config.count, config.sizes, config.opacity]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-1000",
      style: {
        background: `
          radial-gradient(ellipse at top, ${(0, import_color_utils.hexToRGBA)(cyan400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, ${(0, import_color_utils.hexToRGBA)(purple400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, ${(0, import_color_utils.hexToRGBA)(pink500, 0.05)} 0%, transparent 50%)
        `
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 ${import_constants.GRADIENT_DIRECTIONS.TO_BOTTOM} from-black via-purple-950/35 to-black` }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${(0, import_color_utils.hexToRGBA)(cyan400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${(0, import_color_utils.hexToRGBA)(purple400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15",
              style: {
                background: `radial-gradient(circle, ${(0, import_color_utils.hexToRGBA)(pink500, 0.2)} 0%, transparent 70%)`
              }
            }
          )
        ] }),
        isMounted && stars.map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { star }, star.id))
      ]
    }
  );
}
var CelestialBackground_default = CelestialBackground;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CelestialBackground
});
//# sourceMappingURL=CelestialBackground.js.map