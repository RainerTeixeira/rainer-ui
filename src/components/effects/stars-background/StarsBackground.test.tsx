import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { StarsBackground } from './StarsBackground';

/**
 * Testes do efeito StarsBackground
 */

jest.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'dark' }),
}));

describe('StarsBackground', () => {
  it('renderiza estrelas no modo dark', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const divs = container.querySelectorAll('div');
      expect(divs.length).toBeGreaterThan(0);
    });
  });

  it('usa o token de cor --effect-star-color nas estrelas', async () => {
    const { container } = render(<StarsBackground />);

    await waitFor(() => {
      const html = container.innerHTML;
      expect(html).toContain('--effect-star-color');
    });
  });
});
