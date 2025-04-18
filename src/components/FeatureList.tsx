import React from "react";
import { Check, X } from "lucide-react";

export interface Feature {
  text: string;
  included: boolean;
}

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  className = "",
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          {feature.included ? (
            <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
          ) : (
            <X size={16} className="text-gray-400 mr-2 flex-shrink-0" />
          )}
          <span
            className={`text-sm ${
              feature.included
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
