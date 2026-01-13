import { render, waitFor } from '@testing-library/react';
import { CelestialBackground } from '../../../../src/components/effects/CelestialBackground';

/**
 * Testes do efeito CelestialBackground
 */

describe('CelestialBackground', () => {
  it('renderiza estrelas no variant "default"', async () => {
    const { container } = render(<CelestialBackground variant="default" />);

    await waitFor(() => {
      const stars = container.querySelectorAll('[data-testid="celestial-star"]');
      expect(stars.length).toBeGreaterThan(0);
    });
  });

  it('renderiza mais estrelas no variant "dense"', async () => {
    const { container } = render(<CelestialBackground variant="dense" />);

    await waitFor(() => {
      const stars = container.querySelectorAll('[data-testid="celestial-star"]');
      expect(stars.length).toBeGreaterThan(100);
    });
  });

  it('renderiza menos estrelas no variant "sparse"', async () => {
    const { container } = render(<CelestialBackground variant="sparse" />);

    await waitFor(() => {
      const stars = container.querySelectorAll('[data-testid="celestial-star"]');
      expect(stars.length).toBeLessThan(100);
    });
  });

  it('aplica classes CSS corretas para o background celestial', async () => {
    const { container } = render(<CelestialBackground variant="default" />);

    await waitFor(() => {
      const background = container.querySelector('[data-testid="celestial-background"]');
      expect(background).toHaveClass('fixed', 'inset-0', 'pointer-events-none');
    });
  });

  it('usa gradient directions para criar efeito de nebulosa', async () => {
    const { container } = render(<CelestialBackground variant="default" />);

    await waitFor(() => {
      const nebula = container.querySelector('[data-testid="celestial-nebula"]');
      expect(nebula).not.toBeNull();
    });
  });

  it('tem opacidade zero em light mode', async () => {
    const { container } = render(<CelestialBackground variant="default" />);

    await waitFor(() => {
      const background = container.querySelector('[data-testid="celestial-background"]');
      expect(background).toHaveStyle('opacity: 0');
    });
  });
});
