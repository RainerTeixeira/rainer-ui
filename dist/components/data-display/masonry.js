"use client"
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var masonry_exports = {};
__export(masonry_exports, {
  Masonry: () => Masonry,
  MasonryItem: () => MasonryItem
});
module.exports = __toCommonJS(masonry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_utils = require("../../lib/utils");
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("relative", className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)("overflow-hidden", className),
        ...props,
        children
      }
    );
  }
);
MasonryItem.displayName = "MasonryItem";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Masonry,
  MasonryItem
});
//# sourceMappingURL=masonry.js.map