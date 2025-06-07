import React, { useState, useEffect } from 'react';
import { fetchSkips } from '../services/skipService';
import type { Skip } from '../types/skip';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { SkipHero } from '../components/skip/SkipHero';
import { SkipGrid } from '../components/skip/SkipGrid';

const SkipSelectionPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSkips();
  }, []);

  const [postcode] = useState('NR32');
  const [area] = useState('Lowestoft');

  const loadSkips = async () => {
    try {
      setLoading(true);
      const data = await fetchSkips(postcode, area);
      setSkips(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load skip options');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSkip = (id: number) => {
    const skip = skips.find((s) => s.id === id);
    setSelectedSkip(skip || null);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={loadSkips} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Header />
      
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${selectedSkip ? 'pb-6' : ''}`}>
        <SkipHero 
          title={<>Choose Your Perfect <span className="text-blue-600">Skip Size</span></>}
          description="Select the ideal skip size for your project. All skips come with a 14-day hire period and professional delivery service."
        />

        <SkipGrid 
          skips={skips}
          selectedSkipId={selectedSkip?.id || null}
          onSelectSkip={handleSelectSkip}
        />
      </div>

      {/* Sticky Continue Button as Action Bar */}
      <div className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-300 ${selectedSkip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
        <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-blue-900 shadow-2xl border-t border-blue-700/30 dark:border-blue-900/50 py-1">
          {selectedSkip && (
            <p className="text-2xl text-white text-center mb-1">
              Selected: <span className="font-bold">{selectedSkip.size} Yard Skip</span>
            </p>
          )}
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-center gap-4">
            {/* Back Button */}
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-lg border border-blue-200 bg-white text-blue-700 shadow-sm hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 dark:bg-gray-900 dark:text-blue-200 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-blue-500"
              disabled={!selectedSkip}
              aria-disabled={!selectedSkip}
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Back
            </button>
            {/* Continue Button */}
            <button
              className="w-full max-w-xs py-3 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 bg-white text-blue-700 shadow hover:bg-blue-100 hover:text-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-blue-800 dark:shadow dark:hover:shadow-blue-900"
              disabled={!selectedSkip}
              aria-disabled={!selectedSkip}
            >
              Continue to Permit Check
            </button>
          </div>
          {/* Footer Text within Sticky Bar */}
          <div className="text-center px-4 pt-1 pb-2 text-sm text-white text-opacity-80 dark:text-gray-200 dark:text-opacity-80">
            Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SkipSelectionPage;
