import { cva } from 'class-variance-authority';
import '@rainersoft/design-tokens/formats/css-vars.css';
import tokens from '@rainersoft/design-tokens';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx } from 'react/jsx-runtime';

var tokensWithThemes = tokens;
tokensWithThemes.themes?.light ?? tokensWithThemes.lightTheme ?? tokens;
tokensWithThemes.themes?.dark ?? tokensWithThemes.darkTheme ?? tokens;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var layoutClassesSemantic = tokens.semantics?.layoutClasses ?? {};
layoutClassesSemantic.components ?? {};
layoutClassesSemantic.sections ?? {};
var zIndexSemantic = tokens.semantics?.layout?.zIndex ?? {};
var zIndexPrimitive = tokens.primitives?.zIndex ?? {};
({
  ...zIndexPrimitive,
  ...zIndexSemantic
});
tokens.primitives?.gradientDirections ?? {};
var motionClasses = tokens.semantics?.motionClasses ?? {};
({
  TRANSITION: {
    DEFAULT: motionClasses.transition?.default,
    FAST: motionClasses.transition?.fast,
    SLOW: motionClasses.transition?.slow,
    COLOR: motionClasses.transition?.color,
    TRANSFORM: motionClasses.transition?.transform,
    OPACITY: motionClasses.transition?.opacity
  }
});
var motionTokens = tokens.MOTION ?? tokens.motionTokens ?? tokens.primitives?.motion ?? {};
var motion = motionTokens;
var motionSemanticTokens = tokens.semantics?.motion ?? {};
var motionSemantic = motionSemanticTokens;
motion?.delay ?? {};
var ANIMATION_DURATIONS = motion?.duration ?? {};
var ANIMATION_EASINGS = motion?.easing ?? {};
var safeMotionDuration = ANIMATION_DURATIONS;
var safeMotionEasing = ANIMATION_EASINGS;
var defaultDuration = safeMotionDuration?.normal ?? safeMotionDuration?.default;
safeMotionDuration?.fast ?? defaultDuration;
safeMotionDuration?.slow ?? defaultDuration;
var easeInOut = safeMotionEasing?.easeInOut ?? safeMotionEasing?.default;
safeMotionEasing?.easeOut ?? easeInOut;
safeMotionEasing?.spring ?? easeInOut;
var motionSemanticTyped = motionSemantic;
({
  // Presets semânticos
  semantic: {
    transition: motionSemanticTyped.transition?.default,
    interaction: motionSemanticTyped.interaction?.hover,
    feedback: motionSemanticTyped.feedback?.success,
    navigation: motionSemanticTyped.navigation?.page
  }
});
var badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    /**
     * Variantes de estilo
     * Cada variante define aparência diferente do badge
     */
    variants: {
      variant: {
        /** Badge primário - cor primária com borda transparente */
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        /** Badge secundário - cor secundária */
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        /** Badge destrutivo - para status negativos/erros */
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        /** Badge outline - apenas borda, fundo transparente */
        outline: "text-foreground"
      }
    },
    /**
     * Variante padrão aplicada quando prop não é fornecida
     */
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

export { Badge, badgeVariants };
//# sourceMappingURL=badge.mjs.map
//# sourceMappingURL=badge.mjs.map