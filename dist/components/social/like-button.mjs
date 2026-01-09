"use client"
"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
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
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);
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
    return /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleLike,
        className: cn(
          "inline-flex items-center gap-1.5 text-sm transition-colors",
          isLiked ? getColorClasses() : "text-muted-foreground hover:text-foreground",
          className
        ),
        "aria-label": `${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`,
        children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: isAnimating ? {
                scale: [1, 1.3, 1]
              } : {},
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ jsx(
                Heart,
                {
                  className: cn("h-4 w-4 transition-all", isLiked && "fill-current")
                }
              )
            }
          ),
          showCount && /* @__PURE__ */ jsx("span", { className: "font-medium", children: likes.toLocaleString() })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: isLiked ? "default" : "outline",
      size,
      onClick: handleLike,
      className: cn(
        "gap-2 transition-all",
        isLiked && getActiveBgClasses(),
        className
      ),
      "aria-label": `${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`,
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: isAnimating ? {
              scale: [1, 1.3, 1],
              rotate: [0, -10, 10, 0]
            } : {},
            transition: { duration: 0.6, ease: "easeInOut" },
            children: /* @__PURE__ */ jsx(
              Heart,
              {
                className: cn("h-4 w-4 transition-all", isLiked && "fill-current")
              }
            )
          }
        ),
        showLabel && /* @__PURE__ */ jsx("span", { className: "font-medium", children: isLiked ? activeLabel : inactiveLabel }),
        showCount && likes > 0 && /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
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
export {
  LikeButton
};
//# sourceMappingURL=like-button.mjs.map