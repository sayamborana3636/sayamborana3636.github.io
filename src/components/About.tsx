import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '3+', label: 'Ventures Founded' },
  { value: '2024', label: 'Started Journey' },
  { value: '∞', label: 'Problems to Solve' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section id="about" ref={ref} className="relative min-h-screen py-32 md:py-48 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] blur-[150px] bg-gradient-to-br from-blue-500 to-purple-600" />

      <div className="section-container relative z-10">
        {/* Section Label */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 md:mb-24"
        >
          <motion.span variants={itemVariants} className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-blue-400/60 mb-4">
            01 — About
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-7xl font-bold gradient-text-subtle leading-tight">
            Who I Am
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Story Text */}
          <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
            I'm a young entrepreneur driven by an insatiable curiosity to solve meaningful problems at the intersection of{' '}
            <span className="text-white">science</span>,{' '}
            <span className="text-blue-300">artificial intelligence</span>, and{' '}
            <span className="text-purple-300">product innovation</span>.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
            My journey began in food technology — reimagining how we produce and consume dairy. Today, I'm building AI-powered platforms that make nutrition intelligent, accessible, and personalized.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Every venture I build starts with one question:{' '}
            <span className="italic text-white/80">How can technology meaningfully improve human lives?</span>
          </motion.p>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="flex gap-8 mt-12 pt-8 border-t border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider mt-1 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

          {/* Right - Holographic Panel */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-10 relative overflow-hidden group">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, rgba(74,158,255,0.05) 0%, rgba(139,92,246,0.08) 100%)',
                }}
              />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-glow" />
                  <span className="text-xs font-mono tracking-widest uppercase text-gray-500">Core Focus Areas</span>
                </div>
                
                {[
                  { icon: '🧬', title: 'Food Technology', desc: 'Residue-free production & nutrition intelligence' },
                  { icon: '🤖', title: 'Artificial Intelligence', desc: 'AI-powered product solutions & automation' },
                  { icon: '🚀', title: 'Entrepreneurship', desc: 'Building ventures that solve real problems' },
                  { icon: '🔬', title: 'Research', desc: 'Evidence-based innovation & continuous learning' },
                ].map((area, i) => (
                  <motion.div
                    key={area.title}
                    className="group/item flex gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                  >
                    <span className="text-2xl mt-0.5 shrink-0">{area.icon}</span>
                    <div>
                      <h4 className="font-display font-semibold text-white group-hover/item:text-blue-300 transition-colors">{area.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{area.desc}</p>
                    </div>
                    <motion.div
                      className="ml-auto self-center opacity-0 group-hover/item:opacity-100 transition-opacity"
                      whileHover={{ x: 4 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-600">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/20 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-purple-500/20 rounded-br-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}