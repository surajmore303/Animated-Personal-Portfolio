import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitFork, Link, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello Suraj,\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
    const whatsappUrl = `https://wa.me/919422078548?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass = "w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm bg-transparent";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="Get In Touch" title="Contact" highlight="Me" subtitle="Let's build something amazing together" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – Info */}
          <Reveal direction="left">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="font-bold text-xl mb-2">Let's Talk 👋</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  Feel free to reach out!
                </p>
              </div>

              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'Surajmore7858@gmail.com', href: 'mailto:Surajmore7858@gmail.com', color: '#00d4ff' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+91 94220 78548', href: 'tel:+91 94220 78548', color: '#7c3aed' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Maharashtra, India', href: '#', color: '#06b6d4' },
                { icon: <GitFork size={18} />, label: 'GitHub', value: 'github.com', href: 'https://github.com/surajmore303', color: '#ffffff' },
                { icon: <Link size={18} />, label: 'LinkedIn', value: 'linkedin.com', href: 'https://www.linkedin.com/in/surajmmore/', color: '#0077b5' },
              ].map(item => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}20`, color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-white/40">{item.label}</div>
                    <div className="text-sm font-medium text-white/80 group-hover:text-cyan-400 transition-colors break-all">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Right – Form */}
          <Reveal direction="right">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Subject</label>
                <input
                  type="text"
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {sent ? '✅ Message Sent!' : <><Send size={16} /> Send Message</>}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
