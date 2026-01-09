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
var rating_exports = {};
__export(rating_exports, {
  Rating: () => Rating,
  RatingProgress: () => RatingProgress,
  RatingSummary: () => RatingSummary
});
module.exports = __toCommonJS(rating_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const ratingVariants = (0, import_class_variance_authority.cva)(
  "flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "gap-0.5",
        md: "gap-1",
        lg: "gap-1.5"
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col"
      }
    },
    defaultVariants: {
      size: "md",
      orientation: "horizontal"
    }
  }
);
const starSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6"
};
const Rating = React.forwardRef(
  ({
    className,
    value = 0,
    max = 5,
    allowHalf = false,
    readOnly = false,
    showValue = false,
    onChange,
    onHover,
    size = "md",
    orientation = "horizontal",
    fillIcon,
    emptyIcon,
    halfIcon,
    color,
    ...props
  }, ref) => {
    const [hoverValue, setHoverValue] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);
    const displayValue = isHovering ? hoverValue : value;
    const formattedValue = allowHalf ? displayValue.toFixed(1) : Math.round(displayValue).toString();
    const handleStarClick = (starValue) => {
      if (readOnly) return;
      onChange?.(starValue);
    };
    const handleMouseMove = (event, starIndex) => {
      if (readOnly) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const { width } = rect;
      const { offsetX } = event.nativeEvent;
      let newHoverValue = starIndex + 1;
      if (allowHalf) {
        const isHalf = offsetX < width / 2;
        if (isHalf) {
          newHoverValue = starIndex + 0.5;
        }
      }
      setHoverValue(newHoverValue);
      onHover?.(newHoverValue);
    };
    const handleMouseEnter = () => {
      if (!readOnly) {
        setIsHovering(true);
      }
    };
    const handleMouseLeave = () => {
      if (!readOnly) {
        setIsHovering(false);
        setHoverValue(0);
      }
    };
    const renderStar = (starIndex) => {
      const starValue = starIndex + 1;
      const isFilled = starValue <= displayValue;
      const isHalf = allowHalf && starValue - 0.5 === displayValue;
      let icon = emptyIcon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Star, { className: starSizeClasses[size] });
      if (isHalf) {
        icon = halfIcon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.StarHalf, { className: starSizeClasses[size] });
      } else if (isFilled) {
        icon = fillIcon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Star, { className: starSizeClasses[size], fill: "currentColor" });
      }
      const iconStyle = color && (isFilled || isHalf) ? { color } : void 0;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: (0, import_utils.cn)(
            "cursor-pointer transition-all duration-[var(--motion-duration-fast)]",
            "hover:scale-110 active:scale-95",
            readOnly && "cursor-default",
            isFilled || isHalf ? "text-primary" : "text-muted-foreground/30"
          ),
          onMouseMove: (e) => handleMouseMove(e, starIndex),
          onClick: () => handleStarClick(isHalf ? starIndex + 0.5 : starValue),
          style: iconStyle,
          children: icon
        },
        starIndex
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(ratingVariants({ size, orientation }), className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center", children: [
          Array.from({ length: max }, (_, index) => renderStar(index)),
          showValue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: (0, import_utils.cn)(
            "ml-2 text-sm font-medium",
            orientation === "vertical" && "ml-0 mt-2"
          ), children: [
            formattedValue,
            "/",
            max
          ] })
        ] })
      }
    );
  }
);
Rating.displayName = "Rating";
const progressHeightClasses = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
};
const RatingProgress = React.forwardRef(
  ({
    className,
    value,
    color,
    height = "md",
    showPercentage = false,
    ...props
  }, ref) => {
    const percentage = Math.min(100, Math.max(0, value));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)("w-full", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          ref,
          className: (0, import_utils.cn)(
            "w-full bg-muted rounded-full overflow-hidden",
            progressHeightClasses[height]
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: (0, import_utils.cn)(
                "h-full bg-primary transition-all duration-[var(--motion-duration-normal)] ease-[var(--motion-easing-ease-out)]",
                color && "opacity-80"
              ),
              style: {
                width: `${percentage}%`,
                backgroundColor: color
              }
            }
          )
        }
      ),
      showPercentage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "mt-1 text-xs text-muted-foreground", children: [
        percentage.toFixed(0),
        "%"
      ] })
    ] });
  }
);
RatingProgress.displayName = "RatingProgress";
const RatingSummary = React.forwardRef(
  ({
    className,
    average,
    total,
    distribution,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("space-y-2", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-3xl font-bold", children: average.toFixed(1) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, { value: average, readOnly: true, size: "sm" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-sm text-muted-foreground mt-1", children: [
                total,
                " ",
                total === 1 ? "avalia\xE7\xE3o" : "avalia\xE7\xF5es"
              ] })
            ] })
          ] }),
          distribution && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "space-y-1", children: distribution.map(({ rating, count }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-muted-foreground w-3", children: rating }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              RatingProgress,
              {
                value: total > 0 ? count / total * 100 : 0,
                height: "sm",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-muted-foreground w-8 text-right", children: count })
          ] }, rating)) })
        ]
      }
    );
  }
);
RatingSummary.displayName = "RatingSummary";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Rating,
  RatingProgress,
  RatingSummary
});
//# sourceMappingURL=rating.js.map