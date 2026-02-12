import { SiLeetcode } from "react-icons/si";
import profilePic from "@/assets/images/profile.jpg";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Cpu, Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import CachedImage from "@/components/CachedImage";

export default function AboutMe({ variant = "page" }) {
  const isHome = variant === "home";
  const Wrapper = isHome ? "section" : "main";

  return (
    <Wrapper
      id={isHome ? "about" : undefined}
      className={`group relative bg-white text-neutral-900 font-sans flex flex-col justify-center px-6 ${isHome
        ? "sm:px-12 lg:px-20 py-24 md:py-32 snap-start snap-always"
        : "pt-40 pb-20"
        } overflow-hidden`}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Profile Identity Module */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex justify-center relative ${isHome ? "order-last md:order-first" : ""}`}
        >
          <div className="relative group">
            {/* Tech Frame/Border */}
            <div className="absolute -inset-4 border border-neutral-800 group-hover:border-purple-500/30 transition-colors duration-500" />
            <div className="absolute -inset-4 bg-neutral-900/20 -z-10" />

            {/* Corner Markers */}
            <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-full max-w-md h-[400px] overflow-hidden bg-neutral-900 border border-neutral-800">
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
            {isHome ? (
              <h2 className="text-5xl font-bold mb-6 text-black tracking-tight">ABOUT_ME</h2>
            ) : (
              <h1 className="text-5xl font-bold mb-6 text-black tracking-tight">ABOUT_ME</h1>
            )}
            <p className="text-neutral-500 text-lg leading-relaxed mb-4 font-light">
              Hi, I'm <span className="text-neutral-900 font-medium">Ankush Singh Gandhi</span>.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mb-8">
              <a href="https://www.linkedin.com/in/ankushsinghgandhi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-neutral-700 hover:text-[#0077b5] hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://github.com/AnkushSinghGandhi" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-neutral-700 hover:text-black hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://dev.to/ankushsinghgandhi" target="_blank" rel="noopener noreferrer">
                <FaDev className="h-6 w-6 text-neutral-700 hover:text-black hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://x.com/ankushsgandhi" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-neutral-700 hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://instagram.com/warriorwhocodes" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-neutral-700 hover:text-[#E4405F] hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://www.upwork.com/freelancers/~015ea2207bd0b0f893" target="_blank" rel="noopener noreferrer">
                <FaUpwork className="h-6 w-6 text-neutral-700 hover:text-[#6fda44] hover:scale-110 transition-all duration-300" />
              </a>
              <a href="mailto:ankushsinghgandhi@gmail.com">
                <Mail className="h-6 w-6 text-neutral-700 hover:text-[#EA4335] hover:scale-110 transition-all duration-300" />
              </a>
            </div>

            <p className="text-neutral-500 text-lg leading-relaxed mb-4 font-light">
              I'm a developer who loves transforming complex ideas into elegant, scalable systems. Over the last few years I've helped products grow from concept to reality by designing back-end architectures that are reliable, secure and easy to maintain.
            </p>
            <p className="text-neutral-500 text-lg leading-relaxed font-light mb-8">
              My approach blends engineering discipline with creativity: listening deeply, planning carefully, then executing with clarity. Each project is a new opportunity to solve problems, learn, and deliver real impact.
            </p>
          </div>

          {/* Technical Spec List */}
          <div className="mb-10">
            <h3 className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-wider border-b border-neutral-800 pb-2">
              Technical Specifications
            </h3>
            <div className="space-y-4">
              {[
                { label: "BACKEND", val: "Django, Flask, Microservices", icon: Server },
                { label: "FRONTEND", val: "React, Flutter, HTML/CSS", icon: Code },
                { label: "DATABASE", val: "MySQL, MongoDB, Redis", icon: Database },
                { label: "CLOUD", val: "AWS, Docker, CI/CD", icon: Cloud },
                { label: "LANGUAGES", val: "English, Hindi, Japanese (Beginner)", icon: Cpu },
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

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Resume Button */}
            <a href="https://warriorwhocodes.com/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full group bg-black border-2 border-black text-white px-8 py-6 text-sm hover:bg-neutral-900 transition-all duration-300 uppercase tracking-[0.2em] font-mono rounded-none flex items-center justify-center gap-3">
                <span>View My Resume</span>
              </Button>
            </a>

            {/* LeetCode Button */}
            <a href="https://leetcode.com/ankushsinghgandhi/" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full group bg-white border-2 border-black text-black px-8 py-6 text-sm hover:bg-neutral-50 transition-all duration-300 uppercase tracking-[0.2em] font-mono rounded-none flex items-center justify-center gap-3">
                <SiLeetcode className="w-5 h-5 text-[#FFA116]" />
                <span>LeetCode Profile</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
}
