'use strict';

var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');
var React2 = require('react');
var reactDialog = require('@radix-ui/react-dialog');
var lucideReact = require('lucide-react');
var reactDropdownMenu = require('@radix-ui/react-dropdown-menu');
var qrcode_react = require('qrcode.react');
var Check2 = require('lucide-react/dist/esm/icons/check');
var Copy = require('lucide-react/dist/esm/icons/copy');
var Facebook = require('lucide-react/dist/esm/icons/facebook');
var Link2 = require('lucide-react/dist/esm/icons/link-2');
var Linkedin = require('lucide-react/dist/esm/icons/linkedin');
var MessageCircle = require('lucide-react/dist/esm/icons/message-circle');
var QrCode = require('lucide-react/dist/esm/icons/qr-code');
var Send = require('lucide-react/dist/esm/icons/send');
var Share2 = require('lucide-react/dist/esm/icons/share-2');
var Smartphone = require('lucide-react/dist/esm/icons/smartphone');
var Twitter = require('lucide-react/dist/esm/icons/twitter');

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

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var Check2__default = /*#__PURE__*/_interopDefault(Check2);
var Copy__default = /*#__PURE__*/_interopDefault(Copy);
var Facebook__default = /*#__PURE__*/_interopDefault(Facebook);
var Link2__default = /*#__PURE__*/_interopDefault(Link2);
var Linkedin__default = /*#__PURE__*/_interopDefault(Linkedin);
var MessageCircle__default = /*#__PURE__*/_interopDefault(MessageCircle);
var QrCode__default = /*#__PURE__*/_interopDefault(QrCode);
var Send__default = /*#__PURE__*/_interopDefault(Send);
var Share2__default = /*#__PURE__*/_interopDefault(Share2);
var Smartphone__default = /*#__PURE__*/_interopDefault(Smartphone);
var Twitter__default = /*#__PURE__*/_interopDefault(Twitter);

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
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-[var(--motion-duration,200ms)] ease-[var(--motion-easing,cubic-bezier(.4,0,.2,1))] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:shadow-glow-cyan",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:shadow-glow-purple",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 dark:hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline dark:neon-text",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass neon-border hover:glass-hover dark:text-primary",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
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
var Dialog = reactDialog.Root;
var DialogPortal = reactDialog.Portal;
var DialogOverlay = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogContent = React2__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
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
var DialogTitle = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogDescription = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuSubTrigger = React2__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
var DropdownMenuSubContent = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuContent = React2__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(reactDropdownMenu.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuItem = React2__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuCheckboxItem = React2__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
var DropdownMenuRadioItem = React2__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
var DropdownMenuLabel = React2__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuSeparator = React2__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  reactDropdownMenu.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = reactDropdownMenu.Separator.displayName;
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
  const [copied, setCopied] = React2.useState(false);
  const [showQR, setShowQR] = React2.useState(false);
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

exports.ShareMenu = ShareMenu;
exports.ShareMenuVariants = ShareMenuVariants;
//# sourceMappingURL=share-menu.js.map
//# sourceMappingURL=share-menu.js.map