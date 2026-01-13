import { renderHook } from '@testing-library/react';
import { useIsMobile } from '../../../src/hooks/use-mobile';

/**
 * Testes do hook useMobile
 */

describe('useMobile', () => {
  it('retorna booleano para detecção de mobile', () => {
    const { result } = renderHook(() => useIsMobile());
    
    expect(typeof result.current).toBe('boolean');
  });

  it('retorna valor inicial', () => {
    const { result } = renderHook(() => useIsMobile());
    
    expect(result.current).toBeDefined();
  });
});
