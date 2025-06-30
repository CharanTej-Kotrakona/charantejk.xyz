
import React from 'react';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const achievements = [
    'Built & configured insurance products using Duck Creek Author',
    'Customized rating rules, policy modules, forms, and scripts',
    'Integrated systems via REST APIs and DCAPI',
    'Collaborated in Agile/Scrum teams',
    'Delivered scalable, high-performance solutions'
  ];

  const technologies = [
    'Duck Creek Author', 'C#', 'SQL Server', 'Visual Studio', 'Agile'
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Graduate Engineer Trainee
                </h3>
                <div className="flex items-center text-neon-blue mb-2">
                  <Building className="mr-2" size={20} />
                  <span className="text-xl font-semibold">Coforge Ltd</span>
                </div>
                <div className="flex items-center text-gray-400 mb-2">
                  <MapPin className="mr-2" size={16} />
                  <span>Greater Noida, India</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="mr-2" size={16} />
                  <span>June 2022 – June 2023</span>
                </div>
              </div>
              
              <div className="text-neon-purple font-semibold text-lg">
                Duck Creek Policy Developer
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-neon-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-neon-blue hover:bg-white/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
