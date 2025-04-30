import React from 'react';
import { MessageSquare, UserPlus, TicketCheck, Calendar, Share2, Phone } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare className="w-10 h-10 text-[#00FFFF] group-hover:text-white transition-colors duration-300" />,
      title: "AI Customer Relations Management Agents",
      description: "Intelligent agents that manage and nurture customer relationships through personalized interactions.",
      gradient: "from-[#6E44FF]/10 to-[#00FFFF]/10",
      hoverGradient: "group-hover:from-[#6E44FF] group-hover:to-[#00FFFF]"
    },
    {
      icon: <UserPlus className="w-10 h-10 text-[#00FFFF] group-hover:text-white transition-colors duration-300" />,
      title: "AI Lead Capture Agents",
      description: "Advanced AI systems that identify, qualify, and engage potential leads across multiple channels.",
      gradient: "from-[#00FFFF]/10 to-[#6E44FF]/10",
      hoverGradient: "group-hover:from-[#00FFFF] group-hover:to-[#6E44FF]"
    },
    {
      icon: <TicketCheck className="w-10 h-10 text-[#00FFFF] group-hover:text-white transition-colors duration-300" />,
      title: "AI Customer Support Ticket Management Agents",
      description: "Automated ticket processing and resolution systems that streamline customer support operations.",
      gradient: "from-[#FF44A4]/10 to-[#6E44FF]/10",
      hoverGradient: "group-hover:from-[#FF44A4] group-hover:to-[#6E44FF]"
    },
    {
      icon: <Calendar className="w-10 h-10 text-[#00FFFF] group-hover:text-white transition-colors duration-300" />,
      title: "AI Appointment Setting Agents",
      description: "Intelligent scheduling assistants that manage appointments and follow-ups efficiently.",
      gradient: "from-[#6E44FF]/10 to-[#FF44A4]/10",
      hoverGradient: "group-hover:from-[#6E44FF] group-hover:to-[#FF44A4]"
    },
    {
      icon: <Share2 className="w-10 h-10 text-[#00FFFF] group-hover:text-white transition-colors duration-300" />,
      title: "AI Social Media Outreach Agents",
      description: "Automated social media engagement systems that build and maintain brand presence.",
      gradient: "from-[#00FFFF]/10 to-[#FF44A4]/10",
      hoverGradient: "group-hover:from-[#00FFFF] group-hover:to-[#FF44A4]"
    },
    {
      icon: <Phone className="w-10 h-10 text-[#00FFFF] group-hover:text-white transition-colors duration-300" />,
      title: "AI Phone Agents",
      description: "Advanced voice AI systems that handle calls, inquiries, and customer interactions seamlessly.",
      gradient: "from-[#FF44A4]/10 to-[#00FFFF]/10",
      hoverGradient: "group-hover:from-[#FF44A4] group-hover:to-[#00FFFF]"
    }
  ];

  return (
    <section id="services" className="bg-[#050A30] py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0A1045] to-transparent"></div>
      <div className="absolute -top-12 left-1/4 w-64 h-64 bg-[#6E44FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Automation Services</h2>
          <div className="h-1 w-20 bg-[#00FFFF] mx-auto mb-6 rounded-full"></div>
          <p className="text-white/70 text-lg">
            We provide cutting-edge AI automation solutions that transform how businesses operate, 
            innovate, and grow in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              hoverGradient={service.hoverGradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;