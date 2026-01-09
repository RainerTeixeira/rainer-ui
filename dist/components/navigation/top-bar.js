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
var top_bar_exports = {};
__export(top_bar_exports, {
  TopBar: () => TopBar,
  TopBarActions: () => TopBarActions,
  TopBarTitle: () => TopBarTitle
});
module.exports = __toCommonJS(top_bar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const topBarVariants = (0, import_class_variance_authority.cva)(
  "flex items-center justify-between border-b bg-background px-4 py-3",
  {
    variants: {
      variant: {
        default: "border-border bg-background",
        floating: "border-border shadow-sm rounded-lg mx-4 mt-4",
        glass: "glass border-transparent",
        neon: "neon-border bg-background dark:shadow-glow-cyan",
        transparent: "border-transparent bg-transparent"
      },
      size: {
        sm: "h-12 px-3 py-2",
        md: "h-14 px-4 py-3",
        lg: "h-16 px-6 py-4"
      },
      sticky: {
        true: "sticky top-0 z-40",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      sticky: false
    }
  }
);
const TopBar = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    sticky = false,
    title,
    subtitle,
    left,
    center,
    right,
    back,
    menu,
    search,
    notifications,
    children,
    ...props
  }, ref) => {
    const renderLeft = () => {
      if (left) return left;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
        back && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: back.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": back.label || "Voltar",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowLeft, { className: "h-4 w-4" })
          }
        ),
        menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: menu.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": menu.label || "Menu",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "h-4 w-4" })
          }
        ),
        (title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-muted-foreground", children: subtitle })
        ] })
      ] });
    };
    const renderCenter = () => {
      if (center) return center;
      if (search) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 max-w-md mx-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              type: "text",
              placeholder: search.placeholder || "Buscar...",
              value: search.value,
              onChange: (e) => search.onChange?.(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  search.onSubmit?.(e.currentTarget.value);
                }
              },
              className: (0, import_utils.cn)(
                "w-full h-9 pl-10 pr-4 rounded-md border border-input bg-background",
                "text-sm ring-offset-background",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )
            }
          )
        ] }) });
      }
      if (title && (back || menu)) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-lg font-semibold", children: title }) });
      }
      return null;
    };
    const renderRight = () => {
      if (right) return right;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
        notifications && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: notifications.onClick,
            className: "relative h-8 w-8 p-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Bell, { className: "h-4 w-4" }),
              notifications.count && notifications.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center", children: notifications.count > 99 ? "99+" : notifications.count })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Settings, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MoreVertical, { className: "h-4 w-4" })
          }
        )
      ] });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(topBarVariants({ variant, size, sticky }), className),
        ...props,
        children: [
          renderLeft(),
          renderCenter(),
          renderRight(),
          children
        ]
      }
    );
  }
);
TopBar.displayName = "TopBar";
const TopBarTitle = React.forwardRef(
  ({
    className,
    title,
    subtitle,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("flex flex-col items-center", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-muted-foreground mt-1", children: subtitle })
        ]
      }
    );
  }
);
TopBarTitle.displayName = "TopBarTitle";
const TopBarActions = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("flex items-center gap-2", className),
        ...props,
        children
      }
    );
  }
);
TopBarActions.displayName = "TopBarActions";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TopBar,
  TopBarActions,
  TopBarTitle
});
//# sourceMappingURL=top-bar.js.map