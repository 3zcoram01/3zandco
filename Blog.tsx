import React from 'react';
import BlogCard from './BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI Automation in Enterprise",
      excerpt: "Explore how advanced AI systems are reshaping enterprise operations and creating new opportunities for growth.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      category: "AI Trends"
    },
    {
      title: "Implementing Ethical AI Frameworks",
      excerpt: "Guidelines for implementing responsible AI systems that align with ethical standards and regulatory requirements.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "Feb 28, 2025",
      readTime: "7 min read",
      category: "Ethics & Compliance"
    },
    {
      title: "AI-Driven Predictive Analytics for Business",
      excerpt: "How predictive models can transform decision-making processes and provide strategic advantages for modern businesses.",
      image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "Feb 10, 2025",
      readTime: "6 min read",
      category: "Analytics"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-[#050A30] to-[#0A1045] relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0A1045] to-transparent"></div>
      <div className="absolute -top-40 left-1/3 w-72 h-72 bg-[#6E44FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Latest Insights</h2>
          <div className="h-1 w-20 bg-[#00FFFF] mx-auto mb-6 rounded-full"></div>
          <p className="text-white/70 text-lg">
            Stay updated with the latest trends, strategies, and insights in AI automation and business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-6 rounded-md transition-all hover:translate-y-[-2px]"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;