import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tokensData from '@rainersoft/design-tokens/formats/tokens.json';
import '@rainersoft/design-tokens/formats/css-vars.css';
import { jsx, jsxs } from 'react/jsx-runtime';

var tokens = tokensData;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var primitiveZIndex = tokens.primitives?.zIndex ?? {};
var getZIndexValue = (key, fallback) => {
  const value = primitiveZIndex?.[key];
  return value !== void 0 ? String(value) : String(fallback);
};
({
  base: getZIndexValue("base", 0),
  content: getZIndexValue("content", 100),
  overlay: getZIndexValue("overlay", 200),
  dropdown: getZIndexValue("dropdown", 300),
  modal: getZIndexValue("modal", 400),
  tooltip: getZIndexValue("tooltip", 500),
  notification: getZIndexValue("notification", 600),
  max: getZIndexValue("max", 9999)
});
var motionPrimitives = tokens.primitives?.motion ?? {};
var motionTokens = motionPrimitives;
motionTokens?.delay ?? {};
var animationDurations = motionTokens?.duration ?? {};
var animationEasings = motionTokens?.easing ?? {};
var baseDuration = animationDurations.normal ?? animationDurations.default ?? "200ms";
animationDurations.fast ?? baseDuration;
animationDurations.slow ?? baseDuration;
var easeInOut = animationEasings.easeInOut ?? animationEasings.default ?? "ease-in-out";
animationEasings.easeOut ?? easeInOut;
animationEasings.spring ?? easeInOut;
var fallbackMotionSemantic = {
  };
tokens.semantics?.motion ?? fallbackMotionSemantic;
tokens.themes?.light ?? {};
tokens.themes?.dark ?? {};
tokens.semantics?.layoutClasses?.components ?? {};
tokens.semantics?.layoutClasses?.sections ?? {};
tokens.primitives?.gradientDirections ?? {};
var COLORS = {
  primary: "var(--color-blue-500)",
  success: "var(--color-green-500)",
  warning: "#f59e0b",
  error: "var(--color-red-500)",
  info: "var(--color-cyan-500)",
  gray: "var(--color-gray-500)"
};
var SocialButton = ({ action, size, variant, showCount, animated, onClick }) => {
  const [isActive, setIsActive] = useState(action.active || false);
  const [count, setCount] = useState(action.count || 0);
  useEffect(() => {
    const key = `social-${action.id}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setIsActive(data.active);
        setCount(data.count);
      } catch (error) {
        console.warn("Error loading state:", error);
      }
    }
  }, [action.id]);
  const saveState = useCallback((newActive, newCount) => {
    const key = `social-${action.id}`;
    localStorage.setItem(key, JSON.stringify({
      active: newActive,
      count: newCount,
      timestamp: Date.now()
    }));
  }, [action.id]);
  const handleClick = useCallback(() => {
    if (action.disabled) return;
    const newActive = !isActive;
    const newCount = action.type === "like" || action.type === "bookmark" ? newActive ? count + 1 : Math.max(0, count - 1) : count;
    setIsActive(newActive);
    setCount(newCount);
    saveState(newActive, newCount);
    onClick();
  }, [isActive, count, action.type, action.disabled, onClick, saveState]);
  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-2",
    lg: "px-4 py-2 text-base gap-2"
  };
  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };
  const color = action.color || "primary";
  const colorValue = COLORS[color];
  const variantClasses = {
    default: cn(
      "border transition-all",
      isActive ? `bg-[${colorValue}] text-white border-[${colorValue}]` : "bg-background hover:bg-muted text-foreground border-border"
    ),
    minimal: cn(
      "transition-colors",
      isActive ? `text-[${colorValue}]` : "text-muted-foreground hover:text-foreground"
    ),
    elevated: cn(
      "border shadow-md hover:shadow-lg transition-all",
      isActive ? `bg-[${colorValue}] text-white border-[${colorValue}]` : "bg-background hover:bg-muted text-foreground border-border"
    ),
    neon: cn(
      "relative border transition-all",
      isActive ? `border-[${colorValue}] text-[${colorValue}] shadow-[0_0_20px_var(--color-cyan-500)]` : "border-border/40 text-muted-foreground hover:border-[${colorValue}] hover:text-[${colorValue}]"
    )
  };
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      className: cn(
        "inline-flex items-center justify-center rounded-md font-medium",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant]
      ),
      onClick: handleClick,
      disabled: action.disabled,
      animate: animated && isActive ? { scale: [1, 1.2, 1] } : {},
      transition: { duration: 0.2 },
      whileHover: animated ? { scale: 1.05 } : {},
      whileTap: animated ? { scale: 0.95 } : {},
      children: [
        /* @__PURE__ */ jsx("span", { className: cn("flex-shrink-0", iconSizes[size]), children: isActive && action.activeIcon ? action.activeIcon : action.icon }),
        showCount && count > 0 && /* @__PURE__ */ jsx(
          motion.span,
          {
            className: "min-w-[1.2rem] text-center font-mono",
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            children: count.toLocaleString()
          },
          count
        ),
        action.label && variant !== "minimal" && /* @__PURE__ */ jsx("span", { className: "truncate", children: action.label })
      ]
    }
  );
};
var SocialBar = ({
  actions,
  layout = "horizontal",
  size = "md",
  variant = "default",
  spacing = "md",
  showCount = true,
  animated = true,
  className
}) => {
  const layoutClasses = {
    horizontal: cn("flex flex-row items-center", `gap-${spacing === "none" ? "0" : spacing === "sm" ? "1" : spacing === "md" ? "2" : "4"}`),
    vertical: cn("flex flex-col items-start", `gap-${spacing === "none" ? "0" : spacing === "sm" ? "1" : spacing === "md" ? "2" : "4"}`),
    grid: cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4", `gap-${spacing === "none" ? "0" : spacing === "sm" ? "1" : spacing === "md" ? "2" : "4"}`),
    stack: cn("flex flex-wrap", `gap-${spacing === "none" ? "0" : spacing === "sm" ? "1" : spacing === "md" ? "2" : "4"}`)
  };
  return /* @__PURE__ */ jsx("div", { className: cn("inline-flex", layoutClasses[layout], className), children: actions.map((action) => /* @__PURE__ */ jsx(
    SocialButton,
    {
      action,
      size,
      variant,
      showCount,
      animated,
      onClick: action.onClick || (() => {
      })
    },
    action.id
  )) });
};
var LikeButton = (props) => {
  const HeartIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-full h-full", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) });
  const HeartFilledIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-full h-full", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) });
  return /* @__PURE__ */ jsx(
    SocialBar,
    {
      actions: [{
        id: "like",
        type: "like",
        label: "Curtir",
        icon: /* @__PURE__ */ jsx(HeartIcon, {}),
        activeIcon: /* @__PURE__ */ jsx(HeartFilledIcon, {}),
        color: "error",
        count: props.count,
        active: props.active,
        onClick: props.onClick
      }],
      size: props.size,
      variant: props.variant
    }
  );
};
var ShareButton = (props) => {
  const ShareIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-full h-full", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a3 3 0 10-4.732 2.684m4.732-2.684a3 3 0 00-4.732-2.684M3 12a3 3 0 106 0 3 3 0 00-6 0z" }) });
  return /* @__PURE__ */ jsx(
    SocialBar,
    {
      actions: [{
        id: "share",
        type: "share",
        label: "Compartilhar",
        icon: /* @__PURE__ */ jsx(ShareIcon, {}),
        color: "info",
        onClick: props.onClick
      }],
      size: props.size,
      variant: props.variant
    }
  );
};
var BookmarkButton = (props) => {
  const BookmarkIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-full h-full", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" }) });
  const BookmarkFilledIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-full h-full", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" }) });
  return /* @__PURE__ */ jsx(
    SocialBar,
    {
      actions: [{
        id: "bookmark",
        type: "bookmark",
        label: "Salvar",
        icon: /* @__PURE__ */ jsx(BookmarkIcon, {}),
        activeIcon: /* @__PURE__ */ jsx(BookmarkFilledIcon, {}),
        color: "warning",
        count: props.count,
        active: props.active,
        onClick: props.onClick
      }],
      size: props.size,
      variant: props.variant
    }
  );
};
var social_bar_default = SocialBar;

export { BookmarkButton, LikeButton, ShareButton, SocialBar, social_bar_default as default };
//# sourceMappingURL=social-bar.mjs.map
//# sourceMappingURL=social-bar.mjs.map