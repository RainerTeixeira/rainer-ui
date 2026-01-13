import { render, screen } from '@testing-library/react';
import { Label } from '../../../../src/components/forms/label';

/**
 * Testes do componente Label
 */

describe('Label', () => {
  it('renderiza label com texto', () => {
    render(<Label>Test Label</Label>);
    
    expect(screen.getByText('Test Label')).toBeDefined();
  });

  it('renderiza label com htmlFor', () => {
    render(<Label htmlFor="test-input">Input Label</Label>);
    
    const label = screen.getByText('Input Label');
    expect(label.getAttribute('for')).toBe('test-input');
  });

  it('aplica classes CSS customizadas', () => {
    render(<Label className="custom-class">Test</Label>);
    
    const label = screen.getByText('Test');
    expect(label.classList.contains('custom-class')).toBe(true);
  });
});
