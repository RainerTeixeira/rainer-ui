import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var COMPONENT_CLASSES = {
  /** Container padrão com largura máxima e padding responsivo */
  container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  /** Espaçamento vertical responsivo */
  spacing: "space-y-4 sm:space-y-6 md:space-y-8",
  /** Classes base para cards */
  card: {
    base: "rounded-lg border bg-card text-card-foreground shadow-sm",
    hover: "transition-all duration-200 hover:shadow-lg"
  },
  /** Classes base para buttons */
  button: {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  },
  /** Classes base para inputs */
  input: {
    base: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  }
};
var SECTION_CLASSES = {
  /** Container padrão de página com largura máxima e padding responsivo */
  container: "w-full max-w-6xl mx-auto px-6 py-12"
};
var motion = tokens.MOTION || {
  duration: {
    instant: "0ms",
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
    slowest: "800ms"
  },
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  delay: {
    none: "0ms",
    short: "50ms",
    medium: "100ms",
    long: "200ms"
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
var ANIMATION_DELAYS = motion.delay;
var ANIMATION_DURATIONS = motion.duration;
var ANIMATION_EASINGS = motion.easing;
var motionPresets = {
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
};

export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, SECTION_CLASSES, cn, motion, motionPresets, motionSemantic };
//# sourceMappingURL=utils.mjs.map
//# sourceMappingURL=utils.mjs.map