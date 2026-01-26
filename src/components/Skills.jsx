import { useState } from "react";
import { skills } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Web Platform");
  const currentSkills = skills[selectedCategory];
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="bg-gray-100 text-black px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden">
      {/* Subtle Grid Background (Dark dots on light bg) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <div className="flex items-center gap-2 mb-2 justify-start">
            <span className="w-2 h-2 bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">system.tech_stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
            TECHNICAL_ARSENAL
          </h2>
          <p className="text-gray-600 font-mono text-sm sm:text-base max-w-2xl">
                // CORE STACK AND FRAMEWORKS
          </p>
        </motion.div>

        {/* Categories */}
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-10 mb-16 border-b border-gray-300 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-4 text-sm sm:text-base font-mono tracking-[0.2em] transition-all duration-300 relative uppercase ${selectedCategory === category
                ? "text-black font-black"
                : "text-gray-400 hover:text-black"
                }`}
            >
              <span className={`mr-1 transition-opacity ${selectedCategory === category ? "opacity-100" : "opacity-0"} text-purple-600`}>[</span>
              {category}
              <span className={`ml-1 transition-opacity ${selectedCategory === category ? "opacity-100" : "opacity-0"} text-purple-600`}>]</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-x-12 gap-y-12"
            >
              {Object.entries(currentSkills).map(([section, skillsList], sectionIdx) => (
                <div key={section} className="flex flex-col">
                  <h3 className="text-lg font-bold mb-6 text-gray-800 border-l-2 border-purple-500 pl-4">
                    {section}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {skillsList.map((skill, index) => (
                      <div
                        key={index}
                        className="group relative flex items-center bg-white border border-gray-300 p-4 transition-all duration-300 hover:border-transparent overflow-hidden shadow-sm hover:shadow-md"
                      >
                        {/* Gradient Border Reveal */}
                        <div className="absolute inset-0 p-[1px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        <div className="absolute inset-[1px] bg-white -z-10" />

                        {/* Number */}
                        <span className="font-mono text-xs text-gray-400 mr-4 group-hover:text-purple-500 transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Icon */}
                        <div className="text-gray-500 group-hover:text-black transition-all duration-300 mr-4 grayscale-[0.6] group-hover:grayscale-0">
                          {skill.icon}
                        </div>

                        {/* Name */}
                        <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-black transition-colors">
                          {skill.name}
                        </span>


                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
