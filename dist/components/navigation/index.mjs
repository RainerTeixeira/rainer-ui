import { ChevronDown, X, Search, Check, Loader2, ChevronRight, ArrowUp } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React7 from 'react';
import { useCallback, useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Overlay, Portal, Content, Close, Title, Description, Root } from '@radix-ui/react-dialog';
import { Command as Command$1 } from 'cmdk';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight2 from 'lucide-react/dist/esm/icons/chevron-right';
import MoreHorizontal from 'lucide-react/dist/esm/icons/more-horizontal';
import LogOut from 'lucide-react/dist/esm/icons/log-out';
import Menu2 from 'lucide-react/dist/esm/icons/menu';
import Settings from 'lucide-react/dist/esm/icons/settings';
import User from 'lucide-react/dist/esm/icons/user';
import X2 from 'lucide-react/dist/esm/icons/x';
import MoreVertical from 'lucide-react/dist/esm/icons/more-vertical';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Bell from 'lucide-react/dist/esm/icons/bell';
import Search2 from 'lucide-react/dist/esm/icons/search';

var tokens = tokensData;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var Z_INDEX = {
  base: String(tokens.primitives?.zIndex?.base ?? 100),
  navigation: String(tokens.primitives?.zIndex?.content ?? 150),
  dropdown: String(tokens.primitives?.zIndex?.dropdown ?? 300),
  modal: String(tokens.primitives?.zIndex?.modal ?? 400),
  overlay: String(tokens.primitives?.zIndex?.overlay ?? 400),
  sticky: String(tokens.primitives?.zIndex?.sticky ?? 200),
  fixed: String(tokens.primitives?.zIndex?.fixed ?? 300),
  tooltip: String(tokens.primitives?.zIndex?.tooltip ?? 500)
};
var motionTokens = tokens.primitives?.motion ?? {};
motionTokens.delay ?? {};
var animationDurations = motionTokens.duration ?? {};
var animationEasings = motionTokens.easing ?? {};
var baseDuration = animationDurations.normal ?? animationDurations.default ?? "200ms";
animationDurations.fast ?? baseDuration;
animationDurations.slow ?? baseDuration;
var easeInOut = animationEasings.easeInOut ?? animationEasings.default ?? "ease-in-out";
animationEasings.easeOut ?? easeInOut;
animationEasings.spring ?? easeInOut;
var fallbackMotionSemantic = {
  };
tokens.semantics?.motion ?? fallbackMotionSemantic;
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out",
    COLOR: "transition-colors duration-200 ease-in-out",
    TRANSFORM: "transition-transform duration-200 ease-in-out"}
};
tokens.themes?.light ?? {};
tokens.themes?.dark ?? {};
tokens.semantics?.layoutClasses?.components ?? {};
tokens.semantics?.layoutClasses?.sections ?? {};
tokens.primitives?.gradientDirections ?? {};
var buttonVariants = cva(
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
var ButtonComponent = React7.forwardRef(
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
      const child = React7.Children.only(children);
      return /* @__PURE__ */ jsx(
        Slot,
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
          children: loading ? /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2", children: [
            loadingIcon || /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            child
          ] }) : child
        }
      );
    }
    return /* @__PURE__ */ jsxs(
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
          loading && (loadingIcon || /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" })),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
function useSmoothScroll() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return {
    scrollToTop,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
  };
}
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { scrollPosition };
}
var SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const { scrollToTop, reducedMotion } = useSmoothScroll();
  const { scrollPosition } = useScrollPosition();
  const isButtonVisible = scrollPosition.y > SCROLL_THRESHOLD_PX;
  const handleClick = () => {
    scrollToTop();
  };
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick: handleClick,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ jsx(BackToTopButton, {});
}
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all duration-200 ease-in-out hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "h-4 w-4 shrink-0 transition-transform duration-150"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;
var Dialog = Root;
var DialogPortal = Portal;
var DialogOverlay = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Overlay,
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
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    Content,
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
        /* @__PURE__ */ jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground dark:focus:ring-cyan-400", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
var DialogTitle = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight dark:text-cyan-200 dark:font-mono",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
var DialogDescription = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Description,
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground dark:text-gray-400",
      className
    ),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
var Command = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
var CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxs(DialogContent, { className: "overflow-hidden p-0", children: [
    /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: "Buscar artigos" }),
    /* @__PURE__ */ jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
  ] }) });
};
var CommandInput = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "data-cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
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
CommandInput.displayName = Command$1.Input.displayName;
var CommandList = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
var CommandEmpty = React7.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  Command$1.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = Command$1.Empty.displayName;
var CommandGroup = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
var CommandSeparator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
var CommandItem = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
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
var NavigationMenu = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
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
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva(
  cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium",
    MOTION.TRANSITION.COLOR,
    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
  )
);
var NavigationMenuTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
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
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      "z-[1]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
var Tabs = TabsPrimitive.Root;
var TabsList = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
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
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
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
TabsContent.displayName = TabsPrimitive.Content.displayName;
var menuVariants = cva(
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
var Menu = React7.forwardRef(
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
    const [internalOpen, setInternalOpen] = React7.useState(false);
    const [openSubmenus, setOpenSubmenus] = React7.useState(/* @__PURE__ */ new Set());
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const containerRef = React7.useRef(null);
    const handleOpenChange = React7.useCallback((newOpen) => {
      if (controlledOpen === void 0) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [controlledOpen, onOpenChange]);
    const toggleSubmenu = React7.useCallback((itemId) => {
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
    React7.useEffect(() => {
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
        return /* @__PURE__ */ jsx("div", { className: "my-1 h-px bg-border" }, item.id);
      }
      if (hasChildren) {
        return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
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
                item.icon && /* @__PURE__ */ jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
                /* @__PURE__ */ jsx("span", { className: "flex-1", children: item.label }),
                item.badge && /* @__PURE__ */ jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge }),
                /* @__PURE__ */ jsx(
                  ChevronRight,
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
          isSubmenuOpen && /* @__PURE__ */ jsx("div", { className: "absolute left-full top-0 ml-1 min-w-[200px] rounded-md border bg-popover p-1 shadow-lg", children: item.children.map((child) => renderItem(child, level + 1)) })
        ] }, item.id);
      }
      const content = /* @__PURE__ */ jsxs(
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
            item.icon && /* @__PURE__ */ jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
            /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: item.label }),
            item.badge && /* @__PURE__ */ jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
          ]
        }
      );
      if (item.href) {
        return /* @__PURE__ */ jsxs(
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
              item.icon && /* @__PURE__ */ jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
              /* @__PURE__ */ jsx("span", { className: "flex-1", children: item.label }),
              item.badge && /* @__PURE__ */ jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
            ]
          },
          item.id
        );
      }
      return content;
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("relative inline-block", className),
        ...props,
        children: [
          trigger && /* @__PURE__ */ jsx("div", { onClick: () => handleOpenChange(!isOpen), children: trigger }),
          isOpen && /* @__PURE__ */ jsx(
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
var MenuBar = React7.forwardRef(
  ({
    className,
    menus,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center gap-1 rounded-md border bg-background p-1",
          className
        ),
        ...props,
        children: menus.map((menu) => /* @__PURE__ */ jsx(
          Menu,
          {
            items: menu.items,
            trigger: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", children: [
              menu.label,
              /* @__PURE__ */ jsx(ChevronDown, { className: "ml-1 h-3 w-3" })
            ] })
          },
          menu.id
        ))
      }
    );
  }
);
MenuBar.displayName = "MenuBar";
var NavigationContextMenu = React7.forwardRef(
  ({
    className,
    children,
    items,
    ...props
  }, ref) => {
    const [open, setOpen] = React7.useState(false);
    const [position, setPosition] = React7.useState({ x: 0, y: 0 });
    const containerRef = React7.useRef(null);
    const handleContextMenu = React7.useCallback((event) => {
      event.preventDefault();
      setPosition({ x: event.clientX, y: event.clientY });
      setOpen(true);
    }, []);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("relative inline-block", className),
        onContextMenu: handleContextMenu,
        children: [
          children,
          open && /* @__PURE__ */ jsx(
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
                  return /* @__PURE__ */ jsx("div", { className: "my-1 h-px bg-border" }, item.id);
                }
                return /* @__PURE__ */ jsxs(
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
                      item.icon && /* @__PURE__ */ jsx("span", { className: "mr-2 h-4 w-4", children: item.icon }),
                      /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: item.label }),
                      item.badge && /* @__PURE__ */ jsx("span", { className: "ml-auto mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
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
var paginationVariants = cva(
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
var Pagination = React7.forwardRef(
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
    const pages = React7.useMemo(() => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      return generateRange(page, totalPages, siblingCount);
    }, [page, totalPages, siblingCount]);
    const handlePrevious = React7.useCallback(() => {
      if (page > 1) {
        onPrevious?.();
        onChange?.(page - 1);
      }
    }, [page, onChange, onPrevious]);
    const handleNext = React7.useCallback(() => {
      if (page < totalPages) {
        onNext?.();
        onChange?.(page + 1);
      }
    }, [page, totalPages, onChange, onNext]);
    const handlePageClick = React7.useCallback((page2) => {
      onChange?.(page2);
    }, [onChange]);
    const handleFirst = React7.useCallback(() => {
      onChange?.(1);
    }, [onChange]);
    const handleLast = React7.useCallback(() => {
      onChange?.(totalPages);
    }, [onChange, totalPages]);
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12"
    };
    return /* @__PURE__ */ jsxs(
      "nav",
      {
        ref,
        className: cn(paginationVariants({ size, variant }), className),
        ...props,
        children: [
          showFirst && totalPages > 1 && /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleFirst,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Primeira p\xE1gina" }),
                /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handlePrevious,
              disabled: disabled || page === 1,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "P\xE1gina anterior" }),
                /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: pages.map((page2, index) => {
            if (page2 === "...") {
              return /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "flex items-center justify-center",
                    sizeClasses[size]
                  ),
                  children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
                },
                `ellipsis-${index}`
              );
            }
            return /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleNext,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Pr\xF3xima p\xE1gina" }),
                /* @__PURE__ */ jsx(ChevronRight2, { className: "h-4 w-4" })
              ]
            }
          ),
          showLast && totalPages > 1 && /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: cn(sizeClasses[size], "p-0"),
              onClick: handleLast,
              disabled: disabled || page === totalPages,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "\xDAltima p\xE1gina" }),
                /* @__PURE__ */ jsx(ChevronRight2, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx(ChevronRight2, { className: "h-4 w-4 -ml-3" })
              ]
            }
          ),
          showInfo && /* @__PURE__ */ jsxs("div", { className: "ml-4 text-sm text-muted-foreground", children: [
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
var PaginationInfo = React7.forwardRef(
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
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props,
        children: totalPagesItems ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "Mostrando ",
          startItem,
          " a ",
          endItem,
          " de ",
          totalPagesItems,
          " itens"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
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
var PaginationCompact = React7.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var stepsVariants = cva(
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
var stepVariants = cva(
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
var Steps = React7.forwardRef(
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
    const stepsWithStatus = React7.useMemo(() => {
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
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            stepVariants({ orientation, size }),
            orientation === "horizontal" && "flex-1",
            className
          ),
          children: [
            orientation === "horizontal" && index > 0 && /* @__PURE__ */ jsx("div", { className: connectorClasses }),
            /* @__PURE__ */ jsxs(
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
                  /* @__PURE__ */ jsx("div", { className: cn("relative", orientation === "vertical" && "flex-shrink-0"), children: /* @__PURE__ */ jsxs("div", { className: iconClasses, children: [
                    isCompleted && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
                    isLoading && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
                    !isCompleted && !isLoading && (step.icon || index + 1)
                  ] }) }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-col",
                        orientation === "horizontal" && "items-center text-center",
                        orientation === "vertical" && "items-start",
                        sizeClasses[size].step
                      ),
                      children: [
                        /* @__PURE__ */ jsx(
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
                        step.description && /* @__PURE__ */ jsx(
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
            orientation === "vertical" && !isLast && /* @__PURE__ */ jsx("div", { className: connectorClasses })
          ]
        },
        step.id
      );
    };
    return /* @__PURE__ */ jsx(
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
var StepItem = React7.forwardRef(
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
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-3", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: iconClasses, children: [
            isCompleted && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
            isLoading && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
            !isCompleted && !isLoading && (icon || number)
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
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
            description && /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: description })
          ] })
        ]
      }
    );
  }
);
StepItem.displayName = "StepItem";
var sidebarVariants = cva(
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
var Sidebar = React7.forwardRef(
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
    const [internalCollapsed, setInternalCollapsed] = React7.useState(collapsed);
    const [internalOpen, setInternalOpen] = React7.useState(open);
    const isCollapsed = onCollapse ? collapsed : internalCollapsed;
    const isOpen = overlay ? onOpenChange ? open : internalOpen : true;
    const handleCollapse = React7.useCallback(() => {
      if (onCollapse) {
        onCollapse(!isCollapsed);
      } else {
        setInternalCollapsed(!isCollapsed);
      }
    }, [isCollapsed, onCollapse]);
    const handleOpenChange = React7.useCallback((newOpen) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    }, [onOpenChange]);
    React7.useEffect(() => {
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
        return /* @__PURE__ */ jsx("div", { className: "my-2 h-px bg-border" }, item.id);
      }
      return /* @__PURE__ */ jsxs(
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
            item.icon && /* @__PURE__ */ jsx("span", { className: "h-4 w-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "truncate",
              isCollapsed && "w-0 opacity-0"
            ), children: item.label }),
            item.badge && !isCollapsed && /* @__PURE__ */ jsx("span", { className: "ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground", children: item.badge })
          ]
        },
        item.id
      );
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      overlay && isOpen && /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-40 bg-black/50",
          onClick: () => handleOpenChange(false)
        }
      ),
      /* @__PURE__ */ jsxs(
        "aside",
        {
          id: "rainer-sidebar",
          ref,
          className: sidebarClasses,
          ...props,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              !isCollapsed && /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Menu" }),
              showToggle && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleCollapse,
                  className: "h-8 w-8 p-0",
                  children: isCollapsed ? /* @__PURE__ */ jsx(ChevronRight2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
                }
              ),
              overlay && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleOpenChange(false),
                  className: "h-8 w-8 p-0",
                  children: /* @__PURE__ */ jsx(X2, { className: "h-4 w-4" })
                }
              )
            ] }),
            profile && !isCollapsed && /* @__PURE__ */ jsx("div", { className: "p-4 border-b border-border", children: /* @__PURE__ */ jsxs(
              "button",
              {
                className: "flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent",
                onClick: profile.onClick,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground", children: profile.avatar ? /* @__PURE__ */ jsx("img", { src: profile.avatar, alt: profile.name, className: "h-full w-full rounded-full object-cover" }) : /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: profile.name }),
                    profile.email && /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: profile.email })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "space-y-1", children: items.map((item) => renderMenuItem(item)) }),
              children
            ] }),
            (footerActions || !isCollapsed) && /* @__PURE__ */ jsxs("div", { className: "p-4 border-t border-border", children: [
              !isCollapsed && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ jsx(Settings, { className: "mr-2 h-4 w-4" }),
                      "Configura\xE7\xF5es"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "ghost",
                    className: "w-full justify-start",
                    size: "sm",
                    children: [
                      /* @__PURE__ */ jsx(LogOut, { className: "mr-2 h-4 w-4" }),
                      "Sair"
                    ]
                  }
                )
              ] }),
              isCollapsed && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }) })
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
var SidebarTrigger = React7.forwardRef(
  ({
    className,
    children,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React7.useCallback((event) => {
      onClick?.(event);
      window.dispatchEvent(new CustomEvent("sidebar:toggle"));
    }, [onClick]);
    return /* @__PURE__ */ jsx(
      Button,
      {
        ref,
        variant: "ghost",
        size: "sm",
        className: cn("h-8 w-8 p-0", className),
        onClick: handleClick,
        ...props,
        children: children || /* @__PURE__ */ jsx(Menu2, { className: "h-4 w-4" })
      }
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var topBarVariants = cva(
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
var TopBar = React7.forwardRef(
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
      return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        back && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: back.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": back.label || "Voltar",
            children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
          }
        ),
        menu && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: menu.onClick,
            className: "h-8 w-8 p-0",
            "aria-label": menu.label || "Menu",
            children: /* @__PURE__ */ jsx(Menu2, { className: "h-4 w-4" })
          }
        ),
        (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          title && /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
        ] })
      ] });
    };
    const renderCenter = () => {
      if (center) return center;
      if (search) {
        return /* @__PURE__ */ jsx("div", { className: "flex-1 max-w-md mx-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Search2, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
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
        return /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold", children: title }) });
      }
      return null;
    };
    const renderRight = () => {
      if (right) return right;
      return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        notifications && /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: notifications.onClick,
            className: "relative h-8 w-8 p-0",
            children: [
              /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }),
              notifications.count && notifications.count > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center", children: notifications.count > 99 ? "99+" : notifications.count })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0",
            children: /* @__PURE__ */ jsx(MoreVertical, { className: "h-4 w-4" })
          }
        )
      ] });
    };
    return /* @__PURE__ */ jsxs(
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
var TopBarTitle = React7.forwardRef(
  ({
    className,
    title,
    subtitle,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex flex-col items-center", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold leading-none", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: subtitle })
        ]
      }
    );
  }
);
TopBarTitle.displayName = "TopBarTitle";
var TopBarActions = React7.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, BackToTop, BackToTopButton, Collapsible, CollapsibleContent2 as CollapsibleContent, CollapsibleTrigger2 as CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, Menu, MenuBar, NavigationContextMenu, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Pagination, PaginationCompact, PaginationInfo, Sidebar, SidebarTrigger, StepItem, Steps, Tabs, TabsContent, TabsList, TabsTrigger, TopBar, TopBarActions, TopBarTitle, navigationMenuTriggerStyle };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map