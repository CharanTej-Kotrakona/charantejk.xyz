
import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-1/4 left-1/4 text-neon-blue/20 text-6xl" style={{ '--delay': '0s' } as React.CSSProperties}>
          &lt;/&gt;
        </div>
        <div className="floating-icon absolute top-1/3 right-1/4 text-neon-purple/20 text-4xl" style={{ '--delay': '2s' } as React.CSSProperties}>
          { }
        </div>
        <div className="floating-icon absolute bottom-1/4 left-1/3 text-neon-green/20 text-5xl" style={{ '--delay': '4s' } as React.CSSProperties}>
          #
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Charan Tej</span>
            <br />
            <span className="text-gradient">Kotrakona</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            <span className="font-mono text-neon-blue">class</span>{' '}
            <span className="text-white font-semibold">FullStackDeveloper</span>{' '}
            <span className="font-mono text-neon-blue">extends</span>{' '}
            <span className="text-neon-purple">DotNetExpert</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-2">📍 San Bernardino, California</p>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting modern web applications with{' '}
            <span className="text-neon-blue font-semibold">C#</span>,{' '}
            <span className="text-neon-purple font-semibold">.NET</span>,{' '}
            <span className="text-neon-green font-semibold">Angular</span>, and{' '}
            <span className="text-neon-blue font-semibold">cloud technologies</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white px-8 py-3 rounded-full neon-glow transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-tech-dark px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-neon-blue hover:text-neon-purple transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
