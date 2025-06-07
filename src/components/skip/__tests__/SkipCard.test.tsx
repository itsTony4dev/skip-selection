import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SkipCard } from '../SkipCard';
import type { Skip } from '../../../types/skip';

// Mock the skip icon import
vi.mock('../../../assets/skip.svg', () => ({
  default: 'mock-skip-icon.svg'
}));

describe('SkipCard', () => {
  const mockSkip: Skip = {
    id: 1,
    size: 4,
    price_before_vat: 199.99,
    vat: 20,
    transport_cost: 25,
    per_tonne_cost: 15,
    hire_period_days: 7,
    allowed_on_road: true,
    allows_heavy_waste: true,
    postcode: 'SW1A 1AA',
    area: 'London',
    forbidden: false,
    created_at: '2024-03-20T00:00:00Z',
    updated_at: '2024-03-20T00:00:00Z'
  };

  const mockOnSelect = vi.fn();

  it('renders skip card with correct information', () => {
    render(<SkipCard skip={mockSkip} isSelected={false} onSelect={mockOnSelect} />);

    // Check if basic information is displayed
    expect(screen.getByText('4 Yard Skip')).toBeInTheDocument();
    expect(screen.getByText('£200')).toBeInTheDocument(); // Rounded price
    expect(screen.getByText('+ 20% VAT')).toBeInTheDocument();
    expect(screen.getByText('+£25 transport fee')).toBeInTheDocument();
    expect(screen.getByText('+£15 per tonne')).toBeInTheDocument();
    expect(screen.getByText('7 day hire period')).toBeInTheDocument();
    expect(screen.getByText('Road placement allowed')).toBeInTheDocument();
    expect(screen.getByText('Heavy waste accepted')).toBeInTheDocument();
    expect(screen.getByText('Select This Skip')).toBeInTheDocument();
  });

  it('calls onSelect when clicked', () => {
    render(<SkipCard skip={mockSkip} isSelected={false} onSelect={mockOnSelect} />);
    
    fireEvent.click(screen.getByText('Select This Skip'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockSkip.id);
  });

  it('displays selected state correctly', () => {
    render(<SkipCard skip={mockSkip} isSelected={true} onSelect={mockOnSelect} />);
    
    expect(screen.getByText('Selected')).toBeInTheDocument();
    const button = screen.getByText('Selected');
    expect(button).toHaveClass('bg-blue-700');
  });

  it('displays correct information for skip not allowed on road', () => {
    const skipNotAllowedOnRoad = { ...mockSkip, allowed_on_road: false };
    render(<SkipCard skip={skipNotAllowedOnRoad} isSelected={false} onSelect={mockOnSelect} />);
    
    expect(screen.getByText('Not allowed on road')).toBeInTheDocument();
  });

  it('displays correct information for standard waste only', () => {
    const standardWasteSkip = { ...mockSkip, allows_heavy_waste: false };
    render(<SkipCard skip={standardWasteSkip} isSelected={false} onSelect={mockOnSelect} />);
    
    expect(screen.getByText('Standard waste only')).toBeInTheDocument();
  });

  it('displays free delivery when transport cost is null', () => {
    const freeDeliverySkip = { ...mockSkip, transport_cost: null };
    render(<SkipCard skip={freeDeliverySkip} isSelected={false} onSelect={mockOnSelect} />);
    
    expect(screen.getByText('Free delivery')).toBeInTheDocument();
  });
}); 