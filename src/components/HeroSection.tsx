import { useEffect, useRef, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";

// Lazy-load Spline so it doesn’t block initial render
const Spline = lazy(() => import("@splinetool/react-spline"));

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate sequentially (remove extra Tailwind animate classes)
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          splineRef.current,
          { opacity: 0, x: 80, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" },
          "-=1"
        );
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Floating Orbs simplified (reduced count + opacity for perf) */}
      <div className="floating-orb w-48 h-48 top-24 left-12 opacity-10" />
      <div className="floating-orb w-32 h-32 bottom-16 right-16 opacity-15" />

      {/* 3D Spline */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-background/40 to-background/10" />}>
          <Spline scene="https://prod.spline.design/dBk3OTG4XE3B5N12/scene.splinecode" />
        </Suspense>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/20 to-background/40 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="space-y-12 max-w-4xl">
            {/* Title */}
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-primary">Hardik</span>
            </h1>

            {/* Subtitle */}
            <div
              ref={subtitleRef}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Aspiring Cloud & DevOps Engineer <br />
              <span className="text-primary">Building & Automating Cloud Solutions</span>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#projects"
                className="glow-button text-lg px-8 py-4 transition-all duration-500 ease-out transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="glass-card px-8 py-4 text-lg hover:scale-105 transition-all duration-500 ease-out"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="grid grid-cols-3 gap-8 max-w-md">
              {[
                { label: "Ready to Learn", value: "Fresher" },
                { label: "Projects", value: "8+" },
                { label: "Skills Learned", value: "10+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center transition-transform duration-500 ease-out hover:scale-110"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;