import { Button } from "@/components/ui/button";
import testimonials from "@/data/testimonials";
import { useNavigate } from "react-router-dom";
import CachedImage from "@/components/CachedImage";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials({ limit, isPage }) {
  const navigate = useNavigate();
  const visibleTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section
      id="testimonials"
      className={`relative px-6 sm:px-8 py-24 bg-neutral-100 text-black border-t border-gray-200 ${isPage ? "pt-32 sm:pt-40" : ""
        } snap-start`}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto mb-20">
        <div className={`${isPage ? 'flex flex-col sm:flex-row sm:items-end sm:justify-between' : 'flex flex-col items-start text-left'}`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">system.feedback_log</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight text-black">
              CLIENT_RECORDS
            </h2>
            <p className="text-gray-600 font-mono text-sm sm:text-base">
              // VERIFIED CLIENT EXPERIENCES & PROJECT OUTCOMES
            </p>
          </div>

          {isPage && (
            <Button
              onClick={() => navigate("/testimonialsform")}
              className="mt-6 sm:mt-0 font-mono bg-transparent border border-black text-black hover:border-purple-500 hover:text-white hover:bg-black px-6 py-4 text-sm transition-all duration-300 uppercase tracking-widest"
            >
              [ + ADD ENTRY ]
            </Button>
          )}
        </div>
      </div>


      {/* Testimonials Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {visibleTestimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col sm:flex-row gap-6 pb-8 border-b border-gray-300 last:border-0 md:last:border-b md:nth-last-child-2:border-0"
          >
            {/* Avatar Box */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-none overflow-hidden border border-gray-300 group-hover:border-purple-500/50 transition-colors duration-500">
                <CachedImage
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Corner Accent */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-300 group-hover:bg-purple-500 transition-colors duration-500" />
            </div>

            <div className="flex-grow">
              <Quote className="w-8 h-8 text-gray-300 mb-4 group-hover:text-purple-600/30 transition-colors duration-500" />

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic group-hover:text-black transition-colors">
                "{t.quote}"
              </p>

              <div>
                <h4 className="text-xl font-bold text-black group-hover:text-purple-600 transition-colors">
                  {t.name}
                </h4>
                <p className="text-gray-500 font-mono text-sm uppercase tracking-wide group-hover:text-gray-700 transition-colors">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button only for Home */}
      {limit && (
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 mt-20">
          <Button
            onClick={() => navigate("/testimonials")}
            className="font-mono bg-black text-white hover:bg-gray-800 px-8 py-6 text-sm transition-all duration-300 uppercase tracking-widest border border-black"
          >
            VIEW ALL LOGS
          </Button>
          <Button
            onClick={() => navigate("/testimonialsform")}
            className="font-mono bg-transparent border border-gray-400 text-black hover:border-purple-500 hover:text-white hover:bg-black px-8 py-6 text-sm transition-all duration-300 uppercase tracking-widest"
          >
            WRITE ENTRY
          </Button>
        </div>
      )}
    </section>
  );
}
