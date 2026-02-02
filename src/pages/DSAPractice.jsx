import React, { useState } from "react";
import { codingProblems, patternQuestions } from "@/data/dsaExtendedData";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Code2, List, FileSpreadsheet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function DSAPractice() {
    const location = useLocation();
    const mode = location.pathname.includes("patterns") ? "patterns" : "problems";
    const [filter, setFilter] = useState("");

    const isProblems = mode === "problems";
    const title = isProblems ? "Coding Problems" : "Pattern-Wise Questions";
    const subtitle = isProblems
        ? "Essential coding interview questions categorized for practice."
        : "Master DSA patterns with curated LeetCode problems.";

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
                        <div className="space-y-8">
                            {codingProblems.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-neutral-900 border border-neutral-800 p-6 hover:border-purple-500/30 transition-colors shadow-xl"
                                >
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Code2 className="w-5 h-5 text-purple-400" />
                                        {category.title}
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {category.questions.map((q, qIdx) => (
                                            <div key={qIdx} className="flex items-start gap-3 p-3 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition-colors">
                                                <span className="text-sm font-mono text-purple-400 min-w-[24px]">{qIdx + 1}.</span>
                                                <span className="text-gray-300 text-sm">{q}</span>
                                            </div>
                                        ))}
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
            <Footer />
        </div>
    );
}
