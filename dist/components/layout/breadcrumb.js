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
var breadcrumb_exports = {};
__export(breadcrumb_exports, {
  Breadcrumb: () => Breadcrumb,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator
});
module.exports = __toCommonJS(breadcrumb_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
const Breadcrumb = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "ol",
  {
    ref,
    className: (0, import_utils.cn)(
      "flex flex-wrap items-center gap-2 break-words text-sm text-muted-foreground",
      className
    ),
    ...props
  }
));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "ol",
  {
    ref,
    className: (0, import_utils.cn)("flex flex-wrap items-center gap-2", className),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "li",
  {
    ref,
    className: (0, import_utils.cn)("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ className, isCurrentPage, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "a",
  {
    ref,
    className: (0, import_utils.cn)(
      "transition-colors hover:text-foreground",
      isCurrentPage ? "text-foreground font-medium pointer-events-none cursor-default" : "cursor-pointer",
      className
    ),
    ...isCurrentPage && { "aria-current": "page" },
    ...props
  }
));
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: (0, import_utils.cn)("[&>svg]:h-3.5 [&>svg]:w-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "span",
  {
    ref,
    role: "doc-pagebreak",
    "aria-current": "page",
    "aria-label": "current page",
    className: (0, import_utils.cn)("font-medium text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
});
//# sourceMappingURL=breadcrumb.js.map