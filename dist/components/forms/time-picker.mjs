import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Timer } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.primitives.motion;
var motionSemantic = tokens.semantics.motion || {
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
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
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
var TimePicker = React.forwardRef(
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
    minTime,
    maxTime,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hours, setHours] = React.useState(value?.hours || 0);
    const [minutes, setMinutes] = React.useState(value?.minutes || 0);
    const [seconds, setSeconds] = React.useState(value?.seconds || 0);
    const [period, setPeriod] = React.useState(value?.period || "AM");
    const containerRef = React.useRef(null);
    React.useEffect(() => {
      if (value) {
        setHours(value.hours);
        setMinutes(value.minutes);
        setSeconds(value.seconds || 0);
        if (use12Hours) {
          setPeriod(value.period || (value.hours >= 12 ? "PM" : "AM"));
        }
      }
    }, [value, use12Hours]);
    const handleHoursChange = React.useCallback((newHours) => {
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
    const handleMinutesChange = React.useCallback((newMinutes) => {
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
    const handleSecondsChange = React.useCallback((newSeconds) => {
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
    const handlePeriodChange = React.useCallback((newPeriod) => {
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
    React.useEffect(() => {
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
        ref: containerRef,
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