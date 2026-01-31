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
var segmentedControlVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded-lg border border-border bg-background p-1 text-foreground",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base"
      },
      variant: {
        default: "",
        pill: "rounded-full",
        neon: "neon-border dark:shadow-glow-cyan",
        glass: "glass border-border"
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      fullWidth: false
    }
  }
);
var SegmentedControl = React__namespace.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    fullWidth = false,
    options,
    value,
    onChange,
    defaultValue,
    disabled = false,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React__namespace.useState(defaultValue || options[0]?.value);
    const currentValue = value !== void 0 ? value : internalValue;
    const handleOptionClick = React__namespace.useCallback((optionValue, isDisabled) => {
      if (isDisabled || disabled) return;
      if (value === void 0) {
        setInternalValue(optionValue);
      }
      onChange?.(optionValue);
    }, [value, onChange, disabled]);
    const sizeClasses = {
      sm: "px-3 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base"
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          segmentedControlVariants({ size, variant, fullWidth }),
          disabled && "opacity-50 pointer-events-none",
          className
        ),
        role: "radiogroup",
        ...props,
        children: options.map((option) => {
          const isActive = currentValue === option.value;
          const isDisabled = option.disabled || disabled;
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": isActive,
              disabled: isDisabled,
              className: cn(
                "flex items-center justify-center gap-2 font-medium transition-all duration-[var(--motion-duration-fast)]",
                "rounded-md",
                sizeClasses[size],
                isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                isDisabled && "pointer-events-none opacity-50",
                fullWidth && "flex-1"
              ),
              onClick: () => handleOptionClick(option.value, isDisabled),
              children: [
                option.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-4 w-4", children: option.icon }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: option.label })
              ]
            },
            option.value
          );
        })
      }
    );
  }
);
SegmentedControl.displayName = "SegmentedControl";
var SegmentedControlItem = React__namespace.forwardRef(
  ({
    className,
    active = false,
    size = "md",
    icon,
    children,
    ...props
  }, ref) => {
    const sizeClasses = {
      sm: "px-3 py-1 text-xs h-8",
      md: "px-4 py-2 text-sm h-10",
      lg: "px-6 py-3 text-base h-12"
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        ref,
        type: "button",
        className: cn(
          "flex items-center justify-center gap-2 font-medium transition-all duration-[var(--motion-duration-fast)]",
          "rounded-md",
          sizeClasses[size],
          active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
          className
        ),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-4 w-4", children: icon }),
          children
        ]
      }
    );
  }
);
SegmentedControlItem.displayName = "SegmentedControlItem";

exports.SegmentedControl = SegmentedControl;
exports.SegmentedControlItem = SegmentedControlItem;
//# sourceMappingURL=segmented-control.js.map
//# sourceMappingURL=segmented-control.js.map