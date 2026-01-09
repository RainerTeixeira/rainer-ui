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
var pagination_exports = {};
__export(pagination_exports, {
  Pagination: () => Pagination,
  PaginationCompact: () => PaginationCompact,
  PaginationInfo: () => PaginationInfo
});
module.exports = __toCommonJS(pagination_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const paginationVariants = (0, import_class_variance_authority.cva)(
  "flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      },
      variant: {
        default: "",
        compact: "gap-0.5",
        spaced: "gap-2"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
function generateRange(page, totalPages, siblingCount) {
  const range = [];
  range.push(1);
  let start = Math.max(2, page - siblingCount);
  let end = Math.min(totalPages - 1, page + siblingCount);
  if (start <= 3) {
    end = Math.min(totalPages - 1, 2 + siblingCount * 2);
  }
  if (end >= totalPages - 2) {
    start = Math.max(2, totalPages - 2 - siblingCount * 2);
  }
  if (start > 2) {
    range.push("...");
  }
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  if (end < totalPages - 1) {
    range.push("...");
  }
  if (totalPages > 1) {
    range.push(totalPages);
  }
  return range;
}
const Pagination = React.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    page,
    totalPages,
    onChange,
    onPrevious,
    onNext,
    showFirst = true,
    showLast = true,
    showInfo = false,
    disabled = false,
    siblingCount = 1,
    ...props
  }, ref) => {
    const pages = React.useMemo(() => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      return generateRange(page, totalPages, siblingCount);
    }, [page, totalPages, siblingCount]);
    const handlePrevious = React.useCallback(() => {
      if (page > 1) {
        onPrevious?.();
        onChange?.(page - 1);
      }
    }, [page, onChange, onPrevious]);
    const handleNext = React.useCallback(() => {
      if (page < totalPages) {
        onNext?.();
        onChange?.(page + 1);
      }
    }, [page, totalPages, onChange, onNext]);
    const handlePageClick = React.useCallback((page2) => {
      onChange?.(page2);
    }, [onChange]);
    const handleFirst = React.useCallback(() => {
      onChange?.(1);
    }, [onChange]);
    const handleLast = React.useCallback(() => {
      onChange?.(totalPages);
    }, [onChange, totalPages]);
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "nav",
      {
        ref,
        className: (0, import_utils.cn)(paginationVariants({ size, variant }), className),
        ...props,
        children: [
          showFirst && totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_button.Button,
            {
              variant: "outline",
              size: "sm",
              className: (0, import_utils.cn)(sizeClasses[size], "p-0"),
              onClick: handleFirst,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Primeira p\xE1gina" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-4 w-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_button.Button,
            {
              variant: "outline",
              size: "sm",
              className: (0, import_utils.cn)(sizeClasses[size], "p-0"),
              onClick: handlePrevious,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "P\xE1gina anterior" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-1", children: pages.map((page2, index) => {
            if (page2 === "...") {
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  className: (0, import_utils.cn)(
                    "flex items-center justify-center",
                    sizeClasses[size]
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MoreHorizontal, { className: "h-4 w-4" })
                },
                `ellipsis-${index}`
              );
            }
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_button.Button,
              {
                variant: page2 === page2 ? "default" : "outline",
                size: "sm",
                className: (0, import_utils.cn)(sizeClasses[size], "p-0"),
                onClick: () => handlePageClick(page2),
                disabled,
                children: page2
              },
              page2
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_button.Button,
            {
              variant: "outline",
              size: "sm",
              className: (0, import_utils.cn)(sizeClasses[size], "p-0"),
              onClick: handleNext,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Pr\xF3xima p\xE1gina" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-4 w-4" })
              ]
            }
          ),
          showLast && totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_button.Button,
            {
              variant: "outline",
              size: "sm",
              className: (0, import_utils.cn)(sizeClasses[size], "p-0"),
              onClick: handleLast,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "\xDAltima p\xE1gina" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-4 w-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          showInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ml-4 text-sm text-muted-foreground", children: [
            "P\xE1gina ",
            page,
            " de ",
            totalPages
          ] })
        ]
      }
    );
  }
);
Pagination.displayName = "Pagination";
const PaginationInfo = React.forwardRef(
  ({
    className,
    page,
    totalPages,
    totalPagesItems,
    itemsPerPage,
    ...props
  }, ref) => {
    const startItem = totalPagesItems ? (page - 1) * (itemsPerPage || 10) + 1 : 0;
    const endItem = totalPagesItems ? Math.min(page * (itemsPerPage || 10), totalPagesItems) : 0;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("text-sm text-muted-foreground", className),
        ...props,
        children: totalPagesItems ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          "Mostrando ",
          startItem,
          " a ",
          endItem,
          " de ",
          totalPagesItems,
          " itens"
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          "P\xE1gina ",
          page,
          " de ",
          totalPages
        ] })
      }
    );
  }
);
PaginationInfo.displayName = "PaginationInfo";
const PaginationCompact = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Pagination,
      {
        ref,
        showFirst: false,
        showLast: false,
        showInfo: false,
        variant: "compact",
        ...props
      }
    );
  }
);
PaginationCompact.displayName = "PaginationCompact";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagination,
  PaginationCompact,
  PaginationInfo
});
//# sourceMappingURL=pagination.js.map