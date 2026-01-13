import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../../../../src/components/forms/checkbox';

/**
 * Testes do componente Checkbox
 */

describe('Checkbox', () => {
  it('renderiza checkbox com label', () => {
    render(<Checkbox>Accept terms</Checkbox>);
    
    expect(screen.getByText('Accept terms')).toBeDefined();
  });

  it('renderiza checkbox sem label', () => {
    render(<Checkbox />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDefined();
  });

  it('pode ser marcado e desmarcado', async () => {
    const user = userEvent.setup();
    render(<Checkbox>Test checkbox</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('pode ser controlado externamente', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(
      <Checkbox checked={false} onCheckedChange={handleChange}>
        Controlled checkbox
      </Checkbox>
    );
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('pode ser desabilitado', () => {
    render(<Checkbox disabled>Disabled checkbox</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('aplica classes CSS customizadas', () => {
    render(<Checkbox className="custom-class">Test</Checkbox>);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.classList.contains('custom-class')).toBe(true);
  });

  it('aceita props HTML padrão', () => {
    render(<Checkbox data-testid="custom-checkbox">Test</Checkbox>);
    
    expect(screen.getByTestId('custom-checkbox')).toBeDefined();
  });

  it('tem role="checkbox" para acessibilidade', () => {
    render(<Checkbox>Test</Checkbox>);
    
    expect(screen.getByRole('checkbox')).toBeDefined();
  });
});
