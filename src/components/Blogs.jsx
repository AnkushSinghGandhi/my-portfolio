import { Button } from "@/components/ui/button";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { FaDev } from "react-icons/fa";
import blogs from "@/data/blogs";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <section id="blogs" className="relative px-6 sm:px-8 py-24 bg-black text-gray-100 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center max-w-6xl mx-auto mb-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          KNOWLEDGE BASE
        </h2>
        <p className="text-gray-500 font-mono text-sm sm:text-base">
            // THOUGHTS AND TECHNICAL WRITINGS
        </p>
      </motion.div>

      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((b, i) => (
          <motion.a
            key={i}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative flex flex-col bg-black border border-neutral-800 p-8 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
          >
            {/* Gradient Border on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-[1px] bg-black z-0" />

            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-wrap gap-2">
                  {b.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-gray-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">
                {b.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed flex-grow group-hover:text-gray-400 transition-colors mb-6">
                {b.desc}
              </p>

              <div className="mt-auto border-t border-neutral-900 pt-4 group-hover:border-neutral-800 transition-colors">
                <span className="text-xs font-mono text-neutral-500 group-hover:text-purple-500 transition-colors uppercase">
                  Read Article {"->"}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="relative z-10 text-center mt-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <span className="text-sm font-mono text-gray-500">MORE WRITINGS ON:</span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ankushsinghgandhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:opacity-80 transition-opacity"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://dev.to/ankushsinghgandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <FaDev className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/recommendations"
            className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 text-sm font-mono text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
          >
            <span>SEE WHAT I'M READING</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/resources"
            className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 text-sm font-mono text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
          >
            <span>CHEATSHEETS & ROADMAPS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
