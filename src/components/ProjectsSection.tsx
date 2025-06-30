
import React from 'react';
import { ExternalLink, Github, Smartphone, MousePointer } from 'lucide-react';
import { Button } from '../components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Dog Math - Mobile App',
      description: 'Fun arithmetic game for all ages with engaging UI & gamified math learning experience',
      features: [
        'Engaging UI & gamified math',
        'Cross-platform compatibility',
        'Progressive difficulty levels',
        'Achievement system'
      ],
      technologies: ['React Native', 'JavaScript', 'Mobile Development'],
      icon: Smartphone,
      color: 'neon-blue'
    },
    {
      title: 'Hand Gesture Controlled Virtual Mouse',
      description: 'ML + Computer Vision project for touchless interface control using real-time hand tracking',
      features: [
        'Real-time hand tracking',
        'Gesture recognition',
        'Accessibility for disabled users',
        'Visual feedback and calibration'
      ],
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
      icon: MousePointer,
      color: 'neon-purple'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-white/5 text-${project.color} mr-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <span className={`text-${project.color} mr-2`}>▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className={`bg-${project.color}/20 text-${project.color} border border-${project.color}/30 hover:bg-${project.color}/30`}
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-tech-dark`}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
