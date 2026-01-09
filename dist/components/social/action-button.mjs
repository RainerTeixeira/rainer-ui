"use client"
"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
const activeColorClasses = {
  primary: "bg-primary hover:bg-primary/90 text-primary-foreground border-primary",
  success: "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500",
  warning: "bg-amber-500 hover:bg-amber-600 text-white border-amber-500",
  error: "bg-red-500 hover:bg-red-600 text-white border-red-500",
  info: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
};
const animationPresets = {
  scale: { scale: [1, 1.2, 1] },
  bounce: { y: [0, -8, 0] },
  rotate: { rotate: [0, -15, 15, 0] },
  pulse: { scale: [1, 1.05, 1] }
};
function ActionButton({
  icon,
  activeIcon,
  isActive = false,
  onToggle,
  count,
  inactiveLabel,
  activeLabel,
  variant = "default",
  size = "default",
  showCount = true,
  showLabel = true,
  animation = { type: "scale", duration: 0.3, intensity: "normal" },
  className,
  disabled = false,
  ariaLabel,
  activeColor = "primary"
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentActive, setCurrentActive] = useState(isActive);
  React.useEffect(() => {
    setCurrentActive(isActive);
  }, [isActive]);
  const handleClick = () => {
    if (disabled || isAnimating) return;
    setIsAnimating(true);
    const newActive = !currentActive;
    setCurrentActive(newActive);
    onToggle?.(newActive);
    setTimeout(() => setIsAnimating(false), (animation.duration || 0.3) * 1e3);
  };
  const animationConfig = animation.type ? animationPresets[animation.type] : animationPresets.scale;
  const dynamicClasses = cn(
    currentActive && activeColorClasses[activeColor],
    currentActive && variant === "ghost" && "text-opacity-80",
    "transition-all duration-200"
  );
  const dynamicLabel = currentActive ? activeLabel : inactiveLabel;
  const dynamicIcon = currentActive && activeIcon ? activeIcon : icon;
  const dynamicAriaLabel = ariaLabel || (dynamicLabel ? `${dynamicLabel}${count ? ` (${count})` : ""}` : `${currentActive ? "Desativar" : "Ativar"} a\xE7\xE3o${count ? ` (${count})` : ""}`);
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: currentActive && activeColor === "primary" ? "default" : variant,
      size,
      onClick: handleClick,
      disabled,
      className: cn("gap-2", dynamicClasses, className),
      "aria-label": dynamicAriaLabel,
      "aria-pressed": currentActive,
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: isAnimating ? animationConfig : {},
            transition: {
              duration: animation.duration || 0.3,
              ease: "easeInOut"
            },
            className: "flex-shrink-0",
            children: dynamicIcon
          }
        ),
        showLabel && dynamicLabel && /* @__PURE__ */ jsx("span", { className: "font-medium whitespace-nowrap", children: dynamicLabel }),
        showCount && count !== void 0 && count > 0 && /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center",
              currentActive ? "bg-current/20 text-current" : "bg-muted text-muted-foreground"
            ),
            children: count.toLocaleString()
          }
        )
      ]
    }
  );
}
const ActionButtonVariants = {
  /**
   * Botão de curtir (coração)
   */
  Like: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "error" }),
  /**
   * Botão de favorito (estrela)
   */
  Favorite: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "warning" }),
  /**
   * Botão de follow/seguir
   */
  Follow: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "success" }),
  /**
   * Botão de save/salvar
   */
  Save: (props) => /* @__PURE__ */ jsx(ActionButton, { ...props, activeColor: "info" })
};
export {
  ActionButton,
  ActionButtonVariants
};
//# sourceMappingURL=action-button.mjs.map