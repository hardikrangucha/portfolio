import { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'phosphor-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import project1 from '../assets/prj1-1.png';
import project2 from '../assets/prj2-2.png';
import project3 from '../assets/prj3.png';
import project4 from '../assets/prj4-1.png';
import project5 from '../assets/prj5.png';
import project6 from '../assets/prj6-1.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Scalable App Deployment on AWS', description: 'Deployed containerized applications...', image: project1, tags: ['AWS','ECS Fargate','RDS','GitHub Actions'], github: 'https://github.com/hardikrangucha/calcom-project.git' },
  { id: 2, title: 'CI/CD Pipeline using GitOps & EKS', description: 'Automated CI/CD pipeline for a three-tier app...', image: project2, tags: ['Docker','Jenkins','Kubernetes','EKS'], github: 'https://github.com/hardikrangucha/Wanderlust-Mega-Project.git' },
  { id: 3, title: 'Full-Stack Serverless App', description: 'Developed full-stack serverless web app...', image: project3, tags: ['Amplify','Cognito','Lambda','DynamoDB'], github: 'https://github.com/hardikrangucha/wildrydes-site.git' },
  { id: 4, title: 'Three-Tier Web App on Kubernetes', description: 'Deployed React-Node-MongoDB app on Kubernetes...', image: project4, tags: ['Kubernetes','MongoDB','React','Node.js'], github: 'https://github.com/hardikrangucha/full-stack_chatApp.git' },
  { id: 5, title: 'Multi-Tier Infrastructure with Terraform & Ansible', description: 'Built production-ready multi-tier infra...', image: project5, tags: ['Terraform','Ansible','IaC'], github: 'https://github.com/hardikrangucha/Expenses-Tracker-WebApp.git' },
  { id: 6, title: 'Containerized Two-Tier App with Docker', description: 'Containerized Flask app with PostgreSQL...', image: project6, tags: ['Docker','Flask','PostgreSQL'], github: 'https://github.com/hardikrangucha/two-tier-flask-app.git' },
];

const ProjectsSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Batch animate title
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: titleRef.current, start: 'top 80%', once: true } });

      // Batch animate all project cards
      gsap.utils.toArray(projectsRef.current?.children).forEach((el: any) => {
        gsap.fromTo(el, { opacity: 0, y: 60, scale: 0.95, willChange: 'transform' }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-gradient-radial from-primary/30 to-transparent animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-radial from-accent/30 to-transparent animate-float delay-500" />

      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium uppercase tracking-wider text-sm">My Work</p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Featured <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A showcase of projects highlighting expertise in Cloud, DevOps & Cybersecurity.</p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card group will-change-transform">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a href={project.github} className="p-3 bg-white/90 text-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://github.com/hardikrangucha" target="_blank" rel="noopener noreferrer" />
          <button className="glow-button">View All Projects</button>
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;