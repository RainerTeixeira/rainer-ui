import * as React from 'react';
import { cva } from 'class-variance-authority';
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
var panelVariants = cva(
  "rounded-lg border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "border-border shadow-sm",
        elevated: "border-border shadow-md",
        outlined: "border-2 border-border shadow-none",
        ghost: "border-transparent shadow-none bg-transparent",
        glass: "glass border-border shadow-sm",
        neon: "neon-border shadow-lg dark:shadow-glow-cyan",
        gradient: "bg-gradient-to-br from-background to-muted border-border shadow-sm"
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10"
      },
      padding: {
        none: "p-0",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
        xl: "p-8"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-2xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      padding: null,
      radius: "md"
    }
  }
);
var Panel = React.forwardRef(
  ({
    className,
    variant = "default",
    size,
    padding,
    radius = "md",
    hover = false,
    clickable = false,
    selected = false,
    loading = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          panelVariants({ variant, size, padding, radius }),
          hover && "transition-all duration-[var(--motion-duration-normal)] hover:shadow-lg hover:-translate-y-0.5",
          clickable && "cursor-pointer active:scale-[0.98]",
          selected && "ring-2 ring-primary ring-offset-2",
          loading && "opacity-70",
          className
        ),
        ...props
      }
    );
  }
);
Panel.displayName = "Panel";
var PanelHeader = React.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col space-y-1.5 p-6",
          divider && "border-b border-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
PanelHeader.displayName = "PanelHeader";
var PanelTitle = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "h3",
      {
        ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className),
        ...props,
        children
      }
    );
  }
);
PanelTitle.displayName = "PanelTitle";
var PanelDescription = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "p",
      {
        ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props,
        children
      }
    );
  }
);
PanelDescription.displayName = "PanelDescription";
var PanelContent = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("p-6 pt-0", className),
        ...props,
        children
      }
    );
  }
);
PanelContent.displayName = "PanelContent";
var PanelFooter = React.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center p-6 pt-0",
          divider && "border-t border-border mt-6 pt-6",
          className
        ),
        ...props,
        children
      }
    );
  }
);
PanelFooter.displayName = "PanelFooter";
var spacingClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10"
};
var PanelGroup = React.forwardRef(
  ({
    className,
    spacing = "md",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("grid", spacingClasses[spacing], className),
        ...props,
        children
      }
    );
  }
);
PanelGroup.displayName = "PanelGroup";

export { Panel, PanelContent, PanelDescription, PanelFooter, PanelGroup, PanelHeader, PanelTitle };
//# sourceMappingURL=panel.mjs.map
//# sourceMappingURL=panel.mjs.map