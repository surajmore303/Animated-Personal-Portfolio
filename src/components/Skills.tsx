import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const categories = ['All', 'Programming', 'Frontend', 'Backend', 'AI/ML', 'Cloud', 'Database', 'DevOps', 'Mobile'];

function SkillCard({ skill, inView }: { skill: typeof skills[0]; inView: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass rounded-xl p-4 border border-white/5 hover:border-cyan-500/20 transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-medium text-sm text-white/80">{skill.name}</span>
        </div>
        <span className="text-xs text-cyan-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
      <div className="mt-2 text-xs text-white/30">{skill.category}</div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="section-padding bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="What I Know" title="My" highlight="Skills" subtitle="Technologies and tools I work with" />

        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'glass text-white/50 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.04}>
              <SkillCard skill={skill} inView={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
