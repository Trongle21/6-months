import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart, Sparkles, Mail } from "lucide-react";
import { ANNIVERSARY_DATE, LETTER_CONTENT } from "../config";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(
    () => new Date() >= ANNIVERSARY_DATE,
  );

  // Kiểm tra thời gian mỗi giây để mở khóa lá thư
  useEffect(() => {
    const checkUnlock = () => {
      setIsUnlocked(new Date() >= ANNIVERSARY_DATE);
    };

    checkUnlock(); // kiểm tra ngay khi mount
    const timer = setInterval(checkUnlock, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const Confetti = () => {
    const colors = [
      "#e11d48",
      "#ec4899",
      "#f472b6",
      "#fbbf24",
      "#a855f7",
      "#fef3c7",
    ];
    const confetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
    }));

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            initial={{ y: -20, x: `${c.left}vw`, opacity: 1, rotate: 0 }}
            animate={{
              y: "100vh",
              rotate: Math.random() * 720,
              opacity: 0,
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: c.delay,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              width: c.size,
              height: c.size,
              backgroundColor: c.color,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto px-4 py-12 relative"
    >
      <div className="text-center mb-8">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center gap-2 text-pink-500 mb-4"
        >
          <Heart className="w-5 h-5 fill-current" />
          <span
            className="text-lg font-medium"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Love Letter
          </span>
          <Heart className="w-5 h-5 fill-current" />
        </motion.div>
        <h2
          className="text-2xl md:text-3xl font-semibold text-dark"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {isUnlocked ? "Gửi Đến Người Đặc Biệt" : "Lá Thư Bí Mật"}
        </h2>
        <p className="text-sm text-dark-light mt-2">
          {isUnlocked
            ? "Hãy mở ra để đọc những lời yêu thương 💝"
            : "Lá thư sẽ được mở khóa khi đếm ngược kết thúc 🔒"}
        </p>
      </div>

      <AnimatePresence>{showConfetti && <Confetti />}</AnimatePresence>

      {/* Letter Container */}
      <div
        className="letter-container relative"
        style={{ perspective: "1000px" }}
      >
        {!isUnlocked ? (
          /* LOCKED STATE */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 md:p-12 text-center shadow-2xl border-2 border-pink-200">
              {/* Animated padlock */}
              <motion.div
                animate={{
                  rotate: [0, -5, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-6 shadow-lg"
              >
                <Lock
                  className="w-10 h-10 md:w-12 md:h-12 text-white"
                  strokeWidth={2.5}
                />
              </motion.div>

              <h3
                className="text-2xl md:text-3xl font-bold text-dark mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Lá Thư Đang Được Khóa
              </h3>

              <p className="text-dark-light mb-6 max-w-md mx-auto">
                Hãy đợi đến khi đồng hồ đếm ngược phía trên kết thúc nhé, lúc đó
                bạn sẽ mở khóa được lá thư này 💕
              </p>

              {/* Mini countdown showing time remaining */}
              <MiniCountdown />

              {/* Floating hearts decoration */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="absolute top-6 left-6 text-2xl"
              >
                💝
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-10 right-8 text-2xl"
              >
                💖
              </motion.div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-12 text-xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-6 right-10 text-2xl"
              >
                🌸
              </motion.div>
            </div>
          </motion.div>
        ) : !isOpen ? (
          /* UNLOCKED - Envelope */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpenLetter}
            className="cursor-pointer relative"
          >
            {/* Unlock celebration ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-lg border-4 border-rose-300"
            />

            {/* Envelope shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg blur-lg opacity-30 transform translate-y-2" />

            {/* Envelope body */}
            <div className="letter-envelope relative bg-gradient-to-b from-cream to-yellow-100 rounded-lg p-6 md:p-8 shadow-2xl border-2 border-yellow-200">
              {/* Decorative seal */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-200">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-white fill-current" />
                </div>
              </motion.div>

              {/* Envelope flap (closed) */}
              <div className="letter-flap">
                <div className="absolute inset-0 bg-gradient-to-b from-cream to-yellow-100" />
              </div>

              {/* Letter text hint */}
              <div className="pt-8 md:pt-12 text-center">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center justify-center gap-2 text-rose-400"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Nhấn để mở thư</span>
                </motion.div>
                <p className="mt-4 text-dark-light text-sm">
                  ✨ Một lá thư từ trái tim ✨
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* OPEN LETTER */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white to-cream rounded-lg p-6 md:p-10 shadow-2xl border-2 border-rose-100"
          >
            {/* Decorative top */}
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-gold animate-pulse" />
              <div className="mx-4 h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
              <Sparkles className="w-6 h-6 text-gold animate-pulse" />
            </div>

            {/* Letter content */}
            <div className="text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-rose-500 mb-6"
                style={{ fontFamily: "var(--font-script)" }}
              >
                {LETTER_CONTENT.greeting}
              </motion.h3>

              {LETTER_CONTENT.message.map((msg, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="text-dark text-base md:text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {msg}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-8 text-right"
              >
                <p
                  className="text-xl md:text-2xl font-bold text-pink-500"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  {LETTER_CONTENT.closing}
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block mt-2"
                >
                  <span className="text-4xl">💝</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative bottom */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
              <Heart className="w-4 h-4 mx-2 text-rose-400 fill-current animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

/* Mini countdown shown when letter is locked */
function MiniCountdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = ANNIVERSARY_DATE - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "ngày" },
    { value: timeLeft.hours, label: "giờ" },
    { value: timeLeft.minutes, label: "phút" },
    { value: timeLeft.seconds, label: "giây" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-md mx-auto mt-4">
      {units.map((u, i) => (
        <motion.div
          key={u.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="bg-white/60 backdrop-blur rounded-xl p-2 md:p-3 border border-pink-200"
        >
          <div className="text-lg md:text-2xl font-bold text-rose-500">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs text-dark-light uppercase tracking-wider">
            {u.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
