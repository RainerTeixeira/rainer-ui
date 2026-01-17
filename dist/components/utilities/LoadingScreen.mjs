import * as React from 'react';
import { useState, useEffect } from 'react';
import { Atom } from 'react-loading-indicators';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useTheme } from 'next-themes';

function hexToRGB(hex) {
  const cleanHex = hex.replace("#", "");
  if (!/^[0-9A-F]{6}$/i.test(cleanHex)) {
    return "0, 0, 0";
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.MOTION || {
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
var motionSemantic = tokens.MOTION || {
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
var TokensContext = React.createContext(null);
function useTokens() {
  const context = React.useContext(TokensContext);
  if (!context) {
    throw new Error(
      "useTokens deve ser usado dentro de <TokensProvider tokens={...}>. Adicione o provedor na raiz do app ou Storybook para compartilhar os design tokens oficiais."
    );
  }
  return context;
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
var SPINNER_SIZES = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12"
};
function LoadingSpinner({
  size = "md",
  className = "",
  label = "Carregando..."
}) {
  return /* @__PURE__ */ jsx(
    Loader2,
    {
      className: `${SPINNER_SIZES[size]} animate-spin text-primary ${className}`,
      "aria-label": label,
      role: "status"
    }
  );
}
function FullPageLoader({
  message = "Carregando..."
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "min-h-screen w-full flex flex-col items-center justify-center bg-background",
      role: "status",
      "aria-label": message,
      children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 w-20 h-20 border-4 border-pink-400 border-b-transparent rounded-full animate-spin mx-auto",
              style: { animationDirection: "reverse" }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-cyan-600 dark:text-cyan-300 font-mono text-sm tracking-wider animate-pulse", children: message.toUpperCase() })
      ] })
    }
  );
}
function InlineLoader({
  message = "Carregando...",
  size = "md"
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-12 space-y-4",
      role: "status",
      "aria-label": message,
      children: [
        /* @__PURE__ */ jsx(LoadingSpinner, { size }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground dark:text-gray-400", children: message })
      ]
    }
  );
}
function SkeletonGrid({
  count = 4,
  columns = 2,
  className = ""
}) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  return /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-6 ${className}`, children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-48 w-full rounded-lg" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-3/4" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" })
  ] }, index)) });
}
function EmptyState({
  icon: Icon = Loader2,
  title = "Nenhum item encontrado",
  description = "N\xE3o h\xE1 itens para exibir no momento.",
  action
}) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center py-12 px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-400/10 dark:to-purple-400/10 border border-cyan-400/30 mb-6", children: /* @__PURE__ */ jsx(
      Icon,
      {
        className: "w-8 h-8 sm:w-10 sm:h-10 text-cyan-600 dark:text-cyan-400",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold mb-2 text-foreground dark:text-cyan-200", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-muted-foreground dark:text-gray-400 mb-6 max-w-md mx-auto", children: description }),
    action && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: action })
  ] });
}
function LoadingScreen({ progress = 0, currentStep = "Inicializando..." }) {
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [stars, setStars] = useState([]);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const { getColor } = useTokens();
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = mounted ? theme === "system" ? systemTheme : theme : "light";
  const isDark = currentTheme === "dark";
  const primaryColor = isDark ? getColor("primitives.colors.blue.400", "#60a5fa") : getColor("primitives.colors.blue.600", "#2563eb");
  const secondaryColor = isDark ? getColor("primitives.colors.purple.400", "#c084fc") : getColor("primitives.colors.purple.600", "#7c3aed");
  const accentColor = isDark ? getColor("primitives.colors.red.400", "#f87171") : getColor("primitives.colors.red.600", "#dc2626");
  const primaryRGB = hexToRGB(primaryColor);
  const secondaryRGB = hexToRGB(secondaryColor);
  useEffect(() => {
    const starsCount = 100;
    const newStars = Array.from({ length: starsCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
      opacity: 0.6 + Math.random() * 0.4
    }));
    setStars(newStars);
  }, []);
  useEffect(() => {
    if (progress === void 0) {
      setDisplayedProgress(0);
      return;
    }
    const targetProgress = Math.min(100, Math.max(0, progress));
    const step = (targetProgress - displayedProgress) / 10;
    const interval = setInterval(() => {
      setDisplayedProgress((prev) => {
        const next = prev + step;
        if (Math.abs(next - targetProgress) < 0.5) {
          return targetProgress;
        }
        return next;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [progress, displayedProgress]);
  const currentMessage = currentStep || "Inicializando sistemas...";
  const progressValue = progress !== void 0 ? displayedProgress : void 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "bg-background backdrop-blur-sm",
        "transition-opacity duration-500"
      ),
      role: "status",
      "aria-label": "Carregando aplica\xE7\xE3o",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute rounded-full bg-white",
              style: {
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
                animation: "starTwinkle 3s ease-in-out infinite",
                animationDelay: `${star.delay}s`
              }
            },
            star.id
          )) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20",
              style: {
                background: `radial-gradient(circle, rgba(${primaryRGB}, 0.3), transparent)`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20",
              style: {
                background: `radial-gradient(circle, rgba(${secondaryRGB}, 0.3), transparent)`,
                animationDelay: "1s"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center space-y-8 px-4", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative flex items-center justify-center",
              "aria-hidden": "true",
              suppressHydrationWarning: true,
              children: /* @__PURE__ */ jsx(
                Atom,
                {
                  color: [primaryColor, secondaryColor, accentColor, primaryColor],
                  size: "large",
                  text: "",
                  textColor: "",
                  speedPlus: 1
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: cn(
                  "text-lg sm:text-xl font-mono font-semibold",
                  "tracking-wider animate-pulse"
                ),
                style: { color: primaryColor },
                "aria-live": "polite",
                children: currentMessage
              }
            ),
            progressValue !== void 0 && /* @__PURE__ */ jsxs("div", { className: "w-64 sm:w-80 space-y-2", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "h-1 bg-muted rounded-full overflow-hidden border",
                  style: {
                    borderColor: `${primaryColor}33`
                  },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "h-full transition-all duration-300 ease-out",
                      style: {
                        width: `${progressValue}%`,
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                        boxShadow: `0 0 10px ${primaryColor}`
                      },
                      "aria-valuenow": progressValue,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      role: "progressbar"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs(
                "p",
                {
                  className: "text-xs font-mono text-right",
                  style: { color: `${primaryColor}B3` },
                  "aria-hidden": "true",
                  children: [
                    Math.round(progressValue),
                    "%"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "absolute inset-0 overflow-hidden pointer-events-none opacity-20",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-0 left-1/4 font-mono text-xs animate-pulse",
                    style: { color: `${primaryColor}4D` },
                    children: "01001001"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-1/4 left-3/4 font-mono text-xs animate-pulse",
                    style: {
                      color: `${secondaryColor}4D`,
                      animationDelay: "0.5s"
                    },
                    children: "11001100"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute bottom-1/4 left-1/2 font-mono text-xs animate-pulse",
                    style: {
                      color: `${primaryColor}4D`,
                      animationDelay: "1s"
                    },
                    children: "10101010"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
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
      ]
    }
  );
}

export { EmptyState, FullPageLoader, InlineLoader, LoadingScreen, LoadingSpinner, SkeletonGrid };
//# sourceMappingURL=LoadingScreen.mjs.map
//# sourceMappingURL=LoadingScreen.mjs.map