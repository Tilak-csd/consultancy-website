import React from 'react';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, currentPage }) => {
  return (
    <div className="relative bg-[#000033] py-12 md:py-16 overflow-hidden">
      {/* Subtle Background Graphic (Japanese Wave Pattern Inspiration) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-20 w-64 h-64 rounded-full border-[20px] border-[#00CFFF]"></div>
        <div className="absolute right-20 bottom-0 w-32 h-32 rounded-full bg-[#0000FF]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Page Title */}
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              {title}
            </h1>
            <div className="w-12 h-1 bg-[#00CFFF] mt-3 rounded-full"></div>
          </div>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest">
            <a href="/" className="text-gray-400 hover:text-[#00CFFF] transition-colors">
              Home
            </a>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-[#00CFFF]">{currentPage}</span>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default PageHero;