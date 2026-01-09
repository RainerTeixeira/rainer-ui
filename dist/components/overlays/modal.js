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
var modal_exports = {};
__export(modal_exports, {
  Modal: () => Modal,
  ModalContent: () => ModalContent,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ModalTrigger: () => ModalTrigger
});
module.exports = __toCommonJS(modal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const modalVariants = (0, import_class_variance_authority.cva)(
  "relative bg-background text-foreground shadow-lg rounded-lg",
  {
    variants: {
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        full: "max-w-full mx-4",
        screen: "w-screen h-screen max-w-none rounded-none"
      },
      variant: {
        default: "border border-border",
        glass: "glass border-border",
        neon: "neon-border dark:shadow-glow-cyan",
        minimal: "border-0 shadow-none"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
const Modal = React.forwardRef(
  ({
    className,
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
    const modalRef = React.useRef(null);
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
      if (open && modalRef.current) {
        modalRef.current.focus();
      }
    }, [open]);
    const handleBackdropClick = React.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, onOpenChange]);
    if (!open) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      showBackdrop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          ref: modalRef,
          className: (0, import_utils.cn)(
            modalVariants({ size, variant }),
            "relative z-10 max-h-[90vh] overflow-hidden",
            "animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            loading && "opacity-70",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? "modal-title" : void 0,
          "aria-describedby": description ? "modal-description" : void 0,
          tabIndex: -1,
          ...props,
          children: [
            (title || closable) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between p-6 border-b border-border", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { id: "modal-title", className: "text-lg font-semibold", children: title }),
                description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: "modal-description", className: "text-sm text-muted-foreground mt-1", children: description })
              ] }),
              closable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => onOpenChange(false),
                  className: "h-8 w-8 p-0",
                  "aria-label": "Fechar modal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "max-h-[calc(90vh-8rem)] overflow-y-auto", children })
          ]
        }
      )
    ] });
  }
);
Modal.displayName = "Modal";
const ModalHeader = React.forwardRef(
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
        className: (0, import_utils.cn)("flex items-center justify-between p-6 border-b border-border", className),
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
ModalHeader.displayName = "ModalHeader";
const ModalContent = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("p-6", className),
        ...props,
        children
      }
    );
  }
);
ModalContent.displayName = "ModalContent";
const ModalFooter = React.forwardRef(
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
          "flex items-center justify-end gap-3 p-6 border-t border-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";
const ModalTrigger = React.forwardRef(
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
ModalTrigger.displayName = "ModalTrigger";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger
});
//# sourceMappingURL=modal.js.map