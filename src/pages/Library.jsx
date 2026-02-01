import { motion } from "framer-motion";
import { cheatsheets, blogs, reads, writingLinks } from "@/data/library";
import { ArrowUpRight, Linkedin, ExternalLink, Youtube, FileText, Rocket, Database, Zap, Container, LayoutTemplate } from "lucide-react";
import { FaDev } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import AiToolbox from "@/components/AiCompanion/AiToolbox";

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

const iconMap = {
    "Rocket": Rocket,
    "Database": Database,
    "Zap": Zap,
    "Container": Container,
    "LayoutTemplate": LayoutTemplate,
    "default": FileText
};

export default function LibraryPage() {
    const [aiContext, setAiContext] = useState("");

    const handleAiAnalyze = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        const context = `
            Title: ${item.title}
            Subtitle: ${item.subtitle || item.category || ""}
            Description: ${item.description || item.desc || ""}
            Tags: ${item.tags ? item.tags.join(", ") : ""}
            Type: ${item.type || "Resource"}
            Content Summary: This offers a comprehensive guide and resources about ${item.title}.
        `;
        setAiContext(context);
    };

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans">
            <Navbar />

            {/* AI Companion */}
            <AiToolbox context={aiContext || "Welcome to Ankush's Developer Archive. Select a roadmap or article to get specific AI insights, or ask general questions about the library content."} />

            <section className="relative px-6 sm:px-12 lg:px-20 py-24 pt-32 sm:pt-44 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Header - Terminal Style */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-purple-600 animate-pulse" />
                                <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">system.archive_access</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-black">
                                DEVELOPER ARCHIVE
                            </h1>
                            <p className="text-neutral-500 text-sm sm:text-lg max-w-2xl font-mono">
                // CURATED REPOSITORY OF ROADMAPS, WRITINGS & LEARNING MATERIALS
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-left md:text-right border-l md:border-l-0 md:border-r border-neutral-200 pl-6 md:pl-0 md:pr-6"
                        >
                            <div className="space-y-1">
                                <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-tighter">
                                    status: synchronized
                                </p>
                                <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-tighter">
                                    access_level: guest_user
                                </p>
                                <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-tighter">
                                    total_assets: {cheatsheets.length + blogs.length + reads.reduce((acc, cat) => acc + cat.items.length, 0)}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ===== SECTION 1: ROADMAPS & ONE SHOTS ===== */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-mono text-purple-600">01</span>
                            <h2 className="text-xl font-bold tracking-[0.1em] text-black">ROADMAPS & ONE SHOTS</h2>
                            <div className="h-[1px] flex-1 bg-neutral-200" />
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
                                                className="group relative block h-full bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 p-0 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                            >
                                                <LibraryCard item={item} isFeatured={index === 0} onAiAnalyze={handleAiAnalyze} />
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.link}
                                                className="group relative block h-full bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 p-0 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                            >
                                                <LibraryCard item={item} isFeatured={index === 0} onAiAnalyze={handleAiAnalyze} />
                                            </Link>
                                        )
                                    ) : (
                                        <div className="group relative block h-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 p-0 transition-all duration-300 shadow-xl">
                                            <LibraryCard item={item} isFeatured={index === 0} onAiAnalyze={handleAiAnalyze} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ===== SECTION 2: TECHNICAL WRITINGS ===== */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-mono text-purple-600">02</span>
                            <h2 className="text-xl font-bold tracking-[0.1em] text-black">TECHNICAL WRITINGS</h2>
                            <div className="h-[1px] flex-1 bg-neutral-200" />
                            <div className="flex items-center gap-4">
                                <a href={writingLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:opacity-80 transition-all hover:scale-110">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href={writingLinks.devto} target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-80 transition-all hover:scale-110">
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
                                    className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <div className="w-1 absolute left-0 top-0 bottom-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{blog.date}</span>
                                            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-purple-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors mb-2 truncate pr-4">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">{blog.desc}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {blog.tags?.map((tag, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 text-[10px] font-mono text-gray-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors">
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
                            <span className="text-xs font-mono text-cyan-600">03</span>
                            <h2 className="text-xl font-bold tracking-[0.1em] text-black">EXTERNAL READS</h2>
                            <div className="h-[1px] flex-1 bg-neutral-200" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {reads.map((category, catIndex) => (
                                <div key={catIndex}>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] font-mono text-cyan-700 uppercase tracking-widest">
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
                                                className="group flex items-start gap-4 p-4 bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 transition-all duration-300 shadow-md hover:shadow-lg"
                                            >
                                                <div className="p-2 bg-neutral-800 border border-dashed border-neutral-700 group-hover:border-cyan-500/30 transition-colors">
                                                    {getTypeIcon(item.type)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-sm font-bold text-gray-200 group-hover:text-cyan-400 transition-colors mb-0.5">
                                                            {item.title}
                                                        </h4>
                                                    </div>

                                                    <div className="flex items-center gap-2 mb-1.5">
                                                        <span className="text-[9px] font-mono text-cyan-500/70 uppercase tracking-tighter">
                                                            SOURCE: {item.type.toUpperCase()}
                                                        </span>
                                                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                                                        <span className="text-[9px] font-mono text-gray-400 uppercase">
                                                            AUTH: {item.author}
                                                        </span>
                                                    </div>
                                                    {item.description && (
                                                        <p className="text-xs text-gray-400 group-hover:text-gray-300 line-clamp-1 leading-relaxed italic">{item.description}</p>
                                                    )}
                                                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                                                        {item.tags.map((tag, idx) => (
                                                            <span key={idx} className="text-[9px] font-mono text-gray-500 group-hover:text-cyan-400">
                                                                [{tag.toLowerCase()}]
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <ExternalLink className="w-3 h-3 text-neutral-600 group-hover:text-cyan-400 transition-colors mt-1" />
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

// Minimalistic, clean dark theme with color accents only on hover/interaction
const getThemeClasses = (color) => {
    const themes = {
        purple: {
            text: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "group-hover:border-purple-500/30",
            hoverBorder: "group-hover:border-purple-500/50",
            glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]",
            titleHover: "group-hover:text-purple-300",
            tagText: "text-purple-300",
            tagBg: "bg-purple-500/10",
            tagBorder: "border-purple-500/20",
            icon: "text-purple-500/20",
            accent: "group-hover:text-purple-400"
        },
        cyan: {
            text: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "group-hover:border-cyan-500/30",
            hoverBorder: "group-hover:border-cyan-500/50",
            glow: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]",
            titleHover: "group-hover:text-cyan-300",
            tagText: "text-cyan-300",
            tagBg: "bg-cyan-500/10",
            tagBorder: "border-cyan-500/20",
            icon: "text-cyan-500/20",
            accent: "group-hover:text-cyan-400"
        },
        orange: {
            text: "text-orange-400",
            bg: "bg-orange-500/10",
            border: "group-hover:border-orange-500/30",
            hoverBorder: "group-hover:border-orange-500/50",
            glow: "group-hover:shadow-[0_0_40px_rgba(251,146,60,0.1)]",
            titleHover: "group-hover:text-orange-300",
            tagText: "text-orange-300",
            tagBg: "bg-orange-500/10",
            tagBorder: "border-orange-500/20",
            icon: "text-orange-500/20",
            accent: "group-hover:text-orange-400"
        },
        emerald: {
            text: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "group-hover:border-emerald-500/30",
            hoverBorder: "group-hover:border-emerald-500/50",
            glow: "group-hover:shadow-[0_0_40px_rgba(52,211,153,0.1)]",
            titleHover: "group-hover:text-emerald-300",
            tagText: "text-emerald-300",
            tagBg: "bg-emerald-500/10",
            tagBorder: "border-emerald-500/20",
            icon: "text-emerald-500/20",
            accent: "group-hover:text-emerald-400"
        },
        slate: {
            text: "text-slate-400",
            bg: "bg-slate-500/10",
            border: "group-hover:border-slate-500/30",
            hoverBorder: "group-hover:border-slate-500/50",
            glow: "group-hover:shadow-[0_0_40px_rgba(148,163,184,0.1)]",
            titleHover: "group-hover:text-slate-300",
            tagText: "text-slate-300",
            tagBg: "bg-slate-500/10",
            tagBorder: "border-slate-500/20",
            icon: "text-slate-500/20",
            accent: "group-hover:text-slate-300"
        }
    };
    return themes[color] || themes.purple;
};

function LibraryCard({ item, isLocked, isFeatured, onAiAnalyze }) {
    const theme = getThemeClasses(item.color || "purple");
    const Icon = iconMap[item.icon] || FileText;

    return (
        <div className={`h-full flex flex-col relative overflow-hidden ${theme.glow} transition-shadow duration-500 bg-neutral-900 border border-neutral-800 p-6`}>

            {/* LARGE WATERMARK ICON - Less distracting, grey by default */}
            <div className={`absolute -right-8 -bottom-10 opacity-[0.05] transform rotate-[-12deg] group-hover:scale-110 group-hover:opacity-[0.1] transition-all duration-500 pointer-events-none`}>
                <Icon size={200} strokeWidth={1} />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className={`p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50 ${theme.border} transition-colors`}>
                    <Icon className={`w-8 h-8 text-neutral-400 ${theme.accent} transition-colors`} />
                </div>
                {!isLocked && (
                    <ArrowUpRight className={`w-6 h-6 text-neutral-700 group-hover:text-white transition-colors`} />
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 group-hover:text-neutral-500 transition-colors">
                        {isLocked ? "LOCKED CONTENT" : item.tags ? item.tags[0] : "GUIDE"}
                    </span>
                </div>

                <h3 className={`text-5xl font-extrabold text-white mb-4 tracking-tight leading-[0.9] ${theme.accent} transition-colors`}>
                    {item.title}
                </h3>

                <p className="text-base text-gray-500 leading-relaxed font-medium line-clamp-3 mb-6">
                    {item.description}
                </p>

                {/* Tags - Minimalist */}
                {!isLocked && item.tags && (
                    <div className="mt-auto pt-6 border-t border-dashed border-neutral-800 group-hover:border-neutral-700 transition-colors flex flex-wrap gap-2">
                        {item.tags.slice(1).map((tag, idx) => (
                            <span key={idx} className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
