/**
 * Utilities Components
 * 
 * Componentes utilitários e helpers para aplicações:
 * - BackToTop: Botão flutuante para retorno ao topo
 * - CookieBanner: Banner de consentimento de cookies LGPD
 * - ErrorBoundary: Tratamento de erros global
 * - InstallPrompt: Prompt de instalação PWA
 * - LoadingScreen: Tela de carregamento animada
 * - PageHeader: Cabeçalho de página
 * - ThemeToggle: Alternador de tema claro/escuro
 * - TokensDemo: Demonstração de design tokens
 * - VisuallyHidden: Esconde conteúdo visualmente
 * - Kbd: Indicador de teclas do teclado
 * - Code: Exibição de código inline e em blocos
 * - Quote: Citações e depoimentos
 * - AspectRatioBox: Container com proporção fixa
 * - Center: Container para centralizar conteúdo
 * 
 * @module @rainersoft/ui/utilities
 * @category Utilities
 */

// ============================================================================
// NAVIGATION UTILITIES
// ============================================================================

export { BackToTop } from './BackToTop';

// ============================================================================
// USER PREFERENCES
// ============================================================================

export { CookieBanner } from './CookieBanner';
export { ThemeToggle } from './ThemeToggle';

// ============================================================================
// ERROR HANDLING
// ============================================================================

export { ErrorBoundary } from './ErrorBoundary';

// ============================================================================
// PWA UTILITIES
// ============================================================================

export { InstallPrompt } from './InstallPrompt';
export { UpdateNotification } from './UpdateNotification';

// ============================================================================
// LOADING STATES
// ============================================================================

export { LoadingScreen } from './LoadingScreen';

// ============================================================================
// LAYOUT UTILITIES
// ============================================================================

export { PageHeader } from './PageHeader';

// ============================================================================
// DEMO COMPONENTS
// ============================================================================

export { TokensDemo } from './TokensDemo';

// ============================================================================
// ACCESSIBILITY
// ============================================================================

export { VisuallyHidden } from './VisuallyHidden';

// ============================================================================
// TEXT & CODE UTILITIES
// ============================================================================

export * from './kbd';
export * from './code';
export * from './quote';

// ============================================================================
// LAYOUT UTILITIES (NEW)
// ============================================================================

export * from './aspect-ratio-box';
export * from './center';
