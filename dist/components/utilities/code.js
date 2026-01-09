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
var code_exports = {};
__export(code_exports, {
  Code: () => Code,
  CodeBlock: () => CodeBlock,
  CodeInline: () => CodeInline
});
module.exports = __toCommonJS(code_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
const codeVariants = (0, import_class_variance_authority.cva)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "code",
        {
          ref,
          className: (0, import_utils.cn)(codeVariants({ variant, size }), className),
          ...props,
          children
        }
      );
    }
    const codeString = typeof children === "string" ? children : String(children);
    const lines = codeString.split("\n");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative group", children: [
      (language || showCopy) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50 rounded-t-md", children: [
        language && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs font-medium text-muted-foreground uppercase", children: language }),
        showCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 px-2 text-xs",
            onClick: handleCopy,
            children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-3 w-3 mr-1" }),
              "Copiado!"
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "h-3 w-3 mr-1" }),
              "Copiar"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "pre",
        {
          className: (0, import_utils.cn)(
            codeVariants({ variant: "block", size }),
            wrap && "whitespace-pre-wrap break-all",
            !showLineNumbers && "overflow-x-auto",
            language && !showCopy && "rounded-t-md border-t border-border",
            className
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { ref, ...props, children: showLineNumbers ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { className: "hover:bg-muted/50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "sticky left-0 w-12 px-3 py-0 text-right text-muted-foreground select-none bg-muted/50", children: startLine + index }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "px-0 py-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block px-4 py-0", children: line || "\xA0" }) })
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Code,
  CodeBlock,
  CodeInline
});
//# sourceMappingURL=code.js.map