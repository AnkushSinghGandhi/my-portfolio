import React, { useState, useEffect } from "react";
import { generateRoadmap } from "../../lib/gemini";
import { Loader2, CheckSquare, Square, Download } from "lucide-react";

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
                        onClick={loadRoadmap} // Changed from loadPathInfo to loadRoadmap to match component's function
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-neutral-300 rounded hover:bg-neutral-700 transition border border-neutral-700 font-mono text-sm"
                    >
                        <Loader2 className="w-4 h-4" /> Try Again
                    </button>
                    <button
                        onClick={() => {
                            const { enableDemoMode } = require('../../lib/gemini');
                            enableDemoMode();
                            loadRoadmap();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition border border-blue-500/30 font-mono text-sm"
                    >
                        <Download className="w-4 h-4" /> Try Demo
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <p className="text-zinc-600 dark:text-zinc-400">
                    {Object.values(completedSteps).filter(Boolean).length}/{roadmap.length} steps completed
                </p>
                {/* Could add download PDF later */}
            </div>

            <div className="space-y-3">
                {roadmap.map((item, index) => {
                    const isDone = completedSteps[index];
                    return (
                        <div
                            key={index}
                            onClick={() => toggleStep(index)}
                            className={`
                    group p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4 select-none
                    ${isDone
                                    ? "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 opacity-60"
                                    : "bg-white dark:bg-zinc-800 border-blue-100 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-700 shadow-sm"
                                }
                `}
                        >
                            <div className={`mt-1 transition-colors ${isDone ? "text-green-500" : "text-zinc-300 group-hover:text-blue-400"}`}>
                                {isDone ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
                            </div>
                            <div>
                                <h4 className={`font-semibold text-lg mb-1 ${isDone ? "line-through text-zinc-500" : "text-zinc-800 dark:text-zinc-100"}`}>
                                    Step {index + 1}: {item.step}
                                </h4>
                                {item.details && (
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
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
