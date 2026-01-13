import { hexToRGBA } from '../../../src/lib/color-utils';

/**
 * Testes da função hexToRGBA
 */

describe('hexToRGBA', () => {
  it('converte hex para RGB', () => {
    const result = hexToRGBA('#ff0000');
    expect(result).toBe('rgb(255, 0, 0)');
  });

  it('converte hex para RGBA com alpha', () => {
    const result = hexToRGBA('#ff0000', 0.5);
    expect(result).toBe('rgba(255, 0, 0, 0.5)');
  });

  it('lida com hex de 3 caracteres', () => {
    const result = hexToRGBA('#f00');
    expect(result).toBe('rgb(255, 0, 0)');
  });

  it('lida com hex de 6 caracteres', () => {
    const result = hexToRGBA('#ff0000');
    expect(result).toBe('rgb(255, 0, 0)');
  });

  it('lida com hex de 8 caracteres', () => {
    const result = hexToRGBA('#ff0000ff');
    expect(result).toBe('rgb(255, 0, 0)');
  });

  it('retorna valor padrão para hex inválido', () => {
    const result = hexToRGBA('invalid');
    expect(result).toBe('rgb(0, 0, 0)');
  });

  it('lida com alpha fora do range', () => {
    const result = hexToRGBA('#ff0000', 2);
    expect(result).toBe('rgba(255, 0, 0, 1)');
  });
});
