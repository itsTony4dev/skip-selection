import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../Header';
import { useTheme } from '../../../App';

// Mock the theme context
vi.mock('../../../App', () => ({
  useTheme: vi.fn()
}));

describe('Header', () => {
  beforeEach(() => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      toggleTheme: vi.fn()
    });
  });

  it('renders all steps correctly', () => {
    render(<Header />);

    // Check if all steps are rendered
    expect(screen.getByText('Postcode')).toBeInTheDocument();
    expect(screen.getByText('Waste Type')).toBeInTheDocument();
    expect(screen.getByText('Select Skip')).toBeInTheDocument();
    expect(screen.getByText('Permit Check')).toBeInTheDocument();
    expect(screen.getByText('Choose Date')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<Header />);
    
    const themeToggle = screen.getByRole('button', { name: 'Toggle dark mode' });
    expect(themeToggle).toBeInTheDocument();
  });

  it('displays correct step status styling', () => {
    render(<Header />);
    
    // Current step (Select Skip) should have blue styling
    const currentStep = screen.getByText('Select Skip').closest('div')?.querySelector('div');
    expect(currentStep).toHaveClass('bg-blue-600', 'text-white');

    // Completed steps should have blue-100 background
    const completedSteps = screen.getAllByText(/Postcode|Waste Type/);
    completedSteps.forEach(step => {
      const stepContainer = step.closest('div')?.querySelector('div');
      expect(stepContainer).toHaveClass('bg-blue-100', 'text-blue-600');
    });
  });

  it('calls toggleTheme when theme button is clicked', () => {
    const mockToggleTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme
    });

    render(<Header />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Toggle dark mode' }));
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
}); 