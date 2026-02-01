import React, { useState, useEffect, useRef } from "react";
import { generateTutorResponse } from "../../lib/gemini";
import { Send, User, Bot, Loader2, Sparkles, Trash2 } from "lucide-react";

const TutorWindow = ({ context }) => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hi! I'm your AI Expert. I can explain the concepts in this roadmap, help you debug code, or mock interview you. What's on your mind?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            // Filter out the initial welcome message from history if needed, 
            // but usually keeping it is fine if we map it correctly.
            // Our generateTutorResponse expects an array of {role, content}
            // where role is 'user' or 'assistant' (mapped to 'model').

            // We pass the history EXCLUDING the latest message we just added (because specific implementation complexity),
            // OR we can pass everything.
            // Let's pass the messages + the new one.
            const history = [...messages, userMsg].filter(m => m.role !== 'system');

            const responseText = await generateTutorResponse(history, input, context);

            setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please check your API key or try again." }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const clearChat = () => {
        setMessages([
            { role: 'assistant', content: "Chat cleared. What else can I help you with?" }
        ]);
    };

    // Helper to render markdown-like simple formatting
    const renderContent = (content) => {
        // Split by code blocks
        const parts = content.split(/(```[\s\S]*?```)/g);
        return parts.map((part, index) => {
            if (part.startsWith('```')) {
                // Code block
                const match = part.match(/```(\w+)?\n([\s\S]*?)```/);
                const lang = match ? match[1] : '';
                const code = match ? match[2] : part.slice(3, -3);
                return (
                    <div key={index} className="my-3 bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
                        {lang && <div className="px-3 py-1 bg-zinc-900 text-xs text-zinc-400 border-b border-zinc-800">{lang}</div>}
                        <pre className="p-3 overflow-x-auto text-sm font-mono text-zinc-300">
                            {code}
                        </pre>
                    </div>
                );
            }
            // Regular text with bolding
            return (
                <p key={index} className="whitespace-pre-wrap mb-2 last:mb-0">
                    {part.split(/(\*\*.*?\*\*)/g).map((subPart, i) => {
                        if (subPart.startsWith('**') && subPart.endsWith('**')) {
                            return <strong key={i} className="text-purple-400 dark:text-purple-300">{subPart.slice(2, -2)}</strong>;
                        }
                        return subPart;
                    })}
                </p>
            );
        });
    };

    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-2 min-h-[300px]">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center shrink-0
                            ${msg.role === 'user' ? 'bg-zinc-200 dark:bg-zinc-800' : 'bg-purple-600'}
                        `}>
                            {msg.role === 'user' ? <User className="w-5 h-5 text-zinc-600 dark:text-zinc-400" /> : <Bot className="w-5 h-5 text-white" />}
                        </div>

                        <div className={`
                            max-w-[85%] rounded-2xl px-5 py-4 shadow-sm
                            ${msg.role === 'user'
                                ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tr-none'
                                : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-tl-none'
                            }
                        `}>
                            {renderContent(msg.content)}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4 text-white animate-pulse" />
                        </div>
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl rounded-tl-none px-5 py-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <div className="relative flex items-end gap-2">
                    <button
                        onClick={clearChat}
                        className="p-3 text-zinc-400 hover:text-red-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                        title="Clear Chat"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="relative flex-1">
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask a question..."
                            className="w-full bg-zinc-100 dark:bg-zinc-800 border-0 rounded-2xl px-4 py-3 pr-12 text-zinc-900 dark:text-white focus:ring-2 focus:ring-purple-500 resize-none min-h-[50px] max-h-[150px]"
                            rows={1}
                            style={{ height: '52px' }} // fixed initial height
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || loading}
                            className="absolute right-2 bottom-2 p-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:hover:bg-purple-600 transition-colors"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
                <p className="text-center text-xs text-zinc-400 mt-2">
                    AI can make mistakes. Verify important code.
                </p>
            </div>
        </div>
    );
};

export default TutorWindow;
