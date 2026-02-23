import * as React from "react";
import { cn } from "../../lib/tokens";
import { ChevronRight } from "lucide-react";

const Breadcrumb = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-2 break-words text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
));
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("flex flex-wrap items-center gap-2", className)}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    isCurrentPage?: boolean;
  }
>(({ className, isCurrentPage, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "transition-colors hover:text-foreground",
      isCurrentPage
        ? "text-foreground font-medium pointer-events-none cursor-default"
        : "cursor-pointer",
      className
    )}
    {...(isCurrentPage && { "aria-current": "page" })}
    {...props}
  />
));
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </div>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="doc-pagebreak"
    aria-current="page"
    aria-label="current page"
    className={cn("font-medium text-foreground", className)}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
};
