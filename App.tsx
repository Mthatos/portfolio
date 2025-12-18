import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Focus on the top-center part of the screen
      // Negative margins shrink the detection box inward from the viewport bounds
      rootMargin: '-10% 0px -45% 0px',
      threshold: 0.1
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections that have an ID
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    // Removed bg-slate-900 to make transparent so canvas shows through
    <div className="min-h-screen flex flex-col relative text-slate-100">
      
      {/* Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow pt-16 relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero setActiveSection={setActiveSection} />
        </section>

        <section id="about" className="py-20 px-4 md:px-8">
          <About />
        </section>

        <section id="skills" className="py-20 px-4 md:px-8 bg-slate-800/30 backdrop-blur-sm">
          <Skills />
        </section>

        <section id="projects" className="py-20 px-4 md:px-8">
          <Projects />
        </section>

        <section id="contact" className="py-20 px-4 md:px-8 bg-slate-800/30 backdrop-blur-sm">
          <Contact />
        </section>
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
}