import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { Loader2 } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.primitives.motion;
var motionSemantic = tokens.semantics.motion || {
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
function InlineLoader({
  className,
  size = "sm",
  variant = "spinner"
}) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };
  if (variant === "dots") {
    return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-1", className), "aria-label": "Carregando", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-75" }),
      /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-150" })
    ] }) });
  }
  return /* @__PURE__ */ jsx(
    Loader2,
    {
      className: cn("animate-spin", sizeClasses[size], className),
      "aria-label": "Carregando"
    }
  );
}

export { InlineLoader };
//# sourceMappingURL=InlineLoader.mjs.map
//# sourceMappingURL=InlineLoader.mjs.map