import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  image,
  description 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#050A30] to-[#0A1045] border border-white/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      {/* Image with gradient overlay */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] to-transparent opacity-70"></div>
        
        {/* Social media icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
            <Mail className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-[#00FFFF] text-sm mb-3">{role}</p>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border border-[#6E44FF]/30"></div>
    </div>
  );
};

export default TeamMember;