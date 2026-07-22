import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-2">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader tag="Work History" title="My" highlight="Experience" subtitle="Professional roles and internships" />

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-cyan-500/20 transition-all flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white">{exp.role}</h3>
                    <span className="text-xs text-cyan-400 glass px-3 py-1 rounded-full border border-cyan-500/20 flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={12} className="text-purple-400" />
                    <span className="text-purple-400 text-sm font-medium">{exp.company}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map(t => (
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
      </div>
    </section>
  );
}
