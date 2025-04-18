import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, rating }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            size={18}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <img 
          src={author.avatar} 
          alt={author.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{author.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{author.title}, {author.company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;