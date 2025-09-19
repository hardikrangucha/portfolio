import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set([progressBarRef.current, textRef.current, percentRef.current], {
      opacity: 0,
      y: 30
    });

    // Animate elements in
    tl.to([textRef.current, percentRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(progressBarRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Animate progress bar
    const progressBar = progressBarRef.current?.querySelector('.progress-fill');
    const percentElement = percentRef.current;

    if (progressBar && percentElement) {
      gsap.set(progressBar, { width: '0%' });
      
      gsap.to(progressBar, {
        width: '100%',
        duration: 2.5,
        ease: "power2.out",
        onUpdate: function() {
          const progress = Math.round(this.progress() * 100);
          if (percentElement) {
            percentElement.textContent = `${progress}%`;
          }
        },
        onComplete: () => {
          // Fade out loading screen
          gsap.to(loaderRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              onLoadComplete();
            }
          });
        }
      });
    }

  }, [onLoadComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Floating orbs */}
      <div className="floating-orb w-32 h-32 top-1/4 left-1/4" />
      <div className="floating-orb w-24 h-24 top-3/4 right-1/4" />
      <div className="floating-orb w-40 h-40 bottom-1/3 left-1/3" />

      <div className="relative z-10 text-center max-w-md mx-auto px-8">
        {/* Main text */}
        <div ref={textRef} className="mb-12 text-center">
  <h1 className="text-4xl md:text-6xl font-bold text-glow-strong mb-2">
    Hardik Rangucha
  </h1>
  <p className="text-lg md:text-2xl text-muted-foreground">
    Cloud & DevOps Engineer
  </p>
</div>

        {/* Progress section */}
        <div ref={progressBarRef} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">Loading Portfolio</span>
            <span ref={percentRef} className="text-sm text-primary font-medium">
              0%
            </span>
          </div>
          
          <div className="w-full h-1 bg-card rounded-full overflow-hidden">
            <div className="progress-fill loading-bar h-full w-0" />
          </div>
        </div>

        {/* Subtle loading indicator */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;