import React, { useState, useEffect } from "react";
import { generatePathfinder } from "../../lib/gemini";
import { Loader2, ArrowRightCircle, Code, Lightbulb, ExternalLink } from "lucide-react";

const PathfinderWindow = ({ context }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadPathInfo();
    }, [context]);

    const loadPathInfo = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await generatePathfinder(context);
            setData(result);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
                <Loader2 className="w-10 h-10 animate-spin mb-4 text-green-500" />
                <p>Charting your course...</p>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="text-center py-8">
                <p className="text-red-500 mb-6 font-mono text-sm max-w-md mx-auto">{error || "No data received"}</p>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={loadPathInfo}
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-neutral-300 rounded hover:bg-neutral-700 transition border border-neutral-700 font-mono text-sm"
                    >
                        <Loader2 className="w-4 h-4" /> Try Again
                    </button>
                    <button
                        onClick={() => {
                            const { enableDemoMode } = require('../../lib/gemini');
                            enableDemoMode();
                            loadPathInfo();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition border border-green-500/30 font-mono text-sm"
                    >
                        <Lightbulb className="w-4 h-4" /> Try Demo
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-xl mx-auto space-y-8">

            {/* What to Learn Next */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/30">
                <div className="flex items-center gap-2 mb-3 text-green-700 dark:text-green-400">
                    <ArrowRightCircle className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-wider text-xs">Recommended Next Step</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {data.nextTopic?.title || "Advanced Concepts"}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                    {data.nextTopic?.description}
                </p>
            </section>

            {/* Project Ideas */}
            <section>
                <div className="flex items-center gap-2 mb-4 text-zinc-500 dark:text-zinc-400">
                    <Lightbulb className="w-5 h-5" />
                    <h4 className="font-semibold">Project Ideas to Build Now</h4>
                </div>

                <div className="grid gap-4">
                    {data.projects?.map((project, idx) => (
                        <div key={idx} className="bg-white dark:bg-zinc-800 p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <h5 className="font-bold text-lg dark:text-zinc-100 group-hover:text-purple-500 transition-colors">
                                    {project.title}
                                </h5>
                                <span className={`
                            px-2 py-1 rounded text-xs font-semibold
                            ${project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : ''}
                            ${project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : ''}
                            ${project.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' : ''}
                          `}>
                                    {project.difficulty}
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                                {project.description}
                            </p>
                            <button className="text-sm font-medium text-zinc-400 group-hover:text-purple-500 flex items-center gap-1 transition-colors">
                                <Code className="w-4 h-4" /> Start Building
                            </button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default PathfinderWindow;
