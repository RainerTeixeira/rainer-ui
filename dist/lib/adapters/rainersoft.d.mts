export { GENERIC_TOKENS as FALLBACK_TOKENS } from './generic.mjs';
import { A as AdapterConfig, a as AdapterFactory } from '../../adapter-Ao-UsVV1.mjs';
import '../../tokens-B1TMkK7f.mjs';

/**
 * Adaptador Rainersoft para @rainersoft/ui
 *
 * Conecta a biblioteca UI com @rainersoft/design-tokens quando disponível.
 * Fallback para tokens genéricos se não instalado.
 *
 * @module @rainersoft/ui/lib/adapters/rainersoft
 * @author Rainer Teixeira
 */

declare const rainersoftAdapter: AdapterConfig;
declare const createRainersoftAdapter: AdapterFactory;
declare const isRainersoftAvailable: () => boolean;

export { createRainersoftAdapter, isRainersoftAvailable, rainersoftAdapter };
