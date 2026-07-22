import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';

// Lazy load below-the-fold components to reduce initial JS payload
const About = lazy(() => import('./components/About'));
const Journey = lazy(() => import('./components/Journey'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));
const Experience = lazy(() => import('./components/Experience'));
const Services = lazy(() => import('./components/Services'));
const TechStack = lazy(() => import('./components/TechStack'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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
            <Suspense fallback={<div className="min-h-[200px]" />}>
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
              <Footer />
            </Suspense>
          </main>
          <ThemeToggle />
        </div>
      )}
    </>
  );
}
