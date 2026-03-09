import * as React2 from 'react';
import { cva } from 'class-variance-authority';
import Timer from 'lucide-react/dist/esm/icons/timer';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

// ../rainer-design-tokens/formats/tokens.json
var tokens_default = {
  primitives: {
    motion: {
      duration: {
        fast: "100ms",
        normal: "200ms",
        slow: "300ms"},
      easing: {
        easeOut: "cubic-bezier(0, 0, 0.2, 1)",
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      },
      delay: {
        }
    },
    zIndex: {
      base: 0,
      content: 100,
      overlay: 200,
      dropdown: 300,
      modal: 400,
      tooltip: 500,
      notification: 600,
      max: 9999
    }
  }};

// src/lib/tokens.ts
var tokens = tokens_default;
function cn(...inputs) {
  return twMerge(clsx(inputs));
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
tokens.semantics?.layoutClasses?.components ?? {};
tokens.semantics?.layoutClasses?.sections ?? {};
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
var timePickerVariants = cva(
  "flex items-center gap-2",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      },
      variant: {
        default: "",
        inline: "flex-row",
        stacked: "flex-col"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
function padNumber(num) {
  return num.toString().padStart(2, "0");
}
function timeToString(time, use12Hours = false, showSeconds = false) {
  let hours = time.hours;
  const minutes = time.minutes;
  const seconds = time.seconds || 0;
  let period = "";
  if (use12Hours) {
    period = time.period || (hours >= 12 ? "PM" : "AM");
    hours = hours % 12 || 12;
  }
  const timeStr = `${padNumber(hours)}:${padNumber(minutes)}`;
  const secondsStr = showSeconds ? `:${padNumber(seconds)}` : "";
  return `${timeStr}${secondsStr}${use12Hours ? ` ${period}` : ""}`;
}
var TimePicker = React2.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    value,
    onChange,
    placeholder = "Selecione o hor\xE1rio",
    use12Hours = false,
    showSeconds = false,
    disabled = false,
    minuteStep = 1,
    secondStep = 1,
    // minTime, // TODO: implementar validação de tempo mínimo
    // maxTime, // TODO: implementar validação de tempo máximo
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = React2.useState(false);
    const [hours, setHours] = React2.useState(value?.hours || 0);
    const [minutes, setMinutes] = React2.useState(value?.minutes || 0);
    const [seconds, setSeconds] = React2.useState(value?.seconds || 0);
    const [period, setPeriod] = React2.useState(value?.period || "AM");
    const containerRef = React2.useRef(null);
    React2.useEffect(() => {
      if (value) {
        setHours(value.hours);
        setMinutes(value.minutes);
        setSeconds(value.seconds || 0);
        if (use12Hours) {
          setPeriod(value.period || (value.hours >= 12 ? "PM" : "AM"));
        }
      }
    }, [value, use12Hours]);
    const handleHoursChange = React2.useCallback((newHours) => {
      if (newHours < 0) newHours = 0;
      if (newHours > 23) newHours = 23;
      setHours(newHours);
      const newTime = {
        hours: newHours,
        minutes,
        seconds: showSeconds ? seconds : void 0,
        period: use12Hours ? period : void 0
      };
      onChange?.(newTime);
    }, [minutes, seconds, period, use12Hours, showSeconds, onChange]);
    const handleMinutesChange = React2.useCallback((newMinutes) => {
      if (newMinutes < 0) newMinutes = 0;
      if (newMinutes > 59) newMinutes = 59;
      newMinutes = Math.round(newMinutes / minuteStep) * minuteStep;
      setMinutes(newMinutes);
      const newTime = {
        hours,
        minutes: newMinutes,
        seconds: showSeconds ? seconds : void 0,
        period: use12Hours ? period : void 0
      };
      onChange?.(newTime);
    }, [hours, seconds, period, use12Hours, showSeconds, minuteStep, onChange]);
    const handleSecondsChange = React2.useCallback((newSeconds) => {
      if (!showSeconds) return;
      if (newSeconds < 0) newSeconds = 0;
      if (newSeconds > 59) newSeconds = 59;
      newSeconds = Math.round(newSeconds / secondStep) * secondStep;
      setSeconds(newSeconds);
      const newTime = {
        hours,
        minutes,
        seconds: newSeconds,
        period: use12Hours ? period : void 0
      };
      onChange?.(newTime);
    }, [hours, minutes, period, use12Hours, secondStep, onChange]);
    const handlePeriodChange = React2.useCallback((newPeriod) => {
      setPeriod(newPeriod);
      let newHours = hours;
      if (newPeriod === "AM" && hours === 12) {
        newHours = 0;
      } else if (newPeriod === "PM" && hours < 12) {
        newHours = hours + 12;
      }
      setHours(newHours);
      const newTime = {
        hours: newHours,
        minutes,
        seconds: showSeconds ? seconds : void 0,
        period: newPeriod
      };
      onChange?.(newTime);
    }, [hours, minutes, seconds, showSeconds, onChange]);
    React2.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const displayValue = value ? timeToString(value, use12Hours, showSeconds) : "";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: ref || containerRef,
        className: cn("relative", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: cn(
                "w-full justify-start text-left font-normal",
                !value && "text-muted-foreground",
                timePickerVariants({ size, variant })
              ),
              onClick: () => setIsOpen(!isOpen),
              disabled,
              children: [
                /* @__PURE__ */ jsx(Timer, { className: "mr-2 h-4 w-4" }),
                displayValue || placeholder
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Hora" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  max: use12Hours ? 12 : 23,
                  value: hours,
                  onChange: (e) => handleHoursChange(parseInt(e.target.value) || 0),
                  className: cn(
                    "w-16 h-10 text-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  ),
                  disabled
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold mt-4", children: ":" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Min" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  min: 0,
                  max: 59,
                  value: minutes,
                  onChange: (e) => handleMinutesChange(parseInt(e.target.value) || 0),
                  className: cn(
                    "w-16 h-10 text-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  ),
                  disabled
                }
              )
            ] }),
            showSeconds && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold mt-4", children: ":" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Seg" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "number",
                    min: 0,
                    max: 59,
                    value: seconds,
                    onChange: (e) => handleSecondsChange(parseInt(e.target.value) || 0),
                    className: cn(
                      "w-16 h-10 text-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-50"
                    ),
                    disabled
                  }
                )
              ] })
            ] }),
            use12Hours && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "\xA0" }),
              /* @__PURE__ */ jsxs("div", { className: "flex rounded-md border border-input", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    variant: period === "AM" ? "default" : "ghost",
                    size: "sm",
                    className: "h-10 rounded-r-none border-r",
                    onClick: () => handlePeriodChange("AM"),
                    disabled,
                    children: "AM"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    variant: period === "PM" ? "default" : "ghost",
                    size: "sm",
                    className: "h-10 rounded-l-none",
                    onClick: () => handlePeriodChange("PM"),
                    disabled,
                    children: "PM"
                  }
                )
              ] })
            ] })
          ] }) })
        ]
      }
    );
  }
);
TimePicker.displayName = "TimePicker";

export { TimePicker };
//# sourceMappingURL=time-picker.mjs.map
//# sourceMappingURL=time-picker.mjs.map