'use strict';

var lucideReact = require('lucide-react');
var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
require('@rainersoft/design-tokens/formats/css-vars.css');
var tokens = require('@rainersoft/design-tokens');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

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
var tokens__default = /*#__PURE__*/_interopDefault(tokens);

var tokensWithThemes = tokens__default.default;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens__default.default;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var layoutClassesSemantic = tokens__default.default.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens__default.default.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens__default.default.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
tokens__default.default.primitives?.gradientDirections ?? {};
var motionClasses = tokens__default.default.semantics?.motionClasses ?? {};
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
var motionTokens = tokens__default.default.MOTION ?? tokens__default.default.motionTokens ?? tokens__default.default.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens__default.default.semantics?.motion ?? {};
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
var stepsVariants = classVarianceAuthority.cva(
  "",
  {
    variants: {
      orientation: {
        horizontal: "flex items-center",
        vertical: "flex flex-col space-y-4"
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "md"
    }
  }
);
var stepVariants = classVarianceAuthority.cva(
  "flex items-center",
  {
    variants: {
      orientation: {
        horizontal: "flex-col",
        vertical: "flex-row items-start"
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "md"
    }
  }
);
var Steps = React__namespace.forwardRef(
  ({
    className,
    orientation = "horizontal",
    size = "md",
    steps,
    current = 0,
    onChange,
    clickable = false,
    showConnector = true,
    ...props
  }, ref) => {
    const stepsWithStatus = React__namespace.useMemo(() => {
      return steps.map((step, index) => {
        let status = "pending";
        if (index < current) {
          status = "completed";
        } else if (index === current) {
          status = step.status || "active";
        } else if (step.status) {
          status = step.status;
        }
        return { ...step, status };
      });
    }, [steps, current]);
    const sizeClasses = {
      sm: {
        step: "text-xs",
        icon: "h-6 w-6 text-xs",
        connector: "h-0.5"
      },
      md: {
        step: "text-sm",
        icon: "h-8 w-8 text-sm",
        connector: "h-0.5"
      },
      lg: {
        step: "text-base",
        icon: "h-10 w-10 text-base",
        connector: "h-1"
      }
    };
    const renderStep = (step, index, isLast) => {
      const isActive = index === current;
      const isCompleted = step.status === "completed";
      const isError = step.status === "error";
      const isPending = step.status === "pending";
      const isLoading = step.status === "active" && step.disabled;
      const iconClasses = cn(
        "flex items-center justify-center rounded-full border-2 font-medium transition-all duration-[var(--motion-duration-normal)]",
        sizeClasses[size].icon,
        isCompleted && "bg-primary border-primary text-primary-foreground",
        isError && "bg-destructive border-destructive text-destructive-foreground",
        isActive && !isLoading && "border-primary bg-background text-primary",
        isPending && "border-border bg-background text-muted-foreground",
        isLoading && "border-primary",
        clickable && !step.disabled && "cursor-pointer hover:border-primary/80",
        step.disabled && "opacity-50 cursor-not-allowed"
      );
      const connectorClasses = cn(
        "bg-border transition-all duration-[var(--motion-duration-normal)]",
        sizeClasses[size].connector,
        orientation === "horizontal" ? "flex-1" : "w-0.5 absolute left-4 top-8 h-full",
        isCompleted && "bg-primary",
        isError && "bg-destructive",
        !showConnector && "hidden"
      );
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: cn(
            stepVariants({ orientation, size }),
            orientation === "horizontal" && "flex-1",
            className
          ),
          children: [
            orientation === "horizontal" && index > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: connectorClasses }),
            /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                className: cn(
                  "flex items-center",
                  orientation === "vertical" && "flex-row gap-4",
                  clickable && !step.disabled && "cursor-pointer",
                  step.disabled && "cursor-not-allowed"
                ),
                onClick: () => {
                  if (clickable && !step.disabled) {
                    onChange?.(index);
                    step.onClick?.();
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("relative", orientation === "vertical" && "flex-shrink-0"), children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: iconClasses, children: [
                    isCompleted && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }),
                    isLoading && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" }),
                    !isCompleted && !isLoading && (step.icon || index + 1)
                  ] }) }),
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-col",
                        orientation === "horizontal" && "items-center text-center",
                        orientation === "vertical" && "items-start",
                        sizeClasses[size].step
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsx(
                          "div",
                          {
                            className: cn(
                              "font-medium",
                              isActive && !isLoading && "text-primary",
                              isCompleted && "text-foreground",
                              isError && "text-destructive",
                              isPending && "text-muted-foreground"
                            ),
                            children: step.title
                          }
                        ),
                        step.description && /* @__PURE__ */ jsxRuntime.jsx(
                          "div",
                          {
                            className: cn(
                              "mt-1",
                              isActive && !isLoading && "text-primary",
                              isCompleted && "text-muted-foreground",
                              isError && "text-destructive",
                              isPending && "text-muted-foreground"
                            ),
                            children: step.description
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            orientation === "vertical" && !isLast && /* @__PURE__ */ jsxRuntime.jsx("div", { className: connectorClasses })
          ]
        },
        step.id
      );
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(stepsVariants({ orientation, size }), className),
        ...props,
        children: stepsWithStatus.map(
          (step, index) => renderStep(step, index, index === steps.length - 1)
        )
      }
    );
  }
);
Steps.displayName = "Steps";
var StepItem = React__namespace.forwardRef(
  ({
    className,
    number,
    title,
    description,
    status = "pending",
    active = false,
    icon,
    ...props
  }, ref) => {
    const isCompleted = status === "completed";
    const isError = status === "error";
    const isLoading = status === "active";
    const iconClasses = cn(
      "flex items-center justify-center rounded-full border-2 font-medium transition-all duration-[var(--motion-duration-normal)] h-8 w-8 text-sm",
      isCompleted && "bg-primary border-primary text-primary-foreground",
      isError && "bg-destructive border-destructive text-destructive-foreground",
      active && !isLoading && "border-primary bg-background text-primary",
      status === "pending" && "border-border bg-background text-muted-foreground"
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-3", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: iconClasses, children: [
            isCompleted && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }),
            isLoading && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" }),
            !isCompleted && !isLoading && (icon || number)
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "text-sm font-medium",
                  active && !isLoading && "text-primary",
                  isCompleted && "text-foreground",
                  isError && "text-destructive",
                  status === "pending" && "text-muted-foreground"
                ),
                children: title
              }
            ),
            description && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: description })
          ] })
        ]
      }
    );
  }
);
StepItem.displayName = "StepItem";

exports.StepItem = StepItem;
exports.Steps = Steps;
//# sourceMappingURL=steps.js.map
//# sourceMappingURL=steps.js.map