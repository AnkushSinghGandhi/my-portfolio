import React, { useState } from "react";
import { motion } from "framer-motion";
import { dsaRoadmap } from "@/data/resources";
import { CheckCircle2, Circle, Trophy, ArrowRight, Sparkles, ArrowUpRight, ExternalLink, CheckCircle, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "react-confetti";
import AiToolbox from "@/components/AiCompanion/AiToolbox";

export default function DSARoadmap() {
    const [completedNodes, setCompletedNodes] = useState(new Set());
    const [showConfetti, setShowConfetti] = useState(false);
    const [aiContext, setAiContext] = useState("");

    const toggleNode = (nodeId) => {
        // ... existing logic ...
        const newcompleted = new Set(completedNodes);
        if (newcompleted.has(nodeId)) {
            newcompleted.delete(nodeId);
        } else {
            newcompleted.add(nodeId);
        }
        setCompletedNodes(newcompleted);

        // Check for milestone completion logic (omitted, assuming it's simpler)
        if (newcompleted.size === 10) setShowConfetti(true); // Example
    };

    const handleAiAnalyze = () => {
        // Convert roadmap to text context
        const context = `
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
        setAiContext(context);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />
            {showConfetti && <div className="fixed inset-0 z-50 pointer-events-none"><confetti width={window.innerWidth} height={window.innerHeight} /></div>}

            <AiToolbox context={aiContext} />

            <main className="relative px-6 sm:px-12 lg:px-20 py-24 pt-32 sm:pt-44 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-green-500 animate-pulse rounded-full" />
                                <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Live Roadmap</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                DSA One-Shot
                            </h1>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                                Priority-based execution plan for cracking ₹10-15 LPA offers.
                                <br />
                                <span className="text-sm font-mono text-purple-400">System Design • Arrays • DP • Graphs</span>
                            </p>

                            <button
                                onClick={handleAiAnalyze}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/50 hover:border-cyan-400 text-cyan-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.2)] group"
                            >
                                <Sparkles className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:animate-pulse" />
                                <span className="font-bold tracking-wide">ACTIVATE AI TUTOR</span>
                            </button>
                            <p className="text-[10px] text-gray-600 mt-2 font-mono">
                                // Click to generate quizzes, study plans & project ideas based on this roadmap
                            </p>
                        </motion.div>
                    </div>

                    {/* Original Header content, now removed/replaced by the new header */}
                    {/*
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                            {dsaRoadmap.title}
                        </h1>
                        <p className="text-gray-400 text-base sm:text-lg mb-4">
                            {dsaRoadmap.intro}
                        </p>
                        <a
                            href={dsaRoadmap.blogLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-mono transition-colors"
                        >
                            <span>{dsaRoadmap.subtitle}</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>
                    */}

                    {/* Time Complexity Primer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12 p-6 bg-neutral-900/50 border border-neutral-800"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-1 self-stretch bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                            <div>
                                <h2 className="text-xl font-bold mb-2">{dsaRoadmap.primer.title}</h2>
                                <p className="text-gray-400 text-sm mb-3">{dsaRoadmap.primer.description}</p>
                                <a
                                    href={dsaRoadmap.primer.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xs font-mono transition-colors"
                                >
                                    <span>Read Primer</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tiers */}
                    <div className="space-y-10">
                        {dsaRoadmap.tiers.map((tier, tierIndex) => (
                            <motion.div
                                key={tierIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + tierIndex * 0.1 }}
                            >
                                {/* Tier Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl">{tier.emoji}</span>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">{tier.name}</h2>
                                        <p className="text-xs font-mono text-purple-400">{tier.weightage} Weightage</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-6">{tier.description}</p>

                                {/* Topics */}
                                <div className="grid gap-4">
                                    {tier.topics.map((topic, topicIndex) => (
                                        <div
                                            key={topicIndex}
                                            className="bg-neutral-900/30 border border-neutral-800 p-5"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-base font-semibold text-gray-200">{topic.title}</h3>
                                                {topic.percentage && (
                                                    <span className="text-xs font-mono text-neutral-500 bg-neutral-800 px-2 py-1">
                                                        {topic.percentage}
                                                    </span>
                                                )}
                                            </div>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {topic.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-400">
                                                        <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
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
                        className="mt-12 p-6 bg-neutral-900/50 border border-neutral-800"
                    >
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-purple-400" />
                            Practice Resources
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {dsaRoadmap.practiceLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-sm text-gray-300 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
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
                        className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-purple-500/20"
                    >
                        <h3 className="text-lg font-bold mb-4">🧠 Final Tips</h3>
                        <ul className="space-y-2">
                            {dsaRoadmap.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                    <span className="text-purple-400">→</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
