import { motion } from 'framer-motion';
import profileImg from '../assets/image.png';
import { TypeAnimation } from 'react-type-animation';
import { GitFork, Link, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="blob w-96 h-96 bg-cyan-500 top-20 -left-20 animation-delay-0" style={{ animationDelay: '0s' }} />
      <div className="blob w-80 h-80 bg-purple-600 bottom-20 right-10" style={{ animationDelay: '2s' }} />
      <div className="blob w-64 h-64 bg-blue-500 top-1/2 left-1/2" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-cyan-400 mb-6 border border-cyan-500/20"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">Suraj More</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-6 min-h-[2.5rem] flex items-center">
              <TypeAnimation
                sequence={[
                  'Computer Engineering Student', 2000,
                  'AI Developer 🤖', 2000,
                  'Full Stack Developer 💻', 2000,
                  'Cloud Enthusiast ☁️', 2000,
                  'Problem Solver 🧩', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text-2"
              />
            </div>

            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
              Passionate about building intelligent systems and innovative web solutions.
              Turning complex problems into elegant, AI-powered products that make a real impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {/* View Projects Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={16} />
                View Projects
              </motion.button>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                download="Suraj_More_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = `/resume.pdf?download=${Date.now()}`;
                  link.download = 'Suraj_More_Resume.pdf';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }}
                className="btn-secondary flex items-center gap-2 relative z-10"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: <GitFork size={20} />, href: 'https://github.com/surajmore303', label: 'GitHub' },
                { icon: <Link size={20} />, href: 'https://www.linkedin.com/in/surajmmore/', label: 'LinkedIn' },
                { icon: <Mail size={20} />, href: 'mailto:surajmore7858@gmail.com', label: 'Email' },
               ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-500/40 border border-white/10 transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right – Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end w-full overflow-hidden p-2"
          >

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex items-center justify-center w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[680px] aspect-[4/3] sm:aspect-[16/10] mx-auto"
            >
              {/* Outermost slow-spin gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-3xl"
                style={{
                  width: 'clamp(160px, 70vw, 450px)',
                  height: 'clamp(160px, 70vw, 450px)',
                  background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #06b6d4, transparent, #00d4ff)',
                  padding: 2,
                  borderRadius: 32,
                }}
              >
                <div style={{ width: '100%', height: '100%', borderRadius: 30, background: '#0a0a0f' }} />
              </motion.div>

              {/* Counter-spin inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute"
                style={{
                  width: 'clamp(140px, 60vw, 366px)',
                  height: 'clamp(150px, 62vw, 406px)',
                  borderRadius: 28,
                  border: '1px dashed rgba(0,212,255,0.25)',
                }}
              />

              {/* Glow backdrop */}
              <div
                className="absolute"
                style={{
                  width: 'clamp(130px, 50vw, 340px)',
                  height: 'clamp(140px, 52vw, 380px)',
                  borderRadius: 26,
                  background: 'radial-gradient(ellipse at 50% 30%, rgba(0,212,255,0.18) 0%, rgba(124,58,237,0.12) 60%, transparent 100%)',
                  filter: 'blur(18px)',
                }}
              />

              {/* Main image card */}
              <div
                className="relative overflow-hidden w-full h-full"
                style={{
                  borderRadius: 30,
                  border: '1.5px solid rgba(0,212,255,0.35)',
                  boxShadow: '0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(124,58,237,0.15), inset 0 0 30px rgba(0,212,255,0.05)',
                  background: 'linear-gradient(160deg, rgba(0,212,255,0.08) 0%, rgba(10,10,15,0.95) 40%)',
                }}
              >
                <img
                  src={profileImg}
                  alt="Suraj More"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
                {/* Bottom gradient fade */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: 80,
                    background: 'linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 100%)',
                  }}
                />
                {/* Name tag at bottom */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm tracking-wide">Suraj More</p>
                  <p className="text-cyan-400 text-xs font-medium">AI Developer</p>
                </div>
              </div>

              {/* Floating dot particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: i % 2 === 0 ? 6 : 4,
                    height: i % 2 === 0 ? 6 : 4,
                    background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#7c3aed' : '#06b6d4',
                    top: `${15 + i * 13}%`,
                    left: i % 2 === 0 ? '0%' : '96%',
                    boxShadow: `0 0 8px ${i % 3 === 0 ? '#00d4ff' : '#7c3aed'}`,
                  }}
                  animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}

              {/* Floating badges
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute glass px-3 py-1.5 rounded-xl border border-cyan-500/30 text-xs font-semibold text-cyan-400 whitespace-nowrap"
                style={{ left: -90, top: '22%', boxShadow: '0 4px 20px rgba(0,212,255,0.15)' }}
              >
                🤖 AI Developer
              </motion.div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
                className="absolute glass px-3 py-1.5 rounded-xl border border-purple-500/30 text-xs font-semibold text-purple-400 whitespace-nowrap"
                style={{ right: -85, bottom: '28%', boxShadow: '0 4px 20px rgba(124,58,237,0.15)' }}
              >
                ☁️ Cloud Expert
              </motion.div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.8 }}
                className="absolute glass px-3 py-1.5 rounded-xl border border-green-500/30 text-xs font-semibold text-green-400 whitespace-nowrap"
                style={{ right: -80, top: '12%', boxShadow: '0 4px 20px rgba(16,185,129,0.15)' }}
              >
                💻 Full Stack
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/30 text-xs cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Scroll Down</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
