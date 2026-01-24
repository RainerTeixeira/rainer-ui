import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';
import { jsxs, jsx } from 'react/jsx-runtime';

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
var Input = React.forwardRef(
  ({ className, type, error, helperText, label, required, id, ...props }, ref) => {
    const inputId = id || `input-${React.useId()}`;
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: inputId,
          className: cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            error ? "text-destructive" : "text-foreground",
            "dark:text-cyan-200 dark:font-mono"
          ),
          children: [
            label,
            required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type,
          id: inputId,
          className: cn(
            // Base styles
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2",
            "text-sm ring-offset-background file:border-0 file:bg-transparent",
            "file:text-sm file:font-medium placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            // Dark mode
            "dark:bg-black/50 dark:border-cyan-400/30 dark:text-cyan-100",
            "dark:placeholder:text-cyan-400/50 dark:ring-offset-black",
            "dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-black",
            // Error state
            error && "border-destructive focus-visible:ring-destructive",
            "dark:border-red-400/50 dark:focus-visible:ring-red-400",
            // Transitions
            "transition-all duration-200",
            className
          ),
          ref,
          ...props
        }
      ),
      helperText && /* @__PURE__ */ jsx(
        "p",
        {
          className: cn(
            "text-xs",
            error ? "text-destructive" : "text-muted-foreground",
            "dark:text-cyan-400/70"
          ),
          children: helperText
        }
      )
    ] });
  }
);
Input.displayName = "Input";

export { Input };
//# sourceMappingURL=input.mjs.map
//# sourceMappingURL=input.mjs.map