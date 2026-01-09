"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
const modalVariants = cva(
  "relative bg-background text-foreground shadow-lg rounded-lg",
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
        full: "max-w-full mx-4",
        screen: "w-screen h-screen max-w-none rounded-none"
      },
      variant: {
        default: "border border-border",
        glass: "glass border-border",
        neon: "neon-border dark:shadow-glow-cyan",
        minimal: "border-0 shadow-none"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
const Modal = React.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    open,
    onOpenChange,
    title,
    description,
    closable = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    showBackdrop = true,
    preventBodyScroll = true,
    loading = false,
    children,
    ...props
  }, ref) => {
    const modalRef = React.useRef(null);
    React.useEffect(() => {
      if (open && preventBodyScroll) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open, preventBodyScroll]);
    React.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    React.useEffect(() => {
      if (open && modalRef.current) {
        modalRef.current.focus();
      }
    }, [open]);
    const handleBackdropClick = React.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, onOpenChange]);
    if (!open) return null;
    return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      showBackdrop && /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: modalRef,
          className: cn(
            modalVariants({ size, variant }),
            "relative z-10 max-h-[90vh] overflow-hidden",
            "animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            loading && "opacity-70",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? "modal-title" : void 0,
          "aria-describedby": description ? "modal-description" : void 0,
          tabIndex: -1,
          ...props,
          children: [
            (title || closable) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-border", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                title && /* @__PURE__ */ jsx("h2", { id: "modal-title", className: "text-lg font-semibold", children: title }),
                description && /* @__PURE__ */ jsx("p", { id: "modal-description", className: "text-sm text-muted-foreground mt-1", children: description })
              ] }),
              closable && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => onOpenChange(false),
                  className: "h-8 w-8 p-0",
                  "aria-label": "Fechar modal",
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "max-h-[calc(90vh-8rem)] overflow-y-auto", children })
          ]
        }
      )
    ] });
  }
);
Modal.displayName = "Modal";
const ModalHeader = React.forwardRef(
  ({
    className,
    title,
    description,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center justify-between p-6 border-b border-border", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            title && /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: description })
          ] }),
          children
        ]
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";
const ModalContent = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("p-6", className),
        ...props,
        children
      }
    );
  }
);
ModalContent.displayName = "ModalContent";
const ModalFooter = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-end gap-3 p-6 border-t border-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";
const ModalTrigger = React.forwardRef(
  ({
    className,
    children,
    onOpen,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React.useCallback((event) => {
      onClick?.(event);
      onOpen?.();
    }, [onClick, onOpen]);
    return /* @__PURE__ */ jsx(
      Button,
      {
        ref,
        className,
        onClick: handleClick,
        ...props,
        children
      }
    );
  }
);
ModalTrigger.displayName = "ModalTrigger";
export {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger
};
//# sourceMappingURL=modal.mjs.map