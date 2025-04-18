import React from 'react';
import { Shield, RefreshCw, BarChartBig, Palette, Code } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
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

const BenefitsGrid: React.FC = () => {
  const benefits: BenefitCardProps[] = [
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with GDPR, CCPA, and SOC 2 Type II standards to keep your data secure."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Real-time Sync",
      description: "Instant updates across all devices with our WebSocket implementation, ensuring conversations flow naturally."
    },
    {
      icon: <Shield size={24} />,
      title: "Moderation Tools",
      description: "AI-powered content filtering, user reputation systems, and moderation queues to maintain quality discussions."
    },
    {
      icon: <BarChartBig size={24} />,
      title: "Analytics Dashboard",
      description: "Comprehensive metrics on engagement, sentiment analysis, and user participation to help optimize your platform."
    },
    {
      icon: <Palette size={24} />,
      title: "Custom Theming",
      description: "Pixel-perfect design customization to match your brand identity with our theming API and visual editor."
    },
    {
      icon: <Code size={24} />,
      title: "API Access",
      description: "Full access to our RESTful and GraphQL APIs with comprehensive documentation and client libraries."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built for Engagement and Growth
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            CommentFlow provides everything you need to nurture vibrant communities while maintaining control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;