import React, { useRef, useEffect } from "react";
import { Shield, Cloud } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Cloud & DevOps Intern (Project Work)",
    company: "Cloud Counselage Pvt. Ltd",
    duration: "Aug 2025 – Present",
    icon: <Cloud className="text-cyan-400" size={20} />,
    highlights: [
      "Executed containerized applications deployment on AWS ECS Fargate with RDS PostgreSQL backend, secured via VPC and Secrets Manager.",
      "Engineered and streamlined CI/CD pipelines with GitHub Actions and AWS ECR, facilitating seamless deployments.",
      "Implemented auto-scaling and monitored system performance using CloudWatch alarms, dashboards, and log management.",
      "Authored documentation and visualized architecture diagrams covering deployment workflows, scaling strategies, and cost optimization on AWS Free Tier.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Cloud Counselage Pvt. Ltd",
    duration: "Jan 2025 – Jun 2025",
    icon: <Shield className="text-teal-400" size={20} />,
    highlights: [
      "Executed security audits on live websites leveraging OWASP ZAP & Nikto.",
      "Conducted and analyzed Nmap & testssl scans to identify and assess vulnerabilities.",
      "Documented findings and proposed actionable security improvements.",
      "Developed and implemented a Steganography tool to encode cryptic messages in images.",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        titleRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Animate experience cards
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute top-20 left-16 w-40 h-40 rounded-full bg-gradient-radial from-primary/30 to-transparent animate-float" />
      <div className="absolute bottom-24 right-24 w-24 h-24 rounded-full bg-gradient-radial from-accent/30 to-transparent animate-float delay-500" />

      <div className="container mx-auto px-6 relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium uppercase tracking-wider text-sm">
            My Journey
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Professional{" "}
            <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on internships and project work that shaped my cloud, DevOps, and cybersecurity expertise.
          </p>
        </div>

        {/* Timeline */}
        <div ref={cardsRef} className="relative border-l-2 border-gray-700 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Dot on timeline */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full ring-2 ring-primary">
                {exp.icon}
              </span>

              {/* Experience card */}
              <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-primary/30 transition-shadow">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {exp.company} • {exp.duration}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="hover:text-primary transition-colors">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;