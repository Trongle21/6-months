import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full px-4 pt-12 pb-8 text-center relative"
    >
      {/* Decorative badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
      >
        <Sparkles className="w-4 h-4 text-gold" />
        <span className="text-sm font-medium text-dark">Kỷ Niệm Đặc Biệt</span>
        <Sparkles className="w-4 h-4 text-gold" />
      </motion.div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
      >
        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          6
        </span>
        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          {" "}Tháng{" "}
        </span>
        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Yêu
        </span>
        <br />
        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Nhau
        </span>
      </motion.h1>

      {/* Heart animation */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="inline-block my-6"
      >
        <div className="relative">
          <Heart className="w-16 h-16 md:w-20 md:h-20 text-rose-500 fill-current animate-pulse" />
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-rose-400 rounded-full blur-xl"
          />
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-dark-light max-w-md mx-auto mb-4"
        style={{ fontFamily: "var(--font-script)" }}
      >
        Từ ngày 16/03/2026 đến 16/09/2026
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"
      />

      {/* Floating hearts decoration */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 md:left-20 text-2xl md:text-4xl opacity-60"
      >
        💕
      </motion.div>
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 right-10 md:right-20 text-xl md:text-3xl opacity-50"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ 
          x: [0, 15, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-20 text-xl md:text-2xl opacity-40"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ 
          x: [0, -15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-32 right-20 text-2xl md:text-3xl opacity-50"
      >
        💖
      </motion.div>
    </motion.header>
  );
}
