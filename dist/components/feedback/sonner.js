'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');

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
var Toaster = ({ ...props }) => {
  const { theme = "system" } = nextThemes.useTheme();
  return /* @__PURE__ */ jsxRuntime.jsx(
    sonner.Toaster,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }),
        info: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Info, { className: "h-4 w-4" }),
        warning: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertTriangle, { className: "h-4 w-4" }),
        error: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Octagon, { className: "h-4 w-4" }),
        loading: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" })
      },
      toastOptions: {
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border shadow-lg",
            "dark:group-[.toaster]:bg-background dark:group-[.toaster]:border-border"
          ),
          title: "dark:text-foreground",
          description: "group-[.toast]:text-muted-foreground dark:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: "dark:bg-status-error-background dark:border-status-error-border",
          success: "dark:bg-status-success-background dark:border-status-success-border"
        }
      },
      ...props
    }
  );
};

exports.Toaster = Toaster;
//# sourceMappingURL=sonner.js.map
//# sourceMappingURL=sonner.js.map