"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import {
  Search,
  Inbox,
  FileX,
  FilterX,
  WifiOff,
  RefreshCw
} from "lucide-react";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
const defaultIcons = {
  search: Search,
  empty: Inbox,
  error: FileX,
  filtered: FilterX,
  offline: WifiOff,
  loading: RefreshCw
};
const emptyStateVariants = cva(
  "flex flex-col items-center justify-center text-center p-8",
  {
    variants: {
      size: {
        sm: "p-6",
        md: "p-8",
        lg: "p-12",
        xl: "p-16"
      },
      variant: {
        default: "",
        card: "rounded-lg border border-border bg-card",
        glass: "glass rounded-lg",
        minimal: "p-4"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);
const iconSizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20"
};
const EmptyState = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    type,
    icon,
    title,
    description,
    actions,
    secondaryActions,
    animated = false,
    iconColor,
    iconSize = "md",
    ...props
  }, ref) => {
    let IconComponent = icon;
    if (!IconComponent && type) {
      const DefaultIcon = defaultIcons[type];
      IconComponent = /* @__PURE__ */ jsx(DefaultIcon, { className: iconSizeClasses[iconSize] });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(emptyStateVariants({ size, variant }), className),
        ...props,
        children: [
          IconComponent && /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "mb-4 text-muted-foreground",
                animated && "animate-pulse",
                iconColor === "primary" && "text-primary",
                iconColor === "success" && "text-emerald-600 dark:text-emerald-500",
                iconColor === "warning" && "text-amber-600 dark:text-amber-500",
                iconColor === "error" && "text-red-600 dark:text-red-500",
                !iconColor && "text-muted-foreground"
              ),
              children: IconComponent
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "max-w-md space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
          ] }),
          (actions || secondaryActions) && /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center gap-3 sm:flex-row", children: [
            actions,
            secondaryActions
          ] })
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";
const EmptyStateIllustrated = React.forwardRef(
  ({
    className,
    illustration,
    illustrationAlt = "Ilustra\xE7\xE3o",
    illustrationWidth = 200,
    illustrationHeight = 200,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      EmptyState,
      {
        ref,
        className: cn(className),
        ...props,
        icon: illustration && /* @__PURE__ */ jsx(
          "img",
          {
            src: illustration,
            alt: illustrationAlt,
            width: illustrationWidth,
            height: illustrationHeight,
            className: "object-contain"
          }
        )
      }
    );
  }
);
EmptyStateIllustrated.displayName = "EmptyStateIllustrated";
const EmptyStatePatterns = {
  // Sem dados
  noData: (props) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "empty",
      title: "Nenhum dado dispon\xEDvel",
      description: "N\xE3o h\xE1 dados para exibir no momento.",
      ...props
    }
  ),
  // Sem resultados de busca
  noSearchResults: (onClear) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "search",
      title: "Nenhum resultado encontrado",
      description: "Tente usar termos diferentes ou limpar os filtros.",
      actions: onClear && /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClear, children: "Limpar Filtros" })
    }
  ),
  // Sem itens na lista
  noItems: (onCreate, createLabel = "Adicionar") => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "empty",
      title: "Nenhum item aqui",
      description: "Adicione seu primeiro item para come\xE7ar.",
      actions: onCreate && /* @__PURE__ */ jsx(Button, { onClick: onCreate, children: createLabel })
    }
  ),
  // Offline
  offline: (onRetry) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "offline",
      title: "Voc\xEA est\xE1 offline",
      description: "Verifique sua conex\xE3o com a internet e tente novamente.",
      actions: onRetry && /* @__PURE__ */ jsx(Button, { onClick: onRetry, children: "Tentar Novamente" }),
      animated: true
    }
  ),
  // Erro ao carregar
  error: (onRetry) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "error",
      title: "Algo deu errado",
      description: "Ocorreu um erro ao carregar os dados. Tente novamente.",
      actions: onRetry && /* @__PURE__ */ jsx(Button, { onClick: onRetry, children: "Tentar Novamente" }),
      iconColor: "error"
    }
  ),
  // Filtros sem resultado
  noFilterResults: (onClear) => /* @__PURE__ */ jsx(
    EmptyState,
    {
      type: "filtered",
      title: "Nenhum resultado com os filtros",
      description: "Tente ajustar ou remover alguns filtros.",
      actions: onClear && /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClear, children: "Limpar Filtros" })
    }
  )
};
export {
  EmptyState,
  EmptyStateIllustrated,
  EmptyStatePatterns
};
//# sourceMappingURL=empty-state.mjs.map