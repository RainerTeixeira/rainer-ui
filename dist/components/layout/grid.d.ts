/**
 * Componente Grid
 *
 * Sistema de grid responsivo baseado em CSS Grid.
 * Suporta colunas, gaps e alinhamentos customizados.
 *
 * @module @rainersoft/ui/components/layout/grid
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Grid
 */
declare const gridVariants: (props?: {
    cols?: 2 | 1 | 3 | 6 | 8 | 4 | 5 | 7 | "auto" | 9 | 10 | 11 | 12 | "auto-fit" | "auto-fill";
    sm?: 2 | 1 | 3 | 6 | 8 | 4 | 5 | 7 | "auto" | 9 | 10 | 11 | 12 | "auto-fit" | "auto-fill";
    md?: 2 | 1 | 3 | 6 | 8 | 4 | 5 | 7 | "auto" | 9 | 10 | 11 | 12 | "auto-fit" | "auto-fill";
    lg?: 2 | 1 | 3 | 6 | 8 | 4 | 5 | 7 | "auto" | 9 | 10 | 11 | 12 | "auto-fit" | "auto-fill";
    xl?: 2 | 1 | 3 | 6 | 8 | 4 | 5 | 7 | "auto" | 9 | 10 | 11 | 12 | "auto-fit" | "auto-fill";
    gap?: 0 | 2 | 1 | 3 | 6 | 8 | 4 | 5 | 10 | 12 | "px";
    gapX?: 0 | 2 | 1 | 3 | 6 | 8 | 4 | 5 | 10 | 12 | "px";
    gapY?: 0 | 2 | 1 | 3 | 6 | 8 | 4 | 5 | 10 | 12 | "px";
    align?: "center" | "end" | "start" | "stretch";
    justify?: "center" | "end" | "start" | "between" | "around" | "evenly";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Grid
 */
export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
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
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
/**
 * GridItem - Item individual do Grid
 */
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
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
export declare const GridItem: React.ForwardRefExoticComponent<GridItemProps & React.RefAttributes<HTMLDivElement>>;
export {};
