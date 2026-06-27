import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sayam-borana-jain',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: 'hover:text-blue-400 hover:border-blue-400/30',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sayamborana',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: 'hover:text-white hover:border-white/20',
  },
  {
    name: 'Email',
    url: 'mailto:sayamborana3636@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: 'hover:text-purple-400 hover:border-purple-400/30',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/sayamborana',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: 'hover:text-gray-300 hover:border-gray-400/30',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030306]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
      
      {/* Radial glow behind terminal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[120px] bg-gradient-to-br from-blue-500 to-purple-600" />

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-cyan-400/60 mb-4">
              07 — Contact
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Get In
              <span className="gradient-text-subtle"> Touch</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto mt-4">
              Always open to discussing new opportunities, ideas, or collaborations.
            </p>
          </div>

          {/* Terminal-style contact panel */}
          <motion.div
            className="glass-strong rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-3 text-xs font-mono text-gray-600 tracking-wider">contact@sayam ~ %</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-10 space-y-4">
              {/* Prompt line */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="text-green-400 font-mono text-sm shrink-0 mt-0.5">$</span>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  <span className="text-blue-300">echo</span> "Let's connect and build something extraordinary together."
                </p>
              </motion.div>

              {/* Output line */}
              <motion.p
                className="text-gray-300 font-mono text-sm pl-5 border-l-2 border-blue-500/30 py-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                → Choose your channel:
              </motion.p>

              {/* Social links grid */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center gap-4 p-4 rounded-xl glass border border-white/[0.04] transition-all duration-300 ${link.color}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + i * 0.12, duration: 0.5 }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-white transition-colors ${hoveredIndex === i ? 'bg-white/10' : 'bg-white/[0.03]'}`}>
                      {link.icon}
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                      <span className="block text-[10px] font-mono text-gray-600 group-hover:text-gray-400 transition-colors mt-0.5">
                        {link.url.replace('https://', '').replace('mailto:', '')}
                      </span>
                    </div>
                    
                    {/* Arrow indicator */}
                    <motion.svg
                      className="w-4 h-4 ml-auto text-gray-700 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100"
                      viewBox="0 0 16 16" fill="none"
                      animate={{ x: hoveredIndex === i ? 4 : 0 }}
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.a>
                ))}
              </div>

              {/* Closing prompt */}
              <motion.div
                className="flex items-center gap-3 mt-8 pt-6 border-t border-white/[0.03]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                <span className="text-green-400 font-mono text-sm shrink-0">$</span>
                <span className="font-mono text-sm text-gray-500">
                  <motion.span
                    className="inline-block w-2 h-4 bg-blue-400/80"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <p className="text-xs text-gray-600 font-mono tracking-wider">
              Built with ambition · Designed with purpose · Crafted for impact
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}