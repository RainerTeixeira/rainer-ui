import { render, screen } from '@testing-library/react';
import { Textarea } from '../../../../src/components/forms/textarea';

/**
 * Testes do componente Textarea
 */

describe('Textarea', () => {
  it('renderiza textarea', () => {
    render(<Textarea placeholder="Test textarea" />);
    
    const textarea = screen.getByDisplayValue('');
    expect(textarea).toBeDefined();
  });

  it('aceita placeholder', () => {
    render(<Textarea placeholder="Enter text here" />);
    
    const textarea = screen.getByPlaceholderText('Enter text here');
    expect(textarea).toBeDefined();
  });

  it('pode ser desabilitado', () => {
    render(<Textarea disabled />);
    
    const textarea = screen.getByDisplayValue('');
    expect(textarea.hasAttribute('disabled')).toBe(true);
  });

  it('aplica classes CSS customizadas', () => {
    render(<Textarea className="custom-class" />);
    
    const textarea = screen.getByDisplayValue('');
    expect(textarea.classList.contains('custom-class')).toBe(true);
  });
});
