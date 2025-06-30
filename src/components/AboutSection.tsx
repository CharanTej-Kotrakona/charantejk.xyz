
import React from 'react';
import { Users, MessageCircle, Zap, Clock } from 'lucide-react';

const AboutSection = () => {
  const softSkills = [
    { name: 'Teamwork', icon: Users, color: 'text-neon-blue' },
    { name: 'Communication', icon: MessageCircle, color: 'text-neon-purple' },
    { name: 'Quick Learning', icon: Zap, color: 'text-neon-green' },
    { name: 'Time Management', icon: Clock, color: 'text-neon-blue' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="glass-card p-8 md:p-12 animate-slide-up">
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              <p className="mb-6">
                I'm a highly motivated and certified{' '}
                <span className="text-neon-blue font-semibold">.NET Full Stack Developer</span>{' '}
                with hands-on experience in{' '}
                <span className="text-neon-purple font-semibold">ASP.NET</span>,{' '}
                <span className="text-neon-green font-semibold">Angular</span>,{' '}
                <span className="text-neon-blue font-semibold">SQL Server</span>, and{' '}
                <span className="text-neon-purple font-semibold">Duck Creek</span>{' '}
                for the insurance domain.
              </p>
              <p>
                I thrive in both team-driven and independent environments and am passionate about 
                building impactful software solutions. I bring an analytical mind, deep technical 
                skills, and a quick learning ability to every project I take on.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Core Strengths</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="text-center group hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 ${skill.color} mb-3 group-hover:bg-white/10 transition-all duration-300`}>
                        <IconComponent size={24} />
                      </div>
                      <p className="text-gray-300 font-medium">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
