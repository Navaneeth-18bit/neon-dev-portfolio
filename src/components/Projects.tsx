import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Study Planner Bot',
    tag: 'Personal',
    status: 'Completed',
    description: 'An intelligent study planner bot leveraging natural language processing principles to help students organize their learning schedules effectively.',
    gradient: 'from-accent/20 to-secondary/20',
    tagColor: 'bg-accent/20 text-accent-foreground',
    statusColor: 'bg-green-500/20 text-green-500',
    githubUrl: '#'
  },
  {
    title: 'Event Registration System',
    tag: 'Mini Project',
    status: 'In Progress',
    description: 'A simple and efficient portal for students to register for events and view event details.',
    gradient: 'from-secondary/20 to-primary/20',
    tagColor: 'bg-secondary/20 text-secondary',
    statusColor: 'bg-yellow-500/20 text-yellow-500',
    githubUrl: 'https://github.com/Navaneeth-18bit/Event-Registration-System.git'
  }
];

const Projects = () => {
  const handleViewProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewProject(project.githubUrl)}
                  className="group/btn"
                >
                  View Project
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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