import React from 'react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  image,
  date,
  readTime,
  category
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#0A1045]/90 to-[#050A30]/90 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] to-transparent opacity-60"></div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-[#6E44FF]/80 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full">
          {category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00FFFF] transition-colors">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white/60 text-xs">
            <div className="flex items-center mr-4">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <a 
            href="#" 
            className="flex items-center justify-center w-8 h-8 bg-white/5 hover:bg-[#6E44FF]/20 border border-white/10 rounded-full transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 text-[#00FFFF]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;