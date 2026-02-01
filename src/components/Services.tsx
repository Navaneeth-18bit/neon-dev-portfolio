import { Code, Layout, Palette } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built using HTML, CSS, JavaScript, Node.js, and Express.',
    color: 'primary',
  },
  {
    icon: Layout,
    title: 'Web Apps',
    description: 'Interactive applications with backend integration and smooth UI.',
    color: 'secondary',
  },
  {
    icon: Palette,
    title: 'Custom UI Design',
    description: "Clean and unique UI layouts tailored to clients' requirements.",
    color: 'accent',
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide full-featured web services including web design, development, and optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-8 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                service.color === 'primary' 
                  ? 'bg-primary/10 text-primary group-hover:shadow-neon-primary' 
                  : service.color === 'secondary'
                  ? 'bg-secondary/10 text-secondary group-hover:shadow-neon-secondary'
                  : 'bg-accent/10 text-accent group-hover:shadow-neon-accent'
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
