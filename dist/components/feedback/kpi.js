'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
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
var kpiVariants = classVarianceAuthority.cva(
  "rounded-lg border bg-card p-6 shadow-sm transition-all duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "border-border hover:shadow-md",
        elevated: "border-border shadow-md hover:shadow-lg",
        outlined: "border-2 border-border hover:border-primary",
        glass: "glass border-border hover:glass-hover"
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var trendVariants = classVarianceAuthority.cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
  {
    variants: {
      trend: {
        up: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
        down: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
        neutral: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
      }
    }
  }
);
function formatValue(value, format, currency, decimals = 0) {
  if (format === "custom") return value.toString();
  const numValue = typeof value === "number" ? value : parseFloat(value.toString());
  if (isNaN(numValue)) return value.toString();
  const formatted = numValue.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  switch (format) {
    case "currency":
      return `${currency || "R$"} ${formatted}`;
    case "percentage":
      return `${formatted}%`;
    default:
      return formatted;
  }
}
var KPI = React__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    title,
    value,
    description,
    trend,
    trendValue,
    icon,
    iconColor,
    loading = false,
    format = "number",
    currency,
    decimals = 0,
    ...props
  }, ref) => {
    const TrendIcon = trend === "up" ? lucideReact.TrendingUp : trend === "down" ? lucideReact.TrendingDown : lucideReact.Minus;
    const ArrowIcon = trend === "up" ? lucideReact.ArrowUp : trend === "down" ? lucideReact.ArrowDown : null;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(kpiVariants({ variant, size }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: title }),
              description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground/70", children: description })
            ] }),
            icon && /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "rounded-lg p-2",
                  iconColor === "primary" && "bg-primary/10 text-primary",
                  iconColor === "success" && "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
                  iconColor === "warning" && "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                  iconColor === "error" && "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                  !iconColor && "text-muted-foreground"
                ),
                children: icon
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-4", children: loading ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 w-24 bg-muted rounded animate-pulse" }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-2xl font-semibold text-foreground", children: formatValue(value, format, currency, decimals) }),
            trend && trendValue && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(trendVariants({ trend })), children: [
              ArrowIcon && /* @__PURE__ */ jsxRuntime.jsx(ArrowIcon, { className: "h-3 w-3" }),
              trendValue
            ] })
          ] }) }),
          trend && !trendValue && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
            "mt-3 flex items-center gap-1 text-xs",
            trend === "up" && "text-emerald-600 dark:text-emerald-400",
            trend === "down" && "text-red-600 dark:text-red-400",
            trend === "neutral" && "text-muted-foreground"
          ), children: [
            /* @__PURE__ */ jsxRuntime.jsx(TrendIcon, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: trend === "up" ? "Aumentando" : trend === "down" ? "Diminuindo" : "Est\xE1vel" })
          ] })
        ]
      }
    );
  }
);
KPI.displayName = "KPI";
var gridColsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
};
var KPIGrid = React__namespace.forwardRef(
  ({
    className,
    cols = 4,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "grid gap-4",
          gridColsClasses[cols],
          className
        ),
        ...props,
        children
      }
    );
  }
);
KPIGrid.displayName = "KPIGrid";
var KPIChart = React__namespace.forwardRef(
  ({
    className,
    chart,
    chartPosition = "bottom",
    children,
    ...props
  }, ref) => {
    const isRight = chartPosition === "right";
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          kpiVariants({ variant: props.variant, size: props.size }),
          isRight && "flex flex-row items-center justify-between",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(isRight && "flex-1"), children: /* @__PURE__ */ jsxRuntime.jsx(KPI, { ...props }) }),
          chart && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
            "mt-4",
            isRight && "mt-0 ml-4 flex-1 max-w-[200px]"
          ), children: chart })
        ]
      }
    );
  }
);
KPIChart.displayName = "KPIChart";

exports.KPI = KPI;
exports.KPIChart = KPIChart;
exports.KPIGrid = KPIGrid;
//# sourceMappingURL=kpi.js.map
//# sourceMappingURL=kpi.js.map