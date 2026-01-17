'use strict';

var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var React3 = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var framerMotion = require('framer-motion');
var Heart = require('lucide-react/dist/esm/icons/heart');
var reactDialog = require('@radix-ui/react-dialog');
var lucideReact = require('lucide-react');
var reactDropdownMenu = require('@radix-ui/react-dropdown-menu');
var qrcode_react = require('qrcode.react');
var Check2 = require('lucide-react/dist/esm/icons/check');
var Facebook = require('lucide-react/dist/esm/icons/facebook');
var Link = require('lucide-react/dist/esm/icons/link');
var Linkedin = require('lucide-react/dist/esm/icons/linkedin');
var MessageCircle = require('lucide-react/dist/esm/icons/message-circle');
var QrCode = require('lucide-react/dist/esm/icons/qr-code');
var Send = require('lucide-react/dist/esm/icons/send');
var Share2 = require('lucide-react/dist/esm/icons/share-2');
var Twitter = require('lucide-react/dist/esm/icons/twitter');
var Bookmark = require('lucide-react/dist/esm/icons/bookmark');
var Clock = require('lucide-react/dist/esm/icons/clock');
var Copy = require('lucide-react/dist/esm/icons/copy');
var Link2 = require('lucide-react/dist/esm/icons/link-2');
var Smartphone = require('lucide-react/dist/esm/icons/smartphone');
var dateFns = require('date-fns');
var locale = require('date-fns/locale');

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

var React3__namespace = /*#__PURE__*/_interopNamespace(React3);
var Heart__default = /*#__PURE__*/_interopDefault(Heart);
var Check2__default = /*#__PURE__*/_interopDefault(Check2);
var Facebook__default = /*#__PURE__*/_interopDefault(Facebook);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var Linkedin__default = /*#__PURE__*/_interopDefault(Linkedin);
var MessageCircle__default = /*#__PURE__*/_interopDefault(MessageCircle);
var QrCode__default = /*#__PURE__*/_interopDefault(QrCode);
var Send__default = /*#__PURE__*/_interopDefault(Send);
var Share2__default = /*#__PURE__*/_interopDefault(Share2);
var Twitter__default = /*#__PURE__*/_interopDefault(Twitter);
var Bookmark__default = /*#__PURE__*/_interopDefault(Bookmark);
var Clock__default = /*#__PURE__*/_interopDefault(Clock);
var Copy__default = /*#__PURE__*/_interopDefault(Copy);
var Link2__default = /*#__PURE__*/_interopDefault(Link2);
var Smartphone__default = /*#__PURE__*/_interopDefault(Smartphone);

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
var ButtonComponent = React3__namespace.forwardRef(
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
      const child = React3__namespace.Children.only(children);
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
  const [isLiked, setIsLiked] = React3.useState(initialIsLiked);
  const [likes, setLikes] = React3.useState(initialLikes);
  const [isAnimating, setIsAnimating] = React3.useState(false);
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.div,
            {
              animate: isAnimating ? {
                scale: [1, 1.3, 1]
              } : {},
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ jsxRuntime.jsx(
                Heart__default.default,
                {
                  className: cn("h-4 w-4 transition-all", isLiked && "fill-current")
                }
              )
            }
          ),
          showCount && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: likes.toLocaleString() })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            animate: isAnimating ? {
              scale: [1, 1.3, 1],
              rotate: [0, -10, 10, 0]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" },
            children: /* @__PURE__ */ jsxRuntime.jsx(
              Heart__default.default,
              {
                className: cn("h-4 w-4 transition-all", isLiked && "fill-current")
              }
            )
          }
        ),
        showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: isLiked ? activeLabel : inactiveLabel }),
        showCount && likes > 0 && /* @__PURE__ */ jsxRuntime.jsx(
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

// src/lib/constants.ts
var Z_INDEX = {
  BACKDROP: "999",
  MODAL: "1000"};
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out"}};
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM_RIGHT: "to-br"};
var Dialog = reactDialog.Root;
var DialogPortal = reactDialog.Portal;
var DialogOverlay = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogContent = React3__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
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
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogTitle = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogDescription = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenu = reactDropdownMenu.Root;
var DropdownMenuTrigger = reactDropdownMenu.Trigger;
var DropdownMenuSubTrigger = React3__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  reactDropdownMenu.SubTrigger,
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
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = reactDropdownMenu.SubTrigger.displayName;
var DropdownMenuSubContent = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDropdownMenu.SubContent,
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
DropdownMenuSubContent.displayName = reactDropdownMenu.SubContent.displayName;
var DropdownMenuContent = React3__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(reactDropdownMenu.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  reactDropdownMenu.Content,
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
DropdownMenuContent.displayName = reactDropdownMenu.Content.displayName;
var DropdownMenuItem = React3__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDropdownMenu.Item,
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
DropdownMenuItem.displayName = reactDropdownMenu.Item.displayName;
var DropdownMenuCheckboxItem = React3__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  reactDropdownMenu.CheckboxItem,
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
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(reactDropdownMenu.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = reactDropdownMenu.CheckboxItem.displayName;
var DropdownMenuRadioItem = React3__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  reactDropdownMenu.RadioItem,
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
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(reactDropdownMenu.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = reactDropdownMenu.RadioItem.displayName;
var DropdownMenuLabel = React3__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDropdownMenu.Label,
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
DropdownMenuLabel.displayName = reactDropdownMenu.Label.displayName;
var DropdownMenuSeparator = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDropdownMenu.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = reactDropdownMenu.Separator.displayName;
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
  const [copied, setCopied] = React3.useState(false);
  const [showQR, setShowQR] = React3.useState(false);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant, size, className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Share2__default.default, { className: "h-4 w-4" }),
        showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Compartilhar" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuLabel, { children: "Compartilhar em" }),
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: shareNative, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Share2__default.default, { className: "mr-2 h-4 w-4" }),
            "Compartilhar..."
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {})
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("facebook"), children: [
          /* @__PURE__ */ jsxRuntime.jsx(Facebook__default.default, { className: "mr-2 h-4 w-4 text-blue-600" }),
          "Facebook"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("twitter"), children: [
          /* @__PURE__ */ jsxRuntime.jsx(Twitter__default.default, { className: "mr-2 h-4 w-4 text-sky-500" }),
          "Twitter / X"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("linkedin"), children: [
          /* @__PURE__ */ jsxRuntime.jsx(Linkedin__default.default, { className: "mr-2 h-4 w-4 text-blue-700" }),
          "LinkedIn"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("whatsapp"), children: [
          /* @__PURE__ */ jsxRuntime.jsx(MessageCircle__default.default, { className: "mr-2 h-4 w-4 text-green-600" }),
          "WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => shareOnPlatform("telegram"), children: [
          /* @__PURE__ */ jsxRuntime.jsx(Send__default.default, { className: "mr-2 h-4 w-4 text-blue-500" }),
          "Telegram"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onClick: copyToClipboard, children: copied ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Check2__default.default, { className: "mr-2 h-4 w-4 text-green-500" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-green-500", children: "Link copiado!" })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Link__default.default, { className: "mr-2 h-4 w-4" }),
          "Copiar link"
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => setShowQR(true), children: [
          /* @__PURE__ */ jsxRuntime.jsx(QrCode__default.default, { className: "mr-2 h-4 w-4" }),
          "QR Code"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Dialog, { open: showQR, onOpenChange: setShowQR, children: /* @__PURE__ */ jsxRuntime.jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(DialogHeader, { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: "Compartilhar via QR Code" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogDescription, { children: "Escaneie o QR Code abaixo para acessar este conte\xFAdo" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center p-6 bg-white rounded-lg", children: /* @__PURE__ */ jsxRuntime.jsx(
        qrcode_react.QRCodeSVG,
        {
          value: shareUrl,
          size: 256,
          level: "H",
          includeMargin: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "flex-1",
            onClick: () => setShowQR(false),
            children: "Fechar"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "default",
            size: "lg",
            className: "flex-1",
            onClick: copyToClipboard,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Link__default.default, { className: "mr-2 h-4 w-4" }),
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
  const [isBookmarked, setIsBookmarked] = React3.useState(initialIsBookmarked);
  const [isAnimating, setIsAnimating] = React3.useState(false);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            animate: isAnimating ? {
              scale: [1, 1.3, 1],
              rotate: [0, -15, 15, 0]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" },
            children: /* @__PURE__ */ jsxRuntime.jsx(
              Bookmark__default.default,
              {
                className: cn(
                  "h-4 w-4 transition-all",
                  isBookmarked && "fill-current"
                )
              }
            )
          }
        ),
        showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: isBookmarked ? activeLabel : inactiveLabel })
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
  const sizeClasses = getSizeClasses(size);
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        showIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-shrink-0", "aria-hidden": "true", children: icon || /* @__PURE__ */ jsxRuntime.jsx(Clock__default.default, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "whitespace-nowrap", children: defaultText })
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
  const [isAnimating, setIsAnimating] = React3.useState(false);
  const [currentActive, setCurrentActive] = React3.useState(isActive);
  React3.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
        showLabel && dynamicLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium whitespace-nowrap", children: dynamicLabel }),
        showCount && count !== void 0 && count > 0 && /* @__PURE__ */ jsxRuntime.jsx(
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
  Like: (props) => /* @__PURE__ */ jsxRuntime.jsx(ActionButton, { ...props, activeColor: "error" }),
  /**
   * Botão de favorito (estrela)
   */
  Favorite: (props) => /* @__PURE__ */ jsxRuntime.jsx(ActionButton, { ...props, activeColor: "warning" }),
  /**
   * Botão de follow/seguir
   */
  Follow: (props) => /* @__PURE__ */ jsxRuntime.jsx(ActionButton, { ...props, activeColor: "success" }),
  /**
   * Botão de save/salvar
   */
  Save: (props) => /* @__PURE__ */ jsxRuntime.jsx(ActionButton, { ...props, activeColor: "info" })
};
var DEFAULT_PLATFORMS = [
  {
    id: "facebook",
    name: "Facebook",
    icon: /* @__PURE__ */ jsxRuntime.jsx(Facebook__default.default, { className: "h-4 w-4" }),
    color: "text-blue-600",
    url: "https://www.facebook.com/sharer/sharer.php?u={url}&t={title}",
    order: 1
  },
  {
    id: "twitter",
    name: "Twitter / X",
    icon: /* @__PURE__ */ jsxRuntime.jsx(Twitter__default.default, { className: "h-4 w-4" }),
    color: "text-sky-500",
    url: "https://twitter.com/intent/tweet?url={url}&text={title}",
    order: 2
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: /* @__PURE__ */ jsxRuntime.jsx(Linkedin__default.default, { className: "h-4 w-4" }),
    color: "text-blue-700",
    url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
    order: 3
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: /* @__PURE__ */ jsxRuntime.jsx(MessageCircle__default.default, { className: "h-4 w-4" }),
    color: "text-green-600",
    url: "https://api.whatsapp.com/send?text={title}%20{url}",
    order: 4
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: /* @__PURE__ */ jsxRuntime.jsx(Send__default.default, { className: "h-4 w-4" }),
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
  const [copied, setCopied] = React3.useState(false);
  const [showQR, setShowQR] = React3.useState(false);
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
  const enabledPlatforms = DEFAULT_PLATFORMS.filter(
    (p) => platforms.includes(p.id)
  ).sort((a, b) => (a.order || 0) - (b.order || 0));
  const TriggerButton = () => /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant, size, className: cn("gap-2", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(Share2__default.default, { className: "h-4 w-4" }),
    showLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { children: label })
  ] });
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(TriggerButton, {}) }),
      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { align, side, className: "w-56", children: [
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuLabel, { children: "Compartilhar em" }),
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        showNativeShare && typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: shareNative, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Smartphone__default.default, { className: "mr-2 h-4 w-4" }),
            "Compartilhar..."
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {})
        ] }),
        enabledPlatforms.map((platform) => /* @__PURE__ */ jsxRuntime.jsxs(
          DropdownMenuItem,
          {
            onClick: () => shareOnPlatform(platform),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("mr-2 h-4 w-4", platform.color), children: platform.icon }),
              platform.name
            ]
          },
          platform.id
        )),
        (showCopyLink || showQRCode) && /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        showCopyLink && /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onClick: copyToClipboard, children: copied ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Check2__default.default, { className: "mr-2 h-4 w-4 text-green-500" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-green-500", children: "Link copiado!" })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Copy__default.default, { className: "mr-2 h-4 w-4" }),
          "Copiar link"
        ] }) }),
        showQRCode && /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => setShowQR(true), children: [
          /* @__PURE__ */ jsxRuntime.jsx(QrCode__default.default, { className: "mr-2 h-4 w-4" }),
          "QR Code"
        ] })
      ] })
    ] }),
    showQRCode && /* @__PURE__ */ jsxRuntime.jsx(Dialog, { open: showQR, onOpenChange: setShowQR, children: /* @__PURE__ */ jsxRuntime.jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(DialogHeader, { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: "Compartilhar via QR Code" }),
        /* @__PURE__ */ jsxRuntime.jsx(DialogDescription, { children: "Escaneie o QR Code para acessar este conte\xFAdo" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center p-6 bg-white rounded-lg", children: /* @__PURE__ */ jsxRuntime.jsx(
        qrcode_react.QRCodeSVG,
        {
          value: shareUrl,
          size: 256,
          level: "H",
          includeMargin: true,
          bgColor: "white",
          fgColor: "black"
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "flex-1",
            onClick: () => setShowQR(false),
            children: "Fechar"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "default",
            size: "lg",
            className: "flex-1",
            onClick: copyToClipboard,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Link2__default.default, { className: "mr-2 h-4 w-4" }),
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
  Blog: (props) => /* @__PURE__ */ jsxRuntime.jsx(
    ShareMenu,
    {
      ...props,
      platforms: ["twitter", "facebook", "linkedin", "whatsapp", "copy", "qr"]
    }
  ),
  /**
   * Variante para e-commerce com foco em WhatsApp
   */
  Ecommerce: (props) => /* @__PURE__ */ jsxRuntime.jsx(
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
  Dashboard: (props) => /* @__PURE__ */ jsxRuntime.jsx(
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
  Mobile: (props) => /* @__PURE__ */ jsxRuntime.jsx(
    ShareMenu,
    {
      ...props,
      platforms: ["native", "whatsapp", "telegram", "copy"],
      showNativeShare: true
    }
  )
};
var Card = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardDescription = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var formatRelativeDate = (date) => {
  try {
    return dateFns.formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: locale.ptBR
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
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "aspect-video relative", children: [
      React3__namespace.default.createElement("img", {
        src: image,
        alt: imageAlt || title,
        className: cn(
          "w-full h-full object-cover transition-transform duration-300",
          "group-hover:scale-105"
        ),
        loading: imagePriority ? "eager" : "lazy"
      }),
      metadata?.badge && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "default", className: "bg-red-500 text-white", children: metadata.badge }) })
    ] }) });
  };
  const renderMetadata = () => {
    if (!showMetadata || !metadata) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
      metadata.category && /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "secondary", className: "text-xs", children: metadata.category }),
      metadata.date && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex items-center gap-1", children: formatRelativeDate(metadata.date) }),
      metadata.readTime && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1", children: [
        "\u{1F4D6} ",
        metadata.readTime,
        " min"
      ] }),
      metadata.author && /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
        "por ",
        metadata.author
      ] }),
      metadata.source && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: metadata.source }),
      metadata.price && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-bold text-primary text-base", children: metadata.price })
    ] });
  };
  const renderActions = () => {
    if (!showActions || !actions) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        actions.like && /* @__PURE__ */ jsxRuntime.jsxs(
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
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(actions.like.active && "fill-current"), children: "\u2764\uFE0F" }),
              actions.like.count && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs", children: actions.like.count })
            ]
          }
        ),
        actions.favorite && /* @__PURE__ */ jsxRuntime.jsxs(
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
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(actions.favorite.active && "fill-current"), children: "\u2B50" }),
              actions.favorite.count && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs", children: actions.favorite.count })
            ]
          }
        ),
        actions.bookmark && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "gap-1.5",
              actions.bookmark.active && "text-blue-500"
            ),
            onClick: () => actions.bookmark?.onAction?.("bookmark", actions.bookmark),
            children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(actions.bookmark.active && "fill-current"), children: "\u{1F516}" })
          }
        )
      ] }),
      actions.share && /* @__PURE__ */ jsxRuntime.jsx(
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
  const variantClasses = {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      whileHover: { y: orientation === "vertical" ? -4 : 0 },
      transition: { duration: 0.2 },
      className: cn(
        "group",
        orientation === "horizontal" && "flex gap-4",
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Wrapper,
        {
          ...wrapperProps,
          onClick,
          className: cn("block", link && "hover:underline-none"),
          children: /* @__PURE__ */ jsxRuntime.jsxs(
            Card,
            {
              className: cn(
                "h-full overflow-hidden",
                variantClasses[variant],
                orientation === "horizontal" && "flex-row",
                "transition-all duration-300"
              ),
              children: [
                orientation === "vertical" && renderImage(),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
                  "flex flex-col",
                  orientation === "horizontal" && "flex-1"
                ), children: [
                  /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { className: "pb-2", children: [
                    renderMetadata(),
                    /* @__PURE__ */ jsxRuntime.jsx("h3", { className: cn(
                      "font-semibold line-clamp-2",
                      variant === "featured" ? "text-xl" : "text-lg",
                      "group-hover:text-primary transition-colors duration-200"
                    ), children: title })
                  ] }),
                  description && /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: description }) }),
                  (link || showActions) && /* @__PURE__ */ jsxRuntime.jsxs(CardFooter, { className: cn(
                    "pt-4",
                    "flex items-center justify-between",
                    !showActions && "justify-end"
                  ), children: [
                    renderActions(),
                    link && /* @__PURE__ */ jsxRuntime.jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "gap-1 text-primary",
                        children: [
                          "Ler mais",
                          /* @__PURE__ */ jsxRuntime.jsx(Link__default.default, { className: "h-3 w-3" })
                        ]
                      }
                    )
                  ] })
                ] }),
                orientation === "horizontal" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-1/3", children: renderImage() })
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
  BlogPost: (props) => /* @__PURE__ */ jsxRuntime.jsx(ContentCard, { ...props, variant: "default" }),
  /**
   * Card para produtos
   */
  Product: (props) => /* @__PURE__ */ jsxRuntime.jsx(ContentCard, { ...props, variant: "product" }),
  /**
   * Card para notícias
   */
  News: (props) => /* @__PURE__ */ jsxRuntime.jsx(ContentCard, { ...props, variant: "news" }),
  /**
   * Card em destaque
   */
  Featured: (props) => /* @__PURE__ */ jsxRuntime.jsx(ContentCard, { ...props, variant: "featured" }),
  /**
   * Card minimalista
   */
  Minimal: (props) => /* @__PURE__ */ jsxRuntime.jsx(ContentCard, { ...props, variant: "minimal" })
};

exports.ActionButton = ActionButton;
exports.ActionButtonVariants = ActionButtonVariants;
exports.BookmarkButton = BookmarkButton;
exports.ContentCard = ContentCard;
exports.ContentCardVariants = ContentCardVariants;
exports.LikeButton = LikeButton;
exports.ReadingTime = ReadingTime;
exports.ShareButton = ShareButton;
exports.ShareMenu = ShareMenu;
exports.ShareMenuVariants = ShareMenuVariants;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map