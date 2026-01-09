"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import {
  Root as ContextMenuRootPrimitive,
  Trigger as ContextMenuTriggerPrimitive,
  Group as ContextMenuGroupPrimitive,
  Portal as ContextMenuPortalPrimitive,
  Sub as ContextMenuSubPrimitive,
  RadioGroup as ContextMenuRadioGroupPrimitive,
  SubTrigger as ContextMenuSubTriggerPrimitive,
  SubContent as ContextMenuSubContentPrimitive,
  Content as ContextMenuContentPrimitive,
  Item as ContextMenuItemPrimitive,
  CheckboxItem as ContextMenuCheckboxItemPrimitive,
  ItemIndicator as ContextMenuItemIndicatorPrimitive,
  RadioItem as ContextMenuRadioItemPrimitive,
  Label as ContextMenuLabelPrimitive,
  Separator as ContextMenuSeparatorPrimitive
} from "@radix-ui/react-context-menu";
import { Check, ChevronRight } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
const ContextMenu = ContextMenuRootPrimitive;
const ContextMenuTrigger = ContextMenuTriggerPrimitive;
const ContextMenuGroup = ContextMenuGroupPrimitive;
const ContextMenuPortal = ContextMenuPortalPrimitive;
const ContextMenuSub = ContextMenuSubPrimitive;
const ContextMenuRadioGroup = ContextMenuRadioGroupPrimitive;
const ContextMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ContextMenuSubTriggerPrimitive,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none rounded-sm transition-colors duration-200",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ContextMenuSubTrigger.displayName = ContextMenuSubTriggerPrimitive.displayName;
const ContextMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ContextMenuSubContentPrimitive,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden border bg-popover p-1 text-popover-foreground rounded-md shadow-md transition-all duration-200",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = ContextMenuSubContentPrimitive.displayName;
const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ContextMenuPortalPrimitive, { children: /* @__PURE__ */ jsx(
  ContextMenuContentPrimitive,
  {
    ref,
    className: cn(
      "z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden border bg-popover p-1 text-popover-foreground",
      "rounded-md",
      "shadow-md",
      "transition-all duration-200 ease-in-out",
      "animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
ContextMenuContent.displayName = ContextMenuContentPrimitive.displayName;
const ContextMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  ContextMenuItemPrimitive,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none",
      "rounded-sm",
      "transition-colors duration-200 ease-in-out",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuItem.displayName = ContextMenuItemPrimitive.displayName;
const ContextMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  ContextMenuCheckboxItemPrimitive,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ContextMenuItemIndicatorPrimitive, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
ContextMenuCheckboxItem.displayName = ContextMenuCheckboxItemPrimitive.displayName;
const ContextMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ContextMenuRadioItemPrimitive,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ContextMenuItemIndicatorPrimitive, { children: /* @__PURE__ */ jsx(Check, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
ContextMenuRadioItem.displayName = ContextMenuRadioItemPrimitive.displayName;
const ContextMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  ContextMenuLabelPrimitive,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm text-foreground font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuLabel.displayName = ContextMenuLabelPrimitive.displayName;
const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ContextMenuSeparatorPrimitive,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
ContextMenuSeparator.displayName = ContextMenuSeparatorPrimitive.displayName;
const ContextMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
};
//# sourceMappingURL=context-menu.mjs.map