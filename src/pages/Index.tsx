
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-tech-dark">
      <MatrixBackground />
      <Navigation activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="certifications">
          <CertificationsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
