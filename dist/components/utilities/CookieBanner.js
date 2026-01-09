"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CookieBanner_exports = {};
__export(CookieBanner_exports, {
  CookieBanner: () => CookieBanner,
  useCookieConsent: () => useCookieConsent
});
module.exports = __toCommonJS(CookieBanner_exports);
var import_jsx_runtime = (
  // Visualização principal do banner
  require("react/jsx-runtime")
);
var import_react = require("react");
var import_link = __toESM(require("next/link"));
var import_lucide_react = require("lucide-react");
var import_button = require("../ui/button");
var import_card = require("../layout/card");
var import_label = require("../forms/label");
var import_separator = require("../layout/separator");
var import_switch = require("../ui/switch");
var import_utils = require("../../lib/utils");
var import_cookie_utils = require("../../lib/cookie-utils");
const NextLink = import_link.default;
function CookieBanner() {
  const [showBanner, setShowBanner] = (0, import_react.useState)(false);
  const [canShowBanner, setCanShowBanner] = (0, import_react.useState)(false);
  const [showCustomize, setShowCustomize] = (0, import_react.useState)(false);
  const [preferences, setPreferences] = (0, import_react.useState)({
    essential: true,
    // Sempre verdadeiro, não pode ser desabilitado
    performance: true,
    functionality: true,
    analytics: true
  });
  const cookieManager = (0, import_cookie_utils.getCookieManager)();
  (0, import_react.useEffect)(() => {
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
  const hasShownBannerRef = (0, import_react.useRef)(false);
  const scrollThresholdRef = (0, import_react.useRef)(0);
  const scrollTimeoutRef = (0, import_react.useRef)(null);
  const mouseTimeoutRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "dialog",
    {
      className: (0, import_utils.cn)(
        "fixed bottom-0 left-0 right-0 p-4 sm:p-6",
        "animate-in slide-in-from-bottom-5 duration-300",
        "z-50"
      ),
      open: true,
      "aria-labelledby": "cookie-banner-title",
      "aria-describedby": "cookie-banner-description",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_card.Card,
        {
          className: (0, import_utils.cn)(
            "mx-auto max-w-4xl shadow-2xl",
            "dark:bg-black/95 dark:border-cyan-400/20",
            "bg-background/95 backdrop-blur-xl",
            "border-2"
          ),
          children: showCustomize ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardHeader, { className: "pb-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-4 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    className: (0, import_utils.cn)(
                      "p-3 rounded-lg",
                      "bg-primary/10 dark:bg-cyan-400/10",
                      "border border-primary/20 dark:border-cyan-400/20"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Cookie, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_card.CardTitle,
                    {
                      id: "cookie-banner-title",
                      className: (0, import_utils.cn)(
                        "text-lg",
                        "font-bold",
                        "dark:text-cyan-200"
                      ),
                      children: "Utilizamos Cookies"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    import_card.CardDescription,
                    {
                      id: "cookie-banner-description",
                      className: (0, import_utils.cn)("text-sm", "text-muted-foreground"),
                      children: [
                        "Utilizamos cookies para melhorar sua experi\xEAncia de navega\xE7\xE3o, analisar o tr\xE1fego do site e personalizar conte\xFAdo. Ao continuar navegando, voc\xEA concorda com nossa utiliza\xE7\xE3o de cookies.",
                        " ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-8 w-8 shrink-0",
                  onClick: () => setShowBanner(false),
                  "aria-label": "Fechar banner de cookies",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
                }
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_separator.Separator, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardContent, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col sm:flex-row gap-3 sm:justify-end", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_button.Button,
                {
                  variant: "outline",
                  onClick: () => setShowCustomize(true),
                  className: "w-full sm:w-auto",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Settings, { className: "h-4 w-4 mr-2" }),
                    "Personalizar"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_button.Button,
                {
                  variant: "outline",
                  onClick: handleRejectOptional,
                  className: "w-full sm:w-auto",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.XCircle, { className: "h-4 w-4 mr-2" }),
                    "Rejeitar Opcionais"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_button.Button,
                {
                  onClick: handleAcceptAll,
                  className: (0, import_utils.cn)(
                    "w-full sm:w-auto",
                    "bg-primary hover:bg-primary/90",
                    "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-4 w-4 mr-2" }),
                    "Aceitar Todos"
                  ]
                }
              )
            ] }) })
          ] }) : (
            // Visualização de personalização de cookies
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardHeader, { className: "pb-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-4 flex-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "div",
                    {
                      className: (0, import_utils.cn)(
                        "p-3 rounded-lg",
                        "bg-primary/10 dark:bg-cyan-400/10",
                        "border border-primary/20 dark:border-cyan-400/20"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Settings, { className: "h-6 w-6 text-primary dark:text-cyan-400" })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_card.CardTitle,
                      {
                        className: (0, import_utils.cn)(
                          "text-lg",
                          "font-bold",
                          "dark:text-cyan-200"
                        ),
                        children: "Personalizar Cookies"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardDescription, { className: (0, import_utils.cn)("text-sm"), children: "Escolha quais tipos de cookies voc\xEA deseja permitir. Os cookies essenciais s\xE3o necess\xE1rios para o funcionamento do site." })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_button.Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: () => setShowCustomize(false),
                    "aria-label": "Voltar",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_separator.Separator, {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "pt-6 space-y-6", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/50", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        import_label.Label,
                        {
                          htmlFor: "essential",
                          className: (0, import_utils.cn)(
                            "text-base",
                            "font-semibold",
                            "cursor-not-allowed"
                          ),
                          children: "Cookies Essenciais"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "span",
                        {
                          className: (0, import_utils.cn)(
                            "px-2 py-0.5 rounded text-xs",
                            "bg-primary text-primary-foreground",
                            "font-semibold"
                          ),
                          children: "Obrigat\xF3rio"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: (0, import_utils.cn)("text-sm", "text-muted-foreground"), children: "Necess\xE1rios para o funcionamento b\xE1sico do site. N\xE3o podem ser desativados." })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_switch.Switch,
                    {
                      id: "essential",
                      checked: preferences.essential,
                      disabled: true,
                      "aria-label": "Cookies essenciais (obrigat\xF3rio)"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_label.Label,
                      {
                        htmlFor: "performance",
                        className: (0, import_utils.cn)(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Performance"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: (0, import_utils.cn)("text-sm", "text-muted-foreground"), children: "Nos ajudam a entender como voc\xEA utiliza o site para melhorarmos a performance." })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_switch.Switch,
                    {
                      id: "performance",
                      checked: preferences.performance,
                      onCheckedChange: () => togglePreference("performance"),
                      "aria-label": "Cookies de performance"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_label.Label,
                      {
                        htmlFor: "functionality",
                        className: (0, import_utils.cn)(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Funcionalidade"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: (0, import_utils.cn)("text-sm", "text-muted-foreground"), children: "Permitem que o site se lembre de suas prefer\xEAncias e ofere\xE7a funcionalidades aprimoradas." })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_switch.Switch,
                    {
                      id: "functionality",
                      checked: preferences.functionality,
                      onCheckedChange: () => togglePreference("functionality"),
                      "aria-label": "Cookies de funcionalidade"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_label.Label,
                      {
                        htmlFor: "analytics",
                        className: (0, import_utils.cn)(
                          "text-base",
                          "font-semibold",
                          "cursor-pointer"
                        ),
                        children: "Cookies de Analytics"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: (0, import_utils.cn)("text-sm", "text-muted-foreground"), children: "Coletam informa\xE7\xF5es sobre como voc\xEA utiliza o site para an\xE1lise e melhorias." })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_switch.Switch,
                    {
                      id: "analytics",
                      checked: preferences.analytics,
                      onCheckedChange: () => togglePreference("analytics"),
                      "aria-label": "Cookies de analytics"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: (0, import_utils.cn)("text-xs", "text-muted-foreground"), children: [
                  "Para mais informa\xE7\xF5es, consulte nossa",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    NextLink,
                    {
                      href: "/privacidade",
                      className: "text-primary hover:underline dark:text-cyan-400 font-semibold",
                      children: "Pol\xEDtica de Privacidade"
                    }
                  ),
                  "."
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_button.Button,
                    {
                      variant: "outline",
                      onClick: () => setShowCustomize(false),
                      className: "w-full sm:w-auto",
                      children: "Cancelar"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    import_button.Button,
                    {
                      onClick: handleSavePreferences,
                      className: (0, import_utils.cn)(
                        "w-full sm:w-auto",
                        "bg-primary hover:bg-primary/90",
                        "dark:bg-cyan-500 dark:hover:bg-cyan-600"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-4 w-4 mr-2" }),
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
function useCookieConsent() {
  const cookieManager = (0, import_cookie_utils.getCookieManager)();
  const [preferences, setPreferences] = (0, import_react.useState)(
    cookieManager.getPreferences()
  );
  (0, import_react.useEffect)(() => {
    if (typeof globalThis.window === "undefined") return;
    setPreferences(cookieManager.getPreferences());
    const handleConsentUpdate = (event) => {
      setPreferences(event.detail);
    };
    globalThis.window.addEventListener(
      "cookie-consent-updated",
      handleConsentUpdate
    );
    return () => {
      globalThis.window.removeEventListener(
        "cookie-consent-updated",
        handleConsentUpdate
      );
    };
  }, [cookieManager]);
  return preferences;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CookieBanner,
  useCookieConsent
});
//# sourceMappingURL=CookieBanner.js.map