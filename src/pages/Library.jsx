import { motion } from "framer-motion";
import { cheatsheets, blogs, reads, writingLinks } from "@/data/library";
import { ArrowUpRight, BookOpen, Linkedin, ExternalLink, Youtube, FileText } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CachedImage from "@/components/CachedImage";

const getTypeIcon = (type) => {
    switch (type) {
        case "linkedin":
            return <Linkedin className="w-4 h-4 text-[#0077b5]" />;
        case "youtube":
            return <Youtube className="w-4 h-4 text-[#ff0000]" />;
        default:
            return <FileText className="w-4 h-4 text-gray-400" />;
    }
};

export default function LibraryPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Navbar />

            <section className="relative px-6 sm:px-12 lg:px-20 py-24 pt-32 sm:pt-44 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Header - Terminal Style */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-purple-500 animate-pulse" />
                                <span className="text-[10px] font-mono text-purple-400 tracking-[0.2em] uppercase">system.archive_access</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                                DEVELOPER ARCHIVE
                            </h1>
                            <p className="text-gray-500 text-sm sm:text-lg max-w-2xl font-mono">
                // CURATED REPOSITORY OF ROADMAPS, WRITINGS & LEARNING MATERIALS
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-left md:text-right border-l md:border-l-0 md:border-r border-neutral-800 pl-6 md:pl-0 md:pr-6"
                        >
                            <div className="space-y-1">
                                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter">
                                    status: synchronized
                                </p>
                                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter">
                                    access_level: guest_user
                                </p>
                                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter">
                                    total_assets: {cheatsheets.length + blogs.length + reads.reduce((acc, cat) => acc + cat.items.length, 0)}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ===== SECTION 1: ROADMAPS & ONE SHOTS ===== */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-mono text-purple-400">01</span>
                            <h2 className="text-xl font-bold tracking-[0.1em] text-white">ROADMAPS & ONE SHOTS</h2>
                            <div className="h-[1px] flex-1 bg-neutral-800" />
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cheatsheets.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={`${index === 0 ? "md:col-span-2" : "md:col-span-1"}`}
                                >
                                    {item.link ? (
                                        item.external ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative block h-full bg-neutral-900/40 border border-neutral-800 hover:border-purple-500/30 p-8 transition-all duration-300 hover:bg-neutral-900/60"
                                            >
                                                <LibraryCard item={item} isFeatured={index === 0} />
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.link}
                                                className="group relative block h-full bg-neutral-900/40 border border-neutral-800 hover:border-purple-500/30 p-8 transition-all duration-300 hover:bg-neutral-900/60"
                                            >
                                                <LibraryCard item={item} isFeatured={index === 0} />
                                            </Link>
                                        )
                                    ) : (
                                        <div className="group relative block h-full bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 p-8 transition-all duration-300">
                                            <LibraryCard item={item} isFeatured={index === 0} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ===== SECTION 2: TECHNICAL WRITINGS ===== */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-mono text-purple-400">02</span>
                            <h2 className="text-xl font-bold tracking-[0.1em] text-white">TECHNICAL WRITINGS</h2>
                            <div className="h-[1px] flex-1 bg-neutral-800" />
                            <div className="flex items-center gap-4">
                                <a href={writingLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:opacity-80 transition-all hover:scale-110">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href={writingLinks.devto} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-all hover:scale-110">
                                    <FaDev className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {blogs.map((blog, index) => (
                                <motion.a
                                    key={index}
                                    href={blog.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                                >
                                    <div className="w-1 absolute left-0 top-0 bottom-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{blog.date}</span>
                                            <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-purple-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors mb-2 truncate pr-4">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">{blog.desc}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {blog.tags?.map((tag, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-neutral-800/50 border border-neutral-700 text-[10px] font-mono text-gray-500 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* ===== SECTION 3: EXTERNAL READS ===== */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-mono text-cyan-500/50">03</span>
                            <h2 className="text-xl font-bold tracking-[0.1em] text-white">EXTERNAL READS</h2>
                            <div className="h-[1px] flex-1 bg-neutral-800" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {reads.map((category, catIndex) => (
                                <div key={catIndex}>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] font-mono text-cyan-500/40 uppercase tracking-widest">
                                            archive://external/{category.category.toLowerCase().replace(/\s+/g, '_')}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        {category.items.map((item, itemIndex) => (
                                            <motion.a
                                                key={itemIndex}
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                                                className="group flex items-start gap-4 p-4 bg-neutral-900/10 border border-dashed border-neutral-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-cyan-500/[0.02]"
                                            >
                                                <div className="p-2 bg-neutral-800/30 border border-dashed border-neutral-700 group-hover:border-cyan-500/30 transition-colors">
                                                    {getTypeIcon(item.type)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-bold text-gray-300 group-hover:text-cyan-400 transition-colors mb-0.5">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 mb-1.5">
                                                        <span className="text-[9px] font-mono text-cyan-500/50 uppercase tracking-tighter">
                                                            SOURCE: {item.type.toUpperCase()}
                                                        </span>
                                                        <span className="w-1 h-1 bg-neutral-800 rounded-full" />
                                                        <span className="text-[9px] font-mono text-gray-600 uppercase">
                                                            AUTH: {item.author}
                                                        </span>
                                                    </div>
                                                    {item.description && (
                                                        <p className="text-xs text-gray-500 group-hover:text-gray-400 line-clamp-1 leading-relaxed italic">{item.description}</p>
                                                    )}
                                                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                                                        {item.tags.map((tag, idx) => (
                                                            <span key={idx} className="text-[9px] font-mono text-gray-600 group-hover:text-cyan-500/50">
                                                                [{tag.toLowerCase()}]
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <ExternalLink className="w-3 h-3 text-neutral-800 group-hover:text-cyan-500/50 transition-colors mt-1" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function LibraryCard({ item, isLocked, isFeatured }) {
    return (
        <>
            <div className="flex items-start justify-between mb-8">
                <span className={`${isFeatured ? "text-6xl" : "text-4xl"} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                {!isLocked && <ArrowUpRight className={`${isFeatured ? "w-6 h-6" : "w-5 h-5"} text-neutral-600 group-hover:text-purple-400 transition-colors`} />}
            </div>

            <div className="space-y-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`${isFeatured ? "text-[12px]" : "text-[10px]"} font-mono text-purple-500 uppercase tracking-widest`}>{isLocked ? "system.unavailable" : "system.active_roadmap"}</span>
                    </div>
                    <h3 className={`${isFeatured ? "text-3xl sm:text-4xl" : "text-xl"} font-bold text-gray-200 group-hover:text-white transition-colors`}>
                        {item.title}
                    </h3>
                </div>

                <p className={`${isFeatured ? "text-sm" : "text-xs"} font-mono text-purple-400 bg-purple-500/5 border border-purple-500/10 px-2 py-1 inline-block`}>
                    {item.subtitle}
                </p>

                <p className={`${isFeatured ? "text-lg" : "text-sm"} text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors min-h-[3rem]`}>
                    {item.description}
                </p>

                {!isLocked && (
                    <div className="flex flex-wrap gap-2 pt-4">
                        {item.tags.map((tag, idx) => (
                            <span key={idx} className={`px-2 py-0.5 bg-neutral-800/80 border border-neutral-700 ${isFeatured ? "text-xs" : "text-[10px]"} font-mono text-gray-500 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Decorative corners */}
            {!isLocked && (
                <>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neutral-800 group-hover:border-purple-500/50 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neutral-800 group-hover:border-purple-500/50 transition-colors" />
                </>
            )}
        </>
    );
}
