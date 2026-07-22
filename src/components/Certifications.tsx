import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="Credentials" title="My" highlight="Certifications" subtitle="Verified skills and knowledge from top platforms" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.04, y: -6 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white mb-1 group-hover:text-cyan-400 transition-colors leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-white/40 text-xs">{cert.issuer}</p>
                  </div>
                </div>

                {/* <div className="mt-4 flex items-center gap-2 text-xs text-white/30">
                  <Award size={12} style={{ color: cert.color }} />
                  <span>Verified Certificate</span>
                </div> */}

                <div
                  className="mt-3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
