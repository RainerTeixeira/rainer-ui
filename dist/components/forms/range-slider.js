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
var range_slider_exports = {};
__export(range_slider_exports, {
  RangeSlider: () => RangeSlider
});
module.exports = __toCommonJS(range_slider_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const rangeSliderVariants = (0, import_class_variance_authority.cva)(
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
const RangeSlider = React.forwardRef(
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
    const thumbClasses = (0, import_utils.cn)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("space-y-2", className),
        ...props,
        children: [
          labels && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: labels.min }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: labels.max })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              ref: sliderRef,
              className: (0, import_utils.cn)(
                rangeSliderVariants({ size, variant, disabled })
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-full w-full rounded-full bg-muted" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    className: (0, import_utils.cn)(
                      "absolute h-full rounded-full",
                      colorClasses[color]
                    ),
                    style: {
                      left: `${minPercent}%`,
                      width: `${maxPercent - minPercent}%`
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    ref: minThumbRef,
                    className: (0, import_utils.cn)(thumbClasses, "absolute"),
                    style: {
                      left: `calc(${minPercent}% - 10px)`,
                      cursor: disabled ? "not-allowed" : "grab"
                    },
                    onMouseDown: () => handleMouseDown("min"),
                    onTouchStart: () => handleMouseDown("min")
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    ref: maxThumbRef,
                    className: (0, import_utils.cn)(thumbClasses, "absolute"),
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
          showValue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between text-sm font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
              prefix,
              currentValue.min,
              suffix
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RangeSlider
});
//# sourceMappingURL=range-slider.js.map