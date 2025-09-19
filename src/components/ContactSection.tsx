import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, MapPin, Envelope, Phone } from 'phosphor-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Envelope,
      label: 'Email',
      value: 'hardikrangucha11@gmail.com',
      href: 'mailto:hardikrangucha11@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8208174811',
      href: '#',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, IN',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/hardikrangucha', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/hardik-rangucha/', label: 'LinkedIn' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo(
        formRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Info animation
      gsap.fromTo(
        infoRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // You can add toast notification here
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="floating-orb w-40 h-40 top-20 right-20 opacity-10" />
      <div className="floating-orb w-60 h-60 bottom-20 left-10 opacity-15" />

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium uppercase tracking-wider text-sm">
            Connect With Me
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Excited to{' '}
            <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
              Grow & Learn
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for internships, job opportunities, or collaboration in cloud, DevOps, and cybersecurity projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-card/20 border border-glass-border rounded-lg backdrop-blur-md
                               focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                               transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-card/20 border border-glass-border rounded-lg backdrop-blur-md
                               focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                               transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project discussion"
                  className="w-full px-4 py-3 bg-card/20 border border-glass-border rounded-lg backdrop-blur-md
                             focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                             transition-all duration-300 placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-card/20 border border-glass-border rounded-lg backdrop-blur-md
                             focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20
                             transition-all duration-300 placeholder:text-muted-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`glow-button w-full group ${isSubmitting ? 'opacity-70' : ''}`}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <PaperPlaneTilt
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div className="glass-card p-8 space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium mb-4">Connect with Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 hover:shadow-glow
                                 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                        size="lg"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;