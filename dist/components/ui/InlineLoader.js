'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens.MOTION || {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms"},
  easing: {
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    }
};
var motionSemantic = designTokens.tokens.MOTION || {
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
  semantic: {
    transition: motionSemantic.transition.default,
    interaction: motionSemantic.interaction.hover,
    feedback: motionSemantic.feedback.success,
    navigation: motionSemantic.navigation.page
  }
});
function InlineLoader({
  className,
  size = "sm",
  variant = "spinner"
}) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };
  if (variant === "dots") {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex items-center gap-1", className), "aria-label": "Carregando", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-75" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-150" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    lucideReact.Loader2,
    {
      className: cn("animate-spin", sizeClasses[size], className),
      "aria-label": "Carregando"
    }
  );
}

exports.InlineLoader = InlineLoader;
//# sourceMappingURL=InlineLoader.js.map
//# sourceMappingURL=InlineLoader.js.map