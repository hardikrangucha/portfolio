import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'phosphor-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Project images
import project1 from '../assets/prj1-1.png';
import project2 from '../assets/prj2-2.png';
import project3 from '../assets/prj3.png';
import project4 from '../assets/prj4-1.png';
import project5 from '../assets/prj5.png';
import project6 from '../assets/prj6-1.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Scalable App Deployment on AWS',
      description: 'Deployed containerized applications on AWS ECS Fargate with RDS backend, automated CI/CD pipelines using GitHub Actions & ECR, and optimized monitoring and scaling with CloudWatch.',
      image: project1,
      tags: ['AWS', 'ECS Fargate', 'RDS', 'GitHub Actions', 'ECR', 'CI/CD', 'CloudWatch', 'VPC', 'Secrets Manager'],
      github: 'https://github.com/hardikrangucha/calcom-project.git',
      live: '#'
    },
    {
      id: 2,
      title: 'End-to-End CI/CD Pipeline for Three-Tier App using GitOps & EKS',
      description: 'Automated CI/CD pipeline for a three-tier application using GitOps principles and AWS EKS.',
      image: project2,
      tags: ['Docker', 'Jenkins', 'OWASP', 'Kubernetes', 'EKS', 'ArgoCD'],
      github: 'https://github.com/hardikrangucha/Wanderlust-Mega-Project.git',
    },
    {
      id: 3,
      title: 'Full-Stack Serverless Architecture on AWS',
      description: 'Developed a full-stack serverless web app leveraging AWS Amplify, Cognito, Lambda, API Gateway, and DynamoDB.',
      image: project3,
      tags: ['Amplify', 'Cognito', 'lambda', 'API Gateway', 'DynamoDB'],
      github: 'https://github.com/hardikrangucha/wildrydes-site.git',
      live: '#'
    },
    {
      id: 4,
      title: 'Three-Tier Web Application Deployment on Kubernetes with Minikube',
      description: 'Deployed a React-Node-MongoDB application on Kubernetes using Pods, Deployments, Services, and Ingress for scalability and external access.',
      image: project4,
      tags: ['Kubernetes', 'MongoDB', 'React', 'Node.js', 'Minikube'],
      github: 'https://github.com/hardikrangucha/full-stack_chatApp.git',
      live: '#'
    },
    {
      id: 5,
      title: 'Production-Ready Multi-Tier Infrastructure with Terraform & Ansible',
      description: 'Built production-ready multi-tier infrastructure using Terraform with remote backends, automated configuration management with Ansible.',
      image: project5,
      tags: ['Terraform', 'Ansible', 'IaC', 'Multi-Tier Deployment', 'Remote Backends', 'Automation'],
      github: 'https://github.com/hardikrangucha/Expenses-Tracker-WebApp.git',
      live: '#'
    },
    {
      id: 6,
      title: 'Containerized Two-Tier Application with Docker, Compose & Security Scanning',
      description: 'Containerized a Flask application with a PostgreSQL database using Docker and Docker Compose, and implemented image scanning with Docker Scout for security.',
      image: project6,
      tags: ['Docker', 'Docker Compose', 'Flask', 'PostgreSQL', 'Image Scanning', 'Docker Scout'],
      github: 'https://github.com/hardikrangucha/two-tier-flask-app.git',
      live: '#'
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%", once: true },
        }
      );

      // Projects animation
      gsap.fromTo(projectsRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: projectsRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-gradient-radial from-primary/30 to-transparent animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-radial from-accent/30 to-transparent animate-float delay-500" />

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium uppercase tracking-wider text-sm">My Work</p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Featured <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of projects in Cloud, DevOps, and Cybersecurity highlighting expertise in building scalable systems, automating deployments, and securing infrastructure.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white/90 text-black rounded-lg shadow-lg hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300"
                      aria-label="View Source Code"
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="https://github.com/hardikrangucha" target="_blank" rel="noopener noreferrer" />
          <button className="glow-button">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;