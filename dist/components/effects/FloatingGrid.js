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
var FloatingGrid_exports = {};
__export(FloatingGrid_exports, {
  FloatingGrid: () => FloatingGrid,
  default: () => FloatingGrid_default
});
module.exports = __toCommonJS(FloatingGrid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_design_tokens = require("@rainersoft/design-tokens");
var import_color_utils = require("../../lib/color-utils");
var import_next_themes = require("next-themes");
var import_react = require("react");
function FloatingGrid({
  variant = "default",
  intensity = 0.5
} = {}) {
  const canvasRef = (0, import_react.useRef)(null);
  const { theme } = (0, import_next_themes.useTheme)();
  const [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  (0, import_react.useEffect)(() => {
    if (!mounted || theme !== "dark") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const gridConfig = {
      default: { spacing: 100, lineWidth: 0.5 },
      dense: { spacing: 60, lineWidth: 0.3 },
      sparse: { spacing: 150, lineWidth: 0.5 }
    };
    const config = gridConfig[variant];
    let animationFrame;
    let time = 0;
    const animate = () => {
      time += 0.01;
      const pulseIntensity = intensity * (0.8 + Math.sin(time) * 0.2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cyan400 = import_design_tokens.tokens?.primitives?.color?.blue?.[400] || "#60a5fa";
      const strokeColor = (0, import_color_utils.hexToRGBA)(cyan400, pulseIntensity * 1.2);
      const fillColor = (0, import_color_utils.hexToRGBA)(cyan400, pulseIntensity * 0.6);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = config.lineWidth;
      for (let x = 0; x < canvas.width; x += config.spacing) {
        const offsetX = Math.sin(time + x * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += config.spacing) {
        const offsetY = Math.cos(time + y * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
        ctx.stroke();
      }
      ctx.fillStyle = fillColor;
      for (let x = 0; x < canvas.width; x += config.spacing) {
        for (let y = 0; y < canvas.height; y += config.spacing) {
          const size = 1 + Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [mounted, theme, variant, intensity]);
  if (!mounted || theme !== "dark") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 pointer-events-none opacity-30",
      style: { mixBlendMode: "screen" }
    }
  );
}
var FloatingGrid_default = FloatingGrid;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FloatingGrid
});
//# sourceMappingURL=FloatingGrid.js.map