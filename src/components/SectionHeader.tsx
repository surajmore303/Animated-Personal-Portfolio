import Reveal from './Reveal';

interface Props {
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
}

export default function SectionHeader({ tag, title, highlight, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <Reveal>
        <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 glass px-4 py-1.5 rounded-full border border-cyan-500/20">
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-title">
          {title} <span className="gradient-text">{highlight}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="section-subtitle">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
