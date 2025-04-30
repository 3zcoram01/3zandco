import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050A30]/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 text-white">
              <Zap className="h-8 w-8 text-[#00FFFF]" />
              <span className="text-xl font-bold tracking-tighter">3Z & Co.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#blog" className="text-white/80 hover:text-white transition-colors">Insights</a>
            <a href="#contact" className="bg-[#6E44FF] hover:bg-[#5933FF] text-white py-2 px-4 rounded-md transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-[#050A30]/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-white py-2 transition-colors"
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-white py-2 transition-colors"
          >
            About
          </a>
          <a 
            href="#blog" 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-white py-2 transition-colors"
          >
            Insights
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="bg-[#6E44FF] hover:bg-[#5933FF] text-white py-2 px-4 rounded-md inline-block transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;