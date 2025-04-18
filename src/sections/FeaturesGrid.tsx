import React from 'react';
import { Zap, Palette, Shield, Code, Sparkles, Box } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
      <div className="rounded-full w-12 h-12 bg-primary-light dark:bg-primary-dark bg-opacity-20 dark:bg-opacity-30 flex items-center justify-center text-primary dark:text-primary-light mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const FeaturesGrid: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Optimized for performance with zero unnecessary dependencies and minimal runtime overhead."
    },
    {
      icon: <Palette size={24} />,
      title: "Customizable",
      description: "Easily customize components with Tailwind CSS or override our default styles to match your brand."
    },
    {
      icon: <Shield size={24} />,
      title: "Type Safe",
      description: "Built with TypeScript for better developer experience and catch errors before they hit production."
    },
    {
      icon: <Code size={24} />,
      title: "Developer First",
      description: "Comprehensive documentation, TypeScript support, and intuitive APIs make development a breeze."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Modern Design",
      description: "Beautiful, modern components that follow the latest design trends and best practices."
    },
    {
      icon: <Box size={24} />,
      title: "Composable",
      description: "Components are built to work together seamlessly while maintaining flexibility and independence."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built for Modern Development
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to build beautiful React applications, faster than ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;