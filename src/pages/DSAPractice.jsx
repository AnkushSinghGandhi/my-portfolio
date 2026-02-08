import React, { useState } from "react";
import { codingProblems, patternQuestions } from "@/data/dsaExtendedData";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code2, X, BookOpen, Image as ImageIcon } from "lucide-react";

// Simple Markdown Parser to avoid external dependency crashes
const SimpleMarkdown = ({ content, className = "" }) => {
    if (!content) return null;

    try {
        const safeContent = String(content);
        // Split by code blocks (```language ... ```)
        const parts = safeContent.split(/```(\w*)\n([\s\S]*?)```/g);

        return (
            <div className={`space-y-4 ${className}`}>
                {parts.map((part, index) => {
                    if (!part) return null;

                    try {
                        // Text block
                        if (index % 3 === 0) {
                            if (!part.trim()) return null;
                            return (
                                <p key={index} className="whitespace-pre-wrap leading-relaxed text-gray-300 font-sans">
                                    {part}
                                </p>
                            );
                        }

                        // Language identifier (skip)
                        if (index % 3 === 1) return null;

                        // Code block
                        if (index % 3 === 2) {
                            const lang = parts[index - 1] || 'text';
                            return (
                                <div key={index} className="relative group my-4 rounded-lg overflow-hidden border border-neutral-700/50 bg-[#0d0d0d]">
                                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                        <span className="text-xs font-mono text-neutral-400 uppercase">{lang || 'CODE'}</span>
                                        <div className="flex gap-1.5 opacity-50">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                        </div>
                                    </div>
                                    <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed custom-scrollbar">
                                        <code className={lang === 'python' ? 'text-emerald-400' : 'text-gray-300'}>
                                            {part}
                                        </code>
                                    </pre>
                                </div>
                            );
                        }
                    } catch (err) {
                        console.error("Block render error:", err);
                        return null;
                    }
                    return null;
                })}
            </div>
        );
    } catch (err) {
        console.error("Markdown parsing error:", err);
        return <div className="text-red-500 text-xs p-2 border border-red-900 bg-red-900/10">Error displaying content</div>;
    }
};

export default function DSAPractice() {
    const location = useLocation();
    const mode = location.pathname.includes("patterns") ? "patterns" : "problems";
    const [selectedProblem, setSelectedProblem] = useState(null);

    const isProblems = mode === "problems";
    const title = isProblems ? "Coding Problems" : "Pattern-Wise Questions";
    const subtitle = isProblems
        ? "Essential coding interview questions categorized for practice."
        : "Master DSA patterns with curated LeetCode problems.";

    const closeModal = () => setSelectedProblem(null);

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-purple-100">
            <Navbar />

            <main className="relative px-6 sm:px-12 lg:px-20 py-24 pt-32 sm:pt-44 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none fixed" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link to="/library/dsa-roadmap" className="inline-flex items-center gap-2 text-neutral-500 hover:text-black mb-6 hover:translate-x-[-4px] transition-transform">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Roadmap</span>
                        </Link>

                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-neutral-900 tracking-tight">
                            {title}
                        </h1>
                        <p className="text-neutral-500 text-lg max-w-2xl">{subtitle}</p>
                    </motion.div>

                    {/* Content */}
                    {isProblems ? (
                        <div className="space-y-12">
                            {codingProblems.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-neutral-900 border border-neutral-800 p-8 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-2 bg-purple-500/10 border border-purple-500/20">
                                            <Code2 className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white tracking-tight">
                                            {category.title}
                                        </h2>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {category.questions.map((q, qIdx) => {
                                            const hasDetails = typeof q === 'object';
                                            const problemTitle = hasDetails ? q.title : q;

                                            return (
                                                <div
                                                    key={qIdx}
                                                    onClick={() => hasDetails && setSelectedProblem(q)}
                                                    className={`group relative flex items-start gap-3 p-4 bg-neutral-800/50 border border-neutral-700/50 transition-all duration-300 ${hasDetails ? 'cursor-pointer hover:bg-neutral-700 hover:border-purple-500/50' : ''}`}
                                                >
                                                    <span className="text-xs font-mono text-purple-400/50 mt-1 min-w-[20px]">{qIdx + 1}.</span>
                                                    <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">{problemTitle}</span>

                                                    {hasDetails && (
                                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                                            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-0.5 border border-purple-500/20">Solution</span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="overflow-x-auto border border-neutral-800 bg-neutral-900 shadow-xl">
                            <table className="w-full text-left text-sm text-gray-400">
                                <thead className="bg-black text-gray-200 uppercase font-mono text-xs border-b border-neutral-800">
                                    <tr>
                                        <th className="px-6 py-4">Pattern</th>
                                        <th className="px-6 py-4">Task</th>
                                        <th className="px-6 py-4">Difficulty</th>
                                        <th className="px-6 py-4 text-right">Link</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800">
                                    {patternQuestions.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-neutral-800 transition-colors">
                                            <td className="px-6 py-4 font-bold text-white">{item.pattern}</td>
                                            <td className="px-6 py-4 text-gray-300">{item.title}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-xs font-bold border ${item.difficulty === 'Easy' ? 'bg-green-900/20 text-green-400 border-green-900' :
                                                    item.difficulty === 'Medium' ? 'bg-yellow-900/20 text-yellow-400 border-yellow-900' :
                                                        'bg-red-900/20 text-red-400 border-red-900'
                                                    }`}>
                                                    {item.difficulty}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {item.lcLink ? (
                                                    <a href={item.lcLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                                        <span>Solve</span>
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-600">-</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>

            {/* Solution Modal */}
            <AnimatePresence>
                {selectedProblem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[85vh] bg-neutral-900 border border-neutral-800 shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-black/40 text-white">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/10 border border-purple-500/20">
                                        <Code2 className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight">{selectedProblem.title}</h3>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-neutral-800 rounded-lg transition-colors group"
                                >
                                    <X className="w-6 h-6 text-neutral-500 group-hover:text-white" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                                {/* Explanation */}
                                <section>
                                    <div className="flex items-center gap-2 mb-4">
                                        <BookOpen className="w-4 h-4 text-purple-400" />
                                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Deep Dive Explanation</h4>
                                    </div>
                                    <div className="text-gray-400 text-sm leading-relaxed space-y-4 border-l-2 border-purple-500/20 pl-6 py-1">
                                        <SimpleMarkdown content={selectedProblem?.explanation || "No explanation available."} />
                                    </div>
                                </section>

                                {/* Image if available */}
                                {selectedProblem?.image && (
                                    <section>
                                        <div className="flex items-center gap-2 mb-4">
                                            <ImageIcon className="w-4 h-4 text-blue-400" />
                                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Visual Blueprint</h4>
                                        </div>
                                        <div className="relative group overflow-hidden border border-neutral-800 bg-black/20 p-2 rounded-sm">
                                            <img src={selectedProblem.image} alt={selectedProblem.title} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                                        </div>
                                    </section>
                                )}

                                {/* Implementation */}
                                <section>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Code2 className="w-4 h-4 text-green-400" />
                                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Optimized Implementation</h4>
                                    </div>
                                    <div className="bg-black/50 border border-neutral-800 p-6 rounded-sm overflow-x-auto">
                                        <SimpleMarkdown content={selectedProblem?.solution || "```python\n# Solution coming soon...\n```"} />
                                    </div>
                                </section>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 border-t border-neutral-800 bg-black/20 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono uppercase tracking-widest transition-all border border-neutral-700"
                                >
                                    Close Terminal
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
