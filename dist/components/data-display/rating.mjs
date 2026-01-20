import * as React from 'react';
import { cva } from 'class-variance-authority';
import Star from 'lucide-react/dist/esm/icons/star';
import StarHalf from 'lucide-react/dist/esm/icons/star-half';
import '@rainersoft/design-tokens/formats/css-vars.css';
import tokens from '@rainersoft/design-tokens';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';

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
var ratingVariants = cva(
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
var starSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6"
};
var Rating = React.forwardRef(
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
      let icon = emptyIcon || /* @__PURE__ */ jsx(Star, { className: starSizeClasses[size] });
      if (isHalf) {
        icon = halfIcon || /* @__PURE__ */ jsx(StarHalf, { className: starSizeClasses[size] });
      } else if (isFilled) {
        icon = fillIcon || /* @__PURE__ */ jsx(Star, { className: starSizeClasses[size], fill: "currentColor" });
      }
      const iconStyle = color && (isFilled || isHalf) ? { color } : void 0;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
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
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(ratingVariants({ size, orientation }), className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...props,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          Array.from({ length: max }, (_, index) => renderStar(index)),
          showValue && /* @__PURE__ */ jsxs("span", { className: cn(
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
var progressHeightClasses = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
};
var RatingProgress = React.forwardRef(
  ({
    className,
    value,
    color,
    height = "md",
    showPercentage = false,
    ...props
  }, ref) => {
    const percentage = Math.min(100, Math.max(0, value));
    return /* @__PURE__ */ jsxs("div", { className: cn("w-full", className), ...props, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          className: cn(
            "w-full bg-muted rounded-full overflow-hidden",
            progressHeightClasses[height]
          ),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
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
      showPercentage && /* @__PURE__ */ jsxs("span", { className: "mt-1 text-xs text-muted-foreground", children: [
        percentage.toFixed(0),
        "%"
      ] })
    ] });
  }
);
RatingProgress.displayName = "RatingProgress";
var RatingSummary = React.forwardRef(
  ({
    className,
    average,
    total,
    distribution,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("space-y-2", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: average.toFixed(1) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(Rating, { value: average, readOnly: true, size: "sm" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                total,
                " ",
                total === 1 ? "avalia\xE7\xE3o" : "avalia\xE7\xF5es"
              ] })
            ] })
          ] }),
          distribution && /* @__PURE__ */ jsx("div", { className: "space-y-1", children: distribution.map(({ rating, count }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground w-3", children: rating }),
            /* @__PURE__ */ jsx(
              RatingProgress,
              {
                value: total > 0 ? count / total * 100 : 0,
                height: "sm",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground w-8 text-right", children: count })
          ] }, rating)) })
        ]
      }
    );
  }
);
RatingSummary.displayName = "RatingSummary";

export { Rating, RatingProgress, RatingSummary };
//# sourceMappingURL=rating.mjs.map
//# sourceMappingURL=rating.mjs.map