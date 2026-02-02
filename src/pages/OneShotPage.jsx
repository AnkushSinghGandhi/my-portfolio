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

    const getSummaryContext = () => {
        return `
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
    };

    // Initialize context on mount
    React.useEffect(() => {
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
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none fixed" />

                <div className="relative z-10 max-w-5xl mx-auto">

                    {/* Disclaimer for Demo Content */}
                    {data.isDemo && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 p-3 bg-yellow-50 border border-yellow-200 flex items-center justify-center gap-3 text-yellow-800 text-sm font-mono shadow-sm"
                        >
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <span>PREVIEW MODE: This is demo content. Full detailed roadmap coming soon.</span>
                        </motion.div>
                    )}

                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-purple-600 animate-pulse" />
                                <span className="text-xs font-mono text-purple-600 tracking-widest uppercase">One-Shot Series</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-neutral-900 tracking-tight">
                                {data.title}
                            </h1>
                            <p className="text-neutral-500 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                                {data.subtitle}
                                <br />
                                <span className="text-sm font-mono text-purple-600 bg-purple-50 px-2 py-1 mt-2 inline-block border border-purple-100">{datasetTags(data)}</span>
                            </p>

                            <button
                                onClick={handleAiAnalyze}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.3)] group border-none"
                            >
                                <Sparkles className="w-5 h-5 text-white group-hover:animate-pulse" />
                                <span className="font-bold tracking-wide">ACTIVATE AI EXPERT</span>
                            </button>
                            <p className="text-[10px] text-neutral-400 mt-2 font-mono uppercase tracking-wider">
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
                            className="mb-12 p-6 bg-neutral-900 border border-neutral-800 shadow-xl group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                <Terminal className="w-24 h-24 text-white" />
                            </div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="w-1 self-stretch bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                                <div>
                                    <h2 className="text-xl font-bold mb-2 text-white">{data.primer.title}</h2>
                                    <p className="text-gray-400 text-sm mb-3">{data.primer.description}</p>
                                    <a
                                        href={data.primer.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xs font-mono transition-colors border-b border-purple-500/30 hover:border-purple-400 pb-0.5"
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
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-4xl bg-neutral-100 w-16 h-16 flex items-center justify-center shadow-sm border border-neutral-200">{tier.emoji}</span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">{tier.name}</h2>
                                        {tier.weightage && (
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                                                <p className="text-sm font-mono text-neutral-600 uppercase tracking-wide font-bold">{tier.weightage} Weightage</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <p className="text-neutral-600 text-base mb-8 pl-0 md:pl-20 max-w-3xl leading-relaxed">{tier.description}</p>

                                {/* Topics */}
                                <div className="grid gap-4 pl-0 md:pl-20">
                                    {tier.topics.map((topic, topicIndex) => (
                                        <div
                                            key={topicIndex}
                                            className="bg-neutral-900 border border-neutral-800 p-8 hover:border-purple-500/30 transition-colors shadow-lg group relative overflow-hidden"
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
                                                        );
                                                    })}
                                                </ul>
                                            </div>
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
                            className="mt-16 pl-0 md:pl-20"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-neutral-900">
                                <Terminal className="w-6 h-6 text-purple-600" />
                                Quick Reference Cheatsheets
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {data.cheatSheets.map((sheet, idx) => (
                                    <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 hover:border-purple-500/30 transition-colors shadow-xl group">
                                        <h3 className="text-lg font-bold text-gray-200 mb-4 border-b border-neutral-800 pb-2 group-hover:text-white">
                                            {sheet.category}
                                        </h3>
                                        <div className="space-y-3">
                                            {sheet.content.map((item, itemIdx) => (
                                                <div key={itemIdx} className="font-mono text-xs">
                                                    <div className="text-cyan-400 bg-neutral-800 p-2 border border-neutral-700 mb-1 inline-block">
                                                        {item.cmd}
                                                    </div>
                                                    <div className="text-gray-500 pl-1 italic">{item.desc}</div>
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
                            className="mt-12 p-8 bg-neutral-900 border border-neutral-800 shadow-xl"
                        >
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                                <BookOpen className="w-5 h-5 text-purple-500" />
                                Practice Resources
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {data.practiceLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 text-sm text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-neutral-800 transition-colors"
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
                            className="mt-8 p-6 bg-neutral-900 border border-neutral-800 shadow-xl"
                        >
                            <h3 className="text-lg font-bold mb-4 text-white">🧠 Final Tips</h3>
                            <ul className="space-y-3">
                                {data.tips.map((tip, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <span className="text-purple-400 font-bold">→</span>
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
