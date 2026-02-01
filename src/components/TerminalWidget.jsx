import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronRight, Minimize2, Maximize2, Info } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function TerminalWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [history, setHistory] = useState([
        { type: "system", content: "WARRIOR SYSTEM [Version 4.0.1]" },
        { type: "system", content: "(c) 2026 Ankush Singh Gandhi. All rights reserved." },
        { type: "system", content: " " },
        { type: "system", content: "Type 'help' to see available commands." },
    ]);
    const [mode, setMode] = useState("shell"); // shell | python
    const [showHelp, setShowHelp] = useState(false);

    const [input, setInput] = useState("");
    const scrollRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        if (isOpen && !isMinimized && inputRef.current) {
            inputRef.current.focus();
        }
    }, [history, isOpen, isMinimized]);

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            const cmd = input; // Don't trim immediately to allow whitespace in strings if needed, but for now simple trim is fine for logic
            const prompt = mode === "python" ? ">>> " : "> ";
            const newHistory = [...history, { type: "input", content: `${prompt}${input}` }];

            if (mode === "shell") {
                processShellCommand(cmd.trim().toLowerCase(), newHistory);
            } else {
                processPythonCommand(cmd, newHistory);
            }
            setInput("");
        }
    };

    const location = useLocation();

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 500);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                return false;
            }
        }
        return true;
    };

    const processShellCommand = (cmd, currentHistory) => {
        let response = "";

        // Python Mode Switch
        if (cmd === "python" || cmd === "python3") {
            setMode("python");
            response = `Python 3.12.0 (main, Jan 22 2026, 12:00:00) [Clang 15.0.0 (clang-1500.1.0.2.5)] on darwin\nType "help", "copyright", "credits" or "license" for more information.`;
            setHistory([...currentHistory, { type: "system", content: response }]);
            return;
        }

        // System Navigation Commands
        const systemCommands = {
            "system.profile_summary": "about",
            "system.service_modules": "services",
            "system.tech_stack": "skills",
            "system.project_archive": "projects",
            "system.feedback_log": "testimonials",
            "system.inquiries": "faq",
            "system.knowledge_base": "dev-library",
        };

        if (systemCommands[cmd]) {
            const sectionId = systemCommands[cmd];
            scrollToSection(sectionId);
            response = `EXECUTING JUMP PROTOCOL >> TARGET: [${sectionId.toUpperCase()}]`;
        } else {
            switch (cmd) {
                case "help":
                    response = `Available commands:
  python   - Enter Python 3.12.0 simulation
  about    - Display system user profile
  projects - List active system modules
  skills   - Show technical arsenal specs
  library  - Access knowledge base portal
  contact  - Show communication channels
  clear    - Wipe terminal history
  exit     - Terminate session
  
  // SYSTEM NAVIGATION
  system.profile_summary
  system.service_modules
  system.tech_stack
  system.project_archive
  system.feedback_log
  system.inquiries
  system.community_sync
  system.archive_access
  system.log_submission
  system.comm_protocol
  system.service_history
  system.knowledge_base
  system.profile_bio`;
                    break;
                case "about":
                    scrollToSection("about");
                    response = "NAVIGATING TO SYSTEM PROFILE...";
                    break;
                case "projects":
                    scrollToSection("projects");
                    response = "ACCESSING PROJECT ARCHIVE...";
                    break;
                case "skills":
                    scrollToSection("skills");
                    response = "LOADING TECHNICAL ARSENAL...";
                    break;
                case "contact":
                    response = "COMMUNICATION CHANNELS:\n- Email: ankushsinghgandhi@gmail.com\n- LinkedIn: /in/ankushsinghgandhi\n- GitHub: /ankushsinghgandhi\n- Instagram: @warriorwhocodes";
                    break;
                case "communities":
                case "network":
                case "system.community_sync":
                    response = "ESTABLISHING SECURE CONNECTION TO NETWORK NODES...";
                    setTimeout(() => navigate("/communities"), 1000);
                    break;
                case "system.log_submission":
                    response = "INITIATING FEEDBACK PROTOCOL...";
                    setTimeout(() => navigate("/testimonialsform"), 1000);
                    break;
                case "system.comm_protocol":
                    response = "OPENING SECURE CHANNEL...";
                    setTimeout(() => navigate("/contact"), 1000);
                    break;
                case "system.service_history":
                    response = "RETRIEVING PROFESSIONAL LOGS...";
                    setTimeout(() => navigate("/experience"), 1000);
                    break;
                case "system.profile_bio":
                    response = "ACCESSING FULL BIODATA...";
                    setTimeout(() => navigate("/about"), 1000);
                    break;
                case "system.knowledge_base":
                    scrollToSection("dev-library");
                    response = "ACCESSING DEVELOPER LIBRARY...";
                    break;
                case "library":
                case "system.archive_access":
                    response = "REDIRECTING TO KNOWLEDGE_BASE_PORTAL...";
                    setTimeout(() => navigate("/library"), 1000);
                    break;
                case "clear":
                    setHistory([]);
                    return;
                case "exit":
                    setIsOpen(false);
                    return;
                case "":
                    return;
                default:
                    response = `Command not found: ${cmd}. Type 'help' for options.`;
            }
        }
        setHistory([...currentHistory, { type: "system", content: response }]);
    };

    const processPythonCommand = (cmd, currentHistory) => {
        let response = "";
        const trimmed = cmd.trim();

        if (trimmed === "exit()" || trimmed === "quit()") {
            setMode("shell");
            return; // No response needed, prompt just changes back
        }

        if (trimmed === "") {
            setHistory([...currentHistory]);
            return;
        }

        // 1. Handle print()
        const printMatch = trimmed.match(/^print\s*\((.*)\)$/);
        if (printMatch) {
            let content = printMatch[1].trim();
            // Basic string cleanup (remove quotes)
            if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
                response = content.slice(1, -1);
            } else {
                // Try to evaluate if it's not a string literal (e.g. print(2+2))
                try {
                    // Very unsafe in real world, but okay for limited simulation with no sensitive data access
                    // We'll restrict to basic math to be safer
                    if (/^[\d\s+\-*/%.()]+$/.test(content)) {
                        // eslint-disable-next-line
                        response = String(eval(content));
                    } else {
                        response = `Traceback (most recent call last):\n  File "<stdin>", line 1, in <module>\nNameError: name '${content}' is not defined`;
                    }
                } catch (e) {
                    response = `Traceback (most recent call last):\n  File "<stdin>", line 1, in <module>\nSyntaxError: invalid syntax`;
                }
            }
        }
        // 2. Handle imports
        else if (trimmed === "import this") {
            response = `The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!`;
        } else if (trimmed === "import antigravity") {
            response = "Flying...";
            window.open("https://xkcd.com/353/", "_blank");
        }
        // 3. Handle basic math / direct evaluation
        else if (/^[\d\s+\-*/%.()]+$/.test(trimmed)) {
            try {
                // eslint-disable-next-line
                response = String(eval(trimmed));
            } catch (e) {
                response = "SyntaxError: invalid syntax";
            }
        }
        // 4. Handle help()
        else if (trimmed === "help()") {
            response = "Welcome to Python 3.12's help utility!\n\nThis is a simulated environment. Available commands:\n- print(...)\n- import this\n- import antigravity\n- Basic math (2+2)\n- exit() or quit()";
        }
        else {
            response = `Traceback (most recent call last):\n  File "<stdin>", line 1, in <module>\nNameError: name '${trimmed}' is not defined`;
        }

        setHistory([...currentHistory, { type: "system", content: response }]);
    };

    return (
        <>
            {/* Trigger Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 px-4 py-4 bg-black/95 backdrop-blur-xl border border-purple-500/50 rounded-sm shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-purple-400 group transition-all duration-300"
            >
                {/* Logo Area */}
                <div className="flex items-center justify-center mr-1">
                    <span className="text-2xl font-mono font-bold text-purple-500 group-hover:text-purple-400 transition-colors leading-none pt-1">
                        &gt;_
                    </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start gap-0.5">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
                        <span className="text-[10px] text-neutral-500 font-mono font-bold leading-none tracking-wider group-hover:text-neutral-400">
                            WARRIOR_OS
                        </span>
                    </div>
                    <span className="text-sm text-purple-200 font-mono font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                        SYSTEM_CONSOLE
                    </span>
                </div>

                {/* Chevron */}
                <ChevronRight className="w-4 h-4 text-neutral-700 group-hover:text-purple-400 group-hover:translate-x-1 transition-all ml-1" />
            </motion.button>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            height: isMinimized ? "40px" : "400px",
                            width: isMinimized ? "200px" : "min(500px, 90vw)"
                        }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`fixed bottom-24 right-6 z-[60] bg-black/95 backdrop-blur-xl border border-neutral-800 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] overflow-hidden flex flex-col font-mono text-sm`}
                    >
                        {/* Window Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-neutral-900/50 border-b border-neutral-800">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                                    {mode === "python" ? "python 3.12" : "terminal.sh"}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setShowHelp(!showHelp)}
                                    className={`transition-colors ${showHelp ? "text-purple-400" : "text-neutral-600 hover:text-purple-400"}`}
                                    title="System Tutorial"
                                >
                                    <Info className="w-3 h-3" />
                                </button>
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-neutral-600 hover:text-purple-400 transition-colors"
                                >
                                    {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-neutral-600 hover:text-red-500 transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        {/* Terminal Content */}
                        {!isMinimized && (
                            <div className="relative flex-1 overflow-hidden flex flex-col">
                                {showHelp ? (
                                    <div className="absolute inset-0 bg-black/95 p-6 overflow-y-auto custom-scrollbar space-y-6 z-20">
                                        <div>
                                            <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-widest border-b border-purple-500/30 pb-2">
                                                // SYSTEM_MANUAL_v4.0
                                            </h3>
                                            <p className="text-gray-400 text-xs leading-relaxed">
                                                Welcome to the Warrior System Terminal. This interface allows direct communication with the portfolio core.
                                                Execute commands below to navigate or interact.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-2 text-xs uppercase bg-neutral-900/50 p-1 inline-block">
                                                01. Navigation Commands
                                            </h4>
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                <div className="text-purple-300">about</div><div className="text-gray-500"> System Profile</div>
                                                <div className="text-purple-300">projects</div><div className="text-gray-500"> Project Archive</div>
                                                <div className="text-purple-300">skills</div><div className="text-gray-500"> Technical Specs</div>
                                                <div className="text-purple-300">library</div><div className="text-gray-500"> Knowledge Base</div>
                                                <div className="text-purple-300">contact</div><div className="text-gray-500"> Comm Channels</div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-2 text-xs uppercase bg-neutral-900/50 p-1 inline-block">
                                                02. Advanced Directives
                                            </h4>
                                            <div className="space-y-1 text-xs text-gray-400 grid grid-cols-1 gap-1">
                                                <p><span className="text-blue-400">system.community_sync</span> : Connect to network nodes</p>
                                                <p><span className="text-blue-400">system.log_submission</span> : Submit experience log</p>
                                                <p><span className="text-blue-400">system.comm_protocol</span> : Secure contact form</p>
                                                <p><span className="text-blue-400">system.service_history</span> : Professional timeline</p>
                                                <p><span className="text-blue-400">system.knowledge_base</span> : Developer library index</p>
                                                <p><span className="text-blue-400">system.archive_access</span> : Full system archives</p>
                                                <p><span className="text-blue-400">system.profile_bio</span> : Full biological data</p>
                                                <p><span className="text-gray-600 italic mt-1">// ...and other system.* prefixes detected in UI</span></p>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold mb-2 text-xs uppercase bg-neutral-900/50 p-1 inline-block">
                                                03. Python Environment
                                            </h4>
                                            <p className="text-gray-400 text-xs leading-relaxed mb-2">
                                                The terminal includes a simulated Python 3.12 interpreter.
                                            </p>
                                            <div className="bg-neutral-900 p-2 border-l-2 border-yellow-500 font-mono text-xs">
                                                <p className="text-gray-300">&gt; python</p>
                                                <p className="text-gray-500 italic mb-1">// Enter Python Mode</p>
                                                <p className="text-blue-400">&gt;&gt;&gt; print("Hello World")</p>
                                                <p className="text-white">Hello World</p>
                                                <p className="text-blue-400">&gt;&gt;&gt; exit()</p>
                                                <p className="text-gray-500 italic">// Return to Shell</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        ref={scrollRef}
                                        className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-2"
                                    >
                                        {/* History */}
                                        {history.map((line, i) => (
                                            <div
                                                key={i}
                                                className={`${line.type === "input" ? "text-white" : "text-neutral-400"} whitespace-pre-wrap leading-relaxed`}
                                            >
                                                {line.content}
                                            </div>
                                        ))}

                                        {/* Current Input Line */}
                                        <div className="flex items-center gap-2 text-white">
                                            <span className={`font-bold tracking-tighter shrink-0 ${mode === "python" ? "text-blue-400" : "text-purple-500"}`}>
                                                {mode === "python" ? ">>>" : ">"}
                                            </span>
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                autoFocus
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyDown={handleCommand}
                                                className="w-full bg-transparent border-none outline-none p-0 focus:ring-0 text-inherit font-mono"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Footer Metadata */}
                                <div className="px-4 py-1 bg-neutral-900/30 border-t border-neutral-800 flex justify-between shrink-0">
                                    <span className="text-[9px] text-neutral-600 uppercase">protocol: secure_shell</span>
                                    <span className="text-[9px] text-neutral-600">LN 1, COL 1</span>
                                </div>
                            </div>
                        )}

                        {/* Scanline Effect Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] z-10 opacity-30" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
