import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsx } from 'react/jsx-runtime';

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
var badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:ring-offset-black",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border dark:border-cyan-400/30 dark:text-cyan-300",
        count: "border-transparent bg-muted text-foreground shadow-sm px-2.5 py-1 text-[11px] tracking-wide",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600 dark:bg-green-400/20 dark:text-green-300 dark:hover:bg-green-400/30",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-400/20 dark:text-yellow-300 dark:hover:bg-yellow-400/30",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600 dark:bg-cyan-400/20 dark:text-cyan-300 dark:hover:bg-cyan-400/30",
        cyberpunk: "border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 dark:from-cyan-400 dark:to-purple-400 dark:hover:from-cyan-300 dark:hover:to-purple-300",
        neon: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-400/20 dark:border-cyan-300/50 dark:bg-cyan-300/10 dark:text-cyan-200 dark:shadow-cyan-300/30"
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant, size }), className), ...props });
}

export { Badge, badgeVariants };
//# sourceMappingURL=badge.mjs.map
//# sourceMappingURL=badge.mjs.map