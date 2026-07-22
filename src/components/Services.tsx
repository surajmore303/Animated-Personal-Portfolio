import { motion } from 'framer-motion';
import { services } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="What I Offer" title="My" highlight="Services" subtitle="End-to-end solutions from concept to deployment" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                <div className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
