import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';
import { jsx } from 'react/jsx-runtime';

var tokens = tokensData;
function cn(...inputs) {
  return twMerge(clsx(inputs));
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
var Progress = React.forwardRef(({ className, value, color = "default", ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      // Base styles
      "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
      // Dark mode
      "dark:bg-black/40 dark:border dark:border-cyan-400/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: cn(
          // Base indicator
          "h-full w-full flex-1 bg-primary transition-all duration-300",
          // Color variants
          color === "default" && "bg-primary dark:bg-cyan-400",
          color === "success" && "bg-green-500 dark:bg-green-400",
          color === "warning" && "bg-yellow-500 dark:bg-yellow-400",
          color === "destructive" && "bg-red-500 dark:bg-red-400",
          color === "cyberpunk" && "bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400"
        ),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
//# sourceMappingURL=progress.mjs.map
//# sourceMappingURL=progress.mjs.map