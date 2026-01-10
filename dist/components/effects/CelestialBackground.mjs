"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { hexToRGBA } from "../../../lib/color-utils";
import { tokens } from "@rainersoft/design-tokens";
import { GRADIENT_DIRECTIONS } from "../../../lib/constants";
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
  return /* @__PURE__ */ jsx(
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
  const [stars, setStars] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const cyan400 = tokens?.primitives?.color?.blue?.[400] || "#60a5fa";
  const purple400 = tokens?.primitives?.color?.purple?.[400] || "#c084fc";
  const pink500 = tokens?.primitives?.color?.red?.[500] || "#ef4444";
  useEffect(() => {
    setStars(generateStars(config.count, [...config.sizes], [...config.opacity]));
    setIsMounted(true);
  }, [config.count, config.sizes, config.opacity]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-1000",
      style: {
        background: `
          radial-gradient(ellipse at top, ${hexToRGBA(cyan400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, ${hexToRGBA(purple400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, ${hexToRGBA(pink500, 0.05)} 0%, transparent 50%)
        `
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 ${GRADIENT_DIRECTIONS.TO_BOTTOM} from-black via-purple-950/35 to-black` }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(cyan400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(purple400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(pink500, 0.2)} 0%, transparent 70%)`
              }
            }
          )
        ] }),
        isMounted && stars.map((star) => /* @__PURE__ */ jsx(Star, { star }, star.id))
      ]
    }
  );
}
var CelestialBackground_default = CelestialBackground;
export {
  CelestialBackground,
  CelestialBackground_default as default
};
//# sourceMappingURL=CelestialBackground.mjs.map