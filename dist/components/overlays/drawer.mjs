import * as React from 'react';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx } from 'react/jsx-runtime';

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
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
var drawerVariants = cva(
  "fixed z-50 bg-background border border-border shadow-lg",
  {
    variants: {
      position: {
        left: "left-0 top-0 h-full w-80",
        right: "right-0 top-0 h-full w-80",
        top: "top-0 left-0 right-0 h-auto max-h-[80vh]",
        bottom: "bottom-0 left-0 right-0 h-auto max-h-[80vh]"
      },
      size: {
        sm: "w-64",
        md: "w-80",
        lg: "w-96",
        xl: "w-[480px]",
        full: "w-full"
      },
      variant: {
        default: "bg-background",
        glass: "glass",
        neon: "neon-border dark:shadow-glow-cyan"
      }
    },
    defaultVariants: {
      position: "right",
      size: "md",
      variant: "default"
    }
  }
);
var Drawer = React.forwardRef(
  ({
    className,
    position = "right",
    size = "md",
    variant = "default",
    open,
    onOpenChange,
    title,
    description,
    closable = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    showBackdrop = true,
    preventBodyScroll = true,
    loading = false,
    children,
    ...props
  }, ref) => {
    const drawerRef = React.useRef(null);
    React.useEffect(() => {
      if (open && preventBodyScroll) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open, preventBodyScroll]);
    React.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    React.useEffect(() => {
      if (open && drawerRef.current) {
        drawerRef.current.focus();
      }
    }, [open]);
    const handleBackdropClick = React.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, onOpenChange]);
    const animationClasses = {
      left: open ? "animate-in slide-in-from-left duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-left duration-[var(--motion-duration-normal)]",
      right: open ? "animate-in slide-in-from-right duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-right duration-[var(--motion-duration-normal)]",
      top: open ? "animate-in slide-in-from-top duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-top duration-[var(--motion-duration-normal)]",
      bottom: open ? "animate-in slide-in-from-bottom duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-bottom duration-[var(--motion-duration-normal)]"
    };
    const sizeClasses = {
      top: open ? "max-h-[80vh]" : "max-h-0",
      bottom: open ? "max-h-[80vh]" : "max-h-0"
    };
    if (!open && !showBackdrop) return null;
    return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50", children: [
      showBackdrop && open && /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: drawerRef,
          className: cn(
            drawerVariants({ position, variant }),
            position === "left" && size && sizeClasses[size],
            position === "right" && size && sizeClasses[size],
            animationClasses[position],
            loading && "opacity-70",
            !open && "pointer-events-none",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? "drawer-title" : void 0,
          "aria-describedby": description ? "drawer-description" : void 0,
          tabIndex: -1,
          ...props,
          children: [
            (title || closable) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                title && /* @__PURE__ */ jsx("h2", { id: "drawer-title", className: "text-lg font-semibold", children: title }),
                description && /* @__PURE__ */ jsx("p", { id: "drawer-description", className: "text-sm text-muted-foreground mt-1", children: description })
              ] }),
              closable && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => onOpenChange(false),
                  className: "h-8 w-8 p-0",
                  "aria-label": "Fechar drawer",
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: cn(
              "overflow-y-auto",
              position === "top" || position === "bottom" ? "max-h-[60vh]" : "h-full"
            ), children })
          ]
        }
      )
    ] });
  }
);
Drawer.displayName = "Drawer";
var DrawerHeader = React.forwardRef(
  ({
    className,
    title,
    description,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center justify-between p-4 border-b border-border", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            title && /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: description })
          ] }),
          children
        ]
      }
    );
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerContent = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("p-4", className),
        ...props,
        children
      }
    );
  }
);
DrawerContent.displayName = "DrawerContent";
var DrawerFooter = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-end gap-3 p-4 border-t border-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTrigger = React.forwardRef(
  ({
    className,
    children,
    onOpen,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React.useCallback((event) => {
      onClick?.(event);
      onOpen?.();
    }, [onClick, onOpen]);
    return /* @__PURE__ */ jsx(
      Button,
      {
        ref,
        className,
        onClick: handleClick,
        ...props,
        children
      }
    );
  }
);
DrawerTrigger.displayName = "DrawerTrigger";

export { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger };
//# sourceMappingURL=drawer.mjs.map
//# sourceMappingURL=drawer.mjs.map