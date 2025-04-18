import React, { useState } from 'react';
import { Bold, Italic, List, Link, Image, Eye, Edit2 } from 'lucide-react';
import Button from './Button';

const MarkdownEditorDemo: React.FC = () => {
  const [markdownText, setMarkdownText] = useState("**Hello world!**\n\nThis is a markdown editor with preview. Try editing this text!\n\n- Feature one\n- Feature two\n- Feature three");
  const [isPreview, setIsPreview] = useState(false);

  const insertMarkdown = (syntax: string) => {
    setMarkdownText(prev => prev + syntax);
  };

  // Simple markdown to HTML conversion (just for demo)
  const renderMarkdown = (text: string) => {
    let html = text;
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Lists
    html = html.replace(/^- (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
    
    // Line breaks
    html = html.replace(/\n/g, '<br>');
    
    return html;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Markdown Editor</h3>
      
      <div className="flex space-x-2 mb-3">
        <Button 
          variant={!isPreview ? "primary" : "outline"} 
          size="sm" 
          onClick={() => setIsPreview(false)}
          className="flex items-center"
        >
          <Edit2 size={16} className="mr-1" /> Edit
        </Button>
        <Button 
          variant={isPreview ? "primary" : "outline"} 
          size="sm" 
          onClick={() => setIsPreview(true)}
          className="flex items-center"
        >
          <Eye size={16} className="mr-1" /> Preview
        </Button>
      </div>
      
      {!isPreview ? (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-900 p-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => insertMarkdown("**bold text**")}
                className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                title="Bold"
              >
                <Bold size={16} />
              </button>
              <button 
                onClick={() => insertMarkdown("*italic text*")}
                className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                title="Italic"
              >
                <Italic size={16} />
              </button>
              <button 
                onClick={() => insertMarkdown("\n- List item")}
                className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                title="List"
              >
                <List size={16} />
              </button>
              <button 
                onClick={() => insertMarkdown("[link text](https://example.com)")}
                className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                title="Link"
              >
                <Link size={16} />
              </button>
              <button 
                onClick={() => insertMarkdown("![alt text](image-url.jpg)")}
                className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                title="Image"
              >
                <Image size={16} />
              </button>
            </div>
          </div>
          <textarea
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
            className="w-full p-4 h-48 focus:outline-none focus:ring-0 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          />
        </div>
      ) : (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-48 overflow-auto prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownText) }} />
        </div>
      )}
    </div>
  );
};

export default MarkdownEditorDemo;