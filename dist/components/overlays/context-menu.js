"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var context_menu_exports = {};
__export(context_menu_exports, {
  ContextMenu: () => ContextMenu,
  ContextMenuCheckboxItem: () => ContextMenuCheckboxItem,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuGroup: () => ContextMenuGroup,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuLabel: () => ContextMenuLabel,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuRadioGroup: () => ContextMenuRadioGroup,
  ContextMenuRadioItem: () => ContextMenuRadioItem,
  ContextMenuSeparator: () => ContextMenuSeparator,
  ContextMenuShortcut: () => ContextMenuShortcut,
  ContextMenuSub: () => ContextMenuSub,
  ContextMenuSubContent: () => ContextMenuSubContent,
  ContextMenuSubTrigger: () => ContextMenuSubTrigger,
  ContextMenuTrigger: () => ContextMenuTrigger
});
module.exports = __toCommonJS(context_menu_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react_context_menu = require("@radix-ui/react-context-menu");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
const ContextMenu = import_react_context_menu.Root;
const ContextMenuTrigger = import_react_context_menu.Trigger;
const ContextMenuGroup = import_react_context_menu.Group;
const ContextMenuPortal = import_react_context_menu.Portal;
const ContextMenuSub = import_react_context_menu.Sub;
const ContextMenuRadioGroup = import_react_context_menu.RadioGroup;
const ContextMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  import_react_context_menu.SubTrigger,
  {
    ref,
    className: (0, import_utils.cn)(
      "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none rounded-sm transition-colors duration-200",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ContextMenuSubTrigger.displayName = import_react_context_menu.SubTrigger.displayName;
const ContextMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_react_context_menu.SubContent,
  {
    ref,
    className: (0, import_utils.cn)(
      "z-50 min-w-[8rem] overflow-hidden border bg-popover p-1 text-popover-foreground rounded-md shadow-md transition-all duration-200",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = import_react_context_menu.SubContent.displayName;
const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_context_menu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_react_context_menu.Content,
  {
    ref,
    className: (0, import_utils.cn)(
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
ContextMenuContent.displayName = import_react_context_menu.Content.displayName;
const ContextMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_react_context_menu.Item,
  {
    ref,
    className: (0, import_utils.cn)(
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
ContextMenuItem.displayName = import_react_context_menu.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  import_react_context_menu.CheckboxItem,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_context_menu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
ContextMenuCheckboxItem.displayName = import_react_context_menu.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  import_react_context_menu.RadioItem,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_context_menu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
ContextMenuRadioItem.displayName = import_react_context_menu.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_react_context_menu.Label,
  {
    ref,
    className: (0, import_utils.cn)(
      "px-2 py-1.5 text-sm text-foreground font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuLabel.displayName = import_react_context_menu.Label.displayName;
const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_react_context_menu.Separator,
  {
    ref,
    className: (0, import_utils.cn)("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
ContextMenuSeparator.displayName = import_react_context_menu.Separator.displayName;
const ContextMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      className: (0, import_utils.cn)(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=context-menu.js.map