import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorMessage } from '../ErrorMessage';

describe('ErrorMessage', () => {
  const mockMessage = 'Test error message';
  const mockOnRetry = vi.fn();

  it('renders error message correctly', () => {
    render(<ErrorMessage message={mockMessage} onRetry={mockOnRetry} />);

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(mockMessage)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Try Again' })).toBeInTheDocument();
  });

  it('calls onRetry when retry button is clicked', () => {
    render(<ErrorMessage message={mockMessage} onRetry={mockOnRetry} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Try Again' }));
    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });

  it('renders with correct styling classes', () => {
    render(<ErrorMessage message={mockMessage} onRetry={mockOnRetry} />);
    
    const container = screen.getByRole('button', { name: 'Try Again' }).parentElement;
    expect(container).toHaveClass('text-center', 'bg-white', 'p-8', 'rounded-2xl', 'shadow-xl');
  });
}); 