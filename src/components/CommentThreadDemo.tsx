import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ThumbsUp, MessageSquare } from 'lucide-react';

interface CommentProps {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timeAgo: string;
  likes: number;
  replies?: CommentProps[];
}

const CommentThreadDemo: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>([
    {
      id: '1',
      author: {
        name: 'Michael Scott',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
      },
      content: "This commenting system is fantastic! We've been looking for something like this for our platform.",
      timeAgo: '3 hours ago',
      likes: 15,
      replies: [
        {
          id: '2',
          author: {
            name: 'Jim Halpert',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
          },
          content: 'Agreed! The threading is intuitive and the real-time updates are impressive.',
          timeAgo: '2 hours ago',
          likes: 8,
          replies: [
            {
              id: '3',
              author: {
                name: 'Pam Beesly',
                avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
              },
              content: 'And the customization options are exactly what we needed!',
              timeAgo: '1 hour ago',
              likes: 4
            }
          ]
        }
      ]
    }
  ]);

  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({
    '1': true,
    '2': true,
    '3': true
  });

  const toggleComment = (id: string) => {
    setExpandedComments(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleLike = (id: string) => {
    // Recursive function to update likes
    const updateLikes = (items: CommentProps[]): CommentProps[] => {
      return items.map(item => {
        if (item.id === id) {
          return { ...item, likes: item.likes + 1 };
        }
        if (item.replies) {
          return { ...item, replies: updateLikes(item.replies) };
        }
        return item;
      });
    };
    
    setComments(updateLikes(comments));
  };

  const renderComment = (comment: CommentProps, depth = 0) => {
    const isExpanded = expandedComments[comment.id];
    
    return (
      <div key={comment.id} className={`mt-${depth > 0 ? 4 : 0} ${depth > 0 ? 'ml-6 pl-4 border-l-2 border-gray-200 dark:border-gray-700' : ''}`}>
        <div className="flex items-start">
          <img 
            src={comment.author.avatar} 
            alt={`${comment.author.name}'s avatar`}
            className="w-10 h-10 rounded-full mr-3" 
          />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <h4 className="font-medium text-gray-900 dark:text-white mr-2">{comment.author.name}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{comment.timeAgo}</span>
              </div>
              
              {comment.replies && comment.replies.length > 0 && (
                <button 
                  onClick={() => toggleComment(comment.id)}
                  className="text-gray-500 hover:text-primary transition"
                  aria-label={isExpanded ? "Collapse comment" : "Expand comment"}
                >
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              )}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {comment.content}
            </p>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
              <button 
                className="flex items-center hover:text-primary transition"
                onClick={() => handleLike(comment.id)}
              >
                <ThumbsUp size={14} className="mr-1" /> {comment.likes}
              </button>
              <button className="flex items-center hover:text-primary transition">
                <MessageSquare size={14} className="mr-1" /> Reply
              </button>
            </div>
            
            {comment.replies && comment.replies.length > 0 && isExpanded && (
              <div className="mt-2">
                {comment.replies.map(reply => renderComment(reply, depth + 1))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Threaded Comments</h3>
      <div className="space-y-6">
        {comments.map(comment => renderComment(comment))}
      </div>
    </div>
  );
};

export default CommentThreadDemo;