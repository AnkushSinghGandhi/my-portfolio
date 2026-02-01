import { SiLeetcode } from "react-icons/si";
import profilePic from "@/assets/images/profile.jpg";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Cpu } from "lucide-react";
import CachedImage from "@/components/CachedImage";

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col justify-center px-6 pt-40 pb-20 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Profile Identity Module */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative"
        >
          <div className="relative group">
            {/* Tech Frame/Border */}
            <div className="absolute -inset-4 border border-neutral-800 rounded-lg group-hover:border-purple-500/30 transition-colors duration-500" />
            <div className="absolute -inset-4 bg-neutral-900/20 rounded-lg -z-10" />

            {/* Corner Markers */}
            <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-full max-w-md h-[400px] overflow-hidden rounded bg-neutral-900 border border-neutral-800">
              <CachedImage
                src={profilePic}
                alt="Ankush Singh Gandhi"
                className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 opacity-100"
              />
              {/* Scanline Effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent bg-[length:100%_4px] opacity-10 pointer-events-none" />
            </div>

            {/* ID Tag */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-white/10 px-3 py-1 text-xs font-mono text-white">
              ID: DEV_01 // ANKUSH
            </div>
          </div>
        </motion.div>

        {/* System Data / Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">system.profile_bio</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-black tracking-tight">
              ABOUT_ME
            </h1>
            <p className="text-neutral-500 text-lg leading-relaxed mb-4 font-light">
              Hi, I’m <span className="text-neutral-900 font-medium">Ankush Singh Gandhi</span>.
            </p>
            <p className="text-neutral-500 text-lg leading-relaxed font-light">
              A passionate <span className="text-black font-semibold">Python Backend Developer</span> architecting scalable, secure, and high-performance systems. I specialize in building robust APIs, microservices, and reliable cloud-native solutions that drive business logic.
            </p>
          </div>

          {/* Technical Spec List */}
          <div className="mb-10">
            <h3 className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-wider border-b border-neutral-800 pb-2">
              Technical Specifications
            </h3>
            <div className="space-y-4">
              {[
                { label: "BACKEND ARCHITECTURE", val: "Django, Flask, Microservices", icon: Server },
                { label: "WEB TECHNOLOGIES", val: "React, Modern JS, HTML/CSS", icon: Code },
                { label: "DATA SYSTEMS", val: "MySQL, MongoDB, Redis", icon: Database },
                { label: "CLOUD INFRASTRUCTURE", val: "AWS, Docker, CI/CD", icon: Cloud },
                { label: "SYSTEM OPTIMIZATION", val: "API Security, High-Perf Computing", icon: Cpu },
              ].map((item, i) => (
                <div key={i} className="flex items-center group">
                  <item.icon className="w-5 h-5 text-neutral-600 mr-4 group-hover:text-purple-500 transition-colors" />
                  <span className="text-sm font-mono text-neutral-500 w-44 shrink-0 group-hover:text-neutral-900 transition-colors">
                    {item.label}
                  </span>
                  <span className="text-sm text-neutral-800 group-hover:text-black transition-colors">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LeetCode Terminal Widget */}
          <a
            href="https://leetcode.com/ankushsinghgandhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-neutral-900 border border-neutral-800 p-5 flex items-center justify-between hover:border-purple-500/50 hover:bg-black transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-neutral-800 rounded group-hover:bg-[#FFA116]/10 transition-colors">
                  <SiLeetcode className="h-6 w-6 text-[#FFA116] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500 mb-1">COMPETITIVE PROGRAMMING</div>
                  <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    VIEW LEETCODE PROFILE
                  </div>
                </div>
              </div>
              <div className="text-neutral-600 group-hover:text-purple-500 transition-colors font-mono">
                -&gt;
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </main>
  );
}
