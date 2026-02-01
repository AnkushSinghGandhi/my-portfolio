import React, { useState, useEffect } from "react";
import { generateRoadmap, enableDemoMode } from "../../lib/gemini";
import { Loader2, CheckSquare, Square, Download, RefreshCw } from "lucide-react";

const RoadmapWindow = ({ context }) => {
    const [loading, setLoading] = useState(true);
    const [roadmap, setRoadmap] = useState([]);
    const [error, setError] = useState(null);
    const [completedSteps, setCompletedSteps] = useState({});

    useEffect(() => {
        loadRoadmap();
    }, [context]);

    const loadRoadmap = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await generateRoadmap(context);
            setRoadmap(data.steps || data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleStep = (index) => {
        setCompletedSteps(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
                <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500" />
                <p>Drafting your action plan...</p>
            </div>
        );
    }

    if (error || !roadmap.length) { // Assuming 'data' from the instruction refers to 'roadmap' here
        return (
            <div className="text-center py-8">
                <p className="text-red-500 mb-6 font-mono text-sm max-w-md mx-auto">{error || "No data received"}</p>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={loadRoadmap}
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all font-mono text-sm"
                    >
                        <RefreshCw className="w-4 h-4" /> [RETRY_FETCH]
                    </button>
                    <button
                        onClick={() => {
                            enableDemoMode();
                            loadRoadmap();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-900/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600 hover:text-white transition-all font-mono text-sm"
                    >
                        <Download className="w-4 h-4" /> [EMULATE_PLAN]
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-xl mx-auto font-mono">
            <div className="mb-6 flex items-center justify-between px-1">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    PROGRESS_ANALYSIS: {Object.values(completedSteps).filter(Boolean).length}/{roadmap.length} MODULES_VERIFIED
                </p>
            </div>

            <div className="space-y-3">
                {roadmap.map((item, index) => {
                    const isDone = completedSteps[index];
                    return (
                        <div
                            key={index}
                            onClick={() => toggleStep(index)}
                            className={`
                                group p-5 border transition-all flex items-start gap-5 cursor-pointer select-none
                                ${isDone
                                    ? "bg-black border-white/5 opacity-40"
                                    : "bg-black border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                }
                            `}
                        >
                            <div className={`mt-1 transition-colors ${isDone ? "text-green-500" : "text-zinc-700 group-hover:text-blue-500"}`}>
                                {isDone ?
                                    <div className="w-5 h-5 border border-green-500 flex items-center justify-center text-[10px] font-bold">X</div> :
                                    <div className="w-5 h-5 border border-zinc-700 flex items-center justify-center"></div>
                                }
                            </div>
                            <div>
                                <h4 className={`font-bold text-sm mb-2 tracking-wide ${isDone ? "line-through text-zinc-600" : "text-white"}`}>
                                    MODULE_{String(index + 1).padStart(2, '0')}: {item.step}
                                </h4>
                                {item.details && (
                                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                                        {item.details}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RoadmapWindow;
