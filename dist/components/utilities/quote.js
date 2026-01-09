"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var quote_exports = {};
__export(quote_exports, {
  Quote: () => Quote,
  QuoteBlock: () => QuoteBlock,
  QuoteTestimonial: () => QuoteTestimonial
});
module.exports = __toCommonJS(quote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const quoteVariants = (0, import_class_variance_authority.cva)(
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
const Quote = React.forwardRef(
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
    const IconComponent = icon || (variant === "testimonial" || variant === "card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Quote, { className: "h-8 w-8 text-primary/20" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Quote, { className: "h-4 w-4 text-muted-foreground" }));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "blockquote",
      {
        ref,
        className: (0, import_utils.cn)(
          quoteVariants({ variant, size }),
          (variant === "testimonial" || variant === "card" || variant === "glass" || variant === "neon") && "border-l-0",
          className
        ),
        ...props,
        children: [
          showIcon && iconPosition === "top" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-2 -left-2", children: IconComponent }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative", children }),
          (author || source) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { className: "mt-4 not-italic", children: [
            author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", { className: "font-semibold not-italic text-foreground", children: author }),
            source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground mx-2", children: "\u2022" }),
              sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "a",
                {
                  href: sourceUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-foreground underline",
                  children: source
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-muted-foreground", children: source })
            ] })
          ] }),
          showIcon && iconPosition === "bottom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-2 -right-2", children: IconComponent })
        ]
      }
    );
  }
);
Quote.displayName = "Quote";
const QuoteTestimonial = React.forwardRef(
  ({
    className,
    author,
    source,
    avatar,
    rating,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)("bg-card rounded-lg p-6 shadow-sm", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between mt-4", children: [
        avatar && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              src: avatar,
              alt: author,
              className: "h-10 w-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-semibold text-foreground", children: author }),
            source && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-muted-foreground", children: source })
          ] })
        ] }),
        rating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            className: (0, import_utils.cn)(
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
const QuoteBlock = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative my-8 py-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Quote,
      {
        ref,
        variant: "default",
        size: "xl",
        className: (0, import_utils.cn)(
          "text-center border-l-0 border-r-0 border-t-2 border-b-2 border-border py-8",
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-2xl md:text-3xl font-normal text-muted-foreground", children })
      }
    ) });
  }
);
QuoteBlock.displayName = "QuoteBlock";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Quote,
  QuoteBlock,
  QuoteTestimonial
});
//# sourceMappingURL=quote.js.map