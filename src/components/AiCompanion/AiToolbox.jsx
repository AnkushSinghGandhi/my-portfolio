import React, { useState, useEffect } from "react";
import { Sparkles, Brain, ListChecks, Map, X, Key, ChevronRight, Settings, MessageSquareText } from "lucide-react";
import { initializeGemini, enableDemoMode } from "../../lib/gemini";
import QuizWindow from "./QuizWindow";
import RoadmapWindow from "./RoadmapWindow";
import PathfinderWindow from "./PathfinderWindow";
import TutorWindow from "./TutorWindow";

const AiToolbox = ({ context }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMode, setActiveMode] = useState(null); // 'quiz', 'roadmap', 'pathfinder', 'tutor'
    const [apiKey, setApiKey] = useState(localStorage.getItem("gemini_key") || "");
    const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
    const [pendingMode, setPendingMode] = useState(null);

    useEffect(() => {
        if (apiKey) {
            initializeGemini(apiKey);
        }
    }, [apiKey]);

    // Auto-open when context changes (triggered by clicking "Analyze" on a card)
    // DISABLED: User prefers it collapsed by default
    /*
    useEffect(() => {
        if (context && context.length > 0) {
            setIsOpen(true);
        }
    }, [context]);
    */

    const handleSaveKey = () => {
        if (apiKey) {
            localStorage.setItem("gemini_key", apiKey);
            initializeGemini(apiKey);
            setIsKeyModalOpen(false);
            if (pendingMode) {
                setActiveMode(pendingMode);
                setPendingMode(null);
                setIsOpen(false);
            }
        }
    };

    const handleModeSelect = (mode) => {
        if (!apiKey) {
            setPendingMode(mode);
            setIsKeyModalOpen(true);
            return;
        }
        setActiveMode(mode);
        setIsOpen(false);
    };

    const closeWindow = () => setActiveMode(null);

    return (
        <>
            {/* Floating Trigger */}
            <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
                {isOpen && (
                    <div className="flex flex-col gap-3 mb-3 animate-in slide-in-from-bottom-5 fade-in duration-300">
                        <button
                            onClick={() => handleModeSelect("tutor")}
                            className="flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:scale-105 transition-all border border-pink-500/30 hover:border-pink-500 font-mono tracking-wider rounded-none"
                        >
                            <MessageSquareText className="w-5 h-5 text-pink-400" />
                            <span className="text-sm font-bold uppercase">AI Expert</span>
                        </button>
                        <button
                            onClick={() => handleModeSelect("quiz")}
                            className="flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 transition-all border border-purple-500/30 hover:border-purple-500 font-mono tracking-wider rounded-none"
                        >
                            <Brain className="w-5 h-5 text-purple-400" />
                            <span className="text-sm font-bold uppercase">Test Me</span>
                        </button>
                        <button
                            onClick={() => handleModeSelect("roadmap")}
                            className="flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all border border-blue-500/30 hover:border-blue-500 font-mono tracking-wider rounded-none"
                        >
                            <ListChecks className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-bold uppercase">Action Plan</span>
                        </button>
                        <button
                            onClick={() => handleModeSelect("pathfinder")}
                            className="flex items-center gap-3 bg-neutral-900 text-white px-6 py-3 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105 transition-all border border-green-500/30 hover:border-green-500 font-mono tracking-wider rounded-none"
                        >
                            <Map className="w-5 h-5 text-green-400" />
                            <span className="text-sm font-bold uppercase">Pathfinder</span>
                        </button>
                    </div>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-4 shadow-2xl transition-all duration-300 hover:scale-110 rounded-none border ${isOpen || activeMode
                        ? "bg-neutral-900 text-white border-white/20 hover:border-white/40"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        }`}
                >
                    {isOpen || activeMode ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 animate-pulse" />}
                </button>
            </div>

            {/* API Key Modal */}
            {isKeyModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-neutral-900 p-6 w-full max-w-md shadow-2xl border border-neutral-700 animate-in zoom-in-95">
                        <div className="flex items-center gap-3 mb-4">
                            <Key className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-xl font-bold dark:text-white">Enter Gemini API Key</h3>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                            To use the AI Learning features, please provide a free Google Gemini API key.
                            It is stored locally in your browser.
                        </p>
                        <input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="Paste AI Studio Key..."
                            className="w-full p-3 bg-neutral-800 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mb-4 font-mono"
                        />
                        <div className="flex justify-end gap-2 items-center">
                            <button
                                onClick={() => {
                                    setApiKey("demo");
                                    localStorage.setItem("gemini_key", "demo");
                                    initializeGemini("demo");
                                    enableDemoMode();
                                    setIsKeyModalOpen(false);
                                    if (pendingMode) {
                                        setActiveMode(pendingMode);
                                        setPendingMode(null);
                                        setIsOpen(false);
                                    } else if (context && context.length > 0) {
                                        setIsOpen(true);
                                    }
                                }}
                                className="px-4 py-2 text-cyan-400 hover:bg-cyan-900/20 border border-cyan-500/30 mr-auto font-mono text-sm"
                            >
                                Try Demo
                            </button>
                            <button
                                onClick={() => setIsKeyModalOpen(false)}
                                className="px-4 py-2 text-neutral-400 hover:bg-neutral-800 border border-neutral-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveKey}
                                disabled={!apiKey}
                                className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 font-mono"
                            >
                                Start Learning
                            </button>
                        </div>
                        <p className="text-xs text-center mt-4 text-zinc-400">
                            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-500">
                                Get a free key here
                            </a>
                        </p>
                    </div>
                </div>
            )}

            {/* Active Mode Window */}
            {activeMode && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8">
                    <div className="bg-black w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-[0_0_40px_rgba(0,0,0,1)] border border-white/10 flex flex-col animate-in zoom-in-95 rounded-none">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 sticky top-0 bg-black/95 backdrop-blur-md z-10">
                            <div className="flex items-center gap-3">
                                {activeMode === 'quiz' && <Brain className="w-5 h-5 text-purple-500" />}
                                {activeMode === 'roadmap' && <ListChecks className="w-5 h-5 text-blue-500" />}
                                {activeMode === 'pathfinder' && <Map className="w-5 h-5 text-green-500" />}
                                {activeMode === 'tutor' && <MessageSquareText className="w-5 h-5 text-pink-500" />}
                                <h2 className="text-base font-mono font-bold tracking-widest uppercase text-white">
                                    {activeMode === 'quiz' ? 'Knowledge_Check' :
                                        activeMode === 'roadmap' ? 'Action_Plan' :
                                            activeMode === 'pathfinder' ? 'Path_Finder' : 'AI_Expert_Session'}
                                </h2>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Clear chat button for tutor can go inside the component, keeping header clean */}
                                <button onClick={closeWindow} className="p-2 hover:bg-neutral-800 transition-colors rounded-full">
                                    <X className="w-6 h-6 text-zinc-500 hover:text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 bg-neutral-900">
                            {activeMode === 'quiz' && <QuizWindow context={context} />}
                            {activeMode === 'roadmap' && <RoadmapWindow context={context} />}
                            {activeMode === 'pathfinder' && <PathfinderWindow context={context} />}
                            {activeMode === 'tutor' && <TutorWindow context={context} />}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AiToolbox;
