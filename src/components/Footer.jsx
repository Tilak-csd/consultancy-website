import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const testPrep = [
    { name: 'IELTS', href: '#' },
    { name: 'JLPT', href: '#' },
    { name: 'NAT', href: '#' },
  ];

  return (
    <footer className="bg-[#000033] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            {/* Logo Image Placeholder */}
            <div className="flex items-center">
              <img 
                src="/global-education-consultancy-logo.png" 
                alt="Global Study Consultancy" 
                className="h-15 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading educational consultancy in Nepal, specializing in Japanese education and visa processing. Your trusted partner for a successful future abroad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#0000FF] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#00CFFF] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#0000FF] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Link</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#00CFFF] text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Test Preparation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Test Preparation</h4>
            <ul className="space-y-3">
              {testPrep.map((test) => (
                <li key={test.name}>
                  <a href={test.href} className="text-gray-400 hover:text-[#00CFFF] text-sm transition-colors">
                    {test.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#00CFFF] shrink-0 mt-0.5" />
                <span>Putalisadak-30, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#00CFFF] shrink-0" />
                <div className="flex gap-1">
                  <a href="tel:015342969" className="hover:text-white transition-colors tracking-wide">+977 01-5342969, </a>
                  <a href="tel:014242969" className="hover:text-white transition-colors tracking-wide">01-4242969</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#00CFFF] shrink-0" />
                <a href="mailto:info@globalstudyconsultancy.com" className="hover:text-white transition-colors ">
                  info@globalstudyconsultancy.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em]">
          <p>© {currentYear} Global Study Consultancy.</p>
          <p className="flex items-center gap-1">
            Developed by 
            <a 
              href="https://unifiedsolutions.com.np/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00CFFF] hover:text-white transition-colors flex items-center gap-1"
            >
              Unified Solutions <ExternalLink size={10} />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;