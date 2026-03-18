import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center group cursor-pointer">
            <img src="./global-education-consultancy-logo.png" alt="Global Education Consultancy" 
            className='h-15'/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
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
            <button className="cursor-pointer bg-[#0000FF] text-white px-7 py-2.5 rounded-full font-bold hover:bg-[#000033] transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
              Apply Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#000033] p-2">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full bg-white z-[60] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="p-6">
          <div className="flex justify-end mb-8"><X onClick={() => setIsOpen(false)} size={32}/></div>
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-4">
                <p className="text-[#000033] font-bold text-xl mb-3">{link.name}</p>
                {link.submenu?.map(sub => (
                  <a key={sub} href="#" className="block py-2 text-gray-500 pl-4">{sub}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;