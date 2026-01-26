import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Stats() {
  const stats = [
    { label: "Years of Experience", value: 3, duration: 800 },
    { label: "Clients Worldwide", value: 10, duration: 1000 },
    { label: "Projects Delivered", value: 20, duration: 1200 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative flex flex-col lg:flex-col items-center lg:items-end text-center lg:text-right gap-8 
                 sm:flex-row sm:justify-center sm:gap-6"
    >
      {/* Vertical Divider - only on desktop */}
      <div className="hidden lg:block absolute left-0 lg:-left-8 top-0 h-full w-[2px] bg-gray-700 opacity-60"></div>

      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="relative"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              <Counter target={stat.value} duration={stat.duration} />
              <span className="text-gray-400">+</span>
            </span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mt-1 uppercase tracking-widest">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
