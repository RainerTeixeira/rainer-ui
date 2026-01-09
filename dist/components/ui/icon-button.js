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
var icon_button_exports = {};
__export(icon_button_exports, {
  IconButton: () => IconButton
});
module.exports = __toCommonJS(icon_button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("./button");
var import_utils = require("../../lib/utils");
const iconButtonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded-md font-medium transition-all duration-[var(--motion-duration-fast)]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass neon-border hover:glass-hover dark:text-primary"
      },
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-14 w-14",
        icon: "h-9 w-9",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
const IconButton = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    icon,
    tooltip,
    tooltipPosition = "top",
    children,
    ...props
  }, ref) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const tooltipClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative inline-block", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_button.Button,
        {
          ref,
          variant,
          size,
          className: (0, import_utils.cn)(
            iconButtonVariants({ variant, size }),
            "p-0",
            className
          ),
          onMouseEnter: () => setShowTooltip(true),
          onMouseLeave: () => setShowTooltip(false),
          ...props,
          children: [
            icon,
            children
          ]
        }
      ),
      tooltip && showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: (0, import_utils.cn)(
            "absolute z-50 px-2 py-1 text-xs text-white bg-black rounded whitespace-nowrap animate-in fade-in-0 zoom-in-95",
            tooltipClasses[tooltipPosition]
          ),
          children: tooltip
        }
      )
    ] });
  }
);
IconButton.displayName = "IconButton";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IconButton
});
//# sourceMappingURL=icon-button.js.map