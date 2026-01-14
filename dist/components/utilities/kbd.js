'use strict';

var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var designTokens = require('@rainersoft/design-tokens');
var jsxRuntime = require('react/jsx-runtime');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var motion = designTokens.tokens?.primitives?.motion || {
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
var motionSemantic = designTokens.tokens.semantics.motion || {
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
var kbdVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded border font-mono text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground shadow-sm",
        outline: "border-border bg-transparent text-foreground",
        filled: "border-border bg-muted text-foreground",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        neon: "neon-border bg-background text-primary dark:shadow-glow-cyan"
      },
      size: {
        xs: "h-5 px-1.5 text-[10px]",
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-xs",
        lg: "h-8 px-3 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
);
var Kbd = React__namespace.forwardRef(
  ({
    className,
    variant = "default",
    size = "sm",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "kbd",
      {
        ref,
        className: cn(kbdVariants({ variant, size }), className),
        ...props,
        children
      }
    );
  }
);
Kbd.displayName = "Kbd";
var KbdCombo = React__namespace.forwardRef(
  ({
    className,
    keys,
    separator = "+",
    size = "sm",
    variant = "default",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("flex items-center gap-1", className),
        ...props,
        children: keys.map((key, index) => /* @__PURE__ */ jsxRuntime.jsxs(React__namespace.Fragment, { children: [
          index > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground text-xs font-normal", children: separator }),
          /* @__PURE__ */ jsxRuntime.jsx(Kbd, { size, variant, children: key })
        ] }, index))
      }
    );
  }
);
KbdCombo.displayName = "KbdCombo";
var KeyboardShortcuts = {
  // Windows/Linux
  CtrlC: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "C"] }),
  CtrlV: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "V"] }),
  CtrlX: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "X"] }),
  CtrlZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "Z"] }),
  CtrlY: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "Y"] }),
  CtrlA: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "A"] }),
  CtrlS: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "S"] }),
  CtrlF: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "F"] }),
  CtrlP: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Ctrl", "P"] }),
  Delete: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Delete" }),
  Enter: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Enter" }),
  Esc: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Esc" }),
  Space: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Space" }),
  Tab: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "Tab" }),
  ShiftTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Shift", "Tab"] }),
  AltTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["Alt", "Tab"] }),
  // macOS
  CmdC: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "C"] }),
  CmdV: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "V"] }),
  CmdX: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "X"] }),
  CmdZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Z"] }),
  CmdShiftZ: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Shift", "Z"] }),
  CmdA: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "A"] }),
  CmdS: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "S"] }),
  CmdF: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "F"] }),
  CmdP: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "P"] }),
  CmdSpace: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2318", "Space"] }),
  OptionTab: () => /* @__PURE__ */ jsxRuntime.jsx(KbdCombo, { keys: ["\u2325", "Tab"] }),
  // Setas
  ArrowUp: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2191" }),
  ArrowDown: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2193" }),
  ArrowLeft: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2190" }),
  ArrowRight: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "\u2192" }),
  // Função
  F1: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F1" }),
  F2: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F2" }),
  F3: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F3" }),
  F4: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F4" }),
  F5: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F5" }),
  F6: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F6" }),
  F7: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F7" }),
  F8: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F8" }),
  F9: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F9" }),
  F10: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F10" }),
  F11: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F11" }),
  F12: () => /* @__PURE__ */ jsxRuntime.jsx(Kbd, { children: "F12" })
};

exports.Kbd = Kbd;
exports.KbdCombo = KbdCombo;
exports.KeyboardShortcuts = KeyboardShortcuts;
//# sourceMappingURL=kbd.js.map
//# sourceMappingURL=kbd.js.map