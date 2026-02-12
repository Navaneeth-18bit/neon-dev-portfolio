import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            <span className="gradient-text">About Me</span>
          </h2>

          {/* About Content */}
          <div className={`glass-card p-8 md:p-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Navaneeth</span>, a passionate Web Developer currently in my{' '}
              <span className="text-primary">3rd year of B.Tech</span>. I enjoy building clean interfaces, 
              solving real-world problems with code, and constantly learning modern web technologies. I also trying to learn GenAi and chatbot building.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
              I aim to deliver <span className="text-foreground">professional, optimized, and visually appealing</span> websites 
              that provide exceptional user experiences.
            </p>

            {/* Tech Stack */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'].map((tech, index) => (
                  <span 
                    key={tech}
                    className={`px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 border border-transparent transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
