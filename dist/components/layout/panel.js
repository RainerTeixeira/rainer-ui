'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

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
  return tailwindMerge.twMerge(clsx.clsx(inputs));
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
var panelVariants = classVarianceAuthority.cva(
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
var Panel = React__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PanelHeader = React__namespace.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PanelTitle = React__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PanelDescription = React__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PanelContent = React__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PanelFooter = React__namespace.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PanelGroup = React__namespace.forwardRef(
  ({
    className,
    spacing = "md",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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

exports.Panel = Panel;
exports.PanelContent = PanelContent;
exports.PanelDescription = PanelDescription;
exports.PanelFooter = PanelFooter;
exports.PanelGroup = PanelGroup;
exports.PanelHeader = PanelHeader;
exports.PanelTitle = PanelTitle;
//# sourceMappingURL=panel.js.map
//# sourceMappingURL=panel.js.map