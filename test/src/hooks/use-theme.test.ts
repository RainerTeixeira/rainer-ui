import { renderHook } from '@testing-library/react';
import { useTheme } from '../../../src/hooks/use-theme';

/**
 * Testes do hook useTheme
 */

describe('useTheme', () => {
  it('retorna objeto de tema', () => {
    const { result } = renderHook(() => useTheme());
    
    expect(result.current).toBeDefined();
    expect(typeof result.current.theme).toBe('string');
    expect(typeof result.current.setTheme).toBe('function');
  });

  it('retorna resolvedTheme', () => {
    const { result } = renderHook(() => useTheme());
    
    expect(result.current.resolvedTheme).toBeDefined();
  });

  it('setTheme é uma função', () => {
    const { result } = renderHook(() => useTheme());
    
    expect(typeof result.current.setTheme).toBe('function');
  });
});
