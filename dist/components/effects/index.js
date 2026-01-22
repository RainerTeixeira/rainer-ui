'use strict';

var react = require('react');
require('@rainersoft/design-tokens/formats/css-vars.css');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var nextThemes = require('next-themes');

var tokens = {};
var tokensWithThemes = tokens;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var layoutClassesSemantic = tokens.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
var GRADIENT_DIRECTIONS = tokens.primitives?.gradientDirections ?? {};
var motionClasses = tokens.semantics?.motionClasses ?? {};
({
  TRANSITION: {
    DEFAULT: motionClasses.transition?.default,
    FAST: motionClasses.transition?.fast,
    SLOW: motionClasses.transition?.slow,
    COLOR: motionClasses.transition?.color,
    TRANSFORM: motionClasses.transition?.transform,
    OPACITY: motionClasses.transition?.opacity
  }
});
var motionTokens = tokens.MOTION ?? tokens.motionTokens ?? tokens.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens.semantics?.motion ?? {};
var motionSemantic = motionSemanticTokens;
var ANIMATION_DELAYS = motion?.delay ?? {};
var ANIMATION_DURATIONS = motion?.duration ?? {};
var ANIMATION_EASINGS = motion?.easing ?? {};
var safeMotionDuration = ANIMATION_DURATIONS;
var safeMotionEasing = ANIMATION_EASINGS;
var defaultDuration = safeMotionDuration?.normal ?? safeMotionDuration?.default;
safeMotionDuration?.fast ?? defaultDuration;
safeMotionDuration?.slow ?? defaultDuration;
var easeInOut = safeMotionEasing?.easeInOut ?? safeMotionEasing?.default;
safeMotionEasing?.easeOut ?? easeInOut;
safeMotionEasing?.spring ?? easeInOut;
var motionSemanticTyped = motionSemantic;
({
  // Presets semânticos
  semantic: {
    transition: motionSemanticTyped.transition?.default,
    interaction: motionSemanticTyped.interaction?.hover,
    feedback: motionSemanticTyped.feedback?.success,
    navigation: motionSemanticTyped.navigation?.page
  }
});
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
  variant = "default"
}) {
  const config = STAR_CONFIGS[variant];
  const [stars, setStars] = react.useState([]);
  const [isMounted, setIsMounted] = react.useState(false);
  react.useEffect(() => {
    setStars(generateStars(config.count, [...config.sizes], [...config.opacity]));
    setIsMounted(true);
  }, [config.count, config.sizes, config.opacity]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-1000",
      style: {
        background: `
          radial-gradient(ellipse at top, var(--color-cyan-400) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, var(--color-purple-500) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
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
                background: `radial-gradient(circle, var(--color-cyan-400) 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, var(--color-purple-500) 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15",
              style: {
                background: `radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)`
              }
            }
          )
        ] }),
        isMounted && stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(Star, { star }, star.id))
      ]
    }
  );
}
function FloatingGrid({
  variant = "default",
  intensity = 0.5
} = {}) {
  const canvasRef = react.useRef(null);
  const { theme } = nextThemes.useTheme();
  const [mounted, setMounted] = react.useState(false);
  react.useEffect(() => {
    setMounted(true);
  }, []);
  react.useEffect(() => {
    if (!mounted || theme !== "dark") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const gridConfig = {
      default: { spacing: 100, lineWidth: 0.5 },
      dense: { spacing: 60, lineWidth: 0.3 },
      sparse: { spacing: 150, lineWidth: 0.5 }
    };
    const config = gridConfig[variant];
    let animationFrame;
    let time = 0;
    const animate = () => {
      time += 0.01;
      const pulseIntensity = intensity * (0.8 + Math.sin(time) * 0.2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const strokeColor = `rgba(34, 211, 238, ${pulseIntensity * 1.2})`;
      const fillColor = `rgba(34, 211, 238, ${pulseIntensity * 0.6})`;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = config.lineWidth;
      for (let x = 0; x < canvas.width; x += config.spacing) {
        const offsetX = Math.sin(time + x * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += config.spacing) {
        const offsetY = Math.cos(time + y * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
        ctx.stroke();
      }
      ctx.fillStyle = fillColor;
      for (let x = 0; x < canvas.width; x += config.spacing) {
        for (let y = 0; y < canvas.height; y += config.spacing) {
          const size = 1 + Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [mounted, theme, variant, intensity]);
  if (!mounted || theme !== "dark") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 pointer-events-none opacity-30",
      style: { mixBlendMode: "screen" }
    }
  );
}
var MOBILE_BREAKPOINT = 640;
var TABLET_BREAKPOINT = 1024;
var BINARY_PATTERNS = [
  "0101",
  "1010",
  "0110",
  "1001",
  "0011",
  "1100",
  "1111",
  "0000",
  "1000",
  "0111",
  "1101",
  "0010",
  "0100",
  "1110",
  "1011",
  "0110",
  "0001",
  "1010",
  "1001",
  "0011",
  "0101",
  "0111",
  "0100",
  "1000",
  "1100",
  "0011",
  "1001",
  "0110",
  "1010",
  "0101",
  "0000",
  "1111",
  "0010",
  "1101",
  "0111",
  "1000"
];
function generateCharacters(count) {
  return Array.from({ length: count }).map((_, idx) => {
    if (idx === 0) return Math.random() > 0.5 ? "1" : "0";
    const pattern = BINARY_PATTERNS[Math.floor(Math.random() * BINARY_PATTERNS.length)] || "0101";
    return pattern[idx % pattern.length] || "0";
  });
}
function generateColumn(i, columnCount, isMobile, isTablet) {
  const randomId = Math.round(Math.random() * 1e4);
  const charactersCount = isMobile ? 12 + Math.floor(Math.random() * 8) : 15 + Math.floor(Math.random() * 12);
  return {
    id: `col-${i}-${randomId}`,
    leftPct: i / columnCount * 100,
    fontSize: isMobile ? 14 + Math.random() * 6 : isTablet ? 16 + Math.random() * 8 : 18 + Math.random() * 8,
    animationDuration: 6 + Math.random() * 4,
    // 6-10s para chuva devagar
    animationDelay: i / columnCount * 8,
    characters: generateCharacters(charactersCount)
  };
}
function MatrixBackgroundInner({ variant = "global" }) {
  const [matrixColumns, setMatrixColumns] = react.useState([]);
  const [isInitialized, setIsInitialized] = react.useState(false);
  const initializeMatrix = react.useCallback(() => {
    if (isInitialized || typeof window === "undefined") return;
    const width = window.innerWidth;
    const isMobile = width < MOBILE_BREAKPOINT;
    const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
    const columnCount = isMobile ? Math.min(18, Math.max(10, Math.floor(width / 35))) : isTablet ? Math.min(28, Math.max(16, Math.floor(width / 38))) : Math.min(40, Math.max(25, Math.floor(width / 40)));
    const initialColumns = Array.from({ length: columnCount }).map(
      (_, i) => generateColumn(i, columnCount, isMobile, isTablet)
    );
    setMatrixColumns(initialColumns);
    setIsInitialized(true);
  }, [isInitialized]);
  react.useEffect(() => {
    if (typeof window !== "undefined" && !isInitialized) {
      initializeMatrix();
    }
  }, [isInitialized, initializeMatrix]);
  if (!matrixColumns.length) return null;
  const positionClass = variant === "global" ? "fixed inset-0 -z-10" : "absolute inset-0";
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("style", { children: `
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%) translateZ(0);
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) translateZ(0);
            opacity: 0;
          }
        }
        .animate-matrix-fall {
          animation: matrix-fall 8s linear infinite;
          will-change: transform, opacity;
        }
      ` }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "pointer-events-none overflow-hidden select-none",
          positionClass
        ),
        style: {
          perspective: 1200,
          transformStyle: "preserve-3d"
        },
        "aria-hidden": "true",
        children: matrixColumns.map((column, columnIndex) => {
          const depthFactor = columnIndex % 8 - 4;
          const translateZ = depthFactor * 80;
          const scale = 1 + depthFactor * -0.07;
          const skewY = depthFactor * -3;
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "absolute top-[-110%] h-[220%]",
                "animate-matrix-fall"
              ),
              style: {
                left: `${column.leftPct}%`,
                fontSize: column.fontSize,
                animationDuration: `${column.animationDuration}s`,
                animationDelay: `${column.animationDelay}s`,
                transform: `translateZ(${translateZ}px) scale(${scale}) skewY(${skewY}deg)`,
                filter: "blur(0.3px)"
                // Leve blur para efeito mais suave
              },
              children: column.characters.map((ch, idx) => {
                const intensity = idx === 0 ? 100 : Math.max(30, 100 - idx * 5);
                const glowIntensity = idx === 0 ? 12 : Math.max(4, 12 - idx * 0.8);
                return /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    className: cn(
                      "block font-mono leading-tight",
                      idx === 0 && "font-bold"
                    ),
                    style: {
                      // Usa token dedicado de efeito para a chuva Matrix
                      color: "var(--effect-matrix-rain-color)",
                      opacity: intensity / 100,
                      textShadow: `
                        0 0 ${glowIntensity}px var(--effect-matrix-rain-color),
                        0 0 ${glowIntensity * 2}px var(--effect-matrix-rain-color),
                        0 0 ${glowIntensity * 3}px var(--effect-matrix-rain-color)
                      `,
                      filter: idx === 0 ? "brightness(1.4)" : "none"
                    },
                    children: ch
                  },
                  `${column.id}-${idx}`
                );
              })
            },
            column.id
          );
        })
      }
    )
  ] });
}
var MatrixBackground = react.memo(MatrixBackgroundInner);
function StarsBackground() {
  const { resolvedTheme } = nextThemes.useTheme();
  const [mounted, setMounted] = react.useState(false);
  const [stars, setStars] = react.useState([]);
  react.useEffect(() => {
    setMounted(true);
  }, []);
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        style: { zIndex: 0 },
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsx("style", { children: `
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
var PARTICLE_POSITIONS = {
  default: {
    particle1: "top-20 left-1/4",
    particle2: "top-40 right-1/3",
    particle3: "bottom-40 left-1/2"
  },
  alt1: {
    particle1: "top-24 left-1/5",
    particle2: "top-80 right-1/5",
    particle3: "bottom-80 left-1/3"
  },
  alt2: {
    particle1: "top-32 left-1/3",
    particle2: "top-60 right-1/4",
    particle3: "bottom-60 left-1/5"
  }
};
function ParticlesEffect({
  variant = "default"
} = {}) {
  const selectedPositions = PARTICLE_POSITIONS[variant];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 z-0",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle1} w-1 h-1 rounded-full animate-pulse opacity-40 bg-[var(--color-text-neon-cyan)]`
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle2} w-0.5 h-0.5 rounded-full animate-pulse opacity-30 bg-[var(--color-text-neon-purple)]`,
            style: {
              animationDelay: ANIMATION_DELAYS.short
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle3} w-0.5 h-0.5 rounded-full animate-pulse opacity-35 bg-[var(--color-text-neon-pink)]`,
            style: {
              animationDelay: ANIMATION_DELAYS.long
            }
          }
        )
      ]
    }
  );
}

exports.CelestialBackground = CelestialBackground;
exports.FloatingGrid = FloatingGrid;
exports.MatrixBackground = MatrixBackground;
exports.ParticlesEffect = ParticlesEffect;
exports.StarsBackground = StarsBackground;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map