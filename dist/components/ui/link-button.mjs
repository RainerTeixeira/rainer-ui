"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const linkButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-[var(--motion-duration-fast)]",
  {
    variants: {
      variant: {
        default: "text-primary hover:underline underline-offset-4",
        muted: "text-muted-foreground hover:text-foreground hover:underline underline-offset-4",
        destructive: "text-destructive hover:underline underline-offset-4",
        success: "text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 dark:text-emerald-400 dark:hover:text-emerald-300",
        warning: "text-amber-600 hover:text-amber-700 hover:underline underline-offset-4 dark:text-amber-400 dark:hover:text-amber-300",
        info: "text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300",
        neon: "text-primary hover:underline underline-offset-4 dark:neon-text",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1",
        outline: "border border-border rounded-md px-3 py-1 hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      weight: "medium"
    }
  }
);
const LinkButton = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    weight = "medium",
    noUnderline = false,
    leftIcon,
    rightIcon,
    href,
    target,
    children,
    ...props
  }, ref) => {
    const classes = cn(
      linkButtonVariants({ variant, size, weight }),
      noUnderline && "hover:no-underline",
      className
    );
    if (href) {
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          target,
          className: classes,
          rel: target === "_blank" ? "noopener noreferrer" : void 0,
          children: [
            leftIcon && /* @__PURE__ */ jsx("span", { className: "mr-1", children: leftIcon }),
            children,
            rightIcon && /* @__PURE__ */ jsx("span", { className: "ml-1", children: rightIcon })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: classes,
        ...props,
        children: [
          leftIcon && /* @__PURE__ */ jsx("span", { className: "mr-1", children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ jsx("span", { className: "ml-1", children: rightIcon })
        ]
      }
    );
  }
);
LinkButton.displayName = "LinkButton";
export {
  LinkButton
};
//# sourceMappingURL=link-button.mjs.map