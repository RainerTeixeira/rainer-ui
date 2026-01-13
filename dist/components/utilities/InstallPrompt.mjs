import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { useTheme } from 'next-themes';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Download, X } from 'lucide-react';

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.primitives.motion;
var motionSemantic = tokens.semantics.motion || {
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
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/lib/constants.ts
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out"}};
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM_RIGHT: "to-br"};
var Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [swRegistration, setSwRegistration] = useState(null);
  useEffect(() => {
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
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isStandaloneiOS = window.navigator.standalone === true;
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
  useEffect(() => {
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
  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) {
      return;
    }
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
  }, [deferredPrompt]);
  const updateServiceWorker = useCallback(() => {
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
function InstallPrompt() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isInstallable, isStandalone, promptInstall } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (isInstallable && !isStandalone && !dismissed) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3e3);
      return () => clearTimeout(timer);
    }
    return void 0;
  }, [isInstallable, isStandalone]);
  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-dismissed", "true");
  };
  const handleInstall = async () => {
    await promptInstall();
    setShowPrompt(false);
  };
  const isDark = mounted ? resolvedTheme === "dark" : false;
  if (!showPrompt) return null;
  return (
    /**
     * Container fixo no rodapé
     *
     * - fixed bottom-0: fixado na parte inferior
     * - left-0 right-0: largura total
     * - z-50: acima de outros elementos
     * - Animação de slide up
     */
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none",
          "animate-in slide-in-from-bottom-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ jsx(
          Card,
          {
            className: cn(
              "max-w-2xl mx-auto pointer-events-auto backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-primary-base/50", "shadow-glow-cyan") : cn("bg-background/90", "border-primary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "shrink-0 p-3 rounded-full border",
                    "bg-primary-background",
                    "border-primary-base/30"
                  ),
                  children: /* @__PURE__ */ jsx(Download, { className: cn("h-6 w-6", "text-primary-base") })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: cn(
                        "text-lg font-bold font-mono",
                        "text-foreground"
                      ),
                      children: "\u{1F4F1} Instalar no seu Dispositivo"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: handleDismiss,
                      className: cn(
                        "transition-colors p-1 rounded",
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      "aria-label": "Fechar",
                      children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: cn(
                      "text-sm",
                      "text-muted-foreground"
                    ),
                    children: "Instale como app nativo para acesso r\xE1pido sem navegador e funcionalidade offline completa."
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: handleInstall,
                      size: "sm",
                      className: cn(
                        "font-mono font-bold",
                        "bg-primary text-primary-foreground hover:bg-primary-hover"
                      ),
                      children: [
                        /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                        "Instalar Agora"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: handleDismiss,
                      variant: "ghost",
                      size: "sm",
                      className: cn(
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      children: "Talvez Depois"
                    }
                  )
                ] })
              ] })
            ] }) })
          }
        )
      }
    )
  );
}

export { InstallPrompt };
//# sourceMappingURL=InstallPrompt.mjs.map
//# sourceMappingURL=InstallPrompt.mjs.map