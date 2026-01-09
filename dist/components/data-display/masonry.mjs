"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
function useMasonryLayout(containerRef, columns, gap) {
  const [positions, setPositions] = React.useState([]);
  React.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const columnWidth = (containerWidth - gap * (columns - 1)) / columns;
    const columnHeights = new Array(columns).fill(0);
    const newPositions = [];
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const height = child.offsetHeight;
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      const top = columnHeights[shortestColumnIndex];
      const left = shortestColumnIndex * (columnWidth + gap);
      newPositions.push({ top, left });
      columnHeights[shortestColumnIndex] += height + gap;
    }
    setPositions(newPositions);
  }, [columns, gap]);
  return positions;
}
const Masonry = React.forwardRef(
  ({
    className,
    columns = { sm: 1, md: 2, lg: 3, xl: 4 },
    gap = 16,
    children,
    ...props
  }, ref) => {
    const innerRef = React.useRef(null);
    const [resolvedColumns, setResolvedColumns] = React.useState(4);
    React.useEffect(() => {
      const handleResize = () => {
        if (typeof columns === "number") {
          setResolvedColumns(columns);
        } else {
          const width = window.innerWidth;
          if (width >= 1280 && columns.xl) setResolvedColumns(columns.xl);
          else if (width >= 1024 && columns.lg) setResolvedColumns(columns.lg);
          else if (width >= 768 && columns.md) setResolvedColumns(columns.md);
          else if (columns.sm) setResolvedColumns(columns.sm);
          else setResolvedColumns(1);
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [columns]);
    const gapValue = typeof gap === "number" ? gap : parseInt(gap) || 16;
    const positions = useMasonryLayout(innerRef, resolvedColumns, gapValue);
    const childrenWithPositions = React.Children.toArray(children).map((child, index) => {
      if (!React.isValidElement(child)) return child;
      const position = positions[index];
      if (!position) return child;
      const containerWidth = innerRef.current?.offsetWidth || 0;
      const columnWidth = (containerWidth - gapValue * (resolvedColumns - 1)) / resolvedColumns;
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          position: "absolute",
          top: position.top,
          left: position.left,
          width: columnWidth,
          transition: "all 0.3s ease-in-out"
        }
      });
    });
    const containerHeight = positions.reduce((max, pos, index) => {
      const child = innerRef.current?.children[index];
      if (!child) return max;
      return Math.max(max, pos.top + child.offsetHeight);
    }, 0);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("relative", className),
        ...props,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: innerRef,
            className: "relative w-full",
            style: { height: containerHeight },
            children: childrenWithPositions
          }
        )
      }
    );
  }
);
Masonry.displayName = "Masonry";
const MasonryItem = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("overflow-hidden", className),
        ...props,
        children
      }
    );
  }
);
MasonryItem.displayName = "MasonryItem";
export {
  Masonry,
  MasonryItem
};
//# sourceMappingURL=masonry.mjs.map