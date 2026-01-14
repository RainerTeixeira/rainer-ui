'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var AlertTriangle = require('lucide-react/dist/esm/icons/alert-triangle');
var CheckCircle = require('lucide-react/dist/esm/icons/check-circle');
var Info = require('lucide-react/dist/esm/icons/info');
var X = require('lucide-react/dist/esm/icons/x');
var reactSlot = require('@radix-ui/react-slot');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
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
var AlertTriangle__default = /*#__PURE__*/_interopDefault(AlertTriangle);
var CheckCircle__default = /*#__PURE__*/_interopDefault(CheckCircle);
var Info__default = /*#__PURE__*/_interopDefault(Info);
var X__default = /*#__PURE__*/_interopDefault(X);

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens?.primitives?.motion || {
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
var buttonVariants = classVarianceAuthority.cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-[var(--motion-duration,200ms)] ease-[var(--motion-easing,cubic-bezier(.4,0,.2,1))] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:shadow-glow-cyan",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:shadow-glow-purple",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 dark:hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline dark:neon-text",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass neon-border hover:glass-hover dark:text-primary",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
var confirmDialogVariants = classVarianceAuthority.cva(
  "relative bg-background text-foreground shadow-lg rounded-lg border",
  {
    variants: {
      variant: {
        default: "border-border",
        destructive: "border-destructive",
        warning: "border-amber-500",
        info: "border-blue-500",
        success: "border-emerald-500"
      },
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var ConfirmDialog = React__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    open,
    onOpenChange,
    title,
    description,
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    onConfirm,
    onCancel,
    loading = false,
    closeOnConfirm = true,
    closeOnCancel = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    confirmVariant = "default"
    // props, // Props adicionais não utilizados
  }) => {
    const [internalLoading, setInternalLoading] = React__namespace.useState(false);
    const isLoading = loading || internalLoading;
    React__namespace.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    const handleConfirm = React__namespace.useCallback(async () => {
      if (isLoading) return;
      try {
        if (onConfirm) {
          setInternalLoading(true);
          await onConfirm();
        }
        if (closeOnConfirm) {
          onOpenChange(false);
        }
      } finally {
        setInternalLoading(false);
      }
    }, [isLoading, onConfirm, closeOnConfirm, onOpenChange]);
    const handleCancel = React__namespace.useCallback(() => {
      if (isLoading) return;
      onCancel?.();
      if (closeOnCancel) {
        onOpenChange(false);
      }
    }, [isLoading, onCancel, closeOnCancel, onOpenChange]);
    const handleBackdropClick = React__namespace.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop && !isLoading) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, isLoading, onOpenChange]);
    const getIcon = () => {
      switch (variant) {
        case "destructive":
          return /* @__PURE__ */ jsxRuntime.jsx(AlertTriangle__default.default, { className: "h-6 w-6 text-destructive" });
        case "warning":
          return /* @__PURE__ */ jsxRuntime.jsx(AlertTriangle__default.default, { className: "h-6 w-6 text-amber-500" });
        case "info":
          return /* @__PURE__ */ jsxRuntime.jsx(Info__default.default, { className: "h-6 w-6 text-blue-500" });
        case "success":
          return /* @__PURE__ */ jsxRuntime.jsx(CheckCircle__default.default, { className: "h-6 w-6 text-emerald-500" });
        default:
          return null;
      }
    };
    const getConfirmVariant = () => {
      if (confirmVariant !== "default") return confirmVariant;
      switch (variant) {
        case "destructive":
          return "destructive";
        case "warning":
          return "default";
        case "info":
          return "default";
        case "success":
          return "default";
        default:
          return "default";
      }
    };
    if (!open) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: cn(
            confirmDialogVariants({ variant, size }),
            "relative z-10 p-6 animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "confirm-title",
          "aria-describedby": "confirm-description",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: handleCancel,
                className: "absolute right-4 top-4 h-8 w-8 p-0",
                disabled: isLoading,
                children: /* @__PURE__ */ jsxRuntime.jsx(X__default.default, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center text-center max-w-sm mx-auto", children: [
              getIcon(),
              /* @__PURE__ */ jsxRuntime.jsx("h3", { id: "confirm-title", className: "text-lg font-semibold mt-4 mb-2", children: title }),
              description && /* @__PURE__ */ jsxRuntime.jsx("p", { id: "confirm-description", className: "text-sm text-muted-foreground mb-6", children: description }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3 w-full", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: handleCancel,
                    disabled: isLoading,
                    className: "flex-1",
                    children: cancelText
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  Button,
                  {
                    variant: getConfirmVariant(),
                    onClick: handleConfirm,
                    disabled: isLoading,
                    className: "flex-1",
                    children: confirmText
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] });
  }
);
ConfirmDialog.displayName = "ConfirmDialog";
function useConfirm() {
  const [isOpen, setIsOpen] = React__namespace.useState(false);
  const [options, setOptions] = React__namespace.useState(null);
  const confirm = React__namespace.useCallback((options2) => {
    setOptions(options2);
    setIsOpen(true);
  }, []);
  const handleConfirm = React__namespace.useCallback(async () => {
    if (options.onConfirm) {
      await options.onConfirm();
    }
    setIsOpen(false);
  }, [options]);
  const handleCancel = React__namespace.useCallback(() => {
    setIsOpen(false);
  }, []);
  const ConfirmDialogComponent = React__namespace.useCallback(() => /* @__PURE__ */ jsxRuntime.jsx(
    ConfirmDialog,
    {
      open: isOpen,
      onOpenChange: setIsOpen,
      title: options.title,
      description: options.description,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      variant: options.variant,
      confirmVariant: options.confirmVariant,
      onConfirm: handleConfirm,
      onCancel: handleCancel
    }
  ), [isOpen, options, handleConfirm, handleCancel]);
  return {
    confirm,
    ConfirmDialog: ConfirmDialogComponent
  };
}

exports.ConfirmDialog = ConfirmDialog;
exports.useConfirm = useConfirm;
//# sourceMappingURL=confirm-dialog.js.map
//# sourceMappingURL=confirm-dialog.js.map