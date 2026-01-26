import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, FlaskConical, BookOpen, ExternalLink, ArrowUpRight } from "lucide-react";
import { clientProjects, labProjects, lowLevelProjects } from "@/data/projects";
import { Link } from "react-router-dom";
import CachedImage from "@/components/CachedImage";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({ limit, isPage }) {
  const [showLab, setShowLab] = useState(false);

  // Combine lab and low-level projects when in lab view
  let activeProjects;
  let showLowLevelSection = false;

  if (showLab) {
    activeProjects = [...labProjects, ...lowLevelProjects];
    showLowLevelSection = true;
  } else {
    activeProjects = clientProjects;
  }

  const visibleProjects = limit ? activeProjects.slice(0, limit) : activeProjects;
  const labProjectsCount = labProjects.length;

  return (
    <section
      id="projects"
      className={`relative px-6 sm:px-8 py-20 sm:py-24 bg-black text-gray-100 overflow-hidden ${isPage ? "pt-24 sm:pt-40" : ""}`}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      {/* Header & Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end max-w-7xl mx-auto mb-16 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">system.project_archive</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
            PROJECT ARCHIVE
          </h2>
          <p className="text-gray-500 font-mono text-sm sm:text-base max-w-xl">
            // EXPLORE DEPLOYED SYSTEMS AND EXPERIMENTAL LABS
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Segmented Control */}
          {/* Enhanced Segmented Control */}
          <div className="flex bg-neutral-900 border border-neutral-800 p-1.5 rounded-none">
            <button
              onClick={() => setShowLab(false)}
              className={`relative flex items-center gap-3 px-6 py-3 rounded-none text-sm font-medium transition-all duration-300 ${!showLab ? "bg-white text-black shadow-lg shadow-white/10" : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
            >
              <Star className={`w-4 h-4 ${!showLab ? "text-purple-600 fill-current" : ""}`} />
              <div className="text-left leading-tight">
                <div className="font-bold tracking-wide">FEATURED</div>
                <div className={`text-[10px] font-mono ${!showLab ? "text-gray-600" : "text-gray-600"}`}>
                  CLIENT WORK
                </div>
              </div>
            </button>

            <button
              onClick={() => setShowLab(true)}
              className={`relative flex items-center gap-3 px-6 py-3 rounded-none text-sm font-medium transition-all duration-300 ${showLab ? "bg-white text-black shadow-lg shadow-white/10" : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
            >
              <FlaskConical className={`w-4 h-4 ${showLab ? "text-purple-600 fill-current" : ""}`} />
              <div className="text-left leading-tight">
                <div className="font-bold tracking-wide">LABORATORY</div>
                <div className={`text-[10px] font-mono ${showLab ? "text-gray-600" : "text-gray-600"}`}>
                  PERSONAL R&D
                </div>
              </div>
              {/* Notification Dot to catch attention */}
              {!showLab && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
              )}
            </button>
          </div>

          {/* Case Studies Button */}
          <Button
            onClick={() => {
              /* Handle case studies click */
            }}
            className="flex items-center gap-2 bg-transparent border border-neutral-800 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-600/10 px-6 py-2 h-auto text-sm transition-all rounded-none"
          >
            <BookOpen className="w-4 h-4" />
            CASE STUDIES
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Regular Lab Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleProjects.slice(0, showLab && !limit ? labProjectsCount : visibleProjects.length).map((p, i) => (
              <motion.div
                key={p.title || i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col h-full bg-black border border-neutral-900"
              >
                {/* Vertical Side Borders */}
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                {/* Horizontal Top/Bottom Borders */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                {/* Main Content Container */}
                <div className="relative z-10 flex flex-col h-full bg-black overflow-hidden">
                  {/* Image Section */}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[16/10] overflow-hidden border-b border-neutral-800 group-hover:border-neutral-700/50 transition-colors"
                  >
                    {/* ID Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur text-white text-xs font-mono px-2 py-1 border border-white/10 rounded">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div className="w-full h-full transition-all duration-700 ease-in-out">
                      <CachedImage
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>

                    {/* Overlay Icon */}
                    <div className="absolute top-4 right-4 z-20 p-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {p.title}
                    </h3>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors"
                        >
                        //{t}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors">
                      {p.desc}
                    </p>

                    {/* Footer / Link */}
                    <div className="mt-auto pt-4 border-t border-neutral-900 flex justify-between items-center group-hover:border-neutral-800 transition-colors">
                      <span className="text-xs font-mono text-neutral-600 group-hover:text-purple-500 transition-colors">
                        STATUS: {showLab ? (i >= labProjectsCount ? "LOW-LEVEL" : "EXPERIMENTAL") : "DEPLOYED"}
                      </span>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1 hover:text-purple-400 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Low-Level Projects Section */}
        {showLab && !limit && showLowLevelSection && (
          <>
            {/* Section Divider */}
            <div className="my-16 relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-neutral-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-black px-6 py-3 border border-neutral-800">
                  <span className="text-sm font-mono text-purple-500 tracking-[0.2em] uppercase">Low-Level Systems Programming</span>
                </span>
              </div>
            </div>

            {/* Low-Level Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {visibleProjects.slice(labProjectsCount).map((p, i) => {
                  const actualIndex = i + labProjectsCount;
                  return (
                    <motion.div
                      key={p.title || actualIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group relative flex flex-col h-full bg-black border border-neutral-900"
                    >
                      {/* Vertical Side Borders */}
                      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                      {/* Horizontal Top/Bottom Borders */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                      {/* Main Content Container */}
                      <div className="relative z-10 flex flex-col h-full bg-black overflow-hidden">
                        {/* Image Section */}
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full aspect-[16/10] overflow-hidden border-b border-neutral-800 group-hover:border-neutral-700/50 transition-colors"
                        >
                          {/* ID Badge */}
                          <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur text-white text-xs font-mono px-2 py-1 border border-white/10 rounded">
                            {String(actualIndex + 1).padStart(2, '0')}
                          </div>

                          <div className="w-full h-full transition-all duration-700 ease-in-out">
                            <CachedImage
                              src={p.thumbnail}
                              alt={p.title}
                              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700"
                            />
                          </div>

                          {/* Overlay Icon */}
                          <div className="absolute top-4 right-4 z-20 p-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </a>

                        {/* Content Section */}
                        <div className="flex flex-col flex-grow p-6">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                            {p.title}
                          </h3>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {p.tech.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors"
                              >
                                //{t}
                              </span>
                            ))}
                          </div>

                          {/* Description */}
                          <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors">
                            {p.desc}
                          </p>

                          {/* Footer / Link */}
                          <div className="mt-auto pt-4 border-t border-neutral-900 flex justify-between items-center group-hover:border-neutral-800 transition-colors">
                            <span className="text-xs font-mono text-neutral-600 group-hover:text-purple-500 transition-colors">
                              STATUS: LOW-LEVEL
                            </span>
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1 hover:text-purple-400 transition-colors"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>

      {/* View More Button */}
      {limit && (
        <div className="text-center mt-16">
          <Link to="/projects">
            <Button className="font-mono bg-transparent border border-neutral-700 text-white hover:border-purple-500 hover:text-purple-400 hover:bg-purple-900/10 px-8 py-6 text-sm transition-all duration-300 uppercase tracking-widest">
              [ ACCESS FULL ARCHIVE ]
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
