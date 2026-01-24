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
var flexVariants = classVarianceAuthority.cva(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        "row-reverse": "flex-row-reverse",
        col: "flex-col",
        "col-reverse": "flex-col-reverse"
      },
      wrap: {
        nowrap: "flex-nowrap",
        wrap: "flex-wrap",
        "wrap-reverse": "flex-wrap-reverse"
      },
      align: {
        start: "items-start",
        end: "items-end",
        center: "items-center",
        baseline: "items-baseline",
        stretch: "items-stretch"
      },
      justify: {
        start: "justify-start",
        end: "justify-end",
        center: "justify-center",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      },
      gap: {
        0: "gap-0",
        1: "gap-1",
        2: "gap-2",
        3: "gap-3",
        4: "gap-4",
        5: "gap-5",
        6: "gap-6",
        8: "gap-8",
        10: "gap-10",
        12: "gap-12",
        px: "gap-px"
      },
      gapX: {
        0: "gap-x-0",
        1: "gap-x-1",
        2: "gap-x-2",
        3: "gap-x-3",
        4: "gap-x-4",
        5: "gap-x-5",
        6: "gap-x-6",
        8: "gap-x-8",
        10: "gap-x-10",
        12: "gap-x-12",
        px: "gap-x-px"
      },
      gapY: {
        0: "gap-y-0",
        1: "gap-y-1",
        2: "gap-y-2",
        3: "gap-y-3",
        4: "gap-y-4",
        5: "gap-y-5",
        6: "gap-y-6",
        8: "gap-y-8",
        10: "gap-y-10",
        12: "gap-y-12",
        px: "gap-y-px"
      }
    }
  }
);
var Flex = React__namespace.forwardRef(
  ({
    className,
    direction = "row",
    wrap = "nowrap",
    align,
    justify,
    gap,
    gapX,
    gapY,
    full = false,
    fullHeight = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          flexVariants({
            direction,
            wrap,
            align,
            justify,
            gap,
            gapX,
            gapY
          }),
          full && "w-full",
          fullHeight && "min-h-screen",
          className
        ),
        ...props
      }
    );
  }
);
Flex.displayName = "Flex";
var FlexCenter = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        align: "center",
        justify: "center",
        ...props
      }
    );
  }
);
FlexCenter.displayName = "FlexCenter";
var FlexBetween = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        justify: "between",
        ...props
      }
    );
  }
);
FlexBetween.displayName = "FlexBetween";
var FlexStart = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        align: "start",
        justify: "start",
        ...props
      }
    );
  }
);
FlexStart.displayName = "FlexStart";
var FlexEnd = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        align: "end",
        justify: "end",
        ...props
      }
    );
  }
);
FlexEnd.displayName = "FlexEnd";
var FlexColumn = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        direction: "col",
        ...props
      }
    );
  }
);
FlexColumn.displayName = "FlexColumn";
var FlexRow = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        direction: "row",
        ...props
      }
    );
  }
);
FlexRow.displayName = "FlexRow";

exports.Flex = Flex;
exports.FlexBetween = FlexBetween;
exports.FlexCenter = FlexCenter;
exports.FlexColumn = FlexColumn;
exports.FlexEnd = FlexEnd;
exports.FlexRow = FlexRow;
exports.FlexStart = FlexStart;
//# sourceMappingURL=flex.js.map
//# sourceMappingURL=flex.js.map