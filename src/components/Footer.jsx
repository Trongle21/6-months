import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 py-12 mt-8 text-center"
    >
      <div className="max-w-md mx-auto">
        {/* Decorative hearts */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center gap-2 text-rose-400 mb-4"
        >
          <Heart className="w-4 h-4 fill-current" />
          <Heart className="w-6 h-6 fill-current" />
          <Heart className="w-4 h-4 fill-current" />
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-dark mb-4 italic"
          style={{ fontFamily: "var(--font-script)" }}
        >
          "Yêu nhau không phải là nhìn nhau, mà là cùng nhìn về một hướng."
        </motion.p>

        {/* Names */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-dark-light font-medium"
        >
          Forever & Always 💕
        </motion.p>
      </div>

      {/* Bottom gradient decoration */}
      <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent rounded-full max-w-xs mx-auto" />
    </motion.footer>
  );
}
