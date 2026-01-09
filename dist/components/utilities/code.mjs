"use client"
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Copy as CopyIcon, Check as CheckIcon } from "lucide-react";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
const codeVariants = cva(
  "rounded-md font-mono text-sm",
  {
    variants: {
      variant: {
        inline: "bg-muted px-1.5 py-0.5 text-[13px]",
        block: "bg-muted p-4 text-sm",
        ghost: "bg-transparent px-1.5 py-0.5 text-[13px]",
        neon: "bg-primary/10 text-primary px-1.5 py-0.5 text-[13px] dark:bg-primary/20",
        success: "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 text-[13px] dark:bg-emerald-900/20 dark:text-emerald-400",
        warning: "bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] dark:bg-amber-900/20 dark:text-amber-400",
        error: "bg-red-100 text-red-800 px-1.5 py-0.5 text-[13px] dark:bg-red-900/20 dark:text-red-400"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      variant: "inline",
      size: "sm"
    }
  }
);
const Code = React.forwardRef(
  ({
    className,
    variant = "inline",
    size = "sm",
    language,
    showCopy = false,
    wrap = false,
    startLine = 1,
    showLineNumbers = false,
    children,
    ...props
  }, ref) => {
    const [copied, setCopied] = React.useState(false);
    const codeRef = React.useRef(null);
    const handleCopy = React.useCallback(async () => {
      if (codeRef.current) {
        const text = codeRef.current.textContent || "";
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      }
    }, []);
    if (variant === "inline" || variant === "ghost" || variant === "neon" || variant === "success" || variant === "warning" || variant === "error") {
      return /* @__PURE__ */ jsx(
        "code",
        {
          ref,
          className: cn(codeVariants({ variant, size }), className),
          ...props,
          children
        }
      );
    }
    const codeString = typeof children === "string" ? children : String(children);
    const lines = codeString.split("\n");
    return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      (language || showCopy) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50 rounded-t-md", children: [
        language && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase", children: language }),
        showCopy && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 px-2 text-xs",
            onClick: handleCopy,
            children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "h-3 w-3 mr-1" }),
              "Copiado!"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(CopyIcon, { className: "h-3 w-3 mr-1" }),
              "Copiar"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "pre",
        {
          className: cn(
            codeVariants({ variant: "block", size }),
            wrap && "whitespace-pre-wrap break-all",
            !showLineNumbers && "overflow-x-auto",
            language && !showCopy && "rounded-t-md border-t border-border",
            className
          ),
          children: /* @__PURE__ */ jsx("code", { ref, ...props, children: showLineNumbers ? /* @__PURE__ */ jsx("table", { className: "w-full", children: /* @__PURE__ */ jsx("tbody", { children: lines.map((line, index) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-muted/50", children: [
            /* @__PURE__ */ jsx("td", { className: "sticky left-0 w-12 px-3 py-0 text-right text-muted-foreground select-none bg-muted/50", children: startLine + index }),
            /* @__PURE__ */ jsx("td", { className: "px-0 py-0", children: /* @__PURE__ */ jsx("span", { className: "block px-4 py-0", children: line || "\xA0" }) })
          ] }, index)) }) }) : children })
        }
      )
    ] });
  }
);
Code.displayName = "Code";
const CodeInline = React.forwardRef(
  ({
    className,
    color = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Code,
      {
        ref,
        variant: color,
        className,
        ...props
      }
    );
  }
);
CodeInline.displayName = "CodeInline";
const CodeBlock = React.forwardRef(
  ({
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Code,
      {
        ref,
        variant: "block",
        className,
        ...props
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
export {
  Code,
  CodeBlock,
  CodeInline
};
//# sourceMappingURL=code.mjs.map