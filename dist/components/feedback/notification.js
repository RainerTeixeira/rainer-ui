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
var notification_exports = {};
__export(notification_exports, {
  Notification: () => Notification,
  NotificationGroup: () => NotificationGroup,
  NotificationProvider: () => NotificationProvider,
  NotificationToast: () => NotificationToast,
  useNotification: () => useNotification
});
module.exports = __toCommonJS(notification_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const variantIcons = {
  success: import_lucide_react.Check,
  error: import_lucide_react.AlertCircle,
  warning: import_lucide_react.AlertTriangle,
  info: import_lucide_react.Info,
  default: import_lucide_react.Bell
};
const notificationVariants = (0, import_class_variance_authority.cva)(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        success: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
        error: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
        warning: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
        info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Notification = React.forwardRef(
  ({
    className,
    variant = "default",
    title,
    description,
    dismissible = true,
    onDismiss,
    actions,
    icon,
    timestamp,
    autoClose = false,
    autoCloseDelay = 5e3,
    toast = false,
    ...props
  }, ref) => {
    const [visible, setVisible] = React.useState(true);
    React.useEffect(() => {
      if (autoClose && onDismiss) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);
        return () => clearTimeout(timer);
      }
    }, [autoClose, autoCloseDelay, onDismiss]);
    const handleClose = () => {
      setVisible(false);
      onDismiss?.();
    };
    let IconComponent = icon;
    if (!IconComponent) {
      const VariantIcon = variantIcons[variant];
      IconComponent = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VariantIcon, { className: "h-5 w-5" });
    }
    if (!visible) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          notificationVariants({ variant }),
          toast && "animate-in slide-in-from-bottom-full",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(
            "flex-shrink-0",
            variant === "success" && "text-emerald-600 dark:text-emerald-400",
            variant === "error" && "text-red-600 dark:text-red-400",
            variant === "warning" && "text-amber-600 dark:text-amber-400",
            variant === "info" && "text-blue-600 dark:text-blue-400",
            variant === "default" && "text-muted-foreground"
          ), children: IconComponent }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-1", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm font-medium", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm opacity-90", children: description }),
            timestamp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs opacity-70", children: timestamp })
          ] }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-shrink-0 gap-2", children: actions }),
          dismissible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: handleClose,
              className: (0, import_utils.cn)(
                "absolute right-2 top-2 rounded-md p-1",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4 opacity-60 hover:opacity-100" })
            }
          )
        ]
      }
    );
  }
);
Notification.displayName = "Notification";
const positionClasses = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2"
};
const spacingClasses = {
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
};
const NotificationGroup = React.forwardRef(
  ({
    className,
    children,
    position = "top-right",
    spacing = "md",
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "fixed z-50 flex max-h-screen w-full flex-col-reverse p-4",
          "md:max-w-[420px]",
          positionClasses[position],
          spacingClasses[spacing],
          className
        ),
        ...props,
        children
      }
    );
  }
);
NotificationGroup.displayName = "NotificationGroup";
const NotificationToast = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Notification,
      {
        ref,
        toast: true,
        ...props
      }
    );
  }
);
NotificationToast.displayName = "NotificationToast";
function useNotification() {
  const [notifications, setNotifications] = React.useState(/* @__PURE__ */ new Map());
  const notify = React.useCallback((options) => {
    const id = options.id || Math.random().toString(36).substr(2, 9);
    setNotifications((prev) => new Map(prev).set(id, options));
    if (options.autoClose !== false) {
      const delay = options.autoCloseDelay || 5e3;
      setTimeout(() => {
        dismiss(id);
      }, delay);
    }
    return id;
  }, []);
  const dismiss = React.useCallback((id) => {
    setNotifications((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);
  const clear = React.useCallback(() => {
    setNotifications(/* @__PURE__ */ new Map());
  }, []);
  return {
    notifications: Array.from(notifications.entries()),
    notify,
    dismiss,
    clear
  };
}
const NotificationProvider = ({ children }) => {
  const { notifications, dismiss } = useNotification();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationGroup, { children: notifications.map(([id, options]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      NotificationToast,
      {
        id,
        onDismiss: () => dismiss(id),
        ...options
      },
      id
    )) })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Notification,
  NotificationGroup,
  NotificationProvider,
  NotificationToast,
  useNotification
});
//# sourceMappingURL=notification.js.map