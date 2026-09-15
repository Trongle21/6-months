import { motion } from "framer-motion";
import { Calendar, Heart, Gift, Coffee, Music, Plane } from "lucide-react";

const milestones = [
  {
    month: "Tháng 1",
    date: "16/03/2026",
    title: "Ngày đầu tiên",
    description: "Khoảnh khắc trái tim bắt đầu nhảy",
    icon: Heart,
    emoji: "💫",
  },
  {
    month: "Tháng 2",
    date: "16/04/2026",
    title: "Tháng đầu tiên",
    description: "Những lời yêu thương đầu tiên",
    icon: Coffee,
    emoji: "☕",
  },
  {
    month: "Tháng 3",
    date: "16/05/2026",
    title: "Hẹn hò đầu tiên",
    description: "Những kỷ niệm đáng nhớ",
    icon: Gift,
    emoji: "🎁",
  },
  {
    month: "Tháng 4",
    date: "16/06/2026",
    title: "Cùng nhau đi xa",
    description: "Chuyến đi đầu tiên",
    icon: Plane,
    emoji: "✈️",
  },
  {
    month: "Tháng 5",
    date: "16/07/2026",
    title: "Bài hát của chúng ta",
    description: "Âm nhạc gắn kết tình yêu",
    icon: Music,
    emoji: "🎵",
  },
  {
    month: "Tháng 6",
    date: "16/09/2026",
    title: "Kỷ niệm 6 tháng",
    description: "Hành trình tình yêu tiếp tục",
    icon: Calendar,
    emoji: "🎉",
  },
];

export default function Timeline() {
  return null;

  // return (
  //   <motion.section
  //     initial={{ opacity: 0 }}
  //     whileInView={{ opacity: 1 }}
  //     viewport={{ once: true, margin: "-100px" }}
  //     transition={{ duration: 0.8 }}
  //     className="w-full max-w-4xl mx-auto px-4 py-12"
  //   >
  //     <div className="text-center mb-10">
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         className="inline-flex items-center gap-2 text-pink-500 mb-4"
  //       >
  //         <Heart className="w-5 h-5 fill-current" />
  //         <span
  //           className="text-lg font-medium"
  //           style={{ fontFamily: "var(--font-script)" }}
  //         >
  //           Our Journey
  //         </span>
  //         <Heart className="w-5 h-5 fill-current" />
  //       </motion.div>
  //       <h2
  //         className="text-2xl md:text-3xl font-semibold text-dark"
  //         style={{ fontFamily: "var(--font-display)" }}
  //       >
  //         Hành Trình Của Chúng Mình
  //       </h2>
  //     </div>

  //     <div className="relative">
  //       {/* Center line */}
  //       <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-pink-300 to-purple-300" />

  //       {/* Timeline items */}
  //       <div className="space-y-6">
  //         {milestones.map((milestone, index) => {
  //           const Icon = milestone.icon;
  //           const isLeft = index % 2 === 0;

  //           return (
  //             <motion.div
  //               key={index}
  //               initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
  //               whileInView={{ opacity: 1, x: 0 }}
  //               viewport={{ once: true }}
  //               transition={{ delay: index * 0.1, duration: 0.5 }}
  //               className={`relative flex items-center gap-4 ${
  //                 isLeft ? "md:flex-row" : "md:flex-row-reverse"
  //               }`}
  //             >
  //               {/* Icon on timeline */}
  //               <motion.div
  //                 whileHover={{ scale: 1.2 }}
  //                 className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg border-4 border-white"
  //               >
  //                 <span className="text-lg md:text-xl">{milestone.emoji}</span>
  //               </motion.div>

  //               {/* Content card */}
  //               <div
  //                 className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
  //                   isLeft
  //                     ? "md:mr-auto md:text-right"
  //                     : "md:ml-auto md:text-left"
  //                 }`}
  //               >
  //                 <div className="glass rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
  //                   <div className="flex items-center gap-2 mb-2">
  //                     <Icon className="w-4 h-4 text-rose-400" />
  //                     <span className="text-xs md:text-sm font-medium text-rose-500">
  //                       {milestone.month}
  //                     </span>
  //                   </div>
  //                   <h3
  //                     className="text-lg md:text-xl font-bold text-dark mb-1"
  //                     style={{ fontFamily: "var(--font-display)" }}
  //                   >
  //                     {milestone.title}
  //                   </h3>
  //                   <p className="text-xs md:text-sm text-dark-light mb-2">
  //                     {milestone.date}
  //                   </p>
  //                   <p className="text-sm text-dark-light">
  //                     {milestone.description}
  //                   </p>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </motion.section>
  // );
}
