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
var UpdateNotification_exports = {};
__export(UpdateNotification_exports, {
  UpdateNotification: () => UpdateNotification
});
module.exports = __toCommonJS(UpdateNotification_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_use_pwa = require("../../hooks/use-pwa");
var import_utils = require("../../lib/utils");
var import_lucide_react = require("lucide-react");
var import_next_themes = require("next-themes");
var import_react = require("react");
var import_button = require("../ui/button");
var import_card = require("../layout/card");
function UpdateNotification() {
  const { resolvedTheme } = (0, import_next_themes.useTheme)();
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const { updateAvailable, updateServiceWorker } = (0, import_use_pwa.usePWA)();
  (0, import_react.useEffect)(() => {
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: (0, import_utils.cn)(
          "fixed top-20 right-4 z-50 max-w-sm",
          "animate-in slide-in-from-top-5 fade-in duration-300"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_card.Card,
          {
            className: (0, import_utils.cn)(
              "backdrop-blur-xl border-2 shadow-2xl",
              isDark ? (0, import_utils.cn)("bg-background/90", "border-secondary-base/50", "shadow-glow-purple") : (0, import_utils.cn)("bg-background/90", "border-secondary-base/50", "shadow-lg")
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  className: (0, import_utils.cn)(
                    "shrink-0 p-2 rounded-full border",
                    "bg-secondary-background",
                    "border-secondary-base/30"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_lucide_react.RefreshCw,
                    {
                      className: (0, import_utils.cn)(
                        "h-5 w-5 animate-spin text-secondary-base",
                        "[animation-duration:3s]"
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "h4",
                  {
                    className: (0, import_utils.cn)(
                      "text-sm font-bold font-mono",
                      "text-foreground"
                    ),
                    children: "Nova Vers\xE3o Dispon\xEDvel"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "p",
                  {
                    className: (0, import_utils.cn)(
                      "text-xs",
                      "text-muted-foreground"
                    ),
                    children: "Atualize para obter as \xFAltimas melhorias e corre\xE7\xF5es."
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_button.Button,
                  {
                    onClick: updateServiceWorker,
                    size: "sm",
                    className: (0, import_utils.cn)(
                      "w-full font-mono font-bold",
                      "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.RefreshCw, { className: "h-3 w-3 mr-2" }),
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateNotification
});
//# sourceMappingURL=UpdateNotification.js.map