import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Panel
 */
declare const panelVariants: (props?: {
    variant?: "default" | "gradient" | "ghost" | "neon" | "glass" | "elevated" | "outlined";
    size?: "sm" | "md" | "lg" | "xl";
    padding?: "sm" | "md" | "lg" | "xl" | "none";
    radius?: "sm" | "md" | "lg" | "xl" | "none" | "full";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Panel
 */
interface PanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof panelVariants> {
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
declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelHeader - Cabeçalho do painel
 */
interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Se tem linha divisória */
    divider?: boolean;
}
declare const PanelHeader: React.ForwardRefExoticComponent<PanelHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelTitle - Título do painel
 */
interface PanelTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
declare const PanelTitle: React.ForwardRefExoticComponent<PanelTitleProps & React.RefAttributes<HTMLHeadingElement>>;
/**
 * PanelDescription - Descrição do painel
 */
interface PanelDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
declare const PanelDescription: React.ForwardRefExoticComponent<PanelDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
/**
 * PanelContent - Conteúdo do painel
 */
interface PanelContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const PanelContent: React.ForwardRefExoticComponent<PanelContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelFooter - Rodapé do painel
 */
interface PanelFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Se tem linha divisória */
    divider?: boolean;
}
declare const PanelFooter: React.ForwardRefExoticComponent<PanelFooterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PanelGroup - Grupo de painéis
 */
interface PanelGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Espaçamento entre painéis */
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
}
declare const PanelGroup: React.ForwardRefExoticComponent<PanelGroupProps & React.RefAttributes<HTMLDivElement>>;

export { Panel, PanelContent, type PanelContentProps, PanelDescription, type PanelDescriptionProps, PanelFooter, type PanelFooterProps, PanelGroup, type PanelGroupProps, PanelHeader, type PanelHeaderProps, type PanelProps, PanelTitle, type PanelTitleProps };
