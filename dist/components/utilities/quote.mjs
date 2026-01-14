import * as React from 'react';
import { cva } from 'class-variance-authority';
import QuoteIcon from 'lucide-react/dist/esm/icons/quote';
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
var quoteVariants = cva(
  "relative border-l-4 pl-6 italic",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-muted",
        primary: "border-primary",
        secondary: "border-secondary",
        success: "border-emerald-500",
        warning: "border-amber-500",
        error: "border-red-500",
        testimonial: "border-transparent bg-muted/30 rounded-lg p-6",
        card: "border-border bg-card rounded-lg p-6 shadow-sm",
        glass: "glass border-transparent rounded-lg p-6",
        neon: "neon-border rounded-lg p-6"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Quote = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "md",
    author,
    source,
    sourceUrl,
    showIcon = false,
    icon,
    iconPosition = "top",
    children,
    ...props
  }, ref) => {
    const IconComponent = icon || (variant === "testimonial" || variant === "card" ? /* @__PURE__ */ jsx(QuoteIcon, { className: "h-8 w-8 text-primary/20" }) : /* @__PURE__ */ jsx(QuoteIcon, { className: "h-4 w-4 text-muted-foreground" }));
    return /* @__PURE__ */ jsxs(
      "blockquote",
      {
        ref,
        className: cn(
          quoteVariants({ variant, size }),
          (variant === "testimonial" || variant === "card" || variant === "glass" || variant === "neon") && "border-l-0",
          className
        ),
        ...props,
        children: [
          showIcon && iconPosition === "top" && /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -left-2", children: IconComponent }),
          /* @__PURE__ */ jsx("div", { className: "relative", children }),
          (author || source) && /* @__PURE__ */ jsxs("footer", { className: "mt-4 not-italic", children: [
            author && /* @__PURE__ */ jsx("cite", { className: "font-semibold not-italic text-foreground", children: author }),
            source && /* @__PURE__ */ jsxs(Fragment, { children: [
              author && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground mx-2", children: "\u2022" }),
              sourceUrl ? /* @__PURE__ */ jsx(
                "a",
                {
                  href: sourceUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-muted-foreground hover:text-foreground underline",
                  children: source
                }
              ) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: source })
            ] })
          ] }),
          showIcon && iconPosition === "bottom" && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -right-2", children: IconComponent })
        ]
      }
    );
  }
);
Quote.displayName = "Quote";
var QuoteTestimonial = React.forwardRef(
  ({
    className,
    author,
    source,
    avatar,
    rating,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: cn("bg-card rounded-lg p-6 shadow-sm", className), children: [
      /* @__PURE__ */ jsx(
        Quote,
        {
          ref,
          variant: "testimonial",
          author,
          source,
          showIcon: true,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-4", children: [
        avatar && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: avatar,
              alt: author,
              className: "h-10 w-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            author && /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: author }),
            source && /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: source })
          ] })
        ] }),
        rating && /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "text-lg",
              i < rating ? "text-amber-400" : "text-muted-foreground/30"
            ),
            children: "\u2605"
          },
          i
        )) })
      ] })
    ] });
  }
);
QuoteTestimonial.displayName = "QuoteTestimonial";
var QuoteBlock = React.forwardRef(
  ({
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx("div", { className: "relative my-8 py-8", children: /* @__PURE__ */ jsx(
      Quote,
      {
        ref,
        variant: "default",
        size: "xl",
        className: cn(
          "text-center border-l-0 border-r-0 border-t-2 border-b-2 border-border py-8",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-normal text-muted-foreground", children })
      }
    ) });
  }
);
QuoteBlock.displayName = "QuoteBlock";

export { Quote, QuoteBlock, QuoteTestimonial };
//# sourceMappingURL=quote.mjs.map
//# sourceMappingURL=quote.mjs.map