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
var container_exports = {};
__export(container_exports, {
  Container: () => Container,
  ContainerFluid: () => ContainerFluid,
  ContainerSection: () => ContainerSection
});
module.exports = __toCommonJS(container_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const containerVariants = (0, import_class_variance_authority.cva)(
  "mx-auto px-4 sm:px-6 lg:px-8",
  {
    variants: {
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        full: "max-w-full",
        screen: "max-w-screen-xl",
        none: ""
      },
      padding: {
        none: "px-0",
        sm: "px-2 sm:px-4",
        md: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12",
        xl: "px-8 sm:px-12 lg:px-16"
      },
      center: {
        true: "flex items-center justify-center",
        false: ""
      }
    },
    defaultVariants: {
      size: "7xl",
      padding: "md",
      center: false
    }
  }
);
const Container = React.forwardRef(
  ({
    className,
    size = "7xl",
    padding = "md",
    center = false,
    fullHeight = false,
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          containerVariants({ size, padding, center }),
          fullHeight && "min-h-screen",
          verticalPadding && "py-4 sm:py-6 lg:py-8",
          className
        ),
        ...props
      }
    );
  }
);
Container.displayName = "Container";
const ContainerFluid = React.forwardRef(
  ({
    className,
    padding = "md",
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "w-full",
          padding === "none" && "px-0",
          padding === "sm" && "px-2 sm:px-4",
          padding === "md" && "px-4 sm:px-6 lg:px-8",
          padding === "lg" && "px-6 sm:px-8 lg:px-12",
          padding === "xl" && "px-8 sm:px-12 lg:px-16",
          verticalPadding && "py-4 sm:py-6 lg:py-8",
          className
        ),
        ...props
      }
    );
  }
);
ContainerFluid.displayName = "ContainerFluid";
const spacingClasses = {
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
  "2xl": "py-24"
};
const ContainerSection = React.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "section",
      {
        ref,
        className: (0, import_utils.cn)(
          "w-full",
          spacingClasses[spacing],
          className
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { ...props })
      }
    );
  }
);
ContainerSection.displayName = "ContainerSection";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Container,
  ContainerFluid,
  ContainerSection
});
//# sourceMappingURL=container.js.map