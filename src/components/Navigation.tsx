import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: bgOpacity.get() > 0 ? `rgba(5,5,5,${bgOpacity.get()})` : 'transparent', backdropFilter: bgOpacity.get() > 0.5 ? 'blur(20px)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-display text-lg font-bold tracking-wider gradient-text cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          SB.
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 font-mono relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className="w-5 h-[1.5px] bg-white block"
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-5 h-[1.5px] bg-white block"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-5 h-[1.5px] bg-white block"
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden glass-strong overflow-hidden"
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors font-mono py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
}