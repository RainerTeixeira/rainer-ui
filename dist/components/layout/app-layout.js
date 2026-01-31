'use strict';

var React3 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
require('@rainersoft/design-tokens/formats/css-vars.css');
var MoreVertical = require('lucide-react/dist/esm/icons/more-vertical');
var ArrowLeft = require('lucide-react/dist/esm/icons/arrow-left');
var Bell = require('lucide-react/dist/esm/icons/bell');
var Menu = require('lucide-react/dist/esm/icons/menu');
var Search = require('lucide-react/dist/esm/icons/search');
var Settings2 = require('lucide-react/dist/esm/icons/settings');
var reactSlot = require('@radix-ui/react-slot');
var jsxRuntime = require('react/jsx-runtime');
var LogOut = require('lucide-react/dist/esm/icons/log-out');
var ChevronLeft = require('lucide-react/dist/esm/icons/chevron-left');
var ChevronRight = require('lucide-react/dist/esm/icons/chevron-right');
var User = require('lucide-react/dist/esm/icons/user');
var X = require('lucide-react/dist/esm/icons/x');

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

var React3__namespace = /*#__PURE__*/_interopNamespace(React3);
var tokensData__default = /*#__PURE__*/_interopDefault(tokensData);
var MoreVertical__default = /*#__PURE__*/_interopDefault(MoreVertical);
var ArrowLeft__default = /*#__PURE__*/_interopDefault(ArrowLeft);
var Bell__default = /*#__PURE__*/_interopDefault(Bell);
var Menu__default = /*#__PURE__*/_interopDefault(Menu);
var Search__default = /*#__PURE__*/_interopDefault(Search);
var Settings2__default = /*#__PURE__*/_interopDefault(Settings2);
var LogOut__default = /*#__PURE__*/_interopDefault(LogOut);
var ChevronLeft__default = /*#__PURE__*/_interopDefault(ChevronLeft);
var ChevronRight__default = /*#__PURE__*/_interopDefault(ChevronRight);
var User__default = /*#__PURE__*/_interopDefault(User);
var X__default = /*#__PURE__*/_interopDefault(X);

var tokens = tokensData__default.default;
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
tokens.themes?.light ?? {};
tokens.themes?.dark ?? {};
tokens.semantics?.layoutClasses?.components ?? {};
tokens.semantics?.layoutClasses?.sections ?? {};
tokens.primitives?.gradientDirections ?? {};
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
var ButtonComponent = React3__namespace.forwardRef(
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
      const child = React3__namespace.Children.only(children);
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
var topBarVariants = classVarianceAuthority.cva(
  "flex items-center justify-between border-b bg-background px-4 py-3",
  {
    variants: {
      variant: {
        default: "border-border bg-background",
        floating: "border-border shadow-sm rounded-lg mx-4 mt-4",
        glass: "glass border-transparent",
        neon: "neon-border bg-background dark:shadow-glow-cyan",
        transparent: "border-transparent bg-transparent"
      },
      size: {
        sm: "h-12 px-3 py-2",
        md: "h-14 px-4 py-3",
        lg: "h-16 px-6 py-4"
      },
      sticky: {
        true: "sticky top-0 z-40",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      sticky: false
    }
  }
);
var TopBar = React3__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    sticky = false,
    title,
    subtitle,
    left,
    center,
    right,
    back,
    menu,
    search,
    notifications,
    children,
    ...props
  }, ref) => {
    const renderLeft = () => {
      if (left) return left;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        back && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: back.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": back.label || "Voltar",
            children: /* @__PURE__ */ jsxRuntime.jsx(ArrowLeft__default.default, { className: "h-4 w-4" })
          }
        ),
        menu && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: menu.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": menu.label || "Menu",
            children: /* @__PURE__ */ jsxRuntime.jsx(Menu__default.default, { className: "h-4 w-4" })
          }
        ),
        (title || subtitle) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col", children: [
          title && /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
        ] })
      ] });
    };
    const renderCenter = () => {
      if (center) return center;
      if (search) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 max-w-md mx-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Search__default.default, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "text",
              placeholder: search.placeholder || "Buscar...",
              value: search.value,
              onChange: (e) => search.onChange?.(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  search.onSubmit?.(e.currentTarget.value);
                }
              },
              className: cn(
                "w-full h-9 pl-10 pr-4 rounded-md border border-input bg-background",
                "text-sm ring-offset-background",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )
            }
          )
        ] }) });
      }
      if (title && (back || menu)) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-semibold", children: title }) });
      }
      return null;
    };
    const renderRight = () => {
      if (right) return right;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        notifications && /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: notifications.onClick,
            className: "relative h-8 w-8 p-0",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Bell__default.default, { className: "h-4 w-4" }),
              notifications.count && notifications.count > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center", children: notifications.count > 99 ? "99+" : notifications.count })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ jsxRuntime.jsx(Settings2__default.default, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ jsxRuntime.jsx(MoreVertical__default.default, { className: "h-4 w-4" })
          }
        )
      ] });
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(topBarVariants({ variant, size, sticky }), className),
        ...props,
        children: [
          renderLeft(),
          renderCenter(),
          renderRight(),
          children
        ]
      }
    );
  }
);
TopBar.displayName = "TopBar";
var TopBarTitle = React3__namespace.forwardRef(
  ({
    className,
    title,
    subtitle,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex flex-col items-center", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: subtitle })
        ]
      }
    );
  }
);
TopBarTitle.displayName = "TopBarTitle";
var TopBarActions = React3__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("flex items-center gap-2", className),
        ...props,
        children
      }
    );
  }
);
TopBarActions.displayName = "TopBarActions";
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
var Sidebar = React3__namespace.forwardRef(
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
    const [internalCollapsed, setInternalCollapsed] = React3__namespace.useState(collapsed);
    const [internalOpen, setInternalOpen] = React3__namespace.useState(open);
    const isCollapsed = onCollapse ? collapsed : internalCollapsed;
    const isOpen = overlay ? onOpenChange ? open : internalOpen : true;
    const handleCollapse = React3__namespace.useCallback(() => {
      if (onCollapse) {
        onCollapse(!isCollapsed);
      } else {
        setInternalCollapsed(!isCollapsed);
      }
    }, [isCollapsed, onCollapse]);
    const handleOpenChange = React3__namespace.useCallback((newOpen) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    }, [onOpenChange]);
    React3__namespace.useEffect(() => {
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
                  children: isCollapsed ? /* @__PURE__ */ jsxRuntime.jsx(ChevronRight__default.default, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft__default.default, { className: "h-4 w-4" })
                }
              ),
              overlay && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleOpenChange(false),
                  className: "h-8 w-8 p-0",
                  children: /* @__PURE__ */ jsxRuntime.jsx(X__default.default, { className: "h-4 w-4" })
                }
              )
            ] }),
            profile && !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                className: "flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent",
                onClick: profile.onClick,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground", children: profile.avatar ? /* @__PURE__ */ jsxRuntime.jsx("img", { src: profile.avatar, alt: profile.name, className: "h-full w-full rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntime.jsx(User__default.default, { className: "h-4 w-4" }) }),
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
                      /* @__PURE__ */ jsxRuntime.jsx(Settings2__default.default, { className: "mr-2 h-4 w-4" }),
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
                      /* @__PURE__ */ jsxRuntime.jsx(LogOut__default.default, { className: "mr-2 h-4 w-4" }),
                      "Sair"
                    ]
                  }
                )
              ] }),
              isCollapsed && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntime.jsx(Settings2__default.default, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntime.jsx(LogOut__default.default, { className: "h-4 w-4" }) })
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
var SidebarTrigger = React3__namespace.forwardRef(
  ({
    className,
    children,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React3__namespace.useCallback((event) => {
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
        children: children || /* @__PURE__ */ jsxRuntime.jsx(Menu__default.default, { className: "h-4 w-4" })
      }
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var appLayoutVariants = classVarianceAuthority.cva(
  "flex h-screen bg-background",
  {
    variants: {
      variant: {
        default: "bg-background",
        dark: "bg-background",
        glass: "bg-background/80 backdrop-blur-sm",
        neon: "bg-background dark:shadow-glow-cyan/10"
      },
      sidebarPosition: {
        left: "",
        right: "flex-row-reverse"
      }
    },
    defaultVariants: {
      variant: "default",
      sidebarPosition: "left"
    }
  }
);
var AppLayout = React3__namespace.forwardRef(
  ({
    className,
    variant = "default",
    sidebarPosition = "left",
    topBar,
    sidebar,
    sidebarCollapsed = false,
    onSidebarCollapse,
    children,
    showSidebarToggle = true,
    collapsedWidth = "w-16",
    expandedWidth = "w-64",
    ...props
  }, ref) => {
    const [internalCollapsed, setInternalCollapsed] = React3__namespace.useState(sidebarCollapsed);
    const isCollapsed = onSidebarCollapse ? sidebarCollapsed : internalCollapsed;
    const handleSidebarCollapse = React3__namespace.useCallback((collapsed) => {
      if (onSidebarCollapse) {
        onSidebarCollapse(collapsed);
      } else {
        setInternalCollapsed(collapsed);
      }
    }, [onSidebarCollapse]);
    const topBarProps = {
      ...topBar,
      menu: showSidebarToggle ? {
        onClick: () => handleSidebarCollapse(!isCollapsed),
        label: isCollapsed ? "Expandir menu" : "Recolher menu"
      } : topBar?.menu
    };
    const sidebarProps = {
      ...sidebar,
      collapsed: isCollapsed,
      onCollapse: handleSidebarCollapse,
      showToggle: false,
      // Desabilita toggle interno pois controlamos pelo TopBar
      className: cn(
        sidebar?.className,
        isCollapsed ? collapsedWidth : expandedWidth,
        "transition-all duration-[var(--motion-duration-normal)]"
      )
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(appLayoutVariants({ variant, sidebarPosition }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Sidebar, { ...sidebarProps }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntime.jsx(TopBar, { ...topBarProps }),
            /* @__PURE__ */ jsxRuntime.jsx("main", { className: "flex-1 overflow-auto bg-surface", children })
          ] })
        ]
      }
    );
  }
);
AppLayout.displayName = "AppLayout";
var AppLayoutContent = React3__namespace.forwardRef(
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
          "p-6 space-y-6",
          className
        ),
        ...props,
        children
      }
    );
  }
);
AppLayoutContent.displayName = "AppLayoutContent";
var AppLayoutSection = React3__namespace.forwardRef(
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
        className: cn("space-y-4", className),
        ...props,
        children: [
          (title || description) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
            title && /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-muted-foreground", children: description })
          ] }),
          children
        ]
      }
    );
  }
);
AppLayoutSection.displayName = "AppLayoutSection";

exports.AppLayout = AppLayout;
exports.AppLayoutContent = AppLayoutContent;
exports.AppLayoutSection = AppLayoutSection;
//# sourceMappingURL=app-layout.js.map
//# sourceMappingURL=app-layout.js.map