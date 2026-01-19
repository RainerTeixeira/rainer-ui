'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nextThemes = require('next-themes');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function FloatingGrid({
  variant = "default",
  intensity = 0.5
} = {}) {
  const canvasRef = react.useRef(null);
  const { theme } = nextThemes.useTheme();
  const [mounted, setMounted] = react.useState(false);
  react.useEffect(() => {
    setMounted(true);
  }, []);
  react.useEffect(() => {
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
      const strokeColor = `rgba(34, 211, 238, ${pulseIntensity * 1.2})`;
      const fillColor = `rgba(34, 211, 238, ${pulseIntensity * 0.6})`;
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 pointer-events-none opacity-30",
      style: { mixBlendMode: "screen" }
    }
  );
}
var FloatingGrid_default = FloatingGrid;

exports.FloatingGrid = FloatingGrid;
exports.default = FloatingGrid_default;
//# sourceMappingURL=FloatingGrid.js.map
//# sourceMappingURL=FloatingGrid.js.map