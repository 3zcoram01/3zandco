import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "3Z & Co. transformed our customer service operations with their AI automation solution. We've seen a 40% reduction in response times and significantly improved customer satisfaction scores.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      text: "Implementing 3Z & Co.'s predictive analytics system has given us insights we never thought possible. Their team's expertise and support throughout the process was exceptional.",
      author: "David Chen",
      position: "COO, Nexus Group",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      text: "The custom AI solution developed by 3Z & Co. helped us optimize our supply chain, resulting in 28% cost reduction and improved delivery times. Their approach to understanding our business was refreshing.",
      author: "Michelle Rodriguez",
      position: "VP of Operations, GlobalTrade",
      image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1045] to-[#050A30] relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#050A30] to-transparent"></div>
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-[#6E44FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <div className="h-1 w-20 bg-[#00FFFF] mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="relative bg-gradient-to-br from-[#0A1045]/80 to-[#050A30]/80 backdrop-blur-md rounded-xl border border-white/10 p-8 md:p-12 shadow-lg">
            <div className="absolute -top-6 -left-6">
              <div className="bg-[#6E44FF] p-3 rounded-full shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}
              >
                <div className="mb-8">
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed italic">
                    "{testimonials[current].text}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00FFFF]">
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonials[current].author}</h4>
                    <p className="text-white/60 text-sm">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute -bottom-6 right-8 flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="bg-[#0A1045] border border-white/10 p-2 rounded-full hover:bg-[#6E44FF]/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-[#0A1045] border border-white/10 p-2 rounded-full hover:bg-[#6E44FF]/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-[#00FFFF] w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;