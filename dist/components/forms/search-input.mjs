"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { Search, X, Clock, TrendingUp, Filter } from "lucide-react";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
const searchInputVariants = cva(
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
const SearchInput = React.forwardRef(
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
    saveToHistory = false,
    disabled,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const inputRef = React.useRef(null);
    const containerRef = React.useRef(null);
    const debounceRef = React.useRef();
    const currentValue = value !== void 0 ? value : internalValue;
    const setValue = React.useCallback((newValue) => {
      setInternalValue(newValue);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        onChange?.(newValue);
      }, debounceTime);
    }, [onChange, debounceTime]);
    React.useEffect(() => {
      if (!currentValue.trim()) {
        const historySuggestions = history.slice(0, 5).map((item, index) => ({
          id: `history-${index}`,
          text: item,
          type: "history",
          icon: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" })
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
    const handleKeyDown = React.useCallback((event) => {
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
    const handleFocus = React.useCallback(() => {
      setIsOpen(true);
    }, []);
    const handleBlur = React.useCallback((event) => {
      if (!event.relatedTarget?.closest(".search-suggestion")) {
        setTimeout(() => setIsOpen(false), 150);
      }
    }, []);
    const handleClear = React.useCallback(() => {
      setValue("");
      inputRef.current?.focus();
    }, [setValue]);
    const handleSuggestionClick = React.useCallback((suggestion) => {
      if (suggestion.action) {
        suggestion.action();
      } else {
        setValue(suggestion.text);
        onSubmit?.(suggestion.text);
      }
      setIsOpen(false);
    }, [setValue, onSubmit]);
    React.useEffect(() => {
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
          return /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-muted-foreground" });
        case "trending":
          return /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-amber-500" });
        case "filter":
          return /* @__PURE__ */ jsx(Filter, { className: "h-4 w-4 text-blue-500" });
        default:
          return null;
      }
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("relative", className),
        children: [
          /* @__PURE__ */ jsxs("div", { className: cn(
            searchInputVariants({ size, variant }),
            "rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
            disabled && "opacity-50 cursor-not-allowed",
            variant === "filled" && "border-transparent",
            variant === "outlined" && "border-2",
            variant === "minimal" && "border-transparent bg-transparent"
          ), children: [
            /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
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
                className: "flex-1 bg-transparent outline-none ml-2 placeholder:text-muted-foreground",
                ...props
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              loading && /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
              showClear && currentValue && !disabled && /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: handleClear,
                  children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
                }
              ),
              showFilter && /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: onFilter,
                  disabled,
                  children: /* @__PURE__ */ jsx(Filter, { className: "h-3 w-3" })
                }
              )
            ] })
          ] }),
          isOpen && filteredSuggestions.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95", children: filteredSuggestions.map((suggestion, index) => /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "truncate", children: suggestion.text }),
                  suggestion.description && /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground truncate", children: suggestion.description })
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
export {
  SearchInput
};
//# sourceMappingURL=search-input.mjs.map