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
var command_exports = {};
__export(command_exports, {
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut
});
module.exports = __toCommonJS(command_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_dialog = require("../overlays/dialog");
var import_utils = require("../../lib/utils");
var import_cmdk = require("cmdk");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_cmdk.Command,
  {
    ref,
    className: (0, import_utils.cn)(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = import_cmdk.Command.displayName;
const CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogContent, { className: "overflow-hidden p-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTitle, { className: "sr-only", children: "Buscar artigos" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
  ] }) });
};
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center border-b px-3", "data-cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Input,
    {
      ref,
      className: (0, import_utils.cn)(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = import_cmdk.Command.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_cmdk.Command.List,
  {
    ref,
    className: (0, import_utils.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = import_cmdk.Command.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_cmdk.Command.Group,
  {
    ref,
    className: (0, import_utils.cn)(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_cmdk.Command.Separator,
  {
    ref,
    className: (0, import_utils.cn)("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_cmdk.Command.Item,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = import_cmdk.Command.Item.displayName;
const CommandShortcut = ({
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
CommandShortcut.displayName = "CommandShortcut";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
});
//# sourceMappingURL=command.js.map