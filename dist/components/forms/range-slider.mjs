import * as React from 'react';
import { cva } from 'class-variance-authority';
import '@rainersoft/design-tokens/formats/css-vars.css';
import tokens from '@rainersoft/design-tokens';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsxs, jsx } from 'react/jsx-runtime';

var tokensWithThemes = tokens;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var layoutClassesSemantic = tokens.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
tokens.primitives?.gradientDirections ?? {};
var motionClasses = tokens.semantics?.motionClasses ?? {};
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
var motionTokens = tokens.MOTION ?? tokens.motionTokens ?? tokens.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens.semantics?.motion ?? {};
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
var rangeSliderVariants = cva(
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
var RangeSlider = React.forwardRef(
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
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [isDragging, setIsDragging] = React.useState(null);
    const sliderRef = React.useRef(null);
    const minThumbRef = React.useRef(null);
    const maxThumbRef = React.useRef(null);
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
    const updateValue = React.useCallback((type, percent) => {
      const newValue = percentToValue(percent);
      const updated = { ...currentValue };
      if (type === "min") {
        updated.min = Math.min(newValue, currentValue.max - step);
      } else {
        updated.max = Math.max(newValue, currentValue.min + step);
      }
      setValue(updated);
    }, [step]);
    const setValue = React.useCallback((newValue) => {
      setInternalValue(newValue);
      onChange?.(newValue);
    }, [onChange]);
    const handleMouseDown = React.useCallback((type) => {
      if (disabled) return;
      setIsDragging(type);
    }, [disabled]);
    const handleMouseMove = React.useCallback((event) => {
      if (!isDragging || disabled) return;
      const percent = getPosition(event);
      updateValue(isDragging, percent);
    }, [isDragging, disabled, updateValue]);
    const handleMouseUp = React.useCallback(() => {
      if (isDragging) {
        onChangeEnd?.(currentValue);
        setIsDragging(null);
      }
    }, [isDragging, currentValue, onChangeEnd]);
    React.useEffect(() => {
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
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("space-y-2", className),
        ...props,
        children: [
          labels && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { children: labels.min }),
            /* @__PURE__ */ jsx("span", { children: labels.max })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: sliderRef,
              className: cn(
                rangeSliderVariants({ size, variant, disabled })
              ),
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full rounded-full bg-muted" }),
                /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsx(
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
          showValue && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm font-medium", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              prefix,
              currentValue.min,
              suffix
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
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

export { RangeSlider };
//# sourceMappingURL=range-slider.mjs.map
//# sourceMappingURL=range-slider.mjs.map