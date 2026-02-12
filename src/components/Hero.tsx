import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-block mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I'm <span className="gradient-text">Navaneeth</span> 👋
            <br />
            <span className="text-foreground">I am passionate in coding.</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            I'm a Computer science student specializing in GenAi, modern websites, clean UI, and responsive web apps.
          </p>

          {/* Description */}
          <p 
            className="text-muted-foreground mb-8 max-w-xl leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            I focus on creating fast, functional, user-friendly websites. I work with{' '}
            <span className="text-foreground">HTML, CSS, JavaScript, Node.js, Express, MongoDB</span>{' '}
            and modern UI frameworks.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
