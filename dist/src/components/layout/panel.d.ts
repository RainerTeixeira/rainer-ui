/**
 * Componente Panel
 *
 * Container de conteúdo com bordas e sombra.
 * Ideal para cards, seções e agrupamentos.
 *
 * @module @rainersoft/ui/components/layout/panel
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Panel
 */
declare const panelVariants: (props?: {
    variant?: "default" | "ghost" | "neon" | "glass" | "elevated" | "outlined" | "gradient";
    size?: "sm" | "md" | "lg" | "xl";
    padding?: "sm" | "md" | "lg" | "xl" | "none";
    radius?: "sm" | "md" | "lg" | "xl" | "none" | "full";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Panel
 */
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof panelVariants> {
    /** Se tem efeito hover */
    hover?: boolean;
    /** Se é clicável */
    clickable?: boolean;
    /** Se está selecionado */
    selected?: boolean;
    /** Se está carregando */
    loading?: boolean;
}
/**
 * Componente Panel
 *
 * Container estilizado para conteúdo.
 *
 * @example
 * ```tsx
 * // Básico
 * <Panel>
 *   <h3>Título</h3>
 *   <p>Conteúdo do painel</p>
 * </Panel>
 *
 * // Com variantes
 * <Panel variant="elevated" size="lg">
 *   <h3>Título</h3>
 *   <p>Conteúdo do painel</p>
 * </Panel>
 *
 * // Clicável
 * <Panel
 *   clickable
 *   hover
 *   onClick={handleClick}
 *   className="cursor-pointer"
 * >
 *   <h3>Título</h3>
 *   <p>Conteúdo clicável</p>
 * </Panel>
 *
 * // Glass effect
 * <Panel variant="glass">
 *   <h3>Título</h3>
 *   <p>Conteúdo com glass effect</p>
 * </Panel>
 * ```
 */
export declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelHeader - Cabeçalho do painel
 */
export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Se tem linha divisória */
    divider?: boolean;
}
export declare const PanelHeader: React.ForwardRefExoticComponent<PanelHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelTitle - Título do painel
 */
export interface PanelTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
export declare const PanelTitle: React.ForwardRefExoticComponent<PanelTitleProps & React.RefAttributes<HTMLHeadingElement>>;
/**
 * PanelDescription - Descrição do painel
 */
export interface PanelDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
export declare const PanelDescription: React.ForwardRefExoticComponent<PanelDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
/**
 * PanelContent - Conteúdo do painel
 */
export interface PanelContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const PanelContent: React.ForwardRefExoticComponent<PanelContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelFooter - Rodapé do painel
 */
export interface PanelFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Se tem linha divisória */
    divider?: boolean;
}
export declare const PanelFooter: React.ForwardRefExoticComponent<PanelFooterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelGroup - Grupo de painéis
 */
export interface PanelGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Espaçamento entre painéis */
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
}
export declare const PanelGroup: React.ForwardRefExoticComponent<PanelGroupProps & React.RefAttributes<HTMLDivElement>>;
export {};
