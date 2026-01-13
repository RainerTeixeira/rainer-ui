'use strict';

var lucideReact = require('lucide-react');
var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
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

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens.primitives.motion;
var motionSemantic = designTokens.tokens.semantics.motion || {
  transition: {
    default: {
      duration: motion.duration.normal,
      easing: motion.easing.easeInOut
    }
  },
  interaction: {
    hover: {
      duration: motion.duration.fast,
      easing: motion.easing.easeOut
    }
  },
  feedback: {
    success: {
      duration: motion.duration.slower,
      easing: motion.easing.spring
    }
  },
  navigation: {
    page: {
      duration: motion.duration.slow,
      easing: motion.easing.easeInOut
    }
  }
};
motion.delay;
motion.duration;
motion.easing;
({
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring
  },
  // Presets semânticos
  transition: motionSemantic.transition.default,
  interaction: motionSemantic.interaction.hover,
  feedback: motionSemantic.feedback.success,
  navigation: motionSemantic.navigation.page
});
var defaultIcons = {
  completed: lucideReact.Check,
  pending: lucideReact.Circle,
  error: lucideReact.X,
  warning: lucideReact.AlertTriangle,
  default: "div"
};
var timelineDotVariants = classVarianceAuthority.cva(
  "relative flex items-center justify-center rounded-full border-2 bg-background",
  {
    variants: {
      status: {
        default: "border-border",
        active: "border-primary bg-primary",
        completed: "border-emerald-500 bg-emerald-500",
        pending: "border-amber-500 bg-amber-500",
        error: "border-red-500 bg-red-500",
        warning: "border-orange-500 bg-orange-500"
      },
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      status: "default",
      size: "md"
    }
  }
);
var TimelineItem = React__namespace.forwardRef(
  ({
    className,
    status = "default",
    icon,
    iconType,
    dotSize = "md",
    children,
    date,
    title,
    description,
    ...props
  }, ref) => {
    let IconComponent = icon;
    if (!IconComponent && iconType) {
      IconComponent = React__namespace.createElement(defaultIcons[iconType], {
        className: "h-2.5 w-2.5 text-primary-foreground"
      });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("relative flex gap-4 pb-8 last:pb-0", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute left-[calc(var(--dot-size)/2)] top-8 h-full w-0.5 bg-border last:hidden",
              style: { "--dot-size": dotSize === "sm" ? "12px" : dotSize === "lg" ? "20px" : "16px" }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(timelineDotVariants({ status, size: dotSize })), children: IconComponent }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
            (date || title) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-1 flex items-baseline gap-2", children: [
              date && /* @__PURE__ */ jsxRuntime.jsx("time", { className: "text-xs text-muted-foreground whitespace-nowrap", children: date }),
              title && /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-sm font-medium text-foreground", children: title })
            ] }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: description }),
            children
          ] })
        ]
      }
    );
  }
);
TimelineItem.displayName = "TimelineItem";
var Timeline = React__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("space-y-0", className),
        ...props,
        children: React__namespace.Children.map(children, (child) => {
          if (!React__namespace.isValidElement(child)) return child;
          return React__namespace.cloneElement(child, {
            ...child.props,
            className: cn(child.props.className)
          });
        })
      }
    );
  }
);
Timeline.displayName = "Timeline";
var TimelineSeparator = React__namespace.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "relative my-4 py-2",
          "before:absolute before:left-[calc(var(--dot-size)/2)] before:top-0 before:h-full before:w-0.5 before:bg-border",
          className
        ),
        style: { "--dot-size": "16px" },
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 rounded-full bg-background border-2 border-border" }),
          children && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-muted-foreground", children })
        ] })
      }
    );
  }
);
TimelineSeparator.displayName = "TimelineSeparator";

exports.Timeline = Timeline;
exports.TimelineItem = TimelineItem;
exports.TimelineSeparator = TimelineSeparator;
//# sourceMappingURL=timeline.js.map
//# sourceMappingURL=timeline.js.map