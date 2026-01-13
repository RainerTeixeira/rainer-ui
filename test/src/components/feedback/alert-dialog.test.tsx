import { render, screen } from '@testing-library/react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../../../src/components/feedback/alert-dialog';

/**
 * Testes do componente AlertDialog
 */

describe('AlertDialog', () => {
  it('renderiza dialog com trigger e content', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Action</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to perform this action?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    
    expect(screen.getByText('Open Dialog')).toBeDefined();
  });

  it('renderiza todos os subcomponentes', () => {
    render(
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Action</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    
    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Description')).toBeDefined();
    expect(screen.getByText('Cancel')).toBeDefined();
    expect(screen.getByText('Action')).toBeDefined();
  });

  it('aplica classes CSS customizadas', () => {
    render(
      <AlertDialog>
        <AlertDialogContent className="custom-class">
          <AlertDialogHeader>
            <AlertDialogTitle>Test</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    );
    
    const content = screen.getByText('Test').closest('[data-testid="alert-dialog-content"]');
    expect(content?.classList.contains('custom-class')).toBe(true);
  });
});
