
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '../components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'charantej.k19@gmail.com',
      href: 'mailto:charantej.k19@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (818) 691-4435',
      href: 'tel:+18186914435',
      color: 'neon-purple'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Bernardino, CA',
      href: '#',
      color: 'neon-green'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/charan-tej-kotrakona-37a664300',
      color: 'neon-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/CharanTej-Kotrakona',
      color: 'neon-purple'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Get In Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? Let's connect and discuss how I can 
              contribute to your team with my .NET expertise and passion for innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="glass-card p-8 animate-slide-in">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center group hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 rounded-full bg-white/5 text-${contact.color} mr-4 group-hover:bg-white/10`}>
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                          {contact.label}
                        </p>
                        <p className="text-white font-medium">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-white/5 text-${social.color} hover:bg-white/10 hover:scale-110 transition-all duration-300`}
                      >
                        <IconComponent size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white py-3 rounded-lg neon-glow transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © 2024 Charan Tej Kotrakona. Built with passion and{' '}
            <span className="text-neon-blue">React</span> +{' '}
            <span className="text-neon-purple">TypeScript</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
