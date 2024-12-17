import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              Join <Send size={18} />
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center text-teal-600 font-medium">
          Thank you! We'll keep you updated about the program.
        </div>
      )}
    </div>
  );
}