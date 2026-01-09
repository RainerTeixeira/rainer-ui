"use client"
"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "../overlays/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../overlays/dropdown-menu";
import {
  Check,
  Facebook,
  Link as LinkIcon,
  Linkedin,
  MessageCircle,
  QrCode,
  Send,
  Share2,
  Twitter
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
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
          /* @__PURE__ */ jsx(Check, { className: "mr-2 h-4 w-4 text-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "Link copiado!" })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(LinkIcon, { className: "mr-2 h-4 w-4" }),
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
      /* @__PURE__ */ jsx("div", { className: "flex justify-center p-6 bg-white rounded-lg", children: /* @__PURE__ */ jsx(QRCodeSVG, { value: shareUrl, size: 256, level: "H", includeMargin: true }) }),
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
        /* @__PURE__ */ jsxs(Button, { variant: "default", size: "lg", className: "flex-1", onClick: copyToClipboard, children: [
          /* @__PURE__ */ jsx(LinkIcon, { className: "mr-2 h-4 w-4" }),
          "Copiar Link"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ShareButton
};
//# sourceMappingURL=share-button.mjs.map