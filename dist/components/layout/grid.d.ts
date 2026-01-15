import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Grid
 */
declare const gridVariants: (props?: {
    cols?: 5 | 1 | 10 | 2 | 4 | 6 | 3 | 7 | "auto" | 8 | 9 | 12 | 11 | "auto-fit" | "auto-fill";
    sm?: 5 | 1 | 10 | 2 | 4 | 6 | 3 | 7 | "auto" | 8 | 9 | 12 | 11 | "auto-fit" | "auto-fill";
    md?: 5 | 1 | 10 | 2 | 4 | 6 | 3 | 7 | "auto" | 8 | 9 | 12 | 11 | "auto-fit" | "auto-fill";
    lg?: 5 | 1 | 10 | 2 | 4 | 6 | 3 | 7 | "auto" | 8 | 9 | 12 | 11 | "auto-fit" | "auto-fill";
    xl?: 5 | 1 | 10 | 2 | 4 | 6 | 3 | 7 | "auto" | 8 | 9 | 12 | 11 | "auto-fit" | "auto-fill";
    gap?: 0 | 5 | 1 | 10 | 2 | 4 | 6 | 3 | 8 | 12 | "px";
    gapX?: 0 | 5 | 1 | 10 | 2 | 4 | 6 | 3 | 8 | 12 | "px";
    gapY?: 0 | 5 | 1 | 10 | 2 | 4 | 6 | 3 | 8 | 12 | "px";
    align?: "center" | "end" | "start" | "stretch";
    justify?: "center" | "end" | "start" | "between" | "around" | "evenly";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Grid
 */
interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
    /** Largura mínima das colunas (para auto-fit/fill) */
    minColWidth?: string;
    /** Template de colunas customizado */
    templateCols?: string;
    /** Template de linhas customizado */
    templateRows?: string;
    /** Áreas do grid */
    areas?: string;
}
/**
 * Componente Grid
 *
 * Sistema de grid responsivo.
 *
 * @example
 * ```tsx
 * // Grid básico
 * <Grid cols={3} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // Grid responsivo
 * <Grid cols={1} sm={2} lg={3} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // Grid auto-fit
 * <Grid cols="auto-fit" gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // Grid customizado
 * <Grid
 *   templateCols="200px 1fr 100px"
 *   gap={4}
 *   align="center"
 * >
 *   <div>Menu</div>
 *   <div>Conteúdo</div>
 *   <div>Sidebar</div>
 * </Grid>
 * ```
 */
declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
/**
 * GridItem - Item individual do Grid
 */
interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Coluna inicial */
    colStart?: number | 'auto';
    /** Coluna final */
    colEnd?: number | 'auto';
    /** Linha inicial */
    rowStart?: number | 'auto';
    /** Linha final */
    rowEnd?: number | 'auto';
    /** Área do grid */
    area?: string;
}
declare const GridItem: React.ForwardRefExoticComponent<GridItemProps & React.RefAttributes<HTMLDivElement>>;

export { Grid, GridItem, type GridItemProps, type GridProps };
