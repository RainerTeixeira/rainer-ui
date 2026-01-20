/**
 * Biblioteca de Utilitários e Tokens da UI
 * 
 * Este módulo centraliza todos os utilitários, helpers e tokens necessários
 * para os componentes da UI. Consome os design tokens do pacote
 * @rainersoft/design-tokens e fornece uma API unificada para o restante da aplicação.
 * 
 * @module @rainersoft/ui/lib
 * @author Rainer Teixeira
 * @version 2.3.0
 */

// ============================================================================
// DESIGN TOKENS E UTILITÁRIOS (TUDO EM tokens.ts)
// ============================================================================
export * from './tokens';

// ============================================================================
// EXPORTS CONVENIENTES
// ============================================================================
export { cn } from './tokens';
