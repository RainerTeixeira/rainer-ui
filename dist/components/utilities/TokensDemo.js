'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var React = require('react');
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

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens.primitives.motion;
var motionSemantic = designTokens.tokens.semantics.motion || {
  transition: {
    default: {
      duration: motion.duration.normal,
      easing: motion.easing.easeInOut
    }
  },
  interaction: {
    hover: {
      duration: motion.duration.fast,
      easing: motion.easing.easeOut
    }
  },
  feedback: {
    success: {
      duration: motion.duration.slower,
      easing: motion.easing.spring
    }
  },
  navigation: {
    page: {
      duration: motion.duration.slow,
      easing: motion.easing.easeInOut
    }
  }
};
motion.delay;
motion.duration;
motion.easing;
({
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring
  },
  // Presets semânticos
  transition: motionSemantic.transition.default,
  interaction: motionSemantic.interaction.hover,
  feedback: motionSemantic.feedback.success,
  navigation: motionSemantic.navigation.page
});

// src/lib/constants.ts
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out"}};
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM_RIGHT: "to-br"};
var Card = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
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
    className: cn("flex flex-col space-y-1.5 p-6", className),
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
    className: cn("text-sm text-muted-foreground", className),
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
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "text-left bg-card/60 dark:bg-black/50",
      "backdrop-blur-xl",
      "rounded-2xl",
      "p-4 xs:p-5 sm:p-6 md:p-8",
      "border border-border/50 dark:border-cyan-400/20",
      "hover:border-primary/40 dark:hover:border-cyan-400/50",
      "hover:bg-card/80 dark:hover:bg-black/70",
      "hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-cyan-500/20",
      "h-full flex flex-col group",
      "relative overflow-hidden",
      `before:absolute before:inset-0 before:${GRADIENT_DIRECTIONS.TO_BOTTOM_RIGHT}`,
      "before:from-primary/0 before:via-primary/0 before:to-primary/0",
      "hover:before:from-primary/5 hover:before:via-transparent hover:before:to-primary/5",
      "dark:hover:before:from-cyan-400/5 dark:hover:before:via-transparent dark:hover:before:to-purple-400/5",
      "before:transition-all before:duration-500 before:ease-in-out before:pointer-events-none",
      MOTION.TRANSITION.DEFAULT,
      className
    ),
    ...props
  }
));
HighlightCard.displayName = "HighlightCard";
function TokensDemo() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const neonCyan = "#60a5fa";
  const neonPurple = "#c084fc";
  const neonPink = "#ef4444";
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
//# sourceMappingURL=TokensDemo.js.map
//# sourceMappingURL=TokensDemo.js.map