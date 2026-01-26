import { motion } from "framer-motion";
import { resources } from "@/data/resources";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resources({ isPage }) {
    return (
        <section
            className={`relative px-6 sm:px-12 lg:px-20 py-24 bg-black text-gray-100 overflow-hidden ${isPage ? "pt-32 sm:pt-40" : ""
                }`}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                        RESOURCES
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-mono max-w-xl">
            // CHEAT SHEETS, ROADMAPS & LEARNING MATERIALS
                    </p>
                </motion.div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            {resource.link ? (
                                <Link
                                    to={resource.link}
                                    className="group block h-full relative bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/30 p-6 transition-all duration-300 hover:bg-neutral-900/80"
                                >
                                    <ResourceCard resource={resource} />
                                </Link>
                            ) : (
                                <div className="group h-full relative bg-neutral-900/30 border border-neutral-800/50 p-6 opacity-60">
                                    <ResourceCard resource={resource} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ResourceCard({ resource }) {
    return (
        <>
            {/* Left Gradient Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{resource.icon}</span>
                {resource.link ? (
                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-purple-400 transition-colors" />
                ) : (
                    <BookOpen className="w-5 h-5 text-neutral-600" />
                )}
            </div>

            <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors mb-1">
                {resource.title}
            </h3>
            <p className="text-xs font-mono text-purple-400 mb-3">
                {resource.subtitle}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors">
                {resource.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-0.5 bg-neutral-800/50 border border-neutral-700 text-[10px] font-mono text-gray-500 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </>
    );
}
