"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import {
  Root as PopoverRootPrimitive,
  Trigger as PopoverTriggerPrimitive,
  Content as PopoverContentPrimitive,
  Portal as PopoverPortalPrimitive
} from "@radix-ui/react-popover";
import { cn } from "../../lib/utils";
const Popover = PopoverRootPrimitive;
const PopoverTrigger = PopoverTriggerPrimitive;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPortalPrimitive, { children: /* @__PURE__ */ jsx(
  PopoverContentPrimitive,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverContentPrimitive.displayName;
export {
  Popover,
  PopoverContent,
  PopoverTrigger
};
//# sourceMappingURL=popover.mjs.map