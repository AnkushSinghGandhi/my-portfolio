import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { conceptTopics } from "@/data/dsaExtendedData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronRight, ChevronDown, BookOpen, Layers, Hash, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function DSAConcepts() {
    const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);
    const [selectedSubtopicIdx, setSelectedSubtopicIdx] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const currentTopic = conceptTopics[selectedTopicIdx];
    const currentSubtopic = currentTopic?.subtopics[selectedSubtopicIdx];

    useEffect(() => {
        if (!currentSubtopic?.url) {
            setContent("");
            return;
        }

        const fetchContent = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(currentSubtopic.url);
                if (!response.ok) throw new Error("Failed to load content");
                const text = await response.text();
                setContent(text);
            } catch (err) {
                console.error("Error fetching content:", err);
                setError("Failed to load content. Please check your internet connection.");
                setContent("");
            } finally {
                setIsLoading(false);
            }
        };

        fetchContent();
    }, [currentSubtopic]);

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col">
            <Navbar />

            <div className="flex-1 flex pt-20 overflow-hidden relative z-10">
                {/* Sidebar */}
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`fixed inset-y-0 left-0 z-20 w-80 bg-neutral-50 border-r border-neutral-200 pt-24 pb-10 overflow-y-auto transform transition-transform duration-300 lg:translate-x-0 lg:static lg:block shadow-lg ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="px-6 mb-8">
                        <Link to="/library/dsa-roadmap" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-purple-600 transition-colors mb-6 font-mono tracking-tight">
                            <ArrowLeft className="w-4 h-4" />
                            RETURN_TO_ROADMAP
                        </Link>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">module.concepts</span>
                        </div>
                        <h2 className="text-xl font-bold text-black flex items-center gap-2 tracking-tight">
                            <BookOpen className="w-5 h-5 text-purple-600" />
                            KNOWLEDGE BASE
                        </h2>
                    </div>

                    <div className="px-3 space-y-1">
                        {conceptTopics.map((topic, idx) => (
                            <div key={idx} className="mb-2">
                                <button
                                    onClick={() => {
                                        setSelectedTopicIdx(idx);
                                        setSelectedSubtopicIdx(0);
                                    }}
                                    className={`w-full text-left px-3 py-3 text-sm font-medium transition-all flex items-center justify-between group ${selectedTopicIdx === idx
                                        ? 'bg-purple-100/50 text-purple-700 border-l-4 border-l-purple-600 border-y border-r border-y-purple-200 border-r-purple-200'
                                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-black'
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <Layers className={`w-4 h-4 ${selectedTopicIdx === idx ? 'text-purple-500' : 'text-neutral-400'}`} />
                                        {topic.title}
                                    </span>
                                    {selectedTopicIdx === idx && (
                                        <ChevronDown className="w-4 h-4 text-purple-500" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {selectedTopicIdx === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden ml-4 pl-3 border-l border-neutral-200 mt-1 space-y-1"
                                        >
                                            {topic.subtopics.map((sub, sIdx) => (
                                                <button
                                                    key={sIdx}
                                                    onClick={() => setSelectedSubtopicIdx(sIdx)}
                                                    className={`w-full text-left px-3 py-2 text-xs transition-all flex items-center gap-2 relative ${selectedSubtopicIdx === sIdx
                                                        ? 'bg-neutral-900 text-white font-bold shadow-lg border border-neutral-800'
                                                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                                                        }`}
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full ${selectedSubtopicIdx === sIdx ? 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]' : 'bg-neutral-300'}`} />
                                                    {sub.title}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content */}
                <main className="flex-1 min-w-0 overflow-y-auto h-[calc(100vh-5rem)] scroll-smooth relative bg-white">
                    {/* Light Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none fixed" />

                    <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 relative z-10">
                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden mb-6 flex items-center gap-2 text-sm text-neutral-600 border border-neutral-200 px-3 py-1.5 bg-neutral-50 shadow-sm"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <List className="w-4 h-4" />
                            {isSidebarOpen ? 'Close Menu' : 'Browse Topics'}
                        </button>

                        {currentSubtopic ? (
                            <article className="prose prose-invert prose-lg max-w-none bg-neutral-900 p-8 sm:p-12 border border-neutral-800 shadow-2xl relative overflow-hidden min-h-[500px]">
                                {/* Decorational glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                                <div className="mb-10 border-b border-neutral-800 pb-8 relative z-10">
                                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-4 uppercase tracking-wider">
                                        <span>system.topic</span>
                                        <ChevronRight className="w-3 h-3 text-neutral-600" />
                                        <span>{currentTopic.title}</span>
                                        <ChevronRight className="w-3 h-3 text-neutral-600" />
                                        <span className="font-bold text-white">{currentSubtopic.title}</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">{currentSubtopic.title}</h1>
                                </div>

                                <div className="relative z-10">
                                    {isLoading ? (
                                        <div className="flex flex-col items-center justify-center py-20 text-center animate-pulse">
                                            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                                            <p className="text-neutral-400 font-mono text-sm uppercase tracking-widest">Fetching Knowledge Base...</p>
                                        </div>
                                    ) : error ? (
                                        <div className="flex flex-col items-center justify-center py-20 text-center">
                                            <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mb-6">
                                                <Hash className="w-8 h-8 text-red-500" />
                                            </div>
                                            <h3 className="text-xl font-bold text-red-400 mb-2">Connection Error</h3>
                                            <p className="text-neutral-400 max-w-md">{error}</p>
                                        </div>
                                    ) : content && content.trim() ? (
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                code({ node, inline, className, children, ...props }) {
                                                    const match = /language-(\w+)/.exec(className || '')
                                                    return !inline && match ? (
                                                        <div className="relative group overflow-hidden my-8 border border-neutral-800 bg-black shadow-xl">
                                                            <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800">
                                                                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{match[1]}</span>
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                                                </div>
                                                            </div>
                                                            <pre className="p-5 overflow-x-auto text-sm leading-relaxed font-mono">
                                                                <code className={`${className} text-neutral-300`} {...props}>
                                                                    {children}
                                                                </code>
                                                            </pre>
                                                        </div>
                                                    ) : (
                                                        <code className="bg-purple-900/30 px-1.5 py-0.5 text-sm font-mono text-purple-300 border border-purple-500/30" {...props}>
                                                            {children}
                                                        </code>
                                                    )
                                                },
                                                h1: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3"><span className="w-1.5 h-8 bg-purple-500"></span>{children}</h2>,
                                                h2: ({ children }) => <h3 className="text-2xl font-bold mt-10 mb-5 text-neutral-200 flex items-center gap-2 group border-b border-neutral-800 pb-2"><Hash className="w-5 h-5 text-neutral-600 group-hover:text-purple-500 transition-colors" />{children}</h3>,
                                                h3: ({ children }) => <h4 className="text-xl font-bold mt-8 mb-4 text-neutral-300">{children}</h4>,
                                                p: ({ children }) => <p className="text-neutral-400 leading-7 mb-6 text-base sm:text-lg">{children}</p>,
                                                ul: ({ children }) => <ul className="list-disc list-outside space-y-2 mb-6 ml-4 text-neutral-400 marker:text-purple-500">{children}</ul>,
                                                ol: ({ children }) => <ol className="list-decimal list-outside space-y-2 mb-6 ml-4 text-neutral-400 marker:text-purple-500 marker:font-bold">{children}</ol>,
                                                li: ({ children }) => <li className="pl-1">{children}</li>,
                                                blockquote: ({ children }) => <blockquote className="border-l-4 border-purple-500 pl-6 italic text-neutral-500 my-8 py-2 bg-neutral-800/50">{children}</blockquote>,
                                                table: ({ children }) => <div className="overflow-x-auto my-8 border border-neutral-800 shadow-sm"><table className="min-w-full divide-y divide-neutral-800 text-sm bg-neutral-900">{children}</table></div>,
                                                th: ({ children }) => <th className="px-5 py-4 bg-neutral-800 text-left font-semibold text-neutral-200 uppercase tracking-wider text-xs">{children}</th>,
                                                td: ({ children }) => <td className="px-5 py-4 border-t border-neutral-800 text-neutral-400">{children}</td>,
                                                a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 hover:underline underline-offset-4 decoration-purple-500/30 font-medium transition-colors">{children}</a>,
                                                hr: () => <hr className="border-neutral-800 my-12" />,
                                                strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>
                                            }}
                                        >
                                            {content}
                                        </ReactMarkdown>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-20 text-center">
                                            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6">
                                                <Layers className="w-8 h-8 text-neutral-500" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">Content Under Construction</h3>
                                            <p className="text-neutral-400 max-w-md">
                                                The documentation for <span className="text-purple-400">{currentSubtopic.title}</span> is currently being compiled.
                                                Check back soon for updates.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-16 pt-8 border-t border-neutral-800 flex items-center justify-between text-sm text-neutral-500 relative z-10">
                                    <div className="font-mono">
                                        DOC_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        STATUS: {isLoading ? 'FETCHING...' : 'LIVE'}
                                    </div>
                                </div>
                            </article>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center text-neutral-400">
                                <Terminal className="w-20 h-20 mb-6 opacity-20 text-black" />
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">Ready to Initialize</h3>
                                <p className="max-w-md mx-auto">Select a knowledge module from the sidebar to begin protocol execution.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

// Icon for Mobile Toggle
function List({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
    )
}
