import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Heart } from "lucide-react";
import { ANNIVERSARY_DATE } from "../config";

export default function Countdown() {
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
      isExpired: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-8">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center gap-2 text-rose-500 mb-4"
        >
          <Heart className="w-6 h-6 fill-current" />
          <span className="text-lg font-medium" style={{ fontFamily: "var(--font-script)" }}>
            Countdown
          </span>
          <Heart className="w-6 h-6 fill-current" />
        </motion.div>
        <h2 
          className="text-2xl md:text-3xl font-semibold text-dark mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Đếm Ngược Đến 17:00 - 16/09/2026
        </h2>
        <div className="flex items-center justify-center gap-2 text-dark-light">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Thời gian còn lại</span>
        </div>
      </div>

      {timeLeft.isExpired ? (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="glass rounded-3xl p-8 md:p-12 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>
          <h3 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Chúc Mừng Kỷ Niệm!
          </h3>
        </motion.div>
      ) : (
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div 
                className="text-xs md:text-sm uppercase tracking-wider text-dark-light font-medium"
              >
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 opacity-20 blur-xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 opacity-20 blur-xl"
      />
    </motion.section>
  );
}
