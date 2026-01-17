'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function hexToRGBA(hex, alpha = 1) {
  const cleanHex = hex.replace("#", "");
  alpha = Math.max(0, Math.min(1, alpha));
  if (!/^[0-9A-F]{6}$/i.test(cleanHex)) {
    return "rgb(0, 0, 0)";
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  if (alpha === 1) {
    return `rgb(${r}, ${g}, ${b})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// src/lib/constants.ts
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM: "to-b"};
var TokensContext = React__namespace.createContext(null);
function useTokens() {
  const context = React__namespace.useContext(TokensContext);
  if (!context) {
    throw new Error(
      "useTokens deve ser usado dentro de <TokensProvider tokens={...}>. Adicione o provedor na raiz do app ou Storybook para compartilhar os design tokens oficiais."
    );
  }
  return context;
}
var STAR_CONFIGS = {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: `absolute rounded-full bg-white ${star.twinkle ? "animate-pulse" : ""}`,
      style
    }
  );
}
function CelestialBackground({
  variant = "default",
  colors
} = {}) {
  const config = STAR_CONFIGS[variant];
  const [stars, setStars] = React.useState([]);
  const [isMounted, setIsMounted] = React.useState(false);
  const { getColor } = useTokens();
  const cyan400 = colors?.cyan ?? getColor("primitives.colors.cyan.400", "#22d3ee");
  const purple400 = colors?.purple ?? getColor("primitives.colors.purple.400", "#a855f7");
  const pink500 = colors?.pink ?? getColor("primitives.colors.pink.500", "#ec4899");
  React.useEffect(() => {
    setStars(generateStars(config.count, [...config.sizes], [...config.opacity]));
    setIsMounted(true);
  }, [config.count, config.sizes, config.opacity]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: `absolute inset-0 ${GRADIENT_DIRECTIONS.TO_BOTTOM} from-black via-purple-950/35 to-black` }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(cyan400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(purple400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(pink500, 0.2)} 0%, transparent 70%)`
              }
            }
          )
        ] }),
        isMounted && stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(Star, { star }, star.id))
      ]
    }
  );
}
var CelestialBackground_default = CelestialBackground;

exports.CelestialBackground = CelestialBackground;
exports.default = CelestialBackground_default;
//# sourceMappingURL=CelestialBackground.js.map
//# sourceMappingURL=CelestialBackground.js.map