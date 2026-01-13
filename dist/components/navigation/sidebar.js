'use strict';

var lucideReact = require('lucide-react');
var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var reactSlot = require('@radix-ui/react-slot');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
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
var sidebarVariants = classVarianceAuthority.cva(
  "flex flex-col bg-card border-r border-border transition-all duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "bg-card",
        dark: "bg-background",
        glass: "glass",
        neon: "bg-background neon-border"
      },
      size: {
        sm: "w-48",
        md: "w-64",
        lg: "w-80",
        xl: "w-96"
      },
      position: {
        left: "left-0 top-0 h-full",
        right: "right-0 top-0 h-full",
        top: "top-0 left-0 right-0",
        bottom: "bottom-0 left-0 right-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      position: "left"
    }
  }
);
var Sidebar = React__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    position = "left",
    collapsed = false,
    onCollapse,
    items = [],
    showToggle = false,
    overlay = false,
    open = false,
    onOpenChange,
    profile,
    footerActions,
    children,
    ...props
  }, ref) => {
    const [internalCollapsed, setInternalCollapsed] = React__namespace.useState(collapsed);
    const [internalOpen, setInternalOpen] = React__namespace.useState(open);
    const isCollapsed = onCollapse ? collapsed : internalCollapsed;
    const isOpen = overlay ? onOpenChange ? open : internalOpen : true;
    const handleCollapse = React__namespace.useCallback(() => {
      if (onCollapse) {
        onCollapse(!isCollapsed);
      } else {
        setInternalCollapsed(!isCollapsed);
      }
    }, [isCollapsed, onCollapse]);
    const handleOpenChange = React__namespace.useCallback((newOpen) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    }, [onOpenChange]);
    React__namespace.useEffect(() => {
      if (overlay && isOpen) {
        const handleClickOutside = (event) => {
          const target = event.target;
          const sidebar = document.getElementById("rainer-sidebar");
          if (sidebar && !sidebar.contains(target)) {
            handleOpenChange(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [overlay, isOpen, handleOpenChange]);
    const sidebarClasses = cn(
      sidebarVariants({ variant, size, position }),
      overlay && "fixed z-50",
      overlay && !isOpen && "translate-x-full",
      position === "right" && !overlay && (isCollapsed ? "translate-x-full" : "translate-x-0"),
      position === "left" && !overlay && (isCollapsed ? "-translate-x-full" : "translate-x-0"),
      className
    );
    const renderMenuItem = (item, level = 0) => {
      if (item.separator) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "my-2 h-px bg-border" }, item.id);
      }
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          className: cn(
            "w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-[var(--motion-duration-fast)]",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            item.disabled && "pointer-events-none opacity-50",
            item.active && "bg-accent text-accent-foreground",
            level > 0 && "pl-6"
          ),
          onClick: () => {
            if (!item.disabled) {
              item.onClick?.();
            }
          },
          disabled: item.disabled,
          children: [
            item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-4 w-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
              "truncate",
              isCollapsed && "w-0 opacity-0"
            ), children: item.label }),
            item.badge && !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
          ]
        },
        item.id
      );
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      overlay && isOpen && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "fixed inset-0 z-40 bg-black/50",
          onClick: () => handleOpenChange(false)
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "aside",
        {
          id: "rainer-sidebar",
          ref,
          className: sidebarClasses,
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-lg font-semibold", children: "Menu" }),
              showToggle && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleCollapse,
                  className: "h-8 w-8 p-0",
                  children: isCollapsed ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" })
                }
              ),
              overlay && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleOpenChange(false),
                  className: "h-8 w-8 p-0",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
                }
              )
            ] }),
            profile && !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                className: "flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent",
                onClick: profile.onClick,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground", children: profile.avatar ? /* @__PURE__ */ jsxRuntime.jsx("img", { src: profile.avatar, alt: profile.name, className: "h-full w-full rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.User, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium", children: profile.name }),
                    profile.email && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-muted-foreground", children: profile.email })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 overflow-y-auto p-4", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: items.map((item) => renderMenuItem(item)) }),
              children
            ] }),
            (footerActions || !isCollapsed) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 border-t border-border", children: [
              !isCollapsed && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Settings, { className: "mr-2 h-4 w-4" }),
                      "Configura\xE7\xF5es"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LogOut, { className: "mr-2 h-4 w-4" }),
                      "Sair"
                    ]
                  }
                )
              ] }),
              isCollapsed && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Settings, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LogOut, { className: "h-4 w-4" }) })
              ] }),
              footerActions
            ] })
          ]
        }
      )
    ] });
  }
);
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React__namespace.forwardRef(
  ({
    className,
    children,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React__namespace.useCallback((event) => {
      onClick?.(event);
      window.dispatchEvent(new CustomEvent("sidebar:toggle"));
    }, [onClick]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Button,
      {
        ref,
        variant: "ghost",
        size: "sm",
        className: cn("h-8 w-8 p-0", className),
        onClick: handleClick,
        ...props,
        children: children || /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { className: "h-4 w-4" })
      }
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";

exports.Sidebar = Sidebar;
exports.SidebarTrigger = SidebarTrigger;
//# sourceMappingURL=sidebar.js.map
//# sourceMappingURL=sidebar.js.map