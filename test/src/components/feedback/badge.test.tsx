import { render, screen } from '@testing-library/react';
import { Badge } from '../../../../src/components/feedback/badge';

describe('Badge Component', () => {
  it('renders correctly with default props', () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText('Default Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('inline-flex');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Badge variant="default">Default</Badge>);
    let badge = screen.getByText('Default');
    expect(badge).toHaveClass('bg-primary');

    rerender(<Badge variant="secondary">Secondary</Badge>);
    badge = screen.getByText('Secondary');
    expect(badge).toHaveClass('bg-secondary');

    rerender(<Badge variant="destructive">Destructive</Badge>);
    badge = screen.getByText('Destructive');
    expect(badge).toHaveClass('bg-destructive');

    rerender(<Badge variant="outline">Outline</Badge>);
    badge = screen.getByText('Outline');
    expect(badge).toHaveClass('border');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-badge');
  });

  it('forwards additional props', () => {
    render(<Badge data-testid="custom-badge" title="Badge title">Badge</Badge>);
    const badge = screen.getByTestId('custom-badge');
    expect(badge).toHaveAttribute('title', 'Badge title');
  });

  it('supports accessibility attributes', () => {
    render(<Badge role="status" aria-label="Status badge">Active</Badge>);
    const badge = screen.getByRole('status');
    expect(badge).toHaveAttribute('aria-label', 'Status badge');
  });

  it('handles long text content', () => {
    render(
      <Badge>
        This is a very long badge text that should wrap or truncate properly
      </Badge>
    );
    const badge = screen.getByText(/This is a very long badge text/);
    expect(badge).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    render(<Badge>Styled Badge</Badge>);
    const badge = screen.getByText('Styled Badge');
    expect(badge).toHaveClass(
      'rounded-full',
      'border',
      'px-2.5',
      'py-0.5',
      'text-xs',
      'font-semibold'
    );
  });

  it('supports focus states', () => {
    render(<Badge>Focus Badge</Badge>);
    const badge = screen.getByText('Focus Badge');
    expect(badge).toHaveClass(
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-ring',
      'focus:ring-offset-2'
    );
  });
});
