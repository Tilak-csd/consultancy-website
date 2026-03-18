import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      submenu: ['Study Abroad', 'Visa Guidance', 'Test Prep', 'Scholarships'] 
    },
    { 
      name: 'Destinations', 
      submenu: ['Japan'] 
    },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {/* Navbar Container */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <div className="flex items-center z-[110]">
              <img 
                src="./global-education-consultancy-logo.png" 
                alt="Logo" 
                className='h-10 md:h-12 w-auto object-contain'
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="cursor-pointer flex items-center text-[#000033] hover:text-[#0000FF] font-semibold transition-colors py-2">
                    {link.name}
                    {link.submenu && <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />}
                  </button>

                  {link.submenu && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2">
                      {link.submenu.map((item) => (
                        <a key={item} href="#" className="block px-5 py-2.5 text-sm text-[#000033] hover:bg-[#00CFFF]/10 hover:text-[#0000FF] transition-colors">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-[#0000FF] text-white px-7 py-2.5 rounded-full font-bold hover:bg-[#000033] transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
                Apply Now
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-[#000033] p-2 z-[110] relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar Content */}
      <div className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-[105] shadow-2xl transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out md:hidden flex flex-col`}>
        
        {/* Sidebar Header with Logo
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
           <img 
            src="./global-education-consultancy-logo.png" 
            alt="Logo" 
            className='h-10 w-auto'
          />
        </div> */}

        {/* Scrollable Links Area */}
        <div className="flex-1 overflow-y-auto mt-5 p-6">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-2">
                <p className="text-[#000033] font-bold text-lg uppercase tracking-wide">
                  {link.name}
                </p>
                {link.submenu ? (
                  <div className="pl-4 space-y-3 border-l-2 border-blue-50">
                    {link.submenu.map(sub => (
                      <a key={sub} href="#" className="block py-1 text-gray-600 hover:text-[#0000FF]">
                        {sub}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a href={link.href} className="block h-2" /> // Spacer for links without submenus
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Footer (CTA) */}
        <div className="p-6 border-t border-gray-100">
          <button className="w-full bg-[#0000FF] text-white py-4 rounded-xl font-bold shadow-lg">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;