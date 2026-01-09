"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var sidebar_exports = {};
__export(sidebar_exports, {
  Sidebar: () => Sidebar,
  SidebarTrigger: () => SidebarTrigger
});
module.exports = __toCommonJS(sidebar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const sidebarVariants = (0, import_class_variance_authority.cva)(
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
const Sidebar = React.forwardRef(
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
    const [internalCollapsed, setInternalCollapsed] = React.useState(collapsed);
    const [internalOpen, setInternalOpen] = React.useState(open);
    const isCollapsed = onCollapse ? collapsed : internalCollapsed;
    const isOpen = overlay ? onOpenChange ? open : internalOpen : true;
    const handleCollapse = React.useCallback(() => {
      if (onCollapse) {
        onCollapse(!isCollapsed);
      } else {
        setInternalCollapsed(!isCollapsed);
      }
    }, [isCollapsed, onCollapse]);
    const handleOpenChange = React.useCallback((newOpen) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    }, [onOpenChange]);
    React.useEffect(() => {
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
    const sidebarClasses = (0, import_utils.cn)(
      sidebarVariants({ variant, size, position }),
      overlay && "fixed z-50",
      overlay && !isOpen && "translate-x-full",
      position === "right" && !overlay && (isCollapsed ? "translate-x-full" : "translate-x-0"),
      position === "left" && !overlay && (isCollapsed ? "-translate-x-full" : "translate-x-0"),
      className
    );
    const renderMenuItem = (item, level = 0) => {
      if (item.separator) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 h-px bg-border" }, item.id);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "button",
        {
          className: (0, import_utils.cn)(
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
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)(
              "truncate",
              isCollapsed && "w-0 opacity-0"
            ), children: item.label }),
            item.badge && !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
          ]
        },
        item.id
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      overlay && isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "fixed inset-0 z-40 bg-black/50",
          onClick: () => handleOpenChange(false)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "aside",
        {
          id: "rainer-sidebar",
          ref,
          className: sidebarClasses,
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg font-semibold", children: "Menu" }),
              showToggle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleCollapse,
                  className: "h-8 w-8 p-0",
                  children: isCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-4 w-4" })
                }
              ),
              overlay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleOpenChange(false),
                  className: "h-8 w-8 p-0",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
                }
              )
            ] }),
            profile && !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "button",
              {
                className: "flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent",
                onClick: profile.onClick,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground", children: profile.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: profile.avatar, alt: profile.name, className: "h-full w-full rounded-full object-cover" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.User, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-left", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm font-medium", children: profile.name }),
                    profile.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-muted-foreground", children: profile.email })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 overflow-y-auto p-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "space-y-1", children: items.map((item) => renderMenuItem(item)) }),
              children
            ] }),
            (footerActions || !isCollapsed) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "p-4 border-t border-border", children: [
              !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_button.Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Settings, { className: "mr-2 h-4 w-4" }),
                      "Configura\xE7\xF5es"
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_button.Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.LogOut, { className: "mr-2 h-4 w-4" }),
                      "Sair"
                    ]
                  }
                )
              ] }),
              isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Settings, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.LogOut, { className: "h-4 w-4" }) })
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
const SidebarTrigger = React.forwardRef(
  ({
    className,
    children,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React.useCallback((event) => {
      onClick?.(event);
      window.dispatchEvent(new CustomEvent("sidebar:toggle"));
    }, [onClick]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_button.Button,
      {
        ref,
        variant: "ghost",
        size: "sm",
        className: (0, import_utils.cn)("h-8 w-8 p-0", className),
        onClick: handleClick,
        ...props,
        children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "h-4 w-4" })
      }
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Sidebar,
  SidebarTrigger
});
//# sourceMappingURL=sidebar.js.map