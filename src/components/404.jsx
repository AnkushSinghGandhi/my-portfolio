import { motion } from "framer-motion";
import { Terminal, AlertTriangle, ChevronRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Custom404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-black text-gray-500 font-mono selection:bg-red-500/20">

      <div className="w-full max-w-3xl relative">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border border-neutral-800 border-b-0">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-red-500" />
            <span className="text-[10px] uppercase tracking-widest">emergency_terminal.sys</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-neutral-800" />
            <div className="w-2 h-2 rounded-full bg-neutral-800" />
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-neutral-900/50 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden">
          {/* Glitch Overlay */}
          <div className="absolute inset-0 bg-[#ff000005] opacity-20 pointer-events-none animate-pulse" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-500">
                <AlertTriangle className="w-8 h-8 animate-bounce" />
                <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">system_failure</h1>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 border-l border-neutral-800 pl-4 py-2">
                CRITICAL_ERROR: 0x404_ROUTE_NOT_RESOLVED <br />
                TIMESTAMP: {new Date().toISOString()} <br />
                LOCATION: {window.location.pathname}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-neutral-400">
                // SEGMENTATION FAULT AT CORE_INTERFACE. <br />
                THE REQUESTED DATA PACKET COULD NOT BE RETRIEVED FROM THE ARCHIVE.
                SENSORS INDICATE THE ROUTE HAS BEEN DE-SYNCHRONIZED OR MOVED TO A SECURE SECTOR.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/")}
                className="group flex items-center gap-3 px-6 py-3 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Return_to_Core</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-3 px-6 py-3 border border-neutral-700 text-neutral-400 font-bold text-xs tracking-widest uppercase hover:border-red-500 hover:text-red-500 transition-all"
              >
                <span>Report_Corruption</span>
              </button>
            </div>
          </div>

          {/* Core Dump Visual */}
          <div className="absolute bottom-4 right-8 opacity-5 font-mono text-[8px] leading-tight select-none pointer-events-none hidden sm:block">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i}>
                {Math.random().toString(16).substring(2, 40).toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Console Footnote */}
        <div className="mt-6 flex justify-between items-center px-2">
          <p className="text-[9px] uppercase tracking-widest text-neutral-800 italic">
             // warning: data_recovery_unlikely
          </p>
          <p className="text-[9px] font-mono text-neutral-800">
            LN: 404, COL: 0
          </p>
        </div>
      </div>
    </div>
  );
}
