'use strict';

require('@radix-ui/react-aspect-ratio');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var React4 = require('react');
var jsxRuntime = require('react/jsx-runtime');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var lucideReact = require('lucide-react');
require('@radix-ui/react-dialog');
var classVarianceAuthority = require('class-variance-authority');
var framerMotion = require('framer-motion');
var Eye = require('lucide-react/dist/esm/icons/eye');
var FileText = require('lucide-react/dist/esm/icons/file-text');
var Heart = require('lucide-react/dist/esm/icons/heart');
var MessageCircle = require('lucide-react/dist/esm/icons/message-circle');
var TrendingDown = require('lucide-react/dist/esm/icons/trending-down');
var TrendingUp = require('lucide-react/dist/esm/icons/trending-up');
var MessageSquare = require('lucide-react/dist/esm/icons/message-square');
var reactSlot = require('@radix-ui/react-slot');
var SliderPrimitive = require('@radix-ui/react-slider');
var SwitchPrimitives = require('@radix-ui/react-switch');
var TogglePrimitive = require('@radix-ui/react-toggle');
var Plus = require('lucide-react/dist/esm/icons/plus');
var X2 = require('lucide-react/dist/esm/icons/x');
var nextThemes = require('next-themes');
require('lucide-react/dist/esm/icons/moon');
require('lucide-react/dist/esm/icons/sun');
var Settings = require('lucide-react/dist/esm/icons/settings');
var BarChart = require('lucide-react/dist/esm/icons/bar-chart');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var ProgressPrimitive = require('@radix-ui/react-progress');
var sonner = require('sonner');
var ArrowDown = require('lucide-react/dist/esm/icons/arrow-down');
var ArrowUp = require('lucide-react/dist/esm/icons/arrow-up');
var Minus = require('lucide-react/dist/esm/icons/minus');
var RefreshCw = require('lucide-react/dist/esm/icons/refresh-cw');
var ChevronDown = require('lucide-react/dist/esm/icons/chevron-down');
var Package = require('lucide-react/dist/esm/icons/package');
var Search = require('lucide-react/dist/esm/icons/search');
var Wifi = require('lucide-react/dist/esm/icons/wifi');
var XCircle = require('lucide-react/dist/esm/icons/x-circle');
var AlertCircle = require('lucide-react/dist/esm/icons/alert-circle');
var AlertTriangle2 = require('lucide-react/dist/esm/icons/alert-triangle');
var Bell = require('lucide-react/dist/esm/icons/bell');
var Check2 = require('lucide-react/dist/esm/icons/check');
var Info2 = require('lucide-react/dist/esm/icons/info');
var Trash2 = require('lucide-react/dist/esm/icons/trash-2');
var Calendar = require('lucide-react/dist/esm/icons/calendar');
var Edit = require('lucide-react/dist/esm/icons/edit');
var BookOpen = require('lucide-react/dist/esm/icons/book-open');
var ExternalLink = require('lucide-react/dist/esm/icons/external-link');
var HelpCircle = require('lucide-react/dist/esm/icons/help-circle');
var Video = require('lucide-react/dist/esm/icons/video');

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

var React4__namespace = /*#__PURE__*/_interopNamespace(React4);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var Eye__default = /*#__PURE__*/_interopDefault(Eye);
var FileText__default = /*#__PURE__*/_interopDefault(FileText);
var Heart__default = /*#__PURE__*/_interopDefault(Heart);
var MessageCircle__default = /*#__PURE__*/_interopDefault(MessageCircle);
var TrendingDown__default = /*#__PURE__*/_interopDefault(TrendingDown);
var TrendingUp__default = /*#__PURE__*/_interopDefault(TrendingUp);
var MessageSquare__default = /*#__PURE__*/_interopDefault(MessageSquare);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
var Plus__default = /*#__PURE__*/_interopDefault(Plus);
var X2__default = /*#__PURE__*/_interopDefault(X2);
var Settings__default = /*#__PURE__*/_interopDefault(Settings);
var BarChart__default = /*#__PURE__*/_interopDefault(BarChart);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var ArrowDown__default = /*#__PURE__*/_interopDefault(ArrowDown);
var ArrowUp__default = /*#__PURE__*/_interopDefault(ArrowUp);
var Minus__default = /*#__PURE__*/_interopDefault(Minus);
var RefreshCw__default = /*#__PURE__*/_interopDefault(RefreshCw);
var ChevronDown__default = /*#__PURE__*/_interopDefault(ChevronDown);
var Package__default = /*#__PURE__*/_interopDefault(Package);
var Search__default = /*#__PURE__*/_interopDefault(Search);
var Wifi__default = /*#__PURE__*/_interopDefault(Wifi);
var XCircle__default = /*#__PURE__*/_interopDefault(XCircle);
var AlertCircle__default = /*#__PURE__*/_interopDefault(AlertCircle);
var AlertTriangle2__default = /*#__PURE__*/_interopDefault(AlertTriangle2);
var Bell__default = /*#__PURE__*/_interopDefault(Bell);
var Check2__default = /*#__PURE__*/_interopDefault(Check2);
var Info2__default = /*#__PURE__*/_interopDefault(Info2);
var Trash2__default = /*#__PURE__*/_interopDefault(Trash2);
var Calendar__default = /*#__PURE__*/_interopDefault(Calendar);
var Edit__default = /*#__PURE__*/_interopDefault(Edit);
var BookOpen__default = /*#__PURE__*/_interopDefault(BookOpen);
var ExternalLink__default = /*#__PURE__*/_interopDefault(ExternalLink);
var HelpCircle__default = /*#__PURE__*/_interopDefault(HelpCircle);
var Video__default = /*#__PURE__*/_interopDefault(Video);

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
var Card = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardDescription = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var ScrollArea = React4__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  ScrollAreaPrimitive__namespace.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsxRuntime.jsx(ScrollBar, {}),
      /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
var ScrollBar = React4__namespace.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;
var Separator = React4__namespace.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        /** Define dimensões baseado na orientação */
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive__namespace.Root.displayName;
var Table = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors duration-200 hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var containerVariants = classVarianceAuthority.cva(
  "mx-auto px-4 sm:px-6 lg:px-8",
  {
    variants: {
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        full: "max-w-full",
        screen: "max-w-screen-xl",
        none: ""
      },
      padding: {
        none: "px-0",
        sm: "px-2 sm:px-4",
        md: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12",
        xl: "px-8 sm:px-12 lg:px-16"
      },
      center: {
        true: "flex items-center justify-center",
        false: ""
      }
    },
    defaultVariants: {
      size: "7xl",
      padding: "md",
      center: false
    }
  }
);
var Container = React4__namespace.forwardRef(
  ({
    className,
    size = "7xl",
    padding = "md",
    center = false,
    fullHeight = false,
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          containerVariants({ size, padding, center }),
          fullHeight && "min-h-screen",
          verticalPadding && "py-4 sm:py-6 lg:py-8",
          className
        ),
        ...props
      }
    );
  }
);
Container.displayName = "Container";
var ContainerFluid = React4__namespace.forwardRef(
  ({
    className,
    padding = "md",
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "w-full",
          padding === "none" && "px-0",
          padding === "sm" && "px-2 sm:px-4",
          padding === "md" && "px-4 sm:px-6 lg:px-8",
          padding === "lg" && "px-6 sm:px-8 lg:px-12",
          padding === "xl" && "px-8 sm:px-12 lg:px-16",
          verticalPadding && "py-4 sm:py-6 lg:py-8",
          className
        ),
        ...props
      }
    );
  }
);
ContainerFluid.displayName = "ContainerFluid";
var spacingClasses = {
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
  "2xl": "py-24"
};
var ContainerSection = React4__namespace.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "section",
      {
        ref,
        className: cn(
          "w-full",
          spacingClasses[spacing],
          className
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(Container, { ...props })
      }
    );
  }
);
ContainerSection.displayName = "ContainerSection";
var gridVariants = classVarianceAuthority.cva(
  "grid",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12",
        auto: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      sm: {
        1: "sm:grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-4",
        5: "sm:grid-cols-5",
        6: "sm:grid-cols-6",
        7: "sm:grid-cols-7",
        8: "sm:grid-cols-8",
        9: "sm:grid-cols-9",
        10: "sm:grid-cols-10",
        11: "sm:grid-cols-11",
        12: "sm:grid-cols-12",
        auto: "sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      md: {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6",
        7: "md:grid-cols-7",
        8: "md:grid-cols-8",
        9: "md:grid-cols-9",
        10: "md:grid-cols-10",
        11: "md:grid-cols-11",
        12: "md:grid-cols-12",
        auto: "md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      lg: {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6",
        7: "lg:grid-cols-7",
        8: "lg:grid-cols-8",
        9: "lg:grid-cols-9",
        10: "lg:grid-cols-10",
        11: "lg:grid-cols-11",
        12: "lg:grid-cols-12",
        auto: "lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      xl: {
        1: "xl:grid-cols-1",
        2: "xl:grid-cols-2",
        3: "xl:grid-cols-3",
        4: "xl:grid-cols-4",
        5: "xl:grid-cols-5",
        6: "xl:grid-cols-6",
        7: "xl:grid-cols-7",
        8: "xl:grid-cols-8",
        9: "xl:grid-cols-9",
        10: "xl:grid-cols-10",
        11: "xl:grid-cols-11",
        12: "xl:grid-cols-12",
        auto: "xl:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      gap: {
        0: "gap-0",
        1: "gap-1",
        2: "gap-2",
        3: "gap-3",
        4: "gap-4",
        5: "gap-5",
        6: "gap-6",
        8: "gap-8",
        10: "gap-10",
        12: "gap-12",
        px: "gap-px"
      },
      gapX: {
        0: "gap-x-0",
        1: "gap-x-1",
        2: "gap-x-2",
        3: "gap-x-3",
        4: "gap-x-4",
        5: "gap-x-5",
        6: "gap-x-6",
        8: "gap-x-8",
        10: "gap-x-10",
        12: "gap-x-12",
        px: "gap-x-px"
      },
      gapY: {
        0: "gap-y-0",
        1: "gap-y-1",
        2: "gap-y-2",
        3: "gap-y-3",
        4: "gap-y-4",
        5: "gap-y-5",
        6: "gap-y-6",
        8: "gap-y-8",
        10: "gap-y-10",
        12: "gap-y-12",
        px: "gap-y-px"
      },
      align: {
        start: "items-start",
        end: "items-end",
        center: "items-center",
        stretch: "items-stretch"
      },
      justify: {
        start: "justify-start",
        end: "justify-end",
        center: "justify-center",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      }
    }
  }
);
var Grid = React4__namespace.forwardRef(
  ({
    className,
    cols,
    sm,
    md,
    lg,
    xl,
    gap,
    gapX,
    gapY,
    align,
    justify,
    minColWidth,
    templateCols,
    templateRows,
    areas,
    style,
    ...props
  }, ref) => {
    const gridStyle = React4__namespace.useMemo(() => {
      const customStyle = { ...style };
      if (templateCols) {
        customStyle.gridTemplateColumns = templateCols;
      }
      if (templateRows) {
        customStyle.gridTemplateRows = templateRows;
      }
      if (areas) {
        customStyle.gridTemplateAreas = areas;
      }
      if ((cols === "auto-fit" || cols === "auto-fill") && minColWidth) {
        customStyle.gridTemplateColumns = `repeat(${cols}, minmax(${minColWidth}, 1fr))`;
      }
      return customStyle;
    }, [style, templateCols, templateRows, areas, cols, minColWidth]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          gridVariants({
            cols,
            sm,
            md,
            lg,
            xl,
            gap,
            gapX,
            gapY,
            align,
            justify
          }),
          className
        ),
        style: gridStyle,
        ...props
      }
    );
  }
);
Grid.displayName = "Grid";
var GridItem = React4__namespace.forwardRef(
  ({
    className,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    area,
    style,
    ...props
  }, ref) => {
    const gridStyle = React4__namespace.useMemo(() => {
      const customStyle = { ...style };
      if (colStart !== void 0) {
        customStyle.gridColumnStart = colStart;
      }
      if (colEnd !== void 0) {
        customStyle.gridColumnEnd = colEnd;
      }
      if (rowStart !== void 0) {
        customStyle.gridRowStart = rowStart;
      }
      if (rowEnd !== void 0) {
        customStyle.gridRowEnd = rowEnd;
      }
      if (area) {
        customStyle.gridArea = area;
      }
      return customStyle;
    }, [style, colStart, colEnd, rowStart, rowEnd, area]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(className),
        style: gridStyle,
        ...props
      }
    );
  }
);
GridItem.displayName = "GridItem";
var flexVariants = classVarianceAuthority.cva(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        "row-reverse": "flex-row-reverse",
        col: "flex-col",
        "col-reverse": "flex-col-reverse"
      },
      wrap: {
        nowrap: "flex-nowrap",
        wrap: "flex-wrap",
        "wrap-reverse": "flex-wrap-reverse"
      },
      align: {
        start: "items-start",
        end: "items-end",
        center: "items-center",
        baseline: "items-baseline",
        stretch: "items-stretch"
      },
      justify: {
        start: "justify-start",
        end: "justify-end",
        center: "justify-center",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      },
      gap: {
        0: "gap-0",
        1: "gap-1",
        2: "gap-2",
        3: "gap-3",
        4: "gap-4",
        5: "gap-5",
        6: "gap-6",
        8: "gap-8",
        10: "gap-10",
        12: "gap-12",
        px: "gap-px"
      },
      gapX: {
        0: "gap-x-0",
        1: "gap-x-1",
        2: "gap-x-2",
        3: "gap-x-3",
        4: "gap-x-4",
        5: "gap-x-5",
        6: "gap-x-6",
        8: "gap-x-8",
        10: "gap-x-10",
        12: "gap-x-12",
        px: "gap-x-px"
      },
      gapY: {
        0: "gap-y-0",
        1: "gap-y-1",
        2: "gap-y-2",
        3: "gap-y-3",
        4: "gap-y-4",
        5: "gap-y-5",
        6: "gap-y-6",
        8: "gap-y-8",
        10: "gap-y-10",
        12: "gap-y-12",
        px: "gap-y-px"
      }
    }
  }
);
var Flex = React4__namespace.forwardRef(
  ({
    className,
    direction = "row",
    wrap = "nowrap",
    align,
    justify,
    gap,
    gapX,
    gapY,
    full = false,
    fullHeight = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          flexVariants({
            direction,
            wrap,
            align,
            justify,
            gap,
            gapX,
            gapY
          }),
          full && "w-full",
          fullHeight && "min-h-screen",
          className
        ),
        ...props
      }
    );
  }
);
Flex.displayName = "Flex";
var FlexCenter = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        align: "center",
        justify: "center",
        ...props
      }
    );
  }
);
FlexCenter.displayName = "FlexCenter";
var FlexBetween = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        justify: "between",
        ...props
      }
    );
  }
);
FlexBetween.displayName = "FlexBetween";
var FlexStart = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        align: "start",
        justify: "start",
        ...props
      }
    );
  }
);
FlexStart.displayName = "FlexStart";
var FlexEnd = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        align: "end",
        justify: "end",
        ...props
      }
    );
  }
);
FlexEnd.displayName = "FlexEnd";
var FlexColumn = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        direction: "col",
        ...props
      }
    );
  }
);
FlexColumn.displayName = "FlexColumn";
var FlexRow = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Flex,
      {
        ref,
        direction: "row",
        ...props
      }
    );
  }
);
FlexRow.displayName = "FlexRow";
var spacerVariants = classVarianceAuthority.cva(
  "",
  {
    variants: {
      size: {
        xs: "h-2 w-2",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
        "2xl": "h-12 w-12",
        "3xl": "h-16 w-16",
        "4xl": "h-20 w-20"
      },
      direction: {
        horizontal: "flex-1 h-px",
        vertical: "w-px flex-1",
        both: "flex-1"
      },
      variant: {
        default: "bg-transparent",
        line: "bg-border",
        dotted: "bg-transparent border-dashed",
        gradient: "bg-gradient-to-r from-transparent via-border to-transparent"
      }
    },
    defaultVariants: {
      size: "md",
      direction: "both",
      variant: "default"
    }
  }
);
var Spacer = React4__namespace.forwardRef(
  ({
    className,
    size = "md",
    direction = "both",
    variant = "default",
    width,
    height,
    flex = true,
    invisible = false,
    style,
    ...props
  }, ref) => {
    const spacerStyle = React4__namespace.useMemo(() => {
      const customStyle = { ...style };
      if (width !== void 0) {
        customStyle.width = typeof width === "number" ? `${width}px` : width;
      }
      if (height !== void 0) {
        customStyle.height = typeof height === "number" ? `${height}px` : height;
      }
      if (flex) {
        customStyle.flex = "1";
      }
      if (invisible) {
        customStyle.visibility = "hidden";
      }
      return customStyle;
    }, [style, width, height, flex, invisible]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          spacerVariants({ size, direction, variant }),
          !flex && "flex-none",
          variant === "dotted" && "border-b border-border",
          className
        ),
        style: spacerStyle,
        "aria-hidden": "true",
        ...props
      }
    );
  }
);
Spacer.displayName = "Spacer";
var VerticalSpacer = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Spacer,
      {
        ref,
        direction: "vertical",
        ...props
      }
    );
  }
);
VerticalSpacer.displayName = "VerticalSpacer";
var HorizontalSpacer = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Spacer,
      {
        ref,
        direction: "horizontal",
        ...props
      }
    );
  }
);
HorizontalSpacer.displayName = "HorizontalSpacer";
var dividerVariants = classVarianceAuthority.cva(
  "border-t",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-muted",
        primary: "border-primary",
        secondary: "border-secondary",
        dashed: "border-dashed",
        dotted: "border-dotted",
        gradient: "border-none bg-gradient-to-r from-transparent via-border to-transparent h-px"
      },
      size: {
        xs: "border-t-0.5",
        sm: "border-t",
        md: "border-t-2",
        lg: "border-t-4"
      },
      orientation: {
        horizontal: "w-full",
        vertical: "h-full border-l border-t-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      orientation: "horizontal"
    }
  }
);
var Divider = React4__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    orientation = "horizontal",
    label,
    labelPosition = "center",
    labelComponent,
    ...props
  }, ref) => {
    if (label || labelComponent) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref,
          className: cn(
            "flex items-center gap-4",
            orientation === "vertical" && "flex-col",
            className
          ),
          role: "separator",
          "aria-orientation": orientation,
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  dividerVariants({ variant, size, orientation }),
                  labelPosition === "center" && "flex-1",
                  labelPosition === "end" && "flex-1",
                  labelPosition === "start" && "flex-none w-10"
                )
              }
            ),
            labelComponent || /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: label }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  dividerVariants({ variant, size, orientation }),
                  labelPosition === "center" && "flex-1",
                  labelPosition === "start" && "flex-1",
                  labelPosition === "end" && "flex-none w-10"
                )
              }
            )
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          dividerVariants({ variant, size, orientation }),
          className
        ),
        role: "separator",
        "aria-orientation": orientation,
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";
var spacingClasses2 = {
  sm: "my-4",
  md: "my-6",
  lg: "my-8",
  xl: "my-12"
};
var SectionDivider = React4__namespace.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(spacingClasses2[spacing], className), children: /* @__PURE__ */ jsxRuntime.jsx(Divider, { ref, size: "md", ...props }) });
  }
);
SectionDivider.displayName = "SectionDivider";
var textColorClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground"
};
var TextDivider = React4__namespace.forwardRef(
  ({
    className,
    children,
    textColor = "muted",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-4", className),
        role: "separator",
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("text-sm font-medium whitespace-nowrap", textColorClasses[textColor]), children }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 h-px bg-border" })
        ]
      }
    );
  }
);
TextDivider.displayName = "TextDivider";
var panelVariants = classVarianceAuthority.cva(
  "rounded-lg border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "border-border shadow-sm",
        elevated: "border-border shadow-md",
        outlined: "border-2 border-border shadow-none",
        ghost: "border-transparent shadow-none bg-transparent",
        glass: "glass border-border shadow-sm",
        neon: "neon-border shadow-lg dark:shadow-glow-cyan",
        gradient: "bg-gradient-to-br from-background to-muted border-border shadow-sm"
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10"
      },
      padding: {
        none: "p-0",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
        xl: "p-8"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-2xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      padding: null,
      radius: "md"
    }
  }
);
var Panel = React4__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size,
    padding,
    radius = "md",
    hover = false,
    clickable = false,
    selected = false,
    loading = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          panelVariants({ variant, size, padding, radius }),
          hover && "transition-all duration-[var(--motion-duration-normal)] hover:shadow-lg hover:-translate-y-0.5",
          clickable && "cursor-pointer active:scale-[0.98]",
          selected && "ring-2 ring-primary ring-offset-2",
          loading && "opacity-70",
          className
        ),
        ...props
      }
    );
  }
);
Panel.displayName = "Panel";
var PanelHeader = React4__namespace.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col space-y-1.5 p-6",
          divider && "border-b border-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
PanelHeader.displayName = "PanelHeader";
var PanelTitle = React4__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "h3",
      {
        ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className),
        ...props,
        children
      }
    );
  }
);
PanelTitle.displayName = "PanelTitle";
var PanelDescription = React4__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "p",
      {
        ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props,
        children
      }
    );
  }
);
PanelDescription.displayName = "PanelDescription";
var PanelContent = React4__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("p-6 pt-0", className),
        ...props,
        children
      }
    );
  }
);
PanelContent.displayName = "PanelContent";
var PanelFooter = React4__namespace.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center p-6 pt-0",
          divider && "border-t border-border mt-6 pt-6",
          className
        ),
        ...props,
        children
      }
    );
  }
);
PanelFooter.displayName = "PanelFooter";
var spacingClasses3 = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10"
};
var PanelGroup = React4__namespace.forwardRef(
  ({
    className,
    spacing = "md",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("grid", spacingClasses3[spacing], className),
        ...props,
        children
      }
    );
  }
);
PanelGroup.displayName = "PanelGroup";
function StatsCards({ stats, isLoading }) {
  const cards = [
    {
      label: "Total de Posts",
      value: stats.totalPosts,
      change: stats.postsChange,
      icon: /* @__PURE__ */ jsxRuntime.jsx(FileText__default.default, { className: "h-4 w-4" }),
      color: "from-cyan-500 to-blue-500"
    },
    {
      label: "Total de Visualiza\xE7\xF5es",
      value: stats.totalViews,
      change: stats.viewsChange,
      icon: /* @__PURE__ */ jsxRuntime.jsx(Eye__default.default, { className: "h-4 w-4" }),
      color: "from-purple-500 to-pink-500"
    },
    {
      label: "Total de Curtidas",
      value: stats.totalLikes,
      change: stats.likesChange,
      icon: /* @__PURE__ */ jsxRuntime.jsx(Heart__default.default, { className: "h-4 w-4" }),
      color: "from-pink-500 to-red-500"
    },
    {
      label: "Total de Coment\xE1rios",
      value: stats.totalComments,
      change: stats.commentsChange,
      icon: /* @__PURE__ */ jsxRuntime.jsx(MessageCircle__default.default, { className: "h-4 w-4" }),
      color: "from-green-500 to-emerald-500"
    }
  ];
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "animate-pulse", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-24 bg-muted rounded" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 w-8 bg-muted rounded" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 w-16 bg-muted rounded" }) })
    ] }, i)) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: cards.map((stat, index) => /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 },
      children: /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "border-2 hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: stat.label }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br text-white",
                stat.color
              ),
              children: stat.icon
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold", children: stat.value.toLocaleString() }),
            stat.change !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                className: cn(
                  "flex items-center gap-1 text-xs font-medium",
                  stat.change > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                ),
                children: [
                  stat.change > 0 ? /* @__PURE__ */ jsxRuntime.jsx(TrendingUp__default.default, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntime.jsx(TrendingDown__default.default, { className: "h-3 w-3" }),
                  Math.abs(stat.change),
                  "%"
                ]
              }
            )
          ] }),
          stat.change !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            stat.change > 0 ? "+" : "",
            stat.change,
            "% em rela\xE7\xE3o ao m\xEAs anterior"
          ] })
        ] })
      ] })
    },
    stat.label
  )) });
}
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
  const formatValue2 = (value) => {
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
    const formattedValue = formatValue2(stat.value);
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
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntime.jsx(React4__namespace.default.Fragment, { children: renderStatCard(stat, index) }, `${stat.label}-${index}`)) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-500", children: [
          "Atualizado em ",
          (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
        ] }) })
      ]
    }
  );
}
var QuickStats = React4__namespace.default.memo(QuickStatsComponent);
QuickStats.displayName = "QuickStats";
var sizeClasses = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
  "2xl": "h-20 w-20 text-xl",
  "3xl": "h-24 w-24 text-2xl"
};
var variantClasses = {
  circular: "rounded-full",
  rounded: "rounded-xl",
  square: "rounded-lg"
};
function getInitials(name, max = 2) {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, Math.min(max, 2)).toUpperCase();
  }
  return words.slice(0, max).map((word) => word[0]).join("").toUpperCase();
}
function getColorFromName(name) {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-pink-400 to-pink-600",
    "from-indigo-400 to-indigo-600",
    "from-cyan-400 to-cyan-600",
    "from-emerald-400 to-emerald-600",
    "from-rose-400 to-rose-600",
    "from-amber-400 to-amber-600",
    "from-teal-400 to-teal-600"
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
var Avatar = React4__namespace.forwardRef(
  ({
    className,
    src,
    alt,
    name,
    size = "md",
    variant = "circular",
    fallbackColor,
    textColor = "text-white",
    maxInitials = 2,
    onLoad,
    onError,
    children,
    ...props
  }, ref) => {
    const [imageStatus, setImageStatus] = React4__namespace.useState("loading");
    const [showFallback, setShowFallback] = React4__namespace.useState(!src);
    React4__namespace.useEffect(() => {
      if (!src) {
        setShowFallback(true);
        setImageStatus("error");
        return;
      }
      setImageStatus("loading");
      setShowFallback(false);
      const img = new Image();
      img.onload = () => {
        setImageStatus("loaded");
        onLoad?.();
      };
      img.onerror = () => {
        setImageStatus("error");
        setShowFallback(true);
        onError?.();
      };
      img.src = src;
    }, [src, onLoad, onError]);
    const initials = name ? getInitials(name, maxInitials) : "";
    const ariaLabel = alt || name || "Avatar";
    const autoColor = name && !fallbackColor ? getColorFromName(name) : "";
    const bgClass = fallbackColor || (autoColor ? `bg-gradient-to-br ${autoColor}` : "bg-gray-500");
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          "relative inline-flex items-center justify-center font-medium select-none",
          "transition-all duration-200 ease-in-out",
          sizeClasses[size],
          variantClasses[variant],
          showFallback ? bgClass : "bg-transparent",
          textColor,
          "shadow-sm hover:shadow-md",
          className
        ),
        role: "img",
        "aria-label": ariaLabel,
        ...props,
        children: [
          showFallback ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center", children: initials ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold tracking-wide", children: initials }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "opacity-60 text-2xl", children: "?" }) }) : /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src,
              alt,
              className: cn(
                "h-full w-full object-cover",
                variantClasses[variant],
                "transition-opacity duration-200"
              ),
              style: {
                opacity: imageStatus === "loaded" ? 1 : 0
              }
            }
          ),
          imageStatus === "loading" && !showFallback && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" }) }),
          children
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";
var AvatarImage = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "img",
  {
    ref,
    className: cn("h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center font-medium",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";
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
var ButtonComponent = React4__namespace.forwardRef(
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
var Slider = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SliderPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SliderPrimitive__namespace.Track,
        {
          className: cn(
            "relative h-2 w-full grow overflow-hidden bg-secondary rounded-full"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-primary" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        SliderPrimitive__namespace.Thumb,
        {
          className: cn(
            "block h-5 w-5 border-2 border-primary bg-background ring-offset-background rounded-full transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none",
            "disabled:opacity-50"
          )
        }
      )
    ]
  }
));
Slider.displayName = SliderPrimitive__namespace.Root.displayName;
var Switch = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SwitchPrimitives__namespace.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SwitchPrimitives__namespace.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React4__namespace.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TogglePrimitive__namespace.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive__namespace.Root.displayName;
var iconButtonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
        neon: "relative bg-primary border-2 border-primary text-primary-foreground shadow-lg",
        glass: "relative bg-white/10 border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        xs: "h-6 w-6 rounded-md",
        sm: "h-8 w-8 rounded-md",
        md: "h-10 w-10 rounded-lg",
        lg: "h-12 w-12 rounded-lg",
        xl: "h-14 w-14 rounded-xl",
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
        pulse: "hover:animate-pulse",
        rotate: "hover:rotate-90"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      animation: "scale"
    }
  }
);
var IconButton = React4__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    animation = "scale",
    icon,
    tooltip,
    tooltipPosition = "top",
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const [showTooltip, setShowTooltip] = React4__namespace.useState(false);
    const [tooltipVisible, setTooltipVisible] = React4__namespace.useState(false);
    const tooltipClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };
    const tooltipArrowClasses = {
      top: "top-full left-1/2 -translate-x-1/2 -mt-1 border-l-transparent border-r-transparent border-b-transparent border-t-current",
      bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1 border-l-transparent border-r-transparent border-t-transparent border-b-current",
      left: "left-full top-1/2 -translate-y-1/2 -ml-1 border-t-transparent border-b-transparent border-r-transparent border-l-current",
      right: "right-full top-1/2 -translate-y-1/2 -mr-1 border-t-transparent border-b-transparent border-l-transparent border-r-current"
    };
    React4__namespace.useEffect(() => {
      if (showTooltip) {
        const timer = setTimeout(() => setTooltipVisible(true), 100);
        return () => clearTimeout(timer);
      } else {
        setTooltipVisible(false);
      }
    }, [showTooltip]);
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative inline-block", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        Button,
        {
          ref,
          variant,
          size,
          className: cn(
            iconButtonVariants({ variant, size, animation }),
            "p-0",
            // Efeito neon especial
            variant === "neon" && [
              "before:absolute before:inset-0 before:rounded-inherit before:bg-primary before:opacity-20",
              "after:absolute after:inset-0 after:rounded-inherit after:bg-primary after:opacity-0",
              "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
              "before:transition-opacity after:transition-opacity",
              "before:duration-300 after:duration-300"
            ],
            className
          ),
          disabled: isDisabled,
          onMouseEnter: () => setShowTooltip(true),
          onMouseLeave: () => setShowTooltip(false),
          onFocus: () => setShowTooltip(true),
          onBlur: () => setShowTooltip(false),
          ...props,
          children: [
            loading ? loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) : icon,
            children
          ]
        }
      ),
      tooltip && showTooltip && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg border border-gray-700",
            "transition-all duration-200 ease-in-out",
            tooltipVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
            tooltipClasses[tooltipPosition]
          ),
          children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
            tooltip,
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "absolute w-2 h-2 bg-gray-900 border border-gray-700 rotate-45",
                  tooltipArrowClasses[tooltipPosition]
                )
              }
            )
          ] })
        }
      )
    ] });
  }
);
IconButton.displayName = "IconButton";
var linkButtonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default: "text-primary hover:underline underline-offset-4 hover:text-primary/80",
        muted: "text-muted-foreground hover:text-foreground hover:underline underline-offset-4",
        destructive: "text-destructive hover:text-destructive/80 hover:underline underline-offset-4",
        success: "text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 dark:text-emerald-400 dark:hover:text-emerald-300",
        warning: "text-amber-600 hover:text-amber-700 hover:underline underline-offset-4 dark:text-amber-400 dark:hover:text-amber-300",
        info: "text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300",
        neon: "text-primary hover:underline underline-offset-4 hover:text-primary/80 dark:hover:text-cyan-400",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2",
        outline: "border-2 border-border rounded-md px-4 py-2 hover:bg-accent hover:border-accent hover:text-accent-foreground",
        pill: "bg-gray-100 text-gray-900 rounded-full px-4 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
      },
      size: {
        xs: "text-xs px-2 py-1",
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-2.5",
        xl: "text-xl px-6 py-3"
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95",
        glow: "hover:text-current",
        slide: "hover:translate-x-1",
        bounce: "hover:animate-bounce"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      weight: "medium",
      animation: "scale"
    }
  }
);
var LinkButton = React4__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    weight = "medium",
    animation = "scale",
    noUnderline = false,
    leftIcon,
    rightIcon,
    href,
    target,
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const classes = cn(
      linkButtonVariants({ variant, size, weight, animation }),
      noUnderline && "hover:no-underline",
      loading && "cursor-not-allowed opacity-70",
      className
    );
    const isDisabled = disabled || loading;
    if (href && !loading) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "a",
        {
          href,
          target,
          className: classes,
          rel: target === "_blank" ? "noopener noreferrer" : void 0,
          children: [
            loading && (loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" })),
            leftIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-2", children: leftIcon }),
            children,
            rightIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-2", children: rightIcon })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        ref,
        className: classes,
        disabled: isDisabled,
        ...props,
        children: [
          loading && (loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" })),
          leftIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-2", children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-2", children: rightIcon })
        ]
      }
    );
  }
);
LinkButton.displayName = "LinkButton";
var fabVariants = classVarianceAuthority.cva(
  "fixed z-40 rounded-full shadow-lg transition-all duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "bg-background border border-border hover:bg-accent hover:text-accent-foreground",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass border border-border hover:glass-hover"
      },
      size: {
        sm: "h-12 w-12",
        md: "h-14 w-14",
        lg: "h-16 w-16",
        xl: "h-20 w-20"
      },
      position: {
        "bottom-right": "bottom-6 right-6",
        "bottom-left": "bottom-6 left-6",
        "top-right": "top-6 right-6",
        "top-left": "top-6 left-6",
        "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
        "top-center": "top-6 left-1/2 -translate-x-1/2"
      },
      extended: {
        true: "rounded-full px-6 w-auto",
        false: "w-14 h-14"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      position: "bottom-right",
      extended: false
    }
  }
);
var FAB = React4__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    position = "bottom-right",
    extended = false,
    icon,
    text,
    active = false,
    onClick,
    animate = true,
    actions = [],
    ...props
  }, ref) => {
    const [showActions, setShowActions] = React4__namespace.useState(active);
    const isExtended = extended && text;
    React4__namespace.useEffect(() => {
      setShowActions(active);
    }, [active]);
    const handleClick = React4__namespace.useCallback(() => {
      if (actions.length > 0) {
        setShowActions(!showActions);
      }
      onClick?.();
    }, [actions.length, showActions, onClick]);
    const defaultIcon = actions.length > 0 ? showActions ? /* @__PURE__ */ jsxRuntime.jsx(X2__default.default, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntime.jsx(Plus__default.default, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntime.jsx(Plus__default.default, { className: "h-5 w-5" });
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
      showActions && actions.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-0 flex flex-col-reverse gap-3 mb-4", children: actions.map((action, index) => /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: cn(
            "flex items-center gap-3 animate-in slide-in-from-bottom-2 fade-in-0",
            "duration-[var(--motion-duration-normal)]",
            position.includes("left") && "flex-row-reverse",
            position.includes("center") && "flex-row-reverse"
          ),
          style: {
            animationDelay: `${index * 50}ms`
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium whitespace-nowrap bg-background px-2 py-1 rounded-md shadow-md", children: action.label }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-10 w-10 rounded-full",
                onClick: action.onClick,
                children: action.icon
              }
            )
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          ref,
          variant,
          className: cn(
            fabVariants({ variant, size, position, extended: isExtended ? true : false }),
            animate && "animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            className
          ),
          onClick: handleClick,
          ...props,
          children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-2", children: [
            icon || defaultIcon,
            isExtended && text && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: text })
          ] })
        }
      )
    ] });
  }
);
FAB.displayName = "FAB";
var FABGroup = React4__namespace.forwardRef(
  ({
    className,
    main,
    secondary = [],
    position = "bottom-right",
    ...props
  }, ref) => {
    const positionClasses2 = {
      "bottom-right": "bottom-6 right-6 flex-col-reverse",
      "bottom-left": "bottom-6 left-6 flex-col-reverse",
      "top-right": "top-6 right-6 flex-col",
      "top-left": "top-6 left-6 flex-col",
      "bottom-center": "bottom-6 left-1/2 -translate-x-1/2 flex-col-reverse",
      "top-center": "top-6 left-1/2 -translate-x-1/2 flex-col"
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          "fixed z-40 flex gap-3",
          positionClasses2[position],
          className
        ),
        ...props,
        children: [
          secondary.map((fab, index) => /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
              style: {
                animationDelay: `${index * 50}ms`
              },
              children: fab
            },
            index
          )),
          main
        ]
      }
    );
  }
);
FABGroup.displayName = "FABGroup";
var segmentedControlVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded-lg border border-border bg-background p-1 text-foreground",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base"
      },
      variant: {
        default: "",
        pill: "rounded-full",
        neon: "neon-border dark:shadow-glow-cyan",
        glass: "glass border-border"
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      fullWidth: false
    }
  }
);
var SegmentedControl = React4__namespace.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    fullWidth = false,
    options,
    value,
    onChange,
    defaultValue,
    disabled = false,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React4__namespace.useState(defaultValue || options[0]?.value);
    const currentValue = value !== void 0 ? value : internalValue;
    const handleOptionClick = React4__namespace.useCallback((optionValue, isDisabled) => {
      if (isDisabled || disabled) return;
      if (value === void 0) {
        setInternalValue(optionValue);
      }
      onChange?.(optionValue);
    }, [value, onChange, disabled]);
    const sizeClasses2 = {
      sm: "px-3 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base"
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          segmentedControlVariants({ size, variant, fullWidth }),
          disabled && "opacity-50 pointer-events-none",
          className
        ),
        role: "radiogroup",
        ...props,
        children: options.map((option) => {
          const isActive = currentValue === option.value;
          const isDisabled = option.disabled || disabled;
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": isActive,
              disabled: isDisabled,
              className: cn(
                "flex items-center justify-center gap-2 font-medium transition-all duration-[var(--motion-duration-fast)]",
                "rounded-md",
                sizeClasses2[size],
                isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                isDisabled && "pointer-events-none opacity-50",
                fullWidth && "flex-1"
              ),
              onClick: () => handleOptionClick(option.value, isDisabled),
              children: [
                option.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-4 w-4", children: option.icon }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: option.label })
              ]
            },
            option.value
          );
        })
      }
    );
  }
);
SegmentedControl.displayName = "SegmentedControl";
var SegmentedControlItem = React4__namespace.forwardRef(
  ({
    className,
    active = false,
    size = "md",
    icon,
    children,
    ...props
  }, ref) => {
    const sizeClasses2 = {
      sm: "px-3 py-1 text-xs h-8",
      md: "px-4 py-2 text-sm h-10",
      lg: "px-6 py-3 text-base h-12"
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        ref,
        type: "button",
        className: cn(
          "flex items-center justify-center gap-2 font-medium transition-all duration-[var(--motion-duration-fast)]",
          "rounded-md",
          sizeClasses2[size],
          active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
          className
        ),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-4 w-4", children: icon }),
          children
        ]
      }
    );
  }
);
SegmentedControlItem.displayName = "SegmentedControlItem";
var STAGGER_DELAY_SECONDS = 0.1;
function QuickActions({
  onNewPost,
  onViewPosts,
  onViewStats,
  onSettings
}) {
  const actions = [
    {
      icon: /* @__PURE__ */ jsxRuntime.jsx(Plus__default.default, { className: "w-5 h-5" }),
      label: "Novo Post",
      description: "Criar novo artigo",
      color: "from-cyan-500 to-blue-500",
      onClick: onNewPost
    },
    {
      icon: /* @__PURE__ */ jsxRuntime.jsx(FileText__default.default, { className: "w-5 h-5" }),
      label: "Meus Posts",
      description: "Ver todos os posts",
      color: "from-purple-500 to-pink-500",
      onClick: onViewPosts
    },
    {
      icon: /* @__PURE__ */ jsxRuntime.jsx(BarChart__default.default, { className: "w-5 h-5" }),
      label: "Estat\xEDsticas",
      description: "An\xE1lise e m\xE9tricas",
      color: "from-orange-500 to-red-500",
      onClick: onViewStats
    },
    {
      icon: /* @__PURE__ */ jsxRuntime.jsx(Settings__default.default, { className: "w-5 h-5" }),
      label: "Configura\xE7\xF5es",
      description: "Ajustes do blog",
      color: "from-green-500 to-emerald-500",
      onClick: onSettings
    }
  ];
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { role: "region", "aria-labelledby": "quick-actions-heading", children: [
    /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { id: "quick-actions-heading", children: "A\xE7\xF5es R\xE1pidas" }) }),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-2 gap-3", children: actions.map((action, index) => /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: index * STAGGER_DELAY_SECONDS },
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            onClick: action.onClick,
            variant: "outline",
            className: "w-full h-auto p-4 flex flex-col items-start gap-2 hover:border-cyan-400/50 dark:hover:bg-cyan-400/5",
            "aria-label": `${action.label}: ${action.description}`,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: `p-2 rounded-lg bg-linear-to-br ${action.color} text-white`,
                  "aria-hidden": "true",
                  children: action.icon
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-semibold text-sm", children: action.label }),
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: action.description })
              ] })
            ]
          }
        )
      },
      action.label
    )) }) })
  ] });
}
function AnalyticsOverview({ className }) {
  const [metrics, setMetrics] = React4.useState([]);
  const [isLoading, setIsLoading] = React4.useState(true);
  React4.useEffect(() => {
    const loadStats = async () => {
      try {
        setIsLoading(true);
        const stats = {
          totalPosts: 42,
          totalViews: 1250,
          totalLikes: 89,
          totalComments: 23
        };
        const newMetrics = [
          {
            title: "Posts Totais",
            value: stats.totalPosts.toString(),
            change: "+0.0%",
            trend: "up",
            icon: TrendingUp__default.default,
            color: "text-blue-500"
          },
          {
            title: "Visualiza\xE7\xF5es Totais",
            value: stats.totalViews.toLocaleString("pt-BR"),
            change: "+0.0%",
            trend: "up",
            icon: Eye__default.default,
            color: "text-cyan-500"
          },
          {
            title: "Curtidas",
            value: stats.totalLikes.toLocaleString("pt-BR"),
            change: "+0.0%",
            trend: "up",
            icon: Heart__default.default,
            color: "text-pink-500"
          },
          {
            title: "Coment\xE1rios",
            value: stats.totalComments.toLocaleString("pt-BR"),
            change: "+0.0%",
            trend: "up",
            icon: MessageSquare__default.default,
            color: "text-orange-500"
          }
        ];
        setMetrics(newMetrics);
      } catch (error) {
        console.error("Erro ao carregar estat\xEDsticas:", error);
        setMetrics([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadStats();
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className
        ),
        children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntime.jsxs(
          Card,
          {
            className: "dark:bg-black/30 dark:border-cyan-400/20 animate-pulse",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 bg-muted rounded w-24" }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 bg-muted rounded" })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 bg-muted rounded w-16 mb-2" }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-3 bg-muted rounded w-20" })
              ] })
            ]
          },
          i
        ))
      }
    );
  }
  if (metrics.length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(Card, { className: "dark:bg-black/30 dark:border-cyan-400/20", children: /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: "p-6 text-center text-muted-foreground", children: "Nenhum dado dispon\xEDvel" }) })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      ),
      children: metrics.map((metric, index) => {
        const Icon = metric.icon;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          Card,
          {
            className: "dark:bg-black/30 dark:border-cyan-400/20 hover:shadow-lg transition-shadow",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: metric.title }),
                /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: cn("h-4 w-4", metric.color) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-2xl font-bold dark:text-gray-100", children: metric.value }),
                /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "span",
                    {
                      className: cn(
                        "font-medium",
                        metric.trend === "up" ? "text-green-500" : "text-red-500"
                      ),
                      children: metric.change
                    }
                  ),
                  " ",
                  "vs per\xEDodo anterior"
                ] })
              ] })
            ]
          },
          index
        );
      })
    }
  );
}
var alertVariants = classVarianceAuthority.cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-status-success-base/50 bg-status-success-background text-status-success-text-on-background dark:border-status-success-base dark:text-status-success-text-on-background [&>svg]:text-status-success-text-on-background",
        warning: "border-status-warning-base/50 bg-status-warning-background text-status-warning-text-on-background dark:border-status-warning-base dark:text-status-warning-text-on-background [&>svg]:text-status-warning-text-on-background",
        info: "border-status-info-base/50 bg-status-info-background text-status-info-text-on-background dark:border-status-info-base dark:text-status-info-text-on-background [&>svg]:text-status-info-text-on-background"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React4__namespace.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";
var AlertDialogPortal = AlertDialogPrimitive__namespace.Portal;
var AlertDialogOverlay = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
var AlertDialogContent = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
var AlertDialogTitle = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
var AlertDialogDescription = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
var AlertDialogAction = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
var AlertDialogCancel = React4__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    /**
     * Variantes de estilo
     * Cada variante define aparência diferente do badge
     */
    variants: {
      variant: {
        /** Badge primário - cor primária com borda transparente */
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        /** Badge secundário - cor secundária */
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        /** Badge destrutivo - para status negativos/erros */
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        /** Badge outline - apenas borda, fundo transparente */
        outline: "text-foreground"
      }
    },
    /**
     * Variante padrão aplicada quando prop não é fornecida
     */
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Progress = React4__namespace.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ProgressPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      ProgressPrimitive__namespace.Indicator,
      {
        className: cn("h-full w-full flex-1 transition-all", "bg-primary"),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = "Progress";
var Toaster = React4__namespace.forwardRef((props, ref) => {
  const { theme = "system" } = nextThemes.useTheme();
  return React4__namespace.createElement(
    sonner.Toaster,
    {
      ref,
      theme,
      className: "toaster group",
      icons: {
        success: React4__namespace.createElement(lucideReact.Check, { className: "h-4 w-4" }),
        info: React4__namespace.createElement(lucideReact.Info, { className: "h-4 w-4" }),
        warning: React4__namespace.createElement(lucideReact.AlertTriangle, { className: "h-4 w-4" }),
        error: React4__namespace.createElement(lucideReact.Octagon, { className: "h-4 w-4" }),
        loading: React4__namespace.createElement(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" })
      },
      toastOptions: {
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border shadow-lg",
            "dark:group-[.toaster]:bg-background dark:group-[.toaster]:border-border"
          ),
          title: "dark:text-foreground",
          description: "group-[.toast]:text-muted-foreground dark:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: "dark:bg-status-error-background dark:border-status-error-border",
          success: "dark:bg-status-success-background dark:border-status-success-border"
        }
      },
      ...props
    }
  );
});
Toaster.displayName = "Toaster";
var spinnerVariants = classVarianceAuthority.cva(
  "animate-spin text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        primary: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
        success: "text-emerald-600 dark:text-emerald-500",
        warning: "text-amber-600 dark:text-amber-500",
        glow: "text-primary dark:text-cyan-400",
        pulse: "animate-pulse",
        dots: "animate-bounce"
      },
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
        "2xl": "h-12 w-12",
        "3xl": "h-16 w-16"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var speedClasses = {
  slow: "animate-spin-slow",
  normal: "animate-spin",
  fast: "animate-spin-fast"
};
var Spinner = React4__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    label = "Carregando...",
    showLabel = false,
    labelPosition = "bottom",
    icon,
    speed = "normal",
    ...props
  }, ref) => {
    const IconComponent = icon || /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: spinnerVariants({ variant, size }) });
    const animationClass = variant === "pulse" ? "animate-pulse" : variant === "dots" ? "animate-bounce" : speedClasses[speed];
    const layoutClasses = {
      top: "flex-col-reverse",
      bottom: "flex-col",
      left: "flex-row-reverse",
      right: "flex-row"
    }[labelPosition];
    const spacingClasses5 = {
      top: "gap-1",
      bottom: "gap-1",
      left: "gap-2",
      right: "gap-2"
    }[labelPosition];
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          "inline-flex items-center justify-center",
          layoutClasses,
          spacingClasses5,
          className
        ),
        role: "status",
        "aria-label": label,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(animationClass), children: IconComponent }),
          showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
            "text-sm text-muted-foreground",
            (labelPosition === "top" || labelPosition === "bottom") && "text-center",
            variant === "glow" && "text-primary dark:text-cyan-400"
          ), children: label }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: label })
        ]
      }
    );
  }
);
Spinner.displayName = "Spinner";
var SpinnerOverlay = React4__namespace.forwardRef(
  ({
    className,
    fullscreen = false,
    overlayColor = "rgba(0, 0, 0, 0.5)",
    opacity = 0.5,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center",
          fullscreen ? "fixed inset-0 z-50" : "absolute inset-0 z-10",
          className
        ),
        style: {
          backgroundColor: overlayColor.replace(/[\d.]+\)$/, `${opacity})`)
        },
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-background rounded-lg p-4 shadow-lg", children: /* @__PURE__ */ jsxRuntime.jsx(Spinner, { ...props, showLabel: true }) })
      }
    );
  }
);
SpinnerOverlay.displayName = "SpinnerOverlay";
var dotSizeClasses = {
  sm: "h-1 w-1",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
var DotsSpinner = React4__namespace.forwardRef(
  ({
    className,
    count = 3,
    size = "md",
    color,
    label,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1", className),
        role: "status",
        "aria-label": label || "Carregando...",
        ...props,
        children: [
          Array.from({ length: count }, (_, index) => /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: cn(
                "rounded-full bg-current",
                dotSizeClasses[size],
                "animate-bounce"
              ),
              style: {
                color: color || "hsl(var(--muted-foreground))",
                animationDelay: `${index * 0.1}s`,
                animationDuration: "0.6s"
              }
            },
            index
          )),
          label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-2 text-sm text-muted-foreground", children: label })
        ]
      }
    );
  }
);
DotsSpinner.displayName = "DotsSpinner";
var pulseSizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20"
};
var PulseSpinner = React4__namespace.forwardRef(
  ({
    className,
    rings = 3,
    size = "md",
    color,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("relative flex items-center justify-center", className),
        ...props,
        children: Array.from({ length: rings }, (_, index) => /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "absolute rounded-full border-2 border-current opacity-0",
              pulseSizeClasses[size]
            ),
            style: {
              color: color || "hsl(var(--primary))",
              animation: `ping ${1.5 + index * 0.3}s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${index * 0.2}s`
            }
          },
          index
        ))
      }
    );
  }
);
PulseSpinner.displayName = "PulseSpinner";
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
var KPI = React4__namespace.forwardRef(
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
    const TrendIcon = trend === "up" ? TrendingUp__default.default : trend === "down" ? TrendingDown__default.default : Minus__default.default;
    const ArrowIcon = trend === "up" ? ArrowUp__default.default : trend === "down" ? ArrowDown__default.default : null;
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
var KPIGrid = React4__namespace.forwardRef(
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
var KPIChart = React4__namespace.forwardRef(
  ({
    className,
    chart,
    chartPosition = "bottom",
    // children, // TODO: implementar children content
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
var EmptyState = React4__namespace.forwardRef(
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
var EmptyStateIllustrated = React4__namespace.forwardRef(
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
var variantIcons = {
  success: Check2__default.default,
  error: AlertCircle__default.default,
  warning: AlertTriangle2__default.default,
  info: Info2__default.default,
  default: Bell__default.default
};
var notificationVariants = classVarianceAuthority.cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        success: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
        error: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
        warning: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
        info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Notification = React4__namespace.forwardRef(
  ({
    className,
    variant = "default",
    title,
    description,
    dismissible = true,
    onDismiss,
    actions,
    icon,
    timestamp,
    autoClose = false,
    autoCloseDelay = 5e3,
    toast = false,
    ...props
  }, ref) => {
    const [visible, setVisible] = React4__namespace.useState(true);
    React4__namespace.useEffect(() => {
      if (autoClose && onDismiss) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);
        return () => clearTimeout(timer);
      }
    }, [autoClose, autoCloseDelay, onDismiss]);
    const handleClose = () => {
      setVisible(false);
      onDismiss?.();
    };
    let IconComponent = icon;
    if (!IconComponent) {
      const VariantIcon = variantIcons[variant];
      IconComponent = /* @__PURE__ */ jsxRuntime.jsx(VariantIcon, { className: "h-5 w-5" });
    }
    if (!visible) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          notificationVariants({ variant }),
          toast && "animate-in slide-in-from-bottom-full",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
            "flex-shrink-0",
            variant === "success" && "text-emerald-600 dark:text-emerald-400",
            variant === "error" && "text-red-600 dark:text-red-400",
            variant === "warning" && "text-amber-600 dark:text-amber-400",
            variant === "info" && "text-blue-600 dark:text-blue-400",
            variant === "default" && "text-muted-foreground"
          ), children: IconComponent }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-1", children: [
            title && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium", children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm opacity-90", children: description }),
            timestamp && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs opacity-70", children: timestamp })
          ] }),
          actions && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-shrink-0 gap-2", children: actions }),
          dismissible && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: handleClose,
              className: cn(
                "absolute right-2 top-2 rounded-md p-1",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              ),
              children: /* @__PURE__ */ jsxRuntime.jsx(X2__default.default, { className: "h-4 w-4 opacity-60 hover:opacity-100" })
            }
          )
        ]
      }
    );
  }
);
Notification.displayName = "Notification";
var positionClasses = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2"
};
var spacingClasses4 = {
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
};
var NotificationGroup = React4__namespace.forwardRef(
  ({
    className,
    children,
    position = "top-right",
    spacing = "md",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "fixed z-50 flex max-h-screen w-full flex-col-reverse p-4",
          "md:max-w-[420px]",
          positionClasses[position],
          spacingClasses4[spacing],
          className
        ),
        ...props,
        children
      }
    );
  }
);
NotificationGroup.displayName = "NotificationGroup";
var NotificationToast = React4__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Notification,
      {
        ref,
        toast: true,
        ...props
      }
    );
  }
);
NotificationToast.displayName = "NotificationToast";
function RecentPostsList({
  posts = [],
  onEditPost,
  onDeletePost,
  onViewPost,
  maxPosts = 5,
  className
}) {
  const displayedPosts = posts.slice(0, maxPosts);
  if (displayedPosts.length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Posts Recentes" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-muted-foreground", children: "Nenhum post encontrado." }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: "Posts Recentes" }) }),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-4", children: displayedPosts.map((post, index) => /* @__PURE__ */ jsxRuntime.jsxs(
      framerMotion.motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1 },
        className: "flex items-start space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors",
        children: [
          post.coverImage && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-16 h-16 rounded-lg overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(
            "img",
            {
              src: post.coverImage,
              alt: post.title,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-medium line-clamp-1", children: post.title }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-1", children: post.excerpt }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntime.jsx(Calendar__default.default, { className: "w-3 h-3 mr-1" }),
                new Date(post.publishedAt).toLocaleDateString("pt-BR")
              ] }),
              post.tags.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
                post.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag)),
                post.tags.length > 2 && /* @__PURE__ */ jsxRuntime.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                  "+",
                  post.tags.length - 2
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
            onViewPost && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => onViewPost(post),
                className: "h-8 w-8 p-0",
                children: /* @__PURE__ */ jsxRuntime.jsx(Eye__default.default, { className: "w-4 h-4" })
              }
            ),
            onEditPost && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => onEditPost(post),
                className: "h-8 w-8 p-0",
                children: /* @__PURE__ */ jsxRuntime.jsx(Edit__default.default, { className: "w-4 h-4" })
              }
            ),
            onDeletePost && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => onDeletePost(post.id),
                className: "h-8 w-8 p-0 text-destructive hover:text-destructive",
                children: /* @__PURE__ */ jsxRuntime.jsx(Trash2__default.default, { className: "w-4 h-4" })
              }
            )
          ] })
        ]
      },
      post.id
    )) }) })
  ] });
}
function HelpCenter() {
  const resources = [
    {
      icon: BookOpen__default.default,
      title: "Documenta\xE7\xE3o",
      description: "Guias completos de uso",
      link: "/docs"
    },
    {
      icon: Video__default.default,
      title: "Tutoriais",
      description: "V\xEDdeos passo a passo",
      link: "/tutorials"
    },
    {
      icon: MessageCircle__default.default,
      title: "Suporte",
      description: "Fale com nossa equipe",
      link: "/contato"
    }
  ];
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className: "dark:bg-black/30 dark:border-purple-400/20", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(CardTitle, { className: "flex items-center gap-2 dark:text-purple-200", children: [
        /* @__PURE__ */ jsxRuntime.jsx(HelpCircle__default.default, { className: "h-5 w-5" }),
        "Central de Ajuda"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { children: "Precisa de ajuda? Acesse nossos recursos" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: "space-y-3", children: resources.map((resource, index) => {
      const Icon = resource.icon;
      return /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          asChild: true,
          variant: "outline",
          className: "w-full justify-between dark:border-purple-400/20 dark:hover:bg-purple-400/10",
          children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: resource.link, className: "flex items-center gap-3 flex-1", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium text-sm", children: resource.title }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-muted-foreground", children: resource.description })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(ExternalLink__default.default, { className: "h-4 w-4 ml-auto" })
          ] })
        },
        index
      );
    }) })
  ] });
}
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

exports.AnalyticsOverview = AnalyticsOverview;
exports.HelpCenter = HelpCenter;
exports.QuickActions = QuickActions;
exports.QuickStats = QuickStats;
exports.RecentPostsList = RecentPostsList;
exports.StatsCards = StatsCards;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map