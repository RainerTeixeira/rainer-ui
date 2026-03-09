'use strict';

var React2 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
var reactSlot = require('@radix-ui/react-slot');
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

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);

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
var buttonVariants = classVarianceAuthority.cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
        neon: "relative bg-gradient-to-r from-neon-cyan to-cyan-600 border-2 border-neon-cyan text-gray-950 shadow-lg shadow-neon-cyan hover:shadow-neon-cyan hover:shadow-xl",
        glass: "relative bg-glass border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        xs: "h-7 px-2 text-xs rounded-md",
        sm: "h-8 px-3 text-sm rounded-md has-[>svg]:px-2",
        default: "h-9 px-4 py-2 rounded-md has-[>svg]:px-3",
        lg: "h-10 px-6 text-base rounded-lg has-[>svg]:px-4",
        xl: "h-12 px-8 text-lg rounded-lg has-[>svg]:px-5",
        icon: "size-9 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-lg",
        "icon-xl": "size-12 rounded-xl"
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95",
        glow: "hover:shadow-lg active:shadow-sm",
        bounce: "hover:animate-bounce",
        pulse: "hover:animate-pulse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale"
    }
  }
);
var ButtonComponent = React2__namespace.forwardRef(
  ({
    className,
    variant,
    size,
    animation,
    asChild = false,
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;
    if (asChild) {
      const child = React2__namespace.Children.only(children);
      return /* @__PURE__ */ jsxRuntime.jsx(
        reactSlot.Slot,
        {
          className: cn(
            buttonVariants({ variant, size, animation }),
            // Efeito neon especial
            variant === "neon" && [
              "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
              "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
              "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
              "before:transition-opacity after:transition-opacity",
              "before:duration-300 after:duration-300"
            ],
            className
          ),
          ref,
          "aria-busy": loading || void 0,
          ...props,
          children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex items-center gap-2", children: [
            loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            child
          ] }) : child
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        className: cn(
          buttonVariants({ variant, size, animation }),
          // Efeito neon especial
          variant === "neon" && [
            "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
            "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
            "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
            "before:transition-opacity after:transition-opacity",
            "before:duration-300 after:duration-300"
          ],
          className
        ),
        ref,
        disabled: isDisabled,
        "aria-busy": loading || void 0,
        ...props,
        children: [
          loading && (loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" })),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var drawerVariants = classVarianceAuthority.cva(
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
var Drawer = React2__namespace.forwardRef(
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
    const drawerRef = React2__namespace.useRef(null);
    const setDrawerRef = React2__namespace.useCallback((node) => {
      drawerRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    React2__namespace.useEffect(() => {
      if (open && preventBodyScroll) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open, preventBodyScroll]);
    React2__namespace.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    React2__namespace.useEffect(() => {
      if (open && drawerRef.current) {
        drawerRef.current.focus();
      }
    }, [open]);
    const handleBackdropClick = React2__namespace.useCallback((event) => {
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
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "fixed inset-0 z-50", children: [
      showBackdrop && open && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref: setDrawerRef,
          className: cn(
            drawerVariants({ position, size, variant, className }),
            position === "left" && size && sizeClasses[size],
            position === "right" && size && sizeClasses[size],
            animationClasses[position],
            loading && "opacity-70",
            !open && "pointer-events-none"
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? "drawer-title" : void 0,
          "aria-describedby": description ? "drawer-description" : void 0,
          tabIndex: -1,
          ...props,
          children: [
            (title || closable) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                title && /* @__PURE__ */ jsxRuntime.jsx("h2", { id: "drawer-title", className: "text-lg font-semibold", children: title }),
                description && /* @__PURE__ */ jsxRuntime.jsx("p", { id: "drawer-description", className: "text-sm text-muted-foreground mt-1", children: description })
              ] }),
              closable && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => onOpenChange(false),
                  className: "h-8 w-8 p-0",
                  "aria-label": "Fechar drawer",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
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
var DrawerHeader = React2__namespace.forwardRef(
  ({
    className,
    title,
    description,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center justify-between p-4 border-b border-border", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            title && /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: description })
          ] }),
          children
        ]
      }
    );
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerContent = React2__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var DrawerFooter = React2__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var DrawerTrigger = React2__namespace.forwardRef(
  ({
    className,
    children,
    onOpen,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React2__namespace.useCallback((event) => {
      onClick?.(event);
      onOpen?.();
    }, [onClick, onOpen]);
    return /* @__PURE__ */ jsxRuntime.jsx(
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

exports.Drawer = Drawer;
exports.DrawerContent = DrawerContent;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerTrigger = DrawerTrigger;
//# sourceMappingURL=drawer.js.map
//# sourceMappingURL=drawer.js.map