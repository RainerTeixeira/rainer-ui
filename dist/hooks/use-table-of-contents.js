'use strict';

var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function useTableOfContents({
  containerRef,
  headings = ["h2", "h3"],
  options = {}
}) {
  const {
    offset = 100,
    smoothScroll = true,
    activeOnScroll = true,
    nested = true
  } = options;
  const [items, setItems] = React__default.default.useState([]);
  const [activeId, setActiveId] = React__default.default.useState(null);
  const generateTOC = React__default.default.useCallback(() => {
    const container = containerRef?.current;
    if (!container) return [];
    const headingElements = container.querySelectorAll(headings.join(", "));
    const tocItems = [];
    headingElements.forEach((element, index) => {
      const text = element.textContent?.trim() || "";
      const level = parseInt(element.tagName.substring(1));
      if (!element.id) {
        element.id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim() || `heading-${index}`;
      }
      tocItems.push({
        id: element.id,
        text,
        level,
        element,
        index
      });
    });
    return tocItems;
  }, [containerRef, headings]);
  React__default.default.useEffect(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);
  const scrollToItem = React__default.default.useCallback((itemId) => {
    const element = document.getElementById(itemId);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    if (smoothScroll) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.scrollTo(0, offsetPosition);
    }
    setActiveId(itemId);
  }, [offset, smoothScroll]);
  React__default.default.useEffect(() => {
    if (!activeOnScroll || items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 100}px 0px`,
        threshold: 0
      }
    );
    items.forEach((item) => {
      if (item.element) {
        observer.observe(item.element);
      }
    });
    return () => {
      items.forEach((item) => {
        if (item.element) {
          observer.unobserve(item.element);
        }
      });
    };
  }, [activeOnScroll, items, offset]);
  const nestedItems = React__default.default.useMemo(() => {
    if (!nested) return items;
    const result = [];
    const stack = [];
    items.forEach((item) => {
      const tocItem = { ...item, children: [] };
      while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(tocItem);
      } else {
        stack[stack.length - 1].children.push(tocItem);
      }
      stack.push(tocItem);
    });
    return result;
  }, [items, nested]);
  const renderItem = React__default.default.useCallback((item, depth = 0) => {
    const isActive = item.id === activeId;
    const hasChildren = "children" in item && item.children && item.children.length > 0;
    return {
      ...item,
      isActive,
      depth,
      hasChildren,
      scrollTo: () => scrollToItem(item.id)
    };
  }, [activeId, scrollToItem]);
  const renderItems = React__default.default.useCallback(() => {
    const flatItems = [];
    const flatten = (items2, depth = 0) => {
      items2.forEach((item) => {
        flatItems.push(renderItem(item, depth));
        if (item.children && item.children.length > 0) {
          flatten(item.children, depth + 1);
        }
      });
    };
    flatten(nestedItems);
    return flatItems;
  }, [nestedItems, renderItem]);
  const stats = React__default.default.useMemo(() => {
    const levelCounts = {};
    items.forEach((item) => {
      levelCounts[item.level] = (levelCounts[item.level] || 0) + 1;
    });
    return {
      totalItems: items.length,
      levels: Object.keys(levelCounts).map(Number).sort(),
      levelCounts,
      hasActive: !!activeId,
      activeIndex: items.findIndex((item) => item.id === activeId)
    };
  }, [items, activeId]);
  const refresh = React__default.default.useCallback(() => {
    const tocItems = generateTOC();
    setItems(tocItems);
  }, [generateTOC]);
  const reset = React__default.default.useCallback(() => {
    setItems([]);
    setActiveId(null);
  }, []);
  return {
    // Dados do TOC
    items,
    nestedItems,
    renderItems: renderItems(),
    // Estado
    activeId,
    hasItems: items.length > 0,
    // Funções de controle
    scrollToItem,
    refresh,
    reset,
    // Estatísticas
    stats,
    // Utilitários
    generateTOC,
    renderItem
  };
}

exports.useTableOfContents = useTableOfContents;
//# sourceMappingURL=use-table-of-contents.js.map
//# sourceMappingURL=use-table-of-contents.js.map