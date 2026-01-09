"use client"
import { jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
const SCROLL_THRESHOLD_PX = 300;
function BackToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { scrollToTop, reducedMotion } = useSmoothScroll();
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsButtonVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);
  if (!isButtonVisible) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick: scrollToTop,
      className: "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg",
      "aria-label": reducedMotion ? "Ir para o topo da p\xE1gina" : "Rolar suavemente para o topo da p\xE1gina",
      title: "Voltar ao topo",
      children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5", "aria-hidden": "true" })
    }
  );
}
function BackToTop() {
  return /* @__PURE__ */ jsx(BackToTopButton, {});
}
export {
  BackToTop,
  BackToTopButton
};
//# sourceMappingURL=BackToTop.mjs.map