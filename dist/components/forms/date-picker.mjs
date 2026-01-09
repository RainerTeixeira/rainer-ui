"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import {
  Calendar as CalendarIcon,
  ChevronDown
} from "lucide-react";
import * as React from "react";
import { cva } from "class-variance-authority";
import { DayPicker } from "react-day-picker";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
const datePickerVariants = cva(
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
const DatePicker = React.forwardRef(
  ({
    className,
    size = "md",
    value,
    onChange,
    placeholder = "Selecione uma data",
    multiple = false,
    range = false,
    disabled,
    minDate,
    maxDate,
    fromYear,
    toYear,
    format,
    showWeekNumber = false,
    fixedWeeks = false,
    locale,
    ...props
  }, _ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedDates, setSelectedDates] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");
    const containerRef = React.useRef(null);
    const buttonRef = React.useRef(null);
    React.useEffect(() => {
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
    const handleSelect = React.useCallback((dates) => {
      if (!dates) {
        onChange?.(void 0);
        return;
      }
      if (range) {
        const rangeValue = dates.length > 0 ? { from: dates[0], to: dates[1] } : void 0;
        onChange?.(rangeValue);
      } else if (multiple) {
        onChange?.(dates);
      } else {
        onChange?.(dates[0]);
      }
    }, [range, multiple, onChange]);
    React.useEffect(() => {
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
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: _ref || containerRef,
        className: cn("relative", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                inputValue || placeholder,
                /* @__PURE__ */ jsx(ChevronDown, { className: "ml-auto h-4 w-4 opacity-50" })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-0 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95", children: /* @__PURE__ */ jsx(
            DayPicker,
            {
              mode: range ? "range" : multiple ? "multiple" : "single",
              selected: selectedDates,
              onSelect: handleSelect,
              disabled,
              fromDate: minDate,
              toDate: maxDate,
              fromYear,
              toYear,
              showWeekNumber,
              fixedWeeks,
              locale,
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
export {
  DatePicker
};
//# sourceMappingURL=date-picker.mjs.map