import * as React18 from 'react';
import React18__default from 'react';
import '@rainersoft/design-tokens/formats/css-vars.css';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getInitials } from '@rainersoft/utils';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import Plus from 'lucide-react/dist/esm/icons/plus';
import X from 'lucide-react/dist/esm/icons/x';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import 'next-themes';
import 'lucide-react/dist/esm/icons/moon';
import 'lucide-react/dist/esm/icons/sun';
import { motion as motion$1 } from 'framer-motion';
import TrendingDown from 'lucide-react/dist/esm/icons/trending-down';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import Settings from 'lucide-react/dist/esm/icons/settings';
import BarChart from 'lucide-react/dist/esm/icons/bar-chart';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Edit from 'lucide-react/dist/esm/icons/edit';
import Eye from 'lucide-react/dist/esm/icons/eye';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import HelpCircle from 'lucide-react/dist/esm/icons/help-circle';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import Video from 'lucide-react/dist/esm/icons/video';

var tokens = {};
var tokensWithThemes = tokens;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var layoutClassesSemantic = tokens.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
var GRADIENT_DIRECTIONS = tokens.primitives?.gradientDirections ?? {};
var motionClasses = tokens.semantics?.motionClasses ?? {};
var MOTION = {
  TRANSITION: {
    DEFAULT: motionClasses.transition?.default,
    FAST: motionClasses.transition?.fast,
    SLOW: motionClasses.transition?.slow,
    COLOR: motionClasses.transition?.color,
    TRANSFORM: motionClasses.transition?.transform,
    OPACITY: motionClasses.transition?.opacity
  }
};
var motionTokens = tokens.MOTION ?? tokens.motionTokens ?? tokens.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens.semantics?.motion ?? {};
var motionSemantic = motionSemanticTokens;
motion?.delay ?? {};
var ANIMATION_DURATIONS = motion?.duration ?? {};
var ANIMATION_EASINGS = motion?.easing ?? {};
var safeMotionDuration = ANIMATION_DURATIONS;
var safeMotionEasing = ANIMATION_EASINGS;
var defaultDuration = safeMotionDuration?.normal ?? safeMotionDuration?.default;
safeMotionDuration?.fast ?? defaultDuration;
safeMotionDuration?.slow ?? defaultDuration;
var easeInOut = safeMotionEasing?.easeInOut ?? safeMotionEasing?.default;
safeMotionEasing?.easeOut ?? easeInOut;
safeMotionEasing?.spring ?? easeInOut;
var motionSemanticTyped = motionSemantic;
({
  // Presets semânticos
  semantic: {
    transition: motionSemanticTyped.transition?.default,
    interaction: motionSemanticTyped.interaction?.hover,
    feedback: motionSemanticTyped.feedback?.success,
    navigation: motionSemanticTyped.navigation?.page
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
var Avatar = React18.forwardRef(
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
    const [imageStatus, setImageStatus] = React18.useState("loading");
    const [showFallback, setShowFallback] = React18.useState(!src);
    React18.useEffect(() => {
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
var AvatarImage = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "img",
  {
    ref,
    className: cn("h-full w-full object-cover", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var Input = React18.forwardRef(
  ({ className, type, error, helperText, label, required, id, ...props }, ref) => {
    const inputId = id || `input-${React18.useId()}`;
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: inputId,
          className: cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            error ? "text-destructive" : "text-foreground",
            "dark:text-cyan-200 dark:font-mono"
          ),
          children: [
            label,
            required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type,
          id: inputId,
          className: cn(
            // Base styles
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2",
            "text-sm ring-offset-background file:border-0 file:bg-transparent",
            "file:text-sm file:font-medium placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            // Dark mode
            "dark:bg-black/50 dark:border-cyan-400/30 dark:text-cyan-100",
            "dark:placeholder:text-cyan-400/50 dark:ring-offset-black",
            "dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-black",
            // Error state
            error && "border-destructive focus-visible:ring-destructive",
            "dark:border-red-400/50 dark:focus-visible:ring-red-400",
            // Transitions
            "transition-all duration-200",
            className
          ),
          ref,
          ...props
        }
      ),
      helperText && /* @__PURE__ */ jsx(
        "p",
        {
          className: cn(
            "text-xs",
            error ? "text-destructive" : "text-muted-foreground",
            "dark:text-cyan-400/70"
          ),
          children: helperText
        }
      )
    ] });
  }
);
Input.displayName = "Input";
var Textarea = React18.forwardRef(
  ({
    className,
    error,
    helperText,
    label,
    required,
    id,
    maxLength,
    showCount,
    value,
    ...props
  }, ref) => {
    const inputId = id || `textarea-${React18.useId()}`;
    const [characterCount, setCharacterCount] = React18.useState(0);
    React18.useEffect(() => {
      if (typeof value === "string") {
        setCharacterCount(value.length);
      }
    }, [value]);
    const handleInputChange = (e) => {
      if (maxLength) {
        const newValue = e.target.value.slice(0, maxLength);
        e.target.value = newValue;
        setCharacterCount(newValue.length);
      }
      props.onChange?.(e);
    };
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: inputId,
          className: cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            error ? "text-destructive" : "text-foreground",
            "dark:text-cyan-200 dark:font-mono"
          ),
          children: [
            label,
            required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: inputId,
          className: cn(
            // Base styles
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2",
            "text-sm ring-offset-background placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none",
            // Dark mode
            "dark:bg-black/50 dark:border-cyan-400/30 dark:text-cyan-100",
            "dark:placeholder:text-cyan-400/50 dark:ring-offset-black",
            "dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-black",
            // Error state
            error && "border-destructive focus-visible:ring-destructive",
            "dark:border-red-400/50 dark:focus-visible:ring-red-400",
            // Transitions
            "transition-all duration-200",
            className
          ),
          ref,
          maxLength,
          value,
          onChange: handleInputChange,
          ...props
        }
      ),
      (helperText || showCount && maxLength) && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        helperText && /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-xs",
              error ? "text-destructive" : "text-muted-foreground",
              "dark:text-cyan-400/70 dark:text-red-400/70"
            ),
            children: helperText
          }
        ),
        showCount && maxLength && /* @__PURE__ */ jsxs(
          "p",
          {
            className: cn(
              "text-xs",
              characterCount >= maxLength ? "text-destructive" : "text-muted-foreground",
              "dark:text-cyan-400/70"
            ),
            children: [
              characterCount,
              "/",
              maxLength
            ]
          }
        )
      ] })
    ] });
  }
);
Textarea.displayName = "Textarea";
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
var ButtonComponent = React18.forwardRef(
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
      const child = React18.Children.only(children);
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
var Slider = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
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
var Switch = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var Toggle = React18.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
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
var IconButton = React18.forwardRef(
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
    const [showTooltip, setShowTooltip] = React18.useState(false);
    const [tooltipVisible, setTooltipVisible] = React18.useState(false);
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
    React18.useEffect(() => {
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
var LinkButton = React18.forwardRef(
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
var FAB = React18.forwardRef(
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
    const [showActions, setShowActions] = React18.useState(active);
    const isExtended = extended && text;
    React18.useEffect(() => {
      setShowActions(active);
    }, [active]);
    const handleClick = React18.useCallback(() => {
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
var FABGroup = React18.forwardRef(
  ({
    className,
    main,
    secondary = [],
    position = "bottom-right",
    ...props
  }, ref) => {
    const positionClasses = {
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
          positionClasses[position],
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
var SegmentedControl = React18.forwardRef(
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
    const [internalValue, setInternalValue] = React18.useState(defaultValue || options[0]?.value);
    const currentValue = value !== void 0 ? value : internalValue;
    const handleOptionClick = React18.useCallback((optionValue, isDisabled) => {
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
var SegmentedControlItem = React18.forwardRef(
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
var Card = React18.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      // Base styles
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      // Variant styles
      variant === "default" && "border-border bg-background dark:bg-black/40 dark:border-cyan-400/20",
      variant === "outline" && "border-2 border-border bg-transparent dark:border-cyan-400/30",
      variant === "elevated" && "border-border/50 shadow-lg dark:bg-black/60 dark:border-cyan-400/20 dark:shadow-cyan-500/10",
      variant === "glass" && "border-border/20 bg-background/80 backdrop-blur-md dark:bg-black/40 dark:border-cyan-400/30 dark:backdrop-blur-xl",
      // Transitions
      "transition-all duration-200",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "flex flex-col space-y-1.5 p-6",
      "dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      "dark:text-cyan-200 dark:font-mono",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground",
      "dark:text-cyan-400/80",
      className
    ),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "flex items-center p-6 pt-0",
      "dark:border-t dark:border-cyan-400/10",
      className
    ),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:ring-offset-black",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border dark:border-cyan-400/30 dark:text-cyan-300",
        count: "border-transparent bg-muted text-foreground shadow-sm px-2.5 py-1 text-[11px] tracking-wide",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600 dark:bg-green-400/20 dark:text-green-300 dark:hover:bg-green-400/30",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-400/20 dark:text-yellow-300 dark:hover:bg-yellow-400/30",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600 dark:bg-cyan-400/20 dark:text-cyan-300 dark:hover:bg-cyan-400/30",
        cyberpunk: "border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 dark:from-cyan-400 dark:to-purple-400 dark:hover:from-cyan-300 dark:hover:to-purple-300",
        neon: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-400/20 dark:border-cyan-300/50 dark:bg-cyan-300/10 dark:text-cyan-200 dark:shadow-cyan-300/30"
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant, size }), className), ...props });
}
var Progress = React18.forwardRef(({ className, value, color = "default", ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      // Base styles
      "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
      // Dark mode
      "dark:bg-black/40 dark:border dark:border-cyan-400/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: cn(
          // Base indicator
          "h-full w-full flex-1 bg-primary transition-all duration-300",
          // Color variants
          color === "default" && "bg-primary dark:bg-cyan-400",
          color === "success" && "bg-green-500 dark:bg-green-400",
          color === "warning" && "bg-yellow-500 dark:bg-yellow-400",
          color === "destructive" && "bg-red-500 dark:bg-red-400",
          color === "cyberpunk" && "bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400"
        ),
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;
var AccordionItem = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn(
      "border-b border-border dark:border-cyan-400/20",
      className
    ),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      // Base styles
      "flex flex-1 items-center justify-between py-4 text-sm font-medium",
      "transition-all hover:underline",
      // Focus styles
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "focus-visible:ring-offset-2 dark:ring-offset-black dark:focus-visible:ring-cyan-400",
      // Dark mode
      "dark:text-cyan-200 dark:hover:text-cyan-100",
      // Disabled state
      "[&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200 dark:text-cyan-400" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: cn(
      // Base styles
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up",
      "data-[state=open]:animate-accordion-down",
      // Spacing
      "pb-4 pt-0",
      // Text color
      "dark:text-cyan-400/80",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function StatsCards({
  items = [],
  isLoading = false,
  className,
  columns = { base: 1, md: 2, lg: 4 },
  showFooterDate,
  updatedAt,
  animationDelay,
  emptyMessage = "Nenhum dado dispon\xEDvel"
}) {
  const getColor = (path, fallback) => fallback;
  const getShadow = (path, fallback) => fallback;
  const resolvedAnimationDelay = animationDelay ?? 0.1;
  const cardRadius = "0.5rem";
  const cardShadow = getShadow("md", "0 4px 6px -1px rgb(0 0 0 / 0.1)");
  const gridClass = cn(
    "grid gap-4",
    columns.base && `grid-cols-${columns.base}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`,
    className
  );
  const fallbackPrimary = "var(--color-cyan-500)";
  const fallbackSecondary = "var(--color-info-background)";
  const resolvedItems = items.map((item) => {
    const primary = item.accentColor ?? (item.accentKey ? getColor(item.accentKey, fallbackPrimary) : fallbackPrimary);
    const secondary = item.secondaryColor ? getColor(item.secondaryColor, fallbackSecondary) : fallbackSecondary;
    return {
      ...item,
      primary,
      secondary
    };
  });
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: gridClass, children: [...Array(Math.max(resolvedItems.length, 4))].map((_, i) => /* @__PURE__ */ jsxs(
      Card,
      {
        className: "animate-pulse border",
        style: { borderRadius: cardRadius, boxShadow: cardShadow },
        children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-4 w-24 bg-muted rounded" }),
            /* @__PURE__ */ jsx("div", { className: "h-8 w-8 bg-muted rounded" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "h-8 w-20 bg-muted rounded" }),
            /* @__PURE__ */ jsx("div", { className: "h-3 w-28 bg-muted rounded mt-2" })
          ] })
        ]
      },
      i
    )) });
  }
  if (!resolvedItems.length) {
    return /* @__PURE__ */ jsx(Card, { className: cn("w-full", className), style: { borderRadius: cardRadius, boxShadow: cardShadow }, children: /* @__PURE__ */ jsx(CardContent, { className: "p-6 text-center text-muted-foreground text-sm", children: emptyMessage }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: gridClass, children: [
    resolvedItems.map((stat, index) => {
      const isPositive = stat.trend ? stat.trend === "up" : (stat.change ?? 0) >= 0;
      const changeValue = stat.change ?? 0;
      const valueText = stat.formatValue ? stat.formatValue(stat.value) : typeof stat.value === "number" ? stat.value.toLocaleString("pt-BR") : stat.value;
      const indicatorColor = isPositive ? "var(--color-success-default)" : "var(--color-error-default)";
      return /* @__PURE__ */ jsx(
        motion$1.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * resolvedAnimationDelay },
          children: /* @__PURE__ */ jsxs(
            Card,
            {
              className: "relative overflow-hidden border backdrop-blur-sm",
              style: { borderRadius: cardRadius, boxShadow: cardShadow },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-10 pointer-events-none",
                    style: {
                      background: `radial-gradient(140% 140% at 80% 0%, ${stat.primary} 0%, transparent 55%)`
                    },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2 relative z-10", children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: stat.label }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex h-10 w-10 items-center justify-center rounded-xl text-white",
                      style: {
                        background: `linear-gradient(135deg, ${stat.primary}, ${stat.secondary})`
                      },
                      "aria-hidden": "true",
                      children: stat.icon
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "relative z-10 space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold", children: [
                      stat.valuePrefix,
                      valueText,
                      stat.valueSuffix
                    ] }),
                    stat.change !== void 0 && /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: cn(
                          "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                          isPositive ? "bg-[color:var(--token-status-success-bg,transparent)]" : "bg-[color:var(--token-status-error-bg,transparent)]"
                        ),
                        style: {
                          color: indicatorColor,
                          backgroundColor: `${indicatorColor}1a`
                        },
                        children: [
                          isPositive ? /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(TrendingDown, { className: "h-3 w-3", "aria-hidden": "true" }),
                          Math.abs(changeValue).toFixed(1),
                          "%"
                        ]
                      }
                    )
                  ] }),
                  stat.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: stat.description }),
                  stat.change !== void 0 && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "inline-block h-2 w-2 rounded-full",
                        style: { backgroundColor: indicatorColor },
                        "aria-hidden": "true"
                      }
                    ),
                    isPositive ? "Em alta" : "Em baixa",
                    " em rela\xE7\xE3o ao per\xEDodo anterior"
                  ] })
                ] })
              ]
            }
          )
        },
        `${stat.label}-${index}`
      );
    }),
    showFooterDate && /* @__PURE__ */ jsxs("div", { className: "col-span-full text-right text-xs text-muted-foreground mt-1", children: [
      "Atualizado em ",
      new Date(updatedAt ?? Date.now()).toLocaleString("pt-BR")
    ] })
  ] });
}
function StatsOverview({
  variant = "quick",
  items,
  className,
  isLoading,
  updatedAt,
  columns,
  animationDelay,
  theme = "auto",
  showFooterDate = true
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `w-full ${className || ""}`,
      "aria-labelledby": `${variant}-stats-heading`,
      "data-theme": theme,
      children: [
        /* @__PURE__ */ jsxs("h2", { id: `${variant}-stats-heading`, className: "sr-only", children: [
          "Estat\xEDsticas do Dashboard (",
          variant,
          ")"
        ] }),
        /* @__PURE__ */ jsx(
          StatsCards,
          {
            items: items ?? [],
            isLoading,
            updatedAt,
            columns: columns ?? { base: 1, md: 2, lg: 4 },
            animationDelay,
            showFooterDate
          }
        )
      ]
    }
  );
}
var DEFAULT_STAGGER_DELAY = 0.1;
function QuickStatsComponent({
  stats = [],
  animationDelay = DEFAULT_STAGGER_DELAY,
  className,
  theme = "auto"
}) {
  return /* @__PURE__ */ jsx(
    StatsOverview,
    {
      variant: "quick",
      items: stats,
      animationDelay,
      className,
      theme,
      showFooterDate: true
    }
  );
}
var QuickStats = React18__default.memo(QuickStatsComponent);
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
        children: /* @__PURE__ */ jsx(
          Button,
          {
            onClick: action.onClick,
            variant: "outline",
            className: "w-full h-auto p-4 flex flex-col items-start gap-2 hover:border-cyan-400/50 dark:hover:bg-cyan-400/5",
            "aria-label": `${action.label}: ${action.description}`,
            children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col gap-2 w-full", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `p-2 rounded-lg bg-linear-to-br ${action.color} text-white inline-flex w-fit`,
                  "aria-hidden": "true",
                  children: action.icon
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "text-left", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm block", children: action.label }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground block", children: action.description })
              ] })
            ] })
          }
        )
      },
      action.label
    )) }) })
  ] });
}
function AnalyticsOverview({ className, metrics = [], isLoading, updatedAt }) {
  const items = metrics;
  return /* @__PURE__ */ jsx(
    StatsOverview,
    {
      variant: "analytics",
      className,
      items,
      isLoading,
      updatedAt,
      columns: { base: 1, md: 2, lg: 4 },
      showFooterDate: true
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
var Card2 = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
Card2.displayName = "Card";
var CardHeader2 = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader2.displayName = "CardHeader";
var CardTitle2 = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
CardTitle2.displayName = "CardTitle";
var CardDescription2 = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription2.displayName = "CardDescription";
var CardContent2 = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent2.displayName = "CardContent";
var CardFooter2 = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter2.displayName = "CardFooter";
var HighlightCard = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(Card2, { className: "dark:bg-black/30 dark:border-purple-400/20", children: [
    /* @__PURE__ */ jsxs(CardHeader2, { children: [
      /* @__PURE__ */ jsxs(CardTitle2, { className: "flex items-center gap-2 dark:text-purple-200", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "h-5 w-5" }),
        "Central de Ajuda"
      ] }),
      /* @__PURE__ */ jsx(CardDescription2, { children: "Precisa de ajuda? Acesse nossos recursos" })
    ] }),
    /* @__PURE__ */ jsx(CardContent2, { className: "space-y-3", children: resources.map((resource, index) => {
      const Icon = resource.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "w-full justify-between dark:border-purple-400/20 inline-flex items-center gap-3 rounded-md border px-3 py-2 text-sm font-medium shadow-sm bg-white hover:bg-gray-50 dark:bg-black/30 dark:hover:bg-purple-400/10",
          onClick: () => window.location.href = resource.link,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxs("span", { className: "text-left flex-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-sm block", children: resource.title }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground block", children: resource.description })
            ] }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 ml-auto" })
          ]
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

export { AnalyticsOverview, HelpCenter, QuickActions, QuickStats, RecentPostsList, StatsCards, StatsOverview };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map