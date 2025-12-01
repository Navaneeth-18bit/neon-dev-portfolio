import { Mail, Download, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import resumePDF from '../assets/resume (1).pdf';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Have a project in mind or want to collaborate? Let's talk!
          </p>

          {/* Contact Card */}
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:navaneethraj.mec@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              
              <Button variant="heroOutline" size="lg" asChild>
                <a  href={resumePDF} target="_blank" rel="noopener noreferrer">
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
