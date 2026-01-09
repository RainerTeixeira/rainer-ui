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
var content_card_exports = {};
__export(content_card_exports, {
  ContentCard: () => ContentCard,
  ContentCardVariants: () => ContentCardVariants
});
module.exports = __toCommonJS(content_card_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_card = require("../layout/card");
var import_badge = require("../feedback/badge");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
var import_framer_motion = require("framer-motion");
var import_lucide_react = require("lucide-react");
var import_image = __toESM(require("next/image"));
var import_date_fns = require("date-fns");
var import_locale = require("date-fns/locale");
i;
"use client";
const formatRelativeDate = (date) => {
  try {
    return (0, import_date_fns.formatDistanceToNow)(new Date(date), {
      addSuffix: true,
      locale: import_locale.ptBR
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "aspect-video relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_image.default,
        {
          src: image,
          alt: imageAlt || title,
          fill: true,
          className: (0, import_utils.cn)(
            "object-cover transition-transform duration-300",
            "group-hover:scale-105"
          ),
          priority: imagePriority,
          sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
      ),
      metadata?.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_badge.Badge, { variant: "default", className: "bg-red-500 text-white", children: metadata.badge }) })
    ] }) });
  };
  const renderMetadata = () => {
    if (!showMetadata || !metadata) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
      metadata.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_badge.Badge, { variant: "secondary", className: "text-xs", children: metadata.category }),
      metadata.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex items-center gap-1", children: formatRelativeDate(metadata.date) }),
      metadata.readTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center gap-1", children: [
        "\u{1F4D6} ",
        metadata.readTime,
        " min"
      ] }),
      metadata.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
        "por ",
        metadata.author
      ] }),
      metadata.source && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium", children: metadata.source }),
      metadata.price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-bold text-primary text-base", children: metadata.price })
    ] });
  };
  const renderActions = () => {
    if (!showActions || !actions) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
        actions.like && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            className: (0, import_utils.cn)(
              "gap-1.5",
              actions.like.active && "text-red-500"
            ),
            onClick: () => actions.like?.onAction?.("like", actions.like),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)(actions.like.active && "fill-current"), children: "\u2764\uFE0F" }),
              actions.like.count && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs", children: actions.like.count })
            ]
          }
        ),
        actions.favorite && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            className: (0, import_utils.cn)(
              "gap-1.5",
              actions.favorite.active && "text-yellow-500"
            ),
            onClick: () => actions.favorite?.onAction?.("favorite", actions.favorite),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)(actions.favorite.active && "fill-current"), children: "\u2B50" }),
              actions.favorite.count && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs", children: actions.favorite.count })
            ]
          }
        ),
        actions.bookmark && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            variant: "ghost",
            size: "sm",
            className: (0, import_utils.cn)(
              "gap-1.5",
              actions.bookmark.active && "text-blue-500"
            ),
            onClick: () => actions.bookmark?.onAction?.("bookmark", actions.bookmark),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_utils.cn)(actions.bookmark.active && "fill-current"), children: "\u{1F516}" })
          }
        )
      ] }),
      actions.share && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_button.Button,
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_framer_motion.motion.div,
    {
      whileHover: { y: orientation === "vertical" ? -4 : 0 },
      transition: { duration: 0.2 },
      className: (0, import_utils.cn)(
        "group",
        orientation === "horizontal" && "flex gap-4",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Wrapper,
        {
          ...wrapperProps,
          onClick,
          className: (0, import_utils.cn)("block", link && "hover:underline-none"),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_card.Card,
            {
              className: (0, import_utils.cn)(
                "h-full overflow-hidden",
                variantClasses[variant],
                orientation === "horizontal" && "flex-row",
                "transition-all duration-300"
              ),
              children: [
                orientation === "vertical" && renderImage(),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)(
                  "flex flex-col",
                  orientation === "horizontal" && "flex-1"
                ), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardHeader, { className: "pb-2", children: [
                    renderMetadata(),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: (0, import_utils.cn)(
                      "font-semibold line-clamp-2",
                      variant === "featured" ? "text-xl" : "text-lg",
                      "group-hover:text-primary transition-colors duration-200"
                    ), children: title })
                  ] }),
                  description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_card.CardContent, { className: "pt-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-muted-foreground line-clamp-3", children: description }) }),
                  (link || showActions) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardFooter, { className: (0, import_utils.cn)(
                    "pt-4",
                    "flex items-center justify-between",
                    !showActions && "justify-end"
                  ), children: [
                    renderActions(),
                    link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      import_button.Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        className: "gap-1 text-primary",
                        children: [
                          "Ler mais",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Link, { className: "h-3 w-3" })
                        ]
                      }
                    )
                  ] })
                ] }),
                orientation === "horizontal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1/3", children: renderImage() })
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
  BlogPost: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { ...props, variant: "default" }),
  /**
   * Card para produtos
   */
  Product: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { ...props, variant: "product" }),
  /**
   * Card para notícias
   */
  News: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { ...props, variant: "news" }),
  /**
   * Card em destaque
   */
  Featured: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { ...props, variant: "featured" }),
  /**
   * Card minimalista
   */
  Minimal: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { ...props, variant: "minimal" })
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContentCard,
  ContentCardVariants
});
//# sourceMappingURL=content-card.js.map