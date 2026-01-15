import * as React from 'react';

/**
 * Componente Timeline
 *
 * Linha do tempo para exibir eventos em ordem cronológica.
 * Suporta orientação vertical ou horizontal com customização
 * de cores, ícones e conteúdo.
 *
 * @module @rainersoft/ui/components/data-display/timeline
 * @author Rainer Teixeira
 * @version 1.0.0
 */

/**
 * Ícones padrão por tipo de evento
 */
declare const defaultIcons: {
    readonly completed: any;
    readonly pending: any;
    readonly error: any;
    readonly warning: any;
    readonly default: "div";
};
/**
 * Props do item da Timeline
 */
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Status do item */
    status?: 'default' | 'active' | 'completed' | 'pending' | 'error' | 'warning';
    /** Ícone customizado */
    icon?: React.ReactNode;
    /** Tipo para usar ícone padrão */
    iconType?: keyof typeof defaultIcons;
    /** Tamanho do ponto */
    dotSize?: 'sm' | 'md' | 'lg';
    /** Conteúdo do item */
    children: React.ReactNode;
    /** Data/hora do evento */
    date?: string;
    /** Título do evento */
    title?: string;
    /** Descrição do evento */
    description?: string;
}
/**
 * Componente TimelineItem
 *
 * Item individual da timeline com ponto, conteúdo e data.
 */
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Props da Timeline
 */
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Orientação da timeline */
    orientation?: 'vertical' | 'horizontal';
    /** Alinhamento dos itens */
    align?: 'left' | 'center' | 'right';
    /** Se deve mostrar a linha conectora */
    showConnector?: boolean;
    /** Itens da timeline */
    children: React.ReactNode;
}
/**
 * Componente Timeline
 *
 * Container para itens de timeline com linha conectora.
 *
 * @example
 * ```tsx
 * <Timeline>
 *   <TimelineItem
 *     status="completed"
 *     date="2024-01-01"
 *     title="Projeto Iniciado"
 *     description="Início do desenvolvimento"
 *   >
 *     <p>Conteúdo adicional</p>
 *   </TimelineItem>
 *   <TimelineItem
 *     status="active"
 *     iconType="pending"
 *     date="2024-01-15"
 *     title="Em Progresso"
 *   />
 * </Timeline>
 * ```
 */
declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
/**
 * TimelineSeparator - Separador visual entre grupos de itens
 */
interface TimelineSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Texto do separador */
    children?: React.ReactNode;
}
declare const TimelineSeparator: React.ForwardRefExoticComponent<TimelineSeparatorProps & React.RefAttributes<HTMLDivElement>>;

export { Timeline, TimelineItem, type TimelineItemProps, type TimelineProps, TimelineSeparator, type TimelineSeparatorProps };
