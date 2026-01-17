'use strict';

var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var framerMotion = require('framer-motion');
var Bookmark = require('lucide-react/dist/esm/icons/bookmark');

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
var Bookmark__default = /*#__PURE__*/_interopDefault(Bookmark);

// src/lib/utils.ts
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
var buttonVariants = classVarianceAuthority.cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
        neon: "relative bg-gradient-to-r from-neon-cyan to-cyan-600 border-2 border-neon-cyan text-gray-950 shadow-lg shadow-neon-cyan hover:shadow-neon-cyan hover:shadow-xl",
        glass: "relative bg-glass border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        xs: "h-7 px-2 text-xs rounded-md",
        sm: "h-8 px-3 text-sm rounded-md has-[>svg]:px-2",
        default: "h-9 px-4 py-2 rounded-md has-[>svg]:px-3",
        lg: "h-10 px-6 text-base rounded-lg has-[>svg]:px-4",
        xl: "h-12 px-8 text-lg rounded-lg has-[>svg]:px-5",
        icon: "size-9 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-lg",
        "icon-xl": "size-12 rounded-xl"
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95",
        glow: "hover:shadow-lg active:shadow-sm",
        bounce: "hover:animate-bounce",
        pulse: "hover:animate-pulse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale"
    }
  }
);
var ButtonComponent = React__namespace.forwardRef(
  ({
    className,
    variant,
    size,
    animation,
    asChild = false,
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;
    if (asChild) {
      const child = React__namespace.Children.only(children);
      return /* @__PURE__ */ jsxRuntime.jsx(
        reactSlot.Slot,
        {
          className: cn(
            buttonVariants({ variant, size, animation }),
            // Efeito neon especial
            variant === "neon" && [
              "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
              "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
              "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
              "before:transition-opacity after:transition-opacity",
              "before:duration-300 after:duration-300"
            ],
            className
          ),
          ref,
          "aria-busy": loading || void 0,
          ...props,
          children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex items-center gap-2", children: [
            loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            child
          ] }) : child
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        className: cn(
          buttonVariants({ variant, size, animation }),
          // Efeito neon especial
          variant === "neon" && [
            "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
            "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
            "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
            "before:transition-opacity after:transition-opacity",
            "before:duration-300 after:duration-300"
          ],
          className
        ),
        ref,
        disabled: isDisabled,
        "aria-busy": loading || void 0,
        ...props,
        children: [
          loading && (loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" })),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
function BookmarkButton({
  itemId,
  initialIsBookmarked = false,
  variant = "ghost",
  activeColor = "warning",
  size = "sm",
  showLabel = true,
  activeLabel = "Salvo",
  inactiveLabel = "Salvar",
  onBookmark,
  onUnbookmark,
  className
}) {
  const [isBookmarked, setIsBookmarked] = React.useState(initialIsBookmarked);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const handleBookmark = () => {
    setIsAnimating(true);
    console.debug(`A\xE7\xE3o de bookmark para o item: ${itemId}`);
    if (isBookmarked) {
      setIsBookmarked(false);
      onUnbookmark?.(itemId);
    } else {
      setIsBookmarked(true);
      onBookmark?.(itemId);
    }
    setTimeout(() => setIsAnimating(false), 600);
  };
  const getColorClasses = () => {
    const colorMap = {
      primary: "text-primary hover:text-primary/80",
      success: "text-emerald-500 hover:text-emerald-600",
      warning: "text-amber-500 hover:text-amber-600",
      error: "text-red-500 hover:text-red-600",
      info: "text-blue-500 hover:text-blue-600"
    };
    return colorMap[activeColor];
  };
  const getActiveBgClasses = () => {
    const bgMap = {
      primary: "bg-primary hover:bg-primary/90 text-primary-foreground border-primary",
      success: "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500",
      warning: "bg-amber-500 hover:bg-amber-600 text-white border-amber-500",
      error: "bg-red-500 hover:bg-red-600 text-white border-red-500",
      info: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
    };
    return bgMap[activeColor];
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      variant: isBookmarked && variant === "default" ? "default" : variant,
      size,
      onClick: handleBookmark,
      className: cn(
        "gap-2 transition-all",
        isBookmarked && variant === "ghost" && getColorClasses(),
        isBookmarked && variant === "default" && getActiveBgClasses(),
        className
      ),
      "aria-label": isBookmarked ? "Remover dos salvos" : "Salvar para ler depois",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            animate: isAnimating ? {
              scale: [1, 1.3, 1],
              rotate: [0, -15, 15, 0]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" },
            children: /* @__PURE__ */ jsxRuntime.jsx(
              Bookmark__default.default,
              {
                className: cn(
                  "h-4 w-4 transition-all",
                  isBookmarked && "fill-current"
                )
              }
            )
          }
        ),
        showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: isBookmarked ? activeLabel : inactiveLabel })
      ]
    }
  );
}

exports.BookmarkButton = BookmarkButton;
//# sourceMappingURL=bookmark-button.js.map
//# sourceMappingURL=bookmark-button.js.map