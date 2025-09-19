import { GithubLogo, LinkedinLogo, Envelope, Heart } from 'phosphor-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: Envelope, href: '#contact', label: 'Email' }
  ];

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="floating-orb w-32 h-32 top-10 left-10 opacity-10" />
      <div className="floating-orb w-24 h-24 bottom-10 right-20 opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-glow">
                Hardik Rangucha
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                AWS Engineer & Full Stack Developer crafting scalable solutions and 
                immersive digital experiences with cutting-edge technology.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-card/20 border border-glass-border rounded-lg hover:border-primary/30 
                           hover:bg-primary/10 hover:shadow-glow transition-all duration-300 group backdrop-blur-md"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={20} 
                    className="text-foreground/60 group-hover:text-primary transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-3">
              {['AWS Architecture', 'Full Stack Development', 'UI/UX Design', '3D Web Experiences'].map((service) => (
                <div
                  key={service}
                  className="text-muted-foreground"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Hardik Rangucha. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;