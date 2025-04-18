import React from 'react';
import CommentThreadDemo from '../components/CommentThreadDemo';
import MarkdownEditorDemo from '../components/MarkdownEditorDemo';
import ModerationDashboardDemo from '../components/ModerationDashboardDemo';

const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-light to-white dark:from-dark dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features That Scale
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience our interactive demos to see how CommentFlow can transform user engagement on your platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transform transition-all duration-300 hover:scale-105">
            <CommentThreadDemo />
          </div>
          
          <div className="transform transition-all duration-300 hover:scale-105">
            <MarkdownEditorDemo />
          </div>
          
          <div className="transform transition-all duration-300 hover:scale-105">
            <ModerationDashboardDemo />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            All components are fully customizable to match your brand and technical needs
          </p>
          <div className="relative inline-block">
            <a 
              href="#pricing" 
              className="text-primary dark:text-primary-light font-medium hover:underline"
            >
              See Pricing for All Features
            </a>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;