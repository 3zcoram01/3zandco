import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  hoverGradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradient,
  hoverGradient
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br border border-white/10 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} ${hoverGradient} transition-all duration-500 opacity-50`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <p className="text-white/70 group-hover:text-white/80 transition-colors">
          {description}
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-white/10 opacity-50 group-hover:opacity-80 transition-opacity"></div>
      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full border border-white/10 opacity-30 group-hover:opacity-60 transition-opacity"></div>
    </div>
  );
};

export default ServiceCard;