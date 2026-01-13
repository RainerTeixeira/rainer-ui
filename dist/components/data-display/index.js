'use strict';

var React2 = require('react');
var lucideReact = require('lucide-react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var useEmblaCarousel = require('embla-carousel-react');

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
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);

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
  const [currentMonth, setCurrentMonth] = React2__namespace.useState(
    startOfDay(initialMonth)
  );
  const today = React2__namespace.useMemo(() => startOfDay(/* @__PURE__ */ new Date()), []);
  const days = React2__namespace.useMemo(() => getMonthGrid(currentMonth), [currentMonth]);
  const weekdayLabels = React2__namespace.useMemo(
    () => getWeekdayLabels("pt-BR"),
    []
  );
  const handlePrevMonth = React2__namespace.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, -1));
  }, []);
  const handleNextMonth = React2__namespace.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);
  const handleSelect = React2__namespace.useCallback(
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
  const monthLabel = React2__namespace.useMemo(
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
  const handleClick = React2__namespace.useCallback(() => {
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
var CarouselContext = React2__namespace.createContext(null);
function useCarousel() {
  const context = React2__namespace.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React2__namespace.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel__default.default(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React2__namespace.useState(false);
    const [canScrollNext, setCanScrollNext] = React2__namespace.useState(false);
    const onSelect = React2__namespace.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React2__namespace.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React2__namespace.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React2__namespace.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React2__namespace.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React2__namespace.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    const contextValue = React2__namespace.useMemo(() => ({
      carouselRef,
      api,
      opts,
      orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext
    }), [api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext, carouselRef]);
    return /* @__PURE__ */ jsxRuntime.jsx(CarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        onKeyDownCapture: handleKeyDown,
        className: cn("relative", className),
        "aria-label": "Carousel",
        "aria-roledescription": "carousel",
        ...props,
        children
      }
    ) });
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React2__namespace.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React2__namespace.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "fieldset",
    {
      ref,
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React2__namespace.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React2__namespace.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
var chipVariants = classVarianceAuthority.cva(
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
var Chip = React2__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          chipVariants({ variant, size, removable }),
          className
        ),
        ...props,
        children: [
          children,
          removable && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              onClick: handleRemove,
              className: cn(
                "inline-flex items-center justify-center rounded-full p-0.5",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50"
              ),
              "aria-label": removeAriaLabel,
              children: removeIcon || /* @__PURE__ */ jsxRuntime.jsx(
                lucideReact.X,
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
var spacingClasses = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3"
};
var ChipGroup = React2__namespace.forwardRef(
  ({
    className,
    spacing = "md",
    wrap = true,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
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
function useMasonryLayout(containerRef, columns, gap) {
  const [positions, setPositions] = React2__namespace.useState([]);
  React2__namespace.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const columnWidth = (containerWidth - gap * (columns - 1)) / columns;
    const columnHeights = new Array(columns).fill(0);
    const newPositions = [];
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const height = child.offsetHeight;
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      const top = columnHeights[shortestColumnIndex];
      const left = shortestColumnIndex * (columnWidth + gap);
      newPositions.push({ top, left });
      columnHeights[shortestColumnIndex] += height + gap;
    }
    setPositions(newPositions);
  }, [columns, gap]);
  return positions;
}
var Masonry = React2__namespace.forwardRef(
  ({
    className,
    columns = { sm: 1, md: 2, lg: 3, xl: 4 },
    gap = 16,
    children,
    ...props
  }, ref) => {
    const innerRef = React2__namespace.useRef(null);
    const [resolvedColumns, setResolvedColumns] = React2__namespace.useState(4);
    React2__namespace.useEffect(() => {
      const handleResize = () => {
        if (typeof columns === "number") {
          setResolvedColumns(columns);
        } else {
          const width = window.innerWidth;
          if (width >= 1280 && columns.xl) setResolvedColumns(columns.xl);
          else if (width >= 1024 && columns.lg) setResolvedColumns(columns.lg);
          else if (width >= 768 && columns.md) setResolvedColumns(columns.md);
          else if (columns.sm) setResolvedColumns(columns.sm);
          else setResolvedColumns(1);
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [columns]);
    const gapValue = typeof gap === "number" ? gap : parseInt(gap) || 16;
    const positions = useMasonryLayout(innerRef, resolvedColumns, gapValue);
    const childrenWithPositions = React2__namespace.Children.toArray(children).map((child, index) => {
      if (!React2__namespace.isValidElement(child)) return child;
      const position = positions[index];
      if (!position) return child;
      const containerWidth = innerRef.current?.offsetWidth || 0;
      const columnWidth = (containerWidth - gapValue * (resolvedColumns - 1)) / resolvedColumns;
      return React2__namespace.cloneElement(child, {
        style: {
          ...child.props.style,
          position: "absolute",
          top: position.top,
          left: position.left,
          width: columnWidth,
          transition: "all 0.3s ease-in-out"
        }
      });
    });
    const containerHeight = positions.reduce((max, pos, index) => {
      const child = innerRef.current?.children[index];
      if (!child) return max;
      return Math.max(max, pos.top + child.offsetHeight);
    }, 0);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("relative", className),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            ref: innerRef,
            className: "relative w-full",
            style: { height: containerHeight },
            children: childrenWithPositions
          }
        )
      }
    );
  }
);
Masonry.displayName = "Masonry";
var MasonryItem = React2__namespace.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("overflow-hidden", className),
        ...props,
        children
      }
    );
  }
);
MasonryItem.displayName = "MasonryItem";
var defaultIcons = {
  completed: lucideReact.Check,
  pending: lucideReact.Circle,
  error: lucideReact.X,
  warning: lucideReact.AlertTriangle,
  default: "div"
};
var timelineDotVariants = classVarianceAuthority.cva(
  "relative flex items-center justify-center rounded-full border-2 bg-background",
  {
    variants: {
      status: {
        default: "border-border",
        active: "border-primary bg-primary",
        completed: "border-emerald-500 bg-emerald-500",
        pending: "border-amber-500 bg-amber-500",
        error: "border-red-500 bg-red-500",
        warning: "border-orange-500 bg-orange-500"
      },
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      status: "default",
      size: "md"
    }
  }
);
var TimelineItem = React2__namespace.forwardRef(
  ({
    className,
    status = "default",
    icon,
    iconType,
    dotSize = "md",
    children,
    date,
    title,
    description,
    ...props
  }, ref) => {
    let IconComponent = icon;
    if (!IconComponent && iconType) {
      IconComponent = React2__namespace.createElement(defaultIcons[iconType], {
        className: "h-2.5 w-2.5 text-primary-foreground"
      });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("relative flex gap-4 pb-8 last:pb-0", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute left-[calc(var(--dot-size)/2)] top-8 h-full w-0.5 bg-border last:hidden",
              style: { "--dot-size": dotSize === "sm" ? "12px" : dotSize === "lg" ? "20px" : "16px" }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(timelineDotVariants({ status, size: dotSize })), children: IconComponent }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
            (date || title) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mb-1 flex items-baseline gap-2", children: [
              date && /* @__PURE__ */ jsxRuntime.jsx("time", { className: "text-xs text-muted-foreground whitespace-nowrap", children: date }),
              title && /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-sm font-medium text-foreground", children: title })
            ] }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: description }),
            children
          ] })
        ]
      }
    );
  }
);
TimelineItem.displayName = "TimelineItem";
var Timeline = React2__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("space-y-0", className),
        ...props,
        children: React2__namespace.Children.map(children, (child) => {
          if (!React2__namespace.isValidElement(child)) return child;
          return React2__namespace.cloneElement(child, {
            ...child.props,
            className: cn(child.props.className)
          });
        })
      }
    );
  }
);
Timeline.displayName = "Timeline";
var TimelineSeparator = React2__namespace.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "relative my-4 py-2",
          "before:absolute before:left-[calc(var(--dot-size)/2)] before:top-0 before:h-full before:w-0.5 before:bg-border",
          className
        ),
        style: { "--dot-size": "16px" },
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 rounded-full bg-background border-2 border-border" }),
          children && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-muted-foreground", children })
        ] })
      }
    );
  }
);
TimelineSeparator.displayName = "TimelineSeparator";
var ratingVariants = classVarianceAuthority.cva(
  "flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "gap-0.5",
        md: "gap-1",
        lg: "gap-1.5"
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col"
      }
    },
    defaultVariants: {
      size: "md",
      orientation: "horizontal"
    }
  }
);
var starSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6"
};
var Rating = React2__namespace.forwardRef(
  ({
    className,
    value = 0,
    max = 5,
    allowHalf = false,
    readOnly = false,
    showValue = false,
    onChange,
    onHover,
    size = "md",
    orientation = "horizontal",
    fillIcon,
    emptyIcon,
    halfIcon,
    color,
    ...props
  }, ref) => {
    const [hoverValue, setHoverValue] = React2__namespace.useState(0);
    const [isHovering, setIsHovering] = React2__namespace.useState(false);
    const displayValue = isHovering ? hoverValue : value;
    const formattedValue = allowHalf ? displayValue.toFixed(1) : Math.round(displayValue).toString();
    const handleStarClick = (starValue) => {
      if (readOnly) return;
      onChange?.(starValue);
    };
    const handleMouseMove = (event, starIndex) => {
      if (readOnly) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const { width } = rect;
      const { offsetX } = event.nativeEvent;
      let newHoverValue = starIndex + 1;
      if (allowHalf) {
        const isHalf = offsetX < width / 2;
        if (isHalf) {
          newHoverValue = starIndex + 0.5;
        }
      }
      setHoverValue(newHoverValue);
      onHover?.(newHoverValue);
    };
    const handleMouseEnter = () => {
      if (!readOnly) {
        setIsHovering(true);
      }
    };
    const handleMouseLeave = () => {
      if (!readOnly) {
        setIsHovering(false);
        setHoverValue(0);
      }
    };
    const renderStar = (starIndex) => {
      const starValue = starIndex + 1;
      const isFilled = starValue <= displayValue;
      const isHalf = allowHalf && starValue - 0.5 === displayValue;
      let icon = emptyIcon || /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Star, { className: starSizeClasses[size] });
      if (isHalf) {
        icon = halfIcon || /* @__PURE__ */ jsxRuntime.jsx(lucideReact.StarHalf, { className: starSizeClasses[size] });
      } else if (isFilled) {
        icon = fillIcon || /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Star, { className: starSizeClasses[size], fill: "currentColor" });
      }
      const iconStyle = color && (isFilled || isHalf) ? { color } : void 0;
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "cursor-pointer transition-all duration-[var(--motion-duration-fast)]",
            "hover:scale-110 active:scale-95",
            readOnly && "cursor-default",
            isFilled || isHalf ? "text-primary" : "text-muted-foreground/30"
          ),
          onMouseMove: (e) => handleMouseMove(e, starIndex),
          onClick: () => handleStarClick(isHalf ? starIndex + 0.5 : starValue),
          style: iconStyle,
          children: icon
        },
        starIndex
      );
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(ratingVariants({ size, orientation }), className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center", children: [
          Array.from({ length: max }, (_, index) => renderStar(index)),
          showValue && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: cn(
            "ml-2 text-sm font-medium",
            orientation === "vertical" && "ml-0 mt-2"
          ), children: [
            formattedValue,
            "/",
            max
          ] })
        ] })
      }
    );
  }
);
Rating.displayName = "Rating";
var progressHeightClasses = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
};
var RatingProgress = React2__namespace.forwardRef(
  ({
    className,
    value,
    color,
    height = "md",
    showPercentage = false,
    ...props
  }, ref) => {
    const percentage = Math.min(100, Math.max(0, value));
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("w-full", className), ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref,
          className: cn(
            "w-full bg-muted rounded-full overflow-hidden",
            progressHeightClasses[height]
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "h-full bg-primary transition-all duration-[var(--motion-duration-normal)] ease-[var(--motion-easing-ease-out)]",
                color && "opacity-80"
              ),
              style: {
                width: `${percentage}%`,
                backgroundColor: color
              }
            }
          )
        }
      ),
      showPercentage && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "mt-1 text-xs text-muted-foreground", children: [
        percentage.toFixed(0),
        "%"
      ] })
    ] });
  }
);
RatingProgress.displayName = "RatingProgress";
var RatingSummary = React2__namespace.forwardRef(
  ({
    className,
    average,
    total,
    distribution,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("space-y-2", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-3xl font-bold", children: average.toFixed(1) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(Rating, { value: average, readOnly: true, size: "sm" }),
              /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                total,
                " ",
                total === 1 ? "avalia\xE7\xE3o" : "avalia\xE7\xF5es"
              ] })
            ] })
          ] }),
          distribution && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: distribution.map(({ rating, count }) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground w-3", children: rating }),
            /* @__PURE__ */ jsxRuntime.jsx(
              RatingProgress,
              {
                value: total > 0 ? count / total * 100 : 0,
                height: "sm",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground w-8 text-right", children: count })
          ] }, rating)) })
        ]
      }
    );
  }
);
RatingSummary.displayName = "RatingSummary";

exports.Calendar = Calendar;
exports.CalendarDayButton = CalendarDayButton;
exports.Carousel = Carousel;
exports.CarouselContent = CarouselContent;
exports.CarouselItem = CarouselItem;
exports.CarouselNext = CarouselNext;
exports.CarouselPrevious = CarouselPrevious;
exports.Chip = Chip;
exports.ChipGroup = ChipGroup;
exports.Masonry = Masonry;
exports.MasonryItem = MasonryItem;
exports.Rating = Rating;
exports.RatingProgress = RatingProgress;
exports.RatingSummary = RatingSummary;
exports.Timeline = Timeline;
exports.TimelineItem = TimelineItem;
exports.TimelineSeparator = TimelineSeparator;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map