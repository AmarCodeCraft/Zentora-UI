import React, { useState } from "react";
import Button from "../components/Button";
import FeatureList, { Feature } from "../components/FeatureList";
import { ArrowRight } from "lucide-react";

// Local component types
interface PricingTier {
  name: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: Feature[];
  ctaText: string;
  isPopular?: boolean;
  accentColor?: string;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: {
        monthly: "$39",
        annually: "$29",
      },
      description: "Perfect for small projects and individual developers",
      features: [
        { text: "Core component library", included: true },
        { text: "Basic theme customization", included: true },
        { text: "Community support", included: true },
        { text: "TypeScript support", included: true },
        { text: "Advanced customization", included: false },
        { text: "Premium components", included: false },
        { text: "Priority support", included: false },
        { text: "Team collaboration", included: false },
      ],
      ctaText: "Get Started",
      accentColor: "bg-gradient-to-r from-blue-400 to-indigo-500",
    },
    {
      name: "Pro",
      price: {
        monthly: "$89",
        annually: "$69",
      },
      description: "Ideal for professional projects and growing teams",
      features: [
        { text: "Core component library", included: true },
        { text: "Advanced theme customization", included: true },
        { text: "Email support", included: true },
        { text: "TypeScript support", included: true },
        { text: "Premium components", included: true },
        { text: "Design system tools", included: true },
        { text: "Regular updates", included: true },
        { text: "Team collaboration", included: false },
      ],
      isPopular: true,
      ctaText: "Get Started",
      accentColor: "bg-gradient-to-r from-violet-500 to-purple-600",
    },
    {
      name: "Enterprise",
      price: {
        monthly: "$199",
        annually: "$159",
      },
      description: "For large teams and complex enterprise applications",
      features: [
        { text: "Complete component library", included: true },
        { text: "Custom theme builder", included: true },
        { text: "Priority support", included: true },
        { text: "TypeScript support", included: true },
        { text: "Premium components", included: true },
        { text: "Design system integration", included: true },
        { text: "Custom component development", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      ctaText: "Contact Sales",
      accentColor: "bg-gradient-to-r from-indigo-600 to-blue-700",
    },
  ];

  const PricingCard: React.FC<{ tier: PricingTier; isAnnual: boolean }> = ({
    tier,
    isAnnual,
  }) => (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] ${
        tier.isPopular
          ? "border-2 border-purple-500"
          : "border border-gray-200 dark:border-gray-700"
      }`}
    >
      {tier.isPopular && (
        <div className="absolute top-0 right-0 left-0">
          <div className="bg-purple-500 text-white text-xs text-center py-1 px-2 font-medium">
            MOST POPULAR
          </div>
        </div>
      )}

      <div className={`h-2 w-full ${tier.accentColor}`}></div>

      <div className="p-6 pt-8">
        <h3
          className={`text-xl font-bold mb-1 ${
            tier.isPopular
              ? "text-purple-600 dark:text-purple-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {tier.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {tier.description}
        </p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            {isAnnual ? tier.price.annually : tier.price.monthly}
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
          {isAnnual && (
            <p className="text-xs text-green-600 mt-1">
              Save 20% with annual billing
            </p>
          )}
        </div>

        <FeatureList features={tier.features} className="mb-6" />

        <Button
          variant={tier.isPopular ? "primary" : "outline"}
          className={`w-full flex items-center justify-center ${
            tier.isPopular ? "bg-purple-600 hover:bg-purple-700" : ""
          }`}
        >
          {tier.ctaText}
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing for Zentora UI
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Choose the perfect plan for your project needs. All plans include
            access to our core component library.
          </p>

          <div className="inline-flex items-center bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                !isAnnual
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                isAnnual
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Not sure which plan is right for you?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Try Zentora UI free for 14 days. No credit card required. Cancel
            anytime.
          </p>
          <Button variant="secondary">Schedule a Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
