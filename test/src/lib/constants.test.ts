import { GRADIENT_DIRECTIONS } from '../../../src/lib/constants';

/**
 * Testes das constantes
 */

describe('Constants', () => {
  it('GRADIENT_DIRECTIONS contém direções válidas', () => {
    expect(GRADIENT_DIRECTIONS.TO_BOTTOM_RIGHT).toBe('to-br');
    expect(GRADIENT_DIRECTIONS.TO_RIGHT).toBe('to-r');
    expect(GRADIENT_DIRECTIONS.TO_BOTTOM).toBe('to-b');
    expect(GRADIENT_DIRECTIONS.TO_LEFT).toBe('to-l');
    expect(GRADIENT_DIRECTIONS.TO_TOP_LEFT).toBe('to-tl');
    expect(GRADIENT_DIRECTIONS.TO_TOP_RIGHT).toBe('to-tr');
    expect(GRADIENT_DIRECTIONS.TO_BOTTOM_LEFT).toBe('to-bl');
  });

  it('GRADIENT_DIRECTIONS não está vazio', () => {
    expect(Object.keys(GRADIENT_DIRECTIONS).length).toBeGreaterThan(0);
  });
});
