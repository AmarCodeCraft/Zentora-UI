import React from 'react';
import { Twitter, Github, Send } from 'lucide-react';
import Button from '../components/Button';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    alert('Thanks for subscribing!');
  };
  
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Components</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Usage</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Examples</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Component Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Examples</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Templates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">GitHub Discussions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Discord</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contributing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Code of Conduct</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-300 mb-4">Get the latest updates and news directly to your inbox.</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button variant="primary" type="submit" className="flex items-center">
                  <Send size={16} className="mr-2" /> Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">Zentora </span>
            <p className="text-gray-400 mt-2">© {new Date().getFullYear()} Zentora  UI. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;