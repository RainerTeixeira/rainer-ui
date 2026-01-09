"use client"
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const gridVariants = cva(
  "grid",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12",
        auto: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      sm: {
        1: "sm:grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-4",
        5: "sm:grid-cols-5",
        6: "sm:grid-cols-6",
        7: "sm:grid-cols-7",
        8: "sm:grid-cols-8",
        9: "sm:grid-cols-9",
        10: "sm:grid-cols-10",
        11: "sm:grid-cols-11",
        12: "sm:grid-cols-12",
        auto: "sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      md: {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6",
        7: "md:grid-cols-7",
        8: "md:grid-cols-8",
        9: "md:grid-cols-9",
        10: "md:grid-cols-10",
        11: "md:grid-cols-11",
        12: "md:grid-cols-12",
        auto: "md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      lg: {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6",
        7: "lg:grid-cols-7",
        8: "lg:grid-cols-8",
        9: "lg:grid-cols-9",
        10: "lg:grid-cols-10",
        11: "lg:grid-cols-11",
        12: "lg:grid-cols-12",
        auto: "lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      xl: {
        1: "xl:grid-cols-1",
        2: "xl:grid-cols-2",
        3: "xl:grid-cols-3",
        4: "xl:grid-cols-4",
        5: "xl:grid-cols-5",
        6: "xl:grid-cols-6",
        7: "xl:grid-cols-7",
        8: "xl:grid-cols-8",
        9: "xl:grid-cols-9",
        10: "xl:grid-cols-10",
        11: "xl:grid-cols-11",
        12: "xl:grid-cols-12",
        auto: "xl:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        "auto-fit": "xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        "auto-fill": "xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      },
      gap: {
        0: "gap-0",
        1: "gap-1",
        2: "gap-2",
        3: "gap-3",
        4: "gap-4",
        5: "gap-5",
        6: "gap-6",
        8: "gap-8",
        10: "gap-10",
        12: "gap-12",
        px: "gap-px"
      },
      gapX: {
        0: "gap-x-0",
        1: "gap-x-1",
        2: "gap-x-2",
        3: "gap-x-3",
        4: "gap-x-4",
        5: "gap-x-5",
        6: "gap-x-6",
        8: "gap-x-8",
        10: "gap-x-10",
        12: "gap-x-12",
        px: "gap-x-px"
      },
      gapY: {
        0: "gap-y-0",
        1: "gap-y-1",
        2: "gap-y-2",
        3: "gap-y-3",
        4: "gap-y-4",
        5: "gap-y-5",
        6: "gap-y-6",
        8: "gap-y-8",
        10: "gap-y-10",
        12: "gap-y-12",
        px: "gap-y-px"
      },
      align: {
        start: "items-start",
        end: "items-end",
        center: "items-center",
        stretch: "items-stretch"
      },
      justify: {
        start: "justify-start",
        end: "justify-end",
        center: "justify-center",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      }
    }
  }
);
const Grid = React.forwardRef(
  ({
    className,
    cols,
    sm,
    md,
    lg,
    xl,
    gap,
    gapX,
    gapY,
    align,
    justify,
    minColWidth,
    templateCols,
    templateRows,
    areas,
    style,
    ...props
  }, ref) => {
    const gridStyle = React.useMemo(() => {
      const customStyle = { ...style };
      if (templateCols) {
        customStyle.gridTemplateColumns = templateCols;
      }
      if (templateRows) {
        customStyle.gridTemplateRows = templateRows;
      }
      if (areas) {
        customStyle.gridTemplateAreas = areas;
      }
      if ((cols === "auto-fit" || cols === "auto-fill") && minColWidth) {
        customStyle.gridTemplateColumns = `repeat(${cols}, minmax(${minColWidth}, 1fr))`;
      }
      return customStyle;
    }, [style, templateCols, templateRows, areas, cols, minColWidth]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          gridVariants({
            cols,
            sm,
            md,
            lg,
            xl,
            gap,
            gapX,
            gapY,
            align,
            justify
          }),
          className
        ),
        style: gridStyle,
        ...props
      }
    );
  }
);
Grid.displayName = "Grid";
const GridItem = React.forwardRef(
  ({
    className,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    area,
    style,
    ...props
  }, ref) => {
    const gridStyle = React.useMemo(() => {
      const customStyle = { ...style };
      if (colStart !== void 0) {
        customStyle.gridColumnStart = colStart;
      }
      if (colEnd !== void 0) {
        customStyle.gridColumnEnd = colEnd;
      }
      if (rowStart !== void 0) {
        customStyle.gridRowStart = rowStart;
      }
      if (rowEnd !== void 0) {
        customStyle.gridRowEnd = rowEnd;
      }
      if (area) {
        customStyle.gridArea = area;
      }
      return customStyle;
    }, [style, colStart, colEnd, rowStart, rowEnd, area]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(className),
        style: gridStyle,
        ...props
      }
    );
  }
);
GridItem.displayName = "GridItem";
export {
  Grid,
  GridItem
};
//# sourceMappingURL=grid.mjs.map