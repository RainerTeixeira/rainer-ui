'use strict';

var React = require('react');
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
var Textarea = React__namespace.forwardRef(
  ({
    className,
    error,
    helperText,
    label,
    required,
    id,
    maxLength,
    showCount,
    value,
    ...props
  }, ref) => {
    const inputId = id || `textarea-${React__namespace.useId()}`;
    const [characterCount, setCharacterCount] = React__namespace.useState(0);
    React__namespace.useEffect(() => {
      if (typeof value === "string") {
        setCharacterCount(value.length);
      }
    }, [value]);
    const handleInputChange = (e) => {
      if (maxLength) {
        const newValue = e.target.value.slice(0, maxLength);
        e.target.value = newValue;
        setCharacterCount(newValue.length);
      }
      props.onChange?.(e);
    };
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsxRuntime.jsxs(
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
            required && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "textarea",
        {
          id: inputId,
          className: cn(
            // Base styles
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2",
            "text-sm ring-offset-background placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none",
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
          maxLength,
          value,
          onChange: handleInputChange,
          ...props
        }
      ),
      (helperText || showCount && maxLength) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [
        helperText && /* @__PURE__ */ jsxRuntime.jsx(
          "p",
          {
            className: cn(
              "text-xs",
              error ? "text-destructive" : "text-muted-foreground",
              "dark:text-cyan-400/70 dark:text-red-400/70"
            ),
            children: helperText
          }
        ),
        showCount && maxLength && /* @__PURE__ */ jsxRuntime.jsxs(
          "p",
          {
            className: cn(
              "text-xs",
              characterCount >= maxLength ? "text-destructive" : "text-muted-foreground",
              "dark:text-cyan-400/70"
            ),
            children: [
              characterCount,
              "/",
              maxLength
            ]
          }
        )
      ] })
    ] });
  }
);
Textarea.displayName = "Textarea";

exports.Textarea = Textarea;
//# sourceMappingURL=textarea.js.map
//# sourceMappingURL=textarea.js.map