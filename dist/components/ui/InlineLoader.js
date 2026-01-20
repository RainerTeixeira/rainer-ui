'use strict';

require('@rainersoft/design-tokens/formats/css-vars.css');
var tokens = require('@rainersoft/design-tokens');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var tokens__default = /*#__PURE__*/_interopDefault(tokens);

var tokensWithThemes = tokens__default.default;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens__default.default;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var layoutClassesSemantic = tokens__default.default.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens__default.default.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens__default.default.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
tokens__default.default.primitives?.gradientDirections ?? {};
var motionClasses = tokens__default.default.semantics?.motionClasses ?? {};
({
  TRANSITION: {
    DEFAULT: motionClasses.transition?.default,
    FAST: motionClasses.transition?.fast,
    SLOW: motionClasses.transition?.slow,
    COLOR: motionClasses.transition?.color,
    TRANSFORM: motionClasses.transition?.transform,
    OPACITY: motionClasses.transition?.opacity
  }
});
var motionTokens = tokens__default.default.MOTION ?? tokens__default.default.motionTokens ?? tokens__default.default.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens__default.default.semantics?.motion ?? {};
var motionSemantic = motionSemanticTokens;
motion?.delay ?? {};
var ANIMATION_DURATIONS = motion?.duration ?? {};
var ANIMATION_EASINGS = motion?.easing ?? {};
var safeMotionDuration = ANIMATION_DURATIONS;
var safeMotionEasing = ANIMATION_EASINGS;
var defaultDuration = safeMotionDuration?.normal ?? safeMotionDuration?.default;
safeMotionDuration?.fast ?? defaultDuration;
safeMotionDuration?.slow ?? defaultDuration;
var easeInOut = safeMotionEasing?.easeInOut ?? safeMotionEasing?.default;
safeMotionEasing?.easeOut ?? easeInOut;
safeMotionEasing?.spring ?? easeInOut;
var motionSemanticTyped = motionSemantic;
({
  // Presets semânticos
  semantic: {
    transition: motionSemanticTyped.transition?.default,
    interaction: motionSemanticTyped.interaction?.hover,
    feedback: motionSemanticTyped.feedback?.success,
    navigation: motionSemanticTyped.navigation?.page
  }
});
function InlineLoader({
  className,
  size = "sm",
  variant = "spinner"
}) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };
  if (variant === "dots") {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex items-center gap-1", className), "aria-label": "Carregando", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-75" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-150" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    lucideReact.Loader2,
    {
      className: cn("animate-spin", sizeClasses[size], className),
      "aria-label": "Carregando"
    }
  );
}

exports.InlineLoader = InlineLoader;
//# sourceMappingURL=InlineLoader.js.map
//# sourceMappingURL=InlineLoader.js.map