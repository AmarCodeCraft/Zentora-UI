import React, { useState } from 'react';
import { Check, X, AlertTriangle, ShieldAlert } from 'lucide-react';

const ModerationDashboardDemo: React.FC = () => {
  const [flaggedComments, setFlaggedComments] = useState([
    {
      id: 1,
      author: 'Anonymous User',
      content: 'This product is terrible and the company is ***************.',
      reason: 'Profanity',
      timestamp: '5 min ago',
      status: 'pending'
    },
    {
      id: 2,
      author: 'New User',
      content: 'Check out my website: https://spam-site.example.com',
      reason: 'Suspicious link',
      timestamp: '15 min ago',
      status: 'pending'
    },
    {
      id: 3,
      author: 'User123',
      content: 'Anyone interested in buying some discount products? DM me.',
      reason: 'Potential spam',
      timestamp: '45 min ago',
      status: 'pending'
    }
  ]);

  const handleApprove = (id: number) => {
    setFlaggedComments(prev => 
      prev.map(comment => 
        comment.id === id ? { ...comment, status: 'approved' } : comment
      )
    );
  };

  const handleReject = (id: number) => {
    setFlaggedComments(prev => 
      prev.map(comment => 
        comment.id === id ? { ...comment, status: 'rejected' } : comment
      )
    );
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'approved':
        return <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Approved</span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-800 text-xs px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Rejected</span>;
      default:
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>;
    }
  };

  const getReasonIcon = (reason: string) => {
    switch(reason.toLowerCase()) {
      case 'profanity':
        return <AlertTriangle size={16} className="text-yellow-500" />;
      case 'suspicious link':
        return <ShieldAlert size={16} className="text-red-500" />;
      case 'potential spam':
        return <AlertTriangle size={16} className="text-orange-500" />;
      default:
        return <AlertTriangle size={16} className="text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Moderation Dashboard</h3>
      
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Comment</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Reason</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {flaggedComments.map(comment => (
              <tr key={comment.id} className="bg-white dark:bg-gray-800">
                <td className="px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{comment.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{comment.content}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{comment.timestamp}</div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    {getReasonIcon(comment.reason)}
                    <span className="ml-1.5 text-sm text-gray-700 dark:text-gray-300">{comment.reason}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  {getStatusBadge(comment.status)}
                </td>
                <td className="px-4 py-3 text-right">
                  {comment.status === 'pending' && (
                    <div className="flex justify-end space-x-2">
                      <button 
                        onClick={() => handleApprove(comment.id)}
                        className="p-1 bg-green-50 text-green-700 rounded hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800 transition"
                        title="Approve"
                      >
                        <Check size={16} />
                      </button>
                      <button 
                        onClick={() => handleReject(comment.id)}
                        className="p-1 bg-red-50 text-red-700 rounded hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 transition"
                        title="Reject"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModerationDashboardDemo;