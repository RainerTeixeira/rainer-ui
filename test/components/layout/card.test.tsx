import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  HighlightCard,
} from '../../../src/components/layout/card';

describe('Card Components', () => {
  describe('Card', () => {
    it('renders correctly with default props', () => {
      render(<Card>Card content</Card>);
      const card = screen.getByText('Card content');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('rounded-lg', 'border', 'bg-card');
    });

    it('applies custom className', () => {
      render(<Card className="custom-class">Card</Card>);
      const card = screen.getByText('Card');
      expect(card).toHaveClass('custom-class');
    });

    it('forwards additional props', () => {
      render(<Card data-testid="custom-card">Card</Card>);
      const card = screen.getByTestId('custom-card');
      expect(card).toBeInTheDocument();
    });

    it('supports ref forwarding', () => {
      const ref = { current: null };
      render(<Card ref={ref}>Card</Card>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('CardHeader', () => {
    it('renders with correct styling', () => {
      render(<CardHeader>Header content</CardHeader>);
      const header = screen.getByText('Header content');
      expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'p-6');
    });

    it('applies custom className', () => {
      render(<CardHeader className="custom-header">Header</CardHeader>);
      const header = screen.getByText('Header');
      expect(header).toHaveClass('custom-header');
    });
  });

  describe('CardTitle', () => {
    it('renders as h3 element', () => {
      render(<CardTitle>Card Title</CardTitle>);
      const title = screen.getByRole('heading', { level: 3, name: 'Card Title' });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('text-2xl', 'font-semibold');
    });

    it('applies custom className', () => {
      render(<CardTitle className="custom-title">Title</CardTitle>);
      const title = screen.getByRole('heading', { level: 3 });
      expect(title).toHaveClass('custom-title');
    });
  });

  describe('CardDescription', () => {
    it('renders as paragraph element', () => {
      render(<CardDescription>Card description</CardDescription>);
      const description = screen.getByText('Card description');
      expect(description.tagName).toBe('P');
      expect(description).toHaveClass('text-sm', 'text-muted-foreground');
    });

    it('applies custom className', () => {
      render(<CardDescription className="custom-desc">Description</CardDescription>);
      const description = screen.getByText('Description');
      expect(description).toHaveClass('custom-desc');
    });
  });

  describe('CardContent', () => {
    it('renders with correct padding', () => {
      render(<CardContent>Content here</CardContent>);
      const content = screen.getByText('Content here');
      expect(content).toHaveClass('p-6', 'pt-0');
    });

    it('applies custom className', () => {
      render(<CardContent className="custom-content">Content</CardContent>);
      const content = screen.getByText('Content');
      expect(content).toHaveClass('custom-content');
    });
  });

  describe('CardFooter', () => {
    it('renders with flex layout', () => {
      render(<CardFooter>Footer content</CardFooter>);
      const footer = screen.getByText('Footer content');
      expect(footer).toHaveClass('flex', 'items-center', 'p-6', 'pt-0');
    });

    it('applies custom className', () => {
      render(<CardFooter className="custom-footer">Footer</CardFooter>);
      const footer = screen.getByText('Footer');
      expect(footer).toHaveClass('custom-footer');
    });
  });

  describe('HighlightCard', () => {
    it('renders with highlight styling', () => {
      render(<HighlightCard>Highlight content</HighlightCard>);
      const card = screen.getByText('Highlight content');
      expect(card).toHaveClass('rounded-2xl', 'backdrop-blur-xl');
      expect(card).toHaveClass('bg-card/60', 'dark:bg-black/50');
    });

    it('applies custom className', () => {
      render(<HighlightCard className="custom-highlight">Highlight</HighlightCard>);
      const card = screen.getByText('Highlight');
      expect(card).toHaveClass('custom-highlight');
    });
  });

  describe('Complete Card Composition', () => {
    it('renders a complete card with all components', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
            <CardDescription>This is a test card</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Main content goes here</p>
          </CardContent>
          <CardFooter>
            <button>Cancel</button>
            <button>Submit</button>
          </CardFooter>
        </Card>
      );

      expect(screen.getByRole('heading', { name: 'Test Card' })).toBeInTheDocument();
      expect(screen.getByText('This is a test card')).toBeInTheDocument();
      expect(screen.getByText('Main content goes here')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('renders a complete highlight card', () => {
      render(
        <HighlightCard>
          <CardHeader>
            <CardTitle>Highlight Card</CardTitle>
            <CardDescription>Featured content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Important information</p>
          </CardContent>
        </HighlightCard>
      );

      const card = screen.getByText('Featured content').closest('.rounded-2xl');
      expect(card).toHaveClass('rounded-2xl', 'backdrop-blur-xl');
      expect(screen.getByRole('heading', { name: 'Highlight Card' })).toBeInTheDocument();
    });
  });
});
