import React, { useState, useEffect } from "react";
import { Sparkles, Brain, ListChecks, Map, X, Key, ChevronRight, Settings, MessageSquareText } from "lucide-react";
import { initializeGemini } from "../../lib/gemini";
import QuizWindow from "./QuizWindow";
import RoadmapWindow from "./RoadmapWindow";
import PathfinderWindow from "./PathfinderWindow";
import TutorWindow from "./TutorWindow";

const AiToolbox = ({ context }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMode, setActiveMode] = useState(null); // 'quiz', 'roadmap', 'pathfinder', 'tutor'
    const envKey = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyAQ5aDEy-fGT8f5qlQfIvVJVMSfDr2Y6dM";
    const [apiKey, setApiKey] = useState(localStorage.getItem("gemini_key") || "");
    const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
    const [pendingMode, setPendingMode] = useState(null);
    const [userProfile, setUserProfile] = useState(() => {
        const saved = localStorage.getItem("ai_user_profile");
        return saved ? JSON.parse(saved) : { occupation: "", goal: "", skills: "" };
    });

    useEffect(() => {
        initializeGemini(apiKey || envKey);
    }, [apiKey]);

    // Listen for custom open events
    useEffect(() => {
        const handleOpen = (e) => {
            const { mode } = e.detail || {};
            if (mode) {
                handleModeSelect(mode);
            } else {
                setIsOpen(true);
            }
        };
        window.addEventListener("openAiToolbox", handleOpen);
        return () => window.removeEventListener("openAiToolbox", handleOpen);
    }, []);

    // Auto-open when context changes if it looks like a card click context
    useEffect(() => {
        if (context && context.includes("Title:") && context.includes("Description:")) {
            setIsOpen(true);
        }
    }, [context]);

    const handleSaveKey = () => {
        localStorage.setItem("ai_user_profile", JSON.stringify(userProfile));
        if (apiKey) {
            localStorage.setItem("gemini_key", apiKey);
            initializeGemini(apiKey);
        }
        setIsKeyModalOpen(false);
        setIsOpen(false);
        if (pendingMode) {
            setActiveMode(pendingMode);
            setPendingMode(null);
        }
    };

    const handleModeSelect = (mode) => {
        if (!apiKey && !envKey) {
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
                        <div className="h-[1px] w-full bg-white/5 my-1" />
                        <button
                            onClick={() => setIsKeyModalOpen(true)}
                            className="flex items-center gap-3 bg-neutral-950 text-zinc-500 px-6 py-3 hover:text-white transition-all border border-white/5 hover:border-white/20 font-mono tracking-wider rounded-none group/settings"
                        >
                            <Settings className="w-5 h-5 group-hover/settings:rotate-90 transition-transform duration-500" />
                            <span className="text-xs font-bold uppercase">Configure AI</span>
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
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-neutral-900 p-6 w-full max-w-lg shadow-2xl border border-neutral-700 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <Settings className="w-6 h-6 text-purple-500" />
                            <h3 className="text-xl font-bold dark:text-white uppercase tracking-tighter">AI Personalization</h3>
                        </div>

                        <div className="space-y-4 mb-6">
                            {/* API Key Section */}
                            <div>
                                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold">Gemini API Key</label>
                                <input
                                    type="password"
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder="Paste AI Studio Key..."
                                    className="w-full p-2.5 bg-neutral-800 border border-neutral-700 focus:border-purple-500 text-white font-mono text-sm"
                                />
                                <p className="text-[9px] text-zinc-600 mt-1 uppercase font-mono tracking-tighter">Stored locally in your browser proxy</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold">Occupation</label>
                                    <select
                                        value={userProfile.occupation}
                                        onChange={(e) => setUserProfile({ ...userProfile, occupation: e.target.value })}
                                        className="w-full p-2.5 bg-neutral-800 border border-neutral-700 focus:border-purple-500 text-white font-mono text-sm"
                                    >
                                        <option value="">Select...</option>
                                        <option value="student">Student</option>
                                        <option value="frontend">Frontend Engineer</option>
                                        <option value="backend">Backend Engineer</option>
                                        <option value="aspiring_backend">Aspiring Backend</option>
                                        <option value="ml_engineer">ML Engineer</option>
                                        <option value="data_scientist">Data Scientist</option>
                                        <option value="other">Other Professional</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold">Primary Goal</label>
                                    <select
                                        value={userProfile.goal}
                                        onChange={(e) => setUserProfile({ ...userProfile, goal: e.target.value })}
                                        className="w-full p-2.5 bg-neutral-800 border border-neutral-700 focus:border-purple-500 text-white font-mono text-sm"
                                    >
                                        <option value="">Select...</option>
                                        <option value="system_design">System Design</option>
                                        <option value="dsa">DSA Mastery</option>
                                        <option value="fullstack">Full Stack Dev</option>
                                        <option value="devops">DevOps/Cloud</option>
                                        <option value="ai">AI/ML Core</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold">Existing Skills</label>
                                <input
                                    type="text"
                                    value={userProfile.skills}
                                    onChange={(e) => setUserProfile({ ...userProfile, skills: e.target.value })}
                                    placeholder="Python, React, AWS, etc."
                                    className="w-full p-2.5 bg-neutral-800 border border-neutral-700 focus:border-purple-500 text-white font-mono text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 items-center border-t border-white/5 pt-4">
                            <button
                                onClick={() => setIsKeyModalOpen(false)}
                                className="px-4 py-2 text-neutral-400 hover:bg-neutral-800 border border-neutral-700 text-[10px] font-bold uppercase tracking-widest"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveKey}
                                className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-700 font-mono text-[10px] font-bold uppercase tracking-widest"
                            >
                                Save Configuration
                            </button>
                        </div>
                        <p className="text-[10px] text-center mt-4 text-zinc-500 uppercase tracking-tighter">
                            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-500">
                                Get a free Gemini key here
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
                                {!envKey && (
                                    <button
                                        onClick={() => setIsKeyModalOpen(true)}
                                        className="p-2 hover:bg-neutral-800 transition-colors border border-transparent hover:border-white/10"
                                        title="Configure API Key"
                                    >
                                        <Settings className="w-5 h-5 text-zinc-500 hover:text-white" />
                                    </button>
                                )}
                                <button onClick={closeWindow} className="p-2 hover:bg-neutral-800 transition-colors border border-transparent hover:border-white/10">
                                    <X className="w-5 h-5 text-zinc-500 hover:text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 bg-neutral-900">
                            {activeMode === 'quiz' && <QuizWindow context={context} onSetKey={() => setIsKeyModalOpen(true)} userProfile={userProfile} />}
                            {activeMode === 'roadmap' && <RoadmapWindow context={context} onSetKey={() => setIsKeyModalOpen(true)} userProfile={userProfile} />}
                            {activeMode === 'pathfinder' && <PathfinderWindow context={context} onSetKey={() => setIsKeyModalOpen(true)} userProfile={userProfile} />}
                            {activeMode === 'tutor' && <TutorWindow context={context} onSetKey={() => setIsKeyModalOpen(true)} userProfile={userProfile} />}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AiToolbox;
