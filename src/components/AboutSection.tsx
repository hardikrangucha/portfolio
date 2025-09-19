import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '../assets/profile1.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60, scale: 0.9, rotation: -5 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );

      // Content animation (optimized - no blur filter)
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        skillsRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="floating-orb w-40 h-40 top-20 right-10 opacity-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative flex justify-center">
            <div className="relative w-96 h-[650px] mt-16">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-25 animate-pulse-glow" />

              {/* Image container */}
              <div className="relative glass-card p-6 rounded-2xl overflow-hidden group shadow-2xl translate-y-28">
                <img
                  src={profileImage}
                  alt="Hardik Rangucha - Cloud & DevOps Engineer"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl" />
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-8 -right-8 w-10 h-10 bg-primary rotate-45 transform animate-float" />
              <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-accent rounded-lg animate-float delay-500" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium uppercase tracking-wider text-sm">
                  About Me
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Obsessed with{' '}
                  <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
                    Technology
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I’m <span className="font-medium text-foreground">Hardik Rangucha</span>, an aspiring
                  <span className="text-primary"> Cloud & DevOps Engineer</span> with a strong foundation in
                  <span className="font-medium"> cybersecurity</span>. I recently completed my
                  <span className="font-medium"> Masters in Information Technology</span>, where I focused on building
                  secure, scalable, and efficient systems.
                </p>
                <p>
                  My journey started with a deep interest in <span className="font-medium">cloud technologies,
                  automation, and infrastructure security</span>. I’ve worked on hands-on projects involving
                  <span className="font-medium"> AWS, Docker, Kubernetes, CI/CD pipelines, and monitoring tools</span>,
                  giving me practical exposure to how modern systems are built and maintained.
                </p>
                <p>
                  Beyond the technical side, I enjoy solving problems, exploring new tools, and continuously
                  learning. Whether it’s setting up cloud infrastructure, streamlining DevOps workflows, or
                  ensuring systems are secure, I’m always excited to take on new challenges.
                </p>
                <p>
                  Outside of work, I like exploring emerging technologies, contributing to personal projects, and
                  sharing knowledge with peers in the tech community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;