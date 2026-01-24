/**
 * Back To Top Button Component
 *
 * Botão flutuante fixo para retornar ao topo da página. Aparece após scroll
 * (> 300px), respeita preferências de movimento do usuário e integra com
 * scrollToTop utility.
 *
 * @module components/navigation/back-to-top
 * @fileoverview Botão de retorno ao topo acessível e responsivo
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Usado automaticamente no layout
 * <BackToTop />
 * ```
 *
 * Características:
 * - Visível apenas após scroll > 300px
 * - Posição fixa (bottom-right)
 * - Scroll suave ou instantâneo (prefers-reduced-motion)
 * - Totalmente acessível (keyboard + screen readers)
 * - ARIA label dinâmico
 * - Animações suaves
 * - Integração com scrollToTop utility
 */
/**
 * Componente principal do Back To Top Button
 *
 * Botão flutuante que permite retorno rápido ao topo.
 * Visibilidade controlada por scroll position.
 *
 * @returns Botão flutuante ou null se não visível
 *
 * @example
 * ```tsx
 * // Em qualquer página
 * <BackToTopButton />
 * ```
 */
export declare function BackToTopButton(): import("react/jsx-runtime").JSX.Element;
/**
 * Alias BackToTop para compatibilidade com imports existentes
 */
export declare function BackToTop(): import("react/jsx-runtime").JSX.Element;
