import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(74,158,255,0.4) 0%, transparent 70%)',
            top: '10%',
            left: '20%',
            y,
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)',
            bottom: '10%',
            right: '15%',
            y,
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, scale }}
      >
        {/* Tagline above name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-mono tracking-[0.25em] uppercase text-blue-300/80">
            Future Global Founder
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-6"
          style={{ y: textY }}
        >
          <motion.span
            className="block gradient-text"
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            SAYAM
          </motion.span>
          <motion.span
            className="block text-white mt-2"
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            BORANA
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {['Founder', 'Innovator', 'Researcher', 'Builder'].map((role, i) => (
            <motion.span
              key={role}
              className="text-sm sm:text-base text-gray-400 font-mono tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.15 }}
            >
                {role}
                {i < 3 && <span className="mx-2 text-purple-500/50">·</span>}
              </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Building ventures where{' '}
          <span className="text-blue-300">science</span>,{' '}
          <span className="text-purple-300">technology</span>, and{' '}
          <span className="text-cyan-300">entrepreneurship</span>{' '}
          solve real-world problems.
        </motion.p>

        {/* Photo */}
        <motion.div
          className="relative inline-block mb-12"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full" style={{
              padding: '2px',
              background: 'linear-gradient(135deg, rgba(74,158,255,0.6), rgba(139,92,246,0.6), rgba(34,211,238,0.4))',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }} />
            <div className="absolute inset-[2px] rounded-full overflow-hidden bg-[#111]">
              <img
                src="/uploads/upload_1.jpg"
                alt="Sayam Borana"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(74,158,255,0.3), transparent, rgba(139,92,246,0.3), transparent)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          {/* Floating elements around photo */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-400/30 backdrop-blur-sm animate-float"
            style={{ animationDelay: '0s' }}
          />
          <motion.div
            className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-purple-400/30 backdrop-blur-sm animate-float"
            style={{ animationDelay: '1s' }}
          />
          <motion.div
            className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-cyan-400/30 backdrop-blur-sm animate-float"
            style={{ animationDelay: '2s' }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-mono">Explore</span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-blue-400/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}