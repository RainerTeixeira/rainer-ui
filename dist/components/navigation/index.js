'use strict';

var lucideReact = require('lucide-react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var React8 = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var reactDialog = require('@radix-ui/react-dialog');
var cmdk = require('cmdk');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var TabsPrimitive = require('@radix-ui/react-tabs');
var ChevronLeft = require('lucide-react/dist/esm/icons/chevron-left');
var ChevronRight2 = require('lucide-react/dist/esm/icons/chevron-right');
var MoreHorizontal = require('lucide-react/dist/esm/icons/more-horizontal');
var LogOut = require('lucide-react/dist/esm/icons/log-out');
var Menu2 = require('lucide-react/dist/esm/icons/menu');
var Settings = require('lucide-react/dist/esm/icons/settings');
var User = require('lucide-react/dist/esm/icons/user');
var X2 = require('lucide-react/dist/esm/icons/x');
var MoreVertical = require('lucide-react/dist/esm/icons/more-vertical');
var ArrowLeft = require('lucide-react/dist/esm/icons/arrow-left');
var Bell = require('lucide-react/dist/esm/icons/bell');
var Search2 = require('lucide-react/dist/esm/icons/search');

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

var React8__namespace = /*#__PURE__*/_interopNamespace(React8);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var ChevronLeft__default = /*#__PURE__*/_interopDefault(ChevronLeft);
var ChevronRight2__default = /*#__PURE__*/_interopDefault(ChevronRight2);
var MoreHorizontal__default = /*#__PURE__*/_interopDefault(MoreHorizontal);
var LogOut__default = /*#__PURE__*/_interopDefault(LogOut);
var Menu2__default = /*#__PURE__*/_interopDefault(Menu2);
var Settings__default = /*#__PURE__*/_interopDefault(Settings);
var User__default = /*#__PURE__*/_interopDefault(User);
var X2__default = /*#__PURE__*/_interopDefault(X2);
var MoreVertical__default = /*#__PURE__*/_interopDefault(MoreVertical);
var ArrowLeft__default = /*#__PURE__*/_interopDefault(ArrowLeft);
var Bell__default = /*#__PURE__*/_interopDefault(Bell);
var Search2__default = /*#__PURE__*/_interopDefault(Search2);

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
var ButtonComponent = React8__namespace.forwardRef(
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
      const child = React8__namespace.Children.only(children);
      return /* @__PURE__ */ jsxRuntime.jsx(
        reactSlot.Slot,
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
          children: loading ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex items-center gap-2", children: [
            loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            child
          ] }) : child
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
          loading && (loadingIcon || /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" })),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "", value);
var AuthStorage = class {
  static setItem(key, value) {
    if (!this.isClient) return;
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn("Failed to save to localStorage:", error);
    }
  }
  static getItem(key) {
    if (!this.isClient) return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn("Failed to read from localStorage:", error);
      return null;
    }
  }
  static removeItem(key) {
    if (!this.isClient) return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn("Failed to remove from localStorage:", error);
    }
  }
  static setUser(user, key) {
    this.setItem(key, JSON.stringify(user));
  }
  static getUser(key) {
    const data = this.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      this.removeItem(key);
      return null;
    }
  }
  static removeUser(key) {
    this.removeItem(key);
  }
};
__publicField(AuthStorage, "isClient", typeof window !== "undefined");
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollTo(target, options) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    console.warn(`Elemento n\xE3o encontrado: ${target}`);
    return;
  }
  const shouldAnimate = !prefersReducedMotion();
  element.scrollIntoView({
    behavior: shouldAnimate ? "smooth" : "auto",
    block: "start",
    inline: "nearest",
    ...options
  });
}
function scrollToTop() {
  const shouldAnimate = !prefersReducedMotion();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function scrollToPosition(x, y, smooth = true) {
  const shouldAnimate = smooth && !prefersReducedMotion();
  window.scrollTo({
    top: y,
    left: x,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function onReducedMotionChange(callback) {
  if (typeof window === "undefined") {
    return () => {
    };
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = (event) => {
    callback(event.matches);
  };
  handler(mediaQuery);
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }
  if (mediaQuery.addListener) {
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }
  return () => {
  };
}
function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = React8.useState(false);
  React8.useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const cleanup = onReducedMotionChange((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = React8.useCallback(
    (target, options) => {
      smoothScrollTo(target, options);
    },
    []
  );
  const toTop = React8.useCallback(() => {
    scrollToTop();
  }, []);
  const toPosition = React8.useCallback((x, y) => {
    scrollToPosition(x, y);
  }, []);
  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion
  };
}
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = React8.useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = React8.useState(false);
  const [scrollDirection, setScrollDirection] = React8.useState(null);
  React8.useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      setScrollPosition({ x: currentScrollX, y: currentScrollY });
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  return {
    scrollPosition,
    isScrolling,
    scrollDirection,
    isScrolledDown: scrollPosition.y > 0,
    scrollPercentage: Math.round(
      scrollPosition.y / (document.documentElement.scrollHeight - window.innerHeight) * 100
    )
  };
}
var SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const { scrollToTop: scrollToTop2, reducedMotion } = useSmoothScroll();
  const { scrollPosition } = useScrollPosition();
  const isButtonVisible = scrollPosition.y > SCROLL_THRESHOLD_PX;
  const handleClick = () => {
    scrollToTop2();
  };
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      onClick: handleClick,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ jsxRuntime.jsx(BackToTopButton, {});
}
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React8__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
  AccordionPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all duration-200 ease-in-out hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.ChevronDown,
        {
          className: "h-4 w-4 shrink-0 transition-transform duration-150"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React8__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var Collapsible = CollapsiblePrimitive__namespace.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive__namespace.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive__namespace.CollapsibleContent;

// src/lib/constants.ts
var Z_INDEX = {
  BACKDROP: "999",
  MODAL: "1000",
  DROPDOWN: "1050"};
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out",
    COLOR: "transition-colors duration-200 ease-in-out",
    TRANSFORM: "transition-transform duration-200 ease-in-out"}};
var Dialog = reactDialog.Root;
var DialogPortal = reactDialog.Portal;
var DialogOverlay = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDialog.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      Z_INDEX.BACKDROP,
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = reactDialog.Overlay.displayName;
var DialogContent = React8__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    reactDialog.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg rounded-lg sm:rounded-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        MOTION.TRANSITION.DEFAULT,
        Z_INDEX.MODAL,
        "dark:bg-black/95 dark:border-cyan-400/30 dark:shadow-cyan-500/20",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(reactDialog.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground dark:focus:ring-cyan-400", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = reactDialog.Content.displayName;
var DialogTitle = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDialog.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight dark:text-cyan-200 dark:font-mono",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = reactDialog.Title.displayName;
var DialogDescription = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDialog.Description,
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground dark:text-gray-400",
      className
    ),
    ...props
  }
));
DialogDescription.displayName = reactDialog.Description.displayName;
var Command = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = cmdk.Command.displayName;
var CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxRuntime.jsxs(DialogContent, { className: "overflow-hidden p-0", children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { className: "sr-only", children: "Buscar artigos" }),
    /* @__PURE__ */ jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
  ] }) });
};
var CommandInput = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center border-b px-3", "data-cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = cmdk.Command.Input.displayName;
var CommandList = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = cmdk.Command.List.displayName;
var CommandEmpty = React8__namespace.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
var CommandGroup = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = cmdk.Command.Group.displayName;
var CommandSeparator = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
var CommandItem = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";
var NavigationMenu = React8__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative flex max-w-max flex-1 items-center justify-center",
      Z_INDEX.DROPDOWN,
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive__namespace.Root.displayName;
var NavigationMenuList = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive__namespace.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive__namespace.Item;
var navigationMenuTriggerStyle = classVarianceAuthority.cva(
  cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium",
    MOTION.TRANSITION.COLOR,
    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
  )
);
var NavigationMenuTrigger = React8__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.ChevronDown,
        {
          className: cn(
            "relative top-px ml-1 h-3 w-3 group-data-[state=open]:rotate-180",
            MOTION.TRANSITION.TRANSFORM
          ),
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive__namespace.Trigger.displayName;
var NavigationMenuContent = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive__namespace.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive__namespace.Link;
var NavigationMenuViewport = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive__namespace.Viewport.displayName;
var NavigationMenuIndicator = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Indicator,
  {
    ref,
    className: cn(
      "top-full flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      "z-[1]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive__namespace.Indicator.displayName;
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5",
      "text-sm font-medium ring-offset-background transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React8__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var menuVariants = classVarianceAuthority.cva(
  "min-w-[200px] rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
  {
    variants: {
      variant: {
        default: "border-border",
        glass: "glass border-border",
        neon: "neon-border dark:shadow-glow-cyan"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Menu = React8__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    items,
    trigger,
    open: controlledOpen,
    onOpenChange,
    position = "bottom-left",
    closeOnClick = true,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = React8__namespace.useState(false);
    const [openSubmenus, setOpenSubmenus] = React8__namespace.useState(/* @__PURE__ */ new Set());
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const containerRef = React8__namespace.useRef(null);
    const handleOpenChange = React8__namespace.useCallback((newOpen) => {
      if (controlledOpen === void 0) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [controlledOpen, onOpenChange]);
    const toggleSubmenu = React8__namespace.useCallback((itemId) => {
      setOpenSubmenus((prev) => {
        const next = new Set(prev);
        if (next.has(itemId)) {
          next.delete(itemId);
        } else {
          next.add(itemId);
        }
        return next;
      });
    }, []);
    React8__namespace.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          handleOpenChange(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleOpenChange]);
    const positionClasses = {
      "bottom-left": "top-full left-0 mt-1",
      "bottom-right": "top-full right-0 mt-1",
      "top-left": "bottom-full left-0 mb-1",
      "top-right": "bottom-full right-0 mb-1"
    };
    const renderItem = (item, level = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isSubmenuOpen = openSubmenus.has(item.id);
      if (item.separator) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "my-1 h-px bg-border" }, item.id);
      }
      if (hasChildren) {
        return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              className: cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground",
                item.disabled && "pointer-events-none opacity-50",
                item.active && "bg-accent text-accent-foreground",
                level > 0 && "pl-6"
              ),
              onClick: () => toggleSubmenu(item.id),
              disabled: item.disabled,
              children: [
                item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1", children: item.label }),
                item.badge && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  lucideReact.ChevronRight,
                  {
                    className: cn(
                      "h-4 w-4 transition-transform duration-[var(--motion-duration-fast)]",
                      isSubmenuOpen && "rotate-90"
                    )
                  }
                )
              ]
            }
          ),
          isSubmenuOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute left-full top-0 ml-1 min-w-[200px] rounded-md border bg-popover p-1 shadow-lg", children: item.children.map((child) => renderItem(child, level + 1)) })
        ] }, item.id);
      }
      const content = /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          className: cn(
            "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
            "transition-colors duration-[var(--motion-duration-fast)]",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            item.disabled && "pointer-events-none opacity-50",
            item.active && "bg-accent text-accent-foreground",
            level > 0 && "pl-6"
          ),
          onClick: () => {
            if (!item.disabled) {
              item.onClick?.();
              if (closeOnClick) {
                handleOpenChange(false);
              }
            }
          },
          disabled: item.disabled,
          children: [
            item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 text-left", children: item.label }),
            item.badge && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
          ]
        }
      );
      if (item.href) {
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "a",
          {
            href: item.href,
            className: cn(
              "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
              "transition-colors duration-[var(--motion-duration-fast)]",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:bg-accent focus:text-accent-foreground",
              item.disabled && "pointer-events-none opacity-50",
              item.active && "bg-accent text-accent-foreground",
              level > 0 && "pl-6"
            ),
            onClick: () => {
              if (closeOnClick) {
                handleOpenChange(false);
              }
            },
            children: [
              item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1", children: item.label }),
              item.badge && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
            ]
          },
          item.id
        );
      }
      return content;
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("relative inline-block", className),
        ...props,
        children: [
          trigger && /* @__PURE__ */ jsxRuntime.jsx("div", { onClick: () => handleOpenChange(!isOpen), children: trigger }),
          isOpen && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              ref,
              className: cn(
                menuVariants({ variant, size }),
                "absolute z-50 animate-in fade-in-0 zoom-in-95",
                positionClasses[position]
              ),
              children: items.map((item) => renderItem(item))
            }
          )
        ]
      }
    );
  }
);
Menu.displayName = "Menu";
var MenuBar = React8__namespace.forwardRef(
  ({
    className,
    menus,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center gap-1 rounded-md border bg-background p-1",
          className
        ),
        ...props,
        children: menus.map((menu) => /* @__PURE__ */ jsxRuntime.jsx(
          Menu,
          {
            items: menu.items,
            trigger: /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "ghost", size: "sm", children: [
              menu.label,
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "ml-1 h-3 w-3" })
            ] })
          },
          menu.id
        ))
      }
    );
  }
);
MenuBar.displayName = "MenuBar";
var NavigationContextMenu = React8__namespace.forwardRef(
  ({
    className,
    children,
    items,
    ...props
  }, ref) => {
    const [open, setOpen] = React8__namespace.useState(false);
    const [position, setPosition] = React8__namespace.useState({ x: 0, y: 0 });
    const containerRef = React8__namespace.useRef(null);
    const handleContextMenu = React8__namespace.useCallback((event) => {
      event.preventDefault();
      setPosition({ x: event.clientX, y: event.clientY });
      setOpen(true);
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("relative inline-block", className),
        onContextMenu: handleContextMenu,
        children: [
          children,
          open && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              ref,
              className: cn(
                menuVariants(),
                "fixed z-50 animate-in fade-in-0 zoom-in-95"
              ),
              style: {
                left: position.x,
                top: position.y
              },
              ...props,
              children: items.map((item) => {
                if (item.separator) {
                  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "my-1 h-px bg-border" }, item.id);
                }
                return /* @__PURE__ */ jsxRuntime.jsxs(
                  "button",
                  {
                    className: cn(
                      "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                      "transition-colors duration-[var(--motion-duration-fast)]",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground",
                      item.disabled && "pointer-events-none opacity-50",
                      item.active && "bg-accent text-accent-foreground"
                    ),
                    onClick: () => {
                      if (!item.disabled) {
                        item.onClick?.();
                        setOpen(false);
                      }
                    },
                    disabled: item.disabled,
                    children: [
                      item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 text-left", children: item.label }),
                      item.badge && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
                    ]
                  },
                  item.id
                );
              })
            }
          )
        ]
      }
    );
  }
);
NavigationContextMenu.displayName = "NavigationContextMenu";
var paginationVariants = classVarianceAuthority.cva(
  "flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      },
      variant: {
        default: "",
        compact: "gap-0.5",
        spaced: "gap-2"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
function generateRange(page, totalPages, siblingCount) {
  const range = [];
  range.push(1);
  let start = Math.max(2, page - siblingCount);
  let end = Math.min(totalPages - 1, page + siblingCount);
  if (start <= 3) {
    end = Math.min(totalPages - 1, 2 + siblingCount * 2);
  }
  if (end >= totalPages - 2) {
    start = Math.max(2, totalPages - 2 - siblingCount * 2);
  }
  if (start > 2) {
    range.push("...");
  }
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  if (end < totalPages - 1) {
    range.push("...");
  }
  if (totalPages > 1) {
    range.push(totalPages);
  }
  return range;
}
var Pagination = React8__namespace.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    page,
    totalPages,
    onChange,
    onPrevious,
    onNext,
    showFirst = true,
    showLast = true,
    showInfo = false,
    disabled = false,
    siblingCount = 1,
    ...props
  }, ref) => {
    const pages = React8__namespace.useMemo(() => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      return generateRange(page, totalPages, siblingCount);
    }, [page, totalPages, siblingCount]);
    const handlePrevious = React8__namespace.useCallback(() => {
      if (page > 1) {
        onPrevious?.();
        onChange?.(page - 1);
      }
    }, [page, onChange, onPrevious]);
    const handleNext = React8__namespace.useCallback(() => {
      if (page < totalPages) {
        onNext?.();
        onChange?.(page + 1);
      }
    }, [page, totalPages, onChange, onNext]);
    const handlePageClick = React8__namespace.useCallback((page2) => {
      onChange?.(page2);
    }, [onChange]);
    const handleFirst = React8__namespace.useCallback(() => {
      onChange?.(1);
    }, [onChange]);
    const handleLast = React8__namespace.useCallback(() => {
      onChange?.(totalPages);
    }, [onChange, totalPages]);
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12"
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "nav",
      {
        ref,
        className: cn(paginationVariants({ size, variant }), className),
        ...props,
        children: [
          showFirst && totalPages > 1 && /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleFirst,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Primeira p\xE1gina" }),
                /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft__default.default, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft__default.default, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handlePrevious,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "P\xE1gina anterior" }),
                /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft__default.default, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-1", children: pages.map((page2, index) => {
            if (page2 === "...") {
              return /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "flex items-center justify-center",
                    sizeClasses[size]
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(MoreHorizontal__default.default, { className: "h-4 w-4" })
                },
                `ellipsis-${index}`
              );
            }
            return /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: page2 === page2 ? "default" : "outline",
                size: "sm",
                className: cn(sizeClasses[size], "p-0"),
                onClick: () => handlePageClick(page2),
                disabled,
                children: page2
              },
              page2
            );
          }) }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleNext,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Pr\xF3xima p\xE1gina" }),
                /* @__PURE__ */ jsxRuntime.jsx(ChevronRight2__default.default, { className: "h-4 w-4" })
              ]
            }
          ),
          showLast && totalPages > 1 && /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleLast,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "\xDAltima p\xE1gina" }),
                /* @__PURE__ */ jsxRuntime.jsx(ChevronRight2__default.default, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntime.jsx(ChevronRight2__default.default, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          showInfo && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "ml-4 text-sm text-muted-foreground", children: [
            "P\xE1gina ",
            page,
            " de ",
            totalPages
          ] })
        ]
      }
    );
  }
);
Pagination.displayName = "Pagination";
var PaginationInfo = React8__namespace.forwardRef(
  ({
    className,
    page,
    totalPages,
    totalPagesItems,
    itemsPerPage,
    ...props
  }, ref) => {
    const startItem = totalPagesItems ? (page - 1) * (itemsPerPage || 10) + 1 : 0;
    const endItem = totalPagesItems ? Math.min(page * (itemsPerPage || 10), totalPagesItems) : 0;
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props,
        children: totalPagesItems ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          "Mostrando ",
          startItem,
          " a ",
          endItem,
          " de ",
          totalPagesItems,
          " itens"
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          "P\xE1gina ",
          page,
          " de ",
          totalPages
        ] })
      }
    );
  }
);
PaginationInfo.displayName = "PaginationInfo";
var PaginationCompact = React8__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Pagination,
      {
        ref,
        showFirst: false,
        showLast: false,
        showInfo: false,
        variant: "compact",
        ...props
      }
    );
  }
);
PaginationCompact.displayName = "PaginationCompact";
var stepsVariants = classVarianceAuthority.cva(
  "",
  {
    variants: {
      orientation: {
        horizontal: "flex items-center",
        vertical: "flex flex-col space-y-4"
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "md"
    }
  }
);
var stepVariants = classVarianceAuthority.cva(
  "flex items-center",
  {
    variants: {
      orientation: {
        horizontal: "flex-col",
        vertical: "flex-row items-start"
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "md"
    }
  }
);
var Steps = React8__namespace.forwardRef(
  ({
    className,
    orientation = "horizontal",
    size = "md",
    steps,
    current = 0,
    onChange,
    clickable = false,
    showConnector = true,
    ...props
  }, ref) => {
    const stepsWithStatus = React8__namespace.useMemo(() => {
      return steps.map((step, index) => {
        let status = "pending";
        if (index < current) {
          status = "completed";
        } else if (index === current) {
          status = step.status || "active";
        } else if (step.status) {
          status = step.status;
        }
        return { ...step, status };
      });
    }, [steps, current]);
    const sizeClasses = {
      sm: {
        step: "text-xs",
        icon: "h-6 w-6 text-xs",
        connector: "h-0.5"
      },
      md: {
        step: "text-sm",
        icon: "h-8 w-8 text-sm",
        connector: "h-0.5"
      },
      lg: {
        step: "text-base",
        icon: "h-10 w-10 text-base",
        connector: "h-1"
      }
    };
    const renderStep = (step, index, isLast) => {
      const isActive = index === current;
      const isCompleted = step.status === "completed";
      const isError = step.status === "error";
      const isPending = step.status === "pending";
      const isLoading = step.status === "active" && step.disabled;
      const iconClasses = cn(
        "flex items-center justify-center rounded-full border-2 font-medium transition-all duration-[var(--motion-duration-normal)]",
        sizeClasses[size].icon,
        isCompleted && "bg-primary border-primary text-primary-foreground",
        isError && "bg-destructive border-destructive text-destructive-foreground",
        isActive && !isLoading && "border-primary bg-background text-primary",
        isPending && "border-border bg-background text-muted-foreground",
        isLoading && "border-primary",
        clickable && !step.disabled && "cursor-pointer hover:border-primary/80",
        step.disabled && "opacity-50 cursor-not-allowed"
      );
      const connectorClasses = cn(
        "bg-border transition-all duration-[var(--motion-duration-normal)]",
        sizeClasses[size].connector,
        orientation === "horizontal" ? "flex-1" : "w-0.5 absolute left-4 top-8 h-full",
        isCompleted && "bg-primary",
        isError && "bg-destructive",
        !showConnector && "hidden"
      );
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: cn(
            stepVariants({ orientation, size }),
            orientation === "horizontal" && "flex-1",
            className
          ),
          children: [
            orientation === "horizontal" && index > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: connectorClasses }),
            /* @__PURE__ */ jsxRuntime.jsxs(
              "div",
              {
                className: cn(
                  "flex items-center",
                  orientation === "vertical" && "flex-row gap-4",
                  clickable && !step.disabled && "cursor-pointer",
                  step.disabled && "cursor-not-allowed"
                ),
                onClick: () => {
                  if (clickable && !step.disabled) {
                    onChange?.(index);
                    step.onClick?.();
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("relative", orientation === "vertical" && "flex-shrink-0"), children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: iconClasses, children: [
                    isCompleted && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }),
                    isLoading && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" }),
                    !isCompleted && !isLoading && (step.icon || index + 1)
                  ] }) }),
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-col",
                        orientation === "horizontal" && "items-center text-center",
                        orientation === "vertical" && "items-start",
                        sizeClasses[size].step
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsx(
                          "div",
                          {
                            className: cn(
                              "font-medium",
                              isActive && !isLoading && "text-primary",
                              isCompleted && "text-foreground",
                              isError && "text-destructive",
                              isPending && "text-muted-foreground"
                            ),
                            children: step.title
                          }
                        ),
                        step.description && /* @__PURE__ */ jsxRuntime.jsx(
                          "div",
                          {
                            className: cn(
                              "mt-1",
                              isActive && !isLoading && "text-primary",
                              isCompleted && "text-muted-foreground",
                              isError && "text-destructive",
                              isPending && "text-muted-foreground"
                            ),
                            children: step.description
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            orientation === "vertical" && !isLast && /* @__PURE__ */ jsxRuntime.jsx("div", { className: connectorClasses })
          ]
        },
        step.id
      );
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(stepsVariants({ orientation, size }), className),
        ...props,
        children: stepsWithStatus.map(
          (step, index) => renderStep(step, index, index === steps.length - 1)
        )
      }
    );
  }
);
Steps.displayName = "Steps";
var StepItem = React8__namespace.forwardRef(
  ({
    className,
    number,
    title,
    description,
    status = "pending",
    active = false,
    icon,
    ...props
  }, ref) => {
    const isCompleted = status === "completed";
    const isError = status === "error";
    const isLoading = status === "active";
    const iconClasses = cn(
      "flex items-center justify-center rounded-full border-2 font-medium transition-all duration-[var(--motion-duration-normal)] h-8 w-8 text-sm",
      isCompleted && "bg-primary border-primary text-primary-foreground",
      isError && "bg-destructive border-destructive text-destructive-foreground",
      active && !isLoading && "border-primary bg-background text-primary",
      status === "pending" && "border-border bg-background text-muted-foreground"
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-3", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: iconClasses, children: [
            isCompleted && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }),
            isLoading && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" }),
            !isCompleted && !isLoading && (icon || number)
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "text-sm font-medium",
                  active && !isLoading && "text-primary",
                  isCompleted && "text-foreground",
                  isError && "text-destructive",
                  status === "pending" && "text-muted-foreground"
                ),
                children: title
              }
            ),
            description && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: description })
          ] })
        ]
      }
    );
  }
);
StepItem.displayName = "StepItem";
var sidebarVariants = classVarianceAuthority.cva(
  "flex flex-col bg-card border-r border-border transition-all duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "bg-card",
        dark: "bg-background",
        glass: "glass",
        neon: "bg-background neon-border"
      },
      size: {
        sm: "w-48",
        md: "w-64",
        lg: "w-80",
        xl: "w-96"
      },
      position: {
        left: "left-0 top-0 h-full",
        right: "right-0 top-0 h-full",
        top: "top-0 left-0 right-0",
        bottom: "bottom-0 left-0 right-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      position: "left"
    }
  }
);
var Sidebar = React8__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    position = "left",
    collapsed = false,
    onCollapse,
    items = [],
    showToggle = false,
    overlay = false,
    open = false,
    onOpenChange,
    profile,
    footerActions,
    children,
    ...props
  }, ref) => {
    const [internalCollapsed, setInternalCollapsed] = React8__namespace.useState(collapsed);
    const [internalOpen, setInternalOpen] = React8__namespace.useState(open);
    const isCollapsed = onCollapse ? collapsed : internalCollapsed;
    const isOpen = overlay ? onOpenChange ? open : internalOpen : true;
    const handleCollapse = React8__namespace.useCallback(() => {
      if (onCollapse) {
        onCollapse(!isCollapsed);
      } else {
        setInternalCollapsed(!isCollapsed);
      }
    }, [isCollapsed, onCollapse]);
    const handleOpenChange = React8__namespace.useCallback((newOpen) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    }, [onOpenChange]);
    React8__namespace.useEffect(() => {
      if (overlay && isOpen) {
        const handleClickOutside = (event) => {
          const target = event.target;
          const sidebar = document.getElementById("rainer-sidebar");
          if (sidebar && !sidebar.contains(target)) {
            handleOpenChange(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [overlay, isOpen, handleOpenChange]);
    const sidebarClasses = cn(
      sidebarVariants({ variant, size, position }),
      overlay && "fixed z-50",
      overlay && !isOpen && "translate-x-full",
      position === "right" && !overlay && (isCollapsed ? "translate-x-full" : "translate-x-0"),
      position === "left" && !overlay && (isCollapsed ? "-translate-x-full" : "translate-x-0"),
      className
    );
    const renderMenuItem = (item, level = 0) => {
      if (item.separator) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "my-2 h-px bg-border" }, item.id);
      }
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          className: cn(
            "w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-[var(--motion-duration-fast)]",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            item.disabled && "pointer-events-none opacity-50",
            item.active && "bg-accent text-accent-foreground",
            level > 0 && "pl-6"
          ),
          onClick: () => {
            if (!item.disabled) {
              item.onClick?.();
            }
          },
          disabled: item.disabled,
          children: [
            item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-4 w-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
              "truncate",
              isCollapsed && "w-0 opacity-0"
            ), children: item.label }),
            item.badge && !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
          ]
        },
        item.id
      );
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      overlay && isOpen && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "fixed inset-0 z-40 bg-black/50",
          onClick: () => handleOpenChange(false)
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "aside",
        {
          id: "rainer-sidebar",
          ref,
          className: sidebarClasses,
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-lg font-semibold", children: "Menu" }),
              showToggle && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleCollapse,
                  className: "h-8 w-8 p-0",
                  children: isCollapsed ? /* @__PURE__ */ jsxRuntime.jsx(ChevronRight2__default.default, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft__default.default, { className: "h-4 w-4" })
                }
              ),
              overlay && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleOpenChange(false),
                  className: "h-8 w-8 p-0",
                  children: /* @__PURE__ */ jsxRuntime.jsx(X2__default.default, { className: "h-4 w-4" })
                }
              )
            ] }),
            profile && !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                className: "flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent",
                onClick: profile.onClick,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground", children: profile.avatar ? /* @__PURE__ */ jsxRuntime.jsx("img", { src: profile.avatar, alt: profile.name, className: "h-full w-full rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntime.jsx(User__default.default, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium", children: profile.name }),
                    profile.email && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs text-muted-foreground", children: profile.email })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 overflow-y-auto p-4", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: items.map((item) => renderMenuItem(item)) }),
              children
            ] }),
            (footerActions || !isCollapsed) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 border-t border-border", children: [
              !isCollapsed && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(Settings__default.default, { className: "mr-2 h-4 w-4" }),
                      "Configura\xE7\xF5es"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(LogOut__default.default, { className: "mr-2 h-4 w-4" }),
                      "Sair"
                    ]
                  }
                )
              ] }),
              isCollapsed && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntime.jsx(Settings__default.default, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntime.jsx(LogOut__default.default, { className: "h-4 w-4" }) })
              ] }),
              footerActions
            ] })
          ]
        }
      )
    ] });
  }
);
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React8__namespace.forwardRef(
  ({
    className,
    children,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React8__namespace.useCallback((event) => {
      onClick?.(event);
      window.dispatchEvent(new CustomEvent("sidebar:toggle"));
    }, [onClick]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Button,
      {
        ref,
        variant: "ghost",
        size: "sm",
        className: cn("h-8 w-8 p-0", className),
        onClick: handleClick,
        ...props,
        children: children || /* @__PURE__ */ jsxRuntime.jsx(Menu2__default.default, { className: "h-4 w-4" })
      }
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var topBarVariants = classVarianceAuthority.cva(
  "flex items-center justify-between border-b bg-background px-4 py-3",
  {
    variants: {
      variant: {
        default: "border-border bg-background",
        floating: "border-border shadow-sm rounded-lg mx-4 mt-4",
        glass: "glass border-transparent",
        neon: "neon-border bg-background dark:shadow-glow-cyan",
        transparent: "border-transparent bg-transparent"
      },
      size: {
        sm: "h-12 px-3 py-2",
        md: "h-14 px-4 py-3",
        lg: "h-16 px-6 py-4"
      },
      sticky: {
        true: "sticky top-0 z-40",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      sticky: false
    }
  }
);
var TopBar = React8__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    sticky = false,
    title,
    subtitle,
    left,
    center,
    right,
    back,
    menu,
    search,
    notifications,
    children,
    ...props
  }, ref) => {
    const renderLeft = () => {
      if (left) return left;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        back && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: back.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": back.label || "Voltar",
            children: /* @__PURE__ */ jsxRuntime.jsx(ArrowLeft__default.default, { className: "h-4 w-4" })
          }
        ),
        menu && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: menu.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": menu.label || "Menu",
            children: /* @__PURE__ */ jsxRuntime.jsx(Menu2__default.default, { className: "h-4 w-4" })
          }
        ),
        (title || subtitle) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col", children: [
          title && /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
        ] })
      ] });
    };
    const renderCenter = () => {
      if (center) return center;
      if (search) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 max-w-md mx-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Search2__default.default, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "text",
              placeholder: search.placeholder || "Buscar...",
              value: search.value,
              onChange: (e) => search.onChange?.(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  search.onSubmit?.(e.currentTarget.value);
                }
              },
              className: cn(
                "w-full h-9 pl-10 pr-4 rounded-md border border-input bg-background",
                "text-sm ring-offset-background",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )
            }
          )
        ] }) });
      }
      if (title && (back || menu)) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-semibold", children: title }) });
      }
      return null;
    };
    const renderRight = () => {
      if (right) return right;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        notifications && /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: notifications.onClick,
            className: "relative h-8 w-8 p-0",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Bell__default.default, { className: "h-4 w-4" }),
              notifications.count && notifications.count > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center", children: notifications.count > 99 ? "99+" : notifications.count })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ jsxRuntime.jsx(Settings__default.default, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ jsxRuntime.jsx(MoreVertical__default.default, { className: "h-4 w-4" })
          }
        )
      ] });
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(topBarVariants({ variant, size, sticky }), className),
        ...props,
        children: [
          renderLeft(),
          renderCenter(),
          renderRight(),
          children
        ]
      }
    );
  }
);
TopBar.displayName = "TopBar";
var TopBarTitle = React8__namespace.forwardRef(
  ({
    className,
    title,
    subtitle,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("flex flex-col items-center", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: subtitle })
        ]
      }
    );
  }
);
TopBarTitle.displayName = "TopBarTitle";
var TopBarActions = React8__namespace.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("flex items-center gap-2", className),
        ...props,
        children
      }
    );
  }
);
TopBarActions.displayName = "TopBarActions";

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.BackToTop = BackToTop;
exports.BackToTopButton = BackToTopButton;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.Menu = Menu;
exports.MenuBar = MenuBar;
exports.NavigationContextMenu = NavigationContextMenu;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
exports.NavigationMenuItem = NavigationMenuItem;
exports.NavigationMenuLink = NavigationMenuLink;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuTrigger = NavigationMenuTrigger;
exports.NavigationMenuViewport = NavigationMenuViewport;
exports.Pagination = Pagination;
exports.PaginationCompact = PaginationCompact;
exports.PaginationInfo = PaginationInfo;
exports.Sidebar = Sidebar;
exports.SidebarTrigger = SidebarTrigger;
exports.StepItem = StepItem;
exports.Steps = Steps;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.TopBar = TopBar;
exports.TopBarActions = TopBarActions;
exports.TopBarTitle = TopBarTitle;
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map