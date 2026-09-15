import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const floatingIcons = ["💕", "💖", "💗", "💝", "💘", "❤️", "🌸", "✨", "🌹", "💐"];

function FloatingParticle({ delay, left, size }) {
  return (
    <motion.div
      initial={{ 
        y: "100vh", 
        x: 0,
        opacity: 0,
        rotate: 0,
        scale: 0
      }}
      animate={{ 
        y: "-100vh",
        x: Math.sin(delay) * 100,
        opacity: [0, 1, 1, 0],
        rotate: 360,
        scale: [0, 1, 1, 0.5]
      }}
      transition={{ 
        duration: 10 + Math.random() * 5,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: "absolute",
        left: `${left}%`,
        fontSize: `${size}px`,
        filter: "blur(1px)",
        pointerEvents: "none"
      }}
    >
      {floatingIcons[Math.floor(Math.random() * floatingIcons.length)]}
    </motion.div>
  );
}

function Star({ delay, left, top }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3
      }}
      style={{
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        pointerEvents: "none"
      }}
      className="text-gold"
    >
      ✨
    </motion.div>
  );
}

function GradientOrb({ delay, initialX, initialY, color }) {
  return (
    <motion.div
      animate={{
        x: [0, Math.random() * 50 - 25, 0],
        y: [0, Math.random() * 50 - 25, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        position: "absolute",
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(60px)",
        opacity: 0.3,
        pointerEvents: "none"
      }}
    />
  );
}

export default function FloatingHearts() {
  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: `particle-${i}`,
      delay: Math.random() * 10,
      left: Math.random() * 100,
      size: 20 + Math.random() * 30
    }));
    setParticles(newParticles);

    // Generate stars
    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: `star-${i}`,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      top: Math.random() * 100
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      <GradientOrb delay={0} initialX={10} initialY={20} color="#fda4af" />
      <GradientOrb delay={2} initialX={80} initialY={60} color="#fbcfe8" />
      <GradientOrb delay={4} initialX={50} initialY={80} color="#e9d5ff" />
      <GradientOrb delay={6} initialX={30} initialY={40} color="#fef3c7" />

      {/* Floating particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            delay={particle.delay}
            left={particle.left}
            size={particle.size}
          />
        ))}
      </AnimatePresence>

      {/* Stars */}
      <AnimatePresence>
        {stars.map((star) => (
          <Star
            key={star.id}
            delay={star.delay}
            left={star.left}
            top={star.top}
          />
        ))}
      </AnimatePresence>

      {/* Subtle grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
