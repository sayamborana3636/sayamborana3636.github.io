import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Milestone {
  year: string;
  items: string[];
  isFuture?: boolean;
}

const milestones: Milestone[] = [
  {
    year: '2024',
    items: [
      'Founded White Goat Residue-Free Milk',
      'Winner — GMRT Science Exhibition 2024',
    ],
  },
  {
    year: '2025',
    items: [
      'Started building AI-powered products',
      'Research in Food Technology & Nutrition Intelligence',
    ],
  },
  {
    year: '2026',
    items: [
      'Founder — BioSync',
      'Founder — Vyzendra',
      'Google Gemini Student Ambassador',
    ],
  },
  {
    year: 'Future',
    items: [
      'Building globally impactful technology ventures',
    ],
    isFuture: true,
  },
];

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={cardRef} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Content Card */}
      <motion.div
        className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
        initial={{ opacity: 0, x: isLeft ? -60 : 60, scale: 0.95 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`glass rounded-2xl p-6 md:p-8 group hover:bg-white/[0.04] transition-all duration-500 ${milestone.isFuture ? 'border-purple-500/20' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className={`font-display text-3xl md:text-4xl font-black ${milestone.isFuture ? 'gradient-text' : 'text-white/90'}`}>
              {milestone.year}
            </span>
            {milestone.isFuture && (
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                Ahead
              </span>
            )}
          </div>
          <ul className="space-y-3">
            {milestone.items.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-gray-400 group/li"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/50 shrink-0 group-hover/li:bg-blue-400 transition-colors" />
                <span className="text-sm md:text-base leading-relaxed group-hover/li:text-gray-200 transition-colors">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Center Node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 items-center justify-center">
        <motion.div
          className={`w-3 h-3 rounded-full ${milestone.isFuture ? 'bg-purple-500' : 'bg-blue-400'}`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, type: 'spring' }}
          style={{ boxShadow: milestone.isFuture ? '0 0 20px rgba(139,92,246,0.5)' : '0 0 20px rgba(74,158,255,0.5)' }}
        />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-[calc(50%-40px)]" />
    </div>
  );
}

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030308]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-purple-400/60 mb-4">
            02 — Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Entrepreneurial
            <br />
            <span className="gradient-text-subtle">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2">
            <div className="w-full h-full bg-white/[0.04]" />
            <motion.div
              className="w-full absolute top-0 bg-gradient-to-b from-blue-400 via-purple-500 to-purple-400"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-16 md:space-y-24 pl-10 md:pl-0">
            {milestones.map((milestone, i) => (
              <MilestoneCard key={milestone.year} milestone={milestone} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}