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
var menu_exports = {};
__export(menu_exports, {
  Menu: () => Menu,
  MenuBar: () => MenuBar,
  NavigationContextMenu: () => NavigationContextMenu
});
module.exports = __toCommonJS(menu_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const menuVariants = (0, import_class_variance_authority.cva)(
  "min-w-[200px] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
  {
    variants: {
      variant: {
        default: "border-border",
        glass: "glass border-border",
        neon: "neon-border dark:shadow-glow-cyan"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
const Menu = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    items,
    trigger,
    open: controlledOpen,
    onOpenChange,
    position = "bottom-left",
    closeOnClick = true,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const [openSubmenus, setOpenSubmenus] = React.useState(/* @__PURE__ */ new Set());
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const containerRef = React.useRef(null);
    const handleOpenChange = React.useCallback((newOpen) => {
      if (controlledOpen === void 0) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [controlledOpen, onOpenChange]);
    const toggleSubmenu = React.useCallback((itemId) => {
      setOpenSubmenus((prev) => {
        const next = new Set(prev);
        if (next.has(itemId)) {
          next.delete(itemId);
        } else {
          next.add(itemId);
        }
        return next;
      });
    }, []);
    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          handleOpenChange(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleOpenChange]);
    const positionClasses = {
      "bottom-left": "top-full left-0 mt-1",
      "bottom-right": "top-full right-0 mt-1",
      "top-left": "bottom-full left-0 mb-1",
      "top-right": "bottom-full right-0 mb-1"
    };
    const renderItem = (item, level = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isSubmenuOpen = openSubmenus.has(item.id);
      if (item.separator) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-px bg-border" }, item.id);
      }
      if (hasChildren) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              className: (0, import_utils.cn)(
                "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground",
                item.disabled && "pointer-events-none opacity-50",
                item.active && "bg-accent text-accent-foreground",
                level > 0 && "pl-6"
              ),
              onClick: () => toggleSubmenu(item.id),
              disabled: item.disabled,
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 h-4 w-4", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1", children: item.label }),
                item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_lucide_react.ChevronRight,
                  {
                    className: (0, import_utils.cn)(
                      "h-4 w-4 transition-transform duration-[var(--motion-duration-fast)]",
                      isSubmenuOpen && "rotate-90"
                    )
                  }
                )
              ]
            }
          ),
          isSubmenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-full top-0 ml-1 min-w-[200px] rounded-md border bg-popover p-1 shadow-lg", children: item.children.map((child) => renderItem(child, level + 1)) })
        ] }, item.id);
      }
      const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "button",
        {
          className: (0, import_utils.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
            "transition-colors duration-[var(--motion-duration-fast)]",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            item.disabled && "pointer-events-none opacity-50",
            item.active && "bg-accent text-accent-foreground",
            level > 0 && "pl-6"
          ),
          onClick: () => {
            if (!item.disabled) {
              item.onClick?.();
              if (closeOnClick) {
                handleOpenChange(false);
              }
            }
          },
          disabled: item.disabled,
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 h-4 w-4", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 text-left", children: item.label }),
            item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
          ]
        }
      );
      if (item.href) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "a",
          {
            href: item.href,
            className: (0, import_utils.cn)(
              "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
              "transition-colors duration-[var(--motion-duration-fast)]",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:bg-accent focus:text-accent-foreground",
              item.disabled && "pointer-events-none opacity-50",
              item.active && "bg-accent text-accent-foreground",
              level > 0 && "pl-6"
            ),
            onClick: () => {
              if (closeOnClick) {
                handleOpenChange(false);
              }
            },
            children: [
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 h-4 w-4", children: item.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1", children: item.label }),
              item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
            ]
          },
          item.id
        );
      }
      return content;
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref: containerRef,
        className: (0, import_utils.cn)("relative inline-block", className),
        ...props,
        children: [
          trigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { onClick: () => handleOpenChange(!isOpen), children: trigger }),
          isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              ref,
              className: (0, import_utils.cn)(
                menuVariants({ variant, size }),
                "absolute z-50 animate-in fade-in-0 zoom-in-95",
                positionClasses[position]
              ),
              children: items.map((item) => renderItem(item))
            }
          )
        ]
      }
    );
  }
);
Menu.displayName = "Menu";
const MenuBar = React.forwardRef(
  ({
    className,
    menus,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "flex items-center gap-1 rounded-md border bg-background p-1",
          className
        ),
        ...props,
        children: menus.map((menu) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Menu,
          {
            items: menu.items,
            trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_button.Button, { variant: "ghost", size: "sm", children: [
              menu.label,
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: "ml-1 h-3 w-3" })
            ] })
          },
          menu.id
        ))
      }
    );
  }
);
MenuBar.displayName = "MenuBar";
const NavigationContextMenu = React.forwardRef(
  ({
    className,
    children,
    items,
    ...props
  }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef(null);
    const handleContextMenu = React.useCallback((event) => {
      event.preventDefault();
      setPosition({ x: event.clientX, y: event.clientY });
      setOpen(true);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref: containerRef,
        className: (0, import_utils.cn)("relative inline-block", className),
        onContextMenu: handleContextMenu,
        children: [
          children,
          open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              ref,
              className: (0, import_utils.cn)(
                menuVariants(),
                "fixed z-50 animate-in fade-in-0 zoom-in-95"
              ),
              style: {
                left: position.x,
                top: position.y
              },
              ...props,
              children: items.map((item) => {
                if (item.separator) {
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-px bg-border" }, item.id);
                }
                return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    className: (0, import_utils.cn)(
                      "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                      "transition-colors duration-[var(--motion-duration-fast)]",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground",
                      item.disabled && "pointer-events-none opacity-50",
                      item.active && "bg-accent text-accent-foreground"
                    ),
                    onClick: () => {
                      if (!item.disabled) {
                        item.onClick?.();
                        setOpen(false);
                      }
                    },
                    disabled: item.disabled,
                    children: [
                      item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 h-4 w-4", children: item.icon }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 text-left", children: item.label }),
                      item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
                    ]
                  },
                  item.id
                );
              })
            }
          )
        ]
      }
    );
  }
);
NavigationContextMenu.displayName = "NavigationContextMenu";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Menu,
  MenuBar,
  NavigationContextMenu
});
//# sourceMappingURL=menu.js.map