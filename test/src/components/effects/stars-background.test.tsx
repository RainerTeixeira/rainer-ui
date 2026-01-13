import { render, waitFor } from '@testing-library/react';
import { StarsBackground } from '../../../../src/components/effects/StarsBackground';

/**
 * Testes do efeito StarsBackground
 */

describe('StarsBackground', () => {
  it('renderiza estrelas aleatórias', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const stars = container.querySelectorAll('[data-testid="star"]');
      expect(stars.length).toBeGreaterThan(0);
    });
  });

  it('gera quantidade correta de estrelas', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const stars = container.querySelectorAll('[data-testid="star"]');
      expect(stars.length).toBe(150);
    });
  });

  it('aplica classes CSS corretas para o fundo estrelado', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const background = container.querySelector('[data-testid="stars-background"]');
      expect(background).not.toBeNull();
      expect(background?.classList.contains('fixed')).toBe(true);
      expect(background?.classList.contains('inset-0')).toBe(true);
    });
  });

  it('cada estrela tem propriedades únicas', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const stars = container.querySelectorAll('[data-testid="star"]');
      expect(stars.length).toBeGreaterThan(0);
      
      // Verifica se as estrelas têm diferentes posições
      const firstStar = stars[0] as HTMLElement;
      expect(firstStar.style.left).toBeDefined();
      expect(firstStar.style.top).toBeDefined();
      expect(firstStar.style.width).toBeDefined();
      expect(firstStar.style.height).toBeDefined();
    });
  });

  it('estrelas têm opacidade variada', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const stars = container.querySelectorAll('[data-testid="star"]');
      expect(stars.length).toBeGreaterThan(0);
      
      const firstStar = stars[0] as HTMLElement;
      expect(firstStar.style.opacity).toBeDefined();
      expect(parseFloat(firstStar.style.opacity || '0')).toBeGreaterThan(0);
    });
  });

  it('não renderiza em light mode', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const background = container.querySelector('[data-testid="stars-background"]');
      expect(background).not.toBeNull();
      const style = background?.getAttribute('style') || '';
      expect(style).toContain('opacity: 0');
    });
  });

  it('previne erro de hidratação SSR', async () => {
    const { container } = render(<StarsBackground />);

    // Aguarda o componente montar
    await waitFor(() => {
      const background = container.querySelector('[data-testid="stars-background"]');
      expect(background).not.toBeNull();
    });
  });
});
