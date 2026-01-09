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
var timeline_exports = {};
__export(timeline_exports, {
  Timeline: () => Timeline,
  TimelineItem: () => TimelineItem,
  TimelineSeparator: () => TimelineSeparator
});
module.exports = __toCommonJS(timeline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const defaultIcons = {
  completed: import_lucide_react.Check,
  pending: import_lucide_react.Circle,
  error: import_lucide_react.X,
  warning: import_lucide_react.AlertTriangle,
  default: "div"
};
const timelineDotVariants = (0, import_class_variance_authority.cva)(
  "relative flex items-center justify-center rounded-full border-2 bg-background",
  {
    variants: {
      status: {
        default: "border-border",
        active: "border-primary bg-primary",
        completed: "border-emerald-500 bg-emerald-500",
        pending: "border-amber-500 bg-amber-500",
        error: "border-red-500 bg-red-500",
        warning: "border-orange-500 bg-orange-500"
      },
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      status: "default",
      size: "md"
    }
  }
);
const TimelineItem = React.forwardRef(
  ({
    className,
    status = "default",
    icon,
    iconType,
    dotSize = "md",
    children,
    date,
    title,
    description,
    ...props
  }, ref) => {
    let IconComponent = icon;
    if (!IconComponent && iconType) {
      IconComponent = React.createElement(defaultIcons[iconType], {
        className: "h-2.5 w-2.5 text-primary-foreground"
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("relative flex gap-4 pb-8 last:pb-0", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "absolute left-[calc(var(--dot-size)/2)] top-8 h-full w-0.5 bg-border last:hidden",
              style: { "--dot-size": dotSize === "sm" ? "12px" : dotSize === "lg" ? "20px" : "16px" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)(timelineDotVariants({ status, size: dotSize })), children: IconComponent }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 min-w-0", children: [
            (date || title) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mb-1 flex items-baseline gap-2", children: [
              date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { className: "text-xs text-muted-foreground whitespace-nowrap", children: date }),
              title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-sm font-medium text-foreground", children: title })
            ] }),
            description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-muted-foreground mb-2", children: description }),
            children
          ] })
        ]
      }
    );
  }
);
TimelineItem.displayName = "TimelineItem";
const Timeline = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("space-y-0", className),
        ...props,
        children: React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child, {
            ...child.props,
            className: (0, import_utils.cn)(child.props.className)
          });
        })
      }
    );
  }
);
Timeline.displayName = "Timeline";
const TimelineSeparator = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "relative my-4 py-2",
          "before:absolute before:left-[calc(var(--dot-size)/2)] before:top-0 before:h-full before:w-0.5 before:bg-border",
          className
        ),
        style: { "--dot-size": "16px" },
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-4 rounded-full bg-background border-2 border-border" }),
          children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm font-medium text-muted-foreground", children })
        ] })
      }
    );
  }
);
TimelineSeparator.displayName = "TimelineSeparator";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Timeline,
  TimelineItem,
  TimelineSeparator
});
//# sourceMappingURL=timeline.js.map