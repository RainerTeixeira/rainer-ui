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
var divider_exports = {};
__export(divider_exports, {
  Divider: () => Divider,
  SectionDivider: () => SectionDivider,
  TextDivider: () => TextDivider
});
module.exports = __toCommonJS(divider_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const dividerVariants = (0, import_class_variance_authority.cva)(
  "border-t",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-muted",
        primary: "border-primary",
        secondary: "border-secondary",
        dashed: "border-dashed",
        dotted: "border-dotted",
        gradient: "border-none bg-gradient-to-r from-transparent via-border to-transparent h-px"
      },
      size: {
        xs: "border-t-0.5",
        sm: "border-t",
        md: "border-t-2",
        lg: "border-t-4"
      },
      orientation: {
        horizontal: "w-full",
        vertical: "h-full border-l border-t-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      orientation: "horizontal"
    }
  }
);
const Divider = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    orientation = "horizontal",
    label,
    labelPosition = "center",
    labelComponent,
    ...props
  }, ref) => {
    if (label || labelComponent) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          ref,
          className: (0, import_utils.cn)(
            "flex items-center gap-4",
            orientation === "vertical" && "flex-col",
            className
          ),
          role: "separator",
          "aria-orientation": orientation,
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: (0, import_utils.cn)(
                  dividerVariants({ variant, size, orientation }),
                  labelPosition === "center" && "flex-1",
                  labelPosition === "end" && "flex-1",
                  labelPosition === "start" && "flex-none w-10"
                )
              }
            ),
            labelComponent || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: (0, import_utils.cn)(
                  dividerVariants({ variant, size, orientation }),
                  labelPosition === "center" && "flex-1",
                  labelPosition === "start" && "flex-1",
                  labelPosition === "end" && "flex-none w-10"
                )
              }
            )
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          dividerVariants({ variant, size, orientation }),
          className
        ),
        role: "separator",
        "aria-orientation": orientation,
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";
const spacingClasses = {
  sm: "my-4",
  md: "my-6",
  lg: "my-8",
  xl: "my-12"
};
const SectionDivider = React.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(spacingClasses[spacing], className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { ref, size: "md", ...props }) });
  }
);
SectionDivider.displayName = "SectionDivider";
const textColorClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground"
};
const TextDivider = React.forwardRef(
  ({
    className,
    children,
    textColor = "muted",
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("flex items-center gap-4", className),
        role: "separator",
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)("text-sm font-medium whitespace-nowrap", textColorClasses[textColor]), children }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" })
        ]
      }
    );
  }
);
TextDivider.displayName = "TextDivider";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Divider,
  SectionDivider,
  TextDivider
});
//# sourceMappingURL=divider.js.map