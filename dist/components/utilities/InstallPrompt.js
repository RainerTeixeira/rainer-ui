"use client"
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
var InstallPrompt_exports = {};
__export(InstallPrompt_exports, {
  InstallPrompt: () => InstallPrompt
});
module.exports = __toCommonJS(InstallPrompt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_utils = require("../../lib/utils");
var import_lucide_react = require("lucide-react");
var import_next_themes = require("next-themes");
var import_button = require("../ui/button");
var import_card = require("../layout/card");
var import_use_pwa = require("../../hooks/use-pwa");
function InstallPrompt() {
  const { resolvedTheme } = (0, import_next_themes.useTheme)();
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const { isInstallable, isStandalone, promptInstall } = (0, import_use_pwa.usePWA)();
  const [showPrompt, setShowPrompt] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  (0, import_react.useEffect)(() => {
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: (0, import_utils.cn)(
          "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none",
          "animate-in slide-in-from-bottom-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_card.Card,
          {
            className: (0, import_utils.cn)(
              "max-w-2xl mx-auto pointer-events-auto backdrop-blur-xl border-2 shadow-2xl",
              isDark ? (0, import_utils.cn)("bg-background/90", "border-primary-base/50", "shadow-glow-cyan") : (0, import_utils.cn)("bg-background/90", "border-primary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-4 sm:p-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  className: (0, import_utils.cn)(
                    "shrink-0 p-3 rounded-full border",
                    "bg-primary-background",
                    "border-primary-base/30"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: (0, import_utils.cn)("h-6 w-6", "text-primary-base") })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "h3",
                    {
                      className: (0, import_utils.cn)(
                        "text-lg font-bold font-mono",
                        "text-foreground"
                      ),
                      children: "\u{1F4F1} Instalar no seu Dispositivo"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "button",
                    {
                      onClick: handleDismiss,
                      className: (0, import_utils.cn)(
                        "transition-colors p-1 rounded",
                        "text-muted-foreground hover:text-foreground hover:bg-muted"
                      ),
                      "aria-label": "Fechar",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "p",
                  {
                    className: (0, import_utils.cn)(
                      "text-sm",
                      "text-muted-foreground"
                    ),
                    children: "Instale como app nativo para acesso r\xE1pido sem navegador e funcionalidade offline completa."
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    import_button.Button,
                    {
                      onClick: handleInstall,
                      size: "sm",
                      className: (0, import_utils.cn)(
                        "font-mono font-bold",
                        "bg-primary text-primary-foreground hover:bg-primary-hover"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: "h-4 w-4 mr-2" }),
                        "Instalar Agora"
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_button.Button,
                    {
                      onClick: handleDismiss,
                      variant: "ghost",
                      size: "sm",
                      className: (0, import_utils.cn)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InstallPrompt
});
//# sourceMappingURL=InstallPrompt.js.map