import { Mail, Download, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import resumePDF from '../assets/resume (1).pdf';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>


          {/* Contact Card */}
          <div className={`glass-card p-8 md:p-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:navaneethraj.mec@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              
              <Button variant="heroOutline" size="lg" asChild>
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/navaneeth-raj-a68703292/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  Connect With Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
