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
var like_button_exports = {};
__export(like_button_exports, {
  LikeButton: () => LikeButton
});
module.exports = __toCommonJS(like_button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_button = require("../ui/button");
var import_utils = require("../../lib/utils");
var import_framer_motion = require("framer-motion");
var import_lucide_react = require("lucide-react");
var import_react = require("react");
function LikeButton({
  itemId,
  initialLikes,
  initialIsLiked = false,
  variant = "default",
  activeColor = "error",
  size = "sm",
  showLabel = true,
  showCount = true,
  activeLabel = "Curtido",
  inactiveLabel = "Curtir",
  onLike,
  onUnlike,
  className
}) {
  const [isLiked, setIsLiked] = (0, import_react.useState)(initialIsLiked);
  const [likes, setLikes] = (0, import_react.useState)(initialLikes);
  const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
  const handleLike = () => {
    setIsAnimating(true);
    console.debug(`A\xE7\xE3o de curtir para o item: ${itemId}`);
    if (isLiked) {
      const newLikes = Math.max(0, likes - 1);
      setLikes(newLikes);
      setIsLiked(false);
      onUnlike?.(newLikes, itemId);
    } else {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setIsLiked(true);
      onLike?.(newLikes, itemId);
    }
    setTimeout(() => setIsAnimating(false), 600);
  };
  const getColorClasses = () => {
    const colorMap = {
      primary: "text-primary hover:text-primary/80",
      success: "text-emerald-500 hover:text-emerald-600",
      warning: "text-amber-500 hover:text-amber-600",
      error: "text-red-500 hover:text-red-600",
      info: "text-blue-500 hover:text-blue-600"
    };
    return colorMap[activeColor];
  };
  const getActiveBgClasses = () => {
    const bgMap = {
      primary: "bg-primary hover:bg-primary/90 text-primary-foreground border-primary",
      success: "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500",
      warning: "bg-amber-500 hover:bg-amber-600 text-white border-amber-500",
      error: "bg-red-500 hover:bg-red-600 text-white border-red-500",
      info: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
    };
    return bgMap[activeColor];
  };
  if (variant === "compact") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        onClick: handleLike,
        className: (0, import_utils.cn)(
          "inline-flex items-center gap-1.5 text-sm transition-colors",
          isLiked ? getColorClasses() : "text-muted-foreground hover:text-foreground",
          className
        ),
        "aria-label": `${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_framer_motion.motion.div,
            {
              animate: isAnimating ? {
                scale: [1, 1.3, 1]
              } : {},
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_lucide_react.Heart,
                {
                  className: (0, import_utils.cn)("h-4 w-4 transition-all", isLiked && "fill-current")
                }
              )
            }
          ),
          showCount && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium", children: likes.toLocaleString() })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_button.Button,
    {
      variant: isLiked ? "default" : "outline",
      size,
      onClick: handleLike,
      className: (0, import_utils.cn)(
        "gap-2 transition-all",
        isLiked && getActiveBgClasses(),
        className
      ),
      "aria-label": `${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_framer_motion.motion.div,
          {
            animate: isAnimating ? {
              scale: [1, 1.3, 1],
              rotate: [0, -10, 10, 0]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_lucide_react.Heart,
              {
                className: (0, import_utils.cn)("h-4 w-4 transition-all", isLiked && "fill-current")
              }
            )
          }
        ),
        showLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium", children: isLiked ? activeLabel : inactiveLabel }),
        showCount && likes > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            className: (0, import_utils.cn)(
              "text-xs px-1.5 py-0.5 rounded-full",
              isLiked ? "bg-current/20 text-current" : "bg-muted text-muted-foreground"
            ),
            children: likes.toLocaleString()
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LikeButton
});
//# sourceMappingURL=like-button.js.map