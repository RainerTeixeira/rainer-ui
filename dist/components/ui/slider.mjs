import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsxs, jsx } from 'react/jsx-runtime';

// ../rainer-design-tokens/formats/tokens.json
var tokens_default = {
  primitives: {
    motion: {
      duration: {
        fast: "100ms",
        normal: "200ms",
        slow: "300ms"},
      easing: {
        easeOut: "cubic-bezier(0, 0, 0.2, 1)",
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      },
      delay: {
        }
    },
    zIndex: {
      base: 0,
      content: 100,
      overlay: 200,
      dropdown: 300,
      modal: 400,
      tooltip: 500,
      notification: 600,
      max: 9999
    }
  }};

// src/lib/tokens.ts
var tokens = tokens_default;
function cn(...inputs) {
  return twMerge(clsx(inputs));
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
tokens.semantics?.layoutClasses?.components ?? {};
tokens.semantics?.layoutClasses?.sections ?? {};
var Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        SliderPrimitive.Track,
        {
          className: cn(
            "relative h-2 w-full grow overflow-hidden bg-secondary rounded-full"
          ),
          children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" })
        }
      ),
      /* @__PURE__ */ jsx(
        SliderPrimitive.Thumb,
        {
          className: cn(
            "block h-5 w-5 border-2 border-primary bg-background ring-offset-background rounded-full transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none",
            "disabled:opacity-50"
          )
        }
      )
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
//# sourceMappingURL=slider.mjs.map
//# sourceMappingURL=slider.mjs.map