'use strict';

var RefreshCw = require('lucide-react/dist/esm/icons/refresh-cw');
var React2 = require('react');
var classVarianceAuthority = require('class-variance-authority');
var ChevronDown = require('lucide-react/dist/esm/icons/chevron-down');
var Package = require('lucide-react/dist/esm/icons/package');
var Search = require('lucide-react/dist/esm/icons/search');
var Wifi = require('lucide-react/dist/esm/icons/wifi');
var XCircle = require('lucide-react/dist/esm/icons/x-circle');
var reactSlot = require('@radix-ui/react-slot');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');

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

var RefreshCw__default = /*#__PURE__*/_interopDefault(RefreshCw);
var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var ChevronDown__default = /*#__PURE__*/_interopDefault(ChevronDown);
var Package__default = /*#__PURE__*/_interopDefault(Package);
var Search__default = /*#__PURE__*/_interopDefault(Search);
var Wifi__default = /*#__PURE__*/_interopDefault(Wifi);
var XCircle__default = /*#__PURE__*/_interopDefault(XCircle);

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
var ButtonComponent = React2__namespace.forwardRef(
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
    const Comp = asChild ? reactSlot.Slot : "button";
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Comp,
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
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) }),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var defaultIcons = {
  search: Search__default.default,
  empty: Package__default.default,
  error: XCircle__default.default,
  filtered: ChevronDown__default.default,
  offline: Wifi__default.default,
  loading: RefreshCw__default.default
};
var emptyStateVariants = classVarianceAuthority.cva(
  "flex flex-col items-center justify-center text-center p-8",
  {
    variants: {
      size: {
        sm: "p-6",
        md: "p-8",
        lg: "p-12",
        xl: "p-16"
      },
      variant: {
        default: "",
        card: "rounded-lg border border-border bg-card",
        glass: "glass rounded-lg",
        minimal: "p-4"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
var iconSizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20"
};
var EmptyState = React2__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    type,
    icon,
    title,
    description,
    actions,
    secondaryActions,
    animated = false,
    iconColor,
    iconSize = "md",
    ...props
  }, ref) => {
    let IconComponent = icon;
    if (!IconComponent && type) {
      const DefaultIcon = defaultIcons[type];
      IconComponent = /* @__PURE__ */ jsxRuntime.jsx(DefaultIcon, { className: iconSizeClasses[iconSize] });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(emptyStateVariants({ size, variant }), className),
        ...props,
        children: [
          IconComponent && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "mb-4 text-muted-foreground",
                animated && "animate-pulse",
                iconColor === "primary" && "text-primary",
                iconColor === "success" && "text-emerald-600 dark:text-emerald-500",
                iconColor === "warning" && "text-amber-600 dark:text-amber-500",
                iconColor === "error" && "text-red-600 dark:text-red-500",
                !iconColor && "text-muted-foreground"
              ),
              children: IconComponent
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-md space-y-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-foreground", children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
          ] }),
          (actions || secondaryActions) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-6 flex flex-col items-center gap-3 sm:flex-row", children: [
            actions,
            secondaryActions
          ] })
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";
var EmptyStateIllustrated = React2__namespace.forwardRef(
  ({
    className,
    illustration,
    illustrationAlt = "Ilustra\xE7\xE3o",
    illustrationWidth = 200,
    illustrationHeight = 200,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      EmptyState,
      {
        ref,
        className: cn(className),
        ...props,
        icon: illustration && /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: illustration,
            alt: illustrationAlt,
            width: illustrationWidth,
            height: illustrationHeight,
            className: "object-contain"
          }
        )
      }
    );
  }
);
EmptyStateIllustrated.displayName = "EmptyStateIllustrated";
var EmptyStatePatterns = {
  // Sem dados
  noData: (props) => /* @__PURE__ */ jsxRuntime.jsx(
    EmptyState,
    {
      type: "empty",
      title: "Nenhum dado dispon\xEDvel",
      description: "N\xE3o h\xE1 dados para exibir no momento.",
      ...props
    }
  ),
  // Sem resultados de busca
  noSearchResults: (onClear) => /* @__PURE__ */ jsxRuntime.jsx(
    EmptyState,
    {
      type: "search",
      title: "Nenhum resultado encontrado",
      description: "Tente usar termos diferentes ou limpar os filtros.",
      actions: onClear && /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onClick: onClear, children: "Limpar Filtros" })
    }
  ),
  // Sem itens na lista
  noItems: (onCreate, createLabel = "Adicionar") => /* @__PURE__ */ jsxRuntime.jsx(
    EmptyState,
    {
      type: "empty",
      title: "Nenhum item aqui",
      description: "Adicione seu primeiro item para come\xE7ar.",
      actions: onCreate && /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: onCreate, children: createLabel })
    }
  ),
  // Offline
  offline: (onRetry) => /* @__PURE__ */ jsxRuntime.jsx(
    EmptyState,
    {
      type: "offline",
      title: "Voc\xEA est\xE1 offline",
      description: "Verifique sua conex\xE3o com a internet e tente novamente.",
      actions: onRetry && /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: onRetry, children: "Tentar Novamente" }),
      animated: true
    }
  ),
  // Erro ao carregar
  error: (onRetry) => /* @__PURE__ */ jsxRuntime.jsx(
    EmptyState,
    {
      type: "error",
      title: "Algo deu errado",
      description: "Ocorreu um erro ao carregar os dados. Tente novamente.",
      actions: onRetry && /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: onRetry, children: "Tentar Novamente" }),
      iconColor: "error"
    }
  ),
  // Filtros sem resultado
  noFilterResults: (onClear) => /* @__PURE__ */ jsxRuntime.jsx(
    EmptyState,
    {
      type: "filtered",
      title: "Nenhum resultado com os filtros",
      description: "Tente ajustar ou remover alguns filtros.",
      actions: onClear && /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onClick: onClear, children: "Limpar Filtros" })
    }
  )
};

exports.EmptyState = EmptyState;
exports.EmptyStateIllustrated = EmptyStateIllustrated;
exports.EmptyStatePatterns = EmptyStatePatterns;
//# sourceMappingURL=empty-state.js.map
//# sourceMappingURL=empty-state.js.map