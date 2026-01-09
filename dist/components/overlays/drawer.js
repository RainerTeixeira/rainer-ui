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
var drawer_exports = {};
__export(drawer_exports, {
  Drawer: () => Drawer,
  DrawerContent: () => DrawerContent,
  DrawerFooter: () => DrawerFooter,
  DrawerHeader: () => DrawerHeader,
  DrawerTrigger: () => DrawerTrigger
});
module.exports = __toCommonJS(drawer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const drawerVariants = (0, import_class_variance_authority.cva)(
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
const Drawer = React.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "fixed inset-0 z-50", children: [
      showBackdrop && open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          ref: drawerRef,
          className: (0, import_utils.cn)(
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
            (title || closable) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { id: "drawer-title", className: "text-lg font-semibold", children: title }),
                description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: "drawer-description", className: "text-sm text-muted-foreground mt-1", children: description })
              ] }),
              closable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => onOpenChange(false),
                  className: "h-8 w-8 p-0",
                  "aria-label": "Fechar drawer",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(
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
const DrawerHeader = React.forwardRef(
  ({
    className,
    title,
    description,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("flex items-center justify-between p-4 border-b border-border", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-muted-foreground mt-1", children: description })
          ] }),
          children
        ]
      }
    );
  }
);
DrawerHeader.displayName = "DrawerHeader";
const DrawerContent = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("p-4", className),
        ...props,
        children
      }
    );
  }
);
DrawerContent.displayName = "DrawerContent";
const DrawerFooter = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
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
const DrawerTrigger = React.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_button.Button,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger
});
//# sourceMappingURL=drawer.js.map