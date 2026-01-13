'use strict';

// src/types/theme.ts
var DEFAULT_LIGHT_COLORS = {
  primary: "#0891b2",
  primaryForeground: "#ffffff",
  secondary: "#6366f1",
  secondaryForeground: "#ffffff",
  accent: "#f59e0b",
  accentForeground: "#000000",
  background: "#ffffff",
  foreground: "#0a0a0a",
  muted: "#f5f5f5",
  mutedForeground: "#737373",
  card: "#ffffff",
  cardForeground: "#0a0a0a",
  popover: "#ffffff",
  popoverForeground: "#0a0a0a",
  border: "#e5e5e5",
  input: "#e5e5e5",
  ring: "#0891b2",
  destructive: "#ef4444",
  destructiveForeground: "#ffffff",
  success: "#22c55e",
  successForeground: "#ffffff",
  warning: "#f59e0b",
  warningForeground: "#000000",
  info: "#3b82f6",
  infoForeground: "#ffffff"
};
var DEFAULT_DARK_COLORS = {
  primary: "#22d3ee",
  primaryForeground: "#0a0a0a",
  secondary: "#818cf8",
  secondaryForeground: "#0a0a0a",
  accent: "#fbbf24",
  accentForeground: "#0a0a0a",
  background: "#0a0a0a",
  foreground: "#fafafa",
  muted: "#262626",
  mutedForeground: "#a3a3a3",
  card: "#171717",
  cardForeground: "#fafafa",
  popover: "#171717",
  popoverForeground: "#fafafa",
  border: "#262626",
  input: "#262626",
  ring: "#22d3ee",
  destructive: "#dc2626",
  destructiveForeground: "#fafafa",
  success: "#16a34a",
  successForeground: "#fafafa",
  warning: "#d97706",
  warningForeground: "#fafafa",
  info: "#2563eb",
  infoForeground: "#fafafa"
};

// src/lib/adapters/generic.ts
var GENERIC_TOKENS = {
  primitives: {
    colors: {
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
        950: "#083344"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b"
      },
      gray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a"
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16"
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554"
      }
    },
    spacing: {
      0: "0",
      px: "1px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    radius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    shadows: {
      none: "none",
      xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
    },
    motion: {
      duration: {
        instant: "0ms",
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
        slower: "700ms"
      },
      easing: {
        linear: "linear",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        easeOut: "cubic-bezier(0, 0, 0.2, 1)",
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      },
      delay: {
        none: "0ms",
        short: "75ms",
        medium: "150ms",
        long: "300ms"
      }
    },
    breakpoints: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    zIndex: {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1e3,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800
    }
  },
  semantics: {
    text: {
      primary: "#0a0a0a",
      secondary: "#525252",
      tertiary: "#737373",
      disabled: "#a3a3a3",
      inverse: "#fafafa",
      link: "#0891b2",
      linkHover: "#0e7490"
    },
    background: {
      primary: "#ffffff",
      secondary: "#f5f5f5",
      tertiary: "#e5e5e5",
      disabled: "#f5f5f5",
      overlay: "rgba(0, 0, 0, 0.5)",
      inverse: "#0a0a0a",
      muted: "#f5f5f5"
    },
    border: {
      default: "#e5e5e5",
      light: "#f5f5f5",
      medium: "#d4d4d4",
      dark: "#a3a3a3",
      focus: "#0891b2",
      error: "#ef4444",
      success: "#22c55e",
      warning: "#f59e0b"
    },
    status: {
      success: { base: "#22c55e", text: "#ffffff", background: "#dcfce7" },
      error: { base: "#ef4444", text: "#ffffff", background: "#fee2e2" },
      warning: { base: "#f59e0b", text: "#000000", background: "#fef3c7" },
      info: { base: "#3b82f6", text: "#ffffff", background: "#dbeafe" }
    },
    surface: {
      primary: "#ffffff",
      elevated: "#ffffff",
      raised: "#fafafa",
      sunken: "#f5f5f5"
    }
  },
  themes: {
    light: {
      text: {
        primary: "#0a0a0a",
        secondary: "#525252",
        tertiary: "#737373"
      },
      background: {
        primary: "#ffffff",
        secondary: "#f5f5f5",
        tertiary: "#e5e5e5"
      },
      border: {
        default: "#e5e5e5",
        focus: "#0891b2"
      }
    },
    dark: {
      text: {
        primary: "#fafafa",
        secondary: "#a3a3a3",
        tertiary: "#737373"
      },
      background: {
        primary: "#0a0a0a",
        secondary: "#171717",
        tertiary: "#262626"
      },
      border: {
        default: "#262626",
        focus: "#22d3ee"
      }
    }
  }
};
var genericAdapter = {
  name: "generic",
  version: "1.0.0",
  tokens: GENERIC_TOKENS,
  lightColors: DEFAULT_LIGHT_COLORS,
  darkColors: DEFAULT_DARK_COLORS
};
var createGenericAdapter = (options) => {
  return {
    ...genericAdapter,
    ...options?.customTransforms && { customTransforms: options.customTransforms }
  };
};

exports.GENERIC_TOKENS = GENERIC_TOKENS;
exports.createGenericAdapter = createGenericAdapter;
exports.genericAdapter = genericAdapter;
//# sourceMappingURL=generic.js.map
//# sourceMappingURL=generic.js.map