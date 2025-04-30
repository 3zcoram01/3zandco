import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#050A30] via-[#0A1045] to-[#1A1A40] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#6E44FF]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-[#FF44A4]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjIiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBIMHoiLz48cGF0aCBkPSJNMCAzMGg2ME0zMCAwdjYwIi8+PHBhdGggZD0iTTAgMGw2MCA2ME02MCAwTDAgNjAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-[#6E44FF]/20 border border-[#6E44FF]/30 text-[#00FFFF] text-sm font-medium">
              Next Generation AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Automate Your <span className="text-[#00FFFF] relative">
                Future
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#00FFFF]/30 rounded-full"></span>
              </span> with Intelligent AI
            </h1>
            <p className="text-lg text-white/80 max-w-lg">
              3Z & Co. delivers cutting-edge AI automation solutions that transform your business operations, 
              increase efficiency, and drive innovation at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-[#6E44FF] hover:bg-[#5933FF] text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] shadow-lg shadow-[#6E44FF]/20"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="border border-white/20 bg-white/5 hover:bg-white/10 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl shadow-[#6E44FF]/20 backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
              {/* Futuristic 3D UI Elements */}
              <div className="absolute top-6 left-6 right-6 h-12 bg-[#050A30]/80 rounded-lg backdrop-blur-md border border-white/10 flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-[#FF3B30] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFCC00] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#34C759]"></div>
                <div className="ml-4 h-4 w-40 bg-white/10 rounded-full"></div>
              </div>
              
              <div className="absolute top-24 left-6 right-6 bottom-6 bg-[#0A1045]/40 rounded-lg backdrop-blur-sm border border-white/10 p-4 overflow-hidden">
                {/* Activity pulse lines */}
                <div className="h-1 w-full mt-4">
                  <div className="h-1 bg-[#00FFFF] rounded-full w-3/4 opacity-70"></div>
                </div>
                <div className="h-1 w-full mt-6">
                  <div className="h-1 bg-[#00FFFF] rounded-full w-1/2 opacity-50"></div>
                </div>
                <div className="h-1 w-full mt-6">
                  <div className="h-1 bg-[#00FFFF] rounded-full w-5/6 opacity-30"></div>
                </div>
                
                {/* Dashboard elements */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-[#050A30]/70 p-4 rounded-lg border border-white/10">
                    <div className="h-3 w-20 bg-white/20 rounded-full mb-2"></div>
                    <div className="h-6 w-24 bg-[#6E44FF]/30 rounded-md"></div>
                  </div>
                  <div className="bg-[#050A30]/70 p-4 rounded-lg border border-white/10">
                    <div className="h-3 w-16 bg-white/20 rounded-full mb-2"></div>
                    <div className="h-6 w-20 bg-[#00FFFF]/30 rounded-md"></div>
                  </div>
                </div>
                
                {/* AI visualization */}
                <div className="absolute bottom-8 left-4 right-4 h-32 bg-[#050A30]/70 rounded-lg border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-4 border-[#00FFFF]/30 animate-ping opacity-20"></div>
                    <div className="w-32 h-32 rounded-full border-4 border-[#6E44FF]/30 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-24 h-24 rounded-full border-4 border-[#00FFFF]/30 animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;