'use strict';

var React = require('react');
require('@rainersoft/design-tokens/formats/css-vars.css');
var tokens = require('@rainersoft/design-tokens');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

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
var tokens__default = /*#__PURE__*/_interopDefault(tokens);

var tokensWithThemes = tokens__default.default;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens__default.default;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var layoutClassesSemantic = tokens__default.default.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens__default.default.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens__default.default.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
tokens__default.default.primitives?.gradientDirections ?? {};
var motionClasses = tokens__default.default.semantics?.motionClasses ?? {};
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
var motionTokens = tokens__default.default.MOTION ?? tokens__default.default.motionTokens ?? tokens__default.default.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens__default.default.semantics?.motion ?? {};
var motionSemantic = motionSemanticTokens;
motion?.delay ?? {};
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
var Card = React__namespace.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      // Base styles
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      // Variant styles
      variant === "default" && "border-border bg-background dark:bg-black/40 dark:border-cyan-400/20",
      variant === "outline" && "border-2 border-border bg-transparent dark:border-cyan-400/30",
      variant === "elevated" && "border-border/50 shadow-lg dark:bg-black/60 dark:border-cyan-400/20 dark:shadow-cyan-500/10",
      variant === "glass" && "border-border/20 bg-background/80 backdrop-blur-md dark:bg-black/40 dark:border-cyan-400/30 dark:backdrop-blur-xl",
      // Transitions
      "transition-all duration-200",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "flex flex-col space-y-1.5 p-6",
      "dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      "dark:text-cyan-200 dark:font-mono",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground",
      "dark:text-cyan-400/80",
      className
    ),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "flex items-center p-6 pt-0",
      "dark:border-t dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function TokensDemo() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const neonCyan = "#60a5fa";
  const neonPurple = "var(--color-purple-400)";
  const neonPink = "var(--color-red-500)";
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-6 p-6", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Cores" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-cyan-400/30",
              style: { backgroundColor: neonCyan }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-purple-400/30",
              style: { backgroundColor: neonPurple }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-pink-400/30",
              style: { backgroundColor: neonPink }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Cores neon: Cyan, Purple, Pink" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Espa\xE7amentos" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "16px" } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "24px" } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "32px" } }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2 bg-primary rounded", style: { width: "48px" } })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Espa\xE7amentos: xs, sm, md, lg" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Tipografia" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs", children: "Texto xs (12px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm", children: "Texto sm (14px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-base", children: "Texto base (16px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-lg", children: "Texto lg (18px)" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xl", children: "Texto xl (20px)" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Tamanhos de fonte dispon\xEDveis" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Design Tokens - Raios" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-4 items-end", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-sm" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-md" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-lg" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-8 h-8 bg-primary rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: "Raios: sm, default, md, lg, full" })
      ] })
    ] })
  ] });
}

exports.TokensDemo = TokensDemo;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map