import { cn } from '../../../src/lib/utils';

/**
 * Testes da função cn (className utility)
 */

describe('cn', () => {
  it('combina classes CSS', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('remove classes duplicadas', () => {
    const result = cn('class1', 'class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('remove classes condicionais falsy', () => {
    const result = cn('class1', false && 'class2', 'class3');
    expect(result).toBe('class1 class3');
  });

  it('remove classes condicionais truthy', () => {
    const result = cn('class1', true && 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('lida com objetos de classes', () => {
    const result = cn({ 'class1': true, 'class2': false, 'class3': true });
    expect(result).toBe('class1 class3');
  });

  it('lida com arrays de classes', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('retorna string vazia se não houver classes', () => {
    const result = cn();
    expect(result).toBe('');
  });
});
