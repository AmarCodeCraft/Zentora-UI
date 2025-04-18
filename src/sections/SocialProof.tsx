import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: "CommentFlow transformed our user engagement overnight. The threaded conversations and moderation tools have helped us build a thriving community around our product.",
      author: {
        name: "Sarah Johnson",
        title: "Head of Product",
        company: "TechCrunch",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
      },
      rating: 5
    },
    {
      quote: "The analytics dashboard has given us insights we never had before. We've been able to identify our power users and tailor our content strategy accordingly.",
      author: {
        name: "David Chen",
        title: "CTO",
        company: "MediaStream",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
      },
      rating: 5
    },
    {
      quote: "Implementation was seamless and our engineering team was impressed with the quality of the documentation. Customer support has been exceptional.",
      author: {
        name: "Michelle Rodriguez",
        title: "Engineering Lead",
        company: "LearnHub",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
      },
      rating: 4
    }
  ];

  const clientLogos = [
    "https://via.placeholder.com/150x50/FFFFFF/808080?text=TechCrunch",
    "https://via.placeholder.com/150x50/FFFFFF/808080?text=MediaStream",
    "https://via.placeholder.com/150x50/FFFFFF/808080?text=LearnHub",
    "https://via.placeholder.com/150x50/FFFFFF/808080?text=FinanceApp",
    "https://via.placeholder.com/150x50/FFFFFF/808080?text=SocialNet"
  ];

  const metrics = [
    {
      label: "Active Users",
      value: "10M+"
    },
    {
      label: "Comments Processed",
      value: "100M+"
    },
    {
      label: "Customer Satisfaction",
      value: "98%"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of companies that rely on CommentFlow to power their community engagement.
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
          {clientLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo} 
              alt="Client Logo" 
              className="h-8 md:h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        {/* Metrics */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-2">
                  {metric.value}
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;