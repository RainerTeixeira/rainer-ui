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
var share_button_exports = {};
__export(share_button_exports, {
  ShareButton: () => ShareButton
});
module.exports = __toCommonJS(share_button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_button = require("../ui/button");
var import_dialog = require("../overlays/dialog");
var import_dropdown_menu = require("../overlays/dropdown-menu");
var import_lucide_react = require("lucide-react");
var import_qrcode = require("qrcode.react");
var import_react = require("react");
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
  const [copied, setCopied] = (0, import_react.useState)(false);
  const [showQR, setShowQR] = (0, import_react.useState)(false);
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2e3);
    } catch (error) {
      console.error("Erro ao copiar:", error);
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
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
    };
    const platformUrl = urls[platform];
    if (platformUrl) {
      window.open(
        platformUrl,
        "_blank",
        "noopener,noreferrer,width=600,height=600"
      );
      onShare?.(platform);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenu, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_button.Button, { variant, size, className: "gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Share2, { className: "h-4 w-4" }),
        showLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Compartilhar" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuContent, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuLabel, { children: "Compartilhar em" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuSeparator, {}),
        typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: shareNative, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Share2, { className: "mr-2 h-4 w-4" }),
            "Compartilhar..."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuSeparator, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: () => shareOnPlatform("facebook"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Facebook, { className: "mr-2 h-4 w-4 text-blue-600" }),
          "Facebook"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: () => shareOnPlatform("twitter"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Twitter, { className: "mr-2 h-4 w-4 text-sky-500" }),
          "Twitter / X"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: () => shareOnPlatform("linkedin"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Linkedin, { className: "mr-2 h-4 w-4 text-blue-700" }),
          "LinkedIn"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: () => shareOnPlatform("whatsapp"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, { className: "mr-2 h-4 w-4 text-green-600" }),
          "WhatsApp"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: () => shareOnPlatform("telegram"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Send, { className: "mr-2 h-4 w-4 text-blue-500" }),
          "Telegram"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuSeparator, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dropdown_menu.DropdownMenuItem, { onClick: copyToClipboard, children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "mr-2 h-4 w-4 text-green-500" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-green-500", children: "Link copiado!" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Link, { className: "mr-2 h-4 w-4" }),
          "Copiar link"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dropdown_menu.DropdownMenuItem, { onClick: () => setShowQR(true), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.QrCode, { className: "mr-2 h-4 w-4" }),
          "QR Code"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog, { open: showQR, onOpenChange: setShowQR, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogHeader, { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTitle, { children: "Compartilhar via QR Code" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogDescription, { children: "Escaneie o QR Code abaixo para acessar este conte\xFAdo" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex justify-center p-6 bg-white rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_qrcode.QRCodeSVG, { value: shareUrl, size: 256, level: "H", includeMargin: true }) }),
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_button.Button, { variant: "default", size: "lg", className: "flex-1", onClick: copyToClipboard, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Link, { className: "mr-2 h-4 w-4" }),
          "Copiar Link"
        ] })
      ] })
    ] }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ShareButton
});
//# sourceMappingURL=share-button.js.map