'use strict';

var React2 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var reactDayPicker = require('react-day-picker');
var Calendar = require('lucide-react/dist/esm/icons/calendar');
var ChevronDown = require('lucide-react/dist/esm/icons/chevron-down');
var reactSlot = require('@radix-ui/react-slot');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var tokensData = require('@rainersoft/design-tokens/formats/tokens.json');
require('@rainersoft/design-tokens/formats/css-vars.css');
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

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var Calendar__default = /*#__PURE__*/_interopDefault(Calendar);
var ChevronDown__default = /*#__PURE__*/_interopDefault(ChevronDown);
var tokensData__default = /*#__PURE__*/_interopDefault(tokensData);

var tokens = tokensData__default.default;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var primitiveZIndex = tokens.primitives?.zIndex ?? {};
var getZIndexValue = (key, fallback) => {
  const value = primitiveZIndex?.[key];
  return value !== void 0 ? String(value) : String(fallback);
};
({
  base: getZIndexValue("base", 0),
  content: getZIndexValue("content", 100),
  overlay: getZIndexValue("overlay", 200),
  dropdown: getZIndexValue("dropdown", 300),
  modal: getZIndexValue("modal", 400),
  tooltip: getZIndexValue("tooltip", 500),
  notification: getZIndexValue("notification", 600),
  max: getZIndexValue("max", 9999)
});
var motionPrimitives = tokens.primitives?.motion ?? {};
var motionTokens = motionPrimitives;
motionTokens?.delay ?? {};
var animationDurations = motionTokens?.duration ?? {};
var animationEasings = motionTokens?.easing ?? {};
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
var buttonVariants = classVarianceAuthority.cva(
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
var ButtonComponent = React2__namespace.forwardRef(
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
      const child = React2__namespace.Children.only(children);
      return /* @__PURE__ */ jsxRuntime.jsx(
        reactSlot.Slot,
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
          children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex items-center gap-2", children: [
            loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            child
          ] }) : child
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
          loading && (loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" })),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var datePickerVariants = classVarianceAuthority.cva(
  "flex gap-2",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
function formatDate(date, format) {
  if (!date) return "";
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  if (format === "MM/DD/YYYY") {
    return `${month}/${day}/${year}`;
  } else if (format === "DD/MM/YYYY") {
    return `${day}/${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
}
function formatDateRange(range) {
  if (!range.from) return "";
  if (!range.to) return formatDate(range.from);
  return `${formatDate(range.from)} - ${formatDate(range.to)}`;
}
function formatMultipleDates(dates) {
  if (dates.length === 0) return "";
  if (dates.length === 1) return formatDate(dates[0]);
  if (dates.length === 2) return `${formatDate(dates[0])} e ${formatDate(dates[1])}`;
  return `${formatDate(dates[0])} (+${dates.length - 1})`;
}
var DatePicker = React2__namespace.forwardRef(
  ({
    className,
    size = "md",
    value,
    onChange,
    placeholder = "Selecione uma data",
    multiple = false,
    range = false,
    disabledDates,
    minDate,
    maxDate,
    fromYear,
    toYear,
    format,
    showWeekNumber = false,
    fixedWeeks = false,
    disabled = false,
    ...props
  }, _ref) => {
    const [isOpen, setIsOpen] = React2__namespace.useState(false);
    const [selectedDates, setSelectedDates] = React2__namespace.useState([]);
    const [inputValue, setInputValue] = React2__namespace.useState("");
    const containerRef = React2__namespace.useRef(null);
    const buttonRef = React2__namespace.useRef(null);
    React2__namespace.useEffect(() => {
      if (!value) {
        setInputValue("");
        setSelectedDates([]);
        return;
      }
      if (range && value && "from" in value) {
        const rangeValue = value;
        const dates = rangeValue.from ? [rangeValue.from] : [];
        if (rangeValue.to) dates.push(rangeValue.to);
        setSelectedDates(dates);
        setInputValue(formatDateRange(rangeValue));
      } else if (multiple && Array.isArray(value)) {
        setSelectedDates(value);
        setInputValue(formatMultipleDates(value));
      } else if (value instanceof Date) {
        setSelectedDates([value]);
        setInputValue(formatDate(value, format));
      }
    }, [value, range, multiple, format]);
    const handleSingleSelect = React2__namespace.useCallback((day) => {
      onChange?.(day);
    }, [onChange]);
    const handleMultipleSelect = React2__namespace.useCallback((dates) => {
      onChange?.(dates);
    }, [onChange]);
    const handleRangeSelect = React2__namespace.useCallback((range2) => {
      onChange?.(range2);
    }, [onChange]);
    React2__namespace.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const dayPickerClassNames = {
      months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
      month: "space-y-4",
      caption: "flex justify-center pt-1 relative items-center",
      caption_label: "text-sm font-medium",
      nav: "space-x-1 flex items-center",
      nav_button: cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-7 w-7",
        "absolute"
      ),
      nav_button_previous: "left-1",
      nav_button_next: "right-1",
      table: "w-full border-collapse space-y-1",
      head_row: "flex",
      head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
      day: cn(
        "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md"
      ),
      day_range_end: "day-range-end",
      day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "bg-accent text-accent-foreground",
      day_outside: "text-muted-foreground opacity-50",
      day_disabled: "text-muted-foreground opacity-50",
      day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "invisible"
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref: _ref || containerRef,
        className: cn("relative", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              ref: buttonRef,
              variant: "outline",
              className: cn(
                "w-full justify-start text-left font-normal",
                !value && "text-muted-foreground",
                datePickerVariants({ size })
              ),
              onClick: () => setIsOpen(!isOpen),
              disabled,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(Calendar__default.default, { className: "mr-2 h-4 w-4" }),
                inputValue || placeholder,
                /* @__PURE__ */ jsxRuntime.jsx(ChevronDown__default.default, { className: "ml-auto h-4 w-4 opacity-50" })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-0 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95", children: range ? /* @__PURE__ */ jsxRuntime.jsx(
            reactDayPicker.DayPicker,
            {
              mode: "range",
              selected: value,
              onSelect: handleRangeSelect,
              disabled: disabledDates,
              fromDate: minDate,
              toDate: maxDate,
              fromYear,
              toYear,
              showWeekNumber,
              fixedWeeks,
              classNames: dayPickerClassNames,
              initialFocus: true
            }
          ) : multiple ? /* @__PURE__ */ jsxRuntime.jsx(
            reactDayPicker.DayPicker,
            {
              mode: "multiple",
              selected: selectedDates,
              onSelect: handleMultipleSelect,
              disabled: disabledDates,
              fromDate: minDate,
              toDate: maxDate,
              fromYear,
              toYear,
              showWeekNumber,
              fixedWeeks,
              classNames: dayPickerClassNames,
              initialFocus: true
            }
          ) : /* @__PURE__ */ jsxRuntime.jsx(
            reactDayPicker.DayPicker,
            {
              mode: "single",
              selected: value instanceof Date ? value : void 0,
              onSelect: handleSingleSelect,
              disabled: disabledDates,
              fromDate: minDate,
              toDate: maxDate,
              fromYear,
              toYear,
              showWeekNumber,
              fixedWeeks,
              classNames: dayPickerClassNames,
              initialFocus: true
            }
          ) })
        ]
      }
    );
  }
);
DatePicker.displayName = "DatePicker";

exports.DatePicker = DatePicker;
//# sourceMappingURL=date-picker.js.map
//# sourceMappingURL=date-picker.js.map