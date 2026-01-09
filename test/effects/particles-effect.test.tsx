import { render } from '@testing-library/react';
import { ParticlesEffect } from '../../src/components/effects/ParticlesEffect';

/**
 * Testes do efeito ParticlesEffect
 */

describe('ParticlesEffect', () => {
  it('renderiza três partículas na variante default', () => {
    const { container } = render(<ParticlesEffect />);

    const particles = container.querySelectorAll('[aria-hidden="true"] > div');
    expect(particles.length).toBe(3);
  });

  it('usa tokens de cor neon para as partículas', () => {
    const { container } = render(<ParticlesEffect />);

    const html = container.innerHTML;
    expect(html).toContain('bg-[var(--color-text-neon-cyan)]');
    expect(html).toContain('bg-[var(--color-text-neon-purple)]');
    expect(html).toContain('bg-[var(--color-text-neon-pink)]');
  });
});
