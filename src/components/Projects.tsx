import { motion } from 'framer-motion';
import { GitFork, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="What I've Built" title="Featured" highlight="Projects" subtitle="Real-world solutions built with passion and purpose" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all group h-full flex flex-col"
              >
                {/* Card Header */}
                <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform transition-transform duration-500">
                    {project.icon}
                  </span>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitFork size={14} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/surajmore303"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <GitFork size={16} />
              View All on GitHub
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
