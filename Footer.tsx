import React from 'react';
import { Zap, Twitter, Linkedin, Github, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A30] pt-16 relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0A1045] to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-8 w-8 text-[#00FFFF]" />
              <span className="text-xl font-bold tracking-tighter text-white">3Z & Co.</span>
            </div>
            <p className="text-white/70 mb-6">
              Empowering businesses through intelligent automation and AI-driven solutions that transform operations and drive growth.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                <Github className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-white/80" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-[#00FFFF] transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#00FFFF] transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-[#00FFFF] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#00FFFF] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-[#00FFFF] transition-colors">Customer Relations</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#00FFFF] transition-colors">Lead Capture</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#00FFFF] transition-colors">Support Tickets</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#00FFFF] transition-colors">Appointment Setting</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#00FFFF] transition-colors">Social Media</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-white/70">100 Innovation Drive, Suite 500</li>
              <li className="text-white/70">San Francisco, CA 94158</li>
              <li><a href="mailto:info@3zco.com" className="text-white/70 hover:text-[#00FFFF] transition-colors">info@3zco.com</a></li>
              <li><a href="tel:+15551234567" className="text-white/70 hover:text-[#00FFFF] transition-colors">(555) 123-4567</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 3Z & Co. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white/80" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;