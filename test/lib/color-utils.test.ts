/**
 * Testes para color-utils
 * 
 * Verifica funções de conversão e manipulação de cores
 */
import {
  hexToRGB,
  hexToRGBA,
  getTokenColor,
} from '../../src/lib/color-utils';

describe('color-utils', () => {
  describe('hexToRGB', () => {
    it('converte hex com # para RGB', () => {
      const rgb = hexToRGB('#ff0000');
      expect(rgb).toBe('255, 0, 0');
    });

    it('converte hex sem # para RGB', () => {
      const rgb = hexToRGB('00ff00');
      expect(rgb).toBe('0, 255, 0');
    });

    it('converte hex azul para RGB', () => {
      const rgb = hexToRGB('#0000ff');
      expect(rgb).toBe('0, 0, 255');
    });

    it('converte hex branco para RGB', () => {
      const rgb = hexToRGB('#ffffff');
      expect(rgb).toBe('255, 255, 255');
    });

    it('converte hex preto para RGB', () => {
      const rgb = hexToRGB('#000000');
      expect(rgb).toBe('0, 0, 0');
    });
  });

  describe('hexToRGBA', () => {
    it('converte hex para RGBA com alpha padrão', () => {
      const rgba = hexToRGBA('#ff0000');
      expect(rgba).toBe('rgba(255, 0, 0, 1)');
    });

    it('converte hex para RGBA com alpha customizado', () => {
      const rgba = hexToRGBA('#ff0000', 0.5);
      expect(rgba).toBe('rgba(255, 0, 0, 0.5)');
    });

    it('converte hex para RGBA com alpha zero', () => {
      const rgba = hexToRGBA('#00ff00', 0);
      expect(rgba).toBe('rgba(0, 255, 0, 0)');
    });
  });

  describe('getTokenColor', () => {
    it('retorna CSS var para token sem tema', () => {
      const color = getTokenColor('primary');
      expect(color).toBe('var(--color-primary)');
    });

    it('retorna CSS var com prefixo color-', () => {
      const color = getTokenColor('color-primary');
      expect(color).toBe('var(--color-primary)');
    });
  });
});
