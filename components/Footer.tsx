import React from 'react';
import { MY_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} {MY_NAME}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
            Built with React, Tailwind CSS & AI Integration
        </p>
      </div>
    </footer>
  );
};