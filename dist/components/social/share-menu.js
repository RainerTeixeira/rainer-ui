"use client"
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var share_menu_exports = {};
__export(share_menu_exports, {
  ShareMenu: () => ShareMenu,
  ShareMenuVariants: () => ShareMenuVariants
});
module.exports = __toCommonJS(share_menu_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_button = require("../ui/button");
var import_dialog = require("../overlays/dialog");
var import_dropdown_menu = require("../overlays/dropdown-menu");
var import_lucide_react = require("lucide-react");
var import_qrcode = require("qrcode.react");
var import_react = require("react");
const DEFAULT_PLATFORMS = [
  {
    id: "facebook",
    name: "Facebook",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Facebook, { className: "h-4 w-4" }),
    color: "text-blue-600",
    url: "https://www.facebook.com/sharer/sharer.php?u={url}&t={title}",
    order: 1
  },
  {
    id: "twitter",
    name: "Twitter / X",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Twitter, { className: "h-4 w-4" }),
    color: "text-sky-500",
    url: "https://twitter.com/intent/tweet?url={url}&text={title}",
    order: 2
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Linkedin, { className: "h-4 w-4" }),
    color: "text-blue-700",
    url: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
    order: 3
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, { className: "h-4 w-4" }),
    color: "text-green-600",
    url: "https://api.whatsapp.com/send?text={title}%20{url}",
    order: 4
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Send, { className: "h-4 w-4" }),
    color: "text-blue-500",
    url: "https://t.me/share/url?url={url}&text={title}",
    order: 5
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MoreHorizontal, { className: "h-4 w-4" }),
    color: "text-orange-600",
    url: "https://reddit.com/submit?url={url}&title={title}",
    order: 6
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
  const [copied, setCopied] = (0, import_react.useState)(false);
  const [showQR, setShowQR] = (0, import_react.useState)(false);
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
  const TriggerButton = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_button.Button, { variant, size, className: cn("gap-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Share2, { className: "h-4 w-4" }),
    showLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenu, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriggerButton, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuContent, { align, side, className: "w-56", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuLabel, { children: "Compartilhar em" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuSeparator, {}),
        showNativeShare && typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: shareNative, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Smartphone, { className: "mr-2 h-4 w-4" }),
            "Compartilhar..."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuSeparator, {})
        ] }),
        enabledPlatforms.map((platform) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_dropdown_menu.DropdownMenuItem,
          {
            onClick: () => shareOnPlatform(platform),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mr-2 h-4 w-4", platform.color), children: platform.icon }),
              platform.name
            ]
          },
          platform.id
        )),
        (showCopyLink || showQRCode) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuSeparator, {}),
        showCopyLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuItem, { onClick: copyToClipboard, children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "mr-2 h-4 w-4 text-green-500" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-green-500", children: "Link copiado!" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "mr-2 h-4 w-4" }),
          "Copiar link"
        ] }) }),
        showQRCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: () => setShowQR(true), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.QrCode, { className: "mr-2 h-4 w-4" }),
          "QR Code"
        ] })
      ] })
    ] }),
    showQRCode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog, { open: showQR, onOpenChange: setShowQR, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogHeader, { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTitle, { children: "Compartilhar via QR Code" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogDescription, { children: "Escaneie o QR Code para acessar este conte\xFAdo" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex justify-center p-6 bg-white rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_qrcode.QRCodeSVG,
        {
          value: shareUrl,
          size: 256,
          level: "H",
          includeMargin: true,
          bgColor: "white",
          fgColor: "black"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            variant: "outline",
            size: "lg",
            className: "flex-1",
            onClick: () => setShowQR(false),
            children: "Fechar"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_button.Button,
          {
            variant: "default",
            size: "lg",
            className: "flex-1",
            onClick: copyToClipboard,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Link2, { className: "mr-2 h-4 w-4" }),
              "Copiar Link"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const ShareMenuVariants = {
  /**
   * Menu completo para blogs
   */
  Blog: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareMenu, { ...props, platforms: ["twitter", "facebook", "linkedin", "whatsapp", "copy", "qr"] }),
  /**
   * Menu para e-commerce (foco em WhatsApp)
   */
  Ecommerce: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareMenu, { ...props, platforms: ["whatsapp", "facebook", "telegram", "copy"], showQRCode: false }),
  /**
   * Menu minimal para dashboards
   */
  Dashboard: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareMenu, { ...props, platforms: ["copy", "email"], variant: "ghost", size: "sm", showQRCode: false }),
  /**
   * Menu mobile-first
   */
  Mobile: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareMenu, { ...props, platforms: ["native", "whatsapp", "telegram", "copy"], showNativeShare: true })
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ShareMenu,
  ShareMenuVariants
});
//# sourceMappingURL=share-menu.js.map