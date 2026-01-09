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
var link_button_exports = {};
__export(link_button_exports, {
  LinkButton: () => LinkButton
});
module.exports = __toCommonJS(link_button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const linkButtonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center font-medium transition-all duration-[var(--motion-duration-fast)]",
  {
    variants: {
      variant: {
        default: "text-primary hover:underline underline-offset-4",
        muted: "text-muted-foreground hover:text-foreground hover:underline underline-offset-4",
        destructive: "text-destructive hover:underline underline-offset-4",
        success: "text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 dark:text-emerald-400 dark:hover:text-emerald-300",
        warning: "text-amber-600 hover:text-amber-700 hover:underline underline-offset-4 dark:text-amber-400 dark:hover:text-amber-300",
        info: "text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300",
        neon: "text-primary hover:underline underline-offset-4 dark:neon-text",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1",
        outline: "border border-border rounded-md px-3 py-1 hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      weight: "medium"
    }
  }
);
const LinkButton = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    weight = "medium",
    noUnderline = false,
    leftIcon,
    rightIcon,
    href,
    target,
    children,
    ...props
  }, ref) => {
    const classes = (0, import_utils.cn)(
      linkButtonVariants({ variant, size, weight }),
      noUnderline && "hover:no-underline",
      className
    );
    if (href) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "a",
        {
          href,
          target,
          className: classes,
          rel: target === "_blank" ? "noopener noreferrer" : void 0,
          children: [
            leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1", children: leftIcon }),
            children,
            rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1", children: rightIcon })
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref,
        className: classes,
        ...props,
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1", children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1", children: rightIcon })
        ]
      }
    );
  }
);
LinkButton.displayName = "LinkButton";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LinkButton
});
//# sourceMappingURL=link-button.js.map