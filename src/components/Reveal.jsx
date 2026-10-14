import { motion } from 'framer-motion';
import { useApp } from '../hooks/AppContext';

/** Fade/slide-in wrapper driven by the global animation speed + intensity. */
export default function Reveal({ children, index = 0, className = '', as = 'div' }) {
  const { motion: m } = useApp();
  const Tag = motion[as] || motion.div;
  if (m.off) return <Tag className={className}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: m.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: m.duration, ease: m.ease, delay: Math.min(index, 8) * m.stagger }}
    >
      {children}
    </Tag>
  );
}
