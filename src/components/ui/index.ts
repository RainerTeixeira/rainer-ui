/**
 * Componentes UI - Componentes de Interface Básicos
 * 
 * Componentes fundamentais e reutilizáveis de interface:
 * - Avatar: Avatares com iniciais e imagens
 * - Button: Botões de ação
 * - Slider: Controles deslizantes
 * - Switch: Interruptores (alternadores)
 * - Toggle: Alternadores (botões de alternância)
 * - IconButton: Botão apenas com ícone
 * - LinkButton: Botão com estilo de link
 * - FAB: Botão de ação flutuante
 * - SegmentedControl: Controle segmentado
 * 
 * @module @rainersoft/ui/ui
 * @category Componentes UI
 */

// ============================================================================
// COMPONENTES UI BÁSICOS
// ============================================================================

// Avatar
export { Avatar, AvatarImage, AvatarFallback, type AvatarProps } from './avatar';

// Botões e Ações
export * from './button';
export * from './slider';
export * from './switch';
export * from './toggle';
export * from './icon-button';
export * from './link-button';
export * from './fab';
export * from './segmented-control';

// Estados de Carregamento
export { InlineLoader } from './InlineLoader';

// Utilitários
export { ThemeToggle } from '../utilities/ThemeToggle';
