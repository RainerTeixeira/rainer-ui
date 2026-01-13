import 'clsx';
import 'tailwind-merge';
import { tokens } from '@rainersoft/design-tokens';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/lib/utils.ts
var SECTION_CLASSES = {
  /** Container padrão de página com largura máxima e padding responsivo */
  container: "w-full max-w-6xl mx-auto px-6 py-12"
};
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
function PageHeader({ title, description, children }) {
  return (
    /**
     * Container principal do header
     *
     * Utiliza SECTION_CLASSES.container para padding e layout responsivos
     * - relative z-10: fica acima de backgrounds e partículas
     */
    /* @__PURE__ */ jsx("div", { className: `${SECTION_CLASSES.container} relative z-10`, children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      children && /* @__PURE__ */ jsx("div", { className: "relative mb-8", children }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-cyan-200 dark:font-mono dark:tracking-wider", children: title }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-linear-to-r from-primary to-primary dark:from-cyan-400 dark:to-purple-400 mx-auto mb-6" }),
      description && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto dark:font-mono px-2", children: description })
    ] }) })
  );
}

export { PageHeader };
//# sourceMappingURL=PageHeader.mjs.map
//# sourceMappingURL=PageHeader.mjs.map