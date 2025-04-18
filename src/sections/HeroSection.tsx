import React from 'react';
import Button from '../components/Button';
import { Box, Layers, Palette } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                Beautiful React Components for Modern Applications
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                A comprehensive suite of pre-built components that help you build stunning user interfaces in record time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  View Components
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 bg-primary/10 rounded-lg">
                    <Box className="text-primary" />
                    <span className="font-medium">Components</span>
                  </div>
                  <div className="flex items-center space-x-2 p-4 bg-secondary/10 rounded-lg">
                    <Layers className="text-secondary" />
                    <span className="font-medium">Layouts</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 bg-green-100 rounded-lg">
                    <Palette className="text-green-600" />
                    <span className="font-medium">Themes</span>
                  </div>
                  <Button variant="primary" fullWidth>
                    Try Now
                  </Button>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-primary-light to-primary opacity-20 rounded-full"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;