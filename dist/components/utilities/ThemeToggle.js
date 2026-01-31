'use strict';

var React = require('react');
var nextThemes = require('next-themes');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
require('@rainersoft/design-tokens/formats/css-vars.css');
var Moon = require('lucide-react/dist/esm/icons/moon');
var Sun = require('lucide-react/dist/esm/icons/sun');
var jsxRuntime = require('react/jsx-runtime');

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
var tokensData__default = /*#__PURE__*/_interopDefault(tokensData);
var Moon__default = /*#__PURE__*/_interopDefault(Moon);
var Sun__default = /*#__PURE__*/_interopDefault(Sun);

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
var tokens = tokensData__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var primitiveZIndex = tokens.primitives?.zIndex ?? {};
var getZIndexValue = (key, fallback) => {
  const value = primitiveZIndex?.[key];
  return value !== void 0 ? String(value) : String(fallback);
};
({
  base: getZIndexValue("base", 0),
  content: getZIndexValue("content", 100),
  overlay: getZIndexValue("overlay", 200),
  dropdown: getZIndexValue("dropdown", 300),
  modal: getZIndexValue("modal", 400),
  tooltip: getZIndexValue("tooltip", 500),
  notification: getZIndexValue("notification", 600),
  max: getZIndexValue("max", 9999)
});
var motionPrimitives = tokens.primitives?.motion ?? {};
var motionTokens = motionPrimitives;
motionTokens?.delay ?? {};
var animationDurations = motionTokens?.duration ?? {};
var animationEasings = motionTokens?.easing ?? {};
var baseDuration = animationDurations.normal ?? animationDurations.default ?? "200ms";
animationDurations.fast ?? baseDuration;
animationDurations.slow ?? baseDuration;
var easeInOut = animationEasings.easeInOut ?? animationEasings.default ?? "ease-in-out";
animationEasings.easeOut ?? easeInOut;
animationEasings.spring ?? easeInOut;
var fallbackMotionSemantic = {
  };
tokens.semantics?.motion ?? fallbackMotionSemantic;
tokens.themes?.light ?? {};
tokens.themes?.dark ?? {};
tokens.semantics?.layoutClasses?.components ?? {};
tokens.semantics?.layoutClasses?.sections ?? {};
tokens.primitives?.gradientDirections ?? {};
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
          "bg-[var(--color-background-primary)] border border-[var(--color-border-default)] shadow-sm",
          "hover:bg-[var(--color-background-secondary)]",
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
        "bg-[var(--color-background-primary)] border border-[var(--color-border-default)] shadow-sm",
        "hover:bg-[var(--color-background-secondary)]",
        className
      ),
      "aria-label": isDark ? "Mudar para tema claro" : "Mudar para tema escuro",
      children: [
        isDark ? /* @__PURE__ */ jsxRuntime.jsx(
          Moon__default.default,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-[var(--color-text-secondary)]",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          Sun__default.default,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-[var(--color-text-primary)]",
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