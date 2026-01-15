import { A as AdapterConfig, a as AdapterFactory } from '../../adapter-BueEAZsa.mjs';
import { D as DesignTokens } from '../../tokens-A_UK8Q2r.mjs';

/**
 * Adaptador Genérico para @rainersoft/ui
 *
 * Fornece tokens padrão para uso sem dependências externas.
 *
 * @module @rainersoft/ui/lib/adapters/generic
 * @author Rainer Teixeira
 */

declare const GENERIC_TOKENS: DesignTokens;
declare const genericAdapter: AdapterConfig;
declare const createGenericAdapter: AdapterFactory;

export { GENERIC_TOKENS, createGenericAdapter, genericAdapter };
