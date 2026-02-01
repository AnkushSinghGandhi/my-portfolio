import React, { useState, useEffect } from "react";
import { generateQuiz } from "../../lib/gemini";
import { CheckCircle, XCircle, Loader2, ArrowRight, RefreshCw } from "lucide-react";

const QuizWindow = ({ context }) => {
    const [loading, setLoading] = useState(true);
    const [quizData, setQuizData] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadQuiz();
    }, [context]);

    const loadQuiz = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await generateQuiz(context);
            setQuizData(data);
            setScore(0);
            setCurrentQuestion(0);
            setShowResult(false);
            setSelectedOption(null);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleOptionSelect = (index) => {
        if (selectedOption !== null) return; // Prevent changing answer
        setSelectedOption(index);

        // Check answer logic would happen here visually
    };

    const handleNext = () => {
        if (selectedOption === quizData.questions[currentQuestion].correctAnswer) {
            setScore(s => s + 1);
        }

        if (currentQuestion < quizData.questions.length - 1) {
            setCurrentQuestion(c => c + 1);
            setSelectedOption(null);
        } else {
            // Final tally check for last question
            if (selectedOption === quizData.questions[currentQuestion].correctAnswer) {
                setScore(s => s + 1);
            }
            setShowResult(true);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
                <Loader2 className="w-10 h-10 animate-spin mb-4 text-purple-500" />
                <p>Analyzing content & generating questions...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-500 mb-6 font-mono text-sm max-w-md mx-auto">{error}</p>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={loadQuiz}
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-neutral-300 rounded hover:bg-neutral-700 transition border border-neutral-700 font-mono text-sm"
                    >
                        <RefreshCw className="w-4 h-4" /> Try Again
                    </button>
                    <button
                        onClick={() => {
                            const { enableDemoMode } = require('../../lib/gemini');
                            enableDemoMode();
                            loadQuiz();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition border border-purple-500/30 font-mono text-sm"
                    >
                        <CheckCircle className="w-4 h-4" /> Try Demo
                    </button>
                </div>
            </div>
        )
    }

    if (showResult) {
        return (
            <div className="text-center py-8 animate-in fade-in zoom-in">
                <div className="text-6xl mb-4">
                    {score === quizData.questions.length ? "🏆" : score > 0 ? "👏" : "📚"}
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-2">Quiz Complete!</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    You scored <span className="font-bold text-purple-600 dark:text-purple-400">{score}</span> out of {quizData.questions.length}
                </p>
                <button
                    onClick={loadQuiz}
                    className="flex items-center gap-2 mx-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all"
                >
                    <RefreshCw className="w-4 h-4" />
                    Take New Quiz
                </button>
            </div>
        );
    }

    // Handle case where quizData.questions might be nested (Gemini sometimes wraps in 'questions' array)
    // The service tries to parse, but let's be safe.
    const questions = quizData.questions || quizData;
    const question = questions[currentQuestion];

    return (
        <div className="max-w-xl mx-auto">
            {/* Progress Bar */}
            <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full mb-6 overflow-hidden">
                <div
                    className="bg-purple-500 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                />
            </div>

            <h3 className="text-xl font-medium dark:text-white mb-6">
                {question.question}
            </h3>

            <div className="flex flex-col gap-3">
                {question.options.map((option, index) => {
                    let statusClass = "border-zinc-200 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-zinc-50 dark:hover:bg-zinc-800";
                    if (selectedOption !== null) {
                        if (index === question.correctAnswer) {
                            statusClass = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                        } else if (index === selectedOption) {
                            statusClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                        } else {
                            statusClass = "opacity-50 border-zinc-200 dark:border-zinc-700";
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionSelect(index)}
                            disabled={selectedOption !== null}
                            className={`p-4 rounded-xl border-2 text-left transition-all relative ${statusClass} dark:text-zinc-300`}
                        >
                            <div className="flex justify-between items-center">
                                <span>{option}</span>
                                {selectedOption !== null && index === question.correctAnswer && (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                )}
                                {selectedOption !== null && index === selectedOption && index !== question.correctAnswer && (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {selectedOption !== null && (
                <div className="mt-6 animate-in slide-in-from-bottom-2 fade-in">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4 text-sm text-blue-800 dark:text-blue-200">
                        <strong>Explanation:</strong> {question.explanation}
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                        {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizWindow;
