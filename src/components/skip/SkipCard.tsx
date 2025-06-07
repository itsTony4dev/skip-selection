import type { Skip } from '../../types/skip';
import { Calendar, CheckCircle, DollarSign } from 'lucide-react';
import skipIcon from '../../assets/skip.svg';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {

  return (
    <div
      className={`relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden h-[500px] flex flex-col border border-gray-100 dark:border-gray-800`}
      onClick={() => onSelect(skip.id)}
    >
      {/* Skip Image/Icon Area with Bubble Overlay */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-44 flex items-center justify-center relative overflow-hidden">
        <img src={skipIcon} alt="Skip icon" className="h-20 w-28 mx-auto opacity-90" />
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
        {/* Bubble Overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 px-6 py-2 rounded-full bg-white bg-opacity-80 shadow text-center flex flex-col items-center">
          <span className="text-xl font-bold text-blue-700">{skip.size} Yard Skip</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Price and Badges Block */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              £{Math.round(skip.price_before_vat)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-300">
              + {skip.vat}% VAT
            </div>
          </div>
          {/* Transport Cost Badge */}
          {skip.transport_cost !== null ? (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium text-xs inline-block">
              +£{skip.transport_cost} transport fee
            </span>
          ) : (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium text-xs inline-flex items-center gap-1">
              <CheckCircle className="inline h-4 w-4" /> Free delivery
            </span>
          )}
          {/* Per Tonne Cost Badge */}
          {skip.per_tonne_cost !== null && (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium text-xs inline-block">
              +£{skip.per_tonne_cost} per tonne
            </span>
          )}
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            <span className="text-sm text-gray-700 dark:text-gray-200">{skip.hire_period_days} day hire period</span>
          </div>
          {skip.allowed_on_road ? (
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 bg-green-100 rounded-full p-1" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Road placement allowed</span>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-100">
                <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">Not allowed on road</span>
            </div>
          )}
          <div className="flex items-center space-x-3">
            <DollarSign className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {skip.allows_heavy_waste ? 'Heavy waste accepted' : 'Standard waste only'}
            </span>
          </div>
        </div>

        {/* Select Button */}
        <button
          className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 mt-auto
            ${isSelected
              ? 'bg-blue-700 text-white shadow-lg border-blue-700 dark:bg-gradient-to-r dark:from-blue-700 dark:to-blue-900 dark:text-white dark:border-blue-500'
              : 'bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-blue-50 hover:text-blue-800 hover:shadow dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-gray-800 dark:text-white dark:border-gray-400 hover:dark:from-gray-600 hover:dark:to-gray-800 hover:dark:shadow-lg'
            }
          `}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};
