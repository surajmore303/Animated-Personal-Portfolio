import { motion } from 'framer-motion';
import { GitFork, Link, Mail, Heart, ArrowUp } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark-3 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black gradient-text mb-3">SM</div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Computer Engineering Student & AI Developer building impactful solutions with modern technology.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <GitFork size={16} />, href: 'https://github.com/surajmore303', label: 'GitHub' },
                { icon: <Link size={16} />, href: 'https://www.linkedin.com/in/surajmmore/', label: 'LinkedIn' },
                { icon: <Mail size={16} />, href: 'mailto:surajmore7858@gmail.com', label: 'Email' },
               ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/40 hover:text-cyan-400 text-sm text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-white/40">
              <p>📧 Surajmore7858@gmail.com</p>
              <p>📍 Maharashtra, India</p>
              <p>💼 Open to opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> by
            <span className="gradient-text font-semibold">Suraj More</span>
            · © {new Date().getFullYear()}
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
