import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsDown, ArrowRight } from "lucide-react";
import Stats from "./Stats";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <section
      className="relative overflow-hidden bg-black text-gray-100 min-h-screen flex items-center px-6 md:px-16 lg:px-20 pt-24 pb-12"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 lg:gap-6 items-center w-full z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-3">
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 w-fit mb-2 backdrop-blur-sm">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Available for projects</span>
              </div>
            </div>
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
              ANKUSH SINGH GANDHI
            </h1>
            <h2 className="text-3xl md:text-6xl leading-tight text-white">
              <span className="font-extrabold tracking-tight text-gray-300">
                SCALING IDEAS
              </span>{" "}
              <span className="font-light text-gray-400">INTO SYSTEMS</span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Empowering businesses to build, scale, and transform with robust backend systems,
            clean architecture, and modern web solutions that last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 px-4 sm:px-0">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 md:px-10 py-4 md:py-5 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 border-0">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative z-10">Start your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </Link>
            <Link to="/experience" className="w-full sm:w-auto">
              <button className="w-full group relative flex items-center justify-center gap-3 bg-transparent border border-white/20 text-gray-300 px-8 md:px-10 py-4 md:py-5 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:text-white transition-all duration-300">
                <span className="relative z-10">View My Experience</span>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side Stats Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          {/* Pass a prop to Stats so it can render smaller for mobile */}
          <Stats isMobileLayout />
        </motion.div>
      </div>

      {/* Scroll Down Indicator - System Style */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 cursor-pointer group">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500 group-hover:text-white transition-colors duration-300">
          Scroll System
        </span>
        <ChevronsDown className="w-5 h-5 text-gray-600 group-hover:text-purple-500 animate-bounce transition-colors duration-300" />
      </div>
    </section>
  );
}
