import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface Venture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  color: string;
  glowColor: string;
  icon: React.ReactNode;
}

const ventures: Venture[] = [
  {
    id: 'whitegoat',
    name: 'White Goat',
    tagline: 'Residue-Free Milk',
    description: 'Revolutionizing dairy production through innovative residue-free milk technology. Cleaner, safer, and more sustainable dairy solutions for health-conscious consumers.',
    tags: ['Food Tech', 'Dairy Innovation', 'Sustainability'],
    color: 'from-emerald-400/20 to-cyan-400/10',
    glowColor: 'shadow-emerald-500/20',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400/40" />
        <path d="M18 28c0-4 2-8 6-10 4 2 6 6 6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-emerald-300" />
        <circle cx="24" cy="17" r="3" fill="currentColor" className="text-emerald-400" />
      </svg>
    ),
  },
  {
    id: 'biosync',
    name: 'BioSync',
    tagline: 'AI Food Intelligence',
    description: 'An AI-powered platform that transforms how we understand nutrition. Personalized insights, smart recommendations, and data-driven wellness decisions.',
    tags: ['AI/ML', 'Nutrition', 'Health Tech'],
    color: 'from-blue-400/20 to-purple-400/10',
    glowColor: 'shadow-blue-500/20',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" className="text-blue-400/40" />
        <path d="M16 30c2-6 6-10 8-10s6 4 8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-blue-300" />
        <circle cx="20" cy="19" r="2" fill="currentColor" className="text-blue-400" />
        <circle cx="28" cy="21" r="2" fill="currentColor" className="text-purple-400" />
        <path d="M24 13v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-blue-300" />
      </svg>
    ),
  },
  {
    id: 'vyzendra',
    name: 'Vyzendra',
    tagline: 'Future Technology',
    description: 'A futuristic technology venture focused on building impactful solutions that address meaningful global challenges through innovation and cutting-edge technology.',
    tags: ['Technology', 'Innovation', 'Global Impact'],
    color: 'from-purple-400/20 to-pink-400/10',
    glowColor: 'shadow-purple-500/20',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" className="text-purple-400/40" />
        <polygon points="24,12 29,22 39,23 31,31 33,41 24,36 15,41 17,31 9,23 19,22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" className="text-purple-300" />
      </svg>
    ),
  },
];

export default function Ventures() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="ventures" ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[130px] bg-blue-500" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[120px] bg-purple-500" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-cyan-400/60 mb-4">
            03 — Ventures
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Building The
            <br />
            <span className="gradient-text-subtle">Future</span>
          </h2>
        </motion.div>

        {/* Venture Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ventures.map((venture, i) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActiveId(venture.id)}
              onMouseLeave={() => setActiveId(null)}
          className="group relative"
        >
          <div className={`relative glass rounded-2xl p-8 h-full transition-all duration-700 overflow-hidden ${activeId === venture.id ? 'bg-white/[0.05]' : ''}`}>
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                {venture.icon}
              </div>

              {/* Name & Tagline */}
              <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                {venture.name}
              </h3>
              <p className="text-sm font-mono text-gray-500 mb-4 tracking-wider">{venture.tagline}</p>
              
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {venture.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {venture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-white/[0.04] text-gray-500 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover glow effect */}
            <motion.div
              className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${venture.glowColor}`}
              style={{ boxShadow: activeId === venture.id ? '0 0 40px rgba(74,158,255,0.15), 0 0 80px rgba(139,92,246,0.1)' : 'none' }}
            />

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${venture.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{ borderRadius: '0 100% 0 0' }} />
            </div>
          </div>
        </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}