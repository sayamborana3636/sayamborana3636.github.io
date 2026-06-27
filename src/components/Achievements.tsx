import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  { title: 'White Goat Residue-Free Milk', subtitle: 'Founder', icon: '◆', color: 'from-emerald-400 to-cyan-400' },
  { title: 'GMRT Science Exhibition', subtitle: 'Winner 2024', icon: '★', color: 'from-yellow-400 to-orange-400' },
  { title: 'Google Gemini Student Ambassador', subtitle: 'Program Member', icon: '✦', color: 'from-blue-400 to-indigo-400' },
  { title: 'BioSync', subtitle: 'Founder', icon: '◈', color: 'from-blue-400 to-purple-400' },
  { title: 'Vyzendra', subtitle: 'Founder', icon: '✧', color: 'from-purple-400 to-pink-400' },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060610] to-transparent" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-yellow-400/60 mb-4">
            04 — Achievements
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Milestones
            <br />
            <span className="gradient-text-subtle">Unlocked</span>
          </h2>
        </motion.div>

        {/* Achievement Grid - Holographic Trophies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group perspective-[1000px]"
            >
              <div className="relative glass-strong rounded-2xl p-8 text-center h-full transition-all duration-500 hover:bg-white/[0.04] hover:scale-[1.02]">
                {/* Icon / Trophy symbol */}
                <motion.div
                  className="text-4xl mb-5 inline-block"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{ 
                    y: [0, -4, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                  {achievement.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-xs font-mono tracking-wider text-gray-500 uppercase">
                  {achievement.subtitle}
                </p>

                {/* Bottom glow line */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                />

                {/* Floating particles around card */}
                {[...Array(3)].map((_, pi) => (
                  <motion.div
                    key={pi}
                    className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-40`}
                    style={{
                      top: `${20 + pi * 25}%`,
                      left: `${pi === 0 ? 10 : pi === 1 ? 85 : 50}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{ duration: 2 + pi, repeat: Infinity, delay: pi * 0.5 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}