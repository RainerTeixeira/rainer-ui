import * as React from 'react';
import '@rainersoft/design-tokens/formats/css-vars.css';
import tokens from '@rainersoft/design-tokens';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx } from 'react/jsx-runtime';

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
var Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      // Base styles
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      // Variant styles
      variant === "default" && "border-border bg-background dark:bg-black/40 dark:border-cyan-400/20",
      variant === "outline" && "border-2 border-border bg-transparent dark:border-cyan-400/30",
      variant === "elevated" && "border-border/50 shadow-lg dark:bg-black/60 dark:border-cyan-400/20 dark:shadow-cyan-500/10",
      variant === "glass" && "border-border/20 bg-background/80 backdrop-blur-md dark:bg-black/40 dark:border-cyan-400/30 dark:backdrop-blur-xl",
      // Transitions
      "transition-all duration-200",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "flex flex-col space-y-1.5 p-6",
      "dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      "dark:text-cyan-200 dark:font-mono",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground",
      "dark:text-cyan-400/80",
      className
    ),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "flex items-center p-6 pt-0",
      "dark:border-t dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
//# sourceMappingURL=card.mjs.map
//# sourceMappingURL=card.mjs.map