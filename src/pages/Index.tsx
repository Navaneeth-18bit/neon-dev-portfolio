import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingShapes from '@/components/FloatingShapes';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Shapes */}
      <FloatingShapes />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
