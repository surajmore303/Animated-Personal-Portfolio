import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { stats } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

function CountUp({ target, inView }: { target: string; inView: boolean }) {
  const num = parseInt(target);
  const suffix = target.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [inView, num]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-dark-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="Who I Am" title="About" highlight="Me" subtitle="Passionate engineer building the future with AI and code" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <Reveal direction="left">
              <div className="glass rounded-2xl p-8 border border-white/5 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Suraj More</h3>
                    <p className="text-cyan-400 text-sm">Computer Engineering Student</p>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed mb-4">
                  I'm a passionate Computer Engineering student with a deep focus on
                  <span className="text-cyan-400 font-medium"> Artificial Intelligence</span>,
                  <span className="text-purple-400 font-medium"> Cloud Computing</span>,
                  <span className="text-green-400 font-medium"> Android Development</span>, and
                  <span className="text-pink-400 font-medium"> Full Stack Development</span>.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  I love building innovative solutions that bridge the gap between cutting-edge AI research
                  and real-world applications. Every project is an opportunity to solve meaningful problems.
                </p>
                <p className="text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">Mission:</span> To build impactful AI products
                  that solve real-world problems and make technology accessible to everyone.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['AI/ML', 'Cloud', 'Full Stack', 'Android', 'Problem Solving', 'Research'].map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right – Stats */}
          <div ref={ref}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1} direction="right">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-6 border border-white/5 text-center card-hover"
                  >
                    <div className="text-4xl font-black gradient-text mb-2">
                      <CountUp target={stat.value} inView={inView} />
                    </div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-6 glass rounded-2xl p-6 border border-cyan-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="font-semibold text-cyan-400">Current Focus</h4>
                </div>
                <ul className="space-y-2 text-white/60 text-sm">
                  {['Building AI-powered healthcare solutions', 'Exploring LLMs and Generative AI', 'Contributing to open-source projects', 'Preparing for top tech company roles'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
