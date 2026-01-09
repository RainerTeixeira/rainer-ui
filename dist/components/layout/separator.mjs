"use client"
import { jsx } from "react/jsx-runtime";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import { cn } from "../../lib/utils";
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        /** Define dimensões baseado na orientação */
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
export {
  Separator
};
//# sourceMappingURL=separator.mjs.map