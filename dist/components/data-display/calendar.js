'use strict';

var React = require('react');
var lucideReact = require('lucide-react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens.MOTION || {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms"},
  easing: {
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    }
};
var motionSemantic = designTokens.tokens.MOTION || {
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
  semantic: {
    transition: motionSemantic.transition.default,
    interaction: motionSemantic.interaction.hover,
    feedback: motionSemantic.feedback.success,
    navigation: motionSemantic.navigation.page
  }
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
function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
function isSameDay(a, b) {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function addMonths(date, amount) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + amount);
  return d;
}
function getMonthGrid(month) {
  const firstOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const startDay = firstOfMonth.getDay();
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() - startDay);
  const days = [];
  for (let i = 0; i < 42; i += 1) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    days.push(d);
  }
  return days;
}
function getWeekdayLabels(locale) {
  const base = new Date(2024, 0, 7);
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d.toLocaleDateString(locale, { weekday: "short" });
  });
}
function Calendar({ className, selected, onSelect, disabled }) {
  const initialMonth = selected ?? /* @__PURE__ */ new Date();
  const [currentMonth, setCurrentMonth] = React__namespace.useState(
    startOfDay(initialMonth)
  );
  const today = React__namespace.useMemo(() => startOfDay(/* @__PURE__ */ new Date()), []);
  const days = React__namespace.useMemo(() => getMonthGrid(currentMonth), [currentMonth]);
  const weekdayLabels = React__namespace.useMemo(
    () => getWeekdayLabels("pt-BR"),
    []
  );
  const handlePrevMonth = React__namespace.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, -1));
  }, []);
  const handleNextMonth = React__namespace.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);
  const handleSelect = React__namespace.useCallback(
    (date) => {
      if (disabled?.(date)) return;
      if (onSelect) {
        if (selected && isSameDay(selected, date)) {
          onSelect(void 0);
        } else {
          onSelect(date);
        }
      }
    },
    [disabled, onSelect, selected]
  );
  const monthLabel = React__namespace.useMemo(
    () => currentMonth.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    }),
    [currentMonth]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] rounded-lg border border-border shadow-sm",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-[--cell-size] w-[--cell-size] p-0",
              onClick: handlePrevMonth,
              "aria-label": "M\xEAs anterior",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium capitalize", children: monthLabel }),
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "size-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-[--cell-size] w-[--cell-size] p-0",
              onClick: handleNextMonth,
              "aria-label": "Pr\xF3ximo m\xEAs",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-1 flex w-full", children: weekdayLabels.map((label) => /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "text-muted-foreground flex-1 select-none text-center text-[0.75rem] font-normal uppercase",
            children: label
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-7 gap-1", children: days.map((date) => {
          const isOutsideMonth = date.getMonth() !== currentMonth.getMonth() || date.getFullYear() !== currentMonth.getFullYear();
          const isSelected = selected ? isSameDay(selected, date) : false;
          const isToday = isSameDay(today, date);
          const isDisabled = disabled?.(date) ?? false;
          return /* @__PURE__ */ jsxRuntime.jsx(
            CalendarDayButton,
            {
              date,
              isOutside: isOutsideMonth,
              isSelected,
              isToday,
              disabled: isDisabled,
              onSelect: handleSelect
            },
            date.toISOString()
          );
        }) })
      ]
    }
  );
}
function CalendarDayButton({
  date,
  isOutside,
  isSelected,
  isToday,
  disabled,
  onSelect,
  className
}) {
  const handleClick = React__namespace.useCallback(() => {
    if (disabled) return;
    onSelect?.(date);
  }, [date, disabled, onSelect]);
  const baseClasses = cn(
    "flex aspect-square h-9 w-9 items-center justify-center rounded-md text-sm font-normal transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    isOutside && "text-muted-foreground/60",
    disabled && "text-muted-foreground opacity-50 cursor-not-allowed",
    isToday && "border border-dashed border-primary",
    isSelected && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
    !isSelected && !disabled && !isOutside && "hover:bg-accent hover:text-accent-foreground",
    !isSelected && isOutside && !disabled && "hover:bg-muted hover:text-foreground",
    className
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      onClick: handleClick,
      disabled,
      className: baseClasses,
      "aria-pressed": isSelected,
      children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs leading-none", children: date.getDate() })
    }
  );
}

exports.Calendar = Calendar;
exports.CalendarDayButton = CalendarDayButton;
//# sourceMappingURL=calendar.js.map
//# sourceMappingURL=calendar.js.map