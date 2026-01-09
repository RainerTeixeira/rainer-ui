"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import {
  Root as HoverCardRootPrimitive,
  Trigger as HoverCardTriggerPrimitive,
  Content as HoverCardContentPrimitive
} from "@radix-ui/react-hover-card";
import { cn } from "../../lib/utils";
const HoverCard = HoverCardRootPrimitive;
const HoverCardTrigger = HoverCardTriggerPrimitive;
const HoverCardContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  HoverCardContentPrimitive,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardContentPrimitive.displayName;
export {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
};
//# sourceMappingURL=hover-card.mjs.map