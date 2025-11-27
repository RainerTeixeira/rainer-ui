import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MatrixBackground } from './MatrixBackground';

/**
 * Testes do efeito MatrixBackground
 */

describe('MatrixBackground', () => {
  it('renderiza colunas da chuva Matrix no variant "local"', async () => {
    const { container } = render(<MatrixBackground variant="local" />);

    await waitFor(() => {
      const columns = container.querySelectorAll('.animate-matrix-fall');
      expect(columns.length).toBeGreaterThan(0);
    });
  });

  it('usa o token de cor --effect-matrix-rain-color nos dígitos', async () => {
    const { container } = render(<MatrixBackground variant="local" />);

    await waitFor(() => {
      const span = container.querySelector('span');
      expect(span).not.toBeNull();
      if (span) {
        const style = span.getAttribute('style') || '';
        expect(style).toContain('--effect-matrix-rain-color');
      }
    });
  });
});
