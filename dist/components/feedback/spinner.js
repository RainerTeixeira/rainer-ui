'use strict';

var lucideReact = require('lucide-react');
var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
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
var spinnerVariants = classVarianceAuthority.cva(
  "animate-spin text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        primary: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
        success: "text-emerald-600 dark:text-emerald-500",
        warning: "text-amber-600 dark:text-amber-500",
        glow: "text-primary dark:text-cyan-400",
        pulse: "animate-pulse",
        dots: "animate-bounce"
      },
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
        "2xl": "h-12 w-12",
        "3xl": "h-16 w-16"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var speedClasses = {
  slow: "animate-spin-slow",
  normal: "animate-spin",
  fast: "animate-spin-fast"
};
var Spinner = React__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    label = "Carregando...",
    showLabel = false,
    labelPosition = "bottom",
    icon,
    speed = "normal",
    ...props
  }, ref) => {
    const IconComponent = icon || /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: spinnerVariants({ variant, size }) });
    const animationClass = variant === "pulse" ? "animate-pulse" : variant === "dots" ? "animate-bounce" : speedClasses[speed];
    const layoutClasses = {
      top: "flex-col-reverse",
      bottom: "flex-col",
      left: "flex-row-reverse",
      right: "flex-row"
    }[labelPosition];
    const spacingClasses = {
      top: "gap-1",
      bottom: "gap-1",
      left: "gap-2",
      right: "gap-2"
    }[labelPosition];
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          "inline-flex items-center justify-center",
          layoutClasses,
          spacingClasses,
          className
        ),
        role: "status",
        "aria-label": label,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(animationClass), children: IconComponent }),
          showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
            "text-sm text-muted-foreground",
            (labelPosition === "top" || labelPosition === "bottom") && "text-center",
            variant === "glow" && "text-primary dark:text-cyan-400"
          ), children: label }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: label })
        ]
      }
    );
  }
);
Spinner.displayName = "Spinner";
var SpinnerOverlay = React__namespace.forwardRef(
  ({
    className,
    fullscreen = false,
    overlayColor = "rgba(0, 0, 0, 0.5)",
    opacity = 0.5,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center",
          fullscreen ? "fixed inset-0 z-50" : "absolute inset-0 z-10",
          className
        ),
        style: {
          backgroundColor: overlayColor.replace(/[\d.]+\)$/, `${opacity})`)
        },
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-background rounded-lg p-4 shadow-lg", children: /* @__PURE__ */ jsxRuntime.jsx(Spinner, { ...props, showLabel: true }) })
      }
    );
  }
);
SpinnerOverlay.displayName = "SpinnerOverlay";
var dotSizeClasses = {
  sm: "h-1 w-1",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
var DotsSpinner = React__namespace.forwardRef(
  ({
    className,
    count = 3,
    size = "md",
    color,
    label,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1", className),
        role: "status",
        "aria-label": label || "Carregando...",
        ...props,
        children: [
          Array.from({ length: count }, (_, index) => /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "rounded-full bg-current",
                dotSizeClasses[size],
                "animate-bounce"
              ),
              style: {
                color: color || "hsl(var(--muted-foreground))",
                animationDelay: `${index * 0.1}s`,
                animationDuration: "0.6s"
              }
            },
            index
          )),
          label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-2 text-sm text-muted-foreground", children: label })
        ]
      }
    );
  }
);
DotsSpinner.displayName = "DotsSpinner";
var pulseSizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20"
};
var PulseSpinner = React__namespace.forwardRef(
  ({
    className,
    rings = 3,
    size = "md",
    color,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("relative flex items-center justify-center", className),
        ...props,
        children: Array.from({ length: rings }, (_, index) => /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "absolute rounded-full border-2 border-current opacity-0",
              pulseSizeClasses[size]
            ),
            style: {
              color: color || "hsl(var(--primary))",
              animation: `ping ${1.5 + index * 0.3}s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${index * 0.2}s`
            }
          },
          index
        ))
      }
    );
  }
);
PulseSpinner.displayName = "PulseSpinner";

exports.DotsSpinner = DotsSpinner;
exports.PulseSpinner = PulseSpinner;
exports.Spinner = Spinner;
exports.SpinnerOverlay = SpinnerOverlay;
//# sourceMappingURL=spinner.js.map
//# sourceMappingURL=spinner.js.map