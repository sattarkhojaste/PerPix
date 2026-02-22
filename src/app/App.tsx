import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isProjectDetailView, setIsProjectDetailView] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      {!isProjectDetailView && (
        <>
          <Hero />
          <About />
        </>
      )}
      <Projects onViewChange={setIsProjectDetailView} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}