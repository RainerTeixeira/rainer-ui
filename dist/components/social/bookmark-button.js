'use strict';

var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var framerMotion = require('framer-motion');
var react = require('react');
var Bookmark = require('lucide-react/dist/esm/icons/bookmark');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

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
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-[var(--motion-duration,200ms)] ease-[var(--motion-easing,cubic-bezier(.4,0,.2,1))] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:shadow-glow-cyan",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:shadow-glow-purple",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 dark:hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline dark:neon-text",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass neon-border hover:glass-hover dark:text-primary",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
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
  const [isBookmarked, setIsBookmarked] = react.useState(initialIsBookmarked);
  const [isAnimating, setIsAnimating] = react.useState(false);
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