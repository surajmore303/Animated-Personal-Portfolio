import { motion } from 'framer-motion';
import { techStack } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function TechStack() {
  return (
    <section className="section-padding bg-dark-2">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader tag="Tools & Tech" title="Tech" highlight="Stack" subtitle="The technologies powering my projects" />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="glass rounded-2xl px-5 py-3 border border-white/5 hover:border-cyan-500/20 transition-all flex items-center gap-3 cursor-default"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-white/70 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
