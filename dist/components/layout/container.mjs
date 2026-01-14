import * as React from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsx } from 'react/jsx-runtime';

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
var containerVariants = cva(
  "mx-auto px-4 sm:px-6 lg:px-8",
  {
    variants: {
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
        full: "max-w-full",
        screen: "max-w-screen-xl",
        none: ""
      },
      padding: {
        none: "px-0",
        sm: "px-2 sm:px-4",
        md: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12",
        xl: "px-8 sm:px-12 lg:px-16"
      },
      center: {
        true: "flex items-center justify-center",
        false: ""
      }
    },
    defaultVariants: {
      size: "7xl",
      padding: "md",
      center: false
    }
  }
);
var Container = React.forwardRef(
  ({
    className,
    size = "7xl",
    padding = "md",
    center = false,
    fullHeight = false,
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          containerVariants({ size, padding, center }),
          fullHeight && "min-h-screen",
          verticalPadding && "py-4 sm:py-6 lg:py-8",
          className
        ),
        ...props
      }
    );
  }
);
Container.displayName = "Container";
var ContainerFluid = React.forwardRef(
  ({
    className,
    padding = "md",
    verticalPadding = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "w-full",
          padding === "none" && "px-0",
          padding === "sm" && "px-2 sm:px-4",
          padding === "md" && "px-4 sm:px-6 lg:px-8",
          padding === "lg" && "px-6 sm:px-8 lg:px-12",
          padding === "xl" && "px-8 sm:px-12 lg:px-16",
          verticalPadding && "py-4 sm:py-6 lg:py-8",
          className
        ),
        ...props
      }
    );
  }
);
ContainerFluid.displayName = "ContainerFluid";
var spacingClasses = {
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
  "2xl": "py-24"
};
var ContainerSection = React.forwardRef(
  ({
    className,
    spacing = "lg",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "section",
      {
        ref,
        className: cn(
          "w-full",
          spacingClasses[spacing],
          className
        ),
        children: /* @__PURE__ */ jsx(Container, { ...props })
      }
    );
  }
);
ContainerSection.displayName = "ContainerSection";

export { Container, ContainerFluid, ContainerSection };
//# sourceMappingURL=container.mjs.map
//# sourceMappingURL=container.mjs.map