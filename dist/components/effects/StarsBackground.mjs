"use client"
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function StarsBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const starsCount = 150;
    const newStars = Array.from({ length: starsCount }, (_, i) => {
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      const randomSize = Math.random() * 2 + 0.5;
      const randomDelay = Math.random() * 3;
      const randomOpacity = 0.6 + Math.random() * 0.4;
      return {
        id: i,
        left: randomLeft,
        top: randomTop,
        size: randomSize,
        delay: randomDelay,
        opacity: randomOpacity
      };
    });
    setStars(newStars);
  }, [mounted]);
  if (!mounted) {
    return null;
  }
  if (resolvedTheme !== "dark") {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        style: { zIndex: 0 },
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: stars.map((star) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute rounded-full",
            style: {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              // Usa token dedicado de efeito para a cor das estrelas
              backgroundColor: "var(--effect-star-color)",
              boxShadow: `0 0 ${star.size * 2}px var(--effect-star-color)`,
              animation: "starTwinkle 3s ease-in-out infinite",
              animationDelay: `${star.delay}s`
            }
          },
          star.id
        )) })
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        /* Anima\xE7\xE3o de brilho das estrelas */
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      ` })
  ] });
}
export {
  StarsBackground
};
//# sourceMappingURL=StarsBackground.mjs.map