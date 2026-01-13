import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React2 from 'react';
import { useState } from 'react';
import { Overlay, Portal, Content, Close, Title, Description, Root as Root$1 } from '@radix-ui/react-dialog';
import { X, ChevronRight, Check, Smartphone, Copy, QrCode, Link2, Share2, Facebook, Twitter, Linkedin, MessageCircle, Send } from 'lucide-react';
import { SubTrigger, SubContent, Portal as Portal$1, Content as Content$1, Item, CheckboxItem, ItemIndicator, RadioItem, Label, Separator, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import { QRCodeSVG } from 'qrcode.react';

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.primitives.motion;
var motionSemantic = tokens.semantics.motion || {
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
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
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
var Dialog = Root$1;
var DialogPortal = Portal;
var DialogOverlay = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var DialogContent = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
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
var DialogTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var DialogDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
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
var DropdownMenu = Root;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = React2.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SubTrigger,
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
DropdownMenuSubTrigger.displayName = SubTrigger.displayName;
var DropdownMenuSubContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SubContent,
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
DropdownMenuSubContent.displayName = SubContent.displayName;
var DropdownMenuContent = React2.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsx(
  Content$1,
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
DropdownMenuContent.displayName = Content$1.displayName;
var DropdownMenuItem = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  Item,
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
DropdownMenuItem.displayName = Item.displayName;
var DropdownMenuCheckboxItem = React2.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  CheckboxItem,
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
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;
var DropdownMenuRadioItem = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  RadioItem,
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
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem.displayName;
var DropdownMenuLabel = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  Label,
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
DropdownMenuLabel.displayName = Label.displayName;
var DropdownMenuSeparator = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator.displayName;
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
          /* @__PURE__ */ jsx(Check, { className: "mr-2 h-4 w-4 text-green-500" }),
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
              /* @__PURE__ */ jsx(Link2, { className: "mr-2 h-4 w-4" }),
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

export { ShareMenu, ShareMenuVariants };
//# sourceMappingURL=share-menu.mjs.map
//# sourceMappingURL=share-menu.mjs.map