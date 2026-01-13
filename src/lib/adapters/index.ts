/**
 * Adaptadores para @rainersoft/ui
 * 
 * @module @rainersoft/ui/lib/adapters
 * @author Rainer Teixeira
 */

export { genericAdapter, createGenericAdapter, GENERIC_TOKENS } from './generic';
export { 
  rainersoftAdapter, 
  createRainersoftAdapter, 
  isRainersoftAvailable,
  FALLBACK_TOKENS 
} from './rainersoft';
