import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { dsaRoadmap } from "@/data/resources";
import { CheckCircle2, Circle, Trophy, ArrowRight, Sparkles, ArrowUpRight, ExternalLink, CheckCircle, BookOpen, Github, Code2, List, Layers, Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "react-confetti";
import AiToolbox from "@/components/AiCompanion/AiToolbox";

export default function DSARoadmap() {
    const [completedNodes, setCompletedNodes] = useState(new Set());
    const [showConfetti, setShowConfetti] = useState(false);
    const [aiContext, setAiContext] = useState("");

    const toggleNode = (nodeId) => {
        const newcompleted = new Set(completedNodes);
        if (newcompleted.has(nodeId)) {
            newcompleted.delete(nodeId);
        } else {
            newcompleted.add(nodeId);
        }
        setCompletedNodes(newcompleted);

        if (newcompleted.size > 0 && newcompleted.size % 10 === 0) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
        }
    };

    const getSummaryContext = () => {
        return `
      Title: DSA One-Shot Roadmap
      Description: A priority-based roadmap for cracking interviews.
      Current Progress: ${completedNodes.size} items completed.

      Content:
      ${dsaRoadmap.tiers.map(tier => `
        Tier ${tier.name} (${tier.weightage} Weightage)
        Description: ${tier.description}
        Topics:
        ${tier.topics.map(t => `- ${t.title}: ${t.items.join(", ")}`).join("\n")}
      `).join("\n\n")}
    `;
    };

    // Initialize context on mount
    useEffect(() => {
        setAiContext(getSummaryContext());
    }, []);

    const handleAiAnalyze = () => {
        setAiContext(getSummaryContext());
        // Simple event to signal AiToolbox to open
        window.dispatchEvent(new CustomEvent("openAiToolbox", { detail: { mode: "tutor" } }));
    };

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-purple-100">
            <Navbar />
            {showConfetti && <div className="fixed inset-0 z-50 pointer-events-none"><confetti width={window.innerWidth} height={window.innerHeight} /></div>}

            <AiToolbox context={aiContext} />

            <main className="relative px-6 sm:px-12 lg:px-20 py-24 pt-32 sm:pt-44 overflow-hidden">
                {/* Light Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none fixed" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-green-500 animate-pulse rounded-full" />
                                <span className="text-xs font-mono text-green-600 tracking-widest uppercase">system.roadmap_active</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-neutral-900 tracking-tight">
                                DSA ONE-SHOT
                            </h1>
                            <p className="text-neutral-500 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                                Priority-based execution plan for cracking ₹10-15 LPA offers.
                                <br />
                                <span className="text-sm font-mono text-purple-600 bg-purple-50 px-2 py-1 mt-2 inline-block border border-purple-100">System Design • Arrays • DP • Graphs</span>
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={handleAiAnalyze}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.3)] group border-none"
                                >
                                    <Sparkles className="w-5 h-5 text-white group-hover:animate-pulse" />
                                    <span className="font-bold tracking-wide text-sm">ACTIVATE AI EXPERT</span>
                                </button>

                                <a
                                    href={dsaRoadmap.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white border border-neutral-800 hover:bg-black transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                                >
                                    <Github className="w-5 h-5" />
                                    <span className="font-semibold text-sm">View Repository</span>
                                </a>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                                <Link
                                    to="/library/dsa-roadmap/problems"
                                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5 shadow-lg"
                                >
                                    <Code2 className="w-4 h-4 text-purple-500" />
                                    <span className="text-sm font-medium">Coding Problems</span>
                                </Link>
                                <Link
                                    to="/library/dsa-roadmap/patterns"
                                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5 shadow-lg"
                                >
                                    <List className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-medium">Pattern-Wise Questions</span>
                                </Link>
                                <Link
                                    to="/library/dsa-roadmap/concepts"
                                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white hover:border-pink-500/50 hover:bg-neutral-800 transition-all hover:-translate-y-0.5 shadow-lg"
                                >
                                    <Layers className="w-4 h-4 text-pink-500" />
                                    <span className="text-sm font-medium">Learn Concepts</span>
                                </Link>
                            </div>


                            <p className="text-[10px] text-neutral-400 mt-6 font-mono uppercase tracking-wider">
                                // Click above to access specialized training modules
                            </p>
                        </motion.div>
                    </div>

                    {/* Time Complexity Primer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12 p-6 bg-neutral-900 border border-neutral-800 shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <Terminal className="w-24 h-24 text-white" />
                        </div>
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="w-1 self-stretch bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                            <div>
                                <h2 className="text-xl font-bold mb-2 text-white">{dsaRoadmap.primer.title}</h2>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{dsaRoadmap.primer.description}</p>
                                <a
                                    href={dsaRoadmap.primer.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-b border-purple-500/30 hover:border-purple-400 pb-0.5"
                                >
                                    <span>Read Primer Module</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tiers */}
                    <div className="space-y-8">
                        {dsaRoadmap.tiers.map((tier, tierIndex) => (
                            <motion.div
                                key={tierIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + tierIndex * 0.1 }}
                            >
                                {/* Tier Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-4xl bg-neutral-100 w-16 h-16 flex items-center justify-center shadow-sm border border-neutral-200">{tier.emoji}</span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">{tier.name}</h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                                            <p className="text-sm font-mono text-neutral-600 uppercase tracking-wide font-bold">{tier.weightage} Priority</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-neutral-600 text-base mb-8 pl-0 md:pl-20 max-w-3xl leading-relaxed">{tier.description}</p>

                                {/* Topics */}
                                <div className="grid gap-4 pl-0 md:pl-20">
                                    {tier.topics.map((topic, topicIndex) => (
                                        <div
                                            key={topicIndex}
                                            className="bg-neutral-900 border border-neutral-800 p-8 hover:border-purple-500/30 transition-all duration-300 group shadow-lg relative overflow-hidden"
                                        >
                                            {/* Watermark Percentage */}
                                            {topic.percentage && (
                                                <div className="absolute -right-6 -bottom-8 text-[8rem] font-black text-neutral-700/50 select-none pointer-events-none z-0 tracking-tighter loading-none">
                                                    {topic.percentage}
                                                </div>
                                            )}

                                            <div className="relative z-10">
                                                <div className="flex items-start justify-between mb-6">
                                                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">{topic.title}</h3>
                                                </div>
                                                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                                    {topic.items.map((item, itemIndex) => {
                                                        const itemId = `${tierIndex}-${topicIndex}-${itemIndex}`;
                                                        const isCompleted = completedNodes.has(itemId);
                                                        return (
                                                            <li
                                                                key={itemIndex}
                                                                onClick={() => toggleNode(itemId)}
                                                                className={`flex items-start gap-3 text-sm cursor-pointer select-none transition-colors group/item ${isCompleted ? "text-gray-500" : "text-gray-400 hover:text-gray-200"}`}
                                                            >
                                                                {isCompleted ? (
                                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                                ) : (
                                                                    <Circle className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5 group-hover/item:text-purple-500 transition-colors" />
                                                                )}
                                                                <span className={`${isCompleted ? "line-through decoration-neutral-700" : ""} text-base`}>{item}</span>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Practice Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-16 p-8 bg-neutral-900 border border-neutral-800 shadow-xl"
                    >
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                            <BookOpen className="w-5 h-5 text-purple-500" />
                            Additional Resources
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {dsaRoadmap.practiceLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 text-sm text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-neutral-800 transition-all"
                                >
                                    <span>{link.name}</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tips */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="mt-8 p-6 bg-neutral-900 border border-neutral-800 shadow-xl"
                    >
                        <h3 className="text-lg font-bold mb-4 text-white">🧠 Pro Tips</h3>
                        <ul className="space-y-3">
                            {dsaRoadmap.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <span className="text-purple-400 font-bold">→</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div >
            </main >

            <Footer />
        </div >
    );
}
