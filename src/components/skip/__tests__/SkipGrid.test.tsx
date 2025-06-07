import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkipGrid } from '../SkipGrid';
import type { Skip } from '../../../types/skip';

// Mock the SkipCard component
vi.mock('../SkipCard', () => ({
  SkipCard: ({ skip, isSelected, onSelect }: any) => (
    <div data-testid={`skip-card-${skip.id}`} data-selected={isSelected} onClick={() => onSelect(skip.id)}>
      Mock Skip Card {skip.size} Yard
    </div>
  ),
}));

describe('SkipGrid', () => {
  const mockSkips: Skip[] = [
    {
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
    },
    {
      id: 2,
      size: 6,
      price_before_vat: 249.99,
      vat: 20,
      transport_cost: null,
      per_tonne_cost: null,
      hire_period_days: 7,
      allowed_on_road: false,
      allows_heavy_waste: false,
      postcode: 'SW1A 1AA',
      area: 'London',
      forbidden: false,
      created_at: '2024-03-20T00:00:00Z',
      updated_at: '2024-03-20T00:00:00Z'
    }
  ];

  const mockOnSelectSkip = vi.fn();

  it('renders all skip cards', () => {
    render(
      <SkipGrid
        skips={mockSkips}
        selectedSkipId={null}
        onSelectSkip={mockOnSelectSkip}
      />
    );

    expect(screen.getByTestId('skip-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('skip-card-2')).toBeInTheDocument();
  });

  it('passes correct selected state to skip cards', () => {
    render(
      <SkipGrid
        skips={mockSkips}
        selectedSkipId={1}
        onSelectSkip={mockOnSelectSkip}
      />
    );

    const skipCard1 = screen.getByTestId('skip-card-1');
    const skipCard2 = screen.getByTestId('skip-card-2');

    expect(skipCard1).toHaveAttribute('data-selected', 'true');
    expect(skipCard2).toHaveAttribute('data-selected', 'false');
  });

  it('renders correct number of skip cards', () => {
    render(
      <SkipGrid
        skips={mockSkips}
        selectedSkipId={null}
        onSelectSkip={mockOnSelectSkip}
      />
    );

    const skipCards = screen.getAllByTestId(/^skip-card-/);
    expect(skipCards).toHaveLength(mockSkips.length);
  });

  it('passes correct skip data to each card', () => {
    render(
      <SkipGrid
        skips={mockSkips}
        selectedSkipId={null}
        onSelectSkip={mockOnSelectSkip}
      />
    );

    expect(screen.getByText('Mock Skip Card 4 Yard')).toBeInTheDocument();
    expect(screen.getByText('Mock Skip Card 6 Yard')).toBeInTheDocument();
  });
}); 