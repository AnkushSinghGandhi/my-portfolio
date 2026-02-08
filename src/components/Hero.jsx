import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsDown, ArrowRight, Terminal, Code2, Globe, Cpu } from "lucide-react";
import Stats from "./Stats";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-black text-gray-100 min-h-screen flex items-center px-6 md:px-16 lg:px-20 pt-24 pb-12 selection:bg-purple-500/30"
    >
      {/* 1. Background Grid Pattern - Much Subtler */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 2. Spotlight Effect - REMOVED */}
      {/* <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(120, 119, 198, 0.08), transparent 40%)`,
        }}
      /> */}

      {/* Ambient Glows - Deep and Dark */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />


      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-6 items-center w-full z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-none hover:border-neutral-700 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono font-medium text-neutral-400 tracking-wider uppercase">Available for Projects</span>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-sm md:text-base font-medium tracking-[0.2em] text-neutral-400 uppercase font-mono mb-2">
                Ankush Singh Gandhi
              </h1>
              <h2 className="text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-white tracking-tighter font-bold">
                SCALING <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500">IDEAS</span>
                <br />
                <span className="font-light text-neutral-500">INTO SYSTEMS.</span>
              </h2>
            </div>
          </div>

          <p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Architecting robust backend systems and crafting modern web experiences.
            Transforming complex requirements into <span className="text-white font-medium">high-performance</span>, <span className="text-white font-medium">scalable</span> solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 px-4 sm:px-0">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full group relative flex items-center justify-center gap-3 bg-white text-black px-8 py-3.5 font-bold text-sm tracking-wide uppercase overflow-hidden transition-all hover:bg-neutral-200">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </Link>
            <Link to="/experience" className="w-full sm:w-auto">
              <button className="w-full group flex items-center justify-center gap-3 bg-transparent border border-neutral-700 text-neutral-300 px-8 py-3.5 font-mono text-sm tracking-wide uppercase hover:border-white hover:text-white transition-all">
                <span>View My Experience</span>
              </button>
            </Link>
          </div>

          {/* Tech Stack Hints */}
          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-neutral-600">
            <Cpu className="w-5 h-5 hover:text-neutral-400 transition-colors" />
            <Terminal className="w-5 h-5 hover:text-neutral-400 transition-colors" />
            <Globe className="w-5 h-5 hover:text-neutral-400 transition-colors" />
            <Code2 className="w-5 h-5 hover:text-neutral-400 transition-colors" />
          </div>

        </motion.div>

        {/* Right Side Stats Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Minimalist Stats Display - Removed Heavy Frame */}
          <div className="relative p-8">
            {/* Subtle Background accent behind stats */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/50 to-transparent rounded-2xl -z-10 blur-xl"></div>

            <Stats isMobileLayout />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-3 cursor-pointer group"
      >
        {/* Mouse Icon */}
        <div className="w-6 h-10 rounded-full border border-neutral-700 flex justify-center p-1.5 transition-colors group-hover:border-white/50">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-2 bg-neutral-600 rounded-full group-hover:bg-white"
          />
        </div>

        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-600 group-hover:text-neutral-300 transition-colors">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
