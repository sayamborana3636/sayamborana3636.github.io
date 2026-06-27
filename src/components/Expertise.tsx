import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const skills = [
  { name: 'Artificial Intelligence', level: 0.9, x: 50, y: 8 },
  { name: 'Entrepreneurship', level: 0.95, x: 15, y: 25 },
  { name: 'Food Technology', level: 0.88, x: 85, y: 22 },
  { name: 'Problem Solving', level: 0.93, x: 28, y: 42 },
  { name: 'Research', level: 0.85, x: 72, y: 40 },
  { name: 'Innovation', level: 0.92, x: 10, y: 58 },
  { name: 'Leadership', level: 0.82, x: 90, y: 56 },
  { name: 'Product Design', level: 0.87, x: 38, y: 74 },
  { name: 'Business Strategy', level: 0.84, x: 62, y: 72 },
  { name: 'Creative Thinking', level: 0.9, x: 50, y: 92 },
];

interface NodePosition {
  x: number;
  y: number;
}

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [nodePositions, setNodePositions] = useState<NodePosition[]>([]);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    if (isInView && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      setContainerSize({ width: w, height: h });

      // Use full container dimensions so all nodes fit
      const positions = skills.map((s) => ({
        x: (s.x / 100) * w,
        y: (s.y / 100) * h,
      }));
      setNodePositions(positions);
    }
  }, [isInView]);

  return (
    <section id="expertise" ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#04040a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] blur-[150px] bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-blue-400/60 mb-4">
            05 — Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Skill
            <br />
            <span className="gradient-text-subtle">Constellation</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto text-sm">
            Move your cursor to interact with the constellation
          </p>
        </motion.div>

        {/* Constellation Visualization */}
        <motion.div
          ref={containerRef}
          className="relative w-full"
          style={{ minHeight: 550 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* SVG Lines between connected nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: 550 }}>
            {skills.map((skill, i) =>
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((connIdx) => {
                if (connIdx <= i || Math.abs(i - connIdx) > 3) return null;
                const fromPos = nodePositions[i];
                const toPos = nodePositions[connIdx];
                if (!fromPos || !toPos) return null;

                const midX = (fromPos.x + toPos.x) / 2;
                const midY = (fromPos.y + toPos.y) / 2;
                const mouseDist = Math.sqrt(
                  ((mousePos.x * containerSize.width) - midX) ** 2 +
                  ((mousePos.y * containerSize.height) - midY) ** 2
                );
                const lineOpacity = Math.max(0.05, Math.min(0.25, 250 / mouseDist));

                return (
                  <motion.line
                    key={`${i}-${connIdx}`}
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={toPos.x}
                    y2={toPos.y}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: lineOpacity } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                  />
                );
              })
            )}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(74,158,255,0.4)" />
                <stop offset="100%" stopColor="rgba(139,92,246,0.4)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Nodes */}
          {skills.map((skill, i) => {
            const pos = nodePositions[i];
            if (!pos) return null;

            const offsetX = ((mousePos.x - 0.5) * 20) * (skill.level * 0.5);
            const offsetY = ((mousePos.y - 0.5) * 20) * (skill.level * 0.5);

            return (
              <motion.div
                key={skill.name}
                className="absolute group"
                style={{
                  left: pos.x + offsetX,
                  top: pos.y + offsetY,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08, type: 'spring', stiffness: 200 }}
              >
                {/* Node circle */}
                <div className="relative">
                  <motion.div
                    className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full cursor-pointer"
                    style={{
                      background: `radial-gradient(circle, rgba(74,158,255,0.95) 0%, rgba(139,92,246,0.75) 100%)`,
                      boxShadow: `0 0 ${15 + skill.level * 20}px rgba(74,158,255,${0.3 + skill.level * 0.3}), 0 0 ${30 + skill.level * 30}px rgba(139,92,246,${0.15 + skill.level * 0.15})`,
                    }}
                    whileHover={{ scale: 2 }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      y: { duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  />

                  {/* Tooltip label */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="glass px-3 py-1.5 rounded-lg">
                      <span className="text-xs font-medium text-white whitespace-nowrap">{skill.name}</span>
                      <div className="mt-1 w-14 h-0.5 rounded-full bg-white/10 overflow-hidden mx-auto">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level * 100}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 1 + i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Always-visible label for each node */}
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-[10px] md:text-xs font-mono text-gray-500 whitespace-nowrap group-hover:text-gray-300 transition-colors pointer-events-none hidden md:block"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.06 }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend - Key skills highlighted below */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {['Artificial Intelligence', 'Entrepreneurship', 'Food Technology'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 glass rounded-full text-xs font-mono tracking-wider text-gray-400 hover:text-white hover:border-blue-400/30 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}