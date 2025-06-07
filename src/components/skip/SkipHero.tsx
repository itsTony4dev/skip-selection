import type { ReactNode } from 'react';

interface SkipHeroProps {
  title: ReactNode;
  description: string;
}

export const SkipHero: React.FC<SkipHeroProps> = ({ title, description }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
      {description}
    </p>
  </div>
);
