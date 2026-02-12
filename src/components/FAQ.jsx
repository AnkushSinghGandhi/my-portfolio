import { useState } from "react";
import { Minus, Plus, Terminal } from "lucide-react";
import { faqs } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section id="faq" className="relative px-6 sm:px-12 lg:px-20 py-24 bg-neutral-100 text-black overflow-hidden snap-start snap-always">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-mono text-purple-600 tracking-widest uppercase">
                  // FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-black">
            FREQUENTLY <br /> ASKED QUESTIONS
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
            Database of commonly requested information and operational procedures. Accessing knowledge bank...
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-neutral-800 bg-neutral-900 rounded-none overflow-hidden hover:border-purple-500/50 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className={`w-full flex justify-between items-center text-left p-6 focus:outline-none transition-colors duration-300 ${openFAQ === idx ? 'bg-neutral-800/50' : 'hover:bg-neutral-800/30'}`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                  <span className={`text-base md:text-lg font-medium transition-colors ${openFAQ === idx ? 'text-white' : 'text-gray-300'}`}>
                    {item.q}
                  </span>
                </div>
                {openFAQ === idx ? (
                  <Minus className="w-5 h-5 text-purple-600" />
                ) : (
                  <Plus className="w-5 h-5 text-neutral-500 group-hover:text-white" />
                )}
              </button>

              <AnimatePresence>
                {openFAQ === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-neutral-800">
                      <div className="pt-4">
                        {item.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
