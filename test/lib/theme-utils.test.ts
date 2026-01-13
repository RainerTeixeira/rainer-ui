/**
 * Testes para theme-utils
 * 
 * Verifica que os utilitários de tema usam os tokens do @rainersoft/design-tokens
 */

// Mock do módulo @rainersoft/design-tokens
jest.mock('@rainersoft/design-tokens', () => ({
  themes: {
    light: {
      colors: {
        primary: { base: '#0891b2', text: '#ffffff' },
        secondary: { base: '#6366f1', text: '#ffffff' },
        success: { base: '#22c55e' },
        error: { base: '#ef4444' },
        warning: { base: '#f59e0b' },
        info: { base: '#3b82f6' },
        background: { primary: '#ffffff' },
        text: { primary: '#0a0a0a' },
      },
    },
    dark: {
      colors: {
        primary: { base: '#22d3ee', text: '#0a0a0a' },
        secondary: { base: '#818cf8', text: '#0a0a0a' },
        success: { base: '#16a34a' },
        error: { base: '#dc2626' },
        warning: { base: '#d97706' },
        info: { base: '#2563eb' },
        background: { primary: '#0a0a0a' },
        text: { primary: '#fafafa' },
      },
    },
  },
}));

import {
  getThemeColors,
  getSemanticColors,
  getStatusColor,
  getButtonPrimaryColor,
  getButtonSecondaryColor,
  getColorFromTheme,
  getBrandColor,
} from '../../src/lib/theme-utils';

describe('theme-utils', () => {
  describe('getThemeColors', () => {
    it('retorna cores do tema light', () => {
      const colors = getThemeColors('light');
      expect(colors).toBeDefined();
      expect(typeof colors).toBe('object');
    });

    it('retorna cores do tema dark', () => {
      const colors = getThemeColors('dark');
      expect(colors).toBeDefined();
      expect(typeof colors).toBe('object');
    });
  });

  describe('getSemanticColors', () => {
    it('retorna cores semânticas do tema light', () => {
      const colors = getSemanticColors('light');
      expect(colors).toBeDefined();
      expect(typeof colors).toBe('object');
    });

    it('retorna cores semânticas do tema dark', () => {
      const colors = getSemanticColors('dark');
      expect(colors).toBeDefined();
      expect(typeof colors).toBe('object');
    });
  });

  describe('getStatusColor', () => {
    it('retorna cor de sucesso do tema light', () => {
      const color = getStatusColor('success', 'light');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });

    it('retorna cor de erro do tema light', () => {
      const color = getStatusColor('error', 'light');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });

    it('retorna cor de warning do tema light', () => {
      const color = getStatusColor('warning', 'light');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });

    it('retorna cor de info do tema light', () => {
      const color = getStatusColor('info', 'light');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });
  });

  describe('getButtonPrimaryColor', () => {
    it('retorna cor primária do botão para tema light', () => {
      const color = getButtonPrimaryColor('light');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });

    it('retorna cor primária do botão para tema dark', () => {
      const color = getButtonPrimaryColor('dark');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });
  });

  describe('getButtonSecondaryColor', () => {
    it('retorna cor secundária do botão para tema light', () => {
      const color = getButtonSecondaryColor('light');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });

    it('retorna cor secundária do botão para tema dark', () => {
      const color = getButtonSecondaryColor('dark');
      expect(color).toBeDefined();
      expect(typeof color).toBe('string');
    });
  });

  describe('getColorFromTheme', () => {
    it('retorna cor de background primary do tema light', () => {
      const color = getColorFromTheme('light', 'background', 'primary');
      expect(color).toBeDefined();
    });

    it('retorna cor de text primary do tema light', () => {
      const color = getColorFromTheme('light', 'text', 'primary');
      expect(color).toBeDefined();
    });

    it('retorna undefined para categoria inexistente', () => {
      const color = getColorFromTheme('light', 'background', 'nonexistent');
      expect(color).toBeUndefined();
    });
  });

  describe('getBrandColor', () => {
    it('retorna cor de marca primária para tema light', () => {
      const color = getBrandColor('primary', 'light');
      expect(color).toBeDefined();
    });

    it('retorna cor de marca secundária para tema light', () => {
      const color = getBrandColor('secondary', 'light');
      expect(color).toBeDefined();
    });
  });
});
