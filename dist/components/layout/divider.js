'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
require('@rainersoft/design-tokens/formats/css-vars.css');
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
var dividerVariants = classVarianceAuthority.cva(
  "border-t",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-muted",
        primary: "border-primary",
        secondary: "border-secondary",
        dashed: "border-dashed",
        dotted: "border-dotted",
        gradient: "border-none bg-gradient-to-r from-transparent via-border to-transparent h-px"
      },
      size: {
        xs: "border-t-0.5",
        sm: "border-t",
        md: "border-t-2",
        lg: "border-t-4"
      },
      orientation: {
        horizontal: "w-full",
        vertical: "h-full border-l border-t-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      orientation: "horizontal"
    }
  }
);
var Divider = React__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    orientation = "horizontal",
    label,
    labelPosition = "center",
    labelComponent,
    ...props
  }, ref) => {
    if (label || labelComponent) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref,
          className: cn(
            "flex items-center gap-4",
            orientation === "vertical" && "flex-col",
            className
          ),
          role: "separator",
          "aria-orientation": orientation,
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  dividerVariants({ variant, size, orientation }),
                  labelPosition === "center" && "flex-1",
                  labelPosition === "end" && "flex-1",
                  labelPosition === "start" && "flex-none w-10"
                )
              }
            ),
            labelComponent || /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: label }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  dividerVariants({ variant, size, orientation }),
                  labelPosition === "center" && "flex-1",
                  labelPosition === "start" && "flex-1",
                  labelPosition === "end" && "flex-none w-10"
                )
              }
            )
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          dividerVariants({ variant, size, orientation }),
          className
        ),
        role: "separator",
        "aria-orientation": orientation,
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";
var spacingClasses = {
  sm: "my-4",
  md: "my-6",
  lg: "my-8",
  xl: "my-12"
};
var SectionDivider = React__namespace.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(spacingClasses[spacing], className), children: /* @__PURE__ */ jsxRuntime.jsx(Divider, { ref, size: "md", ...props }) });
  }
);
SectionDivider.displayName = "SectionDivider";
var textColorClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground"
};
var TextDivider = React__namespace.forwardRef(
  ({
    className,
    children,
    textColor = "muted",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-4", className),
        role: "separator",
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("text-sm font-medium whitespace-nowrap", textColorClasses[textColor]), children }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 h-px bg-border" })
        ]
      }
    );
  }
);
TextDivider.displayName = "TextDivider";

exports.Divider = Divider;
exports.SectionDivider = SectionDivider;
exports.TextDivider = TextDivider;
//# sourceMappingURL=divider.js.map
//# sourceMappingURL=divider.js.map