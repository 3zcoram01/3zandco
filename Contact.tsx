import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#050A30] relative">
      {/* Background elements */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-[#6E44FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <div className="h-1 w-20 bg-[#00FFFF] mb-6 rounded-full"></div>
            <p className="text-white/70 text-lg mb-8">
              Contact us today to discuss how our AI automation solutions can help your 
              organization achieve higher efficiency, reduce costs, and drive innovation.
            </p>
            
            <div className="bg-gradient-to-br from-[#0A1045]/80 to-[#050A30]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#6E44FF]/20 flex items-center justify-center mr-4">
                  <div className="w-5 h-5 bg-[#00FFFF] rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Our Office</h4>
                  <p className="text-white/70">100 Innovation Drive, Suite 500, San Francisco, CA 94158</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#6E44FF]/20 flex items-center justify-center mr-4">
                  <div className="w-5 h-5 bg-[#00FFFF] rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Contact Info</h4>
                  <p className="text-white/70">info@3zco.com</p>
                  <p className="text-white/70">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0A1045] to-[#050A30] backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-lg relative z-10">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#6E44FF]/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#00FFFF]/30 rounded-full"></div>
              
              {submitted ? (
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <CheckCircle className="w-16 h-16 text-[#00FFFF] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70 mb-6">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="bg-white/10 border border-white/20 hover:bg-white/20 text-white py-2 px-6 rounded-md transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2 text-sm">
                        Full Name <span className="text-[#00FFFF]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2 text-sm">
                        Email Address <span className="text-[#00FFFF]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-white/70 mb-2 text-sm">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white/70 mb-2 text-sm">
                      Message <span className="text-[#00FFFF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-white/5 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-[#6E44FF] to-[#00FFFF] hover:from-[#5933FF] hover:to-[#00E5E5] text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-all ${
                      loading ? 'opacity-70 cursor-not-allowed' : 'hover:translate-y-[-2px]'
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;