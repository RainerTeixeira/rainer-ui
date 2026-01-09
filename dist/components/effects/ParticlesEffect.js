"use client"
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ParticlesEffect_exports = {};
__export(ParticlesEffect_exports, {
  ParticlesEffect: () => ParticlesEffect
});
module.exports = __toCommonJS(ParticlesEffect_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_utils = require("../../lib/utils");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 z-0",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: `absolute ${selectedPositions.particle1} w-1 h-1 rounded-full animate-pulse opacity-40 bg-[var(--color-text-neon-cyan)]`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: `absolute ${selectedPositions.particle2} w-0.5 h-0.5 rounded-full animate-pulse opacity-30 bg-[var(--color-text-neon-purple)]`,
            style: {
              animationDelay: import_utils.ANIMATION_DELAYS.short
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: `absolute ${selectedPositions.particle3} w-0.5 h-0.5 rounded-full animate-pulse opacity-35 bg-[var(--color-text-neon-pink)]`,
            style: {
              animationDelay: import_utils.ANIMATION_DELAYS.long
            }
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ParticlesEffect
});
//# sourceMappingURL=ParticlesEffect.js.map