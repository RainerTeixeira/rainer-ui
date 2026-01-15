import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

// src/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var motion = tokens.MOTION || {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms"},
  easing: {
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    }
};
var motionSemantic = tokens.MOTION || {
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
  semantic: {
    transition: motionSemantic.transition.default,
    interaction: motionSemantic.interaction.hover,
    feedback: motionSemantic.feedback.success,
    navigation: motionSemantic.navigation.page
  }
});
var buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border-2 border-input bg-background shadow-sm hover:bg-accent hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline",
        neon: "relative bg-gradient-to-r from-neon-cyan to-cyan-600 border-2 border-neon-cyan text-gray-950 shadow-lg shadow-neon-cyan hover:shadow-neon-cyan hover:shadow-xl",
        glass: "relative bg-glass border border-white/20 text-foreground backdrop-blur-sm shadow-sm hover:bg-white/20",
        minimal: "bg-transparent border-0 shadow-none hover:bg-accent/50 text-foreground"
      },
      size: {
        xs: "h-7 px-2 text-xs rounded-md",
        sm: "h-8 px-3 text-sm rounded-md has-[>svg]:px-2",
        default: "h-9 px-4 py-2 rounded-md has-[>svg]:px-3",
        lg: "h-10 px-6 text-base rounded-lg has-[>svg]:px-4",
        xl: "h-12 px-8 text-lg rounded-lg has-[>svg]:px-5",
        icon: "size-9 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-lg",
        "icon-xl": "size-12 rounded-xl"
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95",
        glow: "hover:shadow-lg active:shadow-sm",
        bounce: "hover:animate-bounce",
        pulse: "hover:animate-pulse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale"
    }
  }
);
var ButtonComponent = React.forwardRef(
  ({
    className,
    variant,
    size,
    animation,
    asChild = false,
    loading = false,
    loadingIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxs(
      Comp,
      {
        className: cn(
          buttonVariants({ variant, size, animation }),
          // Efeito neon especial
          variant === "neon" && [
            "before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-20",
            "after:absolute after:inset-0 after:rounded-lg after:bg-primary after:opacity-0",
            "hover:after:opacity-20 hover:shadow-primary/25 hover:shadow-xl",
            "before:transition-opacity after:transition-opacity",
            "before:duration-300 after:duration-300"
          ],
          className
        ),
        ref,
        disabled: isDisabled,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsx(Fragment, { children: loadingIcon || /* @__PURE__ */ jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) }),
          children
        ]
      }
    );
  }
);
ButtonComponent.displayName = "Button";
var Button = ButtonComponent;

// src/lib/scroll-utils.ts
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollTo(target, options) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) {
    console.warn(`Elemento n\xE3o encontrado: ${target}`);
    return;
  }
  const shouldAnimate = !prefersReducedMotion();
  element.scrollIntoView({
    behavior: shouldAnimate ? "smooth" : "auto",
    block: "start",
    inline: "nearest",
    ...options
  });
}
function scrollToTop() {
  const shouldAnimate = !prefersReducedMotion();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function scrollToPosition(x, y, smooth = true) {
  const shouldAnimate = smooth && !prefersReducedMotion();
  window.scrollTo({
    top: y,
    left: x,
    behavior: shouldAnimate ? "smooth" : "auto"
  });
}
function onReducedMotionChange(callback) {
  if (typeof window === "undefined") {
    return () => {
    };
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = (event) => {
    callback(event.matches);
  };
  handler(mediaQuery);
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }
  if (mediaQuery.addListener) {
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }
  return () => {
  };
}
function useSmoothScroll() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    const cleanup = onReducedMotionChange((matches) => {
      setReducedMotion(matches);
    });
    return cleanup;
  }, []);
  const scrollTo = useCallback(
    (target, options) => {
      smoothScrollTo(target, options);
    },
    []
  );
  const toTop = useCallback(() => {
    scrollToTop();
  }, []);
  const toPosition = useCallback((top, left = 0) => {
    scrollToPosition(left, top);
  }, []);
  return {
    scrollTo,
    scrollToTop: toTop,
    scrollToPosition: toPosition,
    reducedMotion,
    shouldAnimate: !reducedMotion
  };
}
var SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { scrollToTop: scrollToTop2, reducedMotion } = useSmoothScroll();
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsButtonVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick: scrollToTop2,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ jsx(BackToTopButton, {});
}

export { BackToTop, BackToTopButton };
//# sourceMappingURL=BackToTop.mjs.map
//# sourceMappingURL=BackToTop.mjs.map