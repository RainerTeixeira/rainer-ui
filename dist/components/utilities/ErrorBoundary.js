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
var ErrorBoundary_exports = {};
__export(ErrorBoundary_exports, {
  ErrorBoundary: () => ErrorBoundary
});
module.exports = __toCommonJS(ErrorBoundary_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_lucide_react = require("lucide-react");
var import_button = require("../ui/button");
var import_card = require("../layout/card");
class ErrorBoundary extends import_react.Component {
  constructor(props) {
    super(props);
    this.handleReset = () => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null
      });
    };
    this.handleGoHome = () => {
      window.location.href = "/";
    };
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: this.props.fallback });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardHeader, { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.AlertTriangle, { className: "h-8 w-8 text-destructive" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardTitle, { className: "text-2xl", children: "Ops! Algo deu errado" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardDescription, { children: "Encontramos um erro inesperado. Por favor, tente novamente." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "space-y-4", children: [
          process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "p-4 bg-muted rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm font-mono text-muted-foreground", children: this.state.error.toString() }),
            this.state.errorInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { className: "mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { className: "cursor-pointer text-sm text-muted-foreground hover:text-foreground", children: "Stack trace" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { className: "mt-2 text-xs overflow-auto", children: this.state.errorInfo.componentStack })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_button.Button, { onClick: this.handleReset, variant: "outline", className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.RefreshCw, { className: "h-4 w-4 mr-2" }),
              "Tentar Novamente"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_button.Button, { onClick: this.handleGoHome, className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Home, { className: "h-4 w-4 mr-2" }),
              "Ir para Home"
            ] })
          ] })
        ] })
      ] }) });
    }
    return this.props.children;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ErrorBoundary
});
//# sourceMappingURL=ErrorBoundary.js.map