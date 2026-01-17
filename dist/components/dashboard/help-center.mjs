import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import * as React from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import HelpCircle from 'lucide-react/dist/esm/icons/help-circle';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import Video from 'lucide-react/dist/esm/icons/video';

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

// src/lib/constants.ts
var MOTION = {
  TRANSITION: {
    DEFAULT: "transition-all duration-200 ease-in-out"}};
var GRADIENT_DIRECTIONS = {
  TO_BOTTOM_RIGHT: "to-br"};
var Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var HighlightCard = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "text-left bg-card/60 dark:bg-black/50",
      "backdrop-blur-xl",
      "rounded-2xl",
      "p-4 xs:p-5 sm:p-6 md:p-8",
      "border border-border/50 dark:border-cyan-400/20",
      "hover:border-primary/40 dark:hover:border-cyan-400/50",
      "hover:bg-card/80 dark:hover:bg-black/70",
      "hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-cyan-500/20",
      "h-full flex flex-col group",
      "relative overflow-hidden",
      `before:absolute before:inset-0 before:${GRADIENT_DIRECTIONS.TO_BOTTOM_RIGHT}`,
      "before:from-primary/0 before:via-primary/0 before:to-primary/0",
      "hover:before:from-primary/5 hover:before:via-transparent hover:before:to-primary/5",
      "dark:hover:before:from-cyan-400/5 dark:hover:before:via-transparent dark:hover:before:to-purple-400/5",
      "before:transition-all before:duration-500 before:ease-in-out before:pointer-events-none",
      MOTION.TRANSITION.DEFAULT,
      className
    ),
    ...props
  }
));
HighlightCard.displayName = "HighlightCard";
function HelpCenter() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documenta\xE7\xE3o",
      description: "Guias completos de uso",
      link: "/docs"
    },
    {
      icon: Video,
      title: "Tutoriais",
      description: "V\xEDdeos passo a passo",
      link: "/tutorials"
    },
    {
      icon: MessageCircle,
      title: "Suporte",
      description: "Fale com nossa equipe",
      link: "/contato"
    }
  ];
  return /* @__PURE__ */ jsxs(Card, { className: "dark:bg-black/30 dark:border-purple-400/20", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 dark:text-purple-200", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "h-5 w-5" }),
        "Central de Ajuda"
      ] }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Precisa de ajuda? Acesse nossos recursos" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: resources.map((resource, index) => {
      const Icon = resource.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "w-full justify-between dark:border-purple-400/20 inline-flex items-center gap-3 rounded-md border px-3 py-2 text-sm font-medium shadow-sm bg-white hover:bg-gray-50 dark:bg-black/30 dark:hover:bg-purple-400/10",
          onClick: () => window.location.href = resource.link,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxs("span", { className: "text-left flex-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-sm block", children: resource.title }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground block", children: resource.description })
            ] }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 ml-auto" })
          ]
        },
        index
      );
    }) })
  ] });
}

export { HelpCenter };
//# sourceMappingURL=help-center.mjs.map
//# sourceMappingURL=help-center.mjs.map