'use strict';

var React = require('react');
var nextThemes = require('next-themes');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var lucideReact = require('lucide-react');
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

function useTheme() {
  const { theme, resolvedTheme, setTheme } = nextThemes.useTheme();
  const toggle = React__namespace.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React__namespace.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React__namespace.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React__namespace.useCallback(() => {
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
function ThemeToggle({ className }) {
  const { toggle, isDark } = useTheme();
  const [mounted, setMounted] = React__namespace.useState(false);
  React__namespace.useEffect(() => {
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
          lucideReact.Moon,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-secondary",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.Sun,
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

exports.ThemeToggle = ThemeToggle;
//# sourceMappingURL=ThemeToggle.js.map
//# sourceMappingURL=ThemeToggle.js.map