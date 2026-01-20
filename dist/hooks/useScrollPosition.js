'use strict';

var react = require('react');

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = react.useState({ x: 0, y: 0 });
  react.useEffect(() => {
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

exports.useScrollPosition = useScrollPosition;
//# sourceMappingURL=useScrollPosition.js.map
//# sourceMappingURL=useScrollPosition.js.map