import { render, screen } from '@testing-library/react';
import { Alert, AlertDescription, AlertTitle } from '../../../../src/components/feedback/alert';

/**
 * Testes do componente Alert
 */

describe('Alert', () => {
  it('renderiza alert com variant default', () => {
    render(<Alert>Alert message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeDefined();
    expect(alert.textContent).toBe('Alert message');
  });

  it('renderiza alert com variant destructive', () => {
    render(<Alert variant="destructive">Error message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeDefined();
    expect(alert.textContent).toBe('Error message');
  });

  it('renderiza alert com variant success', () => {
    render(<Alert variant="success">Success message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeDefined();
    expect(alert.textContent).toBe('Success message');
  });

  it('renderiza alert com variant warning', () => {
    render(<Alert variant="warning">Warning message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeDefined();
    expect(alert.textContent).toBe('Warning message');
  });

  it('renderiza alert com variant info', () => {
    render(<Alert variant="info">Info message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeDefined();
    expect(alert.textContent).toBe('Info message');
  });

  it('renderiza AlertTitle corretamente', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>
    );
    
    const title = screen.getByText('Alert Title');
    const description = screen.getByText('Alert description');
    
    expect(title).toBeDefined();
    expect(description).toBeDefined();
  });

  it('renderiza AlertDescription corretamente', () => {
    render(
      <Alert>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>
    );
    
    const description = screen.getByText('Alert description');
    expect(description).toBeDefined();
  });

  it('aplica classes CSS customizadas', () => {
    render(<Alert className="custom-class">Alert message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert.classList.contains('custom-class')).toBe(true);
  });

  it('aceita props HTML padrão', () => {
    render(<Alert data-testid="custom-alert">Alert message</Alert>);
    
    const alert = screen.getByTestId('custom-alert');
    expect(alert).toBeDefined();
    expect(alert.textContent).toBe('Alert message');
  });

  it('tem role="alert" para acessibilidade', () => {
    render(<Alert>Alert message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeDefined();
  });
});
