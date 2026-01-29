'use strict';

var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
var utils = require('@rainersoft/utils');
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
var sizeClasses = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
  "2xl": "h-20 w-20 text-xl",
  "3xl": "h-24 w-24 text-2xl"
};
var variantClasses = {
  circular: "rounded-full",
  rounded: "rounded-xl",
  square: "rounded-lg"
};
function getColorFromName(name) {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-pink-400 to-pink-600",
    "from-indigo-400 to-indigo-600",
    "from-cyan-400 to-cyan-600",
    "from-emerald-400 to-emerald-600",
    "from-rose-400 to-rose-600",
    "from-amber-400 to-amber-600",
    "from-teal-400 to-teal-600"
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
var Avatar = React__namespace.forwardRef(
  ({
    className,
    src,
    alt,
    name,
    size = "md",
    variant = "circular",
    fallbackColor,
    textColor = "text-white",
    maxInitials = 2,
    onLoad,
    onError,
    children,
    ...props
  }, ref) => {
    const [imageStatus, setImageStatus] = React__namespace.useState("loading");
    const [showFallback, setShowFallback] = React__namespace.useState(!src);
    React__namespace.useEffect(() => {
      if (!src) {
        setShowFallback(true);
        setImageStatus("error");
        return;
      }
      setImageStatus("loading");
      setShowFallback(false);
      const img = new Image();
      img.onload = () => {
        setImageStatus("loaded");
        onLoad?.();
      };
      img.onerror = () => {
        setImageStatus("error");
        setShowFallback(true);
        onError?.();
      };
      img.src = src;
    }, [src, onLoad, onError]);
    const initials = name ? utils.getInitials(name, maxInitials) : "";
    const ariaLabel = alt || name || "Avatar";
    const autoColor = name && !fallbackColor ? getColorFromName(name) : "";
    const bgClass = fallbackColor || (autoColor ? `bg-gradient-to-br ${autoColor}` : "bg-gray-500");
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          "relative inline-flex items-center justify-center font-medium select-none",
          "transition-all duration-200 ease-in-out",
          sizeClasses[size],
          variantClasses[variant],
          showFallback ? bgClass : "bg-transparent",
          textColor,
          "shadow-sm hover:shadow-md",
          className
        ),
        role: "img",
        "aria-label": ariaLabel,
        ...props,
        children: [
          showFallback ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center", children: initials ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold tracking-wide", children: initials }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "opacity-60 text-2xl", children: "?" }) }) : /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src,
              alt,
              className: cn(
                "h-full w-full object-cover",
                variantClasses[variant],
                "transition-opacity duration-200"
              ),
              style: {
                opacity: imageStatus === "loaded" ? 1 : 0
              }
            }
          ),
          imageStatus === "loading" && !showFallback && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" }) }),
          children
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";
var AvatarImage = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "img",
  {
    ref,
    className: cn("h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center font-medium",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";

exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
//# sourceMappingURL=avatar.js.map
//# sourceMappingURL=avatar.js.map