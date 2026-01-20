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

// ============================================================================
// React
// ============================================================================

'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

// ============================================================================
// UI Components
// ============================================================================

import { Button } from '../ui/button';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useScrollPosition } from '../../hooks/useScrollPosition';

// ============================================================================
// Constants
// ============================================================================

/**
 * Scroll mínimo (em pixels) para exibir o botão
 */
const SCROLL_THRESHOLD_PX = 300;

// ============================================================================
// Main Component
// ============================================================================

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
export function BackToTopButton() {
  // ============================================================================
  // Hooks
  // ============================================================================

  const { scrollToTop, reducedMotion } = useSmoothScroll();
  const { scrollPosition } = useScrollPosition();

  // ============================================================================
  // Calculated Values
  // ============================================================================

  const isButtonVisible = scrollPosition.y > SCROLL_THRESHOLD_PX;

  // ============================================================================
  // Handlers
  // ============================================================================

  const handleClick = () => {
    scrollToTop();
  };

  // ============================================================================
  // Render Guard
  // ============================================================================

  if (!isButtonVisible) {
    return null;
  }

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg"
      aria-label={
        reducedMotion
          ? 'Ir para o topo da página'
          : 'Rolar suavemente para o topo da página'
      }
      title="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </Button>
  );
}

/**
 * Alias BackToTop para compatibilidade com imports existentes
 */
export function BackToTop() {
  return <BackToTopButton />;
}
