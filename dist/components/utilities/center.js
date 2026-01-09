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
var center_exports = {};
__export(center_exports, {
  Center: () => Center,
  CenterInline: () => CenterInline,
  CenterScreen: () => CenterScreen,
  CenterText: () => CenterText
});
module.exports = __toCommonJS(center_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const centerVariants = (0, import_class_variance_authority.cva)(
  "flex",
  {
    variants: {
      direction: {
        both: "items-center justify-center",
        horizontal: "justify-center",
        vertical: "items-center"
      },
      inline: {
        true: "inline-flex",
        false: "flex"
      }
    },
    defaultVariants: {
      direction: "both",
      inline: false
    }
  }
);
const Center = React.forwardRef(
  ({
    className,
    direction = "both",
    inline = false,
    fullHeight = false,
    fullWidth = false,
    padding,
    minSize,
    style,
    children,
    ...props
  }, ref) => {
    const centerStyle = React.useMemo(() => {
      const customStyle = { ...style };
      if (padding !== void 0) {
        customStyle.padding = typeof padding === "number" ? `${padding}px` : padding;
      }
      if (minSize !== void 0) {
        customStyle.minWidth = typeof minSize === "number" ? `${minSize}px` : minSize;
        customStyle.minHeight = typeof minSize === "number" ? `${minSize}px` : minSize;
      }
      return customStyle;
    }, [style, padding, minSize]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          centerVariants({ direction, inline }),
          fullHeight && "min-h-screen",
          fullWidth && "w-full",
          className
        ),
        style: centerStyle,
        ...props,
        children
      }
    );
  }
);
Center.displayName = "Center";
const CenterInline = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Center,
      {
        ref,
        inline: true,
        ...props
      }
    );
  }
);
CenterInline.displayName = "CenterInline";
const CenterScreen = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Center,
      {
        ref,
        fullHeight: true,
        fullWidth: true,
        direction: "both",
        ...props
      }
    );
  }
);
CenterScreen.displayName = "CenterScreen";
const CenterText = React.forwardRef(
  ({
    className,
    align = "center",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("text-center", className),
        style: { textAlign: align },
        ...props,
        children
      }
    );
  }
);
CenterText.displayName = "CenterText";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Center,
  CenterInline,
  CenterScreen,
  CenterText
});
//# sourceMappingURL=center.js.map