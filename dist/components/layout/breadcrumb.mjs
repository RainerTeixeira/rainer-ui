"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
const Breadcrumb = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-2 break-words text-sm text-muted-foreground",
      className
    ),
    ...props
  }
));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn("flex flex-wrap items-center gap-2", className),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ className, isCurrentPage, ...props }, ref) => /* @__PURE__ */ jsx(
  "a",
  {
    ref,
    className: cn(
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
}) => /* @__PURE__ */ jsx(
  "div",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    role: "doc-pagebreak",
    "aria-current": "page",
    "aria-label": "current page",
    className: cn("font-medium text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
};
//# sourceMappingURL=breadcrumb.mjs.map