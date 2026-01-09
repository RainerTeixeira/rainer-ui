"use client"
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Timer } from "lucide-react";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
const timePickerVariants = cva(
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
const TimePicker = React.forwardRef(
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
export {
  TimePicker
};
//# sourceMappingURL=time-picker.mjs.map