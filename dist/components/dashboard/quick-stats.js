'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var framerMotion = require('framer-motion');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var Eye = require('lucide-react/dist/esm/icons/eye');
var FileText = require('lucide-react/dist/esm/icons/file-text');
var Heart = require('lucide-react/dist/esm/icons/heart');
var MessageSquare = require('lucide-react/dist/esm/icons/message-square');
var TrendingDown = require('lucide-react/dist/esm/icons/trending-down');
var TrendingUp = require('lucide-react/dist/esm/icons/trending-up');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Eye__default = /*#__PURE__*/_interopDefault(Eye);
var FileText__default = /*#__PURE__*/_interopDefault(FileText);
var Heart__default = /*#__PURE__*/_interopDefault(Heart);
var MessageSquare__default = /*#__PURE__*/_interopDefault(MessageSquare);
var TrendingDown__default = /*#__PURE__*/_interopDefault(TrendingDown);
var TrendingUp__default = /*#__PURE__*/_interopDefault(TrendingUp);

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

// src/lib/constants.ts
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out"}};
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM_RIGHT: "to-br"};
var Card = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "text-left bg-card/60 dark:bg-black/50",
      "backdrop-blur-xl",
      "rounded-2xl",
      "p-4 xs:p-5 sm:p-6 md:p-8",
      "border border-border/50 dark:border-cyan-400/20",
      "hover:border-primary/40 dark:hover:border-cyan-400/50",
      "hover:bg-card/80 dark:hover:bg-black/70",
      "hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-cyan-500/20",
      "h-full flex flex-col group",
      "relative overflow-hidden",
      `before:absolute before:inset-0 before:${GRADIENT_DIRECTIONS.TO_BOTTOM_RIGHT}`,
      "before:from-primary/0 before:via-primary/0 before:to-primary/0",
      "hover:before:from-primary/5 hover:before:via-transparent hover:before:to-primary/5",
      "dark:hover:before:from-cyan-400/5 dark:hover:before:via-transparent dark:hover:before:to-purple-400/5",
      "before:transition-all before:duration-500 before:ease-in-out before:pointer-events-none",
      MOTION.TRANSITION.DEFAULT,
      className
    ),
    ...props
  }
));
HighlightCard.displayName = "HighlightCard";
var DEFAULT_STAGGER_DELAY = 0.1;
var CARD_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 30
  }
};
var DEFAULT_STATS = [
  {
    label: "Total de Posts",
    value: 42,
    change: 12.5,
    icon: /* @__PURE__ */ jsxRuntime.jsx(FileText__default.default, { className: "w-5 h-5", "aria-hidden": "true" }),
    color: "from-cyan-500 to-blue-500",
    description: "Artigos publicados no blog"
  },
  {
    label: "Visualiza\xE7\xF5es",
    value: "2.4K",
    change: 8.3,
    icon: /* @__PURE__ */ jsxRuntime.jsx(Eye__default.default, { className: "w-5 h-5", "aria-hidden": "true" }),
    color: "from-purple-500 to-pink-500",
    description: "Visualiza\xE7\xF5es totais"
  },
  {
    label: "Curtidas",
    value: 1.2,
    change: -3.2,
    icon: /* @__PURE__ */ jsxRuntime.jsx(Heart__default.default, { className: "w-5 h-5", "aria-hidden": "true" }),
    color: "from-orange-500 to-red-500",
    description: "Curtidas recebidas"
  },
  {
    label: "Coment\xE1rios",
    value: 89,
    change: 15.7,
    icon: /* @__PURE__ */ jsxRuntime.jsx(MessageSquare__default.default, { className: "w-5 h-5", "aria-hidden": "true" }),
    color: "from-green-500 to-emerald-500",
    description: "Coment\xE1rios ativos"
  }
];
function QuickStatsComponent({
  stats = [...DEFAULT_STATS],
  animationDelay = DEFAULT_STAGGER_DELAY,
  // animateOnView = true, // TODO: implementar animação ao entrar na viewport
  className,
  theme = "auto"
}) {
  const formatValue = (value) => {
    if (typeof value === "number") {
      if (value >= 1e3) {
        return `${(value / 1e3).toFixed(1)}K`;
      }
      return value.toString();
    }
    return value;
  };
  const renderChangeIndicator = (change) => {
    if (change === void 0 || change === 0) return null;
    const isPositive = change > 0;
    const Icon = isPositive ? TrendingUp__default.default : TrendingDown__default.default;
    const formattedChange = Math.abs(change).toFixed(1);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: `flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold transition-colors bg-opacity-20 ${isPositive ? "text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30" : "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30"}`,
        role: "status",
        "aria-label": `Varia\xE7\xE3o de ${formattedChange}% ${isPositive ? "positiva" : "negativa"}`,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Icon,
            {
              className: "w-3 h-3",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
            formattedChange,
            "%"
          ] })
        ]
      }
    );
  };
  const renderStatCard = (stat, index) => {
    const formattedValue = formatValue(stat.value);
    const cardId = `stat-card-${index}`;
    return /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.article,
      {
        initial: CARD_ANIMATION.initial,
        animate: CARD_ANIMATION.animate,
        transition: {
          ...CARD_ANIMATION.transition,
          delay: index * animationDelay
        },
        whileHover: {
          scale: 1.02,
          transition: { duration: 0.2 }
        },
        whileTap: { scale: 0.98 },
        role: "article",
        "aria-labelledby": `${cardId}-title`,
        "aria-describedby": stat.description ? `${cardId}-desc` : void 0,
        className: "h-full",
        children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "relative h-full overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: `absolute -top-12 -right-12 w-32 h-32 opacity-10 bg-gradient-to-br rounded-full blur-3xl transition-opacity duration-500 hover:opacity-15 ${stat.color}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "relative p-6", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: `p-3 rounded-xl shadow-sm bg-gradient-to-br ${stat.color} text-white transition-transform duration-300 hover:scale-110`,
                  "aria-hidden": "true",
                  children: stat.icon
                }
              ),
              renderChangeIndicator(stat.change)
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "h3",
                {
                  id: `${cardId}-title`,
                  className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100",
                  children: stat.isLoading ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-block h-8 w-16 animate-pulse bg-gray-300 dark:bg-gray-700 rounded" }) : formattedValue
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: stat.label }),
              stat.description && /* @__PURE__ */ jsxRuntime.jsx(
                "p",
                {
                  id: `${cardId}-desc`,
                  className: "text-xs text-gray-500 dark:text-gray-500 mt-2",
                  children: stat.description
                }
              )
            ] }),
            stat.change !== void 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-4 pt-3 border-t border-gray-100 dark:border-gray-800", children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-500", children: [
              stat.change > 0 ? "Em alta" : "Em baixa",
              " este m\xEAs"
            ] }) })
          ] })
        ] })
      },
      stat.label
    );
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "section",
    {
      className: `w-full ${className || ""}`,
      "aria-labelledby": "quick-stats-heading",
      "data-theme": theme,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("h2", { id: "quick-stats-heading", className: "sr-only", children: "Estat\xEDsticas R\xE1pidas do Dashboard" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntime.jsx(React__namespace.default.Fragment, { children: renderStatCard(stat, index) }, `${stat.label}-${index}`)) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-500", children: [
          "Atualizado em ",
          (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
        ] }) })
      ]
    }
  );
}
var QuickStats = React__namespace.default.memo(QuickStatsComponent);
QuickStats.displayName = "QuickStats";
var quick_stats_default = QuickStats;
/**
 * Componente de Estatísticas Rápidas para Dashboard
 * 
 * Exibe cards com métricas principais do sistema de forma visualmente atrativa,
 * incluindo ícones, valores e indicadores de variação percentual. O componente
 * oferece animações suaves, design responsivo e suporte a customização completa.
 * 
 * @module components/dashboard/quick-stats
 * @author Rainer Teixeira
 * @version 2.1.0
 * @since 1.0.0
 * 
 * @license MIT
 * 
 * @example
 * ```tsx
 * // Uso básico com estatísticas padrão
 * <QuickStats />
 * 
 * // Com estatísticas personalizadas
 * const customStats = [
 *   {
 *     label: 'Usuários Ativos',
 *     value: 1250,
 *     change: 15.5,
 *     icon: <Users className="w-5 h-5" />,
 *     color: 'from-blue-500 to-cyan-500'
 *   }
 * ];
 * <QuickStats stats={customStats} />
 * ```
 * 
 * @see {@link https://framer.com/motion Framer Motion} - Biblioteca de animações
 * @see {@link https://lucide.dev Lucide Icons} - Conjunto de ícones utilizados
 * 
 * @performance
 * - Otimizado para renderização com React.memo
 * - Animações com hardware acceleration
 * - Lazy loading de recursos visuais
 */

exports.QuickStats = QuickStats;
exports.default = quick_stats_default;
//# sourceMappingURL=quick-stats.js.map
//# sourceMappingURL=quick-stats.js.map