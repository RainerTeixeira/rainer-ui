"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const centerVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        both: "items-center justify-center",
        horizontal: "justify-center",
        vertical: "items-center"
      },
      inline: {
        true: "inline-flex",
        false: "flex"
      }
    },
    defaultVariants: {
      direction: "both",
      inline: false
    }
  }
);
const Center = React.forwardRef(
  ({
    className,
    direction = "both",
    inline = false,
    fullHeight = false,
    fullWidth = false,
    padding,
    minSize,
    style,
    children,
    ...props
  }, ref) => {
    const centerStyle = React.useMemo(() => {
      const customStyle = { ...style };
      if (padding !== void 0) {
        customStyle.padding = typeof padding === "number" ? `${padding}px` : padding;
      }
      if (minSize !== void 0) {
        customStyle.minWidth = typeof minSize === "number" ? `${minSize}px` : minSize;
        customStyle.minHeight = typeof minSize === "number" ? `${minSize}px` : minSize;
      }
      return customStyle;
    }, [style, padding, minSize]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          centerVariants({ direction, inline }),
          fullHeight && "min-h-screen",
          fullWidth && "w-full",
          className
        ),
        style: centerStyle,
        ...props,
        children
      }
    );
  }
);
Center.displayName = "Center";
const CenterInline = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
      Center,
      {
        ref,
        inline: true,
        ...props
      }
    );
  }
);
CenterInline.displayName = "CenterInline";
const CenterScreen = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
      Center,
      {
        ref,
        fullHeight: true,
        fullWidth: true,
        direction: "both",
        ...props
      }
    );
  }
);
CenterScreen.displayName = "CenterScreen";
const CenterText = React.forwardRef(
  ({
    className,
    align = "center",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("text-center", className),
        style: { textAlign: align },
        ...props,
        children
      }
    );
  }
);
CenterText.displayName = "CenterText";
export {
  Center,
  CenterInline,
  CenterScreen,
  CenterText
};
//# sourceMappingURL=center.mjs.map