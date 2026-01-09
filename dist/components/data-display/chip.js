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
var chip_exports = {};
__export(chip_exports, {
  Chip: () => Chip,
  ChipGroup: () => ChipGroup
});
module.exports = __toCommonJS(chip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils");
const chipVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center gap-2 rounded-md border px-2.5 py-0.5 text-sm font-medium transition-all duration-[var(--motion-duration-fast)] ease-[var(--motion-easing-ease-out)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50",
        warning: "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50",
        error: "border-transparent bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50",
        outline: "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-8 px-2.5 text-sm",
        lg: "h-10 px-3 text-base"
      },
      removable: {
        true: "pr-1"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
const Chip = React.forwardRef(
  ({
    className,
    variant,
    size,
    children,
    removable = false,
    onRemove,
    removeIcon,
    removeAriaLabel = "Remover",
    ...props
  }, ref) => {
    const handleRemove = (e) => {
      e.stopPropagation();
      onRemove?.();
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          chipVariants({ variant, size, removable }),
          className
        ),
        ...props,
        children: [
          children,
          removable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              onClick: handleRemove,
              className: (0, import_utils.cn)(
                "inline-flex items-center justify-center rounded-full p-0.5",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50"
              ),
              "aria-label": removeAriaLabel,
              children: removeIcon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_lucide_react.X,
                {
                  className: "h-3 w-3 shrink-0",
                  strokeWidth: 2.5,
                  style: {
                    stroke: "currentColor"
                  }
                }
              )
            }
          )
        ]
      }
    );
  }
);
Chip.displayName = "Chip";
const spacingClasses = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3"
};
const ChipGroup = React.forwardRef(
  ({
    className,
    spacing = "md",
    wrap = true,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(
          "inline-flex items-center",
          spacingClasses[spacing],
          wrap && "flex-wrap",
          className
        ),
        ...props,
        children
      }
    );
  }
);
ChipGroup.displayName = "ChipGroup";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Chip,
  ChipGroup
});
//# sourceMappingURL=chip.js.map