'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var QuoteIcon = require('lucide-react/dist/esm/icons/quote');
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

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var QuoteIcon__default = /*#__PURE__*/_interopDefault(QuoteIcon);
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
var Quote = React__namespace.forwardRef(
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
var QuoteTestimonial = React__namespace.forwardRef(
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
var QuoteBlock = React__namespace.forwardRef(
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

exports.Quote = Quote;
exports.QuoteBlock = QuoteBlock;
exports.QuoteTestimonial = QuoteTestimonial;
//# sourceMappingURL=Quote.js.map
//# sourceMappingURL=Quote.js.map