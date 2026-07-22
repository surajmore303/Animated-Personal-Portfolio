import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="Milestones" title="My" highlight="Achievements" subtitle="Recognition and milestones along the journey" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
