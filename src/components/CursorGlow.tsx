import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMove);
    document.body.addEventListener('mouseleave', handleLeave);
    document.body.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.removeEventListener('mouseleave', handleLeave);
      document.body.removeEventListener('mouseenter', handleEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-[5] hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(74,158,255,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
        left: position.x - 200,
        top: position.y - 200,
        transform: 'translate3d(0,0,0)',
      }}
      animate={{ x: position.x - 200, y: position.y - 200 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 0.5 }}
    />
  );
}