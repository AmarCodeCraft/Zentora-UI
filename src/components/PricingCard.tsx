import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  tier: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  isAnnual: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  tier, 
  price, 
  description, 
  features, 
  isPopular = false,
  ctaText,
  isAnnual
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden ${
      isPopular ? 'ring-2 ring-primary dark:ring-primary-light' : 'border border-gray-200 dark:border-gray-700'
    }`}>
      {isPopular && (
        <div className="bg-primary text-white dark:bg-primary-light dark:text-gray-900 py-1.5 px-4 text-xs font-medium text-center">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tier}</h3>
        <div className="flex items-baseline mb-1">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {isAnnual ? price.annually : price.monthly}
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">
            /{isAnnual ? 'year' : 'month'}
          </span>
        </div>
        {isAnnual && (
          <div className="text-sm text-green-600 dark:text-green-400 mb-3">
            Save 20% with annual billing
          </div>
        )}
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`rounded-full p-0.5 ${
                feature.included 
                  ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
              }`}>
                <Check size={16} />
              </span>
              <span className={`ml-2 text-sm ${
                feature.included 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-400 dark:text-gray-500'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={isPopular ? "primary" : "outline"}
          fullWidth
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;