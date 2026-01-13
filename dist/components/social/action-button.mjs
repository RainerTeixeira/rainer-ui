import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion as motion$1 } from 'framer-motion';
import { useState } from 'react';

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.primitives.motion;
var motionSemantic = tokens.semantics.motion || {
  transition: {
    default: {
      duration: motion.duration.normal,
      easing: motion.easing.easeInOut
    }
  },
  interaction: {
    hover: {
      duration: motion.duration.fast,
      easing: motion.easing.easeOut
    }
  },
  feedback: {
    success: {
      duration: motion.duration.slower,
      easing: motion.easing.spring
    }
  },
  navigation: {
    page: {
      duration: motion.duration.slow,
      easing: motion.easing.easeInOut
    }
  }
};
motion.delay;
motion.duration;
motion.easing;
({
  default: {
    duration: motion.duration.normal,
    easing: motion.easing.easeInOut
  },
  fast: {
    duration: motion.duration.fast,
    easing: motion.easing.easeOut
  },
  slow: {
    duration: motion.duration.slow,
    easing: motion.easing.easeInOut
  },
  spring: {
    duration: motion.duration.normal,
    easing: motion.easing.spring
  },
  // Presets semânticos
  transition: motionSemantic.transition.default,
  interaction: motionSemantic.interaction.hover,
  feedback: motionSemantic.feedback.success,
  navigation: motionSemantic.navigation.page
});
var buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-[var(--motion-duration,200ms)] ease-[var(--motion-easing,cubic-bezier(.4,0,.2,1))] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:shadow-glow-cyan",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:shadow-glow-purple",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 dark:hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline dark:neon-text",
        neon: "bg-primary border-2 border-primary text-primary-foreground hover:bg-primary/90 dark:neon-box",
        glass: "glass neon-border hover:glass-hover dark:text-primary",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
var activeColorClasses = {
  primary: "bg-primary hover:bg-primary/90 text-primary-foreground border-primary",
  success: "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500",
  warning: "bg-amber-500 hover:bg-amber-600 text-white border-amber-500",
  error: "bg-red-500 hover:bg-red-600 text-white border-red-500",
  info: "bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
};
var animationPresets = {
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
          motion$1.div,
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
var ActionButtonVariants = {
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

export { ActionButton, ActionButtonVariants };
//# sourceMappingURL=action-button.mjs.map
//# sourceMappingURL=action-button.mjs.map