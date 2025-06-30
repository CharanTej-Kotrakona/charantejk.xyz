
import React, { useEffect, useState } from 'react';
import { Code, Globe, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Code,
      color: 'text-neon-blue',
      skills: [
        { name: 'C#', level: 90 },
        { name: 'ASP.NET Core', level: 85 },
        { name: '.NET Framework', level: 88 },
        { name: 'SQL', level: 80 },
        { name: 'C', level: 75 }
      ]
    },
    {
      title: 'Frontend & Web',
      icon: Globe,
      color: 'text-neon-purple',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'text-neon-green',
      skills: [
        { name: 'Visual Studio', level: 90 },
        { name: 'SQL Server', level: 85 },
        { name: 'GitHub', level: 88 },
        { name: 'Duck Creek Author', level: 80 },
        { name: 'Azure', level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Technical Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="glass-card p-6 animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 ${category.color} mb-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${isVisible ? 'w-full' : 'w-0'}`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
