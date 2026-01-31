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
var spacerVariants = classVarianceAuthority.cva(
  "",
  {
    variants: {
      size: {
        xs: "h-2 w-2",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
        "2xl": "h-12 w-12",
        "3xl": "h-16 w-16",
        "4xl": "h-20 w-20"
      },
      direction: {
        horizontal: "flex-1 h-px",
        vertical: "w-px flex-1",
        both: "flex-1"
      },
      variant: {
        default: "bg-transparent",
        line: "bg-border",
        dotted: "bg-transparent border-dashed",
        gradient: "bg-gradient-to-r from-transparent via-border to-transparent"
      }
    },
    defaultVariants: {
      size: "md",
      direction: "both",
      variant: "default"
    }
  }
);
var Spacer = React__namespace.forwardRef(
  ({
    className,
    size = "md",
    direction = "both",
    variant = "default",
    width,
    height,
    flex = true,
    invisible = false,
    style,
    ...props
  }, ref) => {
    const spacerStyle = React__namespace.useMemo(() => {
      const customStyle = { ...style };
      if (width !== void 0) {
        customStyle.width = typeof width === "number" ? `${width}px` : width;
      }
      if (height !== void 0) {
        customStyle.height = typeof height === "number" ? `${height}px` : height;
      }
      if (flex) {
        customStyle.flex = "1";
      }
      if (invisible) {
        customStyle.visibility = "hidden";
      }
      return customStyle;
    }, [style, width, height, flex, invisible]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          spacerVariants({ size, direction, variant }),
          !flex && "flex-none",
          variant === "dotted" && "border-b border-border",
          className
        ),
        style: spacerStyle,
        "aria-hidden": "true",
        ...props
      }
    );
  }
);
Spacer.displayName = "Spacer";
var VerticalSpacer = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Spacer,
      {
        ref,
        direction: "vertical",
        ...props
      }
    );
  }
);
VerticalSpacer.displayName = "VerticalSpacer";
var HorizontalSpacer = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Spacer,
      {
        ref,
        direction: "horizontal",
        ...props
      }
    );
  }
);
HorizontalSpacer.displayName = "HorizontalSpacer";

exports.HorizontalSpacer = HorizontalSpacer;
exports.Spacer = Spacer;
exports.VerticalSpacer = VerticalSpacer;
//# sourceMappingURL=spacer.js.map
//# sourceMappingURL=spacer.js.map