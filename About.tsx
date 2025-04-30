import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "AI-driven solutions tailored to your specific business needs",
    "Seamless integration with your existing systems and workflows",
    "Continuous optimization through machine learning",
    "Scalable technologies that grow with your business",
    "Expert guidance from industry specialists"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#050A30] to-[#0A1045] relative">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-40 w-72 h-72 bg-[#6E44FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-40 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#6E44FF]/20">
              <img 
                src="https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Technology Team" 
                className="w-full h-auto rounded-xl z-10 relative"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050A30]/40 to-transparent"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                <div className="w-5 h-5 rounded-full bg-[#00FFFF]"></div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                <div className="h-1 w-12 bg-[#6E44FF] rounded-full mb-2"></div>
                <div className="h-1 w-8 bg-[#FF44A4] rounded-full"></div>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-10 -right-10 md:right-5 bg-[#0A1045]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg max-w-[200px]">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-[#00FFFF] mr-2"></div>
                <div className="text-white/90 text-sm font-medium">AI Performance</div>
              </div>
              <div className="space-y-2">
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-[#00FFFF] rounded-full"></div>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-[#6E44FF] rounded-full"></div>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-[#FF44A4] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Transforming Businesses with Intelligent Automation</h2>
            <div className="h-1 w-20 bg-[#00FFFF] rounded-full"></div>
            <p className="text-white/70 text-lg">
              At 3Z & Co., we leverage cutting-edge artificial intelligence to automate complex processes, 
              enhance decision-making, and drive innovation across your organization. Our solutions are designed 
              to adapt and evolve with your business, ensuring long-term value and competitive advantage.
            </p>
            
            <div className="space-y-3 mt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-[#6E44FF]/20 p-1 rounded-full mt-1">
                    <Check className="w-4 h-4 text-[#00FFFF]" />
                  </div>
                  <p className="text-white/80">{benefit}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block mt-4 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 text-white py-3 px-6 rounded-md transition-all hover:translate-y-[-2px]"
            >
              Learn More About Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;