import { Heart, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function SponsorButtons({ variant = "default" }) {
  const isCompact = variant === "compact";

  return (
    <div className={`flex ${isCompact ? "flex-row gap-3" : "flex-col sm:flex-row"} gap-4 justify-center items-center`}>
      {/* Buy Me a Coffee Button - Now First */}
      <motion.a
        href="https://buymeacoffee.com/ankushsingh"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`group relative flex items-center gap-2 ${isCompact ? "px-4 py-2 text-sm" : "px-6 py-3"} bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 hover:from-blue-500 hover:via-purple-500 hover:to-purple-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40`}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <Coffee className={`${isCompact ? "w-4 h-4" : "w-5 h-5"} relative z-10 group-hover:animate-bounce`} />
        <span className="relative z-10 font-mono tracking-widest uppercase text-[10px]">Buy Me a Coffee</span>
      </motion.a>

      {/* GitHub Sponsor Button - Now Second */}
      <motion.a
        href="https://github.com/sponsors/AnkushSinghGandhi"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`group relative flex items-center gap-2 ${isCompact ? "px-4 py-2 text-sm" : "px-6 py-3"} bg-gradient-to-r from-pink-600 via-purple-600 to-purple-700 hover:from-pink-500 hover:via-purple-500 hover:to-purple-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/40`}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <Heart className={`${isCompact ? "w-4 h-4" : "w-5 h-5"} relative z-10 group-hover:animate-pulse`} fill="currentColor" />
        <span className="relative z-10 font-mono tracking-widest uppercase text-[10px]">Sponsor on GitHub</span>
      </motion.a>
    </div>
  );
}
