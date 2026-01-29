'use strict';

var React2 = require('react');
var lucideReact = require('lucide-react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
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

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var tokensData__default = /*#__PURE__*/_interopDefault(tokensData);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
var ButtonComponent = React2__namespace.forwardRef(
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
      const child = React2__namespace.Children.only(children);
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
var Card = React2__namespace.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      // Base styles
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      // Variant styles
      variant === "default" && "border-border bg-background dark:bg-black/40 dark:border-cyan-400/20",
      variant === "outline" && "border-2 border-border bg-transparent dark:border-cyan-400/30",
      variant === "elevated" && "border-border/50 shadow-lg dark:bg-black/60 dark:border-cyan-400/20 dark:shadow-cyan-500/10",
      variant === "glass" && "border-border/20 bg-background/80 backdrop-blur-md dark:bg-black/40 dark:border-cyan-400/30 dark:backdrop-blur-xl",
      // Transitions
      "transition-all duration-200",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "flex flex-col space-y-1.5 p-6",
      "dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      "dark:text-cyan-200 dark:font-mono",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground",
      "dark:text-cyan-400/80",
      className
    ),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "flex items-center p-6 pt-0",
      "dark:border-t dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var ErrorBoundary = class extends React2.Component {
  constructor(props) {
    super(props);
    __publicField(this, "handleReset", () => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null
      });
    });
    __publicField(this, "handleGoHome", () => {
      window.location.href = "/";
    });
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: this.props.fallback });
      }
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "min-h-screen flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertTriangle, { className: "h-8 w-8 text-destructive" }) }),
          /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "text-2xl", children: "Ops! Algo deu errado" }),
          /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { children: "Encontramos um erro inesperado. Por favor, tente novamente." })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
          process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-mono text-muted-foreground", children: this.state.error.toString() }),
            this.state.errorInfo && /* @__PURE__ */ jsxRuntime.jsxs("details", { className: "mt-2", children: [
              /* @__PURE__ */ jsxRuntime.jsx("summary", { className: "cursor-pointer text-sm text-muted-foreground hover:text-foreground", children: "Stack trace" }),
              /* @__PURE__ */ jsxRuntime.jsx("pre", { className: "mt-2 text-xs overflow-auto", children: this.state.errorInfo.componentStack })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsxs(Button, { onClick: this.handleReset, variant: "outline", className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.RefreshCw, { className: "h-4 w-4 mr-2" }),
              "Tentar Novamente"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs(Button, { onClick: this.handleGoHome, className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Home, { className: "h-4 w-4 mr-2" }),
              "Ir para Home"
            ] })
          ] })
        ] })
      ] }) });
    }
    return this.props.children;
  }
};

exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map
//# sourceMappingURL=ErrorBoundary.js.map