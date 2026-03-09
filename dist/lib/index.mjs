import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ../rainer-design-tokens/formats/tokens.json
var tokens_default = {
  $schema: "https://json-schema.org/draft-07/schema#",
  $name: "@rainersoft/design-tokens",
  $version: "3.0.0",
  $description: "Universal design tokens export for Rainer Design System",
  $generated: "2026-03-08T15:11:41.906Z",
  primitives: {
    color: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      gray: {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827"
      },
      blue: {
        "50": "#f0f9ff",
        "100": "#e0f2fe",
        "200": "#bae6fd",
        "300": "#7dd3fc",
        "400": "#38bdf8",
        "500": "#0ea5e9",
        "600": "#0284c7",
        "700": "#0369a1",
        "800": "#075985",
        "900": "#0c4a6e"
      },
      cyan: {
        "50": "#ecfeff",
        "100": "#cffafe",
        "200": "#a5f3fc",
        "300": "#67e8f9",
        "400": "#22d3ee",
        "500": "#06b6d4",
        "600": "#0891b2",
        "700": "#0e7490",
        "800": "#155e75",
        "900": "#164e63"
      },
      purple: {
        "50": "#faf5ff",
        "100": "#f3e8ff",
        "200": "#e9d5ff",
        "300": "#d8b4fe",
        "400": "#c084fc",
        "500": "#a855f7",
        "600": "#9333ea",
        "700": "#7c3aed",
        "800": "#6b21a8",
        "900": "#581c87"
      },
      pink: {
        "50": "#fdf2f8",
        "100": "#fce7f3",
        "200": "#fbcfe8",
        "300": "#f9a8d4",
        "400": "#f472b6",
        "500": "#ec4899",
        "600": "#db2777",
        "700": "#be185d",
        "800": "#9d174d",
        "900": "#831843"
      },
      red: {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fca5a5",
        "400": "#f87171",
        "500": "#ef4444",
        "600": "#dc2626",
        "700": "#b91c1c",
        "800": "#991b1b",
        "900": "#7f1d1d"
      },
      orange: {
        "50": "#fff7ed",
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fdba74",
        "400": "#fb923c",
        "500": "#f97316",
        "600": "#ea580c",
        "700": "#c2410c",
        "800": "#9a3412",
        "900": "#7c2d12"
      },
      yellow: {
        "50": "#fefce8",
        "100": "#fef9c3",
        "200": "#fef08a",
        "300": "#fde047",
        "400": "#facc15",
        "500": "#eab308",
        "600": "#ca8a04",
        "700": "#a16207",
        "800": "#854d0e",
        "900": "#713f12"
      },
      green: {
        "50": "#f0fdf4",
        "100": "#dcfce7",
        "200": "#bbf7d0",
        "300": "#86efac",
        "400": "#4ade80",
        "500": "#22c55e",
        "600": "#16a34a",
        "700": "#15803d",
        "800": "#166534",
        "900": "#14532d"
      },
      emerald: {
        "50": "#ecfdf5",
        "100": "#d1fae5",
        "200": "#a7f3d0",
        "300": "#6ee7b7",
        "400": "#34d399",
        "500": "#10b981",
        "600": "#059669",
        "700": "#047857",
        "800": "#065f46",
        "900": "#064e3b"
      }
    },
    spacing: {
      "0": "0px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      px: "1px",
      "0.5": "0.125rem",
      "1.5": "0.375rem",
      "2.5": "0.625rem",
      "3.5": "0.875rem"
    },
    typography: {
      fontFamily: {
        sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem"
      },
      fontWeight: {
        "100": "100",
        "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900"
      },
      lineHeight: {
        "1": "1",
        "2": "2",
        "1.25": "1.25",
        "1.375": "1.375",
        "1.5": "1.5",
        "1.625": "1.625"
      },
      letterSpacing: {
        "0": "0em",
        "-0.05": "-0.05em",
        "-0.025": "-0.025em",
        "0.025": "0.025em",
        "0.05": "0.05em",
        "0.1": "0.1em"
      }
    },
    radius: {
      none: "0px",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    shadows: {
      xs: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
      sm: "0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.06)",
      base: "0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)",
      md: "0 10px 15px -3px rgba(15, 23, 42, 0.10), 0 4px 6px -4px rgba(15, 23, 42, 0.08)",
      lg: "0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.10)",
      xl: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
      "2xl": "0 50px 100px -20px rgba(15, 23, 42, 0.30)",
      inner: "inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)",
      glow: {
        cyan: "0 0 20px rgba(6, 182, 212, 0.55), 0 0 40px rgba(6, 182, 212, 0.35)",
        pink: "0 0 20px rgba(236, 72, 153, 0.55), 0 0 40px rgba(236, 72, 153, 0.35)",
        purple: "0 0 20px rgba(139, 92, 246, 0.55), 0 0 40px rgba(139, 92, 246, 0.35)",
        green: "0 0 20px rgba(34, 197, 94, 0.55), 0 0 40px rgba(34, 197, 94, 0.35)"
      }
    },
    motion: {
      duration: {
        instant: "0ms",
        ultraFast: "75ms",
        fast: "100ms",
        normal: "200ms",
        slow: "300ms",
        slower: "500ms",
        slowest: "800ms"
      },
      easing: {
        linear: "linear",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        easeOut: "cubic-bezier(0, 0, 0.2, 1)",
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
        easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      },
      delay: {
        none: "0ms",
        short: "50ms",
        medium: "100ms",
        long: "200ms",
        longer: "300ms"
      }
    },
    breakpoints: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px"
    },
    zIndex: {
      base: 0,
      content: 100,
      overlay: 200,
      dropdown: 300,
      modal: 400,
      tooltip: 500,
      notification: 600,
      max: 9999
    }
  },
  themes: {
    light: {
      background: {
        primary: "#ffffff",
        secondary: "#f9fafb",
        tertiary: "#f3f4f6",
        disabled: "#f3f4f6",
        overlay: "rgba(0, 0, 0, 0.5)",
        inverse: "#000000"
      },
      text: {
        primary: "#111827",
        secondary: "#4b5563",
        tertiary: "#9ca3af",
        disabled: "#d1d5db",
        inverse: "#ffffff",
        onPrimary: "#ffffff",
        onSecondary: "#111827",
        link: "#2563eb",
        linkHover: "#1d4ed8"
      },
      button: {
        primary: {
          default: "#3b82f6",
          hover: "#2563eb",
          active: "#1d4ed8",
          text: "#ffffff"
        },
        secondary: {
          default: "#e5e7eb",
          hover: "#d1d5db",
          active: "#9ca3af",
          text: "#111827"
        },
        tertiary: {
          default: "transparent",
          hover: "#f9fafb",
          active: "#e5e7eb",
          text: "#111827"
        },
        danger: {
          default: "#ef4444",
          hover: "#dc2626",
          active: "#b91c1c",
          text: "#ffffff"
        },
        success: {
          default: "#22c55e",
          hover: "#16a34a",
          active: "#15803d",
          text: "#ffffff"
        }
      },
      border: {
        default: "#e5e7eb",
        light: "#f3f4f6",
        medium: "#d1d5db",
        dark: "#9ca3af",
        focus: "#3b82f6",
        error: "#ef4444",
        success: "#22c55e",
        warning: "#f87171"
      },
      status: {
        success: {
          default: "#22c55e",
          light: "#f0fdf4",
          dark: "#15803d",
          text: "#15803d"
        },
        error: {
          default: "#ef4444",
          light: "#fef2f2",
          dark: "#b91c1c",
          text: "#b91c1c"
        },
        warning: {
          default: "#f87171",
          light: "#fef2f2",
          dark: "#dc2626",
          text: "#991b1b"
        },
        info: {
          default: "#3b82f6",
          light: "#eff6ff",
          dark: "#1d4ed8",
          text: "#1d4ed8"
        }
      },
      interactive: {
        link: {
          default: "#2563eb",
          hover: "#1d4ed8",
          visited: "#9333ea",
          active: "#1e40af"
        },
        focus: {
          ring: "#3b82f6",
          ringOffset: "#ffffff"
        }
      },
      surface: {
        elevated: "#ffffff",
        raised: "#f9fafb",
        sunken: "#f3f4f6"
      }
    },
    dark: {
      background: {
        primary: "#111827",
        secondary: "#111827",
        tertiary: "#1f2937",
        disabled: "#1f2937",
        overlay: "rgba(0, 0, 0, 0.85)",
        inverse: "#f9fafb",
        glass: "rgba(15, 23, 42, 0.6)",
        neon: "rgba(6, 182, 212, 0.10)"
      },
      text: {
        primary: "#f9fafb",
        secondary: "#d1d5db",
        tertiary: "#9ca3af",
        disabled: "#6b7280",
        inverse: "#111827",
        onPrimary: "#111827",
        onSecondary: "#f9fafb",
        link: "#22d3ee",
        linkHover: "#67e8f9",
        neon: "#22d3ee",
        neonGlow: "#67e8f9"
      },
      button: {
        primary: {
          default: "#0891b2",
          hover: "#06b6d4",
          active: "#22d3ee",
          text: "#030712",
          glow: "rgba(6, 182, 212, 0.50)"
        },
        secondary: {
          default: "#374151",
          hover: "#4b5563",
          active: "#6b7280",
          text: "#f9fafb",
          border: "#0891b2"
        },
        tertiary: {
          default: "transparent",
          hover: "#1f2937",
          active: "#374151",
          text: "#22d3ee",
          border: "#0891b2"
        },
        danger: {
          default: "#dc2626",
          hover: "#ef4444",
          active: "#f87171",
          text: "#ffffff",
          glow: "rgba(244, 63, 94, 0.50)"
        },
        success: {
          default: "#059669",
          hover: "#10b981",
          active: "#34d399",
          text: "#030712",
          glow: "rgba(16, 185, 129, 0.50)"
        },
        neon: {
          default: "linear-gradient(135deg, #0891b2, #2563eb)",
          hover: "linear-gradient(135deg, #06b6d4, #3b82f6)",
          active: "linear-gradient(135deg, #22d3ee, #60a5fa)",
          text: "#030712",
          glow: "rgba(6, 182, 212, 0.80)",
          border: "#22d3ee"
        }
      },
      border: {
        default: "#374151",
        light: "#4b5563",
        medium: "#6b7280",
        dark: "#9ca3af",
        focus: "#22d3ee",
        error: "#f87171",
        success: "#34d399",
        warning: "#fbbf24",
        neon: "#22d3ee",
        neonGlow: "rgba(6, 182, 212, 0.60)"
      },
      status: {
        success: {
          default: "#10b981",
          light: "#022c22",
          dark: "#6ee7b7",
          text: "#6ee7b7",
          glow: "rgba(16, 185, 129, 0.40)"
        },
        error: {
          default: "#ef4444",
          light: "#7f1d1d",
          dark: "#fca5a5",
          text: "#fca5a5",
          glow: "rgba(244, 63, 94, 0.40)"
        },
        warning: {
          default: "#fbbf24",
          light: "#78350f",
          dark: "#fde047",
          text: "#fef3c7",
          glow: "rgba(251, 191, 36, 0.40)"
        },
        info: {
          default: "#22d3ee",
          light: "#083344",
          dark: "#67e8f9",
          text: "#67e8f9",
          glow: "rgba(6, 182, 212, 0.40)"
        }
      },
      interactive: {
        link: {
          default: "#22d3ee",
          hover: "#67e8f9",
          visited: "#a78bfa",
          active: "#a5f3fc",
          glow: "rgba(6, 182, 212, 0.30)"
        },
        focus: {
          ring: "#22d3ee",
          ringOffset: "#030712",
          ringGlow: "rgba(6, 182, 212, 0.50)"
        }
      },
      surface: {
        elevated: "#1f2937",
        raised: "#1f2937",
        sunken: "#111827",
        glass: "rgba(15, 23, 42, 0.40)",
        neon: "rgba(6, 182, 212, 0.05)",
        hologram: "linear-gradient(135deg, rgba(6, 182, 212, 0.10), rgba(139, 92, 246, 0.10))"
      },
      gradient: {
        cyberpunk: {
          primary: "linear-gradient(135deg, #0891b2, #2563eb, #8b5cf6)",
          secondary: "linear-gradient(135deg, #dc2626, #ea580c)",
          tertiary: "linear-gradient(135deg, #059669, #0891b2)",
          background: "linear-gradient(135deg, #030712, #111827, #0f172a)"
        },
        neon: {
          cyan: "linear-gradient(135deg, #22d3ee, #0891b2)",
          rose: "linear-gradient(135deg, #fca5a5, #dc2626)",
          emerald: "linear-gradient(135deg, #6ee7b7, #059669)"
        }
      }
    }
  },
  $meta: {
    repository: "git+https://github.com/RainerTeixeira/rainer-design-tokens.git",
    author: {
      name: "Rainer Teixeira",
      email: "suporte@rainersoft.com.br"
    },
    license: "MIT"
  }
};

// src/lib/tokens.ts
var tokens = tokens_default;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var primitiveZIndex = tokens.primitives?.zIndex ?? {};
var getZIndexValue = (key, fallback) => {
  const value = primitiveZIndex?.[key];
  return value !== void 0 ? String(value) : String(fallback);
};
var baseZIndex = {
  base: getZIndexValue("base", 0),
  content: getZIndexValue("content", 100),
  overlay: getZIndexValue("overlay", 200),
  dropdown: getZIndexValue("dropdown", 300),
  modal: getZIndexValue("modal", 400),
  tooltip: getZIndexValue("tooltip", 500),
  notification: getZIndexValue("notification", 600),
  max: getZIndexValue("max", 9999)
};
var Z_INDEX = {
  ...baseZIndex,
  BASE: baseZIndex.base,
  CONTENT: baseZIndex.content,
  OVERLAY: baseZIndex.overlay,
  DROPDOWN: baseZIndex.dropdown,
  MODAL: baseZIndex.modal,
  TOOLTIP: baseZIndex.tooltip,
  NOTIFICATION: baseZIndex.notification,
  MAX: baseZIndex.max,
  BACKDROP: baseZIndex.overlay
};
var motionPrimitives = tokens.primitives?.motion ?? {};
var motionTokens = motionPrimitives;
var animationDelays = motionTokens?.delay ?? {};
var animationDurations = motionTokens?.duration ?? {};
var animationEasings = motionTokens?.easing ?? {};
var ANIMATION_DELAYS = animationDelays;
var ANIMATION_DURATIONS = animationDurations;
var ANIMATION_EASINGS = animationEasings;
var motion = {
  duration: animationDurations,
  easing: animationEasings,
  delay: animationDelays
};
var baseDuration = animationDurations.normal ?? animationDurations.default ?? "200ms";
var fastDuration = animationDurations.fast ?? baseDuration;
var slowDuration = animationDurations.slow ?? baseDuration;
var easeInOut = animationEasings.easeInOut ?? animationEasings.default ?? "ease-in-out";
var easeOut = animationEasings.easeOut ?? easeInOut;
var spring = animationEasings.spring ?? easeInOut;
var motionPresets = {
  default: {
    duration: baseDuration,
    easing: easeInOut
  },
  fast: {
    duration: fastDuration,
    easing: easeOut
  },
  slow: {
    duration: slowDuration,
    easing: easeInOut
  },
  spring: {
    duration: baseDuration,
    easing: spring
  }
};
var fallbackMotionSemantic = {
  transition: {
    default: { duration: baseDuration, easing: easeInOut },
    fast: { duration: fastDuration, easing: easeOut },
    slow: { duration: slowDuration, easing: easeInOut }
  },
  interaction: {
    hover: { duration: fastDuration, easing: easeOut },
    focus: { duration: baseDuration, easing: easeInOut },
    active: { duration: fastDuration, easing: spring }
  },
  feedback: {
    success: { duration: slowDuration, easing: easeInOut },
    error: { duration: slowDuration, easing: spring },
    warning: { duration: slowDuration, easing: easeOut }
  },
  navigation: {
    page: { duration: slowDuration, easing: easeOut },
    modal: { duration: baseDuration, easing: easeInOut }
  }
};
var motionSemantic = tokens.semantics?.motion ?? fallbackMotionSemantic;
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out",
    COLOR: "transition-colors duration-200 ease-in-out",
    TRANSFORM: "transition-transform duration-200 ease-in-out",
    OPACITY: "transition-opacity duration-200 ease-in-out"
  }
};
function getTheme(theme) {
  return tokens.themes?.[theme] ?? {};
}
function getThemeColors(theme) {
  const themeData = getTheme(theme);
  return themeData.colors ?? {};
}
function getSemanticColors(theme) {
  return {
    colors: getThemeColors(theme)
  };
}
function getStatusColor(status, theme = "light") {
  const statusPalette = getThemeColors(theme)[status];
  return statusPalette?.base ?? `var(--color-${status})`;
}
function getButtonPrimaryColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.primary?.default ?? "var(--color-primary)";
}
function getButtonSecondaryColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.secondary?.default ?? "var(--color-secondary)";
}
function getButtonPrimaryTextColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.primary?.text ?? "var(--color-white)";
}
function getButtonTertiaryColor(theme = "light") {
  const palette = getTheme(theme).button;
  return palette?.tertiary?.default ?? "var(--color-muted)";
}
function getColorFromTheme(theme, category, shade) {
  return getThemeColors(theme)?.[category]?.[shade];
}
function getBrandColor(variant, theme = "light") {
  return getThemeColors(theme)?.[variant]?.base;
}
function getSemanticColorsSimplified(theme) {
  const colors = getThemeColors(theme);
  return {
    primary: colors?.primary,
    secondary: colors?.secondary,
    success: colors?.success,
    warning: colors?.warning,
    error: colors?.error,
    info: colors?.info,
    muted: colors?.muted
  };
}
function getSemanticColorConstants() {
  return tokens.semantics?.colors ?? {};
}
function generateTailwindClasses(options) {
  return Object.entries(options).filter(([, value]) => value !== void 0 && value !== "").map(([key, value]) => {
    if (key === "bg" || key === "text" || key === "border") {
      return `${key}-${value}`;
    }
    return `${key}-${value}`;
  }).join(" ");
}
function getTokenColor(tokenName) {
  const normalizedName = tokenName.startsWith("--") ? tokenName.slice(2) : tokenName;
  return `var(--${normalizedName})`;
}
function overlayFromToken(tokenName, alpha = 0.08) {
  const normalized = tokenName.startsWith("color-") ? tokenName : `color-${tokenName}`;
  const rgbVar = `--${normalized}-rgb`;
  return `rgba(var(${rgbVar}, 0 0 0), ${alpha})`;
}
function isValidHex(hex) {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
}
function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  let r, g, b;
  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6 || cleanHex.length === 8) {
    r = parseInt(cleanHex.slice(0, 2), 16);
    g = parseInt(cleanHex.slice(2, 4), 16);
    b = parseInt(cleanHex.slice(4, 6), 16);
  } else {
    return "var(--color-black)";
  }
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "var(--color-black)" : "var(--color-white)";
}
var lightTokens = tokens.themes?.light ?? {};
var darkTokens = tokens.themes?.dark ?? {};
var COMPONENT_CLASSES = tokens.semantics?.layoutClasses?.components ?? {};
var SECTION_CLASSES = tokens.semantics?.layoutClasses?.sections ?? {};
var defaultGradientDirections = {
  TO_R: "to-r",
  TO_L: "to-l",
  TO_T: "to-t",
  TO_B: "to-b",
  TO_BR: "to-br",
  TO_BL: "to-bl",
  TO_TR: "to-tr",
  TO_TL: "to-tl",
  TO_BOTTOM: "to-b",
  TO_BOTTOM_RIGHT: "to-br",
  TO_BOTTOM_LEFT: "to-bl",
  TO_TOP_RIGHT: "to-tr",
  TO_TOP_LEFT: "to-tl"
};
var rawGradientDirections = tokens.primitives?.gradientDirections ?? {};
var GRADIENT_DIRECTIONS = rawGradientDirections ?? defaultGradientDirections;
var tokenUtils = {
  // Funções principais
  cn,
  getTheme,
  getThemeColors,
  getStatusColor,
  getBrandColor,
  getTokenColor,
  overlayFromToken,
  isValidHex,
  getContrastColor,
  generateTailwindClasses,
  // Constantes
  Z_INDEX,
  motion,
  motionPresets,
  motionSemantic,
  MOTION,
  COMPONENT_CLASSES,
  SECTION_CLASSES,
  GRADIENT_DIRECTIONS,
  // Tokens diretos
  lightTokens,
  darkTokens
};

export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, GRADIENT_DIRECTIONS, MOTION, SECTION_CLASSES, Z_INDEX, animationDelays, animationDurations, animationEasings, cn, darkTokens, generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getButtonTertiaryColor, getColorFromTheme, getContrastColor, getSemanticColorConstants, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getTheme, getThemeColors, getTokenColor, isValidHex, lightTokens, motion, motionPresets, motionSemantic, motionTokens, overlayFromToken, tokenUtils, tokens };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map