import * as React from 'react';
import { cva } from 'class-variance-authority';
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle';
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle';
import Bell from 'lucide-react/dist/esm/icons/bell';
import Check from 'lucide-react/dist/esm/icons/check';
import Info from 'lucide-react/dist/esm/icons/info';
import X from 'lucide-react/dist/esm/icons/x';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

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
var variantIcons = {
  success: Check,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  default: Bell
};
var notificationVariants = cva(
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
var Notification = React.forwardRef(
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
      IconComponent = /* @__PURE__ */ jsx(VariantIcon, { className: "h-5 w-5" });
    }
    if (!visible) return null;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          notificationVariants({ variant }),
          toast && "animate-in slide-in-from-bottom-full",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: cn(
            "flex-shrink-0",
            variant === "success" && "text-emerald-600 dark:text-emerald-400",
            variant === "error" && "text-red-600 dark:text-red-400",
            variant === "warning" && "text-amber-600 dark:text-amber-400",
            variant === "info" && "text-blue-600 dark:text-blue-400",
            variant === "default" && "text-muted-foreground"
          ), children: IconComponent }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
            title && /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90", children: description }),
            timestamp && /* @__PURE__ */ jsx("p", { className: "text-xs opacity-70", children: timestamp })
          ] }),
          actions && /* @__PURE__ */ jsx("div", { className: "flex flex-shrink-0 gap-2", children: actions }),
          dismissible && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: cn(
                "absolute right-2 top-2 rounded-md p-1",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              ),
              children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4 opacity-60 hover:opacity-100" })
            }
          )
        ]
      }
    );
  }
);
Notification.displayName = "Notification";
var positionClasses = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2"
};
var spacingClasses = {
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
};
var NotificationGroup = React.forwardRef(
  ({
    className,
    children,
    position = "top-right",
    spacing = "md",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
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
var NotificationToast = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var NotificationProvider = ({ children }) => {
  const { notifications, dismiss } = useNotification();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(NotificationGroup, { children: notifications.map(([id, options]) => /* @__PURE__ */ jsx(
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

export { Notification, NotificationGroup, NotificationProvider, NotificationToast, useNotification };
//# sourceMappingURL=notification.mjs.map
//# sourceMappingURL=notification.mjs.map