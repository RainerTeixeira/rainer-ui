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
var avatar_exports = {};
__export(avatar_exports, {
  Avatar: () => Avatar
});
module.exports = __toCommonJS(avatar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
function extractInitials(name, maxChars = 2) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, maxChars).toUpperCase();
  }
  return parts.slice(0, maxChars).map((part) => part[0]).join("").toUpperCase();
}
const sizeClasses = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-16 w-16 text-xl",
  "2xl": "h-20 w-20 text-2xl"
};
const variantClasses = {
  circular: "rounded-full",
  rounded: "rounded-lg",
  square: "rounded-none"
};
const Avatar = React.forwardRef(
  ({
    className,
    src,
    alt,
    name,
    size = "md",
    variant = "circular",
    fallbackColor = "bg-gray-400",
    textColor = "text-white",
    maxInitials = 2,
    onLoad,
    onError,
    children,
    ...props
  }, ref) => {
    const [imageStatus, setImageStatus] = React.useState("loading");
    const [showFallback, setShowFallback] = React.useState(!src);
    React.useEffect(() => {
      if (!src) {
        setShowFallback(true);
        setImageStatus("error");
        return;
      }
      setImageStatus("loading");
      setShowFallback(false);
      const img = new Image();
      img.onload = () => {
        setImageStatus("loaded");
        onLoad?.();
      };
      img.onerror = () => {
        setImageStatus("error");
        setShowFallback(true);
        onError?.();
      };
      img.src = src;
    }, [src, onLoad, onError]);
    const initials = name ? extractInitials(name, maxInitials) : "";
    const ariaLabel = alt || name || "Avatar";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "relative inline-flex items-center justify-center font-medium",
          sizeClasses[size],
          variantClasses[variant],
          showFallback ? fallbackColor : "bg-transparent",
          textColor,
          className
        ),
        role: "img",
        "aria-label": ariaLabel,
        ...props,
        children: [
          showFallback ? initials || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-50", children: size === "xs" ? "?" : size === "sm" ? "?" : "User" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              src,
              alt,
              className: (0, import_utils.cn)(
                "h-full w-full object-cover",
                variantClasses[variant]
              ),
              style: {
                opacity: imageStatus === "loaded" ? 1 : 0,
                transition: "opacity 0.2s ease-in-out"
              }
            }
          ),
          imageStatus === "loading" && !showFallback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-200", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 animate-pulse rounded-full bg-gray-400" }) }),
          children
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar
});
//# sourceMappingURL=avatar.js.map