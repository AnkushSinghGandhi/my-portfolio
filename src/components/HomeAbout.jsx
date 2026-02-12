import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter, Mail, ArrowRight, Instagram } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import profilePic from "@/assets/images/profile.jpg";
import { motion } from "framer-motion";
import CachedImage from "@/components/CachedImage";

export default function HomeAbout() {
  return (
    <section id="about" className="group relative px-6 sm:px-12 lg:px-20 py-24 md:py-32 bg-white text-black overflow-hidden snap-start snap-always">
      {/* Subtle Grid Background (Dark dots on light) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* Profile Image (System Identity Style) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative order-last md:order-first"
        >
          <div className="relative">
            {/* Tech Frame */}
            <div className="absolute -inset-4 border border-gray-300 group-hover:border-purple-500/50 transition-colors duration-500" />
            <div className="absolute -inset-4 bg-gray-200/50 -z-10" />

            {/* Corner Markers */}
            <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-purple-600 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-purple-600 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-full max-w-md h-[400px] overflow-hidden bg-gray-200 border border-gray-300">
              <CachedImage
                src={profilePic}
                alt="Ankush Singh Gandhi"
                className="w-full h-full object-cover transition-all duration-700 grayscale-[0.6] group-hover:grayscale-0 opacity-100"
              />
              {/* Scanline Effect (subtle on light) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent bg-[length:100%_4px] opacity-10 pointer-events-none" />
            </div>

            {/* ID Tag */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur border border-black/10 px-3 py-1 text-xs font-mono text-black">
              STATUS: ONLINE
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">system.profile_summary</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-black">
            Ankush Singh Gandhi
          </h2>

          {/* Social Links - Colored by Default (slightly muted) */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            <a href="https://www.linkedin.com/in/ankushsinghgandhi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-[#0077b5] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://github.com/AnkushSinghGandhi" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-black opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://dev.to/ankushsinghgandhi" target="_blank" rel="noopener noreferrer">
              <FaDev className="h-6 w-6 text-black opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://x.com/ankushsgandhi" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-[#1DA1F2] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://instagram.com/warriorwhocodes" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-[#E4405F] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://www.upwork.com/freelancers/~015ea2207bd0b0f893" target="_blank" rel="noopener noreferrer">
              <FaUpwork className="h-6 w-6 text-[#6fda44] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="mailto:ankushsinghgandhi@gmail.com">
              <Mail className="h-6 w-6 text-[#EA4335] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          {/* Description */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light mb-10">
            <p>
              I’m a developer who loves transforming complex ideas into elegant, scalable systems. Over the last few years I’ve helped products grow from concept to reality by designing back-end architectures that are reliable, secure and easy to maintain.
            </p>
            <p>
              My approach blends engineering discipline with creativity: listening deeply, planning carefully, then executing with clarity. Each project is a new opportunity to solve problems, learn, and deliver real impact.
            </p>
          </div>

          {/* Key Focus/Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-10 border-t border-gray-300 pt-8">
            {[
              { label: "Architecture", value: "Microservices & Scalability" },
              { label: "Backend", value: "Python, Django, Flask" },
              { label: "Spoken", value: "English, Hindi, Japanese (Beginner)" },
              { label: "Philosophy", value: "Clean Code & Performance" },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-xs font-mono text-purple-600 mb-1 uppercase tracking-wider">{item.label}</h4>
                <p className="text-sm font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Resume Button - System Style */}
          <a href="https://warriorwhocodes.com/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="group bg-black border border-black text-white px-8 py-6 text-sm hover:bg-gray-800 transition-all duration-300 uppercase tracking-widest font-mono rounded-none">
              <span>View System Resume</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
