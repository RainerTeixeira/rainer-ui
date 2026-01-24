'use strict';

var React3 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
require('@rainersoft/design-tokens/formats/css-vars.css');
var jsxRuntime = require('react/jsx-runtime');
var Check = require('lucide-react/dist/esm/icons/check');
var Copy = require('lucide-react/dist/esm/icons/copy');
var reactSlot = require('@radix-ui/react-slot');
var QuoteIcon = require('lucide-react/dist/esm/icons/quote');

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

var React3__namespace = /*#__PURE__*/_interopNamespace(React3);
var tokensData__default = /*#__PURE__*/_interopDefault(tokensData);
var Check__default = /*#__PURE__*/_interopDefault(Check);
var Copy__default = /*#__PURE__*/_interopDefault(Copy);
var QuoteIcon__default = /*#__PURE__*/_interopDefault(QuoteIcon);

var tokens = tokensData__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
({
  base: String(tokens.primitives?.zIndex?.base ?? 100),
  navigation: String(tokens.primitives?.zIndex?.content ?? 150),
  dropdown: String(tokens.primitives?.zIndex?.dropdown ?? 300),
  modal: String(tokens.primitives?.zIndex?.modal ?? 400),
  overlay: String(tokens.primitives?.zIndex?.overlay ?? 400),
  sticky: String(tokens.primitives?.zIndex?.sticky ?? 200),
  fixed: String(tokens.primitives?.zIndex?.fixed ?? 300),
  tooltip: String(tokens.primitives?.zIndex?.tooltip ?? 500)
});
var motionTokens = tokens.primitives?.motion ?? {};
motionTokens.delay ?? {};
var animationDurations = motionTokens.duration ?? {};
var animationEasings = motionTokens.easing ?? {};
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
var kbdVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded border font-mono text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground shadow-sm",
        outline: "border-border bg-transparent text-foreground",
        filled: "border-border bg-muted text-foreground",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        neon: "neon-border bg-background text-primary dark:shadow-glow-cyan"
      },
      size: {
        xs: "h-5 px-1.5 text-[10px]",
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-xs",
        lg: "h-8 px-3 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
);
var Kbd = React3__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "kbd",
      {
        ref,
        className: cn(kbdVariants({ variant, size }), className),
        ...props,
        children
      }
    );
  }
);
Kbd.displayName = "Kbd";
var KbdCombo = React3__namespace.forwardRef(
  ({
    className,
    keys,
    separator = "+",
    size = "sm",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1", className),
        ...props,
        children: keys.map((key, index) => /* @__PURE__ */ jsxRuntime.jsxs(React3__namespace.Fragment, { children: [
          index > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground text-xs font-normal", children: separator }),
          /* @__PURE__ */ jsxRuntime.jsx(Kbd, { size, variant, children: key })
        ] }, index))
      }
    );
  }
);
KbdCombo.displayName = "KbdCombo";
var KeyboardShortcuts = {
  // Windows/Linux
  CtrlC: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "C"] }),
  CtrlV: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "V"] }),
  CtrlX: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "X"] }),
  CtrlZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "Z"] }),
  CtrlY: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "Y"] }),
  CtrlA: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "A"] }),
  CtrlS: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "S"] }),
  CtrlF: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "F"] }),
  CtrlP: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "P"] }),
  Delete: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Delete" }),
  Enter: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Enter" }),
  Esc: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Esc" }),
  Space: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Space" }),
  Tab: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Tab" }),
  ShiftTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Shift", "Tab"] }),
  AltTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Alt", "Tab"] }),
  // macOS
  CmdC: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "C"] }),
  CmdV: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "V"] }),
  CmdX: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "X"] }),
  CmdZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Z"] }),
  CmdShiftZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Shift", "Z"] }),
  CmdA: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "A"] }),
  CmdS: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "S"] }),
  CmdF: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "F"] }),
  CmdP: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "P"] }),
  CmdSpace: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Space"] }),
  OptionTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2325", "Tab"] }),
  // Setas
  ArrowUp: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2191" }),
  ArrowDown: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2193" }),
  ArrowLeft: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2190" }),
  ArrowRight: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2192" }),
  // Função
  F1: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F1" }),
  F2: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F2" }),
  F3: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F3" }),
  F4: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F4" }),
  F5: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F5" }),
  F6: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F6" }),
  F7: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F7" }),
  F8: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F8" }),
  F9: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F9" }),
  F10: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F10" }),
  F11: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F11" }),
  F12: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F12" })
};
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
var ButtonComponent = React3__namespace.forwardRef(
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
      const child = React3__namespace.Children.only(children);
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
var codeVariants = classVarianceAuthority.cva(
  "rounded-md font-mono text-sm",
  {
    variants: {
      variant: {
        inline: "bg-muted px-1.5 py-0.5 text-[13px]",
        block: "bg-muted p-4 text-sm",
        ghost: "bg-transparent px-1.5 py-0.5 text-[13px]",
        neon: "bg-primary/10 text-primary px-1.5 py-0.5 text-[13px] dark:bg-primary/20",
        success: "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 text-[13px] dark:bg-emerald-900/20 dark:text-emerald-400",
        warning: "bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] dark:bg-amber-900/20 dark:text-amber-400",
        error: "bg-red-100 text-red-800 px-1.5 py-0.5 text-[13px] dark:bg-red-900/20 dark:text-red-400"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      variant: "inline",
      size: "sm"
    }
  }
);
var Code = React3__namespace.forwardRef(
  ({
    className,
    variant = "inline",
    size = "sm",
    language,
    showCopy = false,
    wrap = false,
    startLine = 1,
    showLineNumbers = false,
    children,
    ...props
  }, ref) => {
    const [copied, setCopied] = React3__namespace.useState(false);
    const codeRef = React3__namespace.useRef(null);
    const handleCopy = React3__namespace.useCallback(async () => {
      if (codeRef.current) {
        const text = codeRef.current.textContent || "";
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      }
    }, []);
    if (variant === "inline" || variant === "ghost" || variant === "neon" || variant === "success" || variant === "warning" || variant === "error") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "code",
        {
          ref,
          className: cn(codeVariants({ variant, size }), className),
          ...props,
          children
        }
      );
    }
    const codeString = typeof children === "string" ? children : String(children);
    const lines = codeString.split("\n");
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative group", children: [
      (language || showCopy) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50 rounded-t-md", children: [
        language && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase", children: language }),
        showCopy && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 px-2 text-xs",
            onClick: handleCopy,
            children: copied ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(Check__default.default, { className: "h-3 w-3 mr-1" }),
              "Copiado!"
            ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(Copy__default.default, { className: "h-3 w-3 mr-1" }),
              "Copiar"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "pre",
        {
          className: cn(
            codeVariants({ variant: "block", size }),
            wrap && "whitespace-pre-wrap break-all",
            !showLineNumbers && "overflow-x-auto",
            language && !showCopy && "rounded-t-md border-t border-border",
            className
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx("code", { ref, ...props, children: showLineNumbers ? /* @__PURE__ */ jsxRuntime.jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: lines.map((line, index) => /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "hover:bg-muted/50", children: [
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "sticky left-0 w-12 px-3 py-0 text-right text-muted-foreground select-none bg-muted/50", children: startLine + index }),
            /* @__PURE__ */ jsxRuntime.jsx("td", { className: "px-0 py-0", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "block px-4 py-0", children: line || "\xA0" }) })
          ] }, index)) }) }) : children })
        }
      )
    ] });
  }
);
Code.displayName = "Code";
var CodeInline = React3__namespace.forwardRef(
  ({
    className,
    color = "default",
    ...props
  }, ref) => {
    const resolvedVariant = color === "default" ? "inline" : color;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Code,
      {
        ref,
        variant: resolvedVariant,
        className,
        ...props
      }
    );
  }
);
CodeInline.displayName = "CodeInline";
var CodeBlock = React3__namespace.forwardRef(
  ({
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Code,
      {
        ref,
        variant: "block",
        className,
        ...props
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
var quoteVariants = classVarianceAuthority.cva(
  "relative border-l-4 pl-6 italic",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-muted",
        primary: "border-primary",
        secondary: "border-secondary",
        success: "border-emerald-500",
        warning: "border-amber-500",
        error: "border-red-500",
        testimonial: "border-transparent bg-muted/30 rounded-lg p-6",
        card: "border-border bg-card rounded-lg p-6 shadow-sm",
        glass: "glass border-transparent rounded-lg p-6",
        neon: "neon-border rounded-lg p-6"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Quote = React3__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    author,
    source,
    sourceUrl,
    showIcon = false,
    icon,
    iconPosition = "top",
    children,
    ...props
  }, ref) => {
    const IconComponent = icon || (variant === "testimonial" || variant === "card" ? /* @__PURE__ */ jsxRuntime.jsx(QuoteIcon__default.default, { className: "h-8 w-8 text-primary/20" }) : /* @__PURE__ */ jsxRuntime.jsx(QuoteIcon__default.default, { className: "h-4 w-4 text-muted-foreground" }));
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "blockquote",
      {
        ref,
        className: cn(
          quoteVariants({ variant, size }),
          (variant === "testimonial" || variant === "card" || variant === "glass" || variant === "neon") && "border-l-0",
          className
        ),
        ...props,
        children: [
          showIcon && iconPosition === "top" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute -top-2 -left-2", children: IconComponent }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative", children }),
          (author || source) && /* @__PURE__ */ jsxRuntime.jsxs("footer", { className: "mt-4 not-italic", children: [
            author && /* @__PURE__ */ jsxRuntime.jsx("cite", { className: "font-semibold not-italic text-foreground", children: author }),
            source && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              author && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground mx-2", children: "\u2022" }),
              sourceUrl ? /* @__PURE__ */ jsxRuntime.jsx(
                "a",
                {
                  href: sourceUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-foreground underline",
                  children: source
                }
              ) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: source })
            ] })
          ] }),
          showIcon && iconPosition === "bottom" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute -bottom-2 -right-2", children: IconComponent })
        ]
      }
    );
  }
);
Quote.displayName = "Quote";
var QuoteTestimonial = React3__namespace.forwardRef(
  ({
    className,
    author,
    source,
    avatar,
    rating,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("bg-card rounded-lg p-6 shadow-sm", className), children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Quote,
        {
          ref,
          variant: "testimonial",
          author,
          source,
          showIcon: true,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mt-4", children: [
        avatar && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src: avatar,
              alt: author,
              className: "h-10 w-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            author && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-semibold text-foreground", children: author }),
            source && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground", children: source })
          ] })
        ] }),
        rating && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: cn(
              "text-lg",
              i < rating ? "text-amber-400" : "text-muted-foreground/30"
            ),
            children: "\u2605"
          },
          i
        )) })
      ] })
    ] });
  }
);
QuoteTestimonial.displayName = "QuoteTestimonial";
var QuoteBlock = React3__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative my-8 py-8", children: /* @__PURE__ */ jsxRuntime.jsx(
      Quote,
      {
        ref,
        variant: "default",
        size: "xl",
        className: cn(
          "text-center border-l-0 border-r-0 border-t-2 border-b-2 border-border py-8",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl md:text-3xl font-normal text-muted-foreground", children })
      }
    ) });
  }
);
QuoteBlock.displayName = "QuoteBlock";

exports.Code = Code;
exports.CodeBlock = CodeBlock;
exports.CodeInline = CodeInline;
exports.Kbd = Kbd;
exports.KbdCombo = KbdCombo;
exports.KeyboardShortcuts = KeyboardShortcuts;
exports.Quote = Quote;
exports.QuoteBlock = QuoteBlock;
exports.QuoteTestimonial = QuoteTestimonial;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map