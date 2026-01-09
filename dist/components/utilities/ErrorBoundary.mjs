"use client"
"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../layout/card";
class ErrorBoundary extends Component {
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
        return /* @__PURE__ */ jsx(Fragment, { children: this.props.fallback });
      }
      return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8 text-destructive" }) }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: "Ops! Algo deu errado" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Encontramos um erro inesperado. Por favor, tente novamente." })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-mono text-muted-foreground", children: this.state.error.toString() }),
            this.state.errorInfo && /* @__PURE__ */ jsxs("details", { className: "mt-2", children: [
              /* @__PURE__ */ jsx("summary", { className: "cursor-pointer text-sm text-muted-foreground hover:text-foreground", children: "Stack trace" }),
              /* @__PURE__ */ jsx("pre", { className: "mt-2 text-xs overflow-auto", children: this.state.errorInfo.componentStack })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxs(Button, { onClick: this.handleReset, variant: "outline", className: "flex-1", children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 mr-2" }),
              "Tentar Novamente"
            ] }),
            /* @__PURE__ */ jsxs(Button, { onClick: this.handleGoHome, className: "flex-1", children: [
              /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 mr-2" }),
              "Ir para Home"
            ] })
          ] })
        ] })
      ] }) });
    }
    return this.props.children;
  }
}
export {
  ErrorBoundary
};
//# sourceMappingURL=ErrorBoundary.mjs.map