"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Plus, X } from "../../lib/icons";
import { Button } from "./button";
import { cn } from "../../lib/utils";
const fabVariants = cva(
  "fixed z-40 rounded-full shadow-lg transition-all duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "bg-background border border-border hover:bg-accent hover:text-accent-foreground",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass border border-border hover:glass-hover"
      },
      size: {
        sm: "h-12 w-12",
        md: "h-14 w-14",
        lg: "h-16 w-16",
        xl: "h-20 w-20"
      },
      position: {
        "bottom-right": "bottom-6 right-6",
        "bottom-left": "bottom-6 left-6",
        "top-right": "top-6 right-6",
        "top-left": "top-6 left-6",
        "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
        "top-center": "top-6 left-1/2 -translate-x-1/2"
      },
      extended: {
        true: "rounded-full px-6 w-auto",
        false: "w-14 h-14"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      position: "bottom-right",
      extended: false
    }
  }
);
const FAB = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    position = "bottom-right",
    extended = false,
    icon,
    text,
    active = false,
    onClick,
    animate = true,
    actions = [],
    ...props
  }, ref) => {
    const [showActions, setShowActions] = React.useState(active);
    const isExtended = extended && text;
    React.useEffect(() => {
      setShowActions(active);
    }, [active]);
    const handleClick = React.useCallback(() => {
      if (actions.length > 0) {
        setShowActions(!showActions);
      }
      onClick?.();
    }, [actions.length, showActions, onClick]);
    const defaultIcon = actions.length > 0 ? showActions ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" });
    return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      showActions && actions.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 flex flex-col-reverse gap-3 mb-4", children: actions.map((action, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "flex items-center gap-3 animate-in slide-in-from-bottom-2 fade-in-0",
            "duration-[var(--motion-duration-normal)]",
            position.includes("left") && "flex-row-reverse",
            position.includes("center") && "flex-row-reverse"
          ),
          style: {
            animationDelay: `${index * 50}ms`
          },
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium whitespace-nowrap bg-background px-2 py-1 rounded-md shadow-md", children: action.label }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-10 w-10 rounded-full",
                onClick: action.onClick,
                children: action.icon
              }
            )
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          ref,
          variant,
          className: cn(
            fabVariants({ variant, size, position, extended: isExtended ? true : false }),
            animate && "animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            className
          ),
          onClick: handleClick,
          ...props,
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            icon || defaultIcon,
            isExtended && text && /* @__PURE__ */ jsx("span", { className: "font-medium", children: text })
          ] })
        }
      )
    ] });
  }
);
FAB.displayName = "FAB";
const FABGroup = React.forwardRef(
  ({
    className,
    main,
    secondary = [],
    position = "bottom-right",
    ...props
  }, ref) => {
    const positionClasses = {
      "bottom-right": "bottom-6 right-6 flex-col-reverse",
      "bottom-left": "bottom-6 left-6 flex-col-reverse",
      "top-right": "top-6 right-6 flex-col",
      "top-left": "top-6 left-6 flex-col",
      "bottom-center": "bottom-6 left-1/2 -translate-x-1/2 flex-col-reverse",
      "top-center": "top-6 left-1/2 -translate-x-1/2 flex-col"
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "fixed z-40 flex gap-3",
          positionClasses[position],
          className
        ),
        ...props,
        children: [
          secondary.map((fab, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
              style: {
                animationDelay: `${index * 50}ms`
              },
              children: fab
            },
            index
          )),
          main
        ]
      }
    );
  }
);
FABGroup.displayName = "FABGroup";
export {
  FAB,
  FABGroup
};
//# sourceMappingURL=fab.mjs.map