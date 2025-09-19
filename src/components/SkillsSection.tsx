import React, { useRef, useEffect } from "react";
import { FaAws, FaCode, FaTools, FaSyncAlt, FaShieldAlt, FaTerminal } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Cloud Platforms",
    icon: <FaAws className="text-yellow-400 text-xl" />,
    skills: ["EC2", "S3", "Lambda", "RDS", "VPC", "DynamoDB", "Route 53", "CloudFront", "AWS Fargate", "Secrets Manager", "AWS Amplify", "GCP Basics"],
  },
  {
    title: "Infrastructure as Code",
    icon: <FaCode className="text-cyan-400 text-xl" />,
    skills: ["Terraform", "AWS CloudFormation"],
  },
  {
    title: "CI/CD & DevOps",
    icon: <FaSyncAlt className="text-green-400 text-xl" />,
    skills: ["GitHub Actions", "AWS CodePipeline", "Jenkins", "Docker", "Kubernetes"],
  },
  {
    title: "Scripting & Languages",
    icon: <FaTerminal className="text-yellow-400 text-xl" />,
    skills: ["Python", "Bash", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Monitoring & Security",
    icon: <FaShieldAlt className="text-teal-400 text-xl" />,
    skills: ["AWS CloudWatch", "Prometheus", "Grafana", "AWS IAM"],
  },
  {
    title: "Other Tools",
    icon: <FaTools className="text-green-400 text-xl" />,
    skills: ["Git", "Linux", "PostgreSQL", "MongoDB", "VSCode"],
  },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
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

      // Skill cards animation
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
    <section ref={sectionRef} id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute top-20 left-16 w-40 h-40 rounded-full bg-gradient-radial from-primary/30 to-transparent animate-float" />
      <div className="absolute bottom-24 right-24 w-24 h-24 rounded-full bg-gradient-radial from-accent/30 to-transparent animate-float delay-500" />

      <div className="container mx-auto px-6 relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium uppercase tracking-wider text-sm">
            My Expertise
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Technical{" "}
            <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of tools, languages, and platforms I use to build scalable, 
            secure, and modern digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-primary/30 transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary hover:text-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;