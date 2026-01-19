import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx } from 'react/jsx-runtime';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.MOTION || {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms"},
  easing: {
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    }
};
var motionSemantic = tokens.MOTION || {
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
  semantic: {
    transition: motionSemantic.transition.default,
    interaction: motionSemantic.interaction.hover,
    feedback: motionSemantic.feedback.success,
    navigation: motionSemantic.navigation.page
  }
});
var Textarea = React.forwardRef(
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
    const inputId = id || `textarea-${React.useId()}`;
    const [characterCount, setCharacterCount] = React.useState(0);
    React.useEffect(() => {
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
      (helperText || showCount && maxLength) && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        helperText && /* @__PURE__ */ jsx(
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
        showCount && maxLength && /* @__PURE__ */ jsxs(
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

export { Textarea };
//# sourceMappingURL=textarea.mjs.map
//# sourceMappingURL=textarea.mjs.map