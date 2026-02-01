import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Trophy, ArrowRight, Sparkles, ArrowUpRight, ExternalLink, CheckCircle, BookOpen, AlertTriangle, Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "react-confetti";
import AiToolbox from "@/components/AiCompanion/AiToolbox";

export default function OneShotPage({ data }) {
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

        // Simple gamification: Show confetti if 5 items are checked in current session
        // In a real app, this would check percentage or specific milestones
        if (newcompleted.size > 0 && newcompleted.size % 5 === 0) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
        }
    };

    const handleAiAnalyze = () => {
        const context = `
      Title: ${data.title}
      Subtitle: ${data.subtitle}
      Description: ${data.intro}
      Current Progress: ${completedNodes.size} items completed.

      Content:
      ${data.tiers.map(tier => `
        Phase: ${tier.name} (${tier.weightage || ''})
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

                    {/* Disclaimer for Demo Content */}
                    {data.isDemo && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg flex items-center justify-center gap-3 text-yellow-200 text-sm font-mono"
                        >
                            <AlertTriangle className="w-4 h-4 text-yellow-500" />
                            <span>PREVIEW MODE: This is demo content. Full detailed roadmap coming soon.</span>
                        </motion.div>
                    )}

                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-purple-500 animate-pulse rounded-full" />
                                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">One-Shot Series</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                {data.title}
                            </h1>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                                {data.subtitle}
                                <br />
                                <span className="text-sm font-mono text-purple-400">{datasetTags(data)}</span>
                            </p>

                            <button
                                onClick={handleAiAnalyze}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/50 hover:border-cyan-400 text-cyan-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.2)] group rounded-full"
                            >
                                <Sparkles className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:animate-pulse" />
                                <span className="font-bold tracking-wide">ACTIVATE AI TUTOR</span>
                            </button>
                            <p className="text-[10px] text-gray-600 mt-2 font-mono">
                                // Click to generate quizzes, study plans & project ideas based on this roadmap
                            </p>
                        </motion.div>
                    </div>

                    {/* Primer */}
                    {data.primer && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-12 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-1 self-stretch bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                                <div>
                                    <h2 className="text-xl font-bold mb-2">{data.primer.title}</h2>
                                    <p className="text-gray-400 text-sm mb-3">{data.primer.description}</p>
                                    <a
                                        href={data.primer.link}
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
                    )}

                    {/* Tiers / Phases */}
                    <div className="space-y-10">
                        {data.tiers.map((tier, tierIndex) => (
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
                                        {tier.weightage && <p className="text-xs font-mono text-purple-400">{tier.weightage} Weightage</p>}
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-6">{tier.description}</p>

                                {/* Topics */}
                                <div className="grid gap-4">
                                    {tier.topics.map((topic, topicIndex) => (
                                        <div
                                            key={topicIndex}
                                            className="bg-neutral-900/30 border border-neutral-800 p-5 rounded-lg hover:border-purple-500/20 transition-colors"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-base font-semibold text-gray-200">{topic.title}</h3>
                                                {topic.percentage && (
                                                    <span className="text-xs font-mono text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                                                        {topic.percentage}
                                                    </span>
                                                )}
                                            </div>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {topic.items.map((item, itemIndex) => {
                                                    const itemId = `${tierIndex}-${topicIndex}-${itemIndex}`;
                                                    const isCompleted = completedNodes.has(itemId);
                                                    return (
                                                        <li
                                                            key={itemIndex}
                                                            onClick={() => toggleNode(itemId)}
                                                            className={`flex items-start gap-2 text-sm cursor-pointer select-none transition-colors ${isCompleted ? "text-gray-400" : "text-gray-500 hover:text-gray-300"}`}
                                                        >
                                                            {isCompleted ? (
                                                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                            ) : (
                                                                <Circle className="w-4 h-4 text-neutral-700 flex-shrink-0 mt-0.5 group-hover:text-purple-400" />
                                                            )}
                                                            <span className={isCompleted ? "line-through decoration-neutral-700" : ""}>{item}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cheat Sheets Section */}
                    {data.cheatSheets && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-16"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Terminal className="w-6 h-6 text-purple-400" />
                                Quick Reference Cheatsheets
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {data.cheatSheets.map((sheet, idx) => (
                                    <div key={idx} className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 hover:border-purple-500/30 transition-colors">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-3 border-b border-neutral-800 pb-2">
                                            {sheet.category}
                                        </h3>
                                        <div className="space-y-3">
                                            {sheet.content.map((item, itemIdx) => (
                                                <div key={itemIdx} className="font-mono text-xs">
                                                    <div className="text-cyan-300 bg-black/50 p-1.5 rounded border border-neutral-800 mb-0.5">
                                                        {item.cmd}
                                                    </div>
                                                    <div className="text-gray-500 pl-1">{item.desc}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Practice Links */}
                    {data.practiceLinks && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-12 p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl"
                        >
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-purple-400" />
                                Practice Resources
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {data.practiceLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-sm text-gray-300 hover:text-purple-400 hover:border-purple-500/50 transition-colors rounded-lg"
                                    >
                                        <span>{link.name}</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Tips */}
                    {data.tips && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl"
                        >
                            <h3 className="text-lg font-bold mb-4">🧠 Final Tips</h3>
                            <ul className="space-y-2">
                                {data.tips.map((tip, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className="text-purple-400">→</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

// Helper to extract tags from first few tiers for the header display
function datasetTags(data) {
    if (!data.tiers) return "";
    const tags = [];
    data.tiers.slice(0, 2).forEach(tier => {
        tier.topics.slice(0, 2).forEach(topic => {
            tags.push(topic.title);
        });
    });
    return tags.slice(0, 4).join(" • ");
}
