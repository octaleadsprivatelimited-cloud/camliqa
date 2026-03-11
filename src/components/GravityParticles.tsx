import { motion } from "framer-motion";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 8,
  opacity: Math.random() * 0.3 + 0.1,
}));

const GravityParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: -20,
          }}
          animate={{
            y: [0, window.innerHeight + 40],
            x: [0, Math.sin(p.id) * 40, 0],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

export default GravityParticles;
