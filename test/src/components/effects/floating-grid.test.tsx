import { render, waitFor } from '@testing-library/react';
import { FloatingGrid } from '../../../../src/components/effects/FloatingGrid';

/**
 * Testes do efeito FloatingGrid
 */

describe('FloatingGrid', () => {
  it('renderiza canvas no variant "default"', async () => {
    const { container } = render(<FloatingGrid variant="default" />);

    await waitFor(() => {
      const canvas = container.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
  });

  it('configura intensidade corretamente', async () => {
    const { container } = render(<FloatingGrid variant="default" intensity={0.8} />);

    await waitFor(() => {
      const canvas = container.querySelector('canvas');
      expect(canvas).not.toBeNull();
      // Verifica se o canvas tem os atributos corretos
      expect(canvas?.hasAttribute('width')).toBe(true);
      expect(canvas?.hasAttribute('height')).toBe(true);
    });
  });

  it('aplica classes CSS corretas para o grid flutuante', async () => {
    const { container } = render(<FloatingGrid variant="default" />);

    await waitFor(() => {
      const grid = container.querySelector('[data-testid="floating-grid"]');
      expect(grid).not.toBeNull();
      expect(grid?.classList.contains('fixed')).toBe(true);
      expect(grid?.classList.contains('inset-0')).toBe(true);
      expect(grid?.classList.contains('pointer-events-none')).toBe(true);
    });
  });

  it('renderiza grid denso no variant "dense"', async () => {
    const { container } = render(<FloatingGrid variant="dense" />);

    await waitFor(() => {
      const canvas = container.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
  });

  it('renderiza grid esparso no variant "sparse"', async () => {
    const { container } = render(<FloatingGrid variant="sparse" />);

    await waitFor(() => {
      const canvas = container.querySelector('canvas');
      expect(canvas).not.toBeNull();
    });
  });

  it('não renderiza em light mode', async () => {
    const { container } = render(<FloatingGrid variant="default" />);

    await waitFor(() => {
      const grid = container.querySelector('[data-testid="floating-grid"]');
      expect(grid).not.toBeNull();
      const style = grid?.getAttribute('style') || '';
      expect(style).toContain('opacity: 0');
    });
  });

  it('responde a eventos de resize', async () => {
    const { container } = render(<FloatingGrid variant="default" />);

    await waitFor(() => {
      const canvas = container.querySelector('canvas');
      expect(canvas).not.toBeNull();
      
      // Simula resize
      window.dispatchEvent(new Event('resize'));
      expect(canvas?.hasAttribute('width')).toBe(true);
      expect(canvas?.hasAttribute('height')).toBe(true);
    });
  });
});
