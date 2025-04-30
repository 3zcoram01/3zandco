import React from 'react';
import TeamMember from './TeamMember';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Zhang",
      role: "CEO & AI Strategist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "10+ years leading AI initiatives for Fortune 500 companies with expertise in strategic implementation."
    },
    {
      name: "Sophia Chen",
      role: "CTO & ML Engineer",
      image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Ph.D. in Machine Learning with specialization in neural networks and reinforcement learning algorithms."
    },
    {
      name: "Marcus Johnson",
      role: "Head of Automation",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Expert in RPA and business process optimization with a background in enterprise architecture."
    },
    {
      name: "Leila Patel",
      role: "Data Science Director",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Former research scientist specializing in predictive analytics and large-scale data processing."
    }
  ];

  return (
    <section id="team" className="py-20 bg-[#0A1045] relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjIiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050A30] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050A30] to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
          <div className="h-1 w-20 bg-[#00FFFF] mx-auto mb-6 rounded-full"></div>
          <p className="text-white/70 text-lg">
            Our team of AI specialists, engineers, and strategists brings decades of combined experience
            to deliver exceptional automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;