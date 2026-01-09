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
var confirm_dialog_exports = {};
__export(confirm_dialog_exports, {
  ConfirmDialog: () => ConfirmDialog,
  useConfirm: () => useConfirm
});
module.exports = __toCommonJS(confirm_dialog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const confirmDialogVariants = (0, import_class_variance_authority.cva)(
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
const ConfirmDialog = React.forwardRef(
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
    confirmVariant = "default",
    ...props
  }, ref) => {
    const [internalLoading, setInternalLoading] = React.useState(false);
    const isLoading = loading || internalLoading;
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
    const handleConfirm = React.useCallback(async () => {
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
    const handleCancel = React.useCallback(() => {
      if (isLoading) return;
      onCancel?.();
      if (closeOnCancel) {
        onOpenChange(false);
      }
    }, [isLoading, onCancel, closeOnCancel, onOpenChange]);
    const handleBackdropClick = React.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop && !isLoading) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, isLoading, onOpenChange]);
    const getIcon = () => {
      switch (variant) {
        case "destructive":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.AlertTriangle, { className: "h-6 w-6 text-destructive" });
        case "warning":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.AlertTriangle, { className: "h-6 w-6 text-amber-500" });
        case "info":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Info, { className: "h-6 w-6 text-blue-500" });
        case "success":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckCircle, { className: "h-6 w-6 text-emerald-500" });
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          ref,
          className: (0, import_utils.cn)(
            confirmDialogVariants({ variant, size }),
            "relative z-10 p-6 animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "confirm-title",
          "aria-describedby": "confirm-description",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_button.Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: handleCancel,
                className: "absolute right-4 top-4 h-8 w-8 p-0",
                disabled: isLoading,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col items-center text-center max-w-sm mx-auto", children: [
              getIcon(),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { id: "confirm-title", className: "text-lg font-semibold mt-4 mb-2", children: title }),
              description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: "confirm-description", className: "text-sm text-muted-foreground mb-6", children: description }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-3 w-full", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_button.Button,
                  {
                    variant: "outline",
                    onClick: handleCancel,
                    disabled: isLoading,
                    className: "flex-1",
                    children: cancelText
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_button.Button,
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
  const [isOpen, setIsOpen] = React.useState(false);
  const [options, setOptions] = React.useState(null);
  const confirm = React.useCallback((options2) => {
    setOptions(options2);
    setIsOpen(true);
  }, []);
  const handleConfirm = React.useCallback(async () => {
    if (options.onConfirm) {
      await options.onConfirm();
    }
    setIsOpen(false);
  }, [options]);
  const handleCancel = React.useCallback(() => {
    setIsOpen(false);
  }, []);
  const ConfirmDialogComponent = React.useCallback(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConfirmDialog,
  useConfirm
});
//# sourceMappingURL=confirm-dialog.js.map