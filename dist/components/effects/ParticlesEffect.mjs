"use client"
import { jsx, jsxs } from "react/jsx-runtime";
import { ANIMATION_DELAYS } from "../../lib/utils";
const PARTICLE_POSITIONS = {
  default: {
    particle1: "top-20 left-1/4",
    particle2: "top-40 right-1/3",
    particle3: "bottom-40 left-1/2"
  },
  alt1: {
    particle1: "top-24 left-1/5",
    particle2: "top-80 right-1/5",
    particle3: "bottom-80 left-1/3"
  },
  alt2: {
    particle1: "top-32 left-1/3",
    particle2: "top-60 right-1/4",
    particle3: "bottom-60 left-1/5"
  }
};
function ParticlesEffect({
  variant = "default"
} = {}) {
  const selectedPositions = PARTICLE_POSITIONS[variant];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 z-0",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle1} w-1 h-1 rounded-full animate-pulse opacity-40 bg-[var(--color-text-neon-cyan)]`
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle2} w-0.5 h-0.5 rounded-full animate-pulse opacity-30 bg-[var(--color-text-neon-purple)]`,
            style: {
              animationDelay: ANIMATION_DELAYS.short
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute ${selectedPositions.particle3} w-0.5 h-0.5 rounded-full animate-pulse opacity-35 bg-[var(--color-text-neon-pink)]`,
            style: {
              animationDelay: ANIMATION_DELAYS.long
            }
          }
        )
      ]
    }
  );
}
export {
  ParticlesEffect
};
//# sourceMappingURL=ParticlesEffect.mjs.map