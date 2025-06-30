
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      color: 'neon-blue',
      description: 'Cloud computing fundamentals and AWS services'
    },
    {
      title: '.NET Full Stack Foundation',
      issuer: 'Coursera',
      color: 'neon-purple',
      description: 'Complete .NET development stack'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IIT Madras',
      color: 'neon-green',
      description: 'Data analysis and machine learning with Python'
    },
    {
      title: 'ADJP (C, C++, Java)',
      issuer: 'Computer Society of India',
      color: 'neon-blue',
      description: 'Advanced Java Programming certification'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg bg-white/5 text-${cert.color} mr-3`}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className={`text-${cert.color} font-medium`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <ExternalLink 
                  className="text-gray-400 hover:text-neon-blue cursor-pointer transition-colors" 
                  size={20} 
                />
              </div>
              
              <p className="text-gray-300 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
