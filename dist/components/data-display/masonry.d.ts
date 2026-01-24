/**
 * Componente Masonry
 *
 * Layout em grade com colunas de alturas variáveis.
 * Perfeito para galerias de imagens, cards de diferentes tamanhos
 * ou conteúdo com altura dinâmica.
 *
 * @module @rainersoft/ui/components/data-display/masonry
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
/**
 * Interface de props do Masonry
 */
export interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número de colunas (ou responsivo) */
    columns?: number | {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    /** Espaçamento entre itens */
    gap?: number | string;
    /** Largura mínima de cada coluna */
    minWidth?: number;
    /** Children devem ser elementos React */
    children: React.ReactNode;
}
/**
 * Componente Masonry
 *
 * Cria um layout em grade onde os itens são posicionados
 * otimamente para minimizar espaços vazios.
 *
 * @example
 * ```tsx
 * // Masonry simples
 * <Masonry columns={3} gap={16}>
 *   {items.map(item => (
 *     <div key={item.id}>
 *       <img src={item.image} alt="" />
 *       <p>{item.title}</p>
 *     </div>
 *   ))}
 * </Masonry>
 *
 * // Masonry responsivo
 * <Masonry columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={20}>
 *   {children}
 * </Masonry>
 * ```
 */
export declare const Masonry: React.ForwardRefExoticComponent<MasonryProps & React.RefAttributes<HTMLDivElement>>;
/**
 * MasonryItem - Item individual para o Masonry
 */
export interface MasonryItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Conteúdo do item */
    children: React.ReactNode;
}
export declare const MasonryItem: React.ForwardRefExoticComponent<MasonryItemProps & React.RefAttributes<HTMLDivElement>>;
