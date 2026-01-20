import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { scrollPosition };
}

export { useScrollPosition };
//# sourceMappingURL=useScrollPosition.mjs.map
//# sourceMappingURL=useScrollPosition.mjs.map