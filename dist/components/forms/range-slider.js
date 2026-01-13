'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');

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

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens.primitives.motion;
var motionSemantic = designTokens.tokens.semantics.motion || {
  transition: {
    default: {
      duration: motion.duration.normal,
      easing: motion.easing.easeInOut
    }
  },
  interaction: {
    hover: {
      duration: motion.duration.fast,
      easing: motion.easing.easeOut
    }
  },
  feedback: {
    success: {
      duration: motion.duration.slower,
      easing: motion.easing.spring
    }
  },
  navigation: {
    page: {
      duration: motion.duration.slow,
      easing: motion.easing.easeInOut
    }
  }
};
motion.delay;
motion.duration;
motion.easing;
({
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring
  },
  // Presets semânticos
  transition: motionSemantic.transition.default,
  interaction: motionSemantic.interaction.hover,
  feedback: motionSemantic.feedback.success,
  navigation: motionSemantic.navigation.page
});
var rangeSliderVariants = classVarianceAuthority.cva(
  "relative flex items-center select-none touch-none w-full",
  {
    variants: {
      size: {
        sm: "h-5",
        md: "h-6",
        lg: "h-7"
      },
      variant: {
        default: "",
        colored: ""
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
var RangeSlider = React__namespace.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    value,
    defaultValue = { min: 0, max: 100 },
    onChange,
    onChangeEnd,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    showValue = false,
    labels,
    prefix,
    suffix,
    color = "primary",
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React__namespace.useState(defaultValue);
    const [isDragging, setIsDragging] = React__namespace.useState(null);
    const sliderRef = React__namespace.useRef(null);
    const minThumbRef = React__namespace.useRef(null);
    const maxThumbRef = React__namespace.useRef(null);
    const currentValue = value || internalValue;
    const valueToPercent = (val) => {
      return (val - min) / (max - min) * 100;
    };
    const percentToValue = (percent) => {
      const rawValue = percent / 100 * (max - min) + min;
      return Math.round(rawValue / step) * step;
    };
    const getPosition = (event) => {
      if (!sliderRef.current) return 0;
      const rect = sliderRef.current.getBoundingClientRect();
      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      const position = clientX - rect.left;
      const percent = position / rect.width * 100;
      return Math.max(0, Math.min(100, percent));
    };
    const updateValue = React__namespace.useCallback((type, percent) => {
      const newValue = percentToValue(percent);
      setValue((prev) => {
        const updated = { ...prev };
        if (type === "min") {
          updated.min = Math.min(newValue, prev.max - step);
        } else {
          updated.max = Math.max(newValue, prev.min + step);
        }
        return updated;
      });
    }, [step]);
    const setValue = React__namespace.useCallback((newValue) => {
      setInternalValue(newValue);
      onChange?.(newValue);
    }, [onChange]);
    const handleMouseDown = React__namespace.useCallback((type) => {
      if (disabled) return;
      setIsDragging(type);
    }, [disabled]);
    const handleMouseMove = React__namespace.useCallback((event) => {
      if (!isDragging || disabled) return;
      const percent = getPosition(event);
      updateValue(isDragging, percent);
    }, [isDragging, disabled, updateValue]);
    const handleMouseUp = React__namespace.useCallback(() => {
      if (isDragging) {
        onChangeEnd?.(currentValue);
        setIsDragging(null);
      }
    }, [isDragging, currentValue, onChangeEnd]);
    React__namespace.useEffect(() => {
      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("touchmove", handleMouseMove);
        document.addEventListener("touchend", handleMouseUp);
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          document.removeEventListener("touchmove", handleMouseMove);
          document.removeEventListener("touchend", handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);
    const colorClasses = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-emerald-500",
      warning: "bg-amber-500",
      error: "bg-red-500"
    };
    const thumbClasses = cn(
      "block h-5 w-5 rounded-full border-2 border-background bg-background shadow-lg transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "hover:scale-110 active:scale-95",
      disabled && "cursor-not-allowed",
      color === "primary" && "focus-visible:ring-primary",
      color === "secondary" && "focus-visible:ring-secondary",
      color === "success" && "focus-visible:ring-emerald-500",
      color === "warning" && "focus-visible:ring-amber-500",
      color === "error" && "focus-visible:ring-red-500"
    );
    const minPercent = valueToPercent(currentValue.min);
    const maxPercent = valueToPercent(currentValue.max);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("space-y-2", className),
        ...props,
        children: [
          labels && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: labels.min }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: labels.max })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              ref: sliderRef,
              className: cn(
                rangeSliderVariants({ size, variant, disabled })
              ),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute h-full w-full rounded-full bg-muted" }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    className: cn(
                      "absolute h-full rounded-full",
                      colorClasses[color]
                    ),
                    style: {
                      left: `${minPercent}%`,
                      width: `${maxPercent - minPercent}%`
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    ref: minThumbRef,
                    className: cn(thumbClasses, "absolute"),
                    style: {
                      left: `calc(${minPercent}% - 10px)`,
                      cursor: disabled ? "not-allowed" : "grab"
                    },
                    onMouseDown: () => handleMouseDown("min"),
                    onTouchStart: () => handleMouseDown("min")
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    ref: maxThumbRef,
                    className: cn(thumbClasses, "absolute"),
                    style: {
                      left: `calc(${maxPercent}% - 10px)`,
                      cursor: disabled ? "not-allowed" : "grab"
                    },
                    onMouseDown: () => handleMouseDown("max"),
                    onTouchStart: () => handleMouseDown("max")
                  }
                )
              ]
            }
          ),
          showValue && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
              prefix,
              currentValue.min,
              suffix
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
              prefix,
              currentValue.max,
              suffix
            ] })
          ] })
        ]
      }
    );
  }
);
RangeSlider.displayName = "RangeSlider";

exports.RangeSlider = RangeSlider;
//# sourceMappingURL=range-slider.js.map
//# sourceMappingURL=range-slider.js.map