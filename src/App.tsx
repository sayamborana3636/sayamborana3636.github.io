import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Ventures from './components/Ventures';
import Achievements from './components/Achievements';
import Expertise from './components/Expertise';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import ParticleSystem from './components/ParticleSystem';
import CursorGlow from './components/CursorGlow';
import Navigation from './components/Navigation';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setLoading(false), 1500);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" loaded={loaded} />}
      </AnimatePresence>
      
      {!loading && (
        <div ref={containerRef} className="noise-overlay relative">
          <ParticleSystem />
          <CursorGlow />
          <Navigation />
          
          <main className="relative z-10">
            <Hero />
            <About />
            <Journey />
            <Ventures />
            <Achievements />
            <Expertise />
            <Philosophy />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

function LoadingScreen({ loaded }: { loaded: boolean }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex flex-col items-center">
        {/* Energy Core */}
        <motion.div
          className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={loaded ? { scale: 1.2, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Outer rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-blue-500/20"
            animate={{ rotate: 360, scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-3 rounded-full border border-purple-500/30"
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border border-cyan-500/25"
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Core glow */}
          <motion.div
            className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(74,158,255,0.8) 0%, rgba(139,92,246,0.6) 40%, transparent 70%)',
              filter: 'blur(10px)',
              animation: 'energy-core 2s ease-in-out infinite'
            }}
          />
          <motion.div
            className="absolute w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/90"
            style={{ boxShadow: '0 0 60px rgba(74,158,255,0.8), 0 0 120px rgba(139,92,246,0.5)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Name reveal */}
        <motion.div
          className="mt-12 text-center overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={loaded ? { height: 80, opacity: 0 } : { height: 80, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider gradient-text"
            initial={{ y: 100, opacity: 0 }}
            animate={loaded ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            SAYAM BORANA
          </motion.h1>
          <motion.p
            className="mt-3 text-sm md:text-base tracking-[0.3em] uppercase text-gray-400 font-mono"
            initial={{ y: 50, opacity: 0 }}
            animate={loaded ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Founder · Innovator · Researcher
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="py-12 text-center relative z-10 border-t border-white/5">
      <p className="text-xs text-gray-600 font-mono tracking-wider">
        © 2025 Sayam Borana — Crafted with ambition and code
      </p>
    </footer>
  );
}

export default App;