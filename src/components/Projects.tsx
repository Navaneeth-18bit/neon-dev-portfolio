import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
const projects = [{
  title: 'BookMyTurf',
  tag: 'CollegeProject',
  description: 'A turf booking platform where users can browse available slots and make reservations.',
  gradient: 'from-primary/20 to-accent/20',
  tagColor: 'bg-primary/20 text-primary',
  githubUrl: 'https://github.com/Navaneeth-18bit/Book-My-Turf.git'
}, {
  title: 'Event Registration System',
  tag: 'Mini project',
  description: 'A simple and efficient portal for students to register for events and view event details.',
  gradient: 'from-secondary/20 to-primary/20',
  tagColor: 'bg-secondary/20 text-secondary',
  githubUrl: 'https://github.com/Navaneeth-18bit/Event-Registration-System.git'
}];
const Projects = () => {
  const handleViewProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return <section id="projects" className="py-24 px-6 relative">
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
				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => <div key={project.title} className="group relative overflow-hidden rounded-2xl">
							{/* Background Image */}
							<div className="absolute inset-0">
								<img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
								<div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent`} />
							</div>

							{/* Glass Card */}
							

							{/* Decorative Elements */}
							<div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
							<div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-secondary/10 blur-xl group-hover:scale-150 transition-transform duration-700" />
						</div>)}
				</div>
			</div>
		</section>;
};
export default Projects;