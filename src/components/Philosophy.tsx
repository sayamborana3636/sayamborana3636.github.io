import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden min-h-screen flex items-center">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating geometric shape */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px]"
          style={{ rotate: rotation, scale }}
        >
          {/* Hexagon pattern */}
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.04]">
            <defs>
              <pattern id="hexGrid" width="56" height="98" patternUnits="userSpaceOnUse">
                <path d="M28 0l28 16v34L28 66 0 50V16z" fill="none" stroke="white" strokeWidth="0.5" />
                <path d="M28 98l28-16V48L28 32 0 48v34z" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#hexGrid)" />
          </svg>
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px] bg-blue-500" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-[0.04] blur-[100px] bg-purple-500" />
        
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <motion.span
            className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-purple-400/60 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            06 — Philosophy
          </motion.span>

          {/* Quote mark */}
          <motion.div
            className="text-6xl md:text-8xl text-blue-400/15 font-serif mb-4 select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            “
          </motion.div>

          {/* Main quote */}
          <blockquote className="relative">
            <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-white">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Innovation begins where{' '}
              </motion.span>
              <motion.span
                className="inline-block gradient-text font-normal"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                curiosity
              </motion.span>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {' '}meets{' '}
              </motion.span>
              <motion.span
                className="inline-block gradient-text font-normal"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              >
                courage
              </motion.span>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                .
              </motion.span>
            </p>
          </blockquote>

          {/* Attribution */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-400/40" />
            <span className="text-sm font-mono tracking-[0.2em] text-gray-500 uppercase">Sayam Borana</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-purple-400/40" />
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="mt-16 flex justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: i === 2 ? 'rgba(74,158,255,0.8)' : 'rgba(255,255,255,0.1)',
                  boxShadow: i === 2 ? '0 0 10px rgba(74,158,255,0.5)' : 'none',
                }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}