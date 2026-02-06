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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col gap-8 w-full"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 + 0.3 }}
          className="relative flex items-center justify-between group"
        >
          <div className="flex flex-col items-end text-right">
            <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter leading-none font-mono">
              <Counter target={stat.value} duration={stat.duration} />
              <span className="text-purple-500 ml-1">+</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-medium">
              {stat.label}
            </p>
          </div>

          {/* Decorative dashed line */}
          <div className="hidden sm:block flex-1 mx-4 h-[1px] bg-neutral-800 group-hover:bg-neutral-700 transition-colors border-t border-dashed border-gray-700/50" />

          {/* Status Dot */}
          <div className="hidden sm:block w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-green-500 transition-colors duration-300" />
        </motion.div>
      ))}
    </motion.div>
  );
}
