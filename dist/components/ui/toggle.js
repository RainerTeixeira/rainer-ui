'use strict';

var React = require('react');
var TogglePrimitive = require('@radix-ui/react-toggle');
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
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
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
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React__namespace.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TogglePrimitive__namespace.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive__namespace.Root.displayName;

exports.Toggle = Toggle;
exports.toggleVariants = toggleVariants;
//# sourceMappingURL=toggle.js.map
//# sourceMappingURL=toggle.js.map