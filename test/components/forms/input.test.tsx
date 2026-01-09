import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../src/components/forms/input';

describe('Input Component', () => {
  it('renders correctly with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    // Input não tem type padrão definido, então verificamos se é um input
    expect(input.tagName).toBe('INPUT');
  });

  it('renders with different types', () => {
    const { rerender } = render(<Input type="email" />);
    let input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');

    rerender(<Input type="password" />);
    input = screen.getByDisplayValue('');
    expect(input).toHaveAttribute('type', 'password');

    rerender(<Input type="number" />);
    input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(<Input value="test" onChange={handleChange} />);
    
    const input = screen.getByDisplayValue('test');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:opacity-50');
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<Input data-testid="custom-input" maxLength={10} />);
    const input = screen.getByTestId('custom-input');
    expect(input).toHaveAttribute('maxLength', '10');
  });

  it('supports required attribute', () => {
    render(<Input required />);
    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();
  });

  it('supports readonly attribute', () => {
    render(<Input readOnly value="readonly" />);
    const input = screen.getByDisplayValue('readonly');
    expect(input).toHaveAttribute('readonly');
  });

  it('has proper accessibility attributes', () => {
    render(<Input aria-label="Custom label" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', 'Custom label');
  });

  it('applies focus styles correctly', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    
    // Test focus-visible styles are applied
    expect(input).toHaveClass('focus-visible:border-ring');
  });

  it('handles invalid state', () => {
    render(<Input aria-invalid="true" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('aria-invalid:ring-destructive/20');
  });
});
