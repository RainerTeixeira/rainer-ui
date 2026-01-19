'use strict';

var React5 = require('react');
var nextThemes = require('next-themes');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var Moon = require('lucide-react/dist/esm/icons/moon');
var Sun = require('lucide-react/dist/esm/icons/sun');
var jsxRuntime = require('react/jsx-runtime');
var lucideReact = require('lucide-react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');

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

var React5__namespace = /*#__PURE__*/_interopNamespace(React5);
var Moon__default = /*#__PURE__*/_interopDefault(Moon);
var Sun__default = /*#__PURE__*/_interopDefault(Sun);

function useTheme() {
  const { theme, resolvedTheme, setTheme } = nextThemes.useTheme();
  const toggle = React5__namespace.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React5__namespace.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React5__namespace.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React5__namespace.useCallback(() => {
    setTheme("system");
  }, [setTheme]);
  return {
    theme,
    resolvedTheme,
    setTheme,
    toggle,
    setLight,
    setDark,
    setSystem,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    isSystem: theme === "system"
  };
}
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
function ThemeToggle({ className }) {
  const { toggle, isDark } = useTheme();
  const [mounted, setMounted] = React5__namespace.useState(false);
  React5__namespace.useEffect(() => {
    setMounted(true);
  }, []);
  const handleToggle = () => {
    toggle();
  };
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        className: cn(
          // Layout base
          "inline-flex items-center justify-center rounded-md",
          "text-sm font-medium transition-colors duration-200",
          "h-9 w-9 relative",
          // Estados interativos
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Cores do tema - usando design tokens
          "bg-surface border border-border shadow-sm",
          "hover:bg-surface-hover",
          // Dark mode
          "dark:bg-surface-dark dark:border-border-dark",
          "dark:hover:bg-surface-hover-dark",
          className
        ),
        "aria-label": "Alternar tema",
        disabled: true,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-[1.2rem] w-[1.2rem]" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Alternar tema" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      onClick: handleToggle,
      className: cn(
        // Layout base
        "inline-flex items-center justify-center rounded-md",
        "text-sm font-medium transition-colors duration-200",
        "h-9 w-9 relative",
        // Estados interativos
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Cores do tema - usando design tokens
        "bg-surface border border-border shadow-sm",
        "hover:bg-surface-hover",
        // Dark mode
        "dark:bg-surface-dark dark:border-border-dark",
        "dark:hover:bg-surface-hover-dark",
        className
      ),
      "aria-label": isDark ? "Mudar para tema claro" : "Mudar para tema escuro",
      children: [
        isDark ? /* @__PURE__ */ jsxRuntime.jsx(
          Moon__default.default,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-secondary",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          Sun__default.default,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-primary",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: isDark ? "Mudar para tema claro" : "Mudar para tema escuro" })
      ]
    }
  );
}
function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = React5.useState(null);
  const [isInstallable, setIsInstallable] = React5.useState(false);
  const [isInstalled, setIsInstalled] = React5.useState(false);
  const [isStandalone, setIsStandalone] = React5.useState(false);
  const [updateAvailable, setUpdateAvailable] = React5.useState(false);
  const [swRegistration, setSwRegistration] = React5.useState(null);
  React5.useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      setSwRegistration(registration);
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1e3);
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        }
      });
    }).catch(() => {
    });
  }, []);
  React5.useEffect(() => {
    if (typeof window === "undefined") return;
    const nav = window.navigator;
    const isStandaloneiOS = nav.standalone === true;
    const isStandaloneAndroid = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isStandaloneBrowser = window.matchMedia(
      "(display-mode: minimal-ui)"
    ).matches;
    const standalone = isStandaloneiOS || isStandaloneAndroid || isStandaloneBrowser;
    setIsStandalone(standalone);
    setIsInstalled(standalone);
  }, []);
  React5.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);
  const promptInstall = React5.useCallback(async () => {
    if (!deferredPrompt) {
      return;
    }
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
  }, [deferredPrompt]);
  const updateServiceWorker = React5.useCallback(() => {
    if (!swRegistration || !swRegistration.waiting) {
      return;
    }
    swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, [swRegistration]);
  return {
    isInstallable,
    isInstalled,
    isStandalone,
    updateAvailable,
    promptInstall,
    updateServiceWorker
  };
}
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
var ButtonComponent = React5__namespace.forwardRef(
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
      const child = React5__namespace.Children.only(children);
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

// src/lib/constants.ts
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out"}};
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM_RIGHT: "to-br"};
var Card = React5__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = React5__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React5__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardDescription = React5__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React5__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React5__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React5__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
function UpdateNotification() {
  const { resolvedTheme } = nextThemes.useTheme();
  const [mounted, setMounted] = React5.useState(false);
  const { updateAvailable, updateServiceWorker } = usePWA();
  React5.useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = mounted ? resolvedTheme === "dark" : false;
  if (!updateAvailable) return null;
  return (
    /**
     * Container fixo no topo
     *
     * - fixed top-20: abaixo da navbar
     * - right-4: margem da direita
     * - z-50: acima de outros elementos
     * - Animação de slide down
     */
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "fixed top-20 right-4 z-50 max-w-sm",
          "animate-in slide-in-from-top-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Card,
          {
            className: cn(
              "backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-secondary-base/50", "shadow-glow-purple") : cn("bg-background/90", "border-secondary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "shrink-0 p-2 rounded-full border",
                    "bg-secondary-background",
                    "border-secondary-base/30"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    lucideReact.RefreshCw,
                    {
                      className: cn(
                        "h-5 w-5 animate-spin text-secondary-base",
                        "[animation-duration:3s]"
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "h4",
                  {
                    className: cn(
                      "text-sm font-bold font-mono",
                      "text-foreground"
                    ),
                    children: "Nova Vers\xE3o Dispon\xEDvel"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "p",
                  {
                    className: cn(
                      "text-xs",
                      "text-muted-foreground"
                    ),
                    children: "Atualize para obter as \xFAltimas melhorias e corre\xE7\xF5es."
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    onClick: updateServiceWorker,
                    size: "sm",
                    className: cn(
                      "w-full font-mono font-bold",
                      "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RefreshCw, { className: "h-3 w-3 mr-2" }),
                      "Atualizar Agora"
                    ]
                  }
                )
              ] })
            ] }) })
          }
        )
      }
    )
  );
}
var ASPECT_RATIOS = {
  square: "1/1",
  video: "16/9",
  widescreen: "21/9",
  cinema: "2.39/1",
  portrait: "3/4",
  golden: "1.618/1",
  post: "4/5",
  story: "9/16"
};
var aspectRatioBoxVariants = classVarianceAuthority.cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border border-border rounded-md",
        rounded: "rounded-lg",
        card: "border border-border rounded-lg shadow-sm",
        glass: "glass rounded-lg",
        neon: "neon-border rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var AspectRatioBox = React5__namespace.forwardRef(
  ({
    className,
    variant = "default",
    ratio,
    children,
    objectFit = "cover",
    ...props
  }, ref) => {
    const resolvedRatio = React5__namespace.useMemo(() => {
      if (typeof ratio === "string" && ratio in ASPECT_RATIOS) {
        return ASPECT_RATIOS[ratio];
      }
      return ratio;
    }, [ratio]);
    const paddingBottom = React5__namespace.useMemo(() => {
      const [width, height] = resolvedRatio.split("/").map(Number);
      return `${height / width * 100}%`;
    }, [resolvedRatio]);
    const objectFitClasses = {
      cover: "absolute inset-0 w-full h-full object-cover",
      contain: "absolute inset-0 w-full h-full object-contain",
      fill: "absolute inset-0 w-full h-full"
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(aspectRatioBoxVariants({ variant }), className),
        style: { paddingBottom },
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0", children: React5__namespace.isValidElement(children) ? React5__namespace.cloneElement(children, {
          className: cn(
            objectFitClasses[objectFit],
            children.props.className
          )
        }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(objectFitClasses[objectFit]), children }) })
      }
    );
  }
);
AspectRatioBox.displayName = "AspectRatioBox";
var AspectRatioImage = React5__namespace.forwardRef(
  ({
    className,
    ratio = "square",
    variant = "default",
    src,
    alt,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsxRuntime.jsx(
      "img",
      {
        ref,
        src,
        alt,
        className: cn("w-full h-full object-cover", className),
        ...props
      }
    ) });
  }
);
AspectRatioImage.displayName = "AspectRatioImage";
var AspectRatioVideo = React5__namespace.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsxRuntime.jsx(
      "video",
      {
        ref,
        className: cn("w-full h-full object-cover", className),
        ...props
      }
    ) });
  }
);
AspectRatioVideo.displayName = "AspectRatioVideo";
var AspectRatioIframe = React5__namespace.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsxRuntime.jsx(
      "iframe",
      {
        ref,
        className: cn("w-full h-full", className),
        ...props
      }
    ) });
  }
);
AspectRatioIframe.displayName = "AspectRatioIframe";
var centerVariants = classVarianceAuthority.cva(
  "flex",
  {
    variants: {
      direction: {
        both: "items-center justify-center",
        horizontal: "justify-center",
        vertical: "items-center"
      },
      inline: {
        true: "inline-flex",
        false: "flex"
      }
    },
    defaultVariants: {
      direction: "both",
      inline: false
    }
  }
);
var Center = React5__namespace.forwardRef(
  ({
    className,
    direction = "both",
    inline = false,
    fullHeight = false,
    fullWidth = false,
    padding,
    minSize,
    style,
    children,
    ...props
  }, ref) => {
    const centerStyle = React5__namespace.useMemo(() => {
      const customStyle = { ...style };
      if (padding !== void 0) {
        customStyle.padding = typeof padding === "number" ? `${padding}px` : padding;
      }
      if (minSize !== void 0) {
        customStyle.minWidth = typeof minSize === "number" ? `${minSize}px` : minSize;
        customStyle.minHeight = typeof minSize === "number" ? `${minSize}px` : minSize;
      }
      return customStyle;
    }, [style, padding, minSize]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          centerVariants({ direction, inline }),
          fullHeight && "min-h-screen",
          fullWidth && "w-full",
          className
        ),
        style: centerStyle,
        ...props,
        children
      }
    );
  }
);
Center.displayName = "Center";
var CenterInline = React5__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Center,
      {
        ref,
        inline: true,
        ...props
      }
    );
  }
);
CenterInline.displayName = "CenterInline";
var CenterScreen = React5__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Center,
      {
        ref,
        fullHeight: true,
        fullWidth: true,
        direction: "both",
        ...props
      }
    );
  }
);
CenterScreen.displayName = "CenterScreen";
var CenterText = React5__namespace.forwardRef(
  ({
    className,
    align = "center",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("text-center", className),
        style: { textAlign: align },
        ...props,
        children
      }
    );
  }
);
CenterText.displayName = "CenterText";

exports.ASPECT_RATIOS = ASPECT_RATIOS;
exports.AspectRatioBox = AspectRatioBox;
exports.AspectRatioIframe = AspectRatioIframe;
exports.AspectRatioImage = AspectRatioImage;
exports.AspectRatioVideo = AspectRatioVideo;
exports.Center = Center;
exports.CenterInline = CenterInline;
exports.CenterScreen = CenterScreen;
exports.CenterText = CenterText;
exports.ThemeToggle = ThemeToggle;
exports.UpdateNotification = UpdateNotification;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map