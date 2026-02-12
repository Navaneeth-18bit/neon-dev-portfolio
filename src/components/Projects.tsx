import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react'; // Make sure to run: npm install lucide-react
import { Button } from './ui/button';

const projects = [
  {
    title: 'Study Planner ChatBot',
    tag: 'personal project',
    description:
      'A study Planner chatbot can help students plan their study schedule and manage their time effectively.',
    gradient: 'from-primary/20 to-accent/20',
    tagColor: 'bg-primary/20 text-primary',
    githubUrl: 'https://github.com/Navaneeth-18bit/Study-Planner-AI-chatbot.git',
  },
  {
    title: 'Event Registration System',
    tag: 'Mini project',
    description:
      'A simple and efficient portal for students to register for events and view event details.',
    gradient: 'from-secondary/20 to-primary/20',
    tagColor: 'bg-secondary/20 text-secondary',
    githubUrl: 'https://github.com/Navaneeth-18bit/Event-Registration-System.git',
  },
];

// Simple scroll animation hook
const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleViewProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.tagColor}`}
                  >
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewProject(project.githubUrl)}
                >
                  View Project
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-secondary/10 blur-xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
