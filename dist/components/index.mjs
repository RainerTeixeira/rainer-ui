import * as React58 from 'react';
import React58__default, { memo, useState, useCallback, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import Plus from 'lucide-react/dist/esm/icons/plus';
import X from 'lucide-react/dist/esm/icons/x';
import { Check, Circle, ChevronDown, ChevronUp, Loader2, Octagon, AlertTriangle, Info, X as X$1, Search as Search$1, ChevronRight, ChevronLeft as ChevronLeft$1, Cookie, Settings as Settings$1, XCircle as XCircle$1, Download as Download$1, RefreshCw as RefreshCw$1, ArrowUp as ArrowUp$1 } from 'lucide-react';
import { useTheme as useTheme$1, ThemeProvider as ThemeProvider$1 } from 'next-themes';
import Moon from 'lucide-react/dist/esm/icons/moon';
import Sun from 'lucide-react/dist/esm/icons/sun';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SelectPrimitive from '@radix-ui/react-select';
import File from 'lucide-react/dist/esm/icons/file';
import ImageIcon from 'lucide-react/dist/esm/icons/image';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Upload from 'lucide-react/dist/esm/icons/upload';
import { DayPicker } from 'react-day-picker';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import ChevronDown2 from 'lucide-react/dist/esm/icons/chevron-down';
import Timer from 'lucide-react/dist/esm/icons/timer';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Filter from 'lucide-react/dist/esm/icons/filter';
import Search from 'lucide-react/dist/esm/icons/search';
import Globe from 'lucide-react/dist/esm/icons/globe';
import Phone from 'lucide-react/dist/esm/icons/phone';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { Overlay, Portal, Content, Close, Title, Description, Root as Root$1, Trigger as Trigger$1 } from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { Toaster as Toaster$1 } from 'sonner';
export { Toaster as Sonner } from 'sonner';
import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down';
import ArrowUp from 'lucide-react/dist/esm/icons/arrow-up';
import Minus from 'lucide-react/dist/esm/icons/minus';
import TrendingDown from 'lucide-react/dist/esm/icons/trending-down';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import Package from 'lucide-react/dist/esm/icons/package';
import Wifi from 'lucide-react/dist/esm/icons/wifi';
import XCircle from 'lucide-react/dist/esm/icons/x-circle';
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle';
import AlertTriangle3 from 'lucide-react/dist/esm/icons/alert-triangle';
import Bell from 'lucide-react/dist/esm/icons/bell';
import Check4 from 'lucide-react/dist/esm/icons/check';
import Info2 from 'lucide-react/dist/esm/icons/info';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
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
import MoreVertical from 'lucide-react/dist/esm/icons/more-vertical';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import { motion as motion$1 } from 'framer-motion';
import Eye from 'lucide-react/dist/esm/icons/eye';
import Heart4 from 'lucide-react/dist/esm/icons/heart';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import BarChart from 'lucide-react/dist/esm/icons/bar-chart';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Edit from 'lucide-react/dist/esm/icons/edit';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import HelpCircle from 'lucide-react/dist/esm/icons/help-circle';
import Video from 'lucide-react/dist/esm/icons/video';
import { SubTrigger, SubContent, Portal as Portal$1, Content as Content$1, Item, CheckboxItem, ItemIndicator, RadioItem, Label as Label$1, Separator, Root, Group, RadioGroup as RadioGroup$1, Sub, Trigger } from '@radix-ui/react-context-menu';
import { SubTrigger as SubTrigger$1, SubContent as SubContent$1, Portal as Portal$2, Content as Content$2, Item as Item$1, CheckboxItem as CheckboxItem$1, ItemIndicator as ItemIndicator$1, RadioItem as RadioItem$1, Label as Label$2, Separator as Separator$1, Root as Root$2, Group as Group$1, RadioGroup as RadioGroup$2, Sub as Sub$1, Trigger as Trigger$2 } from '@radix-ui/react-dropdown-menu';
import { Content as Content$3, Root as Root$3, Trigger as Trigger$3 } from '@radix-ui/react-hover-card';
import { Portal as Portal$3, Content as Content$4, Root as Root$4, Trigger as Trigger$4 } from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import Download from 'lucide-react/dist/esm/icons/download';
import Maximize2 from 'lucide-react/dist/esm/icons/maximize-2';
import Minimize2 from 'lucide-react/dist/esm/icons/minimize-2';
import Pause from 'lucide-react/dist/esm/icons/pause';
import Play from 'lucide-react/dist/esm/icons/play';
import RotateCw from 'lucide-react/dist/esm/icons/rotate-cw';
import ZoomIn from 'lucide-react/dist/esm/icons/zoom-in';
import ZoomOut from 'lucide-react/dist/esm/icons/zoom-out';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import useEmblaCarousel from 'embla-carousel-react';
import Star from 'lucide-react/dist/esm/icons/star';
import StarHalf from 'lucide-react/dist/esm/icons/star-half';
import Link2 from 'next/link';
import { Atom } from 'react-loading-indicators';
import Copy from 'lucide-react/dist/esm/icons/copy';
import QuoteIcon from 'lucide-react/dist/esm/icons/quote';
import { QRCodeSVG } from 'qrcode.react';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Link3 from 'lucide-react/dist/esm/icons/link';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import QrCode from 'lucide-react/dist/esm/icons/qr-code';
import Send from 'lucide-react/dist/esm/icons/send';
import Share2 from 'lucide-react/dist/esm/icons/share-2';
import Twitter from 'lucide-react/dist/esm/icons/twitter';
import Bookmark from 'lucide-react/dist/esm/icons/bookmark';
import Link22 from 'lucide-react/dist/esm/icons/link-2';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
function hexToRGB(hex) {
  const cleanHex = hex.replace("#", "");
  if (!/^[0-9A-F]{6}$/i.test(cleanHex)) {
    return "0, 0, 0";
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
function hexToRGBA(hex, alpha = 1) {
  const cleanHex = hex.replace("#", "");
  alpha = Math.max(0, Math.min(1, alpha));
  if (!/^[0-9A-F]{6}$/i.test(cleanHex)) {
    return "rgb(0, 0, 0)";
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  if (alpha === 1) {
    return `rgb(${r}, ${g}, ${b})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var SECTION_CLASSES = {
  /** Container padrão de página com largura máxima e padding responsivo */
  container: "w-full max-w-6xl mx-auto px-6 py-12"
};
var motion = tokens.MOTION || {
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
    short: "50ms",
    long: "200ms"
  }
};
var motionSemantic = tokens.MOTION || {
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
var ANIMATION_DELAYS = motion.delay;
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
var Avatar = React58.forwardRef(
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
    const [imageStatus, setImageStatus] = React58.useState("loading");
    const [showFallback, setShowFallback] = React58.useState(!src);
    React58.useEffect(() => {
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
    return /* @__PURE__ */ jsxs(
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
          showFallback ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: initials ? /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-wide", children: initials }) : /* @__PURE__ */ jsx("span", { className: "opacity-60 text-2xl", children: "?" }) }) : /* @__PURE__ */ jsx(
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
          imageStatus === "loading" && !showFallback && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm", children: /* @__PURE__ */ jsx("div", { className: "h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" }) }),
          children
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";
var AvatarImage = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "img",
  {
    ref,
    className: cn("h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var ButtonComponent = React58.forwardRef(
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
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxs(
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
          loading && /* @__PURE__ */ jsx(Fragment, { children: loadingIcon || /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) }),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;
var Slider = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        SliderPrimitive.Track,
        {
          className: cn(
            "relative h-2 w-full grow overflow-hidden bg-secondary rounded-full"
          ),
          children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" })
        }
      ),
      /* @__PURE__ */ jsx(
        SliderPrimitive.Thumb,
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
Slider.displayName = SliderPrimitive.Root.displayName;
var Switch = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
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
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
var toggleVariants = cva(
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
var Toggle = React58.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
  TogglePrimitive.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;
var iconButtonVariants = cva(
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
var IconButton = React58.forwardRef(
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
    const [showTooltip, setShowTooltip] = React58.useState(false);
    const [tooltipVisible, setTooltipVisible] = React58.useState(false);
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
    React58.useEffect(() => {
      if (showTooltip) {
        const timer = setTimeout(() => setTooltipVisible(true), 100);
        return () => clearTimeout(timer);
      } else {
        setTooltipVisible(false);
      }
    }, [showTooltip]);
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
      /* @__PURE__ */ jsxs(
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
            loading ? loadingIcon || /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) : icon,
            children
          ]
        }
      ),
      tooltip && showTooltip && /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg border border-gray-700",
            "transition-all duration-200 ease-in-out",
            tooltipVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
            tooltipClasses[tooltipPosition]
          ),
          children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            tooltip,
            /* @__PURE__ */ jsx(
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
var linkButtonVariants = cva(
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
var LinkButton = React58.forwardRef(
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
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          target,
          className: classes,
          rel: target === "_blank" ? "noopener noreferrer" : void 0,
          children: [
            loading && (loadingIcon || /* @__PURE__ */ jsx("div", { className: "mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" })),
            leftIcon && /* @__PURE__ */ jsx("span", { className: "mr-2", children: leftIcon }),
            children,
            rightIcon && /* @__PURE__ */ jsx("span", { className: "ml-2", children: rightIcon })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: classes,
        disabled: isDisabled,
        ...props,
        children: [
          loading && (loadingIcon || /* @__PURE__ */ jsx("div", { className: "mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" })),
          leftIcon && /* @__PURE__ */ jsx("span", { className: "mr-2", children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ jsx("span", { className: "ml-2", children: rightIcon })
        ]
      }
    );
  }
);
LinkButton.displayName = "LinkButton";
var fabVariants = cva(
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
var FAB = React58.forwardRef(
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
    const [showActions, setShowActions] = React58.useState(active);
    const isExtended = extended && text;
    React58.useEffect(() => {
      setShowActions(active);
    }, [active]);
    const handleClick = React58.useCallback(() => {
      if (actions.length > 0) {
        setShowActions(!showActions);
      }
      onClick?.();
    }, [actions.length, showActions, onClick]);
    const defaultIcon = actions.length > 0 ? showActions ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" });
    return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      showActions && actions.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 flex flex-col-reverse gap-3 mb-4", children: actions.map((action, index) => /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium whitespace-nowrap bg-background px-2 py-1 rounded-md shadow-md", children: action.label }),
            /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            icon || defaultIcon,
            isExtended && text && /* @__PURE__ */ jsx("span", { className: "font-medium", children: text })
          ] })
        }
      )
    ] });
  }
);
FAB.displayName = "FAB";
var FABGroup = React58.forwardRef(
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
    return /* @__PURE__ */ jsxs(
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
          secondary.map((fab, index) => /* @__PURE__ */ jsx(
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
var segmentedControlVariants = cva(
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
var SegmentedControl = React58.forwardRef(
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
    const [internalValue, setInternalValue] = React58.useState(defaultValue || options[0]?.value);
    const currentValue = value !== void 0 ? value : internalValue;
    const handleOptionClick = React58.useCallback((optionValue, isDisabled) => {
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
    return /* @__PURE__ */ jsx(
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
          return /* @__PURE__ */ jsxs(
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
                option.icon && /* @__PURE__ */ jsx("span", { className: "h-4 w-4", children: option.icon }),
                /* @__PURE__ */ jsx("span", { children: option.label })
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
var SegmentedControlItem = React58.forwardRef(
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
    return /* @__PURE__ */ jsxs(
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
          icon && /* @__PURE__ */ jsx("span", { className: "h-4 w-4", children: icon }),
          children
        ]
      }
    );
  }
);
SegmentedControlItem.displayName = "SegmentedControlItem";
function InlineLoader({
  className,
  size = "sm",
  variant = "spinner"
}) {
  const sizeClasses2 = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };
  if (variant === "dots") {
    return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-1", className), "aria-label": "Carregando", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-75" }),
      /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-current rounded-full animate-pulse delay-150" })
    ] }) });
  }
  return /* @__PURE__ */ jsx(
    Loader2,
    {
      className: cn("animate-spin", sizeClasses2[size], className),
      "aria-label": "Carregando"
    }
  );
}
function useTheme() {
  const { theme, resolvedTheme, setTheme } = useTheme$1();
  const toggle = React58.useCallback(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, resolvedTheme, setTheme]);
  const setLight = React58.useCallback(() => {
    setTheme("light");
  }, [setTheme]);
  const setDark = React58.useCallback(() => {
    setTheme("dark");
  }, [setTheme]);
  const setSystem = React58.useCallback(() => {
    setTheme("system");
  }, [setTheme]);
  return {
    theme,
    resolvedTheme,
    setTheme,
    toggle,
    setLight,
    setDark,
    setSystem,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    isSystem: theme === "system"
  };
}
function ThemeToggle({ className }) {
  const { toggle, isDark } = useTheme();
  const [mounted, setMounted] = React58.useState(false);
  React58.useEffect(() => {
    setMounted(true);
  }, []);
  const handleToggle = () => {
    toggle();
  };
  if (!mounted) {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          // Layout base
          "inline-flex items-center justify-center rounded-md",
          "text-sm font-medium transition-colors duration-200",
          "h-9 w-9 relative",
          // Estados interativos
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Cores do tema - usando design tokens
          "bg-surface border border-border shadow-sm",
          "hover:bg-surface-hover",
          // Dark mode
          "dark:bg-surface-dark dark:border-border-dark",
          "dark:hover:bg-surface-hover-dark",
          className
        ),
        "aria-label": "Alternar tema",
        disabled: true,
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-[1.2rem] w-[1.2rem]" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Alternar tema" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleToggle,
      className: cn(
        // Layout base
        "inline-flex items-center justify-center rounded-md",
        "text-sm font-medium transition-colors duration-200",
        "h-9 w-9 relative",
        // Estados interativos
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Cores do tema - usando design tokens
        "bg-surface border border-border shadow-sm",
        "hover:bg-surface-hover",
        // Dark mode
        "dark:bg-surface-dark dark:border-border-dark",
        "dark:hover:bg-surface-hover-dark",
        className
      ),
      "aria-label": isDark ? "Mudar para tema claro" : "Mudar para tema escuro",
      children: [
        isDark ? /* @__PURE__ */ jsx(
          Moon,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-secondary",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsx(
          Sun,
          {
            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-primary",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: isDark ? "Mudar para tema claro" : "Mudar para tema escuro" })
      ]
    }
  );
}
function PageHeader({ title, description, children }) {
  return (
    /**
     * Container principal do header
     *
     * Utiliza SECTION_CLASSES.container para padding e layout responsivos
     * - relative z-10: fica acima de backgrounds e partículas
     */
    /* @__PURE__ */ jsx("div", { className: `${SECTION_CLASSES.container} relative z-10`, children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      children && /* @__PURE__ */ jsx("div", { className: "relative mb-8", children }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-cyan-200 dark:font-mono dark:tracking-wider", children: title }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-linear-to-r from-primary to-primary dark:from-cyan-400 dark:to-purple-400 mx-auto mb-6" }),
      description && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto dark:font-mono px-2", children: description })
    ] }) })
  );
}
var Checkbox = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-cyan-200 dark:font-mono"
);
var Label = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
var RadioGroup = React58.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React58.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2",
      "text-sm ring-offset-background",
      "placeholder:text-muted-foreground",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React58.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var Textarea = React58.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "dark:bg-background dark:border-border dark:text-foreground dark:placeholder:text-muted-foreground dark:focus-visible:ring-ring dark:focus-visible:border-border",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
var fileUploadVariants = cva(
  "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors duration-[var(--motion-duration-normal)]",
  {
    variants: {
      variant: {
        default: "border-border bg-background hover:border-primary/50 hover:bg-accent/50",
        card: "border-border bg-card shadow-sm hover:border-primary/50 hover:shadow-md",
        minimal: "border-transparent hover:border-primary/30"
      },
      size: {
        sm: "p-4 min-h-[100px]",
        md: "p-6 min-h-[150px]",
        lg: "p-8 min-h-[200px]"
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function getFileIcon(file) {
  if (file.type.startsWith("image/")) {
    return /* @__PURE__ */ jsx(ImageIcon, { className: "h-4 w-4" });
  } else if (file.type.startsWith("text/")) {
    return /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" });
  } else {
    return /* @__PURE__ */ jsx(File, { className: "h-4 w-4" });
  }
}
var FileUpload = React58.forwardRef(
  ({
    className,
    files = [],
    onFilesAdd,
    onFileRemove,
    onClear,
    multiple = false,
    accept,
    maxSize,
    maxFiles,
    disabled = false,
    loading = false,
    placeholder = "Arraste arquivos aqui ou clique para selecionar",
    secondaryText,
    variant = "default",
    size = "md",
    ...props
  }, ref) => {
    const [isDragging, setIsDragging] = React58.useState(false);
    const inputRef = React58.useRef(null);
    const processFiles = React58.useCallback((fileList) => {
      const filesArray = Array.from(fileList);
      if (!multiple && filesArray.length > 1) {
        console.warn("Apenas um arquivo \xE9 permitido");
        return;
      }
      if (maxFiles && files.length + filesArray.length > maxFiles) {
        console.warn(`M\xE1ximo de ${maxFiles} arquivos permitido`);
        return;
      }
      const newFiles = filesArray.map((file) => {
        if (maxSize && file.size > maxSize) {
          console.warn(`Arquivo ${file.name} excede o tamanho m\xE1ximo`);
          return null;
        }
        const fileItem = {
          id: Math.random().toString(36).substr(2, 9),
          file
        };
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            fileItem.preview = e.target?.result;
          };
          reader.readAsDataURL(file);
        }
        return fileItem;
      }).filter(Boolean);
      if (newFiles.length > 0) {
        onFilesAdd?.(newFiles);
      }
    }, [multiple, maxFiles, files.length, maxSize, onFilesAdd]);
    const handleDrop = React58.useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);
      if (disabled || loading) return;
      const files2 = e.dataTransfer.files;
      if (files2.length > 0) {
        processFiles(files2);
      }
    }, [disabled, loading, processFiles]);
    const handleDragOver = React58.useCallback((e) => {
      e.preventDefault();
      if (!disabled && !loading) {
        setIsDragging(true);
      }
    }, [disabled, loading]);
    const handleDragLeave = React58.useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);
    const handleFileSelect = React58.useCallback((e) => {
      const files2 = e.target.files;
      if (files2 && files2.length > 0) {
        processFiles(files2);
      }
      e.target.value = "";
    }, [processFiles]);
    const handleClick = React58.useCallback(() => {
      if (!disabled && !loading) {
        inputRef.current?.click();
      }
    }, [disabled, loading]);
    const handleRemoveFile = React58.useCallback((id) => {
      onFileRemove?.(id);
    }, [onFileRemove]);
    const handleClear = React58.useCallback(() => {
      onClear?.();
    }, [onClear]);
    return /* @__PURE__ */ jsxs("div", { ref, className: cn("space-y-4", className), ...props, children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            fileUploadVariants({ variant, size, disabled }),
            isDragging && "border-primary bg-primary/5",
            "cursor-pointer"
          ),
          onDrop: handleDrop,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onClick: handleClick,
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "file",
                multiple,
                accept,
                onChange: handleFileSelect,
                className: "hidden",
                disabled
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
              /* @__PURE__ */ jsx(Upload, { className: cn(
                "h-8 w-8 text-muted-foreground",
                size === "sm" && "h-6 w-6",
                size === "lg" && "h-10 w-10"
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: loading ? "Processando..." : placeholder }),
                secondaryText && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: secondaryText }),
                accept && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Formatos: ",
                  accept
                ] }),
                maxSize && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Tamanho m\xE1ximo: ",
                  formatFileSize(maxSize)
                ] })
              ] })
            ] })
          ]
        }
      ),
      files.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
            files.length,
            " ",
            files.length === 1 ? "arquivo" : "arquivos"
          ] }),
          onClear && /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: handleClear,
              disabled,
              children: "Limpar todos"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: files.map((fileItem) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-3 rounded-md border bg-card p-3",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: fileItem.preview ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: fileItem.preview,
                  alt: fileItem.file.name,
                  className: "h-10 w-10 rounded-md object-cover"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-muted", children: getFileIcon(fileItem.file) }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: fileItem.file.name }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: formatFileSize(fileItem.file.size) }),
                fileItem.progress !== void 0 && /* @__PURE__ */ jsx("div", { className: "mt-1 w-full bg-muted rounded-full h-1", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "bg-primary h-1 rounded-full transition-all duration-[var(--motion-duration-normal)]",
                    style: { width: `${fileItem.progress}%` }
                  }
                ) }),
                fileItem.error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 dark:text-red-400 mt-1", children: fileItem.error })
              ] }),
              onFileRemove && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => handleRemoveFile(fileItem.id),
                  disabled,
                  className: "h-8 w-8 p-0",
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                }
              )
            ]
          },
          fileItem.id
        )) })
      ] })
    ] });
  }
);
FileUpload.displayName = "FileUpload";
var datePickerVariants = cva(
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
var DatePicker = React58.forwardRef(
  ({
    className,
    size = "md",
    value,
    onChange,
    placeholder = "Selecione uma data",
    multiple = false,
    range = false,
    disabledDates,
    minDate,
    maxDate,
    fromYear,
    toYear,
    format,
    showWeekNumber = false,
    fixedWeeks = false,
    disabled = false,
    ...props
  }, _ref) => {
    const [isOpen, setIsOpen] = React58.useState(false);
    const [selectedDates, setSelectedDates] = React58.useState([]);
    const [inputValue, setInputValue] = React58.useState("");
    const containerRef = React58.useRef(null);
    const buttonRef = React58.useRef(null);
    React58.useEffect(() => {
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
    const handleSingleSelect = React58.useCallback((day) => {
      onChange?.(day);
    }, [onChange]);
    const handleMultipleSelect = React58.useCallback((dates) => {
      onChange?.(dates);
    }, [onChange]);
    const handleRangeSelect = React58.useCallback((range2) => {
      onChange?.(range2);
    }, [onChange]);
    React58.useEffect(() => {
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
                /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-4 w-4" }),
                inputValue || placeholder,
                /* @__PURE__ */ jsx(ChevronDown2, { className: "ml-auto h-4 w-4 opacity-50" })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-0 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95", children: range ? /* @__PURE__ */ jsx(
            DayPicker,
            {
              mode: "range",
              selected: value,
              onSelect: handleRangeSelect,
              disabled: disabledDates,
              fromDate: minDate,
              toDate: maxDate,
              fromYear,
              toYear,
              showWeekNumber,
              fixedWeeks,
              classNames: dayPickerClassNames,
              initialFocus: true
            }
          ) : multiple ? /* @__PURE__ */ jsx(
            DayPicker,
            {
              mode: "multiple",
              selected: selectedDates,
              onSelect: handleMultipleSelect,
              disabled: disabledDates,
              fromDate: minDate,
              toDate: maxDate,
              fromYear,
              toYear,
              showWeekNumber,
              fixedWeeks,
              classNames: dayPickerClassNames,
              initialFocus: true
            }
          ) : /* @__PURE__ */ jsx(
            DayPicker,
            {
              mode: "single",
              selected: value instanceof Date ? value : void 0,
              onSelect: handleSingleSelect,
              disabled: disabledDates,
              fromDate: minDate,
              toDate: maxDate,
              fromYear,
              toYear,
              showWeekNumber,
              fixedWeeks,
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
var timePickerVariants = cva(
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
var TimePicker = React58.forwardRef(
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
    // minTime, // TODO: implementar validação de tempo mínimo
    // maxTime, // TODO: implementar validação de tempo máximo
    ...props
  }) => {
    const [isOpen, setIsOpen] = React58.useState(false);
    const [hours, setHours] = React58.useState(value?.hours || 0);
    const [minutes, setMinutes] = React58.useState(value?.minutes || 0);
    const [seconds, setSeconds] = React58.useState(value?.seconds || 0);
    const [period, setPeriod] = React58.useState(value?.period || "AM");
    const containerRef = React58.useRef(null);
    React58.useEffect(() => {
      if (value) {
        setHours(value.hours);
        setMinutes(value.minutes);
        setSeconds(value.seconds || 0);
        if (use12Hours) {
          setPeriod(value.period || (value.hours >= 12 ? "PM" : "AM"));
        }
      }
    }, [value, use12Hours]);
    const handleHoursChange = React58.useCallback((newHours) => {
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
    const handleMinutesChange = React58.useCallback((newMinutes) => {
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
    const handleSecondsChange = React58.useCallback((newSeconds) => {
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
    const handlePeriodChange = React58.useCallback((newPeriod) => {
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
    React58.useEffect(() => {
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
var rangeSliderVariants = cva(
  "relative flex items-center select-none touch-none w-full",
  {
    variants: {
      size: {
        sm: "h-5",
        md: "h-6",
        lg: "h-7"
      },
      variant: {
        default: "",
        colored: ""
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
var RangeSlider = React58.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    value,
    defaultValue = { min: 0, max: 100 },
    onChange,
    onChangeEnd,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    showValue = false,
    labels,
    prefix,
    suffix,
    color = "primary",
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React58.useState(defaultValue);
    const [isDragging, setIsDragging] = React58.useState(null);
    const sliderRef = React58.useRef(null);
    const minThumbRef = React58.useRef(null);
    const maxThumbRef = React58.useRef(null);
    const currentValue = value || internalValue;
    const valueToPercent = (val) => {
      return (val - min) / (max - min) * 100;
    };
    const percentToValue = (percent) => {
      const rawValue = percent / 100 * (max - min) + min;
      return Math.round(rawValue / step) * step;
    };
    const getPosition = (event) => {
      if (!sliderRef.current) return 0;
      const rect = sliderRef.current.getBoundingClientRect();
      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      const position = clientX - rect.left;
      const percent = position / rect.width * 100;
      return Math.max(0, Math.min(100, percent));
    };
    const updateValue = React58.useCallback((type, percent) => {
      const newValue = percentToValue(percent);
      const updated = { ...currentValue };
      if (type === "min") {
        updated.min = Math.min(newValue, currentValue.max - step);
      } else {
        updated.max = Math.max(newValue, currentValue.min + step);
      }
      setValue(updated);
    }, [step]);
    const setValue = React58.useCallback((newValue) => {
      setInternalValue(newValue);
      onChange?.(newValue);
    }, [onChange]);
    const handleMouseDown = React58.useCallback((type) => {
      if (disabled) return;
      setIsDragging(type);
    }, [disabled]);
    const handleMouseMove = React58.useCallback((event) => {
      if (!isDragging || disabled) return;
      const percent = getPosition(event);
      updateValue(isDragging, percent);
    }, [isDragging, disabled, updateValue]);
    const handleMouseUp = React58.useCallback(() => {
      if (isDragging) {
        onChangeEnd?.(currentValue);
        setIsDragging(null);
      }
    }, [isDragging, currentValue, onChangeEnd]);
    React58.useEffect(() => {
      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("touchmove", handleMouseMove);
        document.addEventListener("touchend", handleMouseUp);
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          document.removeEventListener("touchmove", handleMouseMove);
          document.removeEventListener("touchend", handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);
    const colorClasses = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-emerald-500",
      warning: "bg-amber-500",
      error: "bg-red-500"
    };
    const thumbClasses = cn(
      "block h-5 w-5 rounded-full border-2 border-background bg-background shadow-lg transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "hover:scale-110 active:scale-95",
      disabled && "cursor-not-allowed",
      color === "primary" && "focus-visible:ring-primary",
      color === "secondary" && "focus-visible:ring-secondary",
      color === "success" && "focus-visible:ring-emerald-500",
      color === "warning" && "focus-visible:ring-amber-500",
      color === "error" && "focus-visible:ring-red-500"
    );
    const minPercent = valueToPercent(currentValue.min);
    const maxPercent = valueToPercent(currentValue.max);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("space-y-2", className),
        ...props,
        children: [
          labels && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { children: labels.min }),
            /* @__PURE__ */ jsx("span", { children: labels.max })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: sliderRef,
              className: cn(
                rangeSliderVariants({ size, variant, disabled })
              ),
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full rounded-full bg-muted" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "absolute h-full rounded-full",
                      colorClasses[color]
                    ),
                    style: {
                      left: `${minPercent}%`,
                      width: `${maxPercent - minPercent}%`
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    ref: minThumbRef,
                    className: cn(thumbClasses, "absolute"),
                    style: {
                      left: `calc(${minPercent}% - 10px)`,
                      cursor: disabled ? "not-allowed" : "grab"
                    },
                    onMouseDown: () => handleMouseDown("min"),
                    onTouchStart: () => handleMouseDown("min")
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    ref: maxThumbRef,
                    className: cn(thumbClasses, "absolute"),
                    style: {
                      left: `calc(${maxPercent}% - 10px)`,
                      cursor: disabled ? "not-allowed" : "grab"
                    },
                    onMouseDown: () => handleMouseDown("max"),
                    onTouchStart: () => handleMouseDown("max")
                  }
                )
              ]
            }
          ),
          showValue && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm font-medium", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              prefix,
              currentValue.min,
              suffix
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              prefix,
              currentValue.max,
              suffix
            ] })
          ] })
        ]
      }
    );
  }
);
RangeSlider.displayName = "RangeSlider";
var searchInputVariants = cva(
  "relative flex w-full items-center",
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-12"
      },
      variant: {
        default: "",
        filled: "bg-muted",
        outlined: "border-2",
        minimal: "border-transparent bg-transparent"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
var SearchInput = React58.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    value = "",
    onChange,
    onSubmit,
    placeholder = "Buscar...",
    suggestions = [],
    history = [],
    showClear = true,
    showFilter = false,
    onFilter,
    loading = false,
    debounceTime = 300,
    maxSuggestions = 10,
    // saveToHistory, // TODO: implementar funcionalidade de histórico
    disabled
    // props, // Props adicionais não utilizados
  }) => {
    const [internalValue, setInternalValue] = React58.useState(value);
    const [isOpen, setIsOpen] = React58.useState(false);
    const [selectedIndex, setSelectedIndex] = React58.useState(-1);
    const [filteredSuggestions, setFilteredSuggestions] = React58.useState([]);
    const inputRef = React58.useRef(null);
    const containerRef = React58.useRef(null);
    const debounceRef = React58.useRef();
    const currentValue = value !== void 0 ? value : internalValue;
    const setValue = React58.useCallback((newValue) => {
      setInternalValue(newValue);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        onChange?.(newValue);
      }, debounceTime);
    }, [onChange, debounceTime]);
    React58.useEffect(() => {
      if (!currentValue.trim()) {
        const historySuggestions = history.slice(0, 5).map((item, index) => ({
          id: `history-${index}`,
          text: item,
          type: "history",
          icon: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" })
        }));
        const trendingSuggestions = suggestions.filter((s) => s.type === "trending").slice(0, 5);
        setFilteredSuggestions([...historySuggestions, ...trendingSuggestions]);
      } else {
        const filtered = suggestions.filter(
          (s) => s.text.toLowerCase().includes(currentValue.toLowerCase())
        ).slice(0, maxSuggestions);
        setFilteredSuggestions(filtered);
      }
    }, [currentValue, suggestions, history, maxSuggestions]);
    const handleKeyDown = React58.useCallback((event) => {
      switch (event.key) {
        case "Enter":
          event.preventDefault();
          if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
            const suggestion = filteredSuggestions[selectedIndex];
            if (suggestion.action) {
              suggestion.action();
            } else {
              setValue(suggestion.text);
              onSubmit?.(suggestion.text);
            }
          } else {
            onSubmit?.(currentValue);
          }
          setIsOpen(false);
          break;
        case "ArrowDown":
          event.preventDefault();
          setSelectedIndex(
            (prev) => prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          event.preventDefault();
          setSelectedIndex((prev) => prev > 0 ? prev - 1 : -1);
          break;
        case "Escape":
          setIsOpen(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    }, [selectedIndex, filteredSuggestions, currentValue, setValue, onSubmit]);
    const handleFocus = React58.useCallback(() => {
      setIsOpen(true);
    }, []);
    const handleBlur = React58.useCallback((event) => {
      if (!event.relatedTarget?.closest(".search-suggestion")) {
        setTimeout(() => setIsOpen(false), 150);
      }
    }, []);
    const handleClear = React58.useCallback(() => {
      setValue("");
      inputRef.current?.focus();
    }, [setValue]);
    const handleSuggestionClick = React58.useCallback((suggestion) => {
      if (suggestion.action) {
        suggestion.action();
      } else {
        setValue(suggestion.text);
        onSubmit?.(suggestion.text);
      }
      setIsOpen(false);
    }, [setValue, onSubmit]);
    React58.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const getIcon = (type) => {
      switch (type) {
        case "history":
          return /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-muted-foreground" });
        case "trending":
          return /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-amber-500" });
        case "filter":
          return /* @__PURE__ */ jsx(Filter, { className: "h-4 w-4 text-blue-500" });
        default:
          return null;
      }
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("relative", className),
        children: [
          /* @__PURE__ */ jsxs("div", { className: cn(
            searchInputVariants({ size, variant }),
            "rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
            disabled && "opacity-50 cursor-not-allowed",
            variant === "filled" && "border-transparent",
            variant === "outlined" && "border-2",
            variant === "minimal" && "border-transparent bg-transparent"
          ), children: [
            /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: currentValue,
                onChange: (e) => setValue(e.target.value),
                onKeyDown: handleKeyDown,
                onFocus: handleFocus,
                onBlur: handleBlur,
                placeholder,
                disabled,
                className: "flex-1 bg-transparent outline-none ml-2 placeholder:text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              loading && /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
              showClear && currentValue && !disabled && /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: handleClear,
                  children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
                }
              ),
              showFilter && /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: onFilter,
                  disabled,
                  children: /* @__PURE__ */ jsx(Filter, { className: "h-3 w-3" })
                }
              )
            ] })
          ] }),
          isOpen && filteredSuggestions.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95", children: filteredSuggestions.map((suggestion, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "search-suggestion flex items-center gap-3 rounded-sm px-2 py-1.5 text-sm cursor-pointer",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:bg-accent focus:text-accent-foreground",
                index === selectedIndex && "bg-accent text-accent-foreground"
              ),
              onClick: () => handleSuggestionClick(suggestion),
              children: [
                suggestion.icon || getIcon(suggestion.type),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "truncate", children: suggestion.text }),
                  suggestion.description && /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground truncate", children: suggestion.description })
                ] })
              ]
            },
            suggestion.id
          )) })
        ]
      }
    );
  }
);
SearchInput.displayName = "SearchInput";
var COUNTRIES = [
  { code: "BR", name: "Brasil", ddi: "+55", flag: "\u{1F1E7}\u{1F1F7}", mask: "(00) 00000-0000" },
  { code: "US", name: "Estados Unidos", ddi: "+1", flag: "\u{1F1FA}\u{1F1F8}", mask: "(000) 000-0000" },
  { code: "PT", name: "Portugal", ddi: "+351", flag: "\u{1F1F5}\u{1F1F9}", mask: "000 000 000" },
  { code: "ES", name: "Espanha", ddi: "+34", flag: "\u{1F1EA}\u{1F1F8}", mask: "000 000 000" },
  { code: "FR", name: "Fran\xE7a", ddi: "+33", flag: "\u{1F1EB}\u{1F1F7}", mask: "00 00 00 00 00" },
  { code: "IT", name: "It\xE1lia", ddi: "+39", flag: "\u{1F1EE}\u{1F1F9}", mask: "000 000 0000" },
  { code: "DE", name: "Alemanha", ddi: "+49", flag: "\u{1F1E9}\u{1F1EA}", mask: "000 0000000" },
  { code: "UK", name: "Reino Unido", ddi: "+44", flag: "\u{1F1EC}\u{1F1E7}", mask: "0000 000 000" },
  { code: "AR", name: "Argentina", ddi: "+54", flag: "\u{1F1E6}\u{1F1F7}", mask: "00 0000-0000" },
  { code: "CL", name: "Chile", ddi: "+56", flag: "\u{1F1E8}\u{1F1F1}", mask: "0000 000 000" },
  { code: "MX", name: "M\xE9xico", ddi: "+52", flag: "\u{1F1F2}\u{1F1FD}", mask: "000 000 0000" },
  { code: "CA", name: "Canad\xE1", ddi: "+1", flag: "\u{1F1E8}\u{1F1E6}", mask: "(000) 000-0000" },
  { code: "AU", name: "Austr\xE1lia", ddi: "+61", flag: "\u{1F1E6}\u{1F1FA}", mask: "000 000 000" },
  { code: "JP", name: "Jap\xE3o", ddi: "+81", flag: "\u{1F1EF}\u{1F1F5}", mask: "00-0000-0000" },
  { code: "CN", name: "China", ddi: "+86", flag: "\u{1F1E8}\u{1F1F3}", mask: "000 0000 0000" }
];
var phoneInputVariants = cva(
  "flex w-full",
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-12"
      },
      variant: {
        default: "",
        filled: "bg-muted",
        outlined: "border-2"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
function applyMask(value, mask) {
  let result = "";
  let valueIndex = 0;
  for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
    if (mask[i] === "0") {
      result += value[valueIndex];
      valueIndex++;
    } else {
      result += mask[i];
    }
  }
  return result;
}
function removeMask(value) {
  return value.replace(/\D/g, "");
}
var PhoneInput = React58.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    value = "",
    onChange,
    country = "BR",
    onCountryChange,
    placeholder,
    showCountrySelector = true,
    countries = COUNTRIES,
    disabled = false,
    includeDDI = false,
    numbersOnly = true,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React58.useState(value);
    const [selectedCountry, setSelectedCountry] = React58.useState(
      countries.find((c) => c.code === country) || countries[0]
    );
    const [isDropdownOpen, setIsDropdownOpen] = React58.useState(false);
    const inputRef = React58.useRef(null);
    const dropdownRef = React58.useRef(null);
    const currentValue = value !== void 0 ? value : internalValue;
    React58.useEffect(() => {
      const newCountry = countries.find((c) => c.code === country) || countries[0];
      setSelectedCountry(newCountry);
    }, [country, countries]);
    const handleInputChange = React58.useCallback((event) => {
      let inputValue = event.target.value;
      if (numbersOnly) {
        inputValue = removeMask(inputValue);
      }
      const maskedValue = applyMask(inputValue, selectedCountry.mask);
      setInternalValue(maskedValue);
      const finalValue = includeDDI ? `${selectedCountry.ddi} ${removeMask(maskedValue)}` : removeMask(maskedValue);
      onChange?.(finalValue, selectedCountry);
    }, [selectedCountry, numbersOnly, includeDDI, onChange]);
    const handleCountrySelect = React58.useCallback((country2) => {
      setSelectedCountry(country2);
      setIsDropdownOpen(false);
      onCountryChange?.(country2);
      if (country2.mask !== selectedCountry.mask) {
        setInternalValue("");
        onChange?.("", country2);
      }
    }, [selectedCountry, onCountryChange, onChange]);
    React58.useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !inputRef.current?.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const inputPlaceholder = placeholder || selectedCountry.mask;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(phoneInputVariants({ size, variant }), className),
        children: [
          showCountrySelector && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "rounded-r-none border-r-0 pr-1",
                onClick: () => setIsDropdownOpen(!isDropdownOpen),
                disabled,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-1", children: selectedCountry.flag }),
                  /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" })
                ]
              }
            ),
            isDropdownOpen && /* @__PURE__ */ jsx(
              "div",
              {
                ref: dropdownRef,
                className: "absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 max-h-60 overflow-y-auto",
                children: countries.map((c) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      "flex items-center gap-2 w-full rounded-sm px-2 py-1.5 text-sm",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:bg-accent focus:text-accent-foreground",
                      c.code === selectedCountry.code && "bg-accent text-accent-foreground"
                    ),
                    onClick: () => handleCountrySelect(c),
                    children: [
                      /* @__PURE__ */ jsx("span", { children: c.flag }),
                      /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: c.name }),
                      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: c.ddi })
                    ]
                  },
                  c.code
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref,
                type: "tel",
                value: currentValue,
                onChange: handleInputChange,
                placeholder: inputPlaceholder,
                disabled,
                className: cn(
                  "flex h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                  "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                  "placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  showCountrySelector ? "rounded-l-none pl-10" : "pl-10",
                  variant === "filled" && "border-transparent bg-muted",
                  variant === "outlined" && "border-2"
                ),
                ...props
              }
            )
          ] })
        ]
      }
    );
  }
);
PhoneInput.displayName = "PhoneInput";
var AspectRatio = AspectRatioPrimitive.Root;

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
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM: "to-b",
  TO_BOTTOM_RIGHT: "to-br"};
var Card = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var CardHeader = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var CardDescription = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var ScrollArea = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React58.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
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
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
var Separator2 = React58.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
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
Separator2.displayName = SeparatorPrimitive.Root.displayName;
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(Root$1, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(Trigger$1, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          /** Lado direito: slide horizontal da direita, altura total, max 400px */
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          /** Lado esquerdo: slide horizontal da esquerda */
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          /** Lado superior: slide vertical do topo */
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          /** Lado inferior: slide vertical do fundo */
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(X$1, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
var Table = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var TableRow = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var TableHead = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var TableCell = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var containerVariants = cva(
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
var Container = React58.forwardRef(
  ({
    className,
    size = "7xl",
    padding = "md",
    center = false,
    fullHeight = false,
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var ContainerFluid = React58.forwardRef(
  ({
    className,
    padding = "md",
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var ContainerSection = React58.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "section",
      {
        ref,
        className: cn(
          "w-full",
          spacingClasses[spacing],
          className
        ),
        children: /* @__PURE__ */ jsx(Container, { ...props })
      }
    );
  }
);
ContainerSection.displayName = "ContainerSection";
var gridVariants = cva(
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
var Grid = React58.forwardRef(
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
    const gridStyle = React58.useMemo(() => {
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
    return /* @__PURE__ */ jsx(
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
var GridItem = React58.forwardRef(
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
    const gridStyle = React58.useMemo(() => {
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
    return /* @__PURE__ */ jsx(
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
var flexVariants = cva(
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
var Flex = React58.forwardRef(
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
    return /* @__PURE__ */ jsx(
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
var FlexCenter = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var FlexBetween = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var FlexStart = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var FlexEnd = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var FlexColumn = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var FlexRow = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var spacerVariants = cva(
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
var Spacer = React58.forwardRef(
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
    const spacerStyle = React58.useMemo(() => {
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
    return /* @__PURE__ */ jsx(
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
var VerticalSpacer = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var HorizontalSpacer = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
var dividerVariants = cva(
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
var Divider = React58.forwardRef(
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
      return /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx(
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
            labelComponent || /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: label }),
            /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(
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
var SectionDivider = React58.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx("div", { className: cn(spacingClasses2[spacing], className), children: /* @__PURE__ */ jsx(Divider, { ref, size: "md", ...props }) });
  }
);
SectionDivider.displayName = "SectionDivider";
var textColorClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground"
};
var TextDivider = React58.forwardRef(
  ({
    className,
    children,
    textColor = "muted",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-4", className),
        role: "separator",
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ jsx("span", { className: cn("text-sm font-medium whitespace-nowrap", textColorClasses[textColor]), children }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-border" })
        ]
      }
    );
  }
);
TextDivider.displayName = "TextDivider";
var panelVariants = cva(
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
var Panel = React58.forwardRef(
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
    return /* @__PURE__ */ jsx(
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
var PanelHeader = React58.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var PanelTitle = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var PanelDescription = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var PanelContent = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var PanelFooter = React58.forwardRef(
  ({
    className,
    divider = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var PanelGroup = React58.forwardRef(
  ({
    className,
    spacing = "md",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var alertVariants = cva(
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
var Alert = React58.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
var AlertTitle = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
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
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
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
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
var badgeVariants = cva(
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
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Progress = React58.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: cn("h-full w-full flex-1 transition-all", "bg-primary"),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = "Progress";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
var Toaster = React58.forwardRef((props, ref) => {
  const { theme = "system" } = useTheme$1();
  return React58.createElement(
    Toaster$1,
    {
      ref,
      theme,
      className: "toaster group",
      icons: {
        success: React58.createElement(Check, { className: "h-4 w-4" }),
        info: React58.createElement(Info, { className: "h-4 w-4" }),
        warning: React58.createElement(AlertTriangle, { className: "h-4 w-4" }),
        error: React58.createElement(Octagon, { className: "h-4 w-4" }),
        loading: React58.createElement(Loader2, { className: "h-4 w-4 animate-spin" })
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
var spinnerVariants = cva(
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
var Spinner = React58.forwardRef(
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
    const IconComponent = icon || /* @__PURE__ */ jsx(Loader2, { className: spinnerVariants({ variant, size }) });
    const animationClass = variant === "pulse" ? "animate-pulse" : variant === "dots" ? "animate-bounce" : speedClasses[speed];
    const layoutClasses = {
      top: "flex-col-reverse",
      bottom: "flex-col",
      left: "flex-row-reverse",
      right: "flex-row"
    }[labelPosition];
    const spacingClasses6 = {
      top: "gap-1",
      bottom: "gap-1",
      left: "gap-2",
      right: "gap-2"
    }[labelPosition];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "inline-flex items-center justify-center",
          layoutClasses,
          spacingClasses6,
          className
        ),
        role: "status",
        "aria-label": label,
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: cn(animationClass), children: IconComponent }),
          showLabel && /* @__PURE__ */ jsx("span", { className: cn(
            "text-sm text-muted-foreground",
            (labelPosition === "top" || labelPosition === "bottom") && "text-center",
            variant === "glow" && "text-primary dark:text-cyan-400"
          ), children: label }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: label })
        ]
      }
    );
  }
);
Spinner.displayName = "Spinner";
var SpinnerOverlay = React58.forwardRef(
  ({
    className,
    fullscreen = false,
    overlayColor = "rgba(0, 0, 0, 0.5)",
    opacity = 0.5,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
        children: /* @__PURE__ */ jsx("div", { className: "bg-background rounded-lg p-4 shadow-lg", children: /* @__PURE__ */ jsx(Spinner, { ...props, showLabel: true }) })
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
var DotsSpinner = React58.forwardRef(
  ({
    className,
    count = 3,
    size = "md",
    color,
    label,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1", className),
        role: "status",
        "aria-label": label || "Carregando...",
        ...props,
        children: [
          Array.from({ length: count }, (_, index) => /* @__PURE__ */ jsx(
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
          label && /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-muted-foreground", children: label })
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
var PulseSpinner = React58.forwardRef(
  ({
    className,
    rings = 3,
    size = "md",
    color,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("relative flex items-center justify-center", className),
        ...props,
        children: Array.from({ length: rings }, (_, index) => /* @__PURE__ */ jsx(
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
var kpiVariants = cva(
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
var trendVariants = cva(
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
var KPI = React58.forwardRef(
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
    const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
    const ArrowIcon = trend === "up" ? ArrowUp : trend === "down" ? ArrowDown : null;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(kpiVariants({ variant, size }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: title }),
              description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/70", children: description })
            ] }),
            icon && /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: loading ? /* @__PURE__ */ jsx("div", { className: "h-8 w-24 bg-muted rounded animate-pulse" }) : /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-semibold text-foreground", children: formatValue(value, format, currency, decimals) }),
            trend && trendValue && /* @__PURE__ */ jsxs("div", { className: cn(trendVariants({ trend })), children: [
              ArrowIcon && /* @__PURE__ */ jsx(ArrowIcon, { className: "h-3 w-3" }),
              trendValue
            ] })
          ] }) }),
          trend && !trendValue && /* @__PURE__ */ jsxs("div", { className: cn(
            "mt-3 flex items-center gap-1 text-xs",
            trend === "up" && "text-emerald-600 dark:text-emerald-400",
            trend === "down" && "text-red-600 dark:text-red-400",
            trend === "neutral" && "text-muted-foreground"
          ), children: [
            /* @__PURE__ */ jsx(TrendIcon, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsx("span", { children: trend === "up" ? "Aumentando" : trend === "down" ? "Diminuindo" : "Est\xE1vel" })
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
var KPIGrid = React58.forwardRef(
  ({
    className,
    cols = 4,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var KPIChart = React58.forwardRef(
  ({
    className,
    chart,
    chartPosition = "bottom",
    // children, // TODO: implementar children content
    ...props
  }, ref) => {
    const isRight = chartPosition === "right";
    return /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx("div", { className: cn(isRight && "flex-1"), children: /* @__PURE__ */ jsx(KPI, { ...props }) }),
          chart && /* @__PURE__ */ jsx("div", { className: cn(
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
  search: Search,
  empty: Package,
  error: XCircle,
  filtered: ChevronDown2,
  offline: Wifi,
  loading: RefreshCw
};
var emptyStateVariants = cva(
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
var EmptyState = React58.forwardRef(
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
      IconComponent = /* @__PURE__ */ jsx(DefaultIcon, { className: iconSizeClasses[iconSize] });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(emptyStateVariants({ size, variant }), className),
        ...props,
        children: [
          IconComponent && /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsxs("div", { className: "max-w-md space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
          ] }),
          (actions || secondaryActions) && /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center gap-3 sm:flex-row", children: [
            actions,
            secondaryActions
          ] })
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";
var EmptyStateIllustrated = React58.forwardRef(
  ({
    className,
    illustration,
    illustrationAlt = "Ilustra\xE7\xE3o",
    illustrationWidth = 200,
    illustrationHeight = 200,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      EmptyState,
      {
        ref,
        className: cn(className),
        ...props,
        icon: illustration && /* @__PURE__ */ jsx(
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
  noData: (props) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "empty",
      title: "Nenhum dado dispon\xEDvel",
      description: "N\xE3o h\xE1 dados para exibir no momento.",
      ...props
    }
  ),
  // Sem resultados de busca
  noSearchResults: (onClear) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "search",
      title: "Nenhum resultado encontrado",
      description: "Tente usar termos diferentes ou limpar os filtros.",
      actions: onClear && /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClear, children: "Limpar Filtros" })
    }
  ),
  // Sem itens na lista
  noItems: (onCreate, createLabel = "Adicionar") => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "empty",
      title: "Nenhum item aqui",
      description: "Adicione seu primeiro item para come\xE7ar.",
      actions: onCreate && /* @__PURE__ */ jsx(Button, { onClick: onCreate, children: createLabel })
    }
  ),
  // Offline
  offline: (onRetry) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "offline",
      title: "Voc\xEA est\xE1 offline",
      description: "Verifique sua conex\xE3o com a internet e tente novamente.",
      actions: onRetry && /* @__PURE__ */ jsx(Button, { onClick: onRetry, children: "Tentar Novamente" }),
      animated: true
    }
  ),
  // Erro ao carregar
  error: (onRetry) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "error",
      title: "Algo deu errado",
      description: "Ocorreu um erro ao carregar os dados. Tente novamente.",
      actions: onRetry && /* @__PURE__ */ jsx(Button, { onClick: onRetry, children: "Tentar Novamente" }),
      iconColor: "error"
    }
  ),
  // Filtros sem resultado
  noFilterResults: (onClear) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "filtered",
      title: "Nenhum resultado com os filtros",
      description: "Tente ajustar ou remover alguns filtros.",
      actions: onClear && /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClear, children: "Limpar Filtros" })
    }
  )
};
var variantIcons = {
  success: Check4,
  error: AlertCircle,
  warning: AlertTriangle3,
  info: Info2,
  default: Bell
};
var notificationVariants = cva(
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
var Notification = React58.forwardRef(
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
    const [visible, setVisible] = React58.useState(true);
    React58.useEffect(() => {
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
      IconComponent = /* @__PURE__ */ jsx(VariantIcon, { className: "h-5 w-5" });
    }
    if (!visible) return null;
    return /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx("div", { className: cn(
            "flex-shrink-0",
            variant === "success" && "text-emerald-600 dark:text-emerald-400",
            variant === "error" && "text-red-600 dark:text-red-400",
            variant === "warning" && "text-amber-600 dark:text-amber-400",
            variant === "info" && "text-blue-600 dark:text-blue-400",
            variant === "default" && "text-muted-foreground"
          ), children: IconComponent }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
            title && /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90", children: description }),
            timestamp && /* @__PURE__ */ jsx("p", { className: "text-xs opacity-70", children: timestamp })
          ] }),
          actions && /* @__PURE__ */ jsx("div", { className: "flex flex-shrink-0 gap-2", children: actions }),
          dismissible && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: cn(
                "absolute right-2 top-2 rounded-md p-1",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              ),
              children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4 opacity-60 hover:opacity-100" })
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
var NotificationGroup = React58.forwardRef(
  ({
    className,
    children,
    position = "top-right",
    spacing = "md",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
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
var NotificationToast = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
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
function useNotification() {
  const [notifications, setNotifications] = React58.useState(/* @__PURE__ */ new Map());
  const notify = React58.useCallback((options) => {
    const id = options.id || Math.random().toString(36).substr(2, 9);
    setNotifications((prev) => new Map(prev).set(id, options));
    if (options.autoClose !== false) {
      const delay = options.autoCloseDelay || 5e3;
      setTimeout(() => {
        dismiss(id);
      }, delay);
    }
    return id;
  }, []);
  const dismiss = React58.useCallback((id) => {
    setNotifications((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);
  const clear = React58.useCallback(() => {
    setNotifications(/* @__PURE__ */ new Map());
  }, []);
  return {
    notifications: Array.from(notifications.entries()),
    notify,
    dismiss,
    clear
  };
}
var NotificationProvider = ({ children }) => {
  const { notifications, dismiss } = useNotification();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(NotificationGroup, { children: notifications.map(([id, options]) => /* @__PURE__ */ jsx(
      NotificationToast,
      {
        id,
        onDismiss: () => dismiss(id),
        ...options
      },
      id
    )) })
  ] });
};
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
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
var AccordionContent = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
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
var Dialog = Root$1;
var DialogTrigger = Trigger$1;
var DialogPortal = Portal;
var DialogClose = Close;
var DialogOverlay = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var DialogContent = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
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
          /* @__PURE__ */ jsx(X$1, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Fechar" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var DialogDescription = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var Command = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var CommandInput = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "data-cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search$1, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
var CommandList = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
var CommandEmpty = React58.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  Command$1.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = Command$1.Empty.displayName;
var CommandGroup = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var CommandSeparator = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
var CommandItem = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var NavigationMenu = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
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
var NavigationMenuList = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var NavigationMenuTrigger = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
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
var NavigationMenuContent = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var NavigationMenuViewport = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
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
var NavigationMenuIndicator = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var TabsList = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var TabsTrigger = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var TabsContent = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var Menu = React58.forwardRef(
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
    const [internalOpen, setInternalOpen] = React58.useState(false);
    const [openSubmenus, setOpenSubmenus] = React58.useState(/* @__PURE__ */ new Set());
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const containerRef = React58.useRef(null);
    const handleOpenChange = React58.useCallback((newOpen) => {
      if (controlledOpen === void 0) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [controlledOpen, onOpenChange]);
    const toggleSubmenu = React58.useCallback((itemId) => {
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
    React58.useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          handleOpenChange(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleOpenChange]);
    const positionClasses2 = {
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
                positionClasses2[position]
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
var MenuBar = React58.forwardRef(
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
var NavigationContextMenu = React58.forwardRef(
  ({
    className,
    children,
    items,
    ...props
  }, ref) => {
    const [open, setOpen] = React58.useState(false);
    const [position, setPosition] = React58.useState({ x: 0, y: 0 });
    const containerRef = React58.useRef(null);
    const handleContextMenu = React58.useCallback((event) => {
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
var Pagination = React58.forwardRef(
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
    const pages = React58.useMemo(() => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      return generateRange(page, totalPages, siblingCount);
    }, [page, totalPages, siblingCount]);
    const handlePrevious = React58.useCallback(() => {
      if (page > 1) {
        onPrevious?.();
        onChange?.(page - 1);
      }
    }, [page, onChange, onPrevious]);
    const handleNext = React58.useCallback(() => {
      if (page < totalPages) {
        onNext?.();
        onChange?.(page + 1);
      }
    }, [page, totalPages, onChange, onNext]);
    const handlePageClick = React58.useCallback((page2) => {
      onChange?.(page2);
    }, [onChange]);
    const handleFirst = React58.useCallback(() => {
      onChange?.(1);
    }, [onChange]);
    const handleLast = React58.useCallback(() => {
      onChange?.(totalPages);
    }, [onChange, totalPages]);
    const sizeClasses2 = {
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
              className: cn(sizeClasses2[size], "p-0"),
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
              className: cn(sizeClasses2[size], "p-0"),
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
                    sizeClasses2[size]
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
                className: cn(sizeClasses2[size], "p-0"),
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
              className: cn(sizeClasses2[size], "p-0"),
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
              className: cn(sizeClasses2[size], "p-0"),
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
var PaginationInfo = React58.forwardRef(
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
var PaginationCompact = React58.forwardRef(
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
var Steps = React58.forwardRef(
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
    const stepsWithStatus = React58.useMemo(() => {
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
    const sizeClasses2 = {
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
        sizeClasses2[size].icon,
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
        sizeClasses2[size].connector,
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
                        sizeClasses2[size].step
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
var StepItem = React58.forwardRef(
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
var Sidebar = React58.forwardRef(
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
    const [internalCollapsed, setInternalCollapsed] = React58.useState(collapsed);
    const [internalOpen, setInternalOpen] = React58.useState(open);
    const isCollapsed = onCollapse ? collapsed : internalCollapsed;
    const isOpen = overlay ? onOpenChange ? open : internalOpen : true;
    const handleCollapse = React58.useCallback(() => {
      if (onCollapse) {
        onCollapse(!isCollapsed);
      } else {
        setInternalCollapsed(!isCollapsed);
      }
    }, [isCollapsed, onCollapse]);
    const handleOpenChange = React58.useCallback((newOpen) => {
      if (onOpenChange) {
        onOpenChange(newOpen);
      } else {
        setInternalOpen(newOpen);
      }
    }, [onOpenChange]);
    React58.useEffect(() => {
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
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
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
var SidebarTrigger = React58.forwardRef(
  ({
    className,
    children,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React58.useCallback((event) => {
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
var TopBar = React58.forwardRef(
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
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
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
var TopBarTitle = React58.forwardRef(
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
var TopBarActions = React58.forwardRef(
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
function StatsCards({ stats, isLoading }) {
  const cards = [
    {
      label: "Total de Posts",
      value: stats.totalPosts,
      change: stats.postsChange,
      icon: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
      color: "from-cyan-500 to-blue-500"
    },
    {
      label: "Total de Visualiza\xE7\xF5es",
      value: stats.totalViews,
      change: stats.viewsChange,
      icon: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }),
      color: "from-purple-500 to-pink-500"
    },
    {
      label: "Total de Curtidas",
      value: stats.totalLikes,
      change: stats.likesChange,
      icon: /* @__PURE__ */ jsx(Heart4, { className: "h-4 w-4" }),
      color: "from-pink-500 to-red-500"
    },
    {
      label: "Total de Coment\xE1rios",
      value: stats.totalComments,
      change: stats.commentsChange,
      icon: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
      color: "from-green-500 to-emerald-500"
    }
  ];
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxs(Card, { className: "animate-pulse", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 w-24 bg-muted rounded" }),
        /* @__PURE__ */ jsx("div", { className: "h-8 w-8 bg-muted rounded" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "h-8 w-16 bg-muted rounded" }) })
    ] }, i)) });
  }
  return /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: cards.map((stat, index) => /* @__PURE__ */ jsx(
    motion$1.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 },
      children: /* @__PURE__ */ jsxs(Card, { className: "border-2 hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: stat.label }),
          /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stat.value.toLocaleString() }),
            stat.change !== void 0 && /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "flex items-center gap-1 text-xs font-medium",
                  stat.change > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                ),
                children: [
                  stat.change > 0 ? /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(TrendingDown, { className: "h-3 w-3" }),
                  Math.abs(stat.change),
                  "%"
                ]
              }
            )
          ] }),
          stat.change !== void 0 && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
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
    icon: /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5", "aria-hidden": "true" }),
    color: "from-cyan-500 to-blue-500",
    description: "Artigos publicados no blog"
  },
  {
    label: "Visualiza\xE7\xF5es",
    value: "2.4K",
    change: 8.3,
    icon: /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5", "aria-hidden": "true" }),
    color: "from-purple-500 to-pink-500",
    description: "Visualiza\xE7\xF5es totais"
  },
  {
    label: "Curtidas",
    value: 1.2,
    change: -3.2,
    icon: /* @__PURE__ */ jsx(Heart4, { className: "w-5 h-5", "aria-hidden": "true" }),
    color: "from-orange-500 to-red-500",
    description: "Curtidas recebidas"
  },
  {
    label: "Coment\xE1rios",
    value: 89,
    change: 15.7,
    icon: /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5", "aria-hidden": "true" }),
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
    const Icon2 = isPositive ? TrendingUp : TrendingDown;
    const formattedChange = Math.abs(change).toFixed(1);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold transition-colors bg-opacity-20 ${isPositive ? "text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30" : "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30"}`,
        role: "status",
        "aria-label": `Varia\xE7\xE3o de ${formattedChange}% ${isPositive ? "positiva" : "negativa"}`,
        children: [
          /* @__PURE__ */ jsx(
            Icon2,
            {
              className: "w-3 h-3",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs("span", { children: [
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
    return /* @__PURE__ */ jsx(
      motion$1.article,
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
        children: /* @__PURE__ */ jsxs(Card, { className: "relative h-full overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute -top-12 -right-12 w-32 h-32 opacity-10 bg-gradient-to-br rounded-full blur-3xl transition-opacity duration-500 hover:opacity-15 ${stat.color}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs(CardContent, { className: "relative p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `p-3 rounded-xl shadow-sm bg-gradient-to-br ${stat.color} text-white transition-transform duration-300 hover:scale-110`,
                  "aria-hidden": "true",
                  children: stat.icon
                }
              ),
              renderChangeIndicator(stat.change)
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  id: `${cardId}-title`,
                  className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100",
                  children: stat.isLoading ? /* @__PURE__ */ jsx("span", { className: "inline-block h-8 w-16 animate-pulse bg-gray-300 dark:bg-gray-700 rounded" }) : formattedValue
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: stat.label }),
              stat.description && /* @__PURE__ */ jsx(
                "p",
                {
                  id: `${cardId}-desc`,
                  className: "text-xs text-gray-500 dark:text-gray-500 mt-2",
                  children: stat.description
                }
              )
            ] }),
            stat.change !== void 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-gray-100 dark:border-gray-800", children: /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500 dark:text-gray-500", children: [
              stat.change > 0 ? "Em alta" : "Em baixa",
              " este m\xEAs"
            ] }) })
          ] })
        ] })
      },
      stat.label
    );
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `w-full ${className || ""}`,
      "aria-labelledby": "quick-stats-heading",
      "data-theme": theme,
      children: [
        /* @__PURE__ */ jsx("h2", { id: "quick-stats-heading", className: "sr-only", children: "Estat\xEDsticas R\xE1pidas do Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: stats.map((stat, index) => /* @__PURE__ */ jsx(React58__default.Fragment, { children: renderStatCard(stat, index) }, `${stat.label}-${index}`)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-500", children: [
          "Atualizado em ",
          (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
        ] }) })
      ]
    }
  );
}
var QuickStats = React58__default.memo(QuickStatsComponent);
QuickStats.displayName = "QuickStats";
var STAGGER_DELAY_SECONDS = 0.1;
function QuickActions({
  onNewPost,
  onViewPosts,
  onViewStats,
  onSettings
}) {
  const actions = [
    {
      icon: /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" }),
      label: "Novo Post",
      description: "Criar novo artigo",
      color: "from-cyan-500 to-blue-500",
      onClick: onNewPost
    },
    {
      icon: /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }),
      label: "Meus Posts",
      description: "Ver todos os posts",
      color: "from-purple-500 to-pink-500",
      onClick: onViewPosts
    },
    {
      icon: /* @__PURE__ */ jsx(BarChart, { className: "w-5 h-5" }),
      label: "Estat\xEDsticas",
      description: "An\xE1lise e m\xE9tricas",
      color: "from-orange-500 to-red-500",
      onClick: onViewStats
    },
    {
      icon: /* @__PURE__ */ jsx(Settings, { className: "w-5 h-5" }),
      label: "Configura\xE7\xF5es",
      description: "Ajustes do blog",
      color: "from-green-500 to-emerald-500",
      onClick: onSettings
    }
  ];
  return /* @__PURE__ */ jsxs(Card, { role: "region", "aria-labelledby": "quick-actions-heading", children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { id: "quick-actions-heading", children: "A\xE7\xF5es R\xE1pidas" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: actions.map((action, index) => /* @__PURE__ */ jsx(
      motion$1.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: index * STAGGER_DELAY_SECONDS },
        children: /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: action.onClick,
            variant: "outline",
            className: "w-full h-auto p-4 flex flex-col items-start gap-2 hover:border-cyan-400/50 dark:hover:bg-cyan-400/5",
            "aria-label": `${action.label}: ${action.description}`,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `p-2 rounded-lg bg-linear-to-br ${action.color} text-white`,
                  "aria-hidden": "true",
                  children: action.icon
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: action.label }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: action.description })
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
  const [metrics, setMetrics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
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
            icon: TrendingUp,
            color: "text-blue-500"
          },
          {
            title: "Visualiza\xE7\xF5es Totais",
            value: stats.totalViews.toLocaleString("pt-BR"),
            change: "+0.0%",
            trend: "up",
            icon: Eye,
            color: "text-cyan-500"
          },
          {
            title: "Curtidas",
            value: stats.totalLikes.toLocaleString("pt-BR"),
            change: "+0.0%",
            trend: "up",
            icon: Heart4,
            color: "text-pink-500"
          },
          {
            title: "Coment\xE1rios",
            value: stats.totalComments.toLocaleString("pt-BR"),
            change: "+0.0%",
            trend: "up",
            icon: MessageSquare,
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
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className
        ),
        children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxs(
          Card,
          {
            className: "dark:bg-black/30 dark:border-cyan-400/20 animate-pulse",
            children: [
              /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
                /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-24" }),
                /* @__PURE__ */ jsx("div", { className: "h-4 w-4 bg-muted rounded" })
              ] }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("div", { className: "h-8 bg-muted rounded w-16 mb-2" }),
                /* @__PURE__ */ jsx("div", { className: "h-3 bg-muted rounded w-20" })
              ] })
            ]
          },
          i
        ))
      }
    );
  }
  if (metrics.length === 0) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className
        ),
        children: /* @__PURE__ */ jsx(Card, { className: "dark:bg-black/30 dark:border-cyan-400/20", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6 text-center text-muted-foreground", children: "Nenhum dado dispon\xEDvel" }) })
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      ),
      children: metrics.map((metric, index) => {
        const Icon2 = metric.icon;
        return /* @__PURE__ */ jsxs(
          Card,
          {
            className: "dark:bg-black/30 dark:border-cyan-400/20 hover:shadow-lg transition-shadow",
            children: [
              /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: metric.title }),
                /* @__PURE__ */ jsx(Icon2, { className: cn("h-4 w-4", metric.color) })
              ] }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold dark:text-gray-100", children: metric.value }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                  /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsxs(Card, { className: cn("w-full", className), children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Posts Recentes" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nenhum post encontrado." }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Card, { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Posts Recentes" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: displayedPosts.map((post, index) => /* @__PURE__ */ jsxs(
      motion$1.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1 },
        className: "flex items-start space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors",
        children: [
          post.coverImage && /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-lg overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: post.coverImage,
              alt: post.title,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium line-clamp-1", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-1", children: post.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3 mr-1" }),
                new Date(post.publishedAt).toLocaleDateString("pt-BR")
              ] }),
              post.tags.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                post.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag)),
                post.tags.length > 2 && /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                  "+",
                  post.tags.length - 2
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
            onViewPost && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => onViewPost(post),
                className: "h-8 w-8 p-0",
                children: /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" })
              }
            ),
            onEditPost && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => onEditPost(post),
                className: "h-8 w-8 p-0",
                children: /* @__PURE__ */ jsx(Edit, { className: "w-4 h-4" })
              }
            ),
            onDeletePost && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => onDeletePost(post.id),
                className: "h-8 w-8 p-0 text-destructive hover:text-destructive",
                children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" })
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
      icon: BookOpen,
      title: "Documenta\xE7\xE3o",
      description: "Guias completos de uso",
      link: "/docs"
    },
    {
      icon: Video,
      title: "Tutoriais",
      description: "V\xEDdeos passo a passo",
      link: "/tutorials"
    },
    {
      icon: MessageCircle,
      title: "Suporte",
      description: "Fale com nossa equipe",
      link: "/contato"
    }
  ];
  return /* @__PURE__ */ jsxs(Card, { className: "dark:bg-black/30 dark:border-purple-400/20", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 dark:text-purple-200", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "h-5 w-5" }),
        "Central de Ajuda"
      ] }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Precisa de ajuda? Acesse nossos recursos" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: resources.map((resource, index) => {
      const Icon2 = resource.icon;
      return /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          variant: "outline",
          className: "w-full justify-between dark:border-purple-400/20 dark:hover:bg-purple-400/10",
          children: /* @__PURE__ */ jsxs("a", { href: resource.link, className: "flex items-center gap-3 flex-1", children: [
            /* @__PURE__ */ jsx(Icon2, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: resource.title }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: resource.description })
            ] }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 ml-auto" })
          ] })
        },
        index
      );
    }) })
  ] });
}
var ContextMenu = Root;
var ContextMenuTrigger = Trigger;
var ContextMenuGroup = Group;
var ContextMenuPortal = Portal$1;
var ContextMenuSub = Sub;
var ContextMenuRadioGroup = RadioGroup$1;
var ContextMenuSubTrigger = React58.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none rounded-sm transition-colors duration-200",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ContextMenuSubTrigger.displayName = SubTrigger.displayName;
var ContextMenuSubContent = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden border bg-popover p-1 text-popover-foreground rounded-md shadow-md transition-all duration-200",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = SubContent.displayName;
var ContextMenuContent = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsx(
  Content$1,
  {
    ref,
    className: cn(
      "z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden border bg-popover p-1 text-popover-foreground",
      "rounded-md",
      "shadow-md",
      "transition-all duration-200 ease-in-out",
      "animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
ContextMenuContent.displayName = Content$1.displayName;
var ContextMenuItem = React58.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none",
      "rounded-sm",
      "transition-colors duration-200 ease-in-out",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuItem.displayName = Item.displayName;
var ContextMenuCheckboxItem = React58.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
ContextMenuCheckboxItem.displayName = CheckboxItem.displayName;
var ContextMenuRadioItem = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
ContextMenuRadioItem.displayName = RadioItem.displayName;
var ContextMenuLabel = React58.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  Label$1,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm text-foreground font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuLabel.displayName = Label$1.displayName;
var ContextMenuSeparator = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
ContextMenuSeparator.displayName = Separator.displayName;
var ContextMenuShortcut = ({
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
ContextMenuShortcut.displayName = "ContextMenuShortcut";
var DropdownMenu = Root$2;
var DropdownMenuTrigger = Trigger$2;
var DropdownMenuGroup = Group$1;
var DropdownMenuPortal = Portal$2;
var DropdownMenuSub = Sub$1;
var DropdownMenuRadioGroup = RadioGroup$2;
var DropdownMenuSubTrigger = React58.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SubTrigger$1,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger$1.displayName;
var DropdownMenuSubContent = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SubContent$1,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent$1.displayName;
var DropdownMenuContent = React58.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(Portal$2, { children: /* @__PURE__ */ jsx(
  Content$2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content$2.displayName;
var DropdownMenuItem = React58.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  Item$1,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item$1.displayName;
var DropdownMenuCheckboxItem = React58.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  CheckboxItem$1,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator$1, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem$1.displayName;
var DropdownMenuRadioItem = React58.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  RadioItem$1,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator$1, { children: /* @__PURE__ */ jsx(Check, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem$1.displayName;
var DropdownMenuLabel = React58.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  Label$2,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = Label$2.displayName;
var DropdownMenuSeparator = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Separator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator$1.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var HoverCard = Root$3;
var HoverCardTrigger = Trigger$3;
var HoverCardContent = React58.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  Content$3,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = Content$3.displayName;
var Popover = Root$4;
var PopoverTrigger = Trigger$4;
var PopoverContent = React58.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(Portal$3, { children: /* @__PURE__ */ jsx(
  Content$4,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content$4.displayName;
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
var modalVariants = cva(
  "relative bg-background text-foreground shadow-lg rounded-lg",
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
        full: "max-w-full mx-4",
        screen: "w-screen h-screen max-w-none rounded-none"
      },
      variant: {
        default: "border border-border",
        glass: "glass border-border",
        neon: "neon-border dark:shadow-glow-cyan",
        minimal: "border-0 shadow-none"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
var Modal = React58.forwardRef(
  ({
    className,
    size = "md",
    variant = "default",
    open,
    onOpenChange,
    title,
    description,
    closable = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    showBackdrop = true,
    preventBodyScroll = true,
    loading = false,
    children,
    ...props
  }, ref) => {
    const modalRef = React58.useRef(null);
    React58.useEffect(() => {
      if (open && preventBodyScroll) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open, preventBodyScroll]);
    React58.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    React58.useEffect(() => {
      if (open && modalRef.current) {
        modalRef.current.focus();
      }
    }, [open]);
    const handleBackdropClick = React58.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, onOpenChange]);
    if (!open) return null;
    return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      showBackdrop && /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: modalRef,
          className: cn(
            modalVariants({ size, variant }),
            "relative z-10 max-h-[90vh] overflow-hidden",
            "animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            loading && "opacity-70",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? "modal-title" : void 0,
          "aria-describedby": description ? "modal-description" : void 0,
          tabIndex: -1,
          ...props,
          children: [
            (title || closable) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-border", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                title && /* @__PURE__ */ jsx("h2", { id: "modal-title", className: "text-lg font-semibold", children: title }),
                description && /* @__PURE__ */ jsx("p", { id: "modal-description", className: "text-sm text-muted-foreground mt-1", children: description })
              ] }),
              closable && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => onOpenChange(false),
                  className: "h-8 w-8 p-0",
                  "aria-label": "Fechar modal",
                  children: /* @__PURE__ */ jsx(X$1, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "max-h-[calc(90vh-8rem)] overflow-y-auto", children })
          ]
        }
      )
    ] });
  }
);
Modal.displayName = "Modal";
var ModalHeader = React58.forwardRef(
  ({
    className,
    title,
    description,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center justify-between p-6 border-b border-border", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            title && /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: description })
          ] }),
          children
        ]
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";
var ModalContent = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("p-6", className),
        ...props,
        children
      }
    );
  }
);
ModalContent.displayName = "ModalContent";
var ModalFooter = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-end gap-3 p-6 border-t border-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";
var ModalTrigger = React58.forwardRef(
  ({
    className,
    children,
    onOpen,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React58.useCallback((event) => {
      onClick?.(event);
      onOpen?.();
    }, [onClick, onOpen]);
    return /* @__PURE__ */ jsx(
      Button,
      {
        ref,
        className,
        onClick: handleClick,
        ...props,
        children
      }
    );
  }
);
ModalTrigger.displayName = "ModalTrigger";
var drawerVariants = cva(
  "fixed z-50 bg-background border border-border shadow-lg",
  {
    variants: {
      position: {
        left: "left-0 top-0 h-full w-80",
        right: "right-0 top-0 h-full w-80",
        top: "top-0 left-0 right-0 h-auto max-h-[80vh]",
        bottom: "bottom-0 left-0 right-0 h-auto max-h-[80vh]"
      },
      size: {
        sm: "w-64",
        md: "w-80",
        lg: "w-96",
        xl: "w-[480px]",
        full: "w-full"
      },
      variant: {
        default: "bg-background",
        glass: "glass",
        neon: "neon-border dark:shadow-glow-cyan"
      }
    },
    defaultVariants: {
      position: "right",
      size: "md",
      variant: "default"
    }
  }
);
var Drawer = React58.forwardRef(
  ({
    className,
    position = "right",
    size = "md",
    variant = "default",
    open,
    onOpenChange,
    title,
    description,
    closable = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    showBackdrop = true,
    preventBodyScroll = true,
    loading = false,
    children,
    ...props
  }, ref) => {
    const drawerRef = React58.useRef(null);
    React58.useEffect(() => {
      if (open && preventBodyScroll) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open, preventBodyScroll]);
    React58.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    React58.useEffect(() => {
      if (open && drawerRef.current) {
        drawerRef.current.focus();
      }
    }, [open]);
    const handleBackdropClick = React58.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, onOpenChange]);
    const animationClasses = {
      left: open ? "animate-in slide-in-from-left duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-left duration-[var(--motion-duration-normal)]",
      right: open ? "animate-in slide-in-from-right duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-right duration-[var(--motion-duration-normal)]",
      top: open ? "animate-in slide-in-from-top duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-top duration-[var(--motion-duration-normal)]",
      bottom: open ? "animate-in slide-in-from-bottom duration-[var(--motion-duration-normal)]" : "animate-out slide-out-to-bottom duration-[var(--motion-duration-normal)]"
    };
    const sizeClasses2 = {
      top: open ? "max-h-[80vh]" : "max-h-0",
      bottom: open ? "max-h-[80vh]" : "max-h-0"
    };
    if (!open && !showBackdrop) return null;
    return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50", children: [
      showBackdrop && open && /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: drawerRef,
          className: cn(
            drawerVariants({ position, variant }),
            position === "left" && size && sizeClasses2[size],
            position === "right" && size && sizeClasses2[size],
            animationClasses[position],
            loading && "opacity-70",
            !open && "pointer-events-none",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? "drawer-title" : void 0,
          "aria-describedby": description ? "drawer-description" : void 0,
          tabIndex: -1,
          ...props,
          children: [
            (title || closable) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                title && /* @__PURE__ */ jsx("h2", { id: "drawer-title", className: "text-lg font-semibold", children: title }),
                description && /* @__PURE__ */ jsx("p", { id: "drawer-description", className: "text-sm text-muted-foreground mt-1", children: description })
              ] }),
              closable && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => onOpenChange(false),
                  className: "h-8 w-8 p-0",
                  "aria-label": "Fechar drawer",
                  children: /* @__PURE__ */ jsx(X$1, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: cn(
              "overflow-y-auto",
              position === "top" || position === "bottom" ? "max-h-[60vh]" : "h-full"
            ), children })
          ]
        }
      )
    ] });
  }
);
Drawer.displayName = "Drawer";
var DrawerHeader = React58.forwardRef(
  ({
    className,
    title,
    description,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex items-center justify-between p-4 border-b border-border", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            title && /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: description })
          ] }),
          children
        ]
      }
    );
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerContent = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("p-4", className),
        ...props,
        children
      }
    );
  }
);
DrawerContent.displayName = "DrawerContent";
var DrawerFooter = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-end gap-3 p-4 border-t border-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTrigger = React58.forwardRef(
  ({
    className,
    children,
    onOpen,
    onClick,
    ...props
  }, ref) => {
    const handleClick = React58.useCallback((event) => {
      onClick?.(event);
      onOpen?.();
    }, [onClick, onOpen]);
    return /* @__PURE__ */ jsx(
      Button,
      {
        ref,
        className,
        onClick: handleClick,
        ...props,
        children
      }
    );
  }
);
DrawerTrigger.displayName = "DrawerTrigger";
var ZOOM_CONFIG = {
  MIN: 0.5,
  MAX: 4,
  STEP: 0.25,
  DEFAULT: 1
};
var lightboxVariants = cva(
  "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        vignette: "bg-gradient-to-b from-black/60 via-black/95 to-black/60",
        subtle: "bg-black/85 backdrop-blur-none"
      },
      animation: {
        none: "",
        fade: "animate-in fade-in duration-300",
        slideUp: "animate-in slide-in-from-bottom duration-300",
        slideDown: "animate-in slide-in-from-top duration-300"
      }
    },
    defaultVariants: {
      variant: "default",
      animation: "fade"
    }
  }
);
var Lightbox = React58.forwardRef(
  ({
    className,
    variant = "default",
    animation = "fade",
    items,
    index,
    onIndexChange,
    open,
    onOpenChange,
    showControls = true,
    showThumbnails = false,
    allowDownload = false,
    allowZoom = false,
    allowRotation = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    showProgress = true,
    enableGestures = true,
    autoPlayInterval,
    autoPlayVideos = false,
    thumbnailSize = "md",
    thumbnailsPosition = "bottom",
    mediaContainerClassName,
    ...props
  }, ref) => {
    const [zoom, setZoom] = React58.useState(ZOOM_CONFIG.DEFAULT);
    const [rotation, setRotation] = React58.useState(0);
    const [isPlaying, setIsPlaying] = React58.useState(autoPlayVideos);
    const [isFullscreen, setIsFullscreen] = React58.useState(false);
    const [touchStart, setTouchStart] = React58.useState(null);
    const [isDragging, setIsDragging] = React58.useState(false);
    const [dragOffset, setDragOffset] = React58.useState({ x: 0, y: 0 });
    const videoRef = React58.useRef(null);
    const containerRef = React58.useRef(null);
    const mediaRef = React58.useRef(null);
    const currentItem = items[index];
    const hasMultipleItems = items.length > 1;
    const isImage = currentItem?.type === "image";
    const isVideo = currentItem?.type === "video";
    React58.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open]);
    React58.useEffect(() => {
      if (!open) return;
      const handleKeyDown = (event) => {
        switch (event.key) {
          case "Escape":
            if (closeOnEscape) {
              onOpenChange(false);
            }
            break;
          case "ArrowLeft":
            handlePrevious();
            break;
          case "ArrowRight":
            handleNext();
            break;
          case " ":
            if (isVideo) {
              event.preventDefault();
              handlePlayPause();
            }
            break;
          case "+":
          case "=":
            if (allowZoom && isImage) {
              event.preventDefault();
              handleZoomIn();
            }
            break;
          case "-":
            if (allowZoom && isImage) {
              event.preventDefault();
              handleZoomOut();
            }
            break;
          case "0":
            if (allowZoom && isImage) {
              event.preventDefault();
              handleResetZoom();
            }
            break;
          case "r":
          case "R":
            if (allowRotation && isImage) {
              event.preventDefault();
              handleRotate();
            }
            break;
          case "f":
          case "F":
            handleToggleFullscreen();
            break;
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, index, zoom, isVideo, allowZoom, allowRotation]);
    React58.useEffect(() => {
      if (isVideo && autoPlayVideos && videoRef.current && open) {
        videoRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }, [index, isVideo, autoPlayVideos, open]);
    React58.useEffect(() => {
      if (!autoPlayInterval || !hasMultipleItems || !open) return;
      const interval = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }, [autoPlayInterval, hasMultipleItems, open, index]);
    React58.useEffect(() => {
      setZoom(ZOOM_CONFIG.DEFAULT);
      setRotation(0);
      setDragOffset({ x: 0, y: 0 });
      setIsDragging(false);
      if (isVideo) {
        setIsPlaying(autoPlayVideos);
      }
    }, [index, isVideo, autoPlayVideos]);
    const handlePrevious = React58.useCallback(() => {
      if (index > 0) {
        onIndexChange(index - 1);
      } else if (hasMultipleItems) {
        onIndexChange(items.length - 1);
      }
    }, [index, items.length, onIndexChange, hasMultipleItems]);
    const handleNext = React58.useCallback(() => {
      if (index < items.length - 1) {
        onIndexChange(index + 1);
      } else if (hasMultipleItems) {
        onIndexChange(0);
      }
    }, [index, items.length, onIndexChange, hasMultipleItems]);
    const handleZoomIn = React58.useCallback(() => {
      setZoom((prev) => Math.min(prev + ZOOM_CONFIG.STEP, ZOOM_CONFIG.MAX));
    }, []);
    const handleZoomOut = React58.useCallback(() => {
      setZoom((prev) => Math.max(prev - ZOOM_CONFIG.STEP, ZOOM_CONFIG.MIN));
    }, []);
    const handleResetZoom = React58.useCallback(() => {
      setZoom(ZOOM_CONFIG.DEFAULT);
      setRotation(0);
      setDragOffset({ x: 0, y: 0 });
    }, []);
    const handleRotate = React58.useCallback(() => {
      setRotation((prev) => (prev + 90) % 360);
    }, []);
    const handlePlayPause = React58.useCallback(() => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
      }
    }, [isPlaying]);
    const handleToggleFullscreen = React58.useCallback(() => {
      if (!containerRef.current) return;
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().then(() => {
          setIsFullscreen(true);
        });
      } else {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }, []);
    React58.useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);
    const handleDownload = React58.useCallback(() => {
      if (currentItem?.downloadUrl || currentItem?.url) {
        const link = document.createElement("a");
        link.href = currentItem.downloadUrl || currentItem.url;
        link.download = currentItem.title || "download";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, [currentItem]);
    const handleTouchStart = React58.useCallback((e) => {
      if (!enableGestures || !isImage || zoom <= ZOOM_CONFIG.DEFAULT) return;
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
      setIsDragging(true);
    }, [enableGestures, isImage, zoom]);
    const handleTouchMove = React58.useCallback((e) => {
      if (!touchStart || !isDragging || !isImage || zoom <= ZOOM_CONFIG.DEFAULT) return;
      const deltaX = e.touches[0].clientX - touchStart.x;
      const deltaY = e.touches[0].clientY - touchStart.y;
      setDragOffset({
        x: deltaX,
        y: deltaY
      });
    }, [touchStart, isDragging, isImage, zoom]);
    const handleTouchEnd = React58.useCallback(() => {
      if (!enableGestures || !isImage) return;
      if (!isDragging && touchStart && zoom <= ZOOM_CONFIG.DEFAULT) {
        const swipeThreshold = 50;
        const deltaX = dragOffset.x;
        if (Math.abs(deltaX) > swipeThreshold) {
          if (deltaX > 0) {
            handlePrevious();
          } else {
            handleNext();
          }
        }
      }
      setTouchStart(null);
      setIsDragging(false);
    }, [enableGestures, isImage, zoom, dragOffset, handlePrevious, handleNext, isDragging, touchStart]);
    const handleDoubleClick = React58.useCallback(() => {
      if (allowZoom && isImage) {
        if (zoom > ZOOM_CONFIG.DEFAULT) {
          handleResetZoom();
        } else {
          handleZoomIn();
        }
      }
    }, [allowZoom, isImage, zoom, handleResetZoom, handleZoomIn]);
    const transformStyle = {
      transform: `scale(${zoom}) rotate(${rotation}deg) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
      transition: isDragging ? "none" : "transform 0.2s ease-out",
      cursor: zoom > ZOOM_CONFIG.DEFAULT ? "grab" : "default"
    };
    const thumbnailClasses = {
      sm: "w-12 h-12",
      md: "w-16 h-16",
      lg: "w-20 h-20"
    };
    const thumbnailsPositionClasses = {
      bottom: "bottom-20 left-1/2 -translate-x-1/2 flex-row",
      left: "left-4 top-1/2 -translate-y-1/2 flex-col",
      right: "right-4 top-1/2 -translate-y-1/2 flex-col"
    };
    if (!open || !currentItem) return null;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(lightboxVariants({ variant, animation }), className),
        onClick: closeOnBackdrop ? () => onOpenChange(false) : void 0,
        ...props,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            ref: containerRef,
            className: "relative w-full h-full",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "absolute right-4 top-4 z-10 h-10 w-10 text-white hover:bg-white/20 rounded-full backdrop-blur-sm",
                  onClick: () => onOpenChange(false),
                  "aria-label": "Fechar lightbox",
                  children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center h-full px-4", children: [
                hasMultipleItems && /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-white hover:bg-white/20 rounded-full backdrop-blur-sm",
                    onClick: handlePrevious,
                    "aria-label": "Item anterior",
                    children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-6 w-6" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    ref: mediaRef,
                    className: cn(
                      "relative max-w-[95vw] max-h-[85vh] overflow-hidden",
                      mediaContainerClassName
                    ),
                    onTouchStart: handleTouchStart,
                    onTouchMove: handleTouchMove,
                    onTouchEnd: handleTouchEnd,
                    onDoubleClick: handleDoubleClick,
                    children: isImage ? /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: currentItem.url,
                        alt: currentItem.title || "",
                        className: "max-w-full max-h-full object-contain select-none",
                        style: transformStyle,
                        draggable: false
                      }
                    ) }) : /* @__PURE__ */ jsx(
                      "video",
                      {
                        ref: videoRef,
                        src: currentItem.url,
                        className: "max-w-full max-h-full object-contain rounded-lg",
                        controls: showControls,
                        autoPlay: autoPlayVideos,
                        playsInline: true,
                        onEnded: () => setIsPlaying(false),
                        onPlay: () => setIsPlaying(true),
                        onPause: () => setIsPlaying(false)
                      }
                    )
                  }
                ),
                hasMultipleItems && /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-white hover:bg-white/20 rounded-full backdrop-blur-sm",
                    onClick: handleNext,
                    "aria-label": "Pr\xF3ximo item",
                    children: /* @__PURE__ */ jsx(ChevronRight2, { className: "h-6 w-6" })
                  }
                )
              ] }),
              showProgress && hasMultipleItems && /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-1", children: items.map((_, idx) => /* @__PURE__ */ jsx(
                "button",
                {
                  className: cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    idx === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                  ),
                  onClick: () => onIndexChange(idx),
                  "aria-label": `Ir para item ${idx + 1}`
                },
                idx
              )) }),
              showControls && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 max-w-6xl mx-auto", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center text-white max-w-3xl", children: [
                  currentItem.title && /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-1", children: currentItem.title }),
                  currentItem.description && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90", children: currentItem.description }),
                  hasMultipleItems && /* @__PURE__ */ jsxs("p", { className: "text-xs opacity-75 mt-2", children: [
                    index + 1,
                    " de ",
                    items.length
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2", children: [
                  isVideo && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handlePlayPause,
                        "aria-label": isPlaying ? "Pausar" : "Reproduzir",
                        children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "w-px h-4 bg-white/30" })
                  ] }),
                  allowZoom && isImage && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleZoomOut,
                        disabled: zoom <= ZOOM_CONFIG.MIN,
                        "aria-label": "Reduzir zoom",
                        children: /* @__PURE__ */ jsx(ZoomOut, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "text-xs text-white min-w-[40px] text-center", children: [
                      Math.round(zoom * 100),
                      "%"
                    ] }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleZoomIn,
                        disabled: zoom >= ZOOM_CONFIG.MAX,
                        "aria-label": "Aumentar zoom",
                        children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleResetZoom,
                        disabled: zoom === ZOOM_CONFIG.DEFAULT && rotation === 0,
                        "aria-label": "Resetar zoom",
                        children: /* @__PURE__ */ jsx(Minimize2, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "w-px h-4 bg-white/30" })
                  ] }),
                  allowRotation && isImage && /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      className: "h-8 w-8 text-white hover:bg-white/20",
                      onClick: handleRotate,
                      "aria-label": "Rotacionar",
                      children: /* @__PURE__ */ jsx(RotateCw, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      className: "h-8 w-8 text-white hover:bg-white/20",
                      onClick: handleToggleFullscreen,
                      "aria-label": isFullscreen ? "Sair da tela cheia" : "Tela cheia",
                      children: isFullscreen ? /* @__PURE__ */ jsx(Minimize2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" })
                    }
                  ),
                  allowDownload && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("div", { className: "w-px h-4 bg-white/30" }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-white hover:bg-white/20",
                        onClick: handleDownload,
                        "aria-label": "Download",
                        children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] })
              ] }) }),
              showThumbnails && hasMultipleItems && /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "absolute z-10 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-lg",
                    "overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                    thumbnailsPositionClasses[thumbnailsPosition]
                  ),
                  children: items.map((item, idx) => /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: cn(
                        "relative flex-shrink-0 overflow-hidden rounded transition-all duration-200",
                        "border-2 focus:outline-none focus:ring-2 focus:ring-white/50",
                        idx === index ? "border-white ring-2 ring-white/30" : "border-transparent hover:border-white/50",
                        thumbnailClasses[thumbnailSize]
                      ),
                      onClick: () => onIndexChange(idx),
                      "aria-label": `Ver item ${idx + 1}`,
                      "aria-current": idx === index,
                      children: [
                        item.thumbnailUrl || item.type === "image" ? /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: item.thumbnailUrl || item.url,
                            alt: item.title || `Item ${idx + 1}`,
                            className: "w-full h-full object-cover",
                            loading: "lazy"
                          }
                        ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsx(Play, { className: "h-5 w-5 text-gray-400" }) }),
                        item.type === "video" && /* @__PURE__ */ jsx("div", { className: "absolute bottom-1 right-1 bg-black/60 rounded-full p-1", children: /* @__PURE__ */ jsx(Play, { className: "h-2 w-2 text-white" }) })
                      ]
                    },
                    idx
                  ))
                }
              )
            ]
          }
        )
      }
    );
  }
);
Lightbox.displayName = "Lightbox";
var confirmDialogVariants = cva(
  "relative bg-background text-foreground shadow-lg rounded-lg border",
  {
    variants: {
      variant: {
        default: "border-border",
        destructive: "border-destructive",
        warning: "border-amber-500",
        info: "border-blue-500",
        success: "border-emerald-500"
      },
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var ConfirmDialog = React58.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    open,
    onOpenChange,
    title,
    description,
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    onConfirm,
    onCancel,
    loading = false,
    closeOnConfirm = true,
    closeOnCancel = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    confirmVariant = "default"
    // props, // Props adicionais não utilizados
  }) => {
    const [internalLoading, setInternalLoading] = React58.useState(false);
    const isLoading = loading || internalLoading;
    React58.useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [open, closeOnEscape, onOpenChange]);
    const handleConfirm = React58.useCallback(async () => {
      if (isLoading) return;
      try {
        if (onConfirm) {
          setInternalLoading(true);
          await onConfirm();
        }
        if (closeOnConfirm) {
          onOpenChange(false);
        }
      } finally {
        setInternalLoading(false);
      }
    }, [isLoading, onConfirm, closeOnConfirm, onOpenChange]);
    const handleCancel = React58.useCallback(() => {
      if (isLoading) return;
      onCancel?.();
      if (closeOnCancel) {
        onOpenChange(false);
      }
    }, [isLoading, onCancel, closeOnCancel, onOpenChange]);
    const handleBackdropClick = React58.useCallback((event) => {
      if (event.target === event.currentTarget && closeOnBackdrop && !isLoading) {
        onOpenChange(false);
      }
    }, [closeOnBackdrop, isLoading, onOpenChange]);
    const getIcon = () => {
      switch (variant) {
        case "destructive":
          return /* @__PURE__ */ jsx(AlertTriangle3, { className: "h-6 w-6 text-destructive" });
        case "warning":
          return /* @__PURE__ */ jsx(AlertTriangle3, { className: "h-6 w-6 text-amber-500" });
        case "info":
          return /* @__PURE__ */ jsx(Info2, { className: "h-6 w-6 text-blue-500" });
        case "success":
          return /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 text-emerald-500" });
        default:
          return null;
      }
    };
    const getConfirmVariant = () => {
      if (confirmVariant !== "default") return confirmVariant;
      switch (variant) {
        case "destructive":
          return "destructive";
        case "warning":
          return "default";
        case "info":
          return "default";
        case "success":
          return "default";
        default:
          return "default";
      }
    };
    if (!open) return null;
    return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleBackdropClick
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            confirmDialogVariants({ variant, size }),
            "relative z-10 p-6 animate-in fade-in-0 zoom-in-95 duration-[var(--motion-duration-normal)]",
            className
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "confirm-title",
          "aria-describedby": "confirm-description",
          children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: handleCancel,
                className: "absolute right-4 top-4 h-8 w-8 p-0",
                disabled: isLoading,
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center max-w-sm mx-auto", children: [
              getIcon(),
              /* @__PURE__ */ jsx("h3", { id: "confirm-title", className: "text-lg font-semibold mt-4 mb-2", children: title }),
              description && /* @__PURE__ */ jsx("p", { id: "confirm-description", className: "text-sm text-muted-foreground mb-6", children: description }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-3 w-full", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: handleCancel,
                    disabled: isLoading,
                    className: "flex-1",
                    children: cancelText
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: getConfirmVariant(),
                    onClick: handleConfirm,
                    disabled: isLoading,
                    className: "flex-1",
                    children: confirmText
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] });
  }
);
ConfirmDialog.displayName = "ConfirmDialog";
function useConfirm() {
  const [isOpen, setIsOpen] = React58.useState(false);
  const [options, setOptions] = React58.useState(null);
  const confirm = React58.useCallback((options2) => {
    setOptions(options2);
    setIsOpen(true);
  }, []);
  const handleConfirm = React58.useCallback(async () => {
    if (options.onConfirm) {
      await options.onConfirm();
    }
    setIsOpen(false);
  }, [options]);
  const handleCancel = React58.useCallback(() => {
    setIsOpen(false);
  }, []);
  const ConfirmDialogComponent = React58.useCallback(() => /* @__PURE__ */ jsx(
    ConfirmDialog,
    {
      open: isOpen,
      onOpenChange: setIsOpen,
      title: options.title,
      description: options.description,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      variant: options.variant,
      confirmVariant: options.confirmVariant,
      onConfirm: handleConfirm,
      onCancel: handleCancel
    }
  ), [isOpen, options, handleConfirm, handleCancel]);
  return {
    confirm,
    ConfirmDialog: ConfirmDialogComponent
  };
}
function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
function isSameDay(a, b) {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function addMonths(date, amount) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + amount);
  return d;
}
function getMonthGrid(month) {
  const firstOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const startDay = firstOfMonth.getDay();
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() - startDay);
  const days = [];
  for (let i = 0; i < 42; i += 1) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    days.push(d);
  }
  return days;
}
function getWeekdayLabels(locale) {
  const base = new Date(2024, 0, 7);
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d.toLocaleDateString(locale, { weekday: "short" });
  });
}
function Calendar3({ className, selected, onSelect, disabled }) {
  const initialMonth = selected ?? /* @__PURE__ */ new Date();
  const [currentMonth, setCurrentMonth] = React58.useState(
    startOfDay(initialMonth)
  );
  const today = React58.useMemo(() => startOfDay(/* @__PURE__ */ new Date()), []);
  const days = React58.useMemo(() => getMonthGrid(currentMonth), [currentMonth]);
  const weekdayLabels = React58.useMemo(
    () => getWeekdayLabels("pt-BR"),
    []
  );
  const handlePrevMonth = React58.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, -1));
  }, []);
  const handleNextMonth = React58.useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);
  const handleSelect = React58.useCallback(
    (date) => {
      if (disabled?.(date)) return;
      if (onSelect) {
        if (selected && isSameDay(selected, date)) {
          onSelect(void 0);
        } else {
          onSelect(date);
        }
      }
    },
    [disabled, onSelect, selected]
  );
  const monthLabel = React58.useMemo(
    () => currentMonth.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    }),
    [currentMonth]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] rounded-lg border border-border shadow-sm",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-[--cell-size] w-[--cell-size] p-0",
              onClick: handlePrevMonth,
              "aria-label": "M\xEAs anterior",
              children: /* @__PURE__ */ jsx(ChevronLeft$1, { className: "size-4" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium capitalize", children: monthLabel }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "h-[--cell-size] w-[--cell-size] p-0",
              onClick: handleNextMonth,
              "aria-label": "Pr\xF3ximo m\xEAs",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-1 flex w-full", children: weekdayLabels.map((label) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-muted-foreground flex-1 select-none text-center text-[0.75rem] font-normal uppercase",
            children: label
          },
          label
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 gap-1", children: days.map((date) => {
          const isOutsideMonth = date.getMonth() !== currentMonth.getMonth() || date.getFullYear() !== currentMonth.getFullYear();
          const isSelected = selected ? isSameDay(selected, date) : false;
          const isToday = isSameDay(today, date);
          const isDisabled = disabled?.(date) ?? false;
          return /* @__PURE__ */ jsx(
            CalendarDayButton,
            {
              date,
              isOutside: isOutsideMonth,
              isSelected,
              isToday,
              disabled: isDisabled,
              onSelect: handleSelect
            },
            date.toISOString()
          );
        }) })
      ]
    }
  );
}
function CalendarDayButton({
  date,
  isOutside,
  isSelected,
  isToday,
  disabled,
  onSelect,
  className
}) {
  const handleClick = React58.useCallback(() => {
    if (disabled) return;
    onSelect?.(date);
  }, [date, disabled, onSelect]);
  const baseClasses = cn(
    "flex aspect-square h-9 w-9 items-center justify-center rounded-md text-sm font-normal transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    isOutside && "text-muted-foreground/60",
    disabled && "text-muted-foreground opacity-50 cursor-not-allowed",
    isToday && "border border-dashed border-primary",
    isSelected && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
    !isSelected && !disabled && !isOutside && "hover:bg-accent hover:text-accent-foreground",
    !isSelected && isOutside && !disabled && "hover:bg-muted hover:text-foreground",
    className
  );
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: handleClick,
      disabled,
      className: baseClasses,
      "aria-pressed": isSelected,
      children: /* @__PURE__ */ jsx("span", { className: "text-xs leading-none", children: date.getDate() })
    }
  );
}
var CarouselContext = React58.createContext(null);
function useCarousel() {
  const context = React58.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React58.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React58.useState(false);
    const [canScrollNext, setCanScrollNext] = React58.useState(false);
    const onSelect = React58.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React58.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React58.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React58.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React58.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React58.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    const contextValue = React58.useMemo(() => ({
      carouselRef,
      api,
      opts,
      orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext
    }), [api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext, carouselRef]);
    return /* @__PURE__ */ jsx(CarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        onKeyDownCapture: handleKeyDown,
        className: cn("relative", className),
        "aria-label": "Carousel",
        "aria-roledescription": "carousel",
        ...props,
        children
      }
    ) });
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React58.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React58.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "fieldset",
    {
      ref,
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React58.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChevronLeft$1, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React58.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
var chipVariants = cva(
  "inline-flex items-center gap-2 rounded-md border px-2.5 py-0.5 text-sm font-medium transition-all duration-[var(--motion-duration-fast)] ease-[var(--motion-easing-ease-out)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50",
        warning: "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50",
        error: "border-transparent bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50",
        outline: "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-8 px-2.5 text-sm",
        lg: "h-10 px-3 text-base"
      },
      removable: {
        true: "pr-1"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Chip = React58.forwardRef(
  ({
    className,
    variant,
    size,
    children,
    removable = false,
    onRemove,
    removeIcon,
    removeAriaLabel = "Remover",
    ...props
  }, ref) => {
    const handleRemove = (e) => {
      e.stopPropagation();
      onRemove?.();
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          chipVariants({ variant, size, removable }),
          className
        ),
        ...props,
        children: [
          children,
          removable && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleRemove,
              className: cn(
                "inline-flex items-center justify-center rounded-full p-0.5",
                "transition-colors duration-[var(--motion-duration-fast)]",
                "hover:bg-black/10 dark:hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50"
              ),
              "aria-label": removeAriaLabel,
              children: removeIcon || /* @__PURE__ */ jsx(
                X$1,
                {
                  className: "h-3 w-3 shrink-0",
                  strokeWidth: 2.5,
                  style: {
                    stroke: "currentColor"
                  }
                }
              )
            }
          )
        ]
      }
    );
  }
);
Chip.displayName = "Chip";
var spacingClasses5 = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3"
};
var ChipGroup = React58.forwardRef(
  ({
    className,
    spacing = "md",
    wrap = true,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "inline-flex items-center",
          spacingClasses5[spacing],
          wrap && "flex-wrap",
          className
        ),
        ...props,
        children
      }
    );
  }
);
ChipGroup.displayName = "ChipGroup";
function useMasonryLayout(containerRef, columns, gap) {
  const [positions, setPositions] = React58.useState([]);
  React58.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const columnWidth = (containerWidth - gap * (columns - 1)) / columns;
    const columnHeights = new Array(columns).fill(0);
    const newPositions = [];
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const height = child.offsetHeight;
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      const top = columnHeights[shortestColumnIndex];
      const left = shortestColumnIndex * (columnWidth + gap);
      newPositions.push({ top, left });
      columnHeights[shortestColumnIndex] += height + gap;
    }
    setPositions(newPositions);
  }, [columns, gap]);
  return positions;
}
var Masonry = React58.forwardRef(
  ({
    className,
    columns = { sm: 1, md: 2, lg: 3, xl: 4 },
    gap = 16,
    children,
    ...props
  }, ref) => {
    const innerRef = React58.useRef(null);
    const [resolvedColumns, setResolvedColumns] = React58.useState(4);
    React58.useEffect(() => {
      const handleResize = () => {
        if (typeof columns === "number") {
          setResolvedColumns(columns);
        } else {
          const width = window.innerWidth;
          if (width >= 1280 && columns.xl) setResolvedColumns(columns.xl);
          else if (width >= 1024 && columns.lg) setResolvedColumns(columns.lg);
          else if (width >= 768 && columns.md) setResolvedColumns(columns.md);
          else if (columns.sm) setResolvedColumns(columns.sm);
          else setResolvedColumns(1);
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [columns]);
    const gapValue = typeof gap === "number" ? gap : parseInt(gap) || 16;
    const positions = useMasonryLayout(innerRef, resolvedColumns, gapValue);
    const childrenWithPositions = React58.Children.toArray(children).map((child, index) => {
      if (!React58.isValidElement(child)) return child;
      const position = positions[index];
      if (!position) return child;
      const containerWidth = innerRef.current?.offsetWidth || 0;
      const columnWidth = (containerWidth - gapValue * (resolvedColumns - 1)) / resolvedColumns;
      return React58.cloneElement(child, {
        style: {
          ...child.props.style,
          position: "absolute",
          top: position.top,
          left: position.left,
          width: columnWidth,
          transition: "all 0.3s ease-in-out"
        }
      });
    });
    const containerHeight = positions.reduce((max, pos, index) => {
      const child = innerRef.current?.children[index];
      if (!child) return max;
      return Math.max(max, pos.top + child.offsetHeight);
    }, 0);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("relative", className),
        ...props,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: innerRef,
            className: "relative w-full",
            style: { height: containerHeight },
            children: childrenWithPositions
          }
        )
      }
    );
  }
);
Masonry.displayName = "Masonry";
var MasonryItem = React58.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("overflow-hidden", className),
        ...props,
        children
      }
    );
  }
);
MasonryItem.displayName = "MasonryItem";
var defaultIcons2 = {
  completed: Check,
  pending: Circle,
  error: X$1,
  warning: AlertTriangle,
  default: "div"
};
var timelineDotVariants = cva(
  "relative flex items-center justify-center rounded-full border-2 bg-background",
  {
    variants: {
      status: {
        default: "border-border",
        active: "border-primary bg-primary",
        completed: "border-emerald-500 bg-emerald-500",
        pending: "border-amber-500 bg-amber-500",
        error: "border-red-500 bg-red-500",
        warning: "border-orange-500 bg-orange-500"
      },
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      status: "default",
      size: "md"
    }
  }
);
var TimelineItem = React58.forwardRef(
  ({
    className,
    status = "default",
    icon,
    iconType,
    dotSize = "md",
    children,
    date,
    title,
    description,
    ...props
  }, ref) => {
    let IconComponent = icon;
    if (!IconComponent && iconType) {
      IconComponent = React58.createElement(defaultIcons2[iconType], {
        className: "h-2.5 w-2.5 text-primary-foreground"
      });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("relative flex gap-4 pb-8 last:pb-0", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-[calc(var(--dot-size)/2)] top-8 h-full w-0.5 bg-border last:hidden",
              style: { "--dot-size": dotSize === "sm" ? "12px" : dotSize === "lg" ? "20px" : "16px" }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: cn(timelineDotVariants({ status, size: dotSize })), children: IconComponent }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            (date || title) && /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-baseline gap-2", children: [
              date && /* @__PURE__ */ jsx("time", { className: "text-xs text-muted-foreground whitespace-nowrap", children: date }),
              title && /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-foreground", children: title })
            ] }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: description }),
            children
          ] })
        ]
      }
    );
  }
);
TimelineItem.displayName = "TimelineItem";
var Timeline = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("space-y-0", className),
        ...props,
        children: React58.Children.map(children, (child) => {
          if (!React58.isValidElement(child)) return child;
          return React58.cloneElement(child, {
            ...child.props,
            className: cn(child.props.className)
          });
        })
      }
    );
  }
);
Timeline.displayName = "Timeline";
var TimelineSeparator = React58.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "relative my-4 py-2",
          "before:absolute before:left-[calc(var(--dot-size)/2)] before:top-0 before:h-full before:w-0.5 before:bg-border",
          className
        ),
        style: { "--dot-size": "16px" },
        ...props,
        children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded-full bg-background border-2 border-border" }),
          children && /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-muted-foreground", children })
        ] })
      }
    );
  }
);
TimelineSeparator.displayName = "TimelineSeparator";
var ratingVariants = cva(
  "flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "gap-0.5",
        md: "gap-1",
        lg: "gap-1.5"
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col"
      }
    },
    defaultVariants: {
      size: "md",
      orientation: "horizontal"
    }
  }
);
var starSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6"
};
var Rating = React58.forwardRef(
  ({
    className,
    value = 0,
    max = 5,
    allowHalf = false,
    readOnly = false,
    showValue = false,
    onChange,
    onHover,
    size = "md",
    orientation = "horizontal",
    fillIcon,
    emptyIcon,
    halfIcon,
    color,
    ...props
  }, ref) => {
    const [hoverValue, setHoverValue] = React58.useState(0);
    const [isHovering, setIsHovering] = React58.useState(false);
    const displayValue = isHovering ? hoverValue : value;
    const formattedValue = allowHalf ? displayValue.toFixed(1) : Math.round(displayValue).toString();
    const handleStarClick = (starValue) => {
      if (readOnly) return;
      onChange?.(starValue);
    };
    const handleMouseMove = (event, starIndex) => {
      if (readOnly) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const { width } = rect;
      const { offsetX } = event.nativeEvent;
      let newHoverValue = starIndex + 1;
      if (allowHalf) {
        const isHalf = offsetX < width / 2;
        if (isHalf) {
          newHoverValue = starIndex + 0.5;
        }
      }
      setHoverValue(newHoverValue);
      onHover?.(newHoverValue);
    };
    const handleMouseEnter = () => {
      if (!readOnly) {
        setIsHovering(true);
      }
    };
    const handleMouseLeave = () => {
      if (!readOnly) {
        setIsHovering(false);
        setHoverValue(0);
      }
    };
    const renderStar = (starIndex) => {
      const starValue = starIndex + 1;
      const isFilled = starValue <= displayValue;
      const isHalf = allowHalf && starValue - 0.5 === displayValue;
      let icon = emptyIcon || /* @__PURE__ */ jsx(Star, { className: starSizeClasses[size] });
      if (isHalf) {
        icon = halfIcon || /* @__PURE__ */ jsx(StarHalf, { className: starSizeClasses[size] });
      } else if (isFilled) {
        icon = fillIcon || /* @__PURE__ */ jsx(Star, { className: starSizeClasses[size], fill: "currentColor" });
      }
      const iconStyle = color && (isFilled || isHalf) ? { color } : void 0;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "cursor-pointer transition-all duration-[var(--motion-duration-fast)]",
            "hover:scale-110 active:scale-95",
            readOnly && "cursor-default",
            isFilled || isHalf ? "text-primary" : "text-muted-foreground/30"
          ),
          onMouseMove: (e) => handleMouseMove(e, starIndex),
          onClick: () => handleStarClick(isHalf ? starIndex + 0.5 : starValue),
          style: iconStyle,
          children: icon
        },
        starIndex
      );
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(ratingVariants({ size, orientation }), className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...props,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          Array.from({ length: max }, (_, index) => renderStar(index)),
          showValue && /* @__PURE__ */ jsxs("span", { className: cn(
            "ml-2 text-sm font-medium",
            orientation === "vertical" && "ml-0 mt-2"
          ), children: [
            formattedValue,
            "/",
            max
          ] })
        ] })
      }
    );
  }
);
Rating.displayName = "Rating";
var progressHeightClasses = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
};
var RatingProgress = React58.forwardRef(
  ({
    className,
    value,
    color,
    height = "md",
    showPercentage = false,
    ...props
  }, ref) => {
    const percentage = Math.min(100, Math.max(0, value));
    return /* @__PURE__ */ jsxs("div", { className: cn("w-full", className), ...props, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          className: cn(
            "w-full bg-muted rounded-full overflow-hidden",
            progressHeightClasses[height]
          ),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "h-full bg-primary transition-all duration-[var(--motion-duration-normal)] ease-[var(--motion-easing-ease-out)]",
                color && "opacity-80"
              ),
              style: {
                width: `${percentage}%`,
                backgroundColor: color
              }
            }
          )
        }
      ),
      showPercentage && /* @__PURE__ */ jsxs("span", { className: "mt-1 text-xs text-muted-foreground", children: [
        percentage.toFixed(0),
        "%"
      ] })
    ] });
  }
);
RatingProgress.displayName = "RatingProgress";
var RatingSummary = React58.forwardRef(
  ({
    className,
    average,
    total,
    distribution,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("space-y-2", className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: average.toFixed(1) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(Rating, { value: average, readOnly: true, size: "sm" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                total,
                " ",
                total === 1 ? "avalia\xE7\xE3o" : "avalia\xE7\xF5es"
              ] })
            ] })
          ] }),
          distribution && /* @__PURE__ */ jsx("div", { className: "space-y-1", children: distribution.map(({ rating, count }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground w-3", children: rating }),
            /* @__PURE__ */ jsx(
              RatingProgress,
              {
                value: total > 0 ? count / total * 100 : 0,
                height: "sm",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground w-8 text-right", children: count })
          ] }, rating)) })
        ]
      }
    );
  }
);
RatingSummary.displayName = "RatingSummary";
var STAR_CONFIGS = {
  default: {
    count: 150,
    sizes: [1, 2, 3],
    opacity: [0.3, 0.5, 0.7, 0.9]
  },
  dense: {
    count: 300,
    sizes: [1, 2, 3, 4],
    opacity: [0.2, 0.4, 0.6, 0.8]
  },
  sparse: {
    count: 75,
    sizes: [2, 3, 4],
    opacity: [0.4, 0.6, 0.8]
  }
};
function generateStars(count, sizes, opacity) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      opacity: opacity[Math.floor(Math.random() * opacity.length)],
      twinkle: Math.random() > 0.8
    });
  }
  return stars;
}
function Star2({ star }) {
  const style = {
    left: `${star.x}%`,
    top: `${star.y}%`,
    width: `${star.size}px`,
    height: `${star.size}px`,
    opacity: star.opacity
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `absolute rounded-full bg-white ${star.twinkle ? "animate-pulse" : ""}`,
      style
    }
  );
}
function CelestialBackground({
  variant = "default"
} = {}) {
  const config = STAR_CONFIGS[variant];
  const [stars, setStars] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const cyan400 = tokens.primitives.color.cyan["400"];
  const purple400 = tokens.primitives.color.purple["400"];
  const pink500 = tokens.primitives.color.pink["500"];
  useEffect(() => {
    setStars(generateStars(config.count, [...config.sizes], [...config.opacity]));
    setIsMounted(true);
  }, [config.count, config.sizes, config.opacity]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-1000",
      style: {
        background: `
          radial-gradient(ellipse at top, ${hexToRGBA(cyan400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, ${hexToRGBA(purple400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, ${hexToRGBA(pink500, 0.05)} 0%, transparent 50%)
        `
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 ${GRADIENT_DIRECTIONS.TO_BOTTOM} from-black via-purple-950/35 to-black` }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(cyan400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(purple400, 0.3)} 0%, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15",
              style: {
                background: `radial-gradient(circle, ${hexToRGBA(pink500, 0.2)} 0%, transparent 70%)`
              }
            }
          )
        ] }),
        isMounted && stars.map((star) => /* @__PURE__ */ jsx(Star2, { star }, star.id))
      ]
    }
  );
}
function FloatingGrid({
  variant = "default",
  intensity = 0.5
} = {}) {
  const canvasRef = useRef(null);
  const { theme } = useTheme$1();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted || theme !== "dark") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const gridConfig = {
      default: { spacing: 100, lineWidth: 0.5 },
      dense: { spacing: 60, lineWidth: 0.3 },
      sparse: { spacing: 150, lineWidth: 0.5 }
    };
    const config = gridConfig[variant];
    let animationFrame;
    let time = 0;
    const animate = () => {
      time += 0.01;
      const pulseIntensity = intensity * (0.8 + Math.sin(time) * 0.2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cyan400 = tokens.primitives.color.cyan["400"];
      const strokeColor = hexToRGBA(cyan400, pulseIntensity * 1.2);
      const fillColor = hexToRGBA(cyan400, pulseIntensity * 0.6);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = config.lineWidth;
      for (let x = 0; x < canvas.width; x += config.spacing) {
        const offsetX = Math.sin(time + x * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += config.spacing) {
        const offsetY = Math.cos(time + y * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
        ctx.stroke();
      }
      ctx.fillStyle = fillColor;
      for (let x = 0; x < canvas.width; x += config.spacing) {
        for (let y = 0; y < canvas.height; y += config.spacing) {
          const size = 1 + Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [mounted, theme, variant, intensity]);
  if (!mounted || theme !== "dark") {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 pointer-events-none opacity-30",
      style: { mixBlendMode: "screen" }
    }
  );
}
var MOBILE_BREAKPOINT = 640;
var TABLET_BREAKPOINT = 1024;
var BINARY_PATTERNS = [
  "0101",
  "1010",
  "0110",
  "1001",
  "0011",
  "1100",
  "1111",
  "0000",
  "1000",
  "0111",
  "1101",
  "0010",
  "0100",
  "1110",
  "1011",
  "0110",
  "0001",
  "1010",
  "1001",
  "0011",
  "0101",
  "0111",
  "0100",
  "1000",
  "1100",
  "0011",
  "1001",
  "0110",
  "1010",
  "0101",
  "0000",
  "1111",
  "0010",
  "1101",
  "0111",
  "1000"
];
function generateCharacters(count) {
  return Array.from({ length: count }).map((_, idx) => {
    if (idx === 0) return Math.random() > 0.5 ? "1" : "0";
    const pattern = BINARY_PATTERNS[Math.floor(Math.random() * BINARY_PATTERNS.length)] || "0101";
    return pattern[idx % pattern.length] || "0";
  });
}
function generateColumn(i, columnCount, isMobile, isTablet) {
  const randomId = Math.round(Math.random() * 1e4);
  const charactersCount = isMobile ? 12 + Math.floor(Math.random() * 8) : 15 + Math.floor(Math.random() * 12);
  return {
    id: `col-${i}-${randomId}`,
    leftPct: i / columnCount * 100,
    fontSize: isMobile ? 14 + Math.random() * 6 : isTablet ? 16 + Math.random() * 8 : 18 + Math.random() * 8,
    animationDuration: 6 + Math.random() * 4,
    // 6-10s para chuva devagar
    animationDelay: i / columnCount * 8,
    characters: generateCharacters(charactersCount)
  };
}
function MatrixBackgroundInner({ variant = "global" }) {
  const [matrixColumns, setMatrixColumns] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const initializeMatrix = useCallback(() => {
    if (isInitialized || typeof window === "undefined") return;
    const width = window.innerWidth;
    const isMobile = width < MOBILE_BREAKPOINT;
    const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
    const columnCount = isMobile ? Math.min(18, Math.max(10, Math.floor(width / 35))) : isTablet ? Math.min(28, Math.max(16, Math.floor(width / 38))) : Math.min(40, Math.max(25, Math.floor(width / 40)));
    const initialColumns = Array.from({ length: columnCount }).map(
      (_, i) => generateColumn(i, columnCount, isMobile, isTablet)
    );
    setMatrixColumns(initialColumns);
    setIsInitialized(true);
  }, [isInitialized]);
  useEffect(() => {
    if (typeof window !== "undefined" && !isInitialized) {
      initializeMatrix();
    }
  }, [isInitialized, initializeMatrix]);
  if (!matrixColumns.length) return null;
  const positionClass = variant === "global" ? "fixed inset-0 -z-10" : "absolute inset-0";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%) translateZ(0);
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) translateZ(0);
            opacity: 0;
          }
        }
        .animate-matrix-fall {
          animation: matrix-fall 8s linear infinite;
          will-change: transform, opacity;
        }
      ` }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "pointer-events-none overflow-hidden select-none",
          positionClass
        ),
        style: {
          perspective: 1200,
          transformStyle: "preserve-3d"
        },
        "aria-hidden": "true",
        children: matrixColumns.map((column, columnIndex) => {
          const depthFactor = columnIndex % 8 - 4;
          const translateZ = depthFactor * 80;
          const scale = 1 + depthFactor * -0.07;
          const skewY = depthFactor * -3;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "absolute top-[-110%] h-[220%]",
                "animate-matrix-fall"
              ),
              style: {
                left: `${column.leftPct}%`,
                fontSize: column.fontSize,
                animationDuration: `${column.animationDuration}s`,
                animationDelay: `${column.animationDelay}s`,
                transform: `translateZ(${translateZ}px) scale(${scale}) skewY(${skewY}deg)`,
                filter: "blur(0.3px)"
                // Leve blur para efeito mais suave
              },
              children: column.characters.map((ch, idx) => {
                const intensity = idx === 0 ? 100 : Math.max(30, 100 - idx * 5);
                const glowIntensity = idx === 0 ? 12 : Math.max(4, 12 - idx * 0.8);
                return /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn(
                      "block font-mono leading-tight",
                      idx === 0 && "font-bold"
                    ),
                    style: {
                      // Usa token dedicado de efeito para a chuva Matrix
                      color: "var(--effect-matrix-rain-color)",
                      opacity: intensity / 100,
                      textShadow: `
                        0 0 ${glowIntensity}px var(--effect-matrix-rain-color),
                        0 0 ${glowIntensity * 2}px var(--effect-matrix-rain-color),
                        0 0 ${glowIntensity * 3}px var(--effect-matrix-rain-color)
                      `,
                      filter: idx === 0 ? "brightness(1.4)" : "none"
                    },
                    children: ch
                  },
                  `${column.id}-${idx}`
                );
              })
            },
            column.id
          );
        })
      }
    )
  ] });
}
var MatrixBackground = memo(MatrixBackgroundInner);
function StarsBackground() {
  const { resolvedTheme } = useTheme$1();
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const starsCount = 150;
    const newStars = Array.from({ length: starsCount }, (_, i) => {
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      const randomSize = Math.random() * 2 + 0.5;
      const randomDelay = Math.random() * 3;
      const randomOpacity = 0.6 + Math.random() * 0.4;
      return {
        id: i,
        left: randomLeft,
        top: randomTop,
        size: randomSize,
        delay: randomDelay,
        opacity: randomOpacity
      };
    });
    setStars(newStars);
  }, [mounted]);
  if (!mounted) {
    return null;
  }
  if (resolvedTheme !== "dark") {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        style: { zIndex: 0 },
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute rounded-full",
            style: {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              // Usa token dedicado de efeito para a cor das estrelas
              backgroundColor: "var(--effect-star-color)",
              boxShadow: `0 0 ${star.size * 2}px var(--effect-star-color)`,
              animation: "starTwinkle 3s ease-in-out infinite",
              animationDelay: `${star.delay}s`
            }
          },
          star.id
        )) })
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        /* Anima\xE7\xE3o de brilho das estrelas */
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      ` })
  ] });
}
var PARTICLE_POSITIONS = {
  default: {
    particle1: "top-20 left-1/4",
    particle2: "top-40 right-1/3",
    particle3: "bottom-40 left-1/2"
  },
  alt1: {
    particle1: "top-24 left-1/5",
    particle2: "top-80 right-1/5",
    particle3: "bottom-80 left-1/3"
  },
  alt2: {
    particle1: "top-32 left-1/3",
    particle2: "top-60 right-1/4",
    particle3: "bottom-60 left-1/5"
  }
};
function ParticlesEffect({
  variant = "default"
} = {}) {
  const selectedPositions = PARTICLE_POSITIONS[variant];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 z-0",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle1} w-1 h-1 rounded-full animate-pulse opacity-40 bg-[var(--color-text-neon-cyan)]`
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle2} w-0.5 h-0.5 rounded-full animate-pulse opacity-30 bg-[var(--color-text-neon-purple)]`,
            style: {
              animationDelay: ANIMATION_DELAYS.short
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle3} w-0.5 h-0.5 rounded-full animate-pulse opacity-35 bg-[var(--color-text-neon-pink)]`,
            style: {
              animationDelay: ANIMATION_DELAYS.long
            }
          }
        )
      ]
    }
  );
}

// src/lib/scroll-utils.ts
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
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const cleanup = onReducedMotionChange((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = useCallback(
    (target, options) => {
      smoothScrollTo(target, options);
    },
    []
  );
  const toTop = useCallback(() => {
    scrollToTop();
  }, []);
  const toPosition = useCallback((top, left = 0) => {
    scrollToPosition(left, top);
  }, []);
  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion
  };
}
var SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { scrollToTop: scrollToTop2, reducedMotion } = useSmoothScroll();
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsButtonVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick: scrollToTop2,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ jsx(ArrowUp$1, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ jsx(BackToTopButton, {});
}

// src/lib/cookie-utils.ts
var COOKIE_CONSENT_KEY = "cookie-consent";
var COOKIE_PREFERENCES_KEY = "cookie-preferences";
var COOKIE_VERSION = "1.0.0";
var _CookieManager = class _CookieManager {
  constructor() {
  }
  static getInstance() {
    if (!_CookieManager.instance) {
      _CookieManager.instance = new _CookieManager();
    }
    return _CookieManager.instance;
  }
  hasConsent() {
    if (typeof window === "undefined") return false;
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) return false;
      const consentData = JSON.parse(consent);
      return consentData.consented === true;
    } catch {
      return false;
    }
  }
  getPreferences() {
    if (typeof window === "undefined") return null;
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) return null;
      const consentData = JSON.parse(consent);
      return consentData.preferences || null;
    } catch {
      return null;
    }
  }
  saveConsent(preferences) {
    if (typeof window === "undefined") return;
    try {
      const consent = {
        version: COOKIE_VERSION,
        consented: true,
        timestamp: Date.now(),
        preferences
      };
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
      window.dispatchEvent(
        new CustomEvent("cookie-consent-updated", { detail: preferences })
      );
      this.loadScripts(preferences);
    } catch {
    }
  }
  updatePreferences(preferences) {
    this.saveConsent(preferences);
  }
  revokeConsent() {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      localStorage.removeItem(COOKIE_PREFERENCES_KEY);
      this.clearAnalyticsCookies();
      window.dispatchEvent(
        new CustomEvent("cookie-consent-revoked", { detail: null })
      );
    } catch {
    }
  }
  isAllowed(type) {
    const preferences = this.getPreferences();
    if (!preferences) return false;
    if (type === "essential") {
      return preferences.essential === true;
    }
    return preferences[type] === true;
  }
  loadScripts(preferences) {
    if (preferences.analytics) {
      this.loadGoogleAnalytics();
    } else {
      this.unloadGoogleAnalytics();
    }
  }
  loadGoogleAnalytics() {
  }
  unloadGoogleAnalytics() {
    const scripts = document.querySelectorAll(
      'script[src*="googletagmanager.com"], script[src*="google-analytics.com"]'
    );
    scripts.forEach((script) => script.remove());
    this.clearAnalyticsCookies();
    if (window.dataLayer) {
      window.dataLayer = [];
    }
    if (window.gtag) {
      delete window.gtag;
    }
  }
  clearAnalyticsCookies() {
    if (typeof document === "undefined") return;
    const analyticsCookies = [
      "_ga",
      "_ga_*",
      "_gid",
      "_gat",
      "_gat_gtag_*",
      "__utma",
      "__utmt",
      "__utmb",
      "__utmc",
      "__utmz",
      "__utmv"
    ];
    analyticsCookies.forEach((cookieName) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      if (cookieName.includes("*")) {
        const baseName = cookieName.replace("*", "");
        const cookies = document.cookie.split(";");
        cookies.forEach((cookie) => {
          const parts = cookie.split("=");
          if (parts.length === 0) return;
          const name = parts[0]?.trim();
          if (!name || !name.startsWith(baseName)) return;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
        });
      }
    });
  }
};
__publicField(_CookieManager, "instance");
var CookieManager = _CookieManager;
function getCookieManager() {
  return CookieManager.getInstance();
}
var NextLink = Link2;
function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [canShowBanner, setCanShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    // Sempre verdadeiro, não pode ser desabilitado
    performance: true,
    functionality: true,
    analytics: true
  });
  const cookieManager = getCookieManager();
  useEffect(() => {
    if (typeof globalThis.window === "undefined") return;
    if (cookieManager.hasConsent()) {
      const savedPreferences = cookieManager.getPreferences();
      if (savedPreferences) {
        setPreferences(savedPreferences);
      }
    } else {
      setCanShowBanner(true);
      const savedPreferences = cookieManager.getPreferences();
      if (savedPreferences) {
        setPreferences(savedPreferences);
      }
    }
  }, [cookieManager]);
  const hasShownBannerRef = useRef(false);
  const scrollThresholdRef = useRef(0);
  const scrollTimeoutRef = useRef(null);
  const mouseTimeoutRef = useRef(null);
  useEffect(() => {
    if (typeof globalThis.window === "undefined" || !canShowBanner || hasShownBannerRef.current)
      return;
    const heroHeight = globalThis.window.innerHeight;
    scrollThresholdRef.current = heroHeight * 0.3;
    const checkCanShow = () => {
      if (hasShownBannerRef.current) return;
      const scrollY = globalThis.window.scrollY || globalThis.window.pageYOffset;
      if (scrollY > scrollThresholdRef.current) {
        hasShownBannerRef.current = true;
        setShowBanner(true);
      }
    };
    const handleScroll = () => {
      checkCanShow();
    };
    const handleMouseMove = (e) => {
      if (hasShownBannerRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const mouseY = e.clientY + scrollY;
      if (mouseY > heroHeight + 150) {
        hasShownBannerRef.current = true;
        setShowBanner(true);
      }
    };
    checkCanShow();
    const throttledScroll = () => {
      if (scrollTimeoutRef.current) return;
      scrollTimeoutRef.current = setTimeout(() => {
        handleScroll();
        scrollTimeoutRef.current = null;
      }, 100);
    };
    const throttledMouseMove = (e) => {
      if (mouseTimeoutRef.current) return;
      mouseTimeoutRef.current = setTimeout(() => {
        handleMouseMove(e);
        mouseTimeoutRef.current = null;
      }, 200);
    };
    globalThis.window.addEventListener("scroll", throttledScroll, {
      passive: true
    });
    globalThis.window.addEventListener("mousemove", throttledMouseMove, {
      passive: true
    });
    return () => {
      globalThis.window.removeEventListener("scroll", throttledScroll);
      globalThis.window.removeEventListener("mousemove", throttledMouseMove);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
        mouseTimeoutRef.current = null;
      }
    };
  }, [canShowBanner]);
  const saveConsent = (prefs) => {
    cookieManager.saveConsent(prefs);
    setShowBanner(false);
    setShowCustomize(false);
  };
  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      performance: true,
      functionality: true,
      analytics: true
    });
  };
  const handleRejectOptional = () => {
    saveConsent({
      essential: true,
      performance: false,
      functionality: false,
      analytics: false
    });
  };
  const handleSavePreferences = () => {
    saveConsent(preferences);
  };
  const togglePreference = (key) => {
    if (key === "essential") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  if (!showBanner) return null;
  return /* @__PURE__ */ jsx(
    "dialog",
    {
      className: cn(
        "fixed bottom-0 left-0 right-0 p-4 sm:p-6",
        "animate-in slide-in-from-bottom-5 duration-300",
        "z-50"
      ),
      open: true,
      "aria-labelledby": "cookie-banner-title",
      "aria-describedby": "cookie-banner-description",
      children: /* @__PURE__ */ jsx(
        Card,
        {
          className: cn(
            "mx-auto max-w-4xl shadow-2xl",
            "dark:bg-black/95 dark:border-cyan-400/20",
            "bg-background/95 backdrop-blur-xl",
            "border-2"
          ),
          children: showCustomize ? (
            // Visualização principal do banner
            /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 flex-1", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "p-3 rounded-lg",
                        "bg-primary/10 dark:bg-cyan-400/10",
                        "border border-primary/20 dark:border-cyan-400/20"
                      ),
                      children: /* @__PURE__ */ jsx(Cookie, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
                    /* @__PURE__ */ jsx(
                      CardTitle,
                      {
                        id: "cookie-banner-title",
                        className: cn(
                          "text-lg",
                          "font-bold",
                          "dark:text-cyan-200"
                        ),
                        children: "Utilizamos Cookies"
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      CardDescription,
                      {
                        id: "cookie-banner-description",
                        className: cn("text-sm", "text-muted-foreground"),
                        children: [
                          "Utilizamos cookies para melhorar sua experi\xEAncia de navega\xE7\xE3o, analisar o tr\xE1fego do site e personalizar conte\xFAdo. Ao continuar navegando, voc\xEA concorda com nossa utiliza\xE7\xE3o de cookies.",
                          " ",
                          /* @__PURE__ */ jsx(
                            NextLink,
                            {
                              href: "/cookies",
                              className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                              children: "Saiba mais"
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: () => setShowBanner(false),
                    "aria-label": "Fechar banner de cookies",
                    children: /* @__PURE__ */ jsx(X$1, { className: "h-4 w-4" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx(Separator2, {}),
              /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:justify-end", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setShowCustomize(true),
                    className: "w-full sm:w-auto",
                    children: [
                      /* @__PURE__ */ jsx(Settings$1, { className: "h-4 w-4 mr-2" }),
                      "Personalizar"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    onClick: handleRejectOptional,
                    className: "w-full sm:w-auto",
                    children: [
                      /* @__PURE__ */ jsx(XCircle$1, { className: "h-4 w-4 mr-2" }),
                      "Rejeitar Opcionais"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: handleAcceptAll,
                    className: cn(
                      "w-full sm:w-auto",
                      "bg-primary hover:bg-primary/90",
                      "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mr-2" }),
                      "Aceitar Todos"
                    ]
                  }
                )
              ] }) })
            ] })
          ) : (
            // Visualização de personalização de cookies
            /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 flex-1", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "p-3 rounded-lg",
                        "bg-primary/10 dark:bg-cyan-400/10",
                        "border border-primary/20 dark:border-cyan-400/20"
                      ),
                      children: /* @__PURE__ */ jsx(Settings$1, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
                    /* @__PURE__ */ jsx(
                      CardTitle,
                      {
                        className: cn(
                          "text-lg",
                          "font-bold",
                          "dark:text-cyan-200"
                        ),
                        children: "Personalizar Cookies"
                      }
                    ),
                    /* @__PURE__ */ jsx(CardDescription, { className: cn("text-sm"), children: "Escolha quais tipos de cookies voc\xEA deseja permitir. Os cookies essenciais s\xE3o necess\xE1rios para o funcionamento do site." })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: () => setShowCustomize(false),
                    "aria-label": "Voltar",
                    children: /* @__PURE__ */ jsx(X$1, { className: "h-4 w-4" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx(Separator2, {}),
              /* @__PURE__ */ jsxs(CardContent, { className: "pt-6 space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/50", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(
                        Label,
                        {
                          htmlFor: "essential",
                          className: cn(
                            "text-base",
                            "font-semibold",
                            "cursor-not-allowed"
                          ),
                          children: "Cookies Essenciais"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: cn(
                            "px-2 py-0.5 rounded text-xs",
                            "bg-primary text-primary-foreground",
                            "font-semibold"
                          ),
                          children: "Obrigat\xF3rio"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Necess\xE1rios para o funcionamento b\xE1sico do site. N\xE3o podem ser desativados." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Switch,
                    {
                      id: "essential",
                      checked: preferences.essential,
                      disabled: true,
                      "aria-label": "Cookies essenciais (obrigat\xF3rio)"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsx(
                      Label,
                      {
                        htmlFor: "performance",
                        className: cn(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Performance"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Nos ajudam a entender como voc\xEA utiliza o site para melhorarmos a performance." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Switch,
                    {
                      id: "performance",
                      checked: preferences.performance,
                      onCheckedChange: () => togglePreference("performance"),
                      "aria-label": "Cookies de performance"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsx(
                      Label,
                      {
                        htmlFor: "functionality",
                        className: cn(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Funcionalidade"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Permitem que o site se lembre de suas prefer\xEAncias e ofere\xE7a funcionalidades aprimoradas." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Switch,
                    {
                      id: "functionality",
                      checked: preferences.functionality,
                      onCheckedChange: () => togglePreference("functionality"),
                      "aria-label": "Cookies de funcionalidade"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsx(
                      Label,
                      {
                        htmlFor: "analytics",
                        className: cn(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Analytics"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: cn("text-sm", "text-muted-foreground"), children: "Coletam informa\xE7\xF5es sobre como voc\xEA utiliza o site para an\xE1lise e melhorias." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Switch,
                    {
                      id: "analytics",
                      checked: preferences.analytics,
                      onCheckedChange: () => togglePreference("analytics"),
                      "aria-label": "Cookies de analytics"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("p", { className: cn("text-xs", "text-muted-foreground"), children: [
                  "Para mais informa\xE7\xF5es, consulte nossa",
                  " ",
                  /* @__PURE__ */ jsx(
                    NextLink,
                    {
                      href: "/cookies",
                      className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                      children: "Pol\xEDtica de Cookies"
                    }
                  ),
                  " ",
                  "e nossa",
                  " ",
                  /* @__PURE__ */ jsx(
                    NextLink,
                    {
                      href: "/privacidade",
                      className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                      children: "Pol\xEDtica de Privacidade"
                    }
                  ),
                  "."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "outline",
                      onClick: () => setShowCustomize(false),
                      className: "w-full sm:w-auto",
                      children: "Cancelar"
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: handleSavePreferences,
                      className: cn(
                        "w-full sm:w-auto",
                        "bg-primary hover:bg-primary/90",
                        "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                      ),
                      children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mr-2" }),
                        "Salvar Prefer\xEAncias"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          )
        }
      )
    }
  );
}
function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [swRegistration, setSwRegistration] = useState(null);
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      setSwRegistration(registration);
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1e3);
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        }
      });
    }).catch(() => {
    });
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isStandaloneiOS = window.navigator.standalone === true;
    const isStandaloneAndroid = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isStandaloneBrowser = window.matchMedia(
      "(display-mode: minimal-ui)"
    ).matches;
    const standalone = isStandaloneiOS || isStandaloneAndroid || isStandaloneBrowser;
    setIsStandalone(standalone);
    setIsInstalled(standalone);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);
  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) {
      return;
    }
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsInstallable(false);
  }, [deferredPrompt]);
  const updateServiceWorker = useCallback(() => {
    if (!swRegistration || !swRegistration.waiting) {
      return;
    }
    swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }, [swRegistration]);
  return {
    isInstallable,
    isInstalled,
    isStandalone,
    updateAvailable,
    promptInstall,
    updateServiceWorker
  };
}
function InstallPrompt() {
  const { resolvedTheme } = useTheme$1();
  const [mounted, setMounted] = useState(false);
  const { isInstallable, isStandalone, promptInstall } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (isInstallable && !isStandalone && !dismissed) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3e3);
      return () => clearTimeout(timer);
    }
    return void 0;
  }, [isInstallable, isStandalone]);
  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-dismissed", "true");
  };
  const handleInstall = async () => {
    await promptInstall();
    setShowPrompt(false);
  };
  const isDark = mounted ? resolvedTheme === "dark" : false;
  if (!showPrompt) return null;
  return (
    /**
     * Container fixo no rodapé
     *
     * - fixed bottom-0: fixado na parte inferior
     * - left-0 right-0: largura total
     * - z-50: acima de outros elementos
     * - Animação de slide up
     */
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none",
          "animate-in slide-in-from-bottom-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ jsx(
          Card,
          {
            className: cn(
              "max-w-2xl mx-auto pointer-events-auto backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-primary-base/50", "shadow-glow-cyan") : cn("bg-background/90", "border-primary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "shrink-0 p-3 rounded-full border",
                    "bg-primary-background",
                    "border-primary-base/30"
                  ),
                  children: /* @__PURE__ */ jsx(Download$1, { className: cn("h-6 w-6", "text-primary-base") })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: cn(
                        "text-lg font-bold font-mono",
                        "text-foreground"
                      ),
                      children: "\u{1F4F1} Instalar no seu Dispositivo"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: handleDismiss,
                      className: cn(
                        "transition-colors p-1 rounded",
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      "aria-label": "Fechar",
                      children: /* @__PURE__ */ jsx(X$1, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: cn(
                      "text-sm",
                      "text-muted-foreground"
                    ),
                    children: "Instale como app nativo para acesso r\xE1pido sem navegador e funcionalidade offline completa."
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      onClick: handleInstall,
                      size: "sm",
                      className: cn(
                        "font-mono font-bold",
                        "bg-primary text-primary-foreground hover:bg-primary-hover"
                      ),
                      children: [
                        /* @__PURE__ */ jsx(Download$1, { className: "h-4 w-4 mr-2" }),
                        "Instalar Agora"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: handleDismiss,
                      variant: "ghost",
                      size: "sm",
                      className: cn(
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      children: "Talvez Depois"
                    }
                  )
                ] })
              ] })
            ] }) })
          }
        )
      }
    )
  );
}
function UpdateNotification() {
  const { resolvedTheme } = useTheme$1();
  const [mounted, setMounted] = useState(false);
  const { updateAvailable, updateServiceWorker } = usePWA();
  useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = mounted ? resolvedTheme === "dark" : false;
  if (!updateAvailable) return null;
  return (
    /**
     * Container fixo no topo
     *
     * - fixed top-20: abaixo da navbar
     * - right-4: margem da direita
     * - z-50: acima de outros elementos
     * - Animação de slide down
     */
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "fixed top-20 right-4 z-50 max-w-sm",
          "animate-in slide-in-from-top-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ jsx(
          Card,
          {
            className: cn(
              "backdrop-blur-xl border-2 shadow-2xl",
              isDark ? cn("bg-background/90", "border-secondary-base/50", "shadow-glow-purple") : cn("bg-background/90", "border-secondary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "shrink-0 p-2 rounded-full border",
                    "bg-secondary-background",
                    "border-secondary-base/30"
                  ),
                  children: /* @__PURE__ */ jsx(
                    RefreshCw$1,
                    {
                      className: cn(
                        "h-5 w-5 animate-spin text-secondary-base",
                        "[animation-duration:3s]"
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ jsx(
                  "h4",
                  {
                    className: cn(
                      "text-sm font-bold font-mono",
                      "text-foreground"
                    ),
                    children: "Nova Vers\xE3o Dispon\xEDvel"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: cn(
                      "text-xs",
                      "text-muted-foreground"
                    ),
                    children: "Atualize para obter as \xFAltimas melhorias e corre\xE7\xF5es."
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: updateServiceWorker,
                    size: "sm",
                    className: cn(
                      "w-full font-mono font-bold",
                      "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(RefreshCw$1, { className: "h-3 w-3 mr-2" }),
                      "Atualizar Agora"
                    ]
                  }
                )
              ] })
            ] }) })
          }
        )
      }
    )
  );
}
function LoadingScreen({ progress, currentStep }) {
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [stars, setStars] = useState([]);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme$1();
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = mounted ? theme === "system" ? systemTheme : theme : "light";
  const isDark = currentTheme === "dark";
  const primaryColor = isDark ? tokens.primitives.color.blue["400"] : tokens.primitives.color.blue["600"];
  const secondaryColor = isDark ? tokens.primitives.color.purple["400"] : tokens.primitives.color.purple["600"];
  const accentColor = isDark ? tokens.primitives.color.red["400"] : tokens.primitives.color.red["600"];
  const primaryRGB = hexToRGB(primaryColor);
  const secondaryRGB = hexToRGB(secondaryColor);
  useEffect(() => {
    const starsCount = 100;
    const newStars = Array.from({ length: starsCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
      opacity: 0.6 + Math.random() * 0.4
    }));
    setStars(newStars);
  }, []);
  useEffect(() => {
    if (progress === void 0) {
      setDisplayedProgress(0);
      return;
    }
    const targetProgress = Math.min(100, Math.max(0, progress));
    const step = (targetProgress - displayedProgress) / 10;
    const interval = setInterval(() => {
      setDisplayedProgress((prev) => {
        const next = prev + step;
        if (Math.abs(next - targetProgress) < 0.5) {
          return targetProgress;
        }
        return next;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [progress, displayedProgress]);
  const currentMessage = currentStep || "Inicializando sistemas...";
  const progressValue = progress !== void 0 ? displayedProgress : void 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "bg-background backdrop-blur-sm",
        "transition-opacity duration-500"
      ),
      role: "status",
      "aria-label": "Carregando aplica\xE7\xE3o",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute rounded-full bg-white",
              style: {
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
                animation: "starTwinkle 3s ease-in-out infinite",
                animationDelay: `${star.delay}s`
              }
            },
            star.id
          )) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20",
              style: {
                background: `radial-gradient(circle, rgba(${primaryRGB}, 0.3), transparent)`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20",
              style: {
                background: `radial-gradient(circle, rgba(${secondaryRGB}, 0.3), transparent)`,
                animationDelay: "1s"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center space-y-8 px-4", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative flex items-center justify-center",
              "aria-hidden": "true",
              suppressHydrationWarning: true,
              children: /* @__PURE__ */ jsx(
                Atom,
                {
                  color: [primaryColor, secondaryColor, accentColor, primaryColor],
                  size: "large",
                  text: "",
                  textColor: "",
                  speedPlus: 1
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: cn(
                  "text-lg sm:text-xl font-mono font-semibold",
                  "tracking-wider animate-pulse"
                ),
                style: { color: primaryColor },
                "aria-live": "polite",
                children: currentMessage
              }
            ),
            progressValue !== void 0 && /* @__PURE__ */ jsxs("div", { className: "w-64 sm:w-80 space-y-2", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "h-1 bg-muted rounded-full overflow-hidden border",
                  style: {
                    borderColor: `${primaryColor}33`
                  },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "h-full transition-all duration-300 ease-out",
                      style: {
                        width: `${progressValue}%`,
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                        boxShadow: `0 0 10px ${primaryColor}`
                      },
                      "aria-valuenow": progressValue,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      role: "progressbar"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs(
                "p",
                {
                  className: "text-xs font-mono text-right",
                  style: { color: `${primaryColor}B3` },
                  "aria-hidden": "true",
                  children: [
                    Math.round(progressValue),
                    "%"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "absolute inset-0 overflow-hidden pointer-events-none opacity-20",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-0 left-1/4 font-mono text-xs animate-pulse",
                    style: { color: `${primaryColor}4D` },
                    children: "01001001"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-1/4 left-3/4 font-mono text-xs animate-pulse",
                    style: {
                      color: `${secondaryColor}4D`,
                      animationDelay: "0.5s"
                    },
                    children: "11001100"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute bottom-1/4 left-1/2 font-mono text-xs animate-pulse",
                    style: {
                      color: `${primaryColor}4D`,
                      animationDelay: "1s"
                    },
                    children: "10101010"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

      ` })
      ]
    }
  );
}
function TokensDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const neonCyan = "#60a5fa";
  const neonPurple = "#c084fc";
  const neonPink = "#ef4444";
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Cores" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-cyan-400/30",
              style: { backgroundColor: neonCyan }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-purple-400/30",
              style: { backgroundColor: neonPurple }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-16 h-16 rounded-lg border-2 border-pink-400/30",
              style: { backgroundColor: neonPink }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Cores neon: Cyan, Purple, Pink" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Espa\xE7amentos" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "16px" } }),
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "24px" } }),
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "32px" } }),
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-primary rounded", style: { width: "48px" } })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Espa\xE7amentos: xs, sm, md, lg" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Tipografia" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs", children: "Texto xs (12px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Texto sm (14px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-base", children: "Texto base (16px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-lg", children: "Texto lg (18px)" }),
          /* @__PURE__ */ jsx("div", { className: "text-xl", children: "Texto xl (20px)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Tamanhos de fonte dispon\xEDveis" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Design Tokens - Raios" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-end", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-sm" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-md" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-lg" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-full" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Raios: sm, default, md, lg, full" })
      ] })
    ] })
  ] });
}
var VisuallyHidden = React58.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    className: cn(
      "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
      "[clip:rect(0,0,0,0)]",
      className
    ),
    ...props
  }
));
VisuallyHidden.displayName = "VisuallyHidden";
var kbdVariants = cva(
  "inline-flex items-center justify-center rounded border font-mono text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground shadow-sm",
        outline: "border-border bg-transparent text-foreground",
        filled: "border-border bg-muted text-foreground",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        neon: "neon-border bg-background text-primary dark:shadow-glow-cyan"
      },
      size: {
        xs: "h-5 px-1.5 text-[10px]",
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-xs",
        lg: "h-8 px-3 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
);
var Kbd = React58.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "kbd",
      {
        ref,
        className: cn(kbdVariants({ variant, size }), className),
        ...props,
        children
      }
    );
  }
);
Kbd.displayName = "Kbd";
var KbdCombo = React58.forwardRef(
  ({
    className,
    keys,
    separator = "+",
    size = "sm",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1", className),
        ...props,
        children: keys.map((key, index) => /* @__PURE__ */ jsxs(React58.Fragment, { children: [
          index > 0 && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs font-normal", children: separator }),
          /* @__PURE__ */ jsx(Kbd, { size, variant, children: key })
        ] }, index))
      }
    );
  }
);
KbdCombo.displayName = "KbdCombo";
var KeyboardShortcuts = {
  // Windows/Linux
  CtrlC: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "C"] }),
  CtrlV: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "V"] }),
  CtrlX: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "X"] }),
  CtrlZ: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "Z"] }),
  CtrlY: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "Y"] }),
  CtrlA: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "A"] }),
  CtrlS: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "S"] }),
  CtrlF: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "F"] }),
  CtrlP: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Ctrl", "P"] }),
  Delete: () => /* @__PURE__ */ jsx(Kbd, { children: "Delete" }),
  Enter: () => /* @__PURE__ */ jsx(Kbd, { children: "Enter" }),
  Esc: () => /* @__PURE__ */ jsx(Kbd, { children: "Esc" }),
  Space: () => /* @__PURE__ */ jsx(Kbd, { children: "Space" }),
  Tab: () => /* @__PURE__ */ jsx(Kbd, { children: "Tab" }),
  ShiftTab: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Shift", "Tab"] }),
  AltTab: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["Alt", "Tab"] }),
  // macOS
  CmdC: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "C"] }),
  CmdV: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "V"] }),
  CmdX: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "X"] }),
  CmdZ: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "Z"] }),
  CmdShiftZ: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "Shift", "Z"] }),
  CmdA: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "A"] }),
  CmdS: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "S"] }),
  CmdF: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "F"] }),
  CmdP: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "P"] }),
  CmdSpace: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2318", "Space"] }),
  OptionTab: () => /* @__PURE__ */ jsx(KbdCombo, { keys: ["\u2325", "Tab"] }),
  // Setas
  ArrowUp: () => /* @__PURE__ */ jsx(Kbd, { children: "\u2191" }),
  ArrowDown: () => /* @__PURE__ */ jsx(Kbd, { children: "\u2193" }),
  ArrowLeft: () => /* @__PURE__ */ jsx(Kbd, { children: "\u2190" }),
  ArrowRight: () => /* @__PURE__ */ jsx(Kbd, { children: "\u2192" }),
  // Função
  F1: () => /* @__PURE__ */ jsx(Kbd, { children: "F1" }),
  F2: () => /* @__PURE__ */ jsx(Kbd, { children: "F2" }),
  F3: () => /* @__PURE__ */ jsx(Kbd, { children: "F3" }),
  F4: () => /* @__PURE__ */ jsx(Kbd, { children: "F4" }),
  F5: () => /* @__PURE__ */ jsx(Kbd, { children: "F5" }),
  F6: () => /* @__PURE__ */ jsx(Kbd, { children: "F6" }),
  F7: () => /* @__PURE__ */ jsx(Kbd, { children: "F7" }),
  F8: () => /* @__PURE__ */ jsx(Kbd, { children: "F8" }),
  F9: () => /* @__PURE__ */ jsx(Kbd, { children: "F9" }),
  F10: () => /* @__PURE__ */ jsx(Kbd, { children: "F10" }),
  F11: () => /* @__PURE__ */ jsx(Kbd, { children: "F11" }),
  F12: () => /* @__PURE__ */ jsx(Kbd, { children: "F12" })
};
var codeVariants = cva(
  "rounded-md font-mono text-sm",
  {
    variants: {
      variant: {
        inline: "bg-muted px-1.5 py-0.5 text-[13px]",
        block: "bg-muted p-4 text-sm",
        ghost: "bg-transparent px-1.5 py-0.5 text-[13px]",
        neon: "bg-primary/10 text-primary px-1.5 py-0.5 text-[13px] dark:bg-primary/20",
        success: "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 text-[13px] dark:bg-emerald-900/20 dark:text-emerald-400",
        warning: "bg-amber-100 text-amber-800 px-1.5 py-0.5 text-[13px] dark:bg-amber-900/20 dark:text-amber-400",
        error: "bg-red-100 text-red-800 px-1.5 py-0.5 text-[13px] dark:bg-red-900/20 dark:text-red-400"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      variant: "inline",
      size: "sm"
    }
  }
);
var Code = React58.forwardRef(
  ({
    className,
    variant = "inline",
    size = "sm",
    language,
    showCopy = false,
    wrap = false,
    startLine = 1,
    showLineNumbers = false,
    children,
    ...props
  }, ref) => {
    const [copied, setCopied] = React58.useState(false);
    const codeRef = React58.useRef(null);
    const handleCopy = React58.useCallback(async () => {
      if (codeRef.current) {
        const text = codeRef.current.textContent || "";
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      }
    }, []);
    if (variant === "inline" || variant === "ghost" || variant === "neon" || variant === "success" || variant === "warning" || variant === "error") {
      return /* @__PURE__ */ jsx(
        "code",
        {
          ref,
          className: cn(codeVariants({ variant, size }), className),
          ...props,
          children
        }
      );
    }
    const codeString = typeof children === "string" ? children : String(children);
    const lines = codeString.split("\n");
    return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      (language || showCopy) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50 rounded-t-md", children: [
        language && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase", children: language }),
        showCopy && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 px-2 text-xs",
            onClick: handleCopy,
            children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Check4, { className: "h-3 w-3 mr-1" }),
              "Copiado!"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3 mr-1" }),
              "Copiar"
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "pre",
        {
          className: cn(
            codeVariants({ variant: "block", size }),
            wrap && "whitespace-pre-wrap break-all",
            !showLineNumbers && "overflow-x-auto",
            language && !showCopy && "rounded-t-md border-t border-border",
            className
          ),
          children: /* @__PURE__ */ jsx("code", { ref, ...props, children: showLineNumbers ? /* @__PURE__ */ jsx("table", { className: "w-full", children: /* @__PURE__ */ jsx("tbody", { children: lines.map((line, index) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-muted/50", children: [
            /* @__PURE__ */ jsx("td", { className: "sticky left-0 w-12 px-3 py-0 text-right text-muted-foreground select-none bg-muted/50", children: startLine + index }),
            /* @__PURE__ */ jsx("td", { className: "px-0 py-0", children: /* @__PURE__ */ jsx("span", { className: "block px-4 py-0", children: line || "\xA0" }) })
          ] }, index)) }) }) : children })
        }
      )
    ] });
  }
);
Code.displayName = "Code";
var CodeInline = React58.forwardRef(
  ({
    className,
    color = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Code,
      {
        ref,
        variant: color,
        className,
        ...props
      }
    );
  }
);
CodeInline.displayName = "CodeInline";
var CodeBlock = React58.forwardRef(
  ({
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Code,
      {
        ref,
        variant: "block",
        className,
        ...props
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
var quoteVariants = cva(
  "relative border-l-4 pl-6 italic",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-muted",
        primary: "border-primary",
        secondary: "border-secondary",
        success: "border-emerald-500",
        warning: "border-amber-500",
        error: "border-red-500",
        testimonial: "border-transparent bg-muted/30 rounded-lg p-6",
        card: "border-border bg-card rounded-lg p-6 shadow-sm",
        glass: "glass border-transparent rounded-lg p-6",
        neon: "neon-border rounded-lg p-6"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Quote = React58.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    author,
    source,
    sourceUrl,
    showIcon = false,
    icon,
    iconPosition = "top",
    children,
    ...props
  }, ref) => {
    const IconComponent = icon || (variant === "testimonial" || variant === "card" ? /* @__PURE__ */ jsx(QuoteIcon, { className: "h-8 w-8 text-primary/20" }) : /* @__PURE__ */ jsx(QuoteIcon, { className: "h-4 w-4 text-muted-foreground" }));
    return /* @__PURE__ */ jsxs(
      "blockquote",
      {
        ref,
        className: cn(
          quoteVariants({ variant, size }),
          (variant === "testimonial" || variant === "card" || variant === "glass" || variant === "neon") && "border-l-0",
          className
        ),
        ...props,
        children: [
          showIcon && iconPosition === "top" && /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -left-2", children: IconComponent }),
          /* @__PURE__ */ jsx("div", { className: "relative", children }),
          (author || source) && /* @__PURE__ */ jsxs("footer", { className: "mt-4 not-italic", children: [
            author && /* @__PURE__ */ jsx("cite", { className: "font-semibold not-italic text-foreground", children: author }),
            source && /* @__PURE__ */ jsxs(Fragment, { children: [
              author && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground mx-2", children: "\u2022" }),
              sourceUrl ? /* @__PURE__ */ jsx(
                "a",
                {
                  href: sourceUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-foreground underline",
                  children: source
                }
              ) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: source })
            ] })
          ] }),
          showIcon && iconPosition === "bottom" && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -right-2", children: IconComponent })
        ]
      }
    );
  }
);
Quote.displayName = "Quote";
var QuoteTestimonial = React58.forwardRef(
  ({
    className,
    author,
    source,
    avatar,
    rating,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: cn("bg-card rounded-lg p-6 shadow-sm", className), children: [
      /* @__PURE__ */ jsx(
        Quote,
        {
          ref,
          variant: "testimonial",
          author,
          source,
          showIcon: true,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-4", children: [
        avatar && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: avatar,
              alt: author,
              className: "h-10 w-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            author && /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: author }),
            source && /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: source })
          ] })
        ] }),
        rating && /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "text-lg",
              i < rating ? "text-amber-400" : "text-muted-foreground/30"
            ),
            children: "\u2605"
          },
          i
        )) })
      ] })
    ] });
  }
);
QuoteTestimonial.displayName = "QuoteTestimonial";
var QuoteBlock = React58.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx("div", { className: "relative my-8 py-8", children: /* @__PURE__ */ jsx(
      Quote,
      {
        ref,
        variant: "default",
        size: "xl",
        className: cn(
          "text-center border-l-0 border-r-0 border-t-2 border-b-2 border-border py-8",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-normal text-muted-foreground", children })
      }
    ) });
  }
);
QuoteBlock.displayName = "QuoteBlock";
var ASPECT_RATIOS = {
  square: "1/1",
  video: "16/9",
  widescreen: "21/9",
  cinema: "2.39/1",
  portrait: "3/4",
  golden: "1.618/1",
  post: "4/5",
  story: "9/16"
};
var aspectRatioBoxVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border border-border rounded-md",
        rounded: "rounded-lg",
        card: "border border-border rounded-lg shadow-sm",
        glass: "glass rounded-lg",
        neon: "neon-border rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var AspectRatioBox = React58.forwardRef(
  ({
    className,
    variant = "default",
    ratio,
    children,
    objectFit = "cover",
    ...props
  }, ref) => {
    const resolvedRatio = React58.useMemo(() => {
      if (typeof ratio === "string" && ratio in ASPECT_RATIOS) {
        return ASPECT_RATIOS[ratio];
      }
      return ratio;
    }, [ratio]);
    const paddingBottom = React58.useMemo(() => {
      const [width, height] = resolvedRatio.split("/").map(Number);
      return `${height / width * 100}%`;
    }, [resolvedRatio]);
    const objectFitClasses = {
      cover: "absolute inset-0 w-full h-full object-cover",
      contain: "absolute inset-0 w-full h-full object-contain",
      fill: "absolute inset-0 w-full h-full"
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(aspectRatioBoxVariants({ variant }), className),
        style: { paddingBottom },
        ...props,
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: React58.isValidElement(children) ? React58.cloneElement(children, {
          className: cn(
            objectFitClasses[objectFit],
            children.props.className
          )
        }) : /* @__PURE__ */ jsx("div", { className: cn(objectFitClasses[objectFit]), children }) })
      }
    );
  }
);
AspectRatioBox.displayName = "AspectRatioBox";
var AspectRatioImage = React58.forwardRef(
  ({
    className,
    ratio = "square",
    variant = "default",
    src,
    alt,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsx(
      "img",
      {
        ref,
        src,
        alt,
        className: "w-full h-full object-cover",
        ...props
      }
    ) });
  }
);
AspectRatioImage.displayName = "AspectRatioImage";
var AspectRatioVideo = React58.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsx(
      "video",
      {
        ref,
        className: "w-full h-full object-cover",
        ...props
      }
    ) });
  }
);
AspectRatioVideo.displayName = "AspectRatioVideo";
var AspectRatioIframe = React58.forwardRef(
  ({
    className,
    ratio = "video",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(AspectRatioBox, { ratio, variant, children: /* @__PURE__ */ jsx(
      "iframe",
      {
        ref,
        className: "w-full h-full",
        ...props
      }
    ) });
  }
);
AspectRatioIframe.displayName = "AspectRatioIframe";
var centerVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        both: "items-center justify-center",
        horizontal: "justify-center",
        vertical: "items-center"
      },
      inline: {
        true: "inline-flex",
        false: "flex"
      }
    },
    defaultVariants: {
      direction: "both",
      inline: false
    }
  }
);
var Center = React58.forwardRef(
  ({
    className,
    direction = "both",
    inline = false,
    fullHeight = false,
    fullWidth = false,
    padding,
    minSize,
    style,
    children,
    ...props
  }, ref) => {
    const centerStyle = React58.useMemo(() => {
      const customStyle = { ...style };
      if (padding !== void 0) {
        customStyle.padding = typeof padding === "number" ? `${padding}px` : padding;
      }
      if (minSize !== void 0) {
        customStyle.minWidth = typeof minSize === "number" ? `${minSize}px` : minSize;
        customStyle.minHeight = typeof minSize === "number" ? `${minSize}px` : minSize;
      }
      return customStyle;
    }, [style, padding, minSize]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          centerVariants({ direction, inline }),
          fullHeight && "min-h-screen",
          fullWidth && "w-full",
          className
        ),
        style: centerStyle,
        ...props,
        children
      }
    );
  }
);
Center.displayName = "Center";
var CenterInline = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
      Center,
      {
        ref,
        inline: true,
        ...props
      }
    );
  }
);
CenterInline.displayName = "CenterInline";
var CenterScreen = React58.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(
      Center,
      {
        ref,
        fullHeight: true,
        fullWidth: true,
        direction: "both",
        ...props
      }
    );
  }
);
CenterScreen.displayName = "CenterScreen";
var CenterText = React58.forwardRef(
  ({
    className,
    align = "center",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("text-center", className),
        style: { textAlign: align },
        ...props,
        children
      }
    );
  }
);
CenterText.displayName = "CenterText";
function LikeButton({
  itemId,
  initialLikes,
  initialIsLiked = false,
  variant = "default",
  activeColor = "error",
  size = "sm",
  showLabel = true,
  showCount = true,
  activeLabel = "Curtido",
  inactiveLabel = "Curtir",
  onLike,
  onUnlike,
  className
}) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleLike = () => {
    setIsAnimating(true);
    console.debug(`A\xE7\xE3o de curtir para o item: ${itemId}`);
    if (isLiked) {
      const newLikes = Math.max(0, likes - 1);
      setLikes(newLikes);
      setIsLiked(false);
      onUnlike?.(newLikes, itemId);
    } else {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setIsLiked(true);
      onLike?.(newLikes, itemId);
    }
    setTimeout(() => setIsAnimating(false), 600);
  };
  const getColorClasses2 = () => {
    const colorMap = {
      primary: "text-primary hover:text-primary/80",
      success: "text-emerald-500 hover:text-emerald-600",
      warning: "text-amber-500 hover:text-amber-600",
      error: "text-red-500 hover:text-red-600",
      info: "text-blue-500 hover:text-blue-600"
    };
    return colorMap[activeColor];
  };
  const getActiveBgClasses = () => {
    const bgMap = {
      primary: "bg-primary hover:bg-primary/90 text-primary-foreground border-primary",
      success: "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500",
      warning: "bg-amber-500 hover:bg-amber-600 text-white border-amber-500",
      error: "bg-red-500 hover:bg-red-600 text-white border-red-500",
      info: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
    };
    return bgMap[activeColor];
  };
  if (variant === "compact") {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleLike,
        className: cn(
          "inline-flex items-center gap-1.5 text-sm transition-colors",
          isLiked ? getColorClasses2() : "text-muted-foreground hover:text-foreground",
          className
        ),
        "aria-label": `${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`,
        children: [
          /* @__PURE__ */ jsx(
            motion$1.div,
            {
              animate: isAnimating ? {
                scale: [1, 1.3, 1]
              } : {},
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ jsx(
                Heart4,
                {
                  className: cn("h-4 w-4 transition-all", isLiked && "fill-current")
                }
              )
            }
          ),
          showCount && /* @__PURE__ */ jsx("span", { className: "font-medium", children: likes.toLocaleString() })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: isLiked ? "default" : "outline",
      size,
      onClick: handleLike,
      className: cn(
        "gap-2 transition-all",
        isLiked && getActiveBgClasses(),
        className
      ),
      "aria-label": `${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`,
      children: [
        /* @__PURE__ */ jsx(
          motion$1.div,
          {
            animate: isAnimating ? {
              scale: [1, 1.3, 1],
              rotate: [0, -10, 10, 0]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" },
            children: /* @__PURE__ */ jsx(
              Heart4,
              {
                className: cn("h-4 w-4 transition-all", isLiked && "fill-current")
              }
            )
          }
        ),
        showLabel && /* @__PURE__ */ jsx("span", { className: "font-medium", children: isLiked ? activeLabel : inactiveLabel }),
        showCount && likes > 0 && /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "text-xs px-1.5 py-0.5 rounded-full",
              isLiked ? "bg-current/20 text-current" : "bg-muted text-muted-foreground"
            ),
            children: likes.toLocaleString()
          }
        )
      ]
    }
  );
}
var SHARE_URLS = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u={url}`,
  twitter: `https://twitter.com/intent/tweet?url={url}&text={title}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url={url}`,
  whatsapp: `https://api.whatsapp.com/send?text={title}%20{url}`,
  telegram: `https://t.me/share/url?url={url}&text={title}`
};
function ShareButton({
  url,
  title,
  description = "",
  variant = "outline",
  size = "sm",
  showLabel = true,
  onShare,
  onCopy
}) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2e3);
    } catch (error) {
      console.error("Erro ao copiar link:", error);
    }
  }
  async function shareNative() {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl
        });
        onShare?.("native");
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Erro ao compartilhar:", error);
        }
      }
    }
  }
  function shareOnPlatform(platform) {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    const platformUrl = SHARE_URLS[platform].replace("{url}", encodedUrl).replace("{title}", encodedTitle);
    window.open(
      platformUrl,
      "_blank",
      "noopener,noreferrer,width=600,height=600"
    );
    onShare?.(platform);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant, size, className: "gap-2", children: [
        /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
        showLabel && /* @__PURE__ */ jsx("span", { children: "Compartilhar" })
      ] }) }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Compartilhar em" }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: shareNative, children: [
            /* @__PURE__ */ jsx(Share2, { className: "mr-2 h-4 w-4" }),
            "Compartilhar..."
          ] }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {})
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("facebook"), children: [
          /* @__PURE__ */ jsx(Facebook, { className: "mr-2 h-4 w-4 text-blue-600" }),
          "Facebook"
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("twitter"), children: [
          /* @__PURE__ */ jsx(Twitter, { className: "mr-2 h-4 w-4 text-sky-500" }),
          "Twitter / X"
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("linkedin"), children: [
          /* @__PURE__ */ jsx(Linkedin, { className: "mr-2 h-4 w-4 text-blue-700" }),
          "LinkedIn"
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("whatsapp"), children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "mr-2 h-4 w-4 text-green-600" }),
          "WhatsApp"
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("telegram"), children: [
          /* @__PURE__ */ jsx(Send, { className: "mr-2 h-4 w-4 text-blue-500" }),
          "Telegram"
        ] }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: copyToClipboard, children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check4, { className: "mr-2 h-4 w-4 text-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "Link copiado!" })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Link3, { className: "mr-2 h-4 w-4" }),
          "Copiar link"
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => setShowQR(true), children: [
          /* @__PURE__ */ jsx(QrCode, { className: "mr-2 h-4 w-4" }),
          "QR Code"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: showQR, onOpenChange: setShowQR, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Compartilhar via QR Code" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Escaneie o QR Code abaixo para acessar este conte\xFAdo" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center p-6 bg-white rounded-lg", children: /* @__PURE__ */ jsx(
        QRCodeSVG,
        {
          value: shareUrl,
          size: 256,
          level: "H",
          includeMargin: true
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "flex-1",
            onClick: () => setShowQR(false),
            children: "Fechar"
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "default",
            size: "lg",
            className: "flex-1",
            onClick: copyToClipboard,
            children: [
              /* @__PURE__ */ jsx(Link3, { className: "mr-2 h-4 w-4" }),
              "Copiar Link"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function BookmarkButton({
  itemId,
  initialIsBookmarked = false,
  variant = "ghost",
  activeColor = "warning",
  size = "sm",
  showLabel = true,
  activeLabel = "Salvo",
  inactiveLabel = "Salvar",
  onBookmark,
  onUnbookmark,
  className
}) {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleBookmark = () => {
    setIsAnimating(true);
    console.debug(`A\xE7\xE3o de bookmark para o item: ${itemId}`);
    if (isBookmarked) {
      setIsBookmarked(false);
      onUnbookmark?.(itemId);
    } else {
      setIsBookmarked(true);
      onBookmark?.(itemId);
    }
    setTimeout(() => setIsAnimating(false), 600);
  };
  const getColorClasses2 = () => {
    const colorMap = {
      primary: "text-primary hover:text-primary/80",
      success: "text-emerald-500 hover:text-emerald-600",
      warning: "text-amber-500 hover:text-amber-600",
      error: "text-red-500 hover:text-red-600",
      info: "text-blue-500 hover:text-blue-600"
    };
    return colorMap[activeColor];
  };
  const getActiveBgClasses = () => {
    const bgMap = {
      primary: "bg-primary hover:bg-primary/90 text-primary-foreground border-primary",
      success: "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500",
      warning: "bg-amber-500 hover:bg-amber-600 text-white border-amber-500",
      error: "bg-red-500 hover:bg-red-600 text-white border-red-500",
      info: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
    };
    return bgMap[activeColor];
  };
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: isBookmarked && variant === "default" ? "default" : variant,
      size,
      onClick: handleBookmark,
      className: cn(
        "gap-2 transition-all",
        isBookmarked && variant === "ghost" && getColorClasses2(),
        isBookmarked && variant === "default" && getActiveBgClasses(),
        className
      ),
      "aria-label": isBookmarked ? "Remover dos salvos" : "Salvar para ler depois",
      children: [
        /* @__PURE__ */ jsx(
          motion$1.div,
          {
            animate: isAnimating ? {
              scale: [1, 1.3, 1],
              rotate: [0, -15, 15, 0]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" },
            children: /* @__PURE__ */ jsx(
              Bookmark,
              {
                className: cn(
                  "h-4 w-4 transition-all",
                  isBookmarked && "fill-current"
                )
              }
            )
          }
        ),
        showLabel && /* @__PURE__ */ jsx("span", { className: "font-medium", children: isBookmarked ? activeLabel : inactiveLabel })
      ]
    }
  );
}
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
  const sizeClasses2 = getSizeClasses(size);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-1.5 transition-colors",
        colorClasses,
        sizeClasses2,
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
var activeColorClasses = {
  primary: "bg-primary hover:bg-primary/90 text-primary-foreground border-primary",
  success: "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500",
  warning: "bg-amber-500 hover:bg-amber-600 text-white border-amber-500",
  error: "bg-red-500 hover:bg-red-600 text-white border-red-500",
  info: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
};
var animationPresets = {
  scale: { scale: [1, 1.2, 1] },
  bounce: { y: [0, -8, 0] },
  rotate: { rotate: [0, -15, 15, 0] },
  pulse: { scale: [1, 1.05, 1] }
};
function ActionButton({
  icon,
  activeIcon,
  isActive = false,
  onToggle,
  count,
  inactiveLabel,
  activeLabel,
  variant = "default",
  size = "default",
  showCount = true,
  showLabel = true,
  animation = { type: "scale", duration: 0.3, intensity: "normal" },
  className,
  disabled = false,
  ariaLabel,
  activeColor = "primary"
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentActive, setCurrentActive] = useState(isActive);
  useEffect(() => {
    setCurrentActive(isActive);
  }, [isActive]);
  const handleClick = () => {
    if (disabled || isAnimating) return;
    setIsAnimating(true);
    const newActive = !currentActive;
    setCurrentActive(newActive);
    onToggle?.(newActive);
    setTimeout(() => setIsAnimating(false), (animation.duration || 0.3) * 1e3);
  };
  const animationConfig = animation.type ? animationPresets[animation.type] : animationPresets.scale;
  const dynamicClasses = cn(
    currentActive && activeColorClasses[activeColor],
    currentActive && variant === "ghost" && "text-opacity-80",
    "transition-all duration-200"
  );
  const dynamicLabel = currentActive ? activeLabel : inactiveLabel;
  const dynamicIcon = currentActive && activeIcon ? activeIcon : icon;
  const dynamicAriaLabel = ariaLabel || (dynamicLabel ? `${dynamicLabel}${count ? ` (${count})` : ""}` : `${currentActive ? "Desativar" : "Ativar"} a\xE7\xE3o${count ? ` (${count})` : ""}`);
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: currentActive && activeColor === "primary" ? "default" : variant,
      size,
      onClick: handleClick,
      disabled,
      className: cn("gap-2", dynamicClasses, className),
      "aria-label": dynamicAriaLabel,
      "aria-pressed": currentActive,
      children: [
        /* @__PURE__ */ jsx(
          motion$1.div,
          {
            animate: isAnimating ? animationConfig : {},
            transition: {
              duration: animation.duration || 0.3,
              ease: "easeInOut"
            },
            className: "flex-shrink-0",
            children: dynamicIcon
          }
        ),
        showLabel && dynamicLabel && /* @__PURE__ */ jsx("span", { className: "font-medium whitespace-nowrap", children: dynamicLabel }),
        showCount && count !== void 0 && count > 0 && /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center",
              currentActive ? "bg-current/20 text-current" : "bg-muted text-muted-foreground"
            ),
            children: count.toLocaleString()
          }
        )
      ]
    }
  );
}
var ActionButtonVariants = {
  /**
   * Botão de curtir (coração)
   */
  Like: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "error" }),
  /**
   * Botão de favorito (estrela)
   */
  Favorite: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "warning" }),
  /**
   * Botão de follow/seguir
   */
  Follow: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "success" }),
  /**
   * Botão de save/salvar
   */
  Save: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "info" })
};
var DEFAULT_PLATFORMS = [
  {
    id: "facebook",
    name: "Facebook",
    icon: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }),
    color: "text-blue-600",
    url: "https://www.facebook.com/sharer/sharer.php?u={url}&t={title}",
    order: 1
  },
  {
    id: "twitter",
    name: "Twitter / X",
    icon: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" }),
    color: "text-sky-500",
    url: "https://twitter.com/intent/tweet?url={url}&text={title}",
    order: 2
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }),
    color: "text-blue-700",
    url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
    order: 3
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
    color: "text-green-600",
    url: "https://api.whatsapp.com/send?text={title}%20{url}",
    order: 4
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
    color: "text-blue-500",
    url: "https://t.me/share/url?url={url}&text={title}",
    order: 5
  }
];
function ShareMenu({
  url,
  title,
  description = "",
  platforms = ["facebook", "twitter", "linkedin", "whatsapp", "copy", "qr"],
  showCopyLink = true,
  showQRCode = true,
  showNativeShare = true,
  variant = "outline",
  size = "sm",
  label = "Compartilhar",
  showLabel = true,
  onShare,
  className,
  side = "bottom",
  align = "end"
}) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const shareUrl = typeof window !== "undefined" ? url.startsWith("http") ? url : `${window.location.origin}${url}` : url;
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      onShare?.("copy", { url: shareUrl });
      setTimeout(() => setCopied(false), 2e3);
    } catch (error) {
      console.error("Erro ao copiar link:", error);
      onShare?.("copy-error", { error });
    }
  };
  const shareNative = async () => {
    if (!navigator.share) return;
    try {
      await navigator.share({
        title,
        text: description,
        url: shareUrl
      });
      onShare?.("native", { title, description, url: shareUrl });
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Erro no compartilhamento nativo:", error);
        onShare?.("native-error", { error });
      }
    }
  };
  const shareOnPlatform = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    const platformUrl = platform.url.replace("{url}", encodedUrl).replace("{title}", encodedTitle);
    window.open(
      platformUrl,
      "_blank",
      "noopener,noreferrer,width=600,height=600"
    );
    onShare?.(platform.id, {
      platform: platform.name,
      url: shareUrl,
      title
    });
  };
  const enabledPlatforms = DEFAULT_PLATFORMS.filter((p) => platforms.includes(p.id)).sort((a, b) => (a.order || 0) - (b.order || 0));
  const TriggerButton = () => /* @__PURE__ */ jsxs(Button, { variant, size, className: cn("gap-2", className), children: [
    /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
    showLabel && /* @__PURE__ */ jsx("span", { children: label })
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(TriggerButton, {}) }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align, side, className: "w-56", children: [
        /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Compartilhar em" }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        showNativeShare && typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: shareNative, children: [
            /* @__PURE__ */ jsx(Smartphone, { className: "mr-2 h-4 w-4" }),
            "Compartilhar..."
          ] }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {})
        ] }),
        enabledPlatforms.map((platform) => /* @__PURE__ */ jsxs(
          DropdownMenuItem,
          {
            onClick: () => shareOnPlatform(platform),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn("mr-2 h-4 w-4", platform.color), children: platform.icon }),
              platform.name
            ]
          },
          platform.id
        )),
        (showCopyLink || showQRCode) && /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        showCopyLink && /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: copyToClipboard, children: copied ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check4, { className: "mr-2 h-4 w-4 text-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "Link copiado!" })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Copy, { className: "mr-2 h-4 w-4" }),
          "Copiar link"
        ] }) }),
        showQRCode && /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => setShowQR(true), children: [
          /* @__PURE__ */ jsx(QrCode, { className: "mr-2 h-4 w-4" }),
          "QR Code"
        ] })
      ] })
    ] }),
    showQRCode && /* @__PURE__ */ jsx(Dialog, { open: showQR, onOpenChange: setShowQR, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Compartilhar via QR Code" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Escaneie o QR Code para acessar este conte\xFAdo" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center p-6 bg-white rounded-lg", children: /* @__PURE__ */ jsx(
        QRCodeSVG,
        {
          value: shareUrl,
          size: 256,
          level: "H",
          includeMargin: true,
          bgColor: "white",
          fgColor: "black"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "flex-1",
            onClick: () => setShowQR(false),
            children: "Fechar"
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "default",
            size: "lg",
            className: "flex-1",
            onClick: copyToClipboard,
            children: [
              /* @__PURE__ */ jsx(Link22, { className: "mr-2 h-4 w-4" }),
              "Copiar Link"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
var ShareMenuVariants = {
  /**
   * Variante para blogs com foco em redes sociais
   */
  Blog: (props) => /* @__PURE__ */ jsx(
    ShareMenu,
    {
      ...props,
      platforms: ["twitter", "facebook", "linkedin", "whatsapp", "copy", "qr"]
    }
  ),
  /**
   * Variante para e-commerce com foco em WhatsApp
   */
  Ecommerce: (props) => /* @__PURE__ */ jsx(
    ShareMenu,
    {
      ...props,
      platforms: ["whatsapp", "facebook", "telegram", "copy"],
      showQRCode: false
    }
  ),
  /**
   * Variante minimalista para dashboards
   */
  Dashboard: (props) => /* @__PURE__ */ jsx(
    ShareMenu,
    {
      ...props,
      platforms: ["copy"],
      variant: "ghost",
      size: "sm",
      showQRCode: false
    }
  ),
  /**
   * Variante otimizada para dispositivos móveis
   */
  Mobile: (props) => /* @__PURE__ */ jsx(
    ShareMenu,
    {
      ...props,
      platforms: ["native", "whatsapp", "telegram", "copy"],
      showNativeShare: true
    }
  )
};
var formatRelativeDate = (date) => {
  try {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR
    });
  } catch {
    return "";
  }
};
function ContentCard({
  title,
  description,
  image,
  link,
  metadata,
  actions,
  variant = "default",
  orientation = "vertical",
  showImage = true,
  showMetadata = true,
  showActions = true,
  imageAlt,
  imagePriority = false,
  className,
  onClick,
  external = false
}) {
  const renderImage = () => {
    if (!showImage || !image) return null;
    return /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "aspect-video relative", children: [
      React58__default.createElement("img", {
        src: image,
        alt: imageAlt || title,
        className: cn(
          "w-full h-full object-cover transition-transform duration-300",
          "group-hover:scale-105"
        ),
        loading: imagePriority ? "eager" : "lazy"
      }),
      metadata?.badge && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-red-500 text-white", children: metadata.badge }) })
    ] }) });
  };
  const renderMetadata = () => {
    if (!showMetadata || !metadata) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
      metadata.category && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: metadata.category }),
      metadata.date && /* @__PURE__ */ jsx("span", { className: "flex items-center gap-1", children: formatRelativeDate(metadata.date) }),
      metadata.readTime && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
        "\u{1F4D6} ",
        metadata.readTime,
        " min"
      ] }),
      metadata.author && /* @__PURE__ */ jsxs("span", { children: [
        "por ",
        metadata.author
      ] }),
      metadata.source && /* @__PURE__ */ jsx("span", { className: "font-medium", children: metadata.source }),
      metadata.price && /* @__PURE__ */ jsx("span", { className: "font-bold text-primary text-base", children: metadata.price })
    ] });
  };
  const renderActions = () => {
    if (!showActions || !actions) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        actions.like && /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "gap-1.5",
              actions.like.active && "text-red-500"
            ),
            onClick: () => actions.like?.onAction?.("like", actions.like),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn(actions.like.active && "fill-current"), children: "\u2764\uFE0F" }),
              actions.like.count && /* @__PURE__ */ jsx("span", { className: "text-xs", children: actions.like.count })
            ]
          }
        ),
        actions.favorite && /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "gap-1.5",
              actions.favorite.active && "text-yellow-500"
            ),
            onClick: () => actions.favorite?.onAction?.("favorite", actions.favorite),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn(actions.favorite.active && "fill-current"), children: "\u2B50" }),
              actions.favorite.count && /* @__PURE__ */ jsx("span", { className: "text-xs", children: actions.favorite.count })
            ]
          }
        ),
        actions.bookmark && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "gap-1.5",
              actions.bookmark.active && "text-blue-500"
            ),
            onClick: () => actions.bookmark?.onAction?.("bookmark", actions.bookmark),
            children: /* @__PURE__ */ jsx("span", { className: cn(actions.bookmark.active && "fill-current"), children: "\u{1F516}" })
          }
        )
      ] }),
      actions.share && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "gap-1.5",
          onClick: () => actions.share?.onAction?.("share", actions.share),
          children: "\u{1F4E4}"
        }
      )
    ] });
  };
  const variantClasses2 = {
    default: "hover:shadow-lg transition-shadow duration-300",
    product: "hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
    news: "border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300",
    minimal: "border-0 shadow-none hover:bg-accent/50 transition-colors duration-300",
    featured: "ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300"
  };
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? {
    href: link,
    target: external ? "_blank" : void 0,
    rel: external ? "noopener noreferrer" : void 0
  } : {};
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      whileHover: { y: orientation === "vertical" ? -4 : 0 },
      transition: { duration: 0.2 },
      className: cn(
        "group",
        orientation === "horizontal" && "flex gap-4",
        className
      ),
      children: /* @__PURE__ */ jsx(
        Wrapper,
        {
          ...wrapperProps,
          onClick,
          className: cn("block", link && "hover:underline-none"),
          children: /* @__PURE__ */ jsxs(
            Card,
            {
              className: cn(
                "h-full overflow-hidden",
                variantClasses2[variant],
                orientation === "horizontal" && "flex-row",
                "transition-all duration-300"
              ),
              children: [
                orientation === "vertical" && renderImage(),
                /* @__PURE__ */ jsxs("div", { className: cn(
                  "flex flex-col",
                  orientation === "horizontal" && "flex-1"
                ), children: [
                  /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2", children: [
                    renderMetadata(),
                    /* @__PURE__ */ jsx("h3", { className: cn(
                      "font-semibold line-clamp-2",
                      variant === "featured" ? "text-xl" : "text-lg",
                      "group-hover:text-primary transition-colors duration-200"
                    ), children: title })
                  ] }),
                  description && /* @__PURE__ */ jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: description }) }),
                  (link || showActions) && /* @__PURE__ */ jsxs(CardFooter, { className: cn(
                    "pt-4",
                    "flex items-center justify-between",
                    !showActions && "justify-end"
                  ), children: [
                    renderActions(),
                    link && /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "gap-1 text-primary",
                        children: [
                          "Ler mais",
                          /* @__PURE__ */ jsx(Link3, { className: "h-3 w-3" })
                        ]
                      }
                    )
                  ] })
                ] }),
                orientation === "horizontal" && /* @__PURE__ */ jsx("div", { className: "w-1/3", children: renderImage() })
              ]
            }
          )
        }
      )
    }
  );
}
var ContentCardVariants = {
  /**
   * Card para blog posts
   */
  BlogPost: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "default" }),
  /**
   * Card para produtos
   */
  Product: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "product" }),
  /**
   * Card para notícias
   */
  News: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "news" }),
  /**
   * Card em destaque
   */
  Featured: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "featured" }),
  /**
   * Card minimalista
   */
  Minimal: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "minimal" })
};
function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ jsx(
    ThemeProvider$1,
    {
      attribute: "class",
      defaultTheme: "dark",
      enableSystem: true,
      storageKey: "rainer-ui-theme",
      ...props,
      children
    }
  );
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

export { ASPECT_RATIOS, Accordion, AccordionContent, AccordionItem, AccordionTrigger, ActionButton, ActionButtonVariants, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AnalyticsOverview, AspectRatio, AspectRatioBox, AspectRatioIframe, AspectRatioImage, AspectRatioVideo, Avatar, AvatarFallback, AvatarImage, BackToTop, Badge, BookmarkButton, Button, Calendar3 as Calendar, CalendarDayButton, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CelestialBackground, Center, CenterInline, CenterScreen, CenterText, Checkbox, Chip, ChipGroup, Code, CodeBlock, CodeInline, Collapsible, CollapsibleContent2 as CollapsibleContent, CollapsibleTrigger2 as CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ConfirmDialog, Container, ContainerFluid, ContainerSection, ContentCard, ContentCardVariants, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, CookieBanner, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Divider, DotsSpinner, Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, EmptyStateIllustrated, EmptyStatePatterns, FAB, FABGroup, FileUpload, Flex, FlexBetween, FlexCenter, FlexColumn, FlexEnd, FlexRow, FlexStart, FloatingGrid, Grid, GridItem, HelpCenter, HighlightCard, HorizontalSpacer, HoverCard, HoverCardContent, HoverCardTrigger, IconButton, InlineLoader, Input, InstallPrompt, KPI, KPIChart, KPIGrid, Kbd, KbdCombo, KeyboardShortcuts, Label, Lightbox, LikeButton, LinkButton, LoadingScreen, Masonry, MasonryItem, MatrixBackground, Menu, MenuBar, Modal, ModalContent, ModalFooter, ModalHeader, ModalTrigger, NavigationContextMenu, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Notification, NotificationGroup, NotificationProvider, NotificationToast, PageHeader, Pagination, PaginationCompact, PaginationInfo, Panel, PanelContent, PanelDescription, PanelFooter, PanelGroup, PanelHeader, PanelTitle, ParticlesEffect, PhoneInput, Popover, PopoverContent, PopoverTrigger, Progress, PulseSpinner, QuickActions, QuickStats, Quote, QuoteBlock, QuoteTestimonial, RadioGroup, RadioGroupItem, RangeSlider, Rating, RatingProgress, RatingSummary, ReadingTime, RecentPostsList, ScrollArea, ScrollBar, SearchInput, SectionDivider, SegmentedControl, SegmentedControlItem, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator2 as Separator, ShareButton, ShareMenu, ShareMenuVariants, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Sidebar, SidebarTrigger, Skeleton, Slider, Spacer, Spinner, SpinnerOverlay, StarsBackground, StatsCards, StepItem, Steps, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, TextDivider, Textarea, ThemeProvider, ThemeToggle, TimePicker, Timeline, TimelineItem, TimelineSeparator, Toaster, Toggle, TokensDemo, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TopBar, TopBarActions, TopBarTitle, UpdateNotification, VerticalSpacer, VisuallyHidden, badgeVariants, buttonVariants, hexToRGB, hexToRGBA, navigationMenuTriggerStyle, toggleVariants, useConfirm, useNotification };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map