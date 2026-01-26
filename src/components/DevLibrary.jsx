import { motion } from "framer-motion";
import { cheatsheets, blogs, writingLinks } from "@/data/library";
import { ArrowUpRight, BookOpen, Linkedin, ExternalLink } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DevLibrary() {
    const dsaRoadmap = cheatsheets.find(c => c.id === "dsa-roadmap");
    const otherItems = [
        ...cheatsheets.filter(c => c.id !== "dsa-roadmap" && c.featured),
        ...blogs.slice(0, 2)
    ];

    return (
        <section id="dev-library" className="relative px-6 sm:px-12 lg:px-20 py-24 bg-black text-gray-100 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header - Terminal Style */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-purple-500 animate-pulse" />
                            <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase">system.knowledge_base</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                            DEVELOPER ARCHIVE
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:block text-right"
                    >
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-tighter mb-1">
                            access_protocol: public_read
                        </p>
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-tighter">
                            last_update: Jan_2026
                        </p>
                    </motion.div>
                </div>

                {/* Dashboard Layout */}
                <div className="grid lg:grid-cols-12 gap-8 mb-16">
                    {/* Main Featured Module (Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <Link
                            to={dsaRoadmap.link}
                            className="group relative block h-full bg-neutral-900/40 border border-neutral-800 hover:border-purple-500/50 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-5xl">{dsaRoadmap.icon}</span>
                            </div>

                            <div className="p-8 sm:p-12">
                                <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-400 mb-6 uppercase tracking-widest">
                                    featured_roadmap
                                </div>

                                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                                    {dsaRoadmap.title}
                                </h3>

                                <p className="text-purple-400 font-mono text-sm mb-6">
                                    {dsaRoadmap.subtitle}
                                </p>

                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                                    {dsaRoadmap.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {dsaRoadmap.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-neutral-800/50 border border-neutral-700 text-[10px] font-mono text-gray-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="inline-flex items-center gap-2 text-white font-mono text-sm border-b border-purple-500/50 pb-1 group-hover:gap-4 transition-all">
                                    START LEARNING <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/30 group-hover:border-purple-500 transition-colors" />
                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </motion.div>

                    {/* Side Feed (Right) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <h4 className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-1 h-1 bg-gray-600" /> recent_additions
                        </h4>

                        {otherItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                {item.link || item.url ? (
                                    <a
                                        href={item.link || item.url}
                                        target={item.external || item.url ? "_blank" : "_self"}
                                        rel={item.external || item.url ? "noopener noreferrer" : ""}
                                        className="group relative flex gap-4 p-4 bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300"
                                    >
                                        <div className="w-1 self-stretch bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-2 mb-1">
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
                                                    {item.id ? "cheatsheet" : "writing"}
                                                </span>
                                                <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-purple-400 transition-colors" />
                                            </div>
                                            <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-[10px] text-gray-500 mt-1 line-clamp-1">{item.subtitle || item.desc}</p>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="group relative flex gap-4 p-4 bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                                        <div className="w-1 self-stretch bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-2 mb-1">
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
                                                    {item.id ? "cheatsheet" : "writing"}
                                                </span>
                                            </div>
                                            <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-[10px] text-gray-500 mt-1 line-clamp-1">{item.subtitle || item.desc}</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {/* Social Link Module */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-4 p-6 border border-neutral-800 bg-neutral-900/20"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-xs font-mono text-gray-500 uppercase">External Sync:</span>
                                <div className="flex items-center gap-4">
                                    <a href={writingLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:opacity-80 transition-all hover:scale-110">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href={writingLinks.devto} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-all hover:scale-110">
                                        <FaDev className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Global Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                >
                    <Link
                        to="/library"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-bold tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300"
                    >
                        <BookOpen className="w-4 h-4" />
                        <span>ENTER FULL KNOWLEDGE BASE</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
