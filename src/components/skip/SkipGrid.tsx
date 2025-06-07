import type { Skip } from '../../types/skip';
import { SkipCard } from './SkipCard';

interface SkipGridProps {
  skips: Skip[];
  selectedSkipId: number | null;
  onSelectSkip: (id: number) => void;
}

export const SkipGrid: React.FC<SkipGridProps> = ({ skips, selectedSkipId, onSelectSkip }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {skips.map((skip) => (
      <SkipCard
        key={skip.id}
        skip={skip}
        isSelected={selectedSkipId === skip.id}
        onSelect={onSelectSkip}
      />
    ))}
  </div>
);
