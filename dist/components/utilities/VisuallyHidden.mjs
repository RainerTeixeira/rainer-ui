"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const VisuallyHidden = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    className: cn(
      "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
      "[clip:rect(0,0,0,0)]",
      className
    ),
    ...props
  }
));
VisuallyHidden.displayName = "VisuallyHidden";
export {
  VisuallyHidden
};
//# sourceMappingURL=VisuallyHidden.mjs.map