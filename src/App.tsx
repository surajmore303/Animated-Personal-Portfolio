import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Cursor />
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-dark text-white">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <Experience />
            <Services />
            <TechStack />
            <Contact />
          </main>
          <Footer />
          <ThemeToggle />
        </div>
      )}
    </>
  );
}
