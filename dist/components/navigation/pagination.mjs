import * as React2 from 'react';
import { cva } from 'class-variance-authority';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import MoreHorizontal from 'lucide-react/dist/esm/icons/more-horizontal';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

var tokens = tokensData;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
({
  base: String(tokens.primitives?.zIndex?.base ?? 100),
  navigation: String(tokens.primitives?.zIndex?.content ?? 150),
  dropdown: String(tokens.primitives?.zIndex?.dropdown ?? 300),
  modal: String(tokens.primitives?.zIndex?.modal ?? 400),
  overlay: String(tokens.primitives?.zIndex?.overlay ?? 400),
  sticky: String(tokens.primitives?.zIndex?.sticky ?? 200),
  fixed: String(tokens.primitives?.zIndex?.fixed ?? 300),
  tooltip: String(tokens.primitives?.zIndex?.tooltip ?? 500)
});
var motionTokens = tokens.primitives?.motion ?? {};
motionTokens.delay ?? {};
var animationDurations = motionTokens.duration ?? {};
var animationEasings = motionTokens.easing ?? {};
var baseDuration = animationDurations.normal ?? animationDurations.default ?? "200ms";
animationDurations.fast ?? baseDuration;
animationDurations.slow ?? baseDuration;
var easeInOut = animationEasings.easeInOut ?? animationEasings.default ?? "ease-in-out";
animationEasings.easeOut ?? easeInOut;
animationEasings.spring ?? easeInOut;
var fallbackMotionSemantic = {
  };
tokens.semantics?.motion ?? fallbackMotionSemantic;
tokens.themes?.light ?? {};
tokens.themes?.dark ?? {};
tokens.semantics?.layoutClasses?.components ?? {};
tokens.semantics?.layoutClasses?.sections ?? {};
tokens.primitives?.gradientDirections ?? {};
var buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
        neon: "relative bg-gradient-to-r from-neon-cyan to-cyan-600 border-2 border-neon-cyan text-gray-950 shadow-lg shadow-neon-cyan hover:shadow-neon-cyan hover:shadow-xl",
        glass: "relative bg-glass border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        xs: "h-7 px-2 text-xs rounded-md",
        sm: "h-8 px-3 text-sm rounded-md has-[>svg]:px-2",
        default: "h-9 px-4 py-2 rounded-md has-[>svg]:px-3",
        lg: "h-10 px-6 text-base rounded-lg has-[>svg]:px-4",
        xl: "h-12 px-8 text-lg rounded-lg has-[>svg]:px-5",
        icon: "size-9 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-lg",
        "icon-xl": "size-12 rounded-xl"
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95",
        glow: "hover:shadow-lg active:shadow-sm",
        bounce: "hover:animate-bounce",
        pulse: "hover:animate-pulse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale"
    }
  }
);
var ButtonComponent = React2.forwardRef(
  ({
    className,
    variant,
    size,
    animation,
    asChild = false,
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;
    if (asChild) {
      const child = React2.Children.only(children);
      return /* @__PURE__ */ jsx(
        Slot,
        {
          className: cn(
            buttonVariants({ variant, size, animation }),
            // Efeito neon especial
            variant === "neon" && [
              "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
              "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
              "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
              "before:transition-opacity after:transition-opacity",
              "before:duration-300 after:duration-300"
            ],
            className
          ),
          ref,
          "aria-busy": loading || void 0,
          ...props,
          children: loading ? /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2", children: [
            loadingIcon || /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            child
          ] }) : child
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          buttonVariants({ variant, size, animation }),
          // Efeito neon especial
          variant === "neon" && [
            "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
            "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
            "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
            "before:transition-opacity after:transition-opacity",
            "before:duration-300 after:duration-300"
          ],
          className
        ),
        ref,
        disabled: isDisabled,
        "aria-busy": loading || void 0,
        ...props,
        children: [
          loading && (loadingIcon || /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" })),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var paginationVariants = cva(
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
var Pagination = React2.forwardRef(
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
    const pages = React2.useMemo(() => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      return generateRange(page, totalPages, siblingCount);
    }, [page, totalPages, siblingCount]);
    const handlePrevious = React2.useCallback(() => {
      if (page > 1) {
        onPrevious?.();
        onChange?.(page - 1);
      }
    }, [page, onChange, onPrevious]);
    const handleNext = React2.useCallback(() => {
      if (page < totalPages) {
        onNext?.();
        onChange?.(page + 1);
      }
    }, [page, totalPages, onChange, onNext]);
    const handlePageClick = React2.useCallback((page2) => {
      onChange?.(page2);
    }, [onChange]);
    const handleFirst = React2.useCallback(() => {
      onChange?.(1);
    }, [onChange]);
    const handleLast = React2.useCallback(() => {
      onChange?.(totalPages);
    }, [onChange, totalPages]);
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12"
    };
    return /* @__PURE__ */ jsxs(
      "nav",
      {
        ref,
        className: cn(paginationVariants({ size, variant }), className),
        ...props,
        children: [
          showFirst && totalPages > 1 && /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleFirst,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Primeira p\xE1gina" }),
                /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handlePrevious,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "P\xE1gina anterior" }),
                /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: pages.map((page2, index) => {
            if (page2 === "...") {
              return /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "flex items-center justify-center",
                    sizeClasses[size]
                  ),
                  children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
                },
                `ellipsis-${index}`
              );
            }
            return /* @__PURE__ */ jsx(
              Button,
              {
                variant: page2 === page2 ? "default" : "outline",
                size: "sm",
                className: cn(sizeClasses[size], "p-0"),
                onClick: () => handlePageClick(page2),
                disabled,
                children: page2
              },
              page2
            );
          }) }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleNext,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Pr\xF3xima p\xE1gina" }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
              ]
            }
          ),
          showLast && totalPages > 1 && /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleLast,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "\xDAltima p\xE1gina" }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          showInfo && /* @__PURE__ */ jsxs("div", { className: "ml-4 text-sm text-muted-foreground", children: [
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
var PaginationInfo = React2.forwardRef(
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
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props,
        children: totalPagesItems ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "Mostrando ",
          startItem,
          " a ",
          endItem,
          " de ",
          totalPagesItems,
          " itens"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
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
var PaginationCompact = React2.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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

export { Pagination, PaginationCompact, PaginationInfo };
//# sourceMappingURL=pagination.mjs.map
//# sourceMappingURL=pagination.mjs.map