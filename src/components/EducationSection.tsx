
import React from 'react';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'M.S. in Computer Science',
      school: 'California State University, San Bernardino',
      year: '2025',
      gpa: '3.5/4.0',
      location: 'San Bernardino, CA',
      color: 'neon-blue'
    },
    {
      degree: 'B.Tech in Computer Science & Engineering',
      school: 'Mother Theresa Institute of Engineering & Tech',
      year: '2022',
      gpa: '7.45/10',
      location: 'Hyderabad, India',
      color: 'neon-purple'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="glass-card p-8 animate-slide-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center mb-3">
                    <GraduationCap className={`mr-3 text-${edu.color}`} size={24} />
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-2">{edu.school}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={16} />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Star className={`mr-2 text-${edu.color}`} size={20} />
                  <div className="text-right">
                    <div className="text-sm text-gray-400 uppercase tracking-wide">GPA</div>
                    <div className={`text-2xl font-bold text-${edu.color}`}>
                      {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
