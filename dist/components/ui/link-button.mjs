import * as React from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/lib/utils.ts
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
var linkButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-[var(--motion-duration-fast)]",
  {
    variants: {
      variant: {
        default: "text-primary hover:underline underline-offset-4",
        muted: "text-muted-foreground hover:text-foreground hover:underline underline-offset-4",
        destructive: "text-destructive hover:underline underline-offset-4",
        success: "text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 dark:text-emerald-400 dark:hover:text-emerald-300",
        warning: "text-amber-600 hover:text-amber-700 hover:underline underline-offset-4 dark:text-amber-400 dark:hover:text-amber-300",
        info: "text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300",
        neon: "text-primary hover:underline underline-offset-4 dark:neon-text",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1",
        outline: "border border-border rounded-md px-3 py-1 hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      weight: "medium"
    }
  }
);
var LinkButton = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    weight = "medium",
    noUnderline = false,
    leftIcon,
    rightIcon,
    href,
    target,
    children,
    ...props
  }, ref) => {
    const classes = cn(
      linkButtonVariants({ variant, size, weight }),
      noUnderline && "hover:no-underline",
      className
    );
    if (href) {
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          target,
          className: classes,
          rel: target === "_blank" ? "noopener noreferrer" : void 0,
          children: [
            leftIcon && /* @__PURE__ */ jsx("span", { className: "mr-1", children: leftIcon }),
            children,
            rightIcon && /* @__PURE__ */ jsx("span", { className: "ml-1", children: rightIcon })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: classes,
        ...props,
        children: [
          leftIcon && /* @__PURE__ */ jsx("span", { className: "mr-1", children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ jsx("span", { className: "ml-1", children: rightIcon })
        ]
      }
    );
  }
);
LinkButton.displayName = "LinkButton";

export { LinkButton };
//# sourceMappingURL=link-button.mjs.map
//# sourceMappingURL=link-button.mjs.map