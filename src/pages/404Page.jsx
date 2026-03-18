import React from 'react';
import { Home, MessageCircle, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-md w-full text-center">
        
        {/* Visual Element */}
        <div className="relative mb-10">
          <h1 className="text-[120px] md:text-[150px] font-black text-[#000033]/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#0000FF] font-bold text-2xl md:text-3xl tracking-tight bg-white px-4">
              Oops! Page Lost
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-[#000033] text-2xl md:text-3xl font-extrabold mb-4">
          Looking for your <span className="text-[#00CFFF]">Future?</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track to Japan.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="inline-flex items-center justify-center gap-2 bg-[#0000FF] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-[#000033] transition-all group"
          >
            <Home size={18} />
            Back to Home
          </a>
          
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-100 text-[#000033] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
          >
            <MessageCircle size={18} className="text-[#00CFFF]" />
            Contact Support
          </a>
        </div>

        {/* Subtle Footer Link */}
        <div className="mt-16">
          <button 
            onClick={() => window.history.back()}
            className="text-xs font-bold text-[#000033]/40 uppercase tracking-[0.2em] hover:text-[#0000FF] transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowLeft size={14} />
            Go to Previous Page
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;