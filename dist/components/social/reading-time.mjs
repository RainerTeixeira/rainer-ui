import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { Clock } from 'lucide-react';
import { jsxs, jsx } from 'react/jsx-runtime';

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
var formatTime = (time, unit) => {
  switch (unit) {
    case "hours":
      return (time / 60).toFixed(1);
    case "seconds":
      return (time * 60).toString();
    default:
      return time.toString();
  }
};
var getUnitText = (unit, time) => {
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
var getColorClasses = (color) => {
  const colorMap = {
    muted: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    accent: "text-accent-foreground"
  };
  return colorMap[color] || "text-muted-foreground";
};
var getSizeClasses = (size) => {
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

export { ReadingTime };
//# sourceMappingURL=reading-time.mjs.map
//# sourceMappingURL=reading-time.mjs.map