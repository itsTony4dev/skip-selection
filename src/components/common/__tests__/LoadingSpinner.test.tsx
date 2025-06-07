import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading spinner and message', () => {
    render(<LoadingSpinner />);

    expect(screen.getByText('Loading skip options...')).toBeInTheDocument();
  });

  it('renders with correct styling classes', () => {
    render(<LoadingSpinner />);
    
    const spinner = screen.getByText('Loading skip options...').previousElementSibling;
    expect(spinner).toHaveClass('animate-spin', 'rounded-full', 'h-16', 'w-16', 'border-b-2', 'border-blue-600');
  });

  it('renders with correct container styling', () => {
    render(<LoadingSpinner />);
    
    const container = screen.getByText('Loading skip options...').parentElement;
    expect(container).toHaveClass('text-center');
  });
}); 