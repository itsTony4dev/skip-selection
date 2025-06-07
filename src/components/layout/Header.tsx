import { MapPin, Package2, Truck, ClipboardCheck, Calendar, CreditCard, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../App';

const steps = [
  { icon: MapPin, label: 'Postcode', status: 'completed' },
  { icon: Package2, label: 'Waste Type', status: 'completed' },
  { icon: Truck, label: 'Select Skip', status: 'current' },
  { icon: ClipboardCheck, label: 'Permit Check', status: 'upcoming' },
  { icon: Calendar, label: 'Choose Date', status: 'upcoming' },
  { icon: CreditCard, label: 'Payment', status: 'upcoming' }
] as const;

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-center relative">
        <nav className="flex justify-center flex-1 mt-4">
          <ol className="flex items-center gap-2">
            {steps.map((step, index) => (
              <li key={step.label} className="flex items-center">
                {index > 0 && (
                  <div className="hidden sm:block w-12 h-[2px] bg-gray-200 dark:bg-gray-700 mx-2" />
                )}
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`p-2 rounded-full ${
                      step.status === 'current'
                        ? 'bg-blue-600 text-white'
                        : step.status === 'completed'
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500'
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`hidden sm:block text-xs ${
                      step.status === 'current'
                        ? 'text-blue-600 font-medium'
                        : step.status === 'completed'
                        ? 'text-gray-600 dark:text-gray-300'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="absolute right-2 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow"
        >
          {theme === 'dark' ? (
            <Sun className="h-6 w-6 text-yellow-400 transition-transform rotate-0" />
          ) : (
            <Moon className="h-6 w-6 text-gray-700 transition-transform rotate-0" />
          )}
        </button>
      </div>
    </div>
  );
};
