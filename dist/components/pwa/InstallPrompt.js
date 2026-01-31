'use strict';

var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
require('@rainersoft/design-tokens/formats/css-vars.css');
var nextThemes = require('next-themes');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var tokensData__default = /*#__PURE__*/_interopDefault(tokensData);

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
var Button = React__default.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      ),
      ...props,
      children
    }
  )
);
Button.displayName = "Button";
var Card = React__default.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      ),
      ...props,
      children
    }
  )
);
Card.displayName = "Card";
function InstallPrompt() {
  const { resolvedTheme } = nextThemes.useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showPrompt, setShowPrompt] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3e3);
      return () => clearTimeout(timer);
    }
    return void 0;
  }, []);
  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-dismissed", "true");
  };
  const handleInstall = async () => {
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
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none",
          "animate-in slide-in-from-bottom-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Card,
          {
            className: cn(
              "max-w-2xl mx-auto pointer-events-auto backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-primary-base/50", "shadow-glow-cyan") : cn("bg-background/90", "border-primary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "shrink-0 p-3 rounded-full border",
                    "bg-primary-background",
                    "border-primary-base/30"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Download, { className: cn("h-6 w-6", "text-primary-base") })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-3", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "h3",
                    {
                      className: cn(
                        "text-lg font-bold font-mono",
                        "text-foreground"
                      ),
                      children: "\u{1F4F1} Instalar no seu Dispositivo"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      onClick: handleDismiss,
                      className: cn(
                        "transition-colors p-1 rounded",
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      "aria-label": "Fechar",
                      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "p",
                  {
                    className: cn(
                      "text-sm",
                      "text-muted-foreground"
                    ),
                    children: "Instale como app nativo para acesso r\xE1pido sem navegador e funcionalidade offline completa."
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    Button,
                    {
                      onClick: handleInstall,
                      className: cn(
                        "font-mono font-bold text-sm px-3 py-1.5",
                        "bg-primary text-primary-foreground hover:bg-primary-hover"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Download, { className: "h-4 w-4 mr-2" }),
                        "Instalar App"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Button,
                    {
                      onClick: handleDismiss,
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

exports.InstallPrompt = InstallPrompt;
//# sourceMappingURL=InstallPrompt.js.map
//# sourceMappingURL=InstallPrompt.js.map