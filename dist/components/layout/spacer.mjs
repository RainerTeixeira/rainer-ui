"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const spacerVariants = cva(
  "",
  {
    variants: {
      size: {
        xs: "h-2 w-2",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
        "2xl": "h-12 w-12",
        "3xl": "h-16 w-16",
        "4xl": "h-20 w-20"
      },
      direction: {
        horizontal: "flex-1 h-px",
        vertical: "w-px flex-1",
        both: "flex-1"
      },
      variant: {
        default: "bg-transparent",
        line: "bg-border",
        dotted: "bg-transparent border-dashed",
        gradient: "bg-gradient-to-r from-transparent via-border to-transparent"
      }
    },
    defaultVariants: {
      size: "md",
      direction: "both",
      variant: "default"
    }
  }
);
const Spacer = React.forwardRef(
  ({
    className,
    size = "md",
    direction = "both",
    variant = "default",
    width,
    height,
    flex = true,
    invisible = false,
    style,
    ...props
  }, ref) => {
    const spacerStyle = React.useMemo(() => {
      const customStyle = { ...style };
      if (width !== void 0) {
        customStyle.width = typeof width === "number" ? `${width}px` : width;
      }
      if (height !== void 0) {
        customStyle.height = typeof height === "number" ? `${height}px` : height;
      }
      if (flex) {
        customStyle.flex = "1";
      }
      if (invisible) {
        customStyle.visibility = "hidden";
      }
      return customStyle;
    }, [style, width, height, flex, invisible]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          spacerVariants({ size, direction, variant }),
          !flex && "flex-none",
          variant === "dotted" && "border-b border-border",
          className
        ),
        style: spacerStyle,
        "aria-hidden": "true",
        ...props
      }
    );
  }
);
Spacer.displayName = "Spacer";
const VerticalSpacer = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
      Spacer,
      {
        ref,
        direction: "vertical",
        ...props
      }
    );
  }
);
VerticalSpacer.displayName = "VerticalSpacer";
const HorizontalSpacer = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
      Spacer,
      {
        ref,
        direction: "horizontal",
        ...props
      }
    );
  }
);
HorizontalSpacer.displayName = "HorizontalSpacer";
export {
  HorizontalSpacer,
  Spacer,
  VerticalSpacer
};
//# sourceMappingURL=spacer.mjs.map