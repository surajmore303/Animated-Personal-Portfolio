import { motion } from 'framer-motion';
import { journey } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Journey() {
  return (
    <section id="journey" className="section-padding">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="My Story" title="My" highlight="Journey" subtitle="From diploma to AI developer — every step shaped who I am" />

        <div className="relative">
          {/* Vertical line (Desktop center line, Mobile left line) */}
          <div className="hidden md:block timeline-line" />
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-600 to-transparent md:hidden" />

          <div className="space-y-8">
            {journey.map((item, i) => (
              <Reveal key={i} delay={i * 0.1} direction={item.side === 'left' ? 'left' : 'right'}>
                <div className={`relative flex items-center gap-6 pl-8 md:pl-0 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  {/* Mobile Dot */}
                  <div className="absolute left-[3px] top-6 w-2.5 h-2.5 rounded-full bg-cyan-400 border border-dark md:hidden" />

                  {/* Card */}
                  <div className={`w-full md:w-5/12 ${item.side === 'right' ? 'md:text-right' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-4 sm:p-6 border border-white/5 card-hover"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="text-xs text-cyan-400 font-semibold">{item.year}</div>
                          <h3 className="font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-purple-400 text-sm font-medium mb-2">{item.org}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center dot (Desktop) */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 border-2 border-dark glow-blue flex-shrink-0" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
