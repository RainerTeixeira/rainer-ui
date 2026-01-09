"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
import { Clock } from "lucide-react";
const formatTime = (time, unit) => {
  switch (unit) {
    case "hours":
      return (time / 60).toFixed(1);
    case "seconds":
      return (time * 60).toString();
    default:
      return time.toString();
  }
};
const getUnitText = (unit, time) => {
  const timeValue = unit === "hours" ? time / 60 : time;
  if (unit === "hours") {
    return timeValue <= 1 ? "hora" : "horas";
  }
  if (unit === "minutes") {
    return timeValue <= 1 ? "minuto" : "minutos";
  }
  if (unit === "seconds") {
    return timeValue <= 1 ? "segundo" : "segundos";
  }
  return timeValue <= 1 ? "min" : "min";
};
const getColorClasses = (color) => {
  const colorMap = {
    muted: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    accent: "text-accent-foreground"
  };
  return colorMap[color] || "text-muted-foreground";
};
const getSizeClasses = (size) => {
  const sizeMap = {
    sm: "text-xs",
    default: "text-sm",
    lg: "text-base"
  };
  return sizeMap[size] || "text-sm";
};
function ReadingTime({
  readTime,
  unit = "min",
  text,
  className,
  showIcon = true,
  icon,
  size = "default",
  color = "muted"
}) {
  if (!readTime) {
    return null;
  }
  const formattedTime = formatTime(readTime, unit);
  const unitText = getUnitText(unit, readTime);
  const defaultText = text || `${formattedTime} ${unitText}`;
  const colorClasses = getColorClasses(color);
  const sizeClasses = getSizeClasses(size);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-1.5 transition-colors",
        colorClasses,
        sizeClasses,
        className
      ),
      role: "timer",
      "aria-label": `Tempo estimado: ${formattedTime} ${unitText}`,
      children: [
        showIcon && /* @__PURE__ */ jsx("span", { className: "flex-shrink-0", "aria-hidden": "true", children: icon || /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: defaultText })
      ]
    }
  );
}
export {
  ReadingTime
};
//# sourceMappingURL=reading-time.mjs.map