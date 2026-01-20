import * as React from 'react';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
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
var chipVariants = cva(
  "inline-flex items-center gap-2 rounded-md border px-2.5 py-0.5 text-sm font-medium transition-all duration-[var(--motion-duration-fast)] ease-[var(--motion-easing-ease-out)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50",
        warning: "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50",
        error: "border-transparent bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50",
        outline: "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-8 px-2.5 text-sm",
        lg: "h-10 px-3 text-base"
      },
      removable: {
        true: "pr-1"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Chip = React.forwardRef(
  ({
    className,
    variant,
    size,
    children,
    removable = false,
    onRemove,
    removeIcon,
    removeAriaLabel = "Remover",
    ...props
  }, ref) => {
    const handleRemove = (e) => {
      e.stopPropagation();
      onRemove?.();
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          chipVariants({ variant, size, removable }),
          className
        ),
        ...props,
        children: [
          children,
          removable && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleRemove,
              className: cn(
                "inline-flex items-center justify-center rounded-full p-0.5",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50"
              ),
              "aria-label": removeAriaLabel,
              children: removeIcon || /* @__PURE__ */ jsx(
                X,
                {
                  className: "h-3 w-3 shrink-0",
                  strokeWidth: 2.5,
                  style: {
                    stroke: "currentColor"
                  }
                }
              )
            }
          )
        ]
      }
    );
  }
);
Chip.displayName = "Chip";
var spacingClasses = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3"
};
var ChipGroup = React.forwardRef(
  ({
    className,
    spacing = "md",
    wrap = true,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "inline-flex items-center",
          spacingClasses[spacing],
          wrap && "flex-wrap",
          className
        ),
        ...props,
        children
      }
    );
  }
);
ChipGroup.displayName = "ChipGroup";

export { Chip, ChipGroup };
//# sourceMappingURL=chip.mjs.map
//# sourceMappingURL=chip.mjs.map