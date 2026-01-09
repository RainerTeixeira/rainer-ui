"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "dark:bg-background dark:border-border dark:text-foreground dark:placeholder:text-muted-foreground dark:focus-visible:ring-ring dark:focus-visible:border-border",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
export {
  Textarea
};
//# sourceMappingURL=textarea.mjs.map