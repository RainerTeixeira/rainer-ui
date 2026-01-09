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
var navigation_menu_exports = {};
__export(navigation_menu_exports, {
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  navigationMenuTriggerStyle: () => navigationMenuTriggerStyle
});
module.exports = __toCommonJS(navigation_menu_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var NavigationMenuPrimitive = __toESM(require("@radix-ui/react-navigation-menu"));
var import_class_variance_authority = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
var import_constants = require("../../lib/constants");
const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative flex max-w-max flex-1 items-center justify-center",
      import_constants.Z_INDEX.DROPDOWN,
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: (0, import_utils.cn)(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = (0, import_class_variance_authority.cva)(
  (0, import_utils.cn)(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium",
    import_constants.MOTION.TRANSITION.COLOR,
    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
  )
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: (0, import_utils.cn)(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_lucide_react.ChevronDown,
        {
          className: (0, import_utils.cn)(
            "relative top-px ml-1 h-3 w-3 group-data-[state=open]:rotate-180",
            import_constants.MOTION.TRANSITION.TRANSFORM
          ),
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: (0, import_utils.cn)(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  NavigationMenuPrimitive.Viewport,
  {
    className: (0, import_utils.cn)(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: (0, import_utils.cn)(
      "top-full flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      "z-[1]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
});
//# sourceMappingURL=navigation-menu.js.map