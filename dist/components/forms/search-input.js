'use strict';

var TrendingUp = require('lucide-react/dist/esm/icons/trending-up');
var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var Clock = require('lucide-react/dist/esm/icons/clock');
var Filter = require('lucide-react/dist/esm/icons/filter');
var Search = require('lucide-react/dist/esm/icons/search');
var X = require('lucide-react/dist/esm/icons/x');
var reactSlot = require('@radix-ui/react-slot');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var TrendingUp__default = /*#__PURE__*/_interopDefault(TrendingUp);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Clock__default = /*#__PURE__*/_interopDefault(Clock);
var Filter__default = /*#__PURE__*/_interopDefault(Filter);
var Search__default = /*#__PURE__*/_interopDefault(Search);
var X__default = /*#__PURE__*/_interopDefault(X);

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens.primitives.motion;
var motionSemantic = designTokens.tokens.semantics.motion || {
  transition: {
    default: {
      duration: motion.duration.normal,
      easing: motion.easing.easeInOut
    }
  },
  interaction: {
    hover: {
      duration: motion.duration.fast,
      easing: motion.easing.easeOut
    }
  },
  feedback: {
    success: {
      duration: motion.duration.slower,
      easing: motion.easing.spring
    }
  },
  navigation: {
    page: {
      duration: motion.duration.slow,
      easing: motion.easing.easeInOut
    }
  }
};
motion.delay;
motion.duration;
motion.easing;
({
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring
  },
  // Presets semânticos
  transition: motionSemantic.transition.default,
  interaction: motionSemantic.interaction.hover,
  feedback: motionSemantic.feedback.success,
  navigation: motionSemantic.navigation.page
});
var buttonVariants = classVarianceAuthority.cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-[var(--motion-duration,200ms)] ease-[var(--motion-easing,cubic-bezier(.4,0,.2,1))] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:shadow-glow-cyan",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:shadow-glow-purple",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 dark:hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline dark:neon-text",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass neon-border hover:glass-hover dark:text-primary",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
var searchInputVariants = classVarianceAuthority.cva(
  "relative flex w-full items-center",
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-12"
      },
      variant: {
        default: "",
        filled: "bg-muted",
        outlined: "border-2",
        minimal: "border-transparent bg-transparent"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
var SearchInput = React__namespace.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    value = "",
    onChange,
    onSubmit,
    placeholder = "Buscar...",
    suggestions = [],
    history = [],
    showClear = true,
    showFilter = false,
    onFilter,
    loading = false,
    debounceTime = 300,
    maxSuggestions = 10,
    // saveToHistory, // TODO: implementar funcionalidade de histórico
    disabled
    // props, // Props adicionais não utilizados
  }) => {
    const [internalValue, setInternalValue] = React__namespace.useState(value);
    const [isOpen, setIsOpen] = React__namespace.useState(false);
    const [selectedIndex, setSelectedIndex] = React__namespace.useState(-1);
    const [filteredSuggestions, setFilteredSuggestions] = React__namespace.useState([]);
    const inputRef = React__namespace.useRef(null);
    const containerRef = React__namespace.useRef(null);
    const debounceRef = React__namespace.useRef();
    const currentValue = value !== void 0 ? value : internalValue;
    const setValue = React__namespace.useCallback((newValue) => {
      setInternalValue(newValue);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        onChange?.(newValue);
      }, debounceTime);
    }, [onChange, debounceTime]);
    React__namespace.useEffect(() => {
      if (!currentValue.trim()) {
        const historySuggestions = history.slice(0, 5).map((item, index) => ({
          id: `history-${index}`,
          text: item,
          type: "history",
          icon: /* @__PURE__ */ jsxRuntime.jsx(Clock__default.default, { className: "h-4 w-4" })
        }));
        const trendingSuggestions = suggestions.filter((s) => s.type === "trending").slice(0, 5);
        setFilteredSuggestions([...historySuggestions, ...trendingSuggestions]);
      } else {
        const filtered = suggestions.filter(
          (s) => s.text.toLowerCase().includes(currentValue.toLowerCase())
        ).slice(0, maxSuggestions);
        setFilteredSuggestions(filtered);
      }
    }, [currentValue, suggestions, history, maxSuggestions]);
    const handleKeyDown = React__namespace.useCallback((event) => {
      switch (event.key) {
        case "Enter":
          event.preventDefault();
          if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
            const suggestion = filteredSuggestions[selectedIndex];
            if (suggestion.action) {
              suggestion.action();
            } else {
              setValue(suggestion.text);
              onSubmit?.(suggestion.text);
            }
          } else {
            onSubmit?.(currentValue);
          }
          setIsOpen(false);
          break;
        case "ArrowDown":
          event.preventDefault();
          setSelectedIndex(
            (prev) => prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          event.preventDefault();
          setSelectedIndex((prev) => prev > 0 ? prev - 1 : -1);
          break;
        case "Escape":
          setIsOpen(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    }, [selectedIndex, filteredSuggestions, currentValue, setValue, onSubmit]);
    const handleFocus = React__namespace.useCallback(() => {
      setIsOpen(true);
    }, []);
    const handleBlur = React__namespace.useCallback((event) => {
      if (!event.relatedTarget?.closest(".search-suggestion")) {
        setTimeout(() => setIsOpen(false), 150);
      }
    }, []);
    const handleClear = React__namespace.useCallback(() => {
      setValue("");
      inputRef.current?.focus();
    }, [setValue]);
    const handleSuggestionClick = React__namespace.useCallback((suggestion) => {
      if (suggestion.action) {
        suggestion.action();
      } else {
        setValue(suggestion.text);
        onSubmit?.(suggestion.text);
      }
      setIsOpen(false);
    }, [setValue, onSubmit]);
    React__namespace.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const getIcon = (type) => {
      switch (type) {
        case "history":
          return /* @__PURE__ */ jsxRuntime.jsx(Clock__default.default, { className: "h-4 w-4 text-muted-foreground" });
        case "trending":
          return /* @__PURE__ */ jsxRuntime.jsx(TrendingUp__default.default, { className: "h-4 w-4 text-amber-500" });
        case "filter":
          return /* @__PURE__ */ jsxRuntime.jsx(Filter__default.default, { className: "h-4 w-4 text-blue-500" });
        default:
          return null;
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("relative", className),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
            searchInputVariants({ size, variant }),
            "rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
            disabled && "opacity-50 cursor-not-allowed",
            variant === "filled" && "border-transparent",
            variant === "outlined" && "border-2",
            variant === "minimal" && "border-transparent bg-transparent"
          ), children: [
            /* @__PURE__ */ jsxRuntime.jsx(Search__default.default, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: currentValue,
                onChange: (e) => setValue(e.target.value),
                onKeyDown: handleKeyDown,
                onFocus: handleFocus,
                onBlur: handleBlur,
                placeholder,
                disabled,
                className: "flex-1 bg-transparent outline-none ml-2 placeholder:text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
              loading && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
              showClear && currentValue && !disabled && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: handleClear,
                  children: /* @__PURE__ */ jsxRuntime.jsx(X__default.default, { className: "h-3 w-3" })
                }
              ),
              showFilter && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: onFilter,
                  disabled,
                  children: /* @__PURE__ */ jsxRuntime.jsx(Filter__default.default, { className: "h-3 w-3" })
                }
              )
            ] })
          ] }),
          isOpen && filteredSuggestions.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95", children: filteredSuggestions.map((suggestion, index) => /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: cn(
                "search-suggestion flex items-center gap-3 rounded-sm px-2 py-1.5 text-sm cursor-pointer",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground",
                index === selectedIndex && "bg-accent text-accent-foreground"
              ),
              onClick: () => handleSuggestionClick(suggestion),
              children: [
                suggestion.icon || getIcon(suggestion.type),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "truncate", children: suggestion.text }),
                  suggestion.description && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-muted-foreground truncate", children: suggestion.description })
                ] })
              ]
            },
            suggestion.id
          )) })
        ]
      }
    );
  }
);
SearchInput.displayName = "SearchInput";

exports.SearchInput = SearchInput;
//# sourceMappingURL=search-input.js.map
//# sourceMappingURL=search-input.js.map