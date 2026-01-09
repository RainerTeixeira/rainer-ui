"use client"
import { jsx, jsxs } from "react/jsx-runtime";
i;
"use client";
import { Card, CardContent, CardFooter, CardHeader } from "../layout/card";
import { Badge } from "../feedback/badge";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
const formatRelativeDate = (date) => {
  try {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR
    });
  } catch {
    return "";
  }
};
function ContentCard({
  title,
  description,
  image,
  link,
  metadata,
  actions,
  variant = "default",
  orientation = "vertical",
  showImage = true,
  showMetadata = true,
  showActions = true,
  imageAlt,
  imagePriority = false,
  className,
  onClick,
  external = false
}) {
  const renderImage = () => {
    if (!showImage || !image) return null;
    return /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "aspect-video relative", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: image,
          alt: imageAlt || title,
          fill: true,
          className: cn(
            "object-cover transition-transform duration-300",
            "group-hover:scale-105"
          ),
          priority: imagePriority,
          sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
      ),
      metadata?.badge && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-red-500 text-white", children: metadata.badge }) })
    ] }) });
  };
  const renderMetadata = () => {
    if (!showMetadata || !metadata) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
      metadata.category && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: metadata.category }),
      metadata.date && /* @__PURE__ */ jsx("span", { className: "flex items-center gap-1", children: formatRelativeDate(metadata.date) }),
      metadata.readTime && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
        "\u{1F4D6} ",
        metadata.readTime,
        " min"
      ] }),
      metadata.author && /* @__PURE__ */ jsxs("span", { children: [
        "por ",
        metadata.author
      ] }),
      metadata.source && /* @__PURE__ */ jsx("span", { className: "font-medium", children: metadata.source }),
      metadata.price && /* @__PURE__ */ jsx("span", { className: "font-bold text-primary text-base", children: metadata.price })
    ] });
  };
  const renderActions = () => {
    if (!showActions || !actions) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        actions.like && /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "gap-1.5",
              actions.like.active && "text-red-500"
            ),
            onClick: () => actions.like?.onAction?.("like", actions.like),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn(actions.like.active && "fill-current"), children: "\u2764\uFE0F" }),
              actions.like.count && /* @__PURE__ */ jsx("span", { className: "text-xs", children: actions.like.count })
            ]
          }
        ),
        actions.favorite && /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "gap-1.5",
              actions.favorite.active && "text-yellow-500"
            ),
            onClick: () => actions.favorite?.onAction?.("favorite", actions.favorite),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn(actions.favorite.active && "fill-current"), children: "\u2B50" }),
              actions.favorite.count && /* @__PURE__ */ jsx("span", { className: "text-xs", children: actions.favorite.count })
            ]
          }
        ),
        actions.bookmark && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              "gap-1.5",
              actions.bookmark.active && "text-blue-500"
            ),
            onClick: () => actions.bookmark?.onAction?.("bookmark", actions.bookmark),
            children: /* @__PURE__ */ jsx("span", { className: cn(actions.bookmark.active && "fill-current"), children: "\u{1F516}" })
          }
        )
      ] }),
      actions.share && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "gap-1.5",
          onClick: () => actions.share?.onAction?.("share", actions.share),
          children: "\u{1F4E4}"
        }
      )
    ] });
  };
  const variantClasses = {
    default: "hover:shadow-lg transition-shadow duration-300",
    product: "hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
    news: "border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300",
    minimal: "border-0 shadow-none hover:bg-accent/50 transition-colors duration-300",
    featured: "ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300"
  };
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? {
    href: link,
    target: external ? "_blank" : void 0,
    rel: external ? "noopener noreferrer" : void 0
  } : {};
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: { y: orientation === "vertical" ? -4 : 0 },
      transition: { duration: 0.2 },
      className: cn(
        "group",
        orientation === "horizontal" && "flex gap-4",
        className
      ),
      children: /* @__PURE__ */ jsx(
        Wrapper,
        {
          ...wrapperProps,
          onClick,
          className: cn("block", link && "hover:underline-none"),
          children: /* @__PURE__ */ jsxs(
            Card,
            {
              className: cn(
                "h-full overflow-hidden",
                variantClasses[variant],
                orientation === "horizontal" && "flex-row",
                "transition-all duration-300"
              ),
              children: [
                orientation === "vertical" && renderImage(),
                /* @__PURE__ */ jsxs("div", { className: cn(
                  "flex flex-col",
                  orientation === "horizontal" && "flex-1"
                ), children: [
                  /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2", children: [
                    renderMetadata(),
                    /* @__PURE__ */ jsx("h3", { className: cn(
                      "font-semibold line-clamp-2",
                      variant === "featured" ? "text-xl" : "text-lg",
                      "group-hover:text-primary transition-colors duration-200"
                    ), children: title })
                  ] }),
                  description && /* @__PURE__ */ jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: description }) }),
                  (link || showActions) && /* @__PURE__ */ jsxs(CardFooter, { className: cn(
                    "pt-4",
                    "flex items-center justify-between",
                    !showActions && "justify-end"
                  ), children: [
                    renderActions(),
                    link && /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "gap-1 text-primary",
                        children: [
                          "Ler mais",
                          /* @__PURE__ */ jsx(Link, { className: "h-3 w-3" })
                        ]
                      }
                    )
                  ] })
                ] }),
                orientation === "horizontal" && /* @__PURE__ */ jsx("div", { className: "w-1/3", children: renderImage() })
              ]
            }
          )
        }
      )
    }
  );
}
const ContentCardVariants = {
  /**
   * Card para blog posts
   */
  BlogPost: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "default" }),
  /**
   * Card para produtos
   */
  Product: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "product" }),
  /**
   * Card para notícias
   */
  News: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "news" }),
  /**
   * Card em destaque
   */
  Featured: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "featured" }),
  /**
   * Card minimalista
   */
  Minimal: (props) => /* @__PURE__ */ jsx(ContentCard, { ...props, variant: "minimal" })
};
export {
  ContentCard,
  ContentCardVariants
};
//# sourceMappingURL=content-card.mjs.map