import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import LoadingScreen from './LoadingScreen';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scrolling and animations after loading
    if (!isLoading) {
      // Smooth scroll setup
      const lenis = async () => {
        try {
          const { default: Lenis } = await import('locomotive-scroll');
          
          const scroll = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical' as const,
            gestureOrientation: 'vertical' as const,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
          });

          function raf(time: number) {
            scroll.raf(time);
            requestAnimationFrame(raf);
          }

          requestAnimationFrame(raf);

          // GSAP ScrollTrigger integration
          scroll.on('scroll', ScrollTrigger.update);

          ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
              return arguments.length ? scroll.scrollTo(value, { duration: 0, disableLerp: true }) : scroll.scroll.instance?.scroll.y;
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
              };
            },
            pinType: document.body.style.transform ? 'transform' : 'fixed'
          });

          ScrollTrigger.addEventListener('refresh', () => scroll.resize());
          ScrollTrigger.refresh();

          return scroll;
        } catch (error) {
          console.log('Locomotive Scroll not available, using native scroll');
          return null;
        }
      };

      lenis();

      // Fade in main content
      gsap.fromTo(containerRef.current, 
        { 
          opacity: 0,
          y: 30
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );
    }
  }, [isLoading]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      {/* <Footer /> */}

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default Portfolio;